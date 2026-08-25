import { myData } from "/data/exampleData.js";

async function loadRecentTasks() {
  //son görevler kısmı
  const user = getCurrentUser();

  if (!user) {
    $("#recentTasksBody").html(` //burası misafir için
    <tr>
      <td colspan="5" class="text-center text-muted py-4">
        Son görevleri görmek için giriş yapınız.
      </td>
    </tr>
  `);
    return;
  }
  try {
    let tasks = await get("/api/tasks/recent", {
      userId: user.id,
    });

    tasks = tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); //buradaki date kullanama amacım yeni son görevlerden 3 ünü basıyorum

    tasks = tasks.slice(0, 3);

    let html = "";

    const priorityColor = {
      Düşük: "bg-secondary",
      Orta: "bg-info",
      Yüksek: "bg-warning text-dark",
      Kritik: "bg-danger",
    };

    const statusColor = {
      Bekliyor: "bg-secondary",
      "Devam Ediyor": "bg-warning text-dark",
      Tamamlandı: "bg-success",
    };

    tasks.forEach((task) => {
      //burası da son görevleri ekrana basıyor
      html += `
            <div class="recent-task">

                <div class="task-info">
                    <div class="task-title">
                        <i class="fa-solid fa-list-check text-primary"></i>
                        ${task.title}
                    </div>

                    <div class="task-desc">
                        ${task.description || "-"}
                    </div>
                </div>

                <div class="task-status">
                    <span class="badge ${statusColor[task.status]}">
                        ${task.status}
                    </span>
                </div>

                <div class="task-priority">
                    <span class="badge ${priorityColor[task.priority]}">
                        ${task.priority}
                    </span>
                </div>

                <div class="task-date">
                    ${new Date(task.createdAt).toLocaleDateString("tr-TR")}
                </div>

            </div>`;
    });

    $("#recentTasksBody").html(html);
  } catch (err) {
    console.error(err);
  }
}

loadRecentTasks();

async function loadCount(url, elementId) {
  //burası da görev ve proje sayısını ekrana basıyor
  const user = getCurrentUser();

  if (!user) {
    //kisem giriş yaapmadıysa defult 0 oluyor
    $(elementId).text("0");
    return;
  }
  const data = await $.ajax({
    //get ile veri tabanından çağrıyor
    url,
    type: "GET",
    data: {
      userId: user.id,
    },
  });

  $(elementId).text(data.length);
}
loadCount("/api/tasks", ".taskcountt"); //ver burada o conitner sınıflarının çini dolduruyorum
loadCount("/api/projects", ".projectscounter");

async function loadactivetasks(url, elementId) {
  //devam eden görevler
  const user = getCurrentUser();

  if (!user) {
    $(elementId).text("0");
    return;
  }
  const data = await $.ajax({
    url,
    type: "GET",
    data: {
      userId: user.id,
    },
  });

  const progressCount = data.filter((t) => t.status === "Devam Ediyor").length;

  $(elementId).text(progressCount);
}

loadactivetasks("/api/tasks", "#activeTaskCount");
loadactivetasks("/api/tasks", "#activeTaskCount");

async function loadTopStatisticsDashboard() {
  const user = getCurrentUser();

  if (!user) {
    $("#activeTaskCount").text("0");
    $("#todayDeadlineCount").text("0");

    return;
  }
  const tasks = await get("/api/tasks", {
    userId: user.id,
  });

  const progressCount = tasks.filter((t) => t.status === "Devam Ediyor").length;

  $("#activeTaskCount").text(progressCount);

  const today = new Date().toISOString().slice(0, 10);

  const todayCount = tasks.filter((t) => {
    if (!t.dueDate) return false;

    return t.dueDate.slice(0, 10) === today;
  }).length;

  $("#todayDeadlineCount").text(todayCount);
}

loadTopStatisticsDashboard();

