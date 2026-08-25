let taskTable;
let survey;
let currentProjectId = null;
const taskModal = new bootstrap.Modal(document.getElementById("taskModal"));
const surveyContainer = document.getElementById("surveyContainer");

const taskSurveyJson = {
  showCompleteButton: true,
  completeText: "Kaydet",
  elements: [
    { type: "text", name: "title", title: "Görev Başlığı", isRequired: true },
    { type: "comment", name: "description", title: "Açıklama" },
    {
      type: "dropdown",
      name: "priority",
      title: "Öncelik",
      choices: ["Düşük", "Orta", "Yüksek", "Kritik"],
      defaultValue: "Orta",
    },
    {
      type: "dropdown",
      name: "projectId",
      title: "Proje",
      choices: [],
    },
    {
      type: "dropdown",
      name: "status",
      title: "Durum",
      choices: ["Bekliyor", "Devam Ediyor", "Tamamlandı"],
      defaultValue: "Bekliyor",
    },
    { type: "text", inputType: "date", name: "dueDate", title: "Bitiş Tarihi" },
  ],
};
async function openTaskModal(data = {}) {
  const user = getCurrentUser(); //buraları her yerde değiştiriyoruz çünkü buralar localStorage'dan alıyor ve localStorage'da token yoksa hata veriyor. O yüzden getCurrentUser() fonksiyonunu kullanıyoruz.

  if (!user) {
    alert("Görev oluşturmak için giriş yapmalısınız.");
    return;
  }
  const projects = await get("/api/projects", {
    userId: user.id,
  });
  surveyContainer.innerHTML = "";

  survey = new Survey.Model(taskSurveyJson);
  survey.getQuestionByName("projectId").choices = projects.map((project) => ({
    value: project._id,
    text: project.title,
  }));
  survey.data = data;
  survey.onComplete.add(saveTask);

  survey.render(surveyContainer);
  taskModal.show();
}
async function saveTask({ data }) {
  const user = getCurrentUser();

  if (!user) {
    alert("Görev kaydetmek için giriş yapmalısınız.");
    return;
  }
  data.userId = user.id;
  console.log(data);
  try {
    if (editingTask) {
      await put(`/api/tasks/${editingTask._id}`, data); //**************** burası  */
      if (data.status === "Tamamlandı") {
        addNotification("Görev Tamamlandı", `${data.title} tamamlandı.`);
      }
      editingTask = null;
    } else {
      await post("/api/tasks", data);
      addNotification("Yeni Görev", `${data.title} oluşturuldu.`);
    }

    taskModal.hide();
    taskTable.destroy();
    await loadTaskTable();
  } catch (err) {
    console.log(err);
  }
}
taskModal._element.addEventListener("hidden.bs.modal", () => {
  survey?.dispose();
  survey = null;
  editingTask = null;
  surveyContainer.innerHTML = "";
});
$("#newTask").on("click", () => {
  if (!requireLogin()) return;

  openTaskModal();
});
function badge(value, colors) {
  return `<span class="badge ${colors[value] || "bg-secondary"}">${value}</span>`;
}

