document.addEventListener("DOMContentLoaded", async () => {
  //ana bileşenler yüklenince çalışacak fonksiyon
  const user = getCurrentUser(); //kullanıcıyı alıyor

  if (!user) {
    console.error("Kullanıcı bilgisi alınamadı."); //kullanıcı yoksa hata veriyor

    return;
  }

  try {
    const tasks = await get("/api/tasks", {
      //kullanıcıya ait görevleri alıyor
      userId: user.id, //kullanıcı id sini gönderiyor
    });

    console.log("Analytics görevleri:", tasks); //konsola görevleri yazdırıyor

    updateCounters(tasks); //kullanıcıya ait görevleri sayıyor ve güncelliyor
  } catch (error) {
    console.error("Analytics görevleri alınamadı:", error);
  }
});

function updateCounters(tasks) {
  if (!Array.isArray(tasks)) {
    console.error("Görev verisi dizi değil:", tasks);
    return;
  }

  const totalTasks = tasks.length; //kaç görev olduğunu sayıyor

  const completedTasks = tasks.filter(
    // burada filte olarak kaç görev olduğunu sayıyor
    (task) => task.status === "Tamamlandı",
  ).length;

  const activeTasks = tasks.filter(
    //burada devam edenleri n uzunluğunu alıyorum
    (task) => task.status === "Devam Ediyor",
  ).length;

  const progressPercent =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0; //burada başarılan var ya onun yüzdesini almak için uykarıaaalığı tamamladıaları yüzde alıyorum

  $("#totalTaskCount").text(totalTasks);

  $("#completedTaskCount").text(completedTasks);

  $("#activeTaskCount").text(activeTasks);

  $("#progressPercent").text(progressPercent + "%");

  console.log("Analytics:", {
    totalTasks,
    completedTasks,
    activeTasks,
    progressPercent,
  });
}
async function loadWeeklyChart() {
  //burada haftalık görevleri alıyor ve grafiğe basıyor
  const user = getCurrentUser();
  if (!user) return;

  const tasks = await get("/api/tasks", {
    userId: user.id,
  });

  const now = new Date();

  const monday = new Date(now);
  const day = now.getDay() || 7; //haftanın kaçıncı günü olduğunu alıyor 0 pazar 1 pazartesi 2 salı 3 çarşamba 4 perşembe 5 cuma 6 cumartesi 7 pazar olark

  monday.setDate(now.getDate() - day + 1); //ilk günü alıyor
  monday.setHours(0, 0, 0, 0); //haftanın ilk günü saat 0 0 0 0 yapıyor

  const created = Array(7).fill(0); //haftanın hergünü için bun uayapyıt
  const completed = Array(7).fill(0);

  tasks.forEach((task) => {
    if (task.createdAt) {
      const date = new Date(task.createdAt);

      if (date >= monday && date <= now) {
        const index = (date.getDay() + 6) % 7; //günelrden birini seçiyor

        created[index]++; // seçilen görevin sayısnı bir atıırıyor
      }
    }

    if (task.status === "Tamamlandı") {
      const completedDate = task.completedAt || task.updatedAt;

      if (!completedDate) return;

      const date = new Date(completedDate);

      if (date >= monday && date <= now) {
        const index = (date.getDay() + 6) % 7;

        completed[index]++;
      }
    }
  });

  const todayIndex = (now.getDay() + 6) % 7;

  for (let i = todayIndex + 1; i < 7; i++) {
    created[i] = 0;
    completed[i] = 0;
  }

  new Chart(document.getElementById("myChart"), {
    type: "line",

    data: {
      labels: ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"],

      datasets: [
        {
          label: "Oluşturulan",
          data: created,
          borderColor: "#4f46e5",
          backgroundColor: "rgba(79,70,229,.12)",
          fill: true,
          tension: 0.4,
          borderWidth: 3,
        },

        {
          label: "Tamamlanan",
          data: completed,
          borderColor: "#10b981",
          tension: 0.4,
          borderWidth: 3,
        },
      ],
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        legend: {
          position: "top",
        },

        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y} görev`,
          },
        },
      },

      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
          },
        },

        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  });
}

loadWeeklyChart();

async function loadTaskStatusChart() {
  const user = getCurrentUser();
  if (!user) return;

  const tasks = await get("/api/tasks", { userId: user.id });

  const names = {
    Tamamlandı: "Tamamlanan",
    "Devam Ediyor": "Devam Eden",
    Bekliyor: "Bekleyen",
  };

  const count = tasks.reduce((a, t) => {
    a[t.status] = (a[t.status] || 0) + 1;
    return a;
  }, {});

  new Chart(document.getElementById("taskStatusChart"), {
    type: "doughnut",

    data: {
      labels: Object.keys(count).map((x) => names[x] || x),
      datasets: [
        {
          data: Object.values(count),
          backgroundColor: ["#10b981", "#4f46e5", "#f59e0b", "#ef4444"],
          borderWidth: 0,
        },
      ],
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "68%",

      plugins: {
        legend: {
          position: "bottom",
          labels: {
            usePointStyle: true,
          },
        },

        tooltip: {
          callbacks: {
            label: (c) => `${c.label}: ${c.parsed} görev`,
          },
        },
      },
    },
  });
}

loadTaskStatusChart();
async function loadProjectPerformanceChart() {
  const user = getCurrentUser();
  if (!user) return;

  const projects = await get("/api/projects", {
    userId: user.id,
  });

  const data = await Promise.all(
    projects.map(async (project) => {
      const tasks = await get("/api/tasks", {
        userId: user.id,
        projectId: project._id,
      });

      const total = tasks.length;

      const completed = tasks.filter(
        (task) => task.status === "Tamamlandı",
      ).length;

      return {
        name: project.title,
        total,
        completed,
        percent: total ? Math.round((completed / total) * 100) : 0,
        color: project.color || "#4f46e5",
      };
    }),
  );

  new Chart(document.getElementById("projectPerformanceChart"), {
    type: "bar",

    data: {
      labels: data.map((p) => p.name),

      datasets: [
        {
          label: "Tamamlanma Oranı",
          data: data.map((p) => p.percent),
          backgroundColor: data.map((p) => p.color),
          borderRadius: 8,
        },
      ],
    },

    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        legend: {
          display: false,
        },

        tooltip: {
          callbacks: {
            label: (c) => {
              const p = data[c.dataIndex];

              return `${p.completed}/${p.total} görev • %${p.percent}`;
            },
          },
        },
      },

      scales: {
        x: {
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: (value) => `%${value}`,
          },
        },

        y: {
          grid: {
            display: false,
          },
        },
      },
    },
  });
}

loadProjectPerformanceChart();

async function loadPriorityChart() {
  const user = getCurrentUser();
  if (!user) return;

  const tasks = await get("/api/tasks", { userId: user.id });

  tasks.priority = tasks.priority || "Normal";

  const count = tasks.reduce((a, t) => {
    a[t.priority] = (a[t.priority] || 0) + 1;
    return a;
  }, {});

  new Chart(document.getElementById("priorityChart"), {
    type: "pie",
    data: {
      labels: Object.keys(count),
      datasets: [
        {
          data: Object.values(count),

          backgroundColor: ["#585858", "#00eeff", "#ffa600", "#ff0000"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            usePointStyle: true,
          },
        },
        tooltip: {
          callbacks: {
            label: (c) => `${c.label}: ${c.parsed} görev`,
          },
        },
      },
    },
  });
}

loadPriorityChart();