async function loadAI() {
  const user = getCurrentUser();

  if (!user) {
    $("#aiCard").html(`
    <div class="text-center p-4">
      <i class="fa-solid fa-user-lock fa-2x text-secondary mb-3"></i>

      <h6>Misafir Modu</h6>

      <p class="text-muted">
        AI analizlerini görmek için giriş yapın.
      </p>

      <a href="/?page=login" class="btn btn-primary">
        Giriş Yap
      </a>
    </div>
  `);

    return;
  } //burası da ai kısmı
  $("#aiCard").html(` 
        <div class="ai-loading text-center">

            <div class="spinner-border text-primary mb-3"></div>

            <p>AI analiz ediyor...</p>

        </div>
    `);

  try {
    const ai = await get("/api/ai-dashboard");

    $("#aiCard").html(`

            <div class="ai-advisor-header">

                 AI yardımcısı

            </div>

            <div class="ai-advisor-body">

                <div class="ai-item">

                    <i class="fa-solid fa-chart-line text-primary"></i>

                    <div>

                        <strong>Analiz</strong>

                        <p>${ai.analysis}</p>

                    </div>

                </div>

                <div class="ai-item">

                    <i class="fa-solid fa-lightbulb text-warning"></i>

                    <div>

                        <strong>Öneri</strong>

                        <p>${ai.recommendation}</p>

                    </div>

                </div>

                <div class="ai-item">

                    <i class="fa-solid fa-calendar-check text-success"></i>

                    <div>

                        <strong>Bugün</strong>

                        <p>${ai.today}</p>

                    </div>

                </div>

            </div>



        `);
  } catch (err) {
    $("#aiCard").html(`

            <div class="text-center">

                <i class="fa-solid fa-circle-exclamation text-danger fa-2x mb-3"></i>

                <p>AI verisi alınamadı.</p>

                <button
                    class="btn btn-outline-primary mt-3"
                    onclick="loadAI()">

                    Tekrar Dene

                </button>

            </div>

        `);

    console.error(err);
  }
}

loadAI();

async function randomExample() {
  const randomIndex = Math.floor(Math.random() * myData.length);
  return myData[randomIndex].author + " - " + myData[randomIndex].quote;
}

async function Loadexamples() {
  document.getElementById("example1").innerHTML = await randomExample();
  document.getElementById("example2").innerHTML = await randomExample();
  document.getElementById("example3").innerHTML = await randomExample();
}
Loadexamples();

async function globalSearch() {
  const query = $("#searchForm").val().trim().toLowerCase();
  const results = $("#searchResults");

  results.empty();

  if (!query) return;

  const user = getCurrentUser();
  if (!user) return; //misafir için

  try {
    const [projects, tasks] = await Promise.all([
      //paralel olark alıyoruz promise bu amaçla kullandım //birini slip diğerine geçince ediğeride otomatik yükelsnin diyedir
      get("/api/projects", { userId: user.id }),
      get("/api/tasks", { userId: user.id }),
    ]);

    const projectsFound = projects.filter((p) =>
      `${p.title || ""} ${p.description || ""} ${p.category || ""} `
        .toLowerCase()
        .includes(query),
    );

    const tasksFound = tasks.filter((t) =>
      `${t.title || ""} ${t.description || ""} ${t.priority || ""} ${t.status || ""}`
        .toLowerCase()
        .includes(query),
    );

    if (!projectsFound.length && !tasksFound.length) {
      results.html(`
                <div class="search-empty">
                    Sonuç bulunamadı.
                </div>
            `);
      return;
    }
    results.html(` 
            <div class="search-header">
                <span>Arama sonuçları</span>
                <button type="button" id="closeSearch">×</button>
            </div>

            <div class="search-list"></div>
        `);

    const list = $(".search-list");

    projectsFound.forEach((project) => {
      list.append(`
                <div class="search-item">
                    <strong>${project.title}</strong>
                    <small>Proje</small>
                </div>
            `);
    });

    tasksFound.forEach((task) => {
      list.append(`
                <div class="search-item">
                    <strong>${task.title}</strong>
                    <small>${task.priority || "Öncelik Yok"}</small>
                    <small>Görev</small>
                </div>
            `);
    });
  } catch (err) {
    console.error("Global search:", err);
  }
}

$("#searchForm").on("input", globalSearch); //buda bsınca gelsin hep açık durmasın sadasdfs

$(document).on("click", "#closeSearch", function () {
  //sile yapsın
  $("#searchResults").empty();
  $("#searchForm").val("");
});