async function loadTaskTable() {
  const user = getCurrentUser();

  if (!user) {
    $("#taskTable").DataTable({
      // table gösterm e veoluturmaaaaaaa
      destroy: true,
      data: [],
      language: {
        url: "https://cdn.datatables.net/plug-ins/2.3.2/i18n/tr.json",
        emptyTable: "Görevleri görmek için giriş yapınız.",
      },
    });

    $("#totalTaskCount").text("0");

    return;
  }
  const tasks = await get("/api/tasks", {
    userId: user.id,
  });

  const projects = await get("/api/projects", {
    userId: user.id,
  });

  const projectMap = {};

  projects.forEach((project) => {
    projectMap[project._id] = project.title;
  });

  tasks.forEach((task) => {
    task.projectName = projectMap[task.projectId] || "-";
  });
  taskTable = $("#taskTable").DataTable({
    destroy: true,

    data: tasks,

    language: {
      url: "https://cdn.datatables.net/plug-ins/2.3.2/i18n/tr.json",
    },

    columns: [
      { data: "title" },

      {
        data: "projectName",
        defaultContent: "-",
      },
      {
        data: "status",
        render: (d) =>
          badge(d, {
            Tamamlandı: "bg-success",
            "Devam Ediyor": "bg-warning text-dark",
            Bekliyor: "bg-secondary",
          }),
      },

      {
        data: "priority",
        render: (d) =>
          badge(d, {
            Kritik: "bg-danger",
            Yüksek: "bg-warning text-dark",
            Orta: "bg-info",
            Düşük: "bg-secondary",
          }),
      },

      {
        data: "dueDate",
        defaultContent: "-",
      },

      {
        data: null,
        orderable: false,
        render: () => `
          <button class="btn btn-warning btn-sm editTask">
            <i class="fa-solid fa-pen"></i>
          </button>

          <button class="btn btn-danger btn-sm deleteTask ms-1">
            <i class="fa-solid fa-trash"></i>
          </button>
          <button class="btn btn-success btn-sm openTask ms-1">
              <i class="fa-solid fa-circle-info"></i>
          </button>
          <button class="btn btn-primary btn-sm completeTask ms-1">
              <i class="fa-solid fa-circle-check"></i>        
          </button>
        
        `,
      },
    ],
    drawCallback: function () {
      $("#totalTaskCount").text(this.api().rows().count());
    },
  });
}

loadTaskTable();
$("#taskTable tbody").on("click", ".deleteTask", async function () {
  if (!requireLogin()) return;
  const task = taskTable.row($(this).closest("tr")).data();

  console.log(task);

  if (!confirm(`${task.title} silinsin mi?`)) return;

  try {
    const result = await window.delete(`/api/tasks/${task._id}`);
    addNotification("Görev Silindi", `${task.title} silindi.`);
    const projectId = localStorage.getItem("currentProjectId");

    if (projectId) {
      $(".openProject[data-id='" + projectId + "']").click();
    }
    console.log(result);
    taskTable.destroy();
    await loadTaskTable();
  } catch (err) {
    console.error(err);
  }
});

let editingTask = null;

$("#taskTable tbody").on("click", ".editTask", function () {
  if (!requireLogin()) return;
  const task = taskTable.row($(this).closest("tr")).data();

  editingTask = task;

  openTaskModal(task);
});

function updateTaskCount() {
  $("#totalTaskCount").text(taskTable.rows().count());
}
async function loadTopStatistics() {
  const user = getCurrentUser();

  if (!user) {
    $("#topTaskCount").text("0");
    $("#topProgressCount").text("0");
    $("#todayDeadlineCount").text("0");

    return;
  }
  const tasks = await get("/api/tasks", {
    userId: user.id,
  });

  $("#topTaskCount").text(tasks.length);

  const progressCount = tasks.filter((t) => t.status === "Devam Ediyor").length;

  $("#topProgressCount").text(progressCount);

  const today = new Date().toISOString().slice(0, 10);

  const todayCount = tasks.filter((t) => {
    if (!t.dueDate) return false;

    return t.dueDate.slice(0, 10) === today;
  }).length;

  $("#todayDeadlineCount").text(todayCount);
}

loadTopStatistics();

const taskModal2 = new bootstrap.Modal(document.getElementById("opentaskinfo"));

$(document).on("click", ".openTask", function () {
  $("#infoDescription").text(
    taskTable.row($(this).parents("tr")).data().description,
  );

  taskModal2.show();
});
$(document).on("click", ".completeTask", async function () {
  const $tr = $(this).closest("tr");
  const task = taskTable.row($tr).data();

  if (task.status === "Tamamlandı") {
    return;
  }

  task.status = "Tamamlandı";

  try {
    await put(`/api/tasks/${task._id}`, task);
    taskTable.row($tr).data(task).draw(false);
  } catch (error) {
    console.error("Güncelleme hatası:", error);
  }

  alert("görev tamamlandı aferin !!");
});
