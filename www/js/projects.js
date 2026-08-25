//sabitleri başa koydum

const BADGE_CLASSES = {// burada da durumlara göre renkleri ayarladım
  Tamamlandı: "bg-success",
  "Devam Ediyor": "bg-warning text-dark",
  Bekliyor: "bg-secondary",
};

const PRIORITY_BADGES = { // burada da önceliklere göre renkleri ayarladım
  Düşük: "bg-secondary",
  Orta: "bg-info",
  Yüksek: "bg-warning text-dark",
  Kritik: "bg-danger",
};

const PROJECT_ICONS = { // burada da projelere göre ikonları ayarladım
  web: "fa-solid fa-globe",
  mobile: "fa-solid fa-mobile-screen",
  drone: "fa-solid fa-helicopter",
  rocket: "fa-solid fa-rocket",
};

const badgeClass = (status) => BADGE_CLASSES[status] || "bg-secondary"; // badgeclass fonksiyonu ile durumlara göre renkleri ayarladım
const priorityBadge = (priority) => PRIORITY_BADGES[priority] || "bg-secondary"; // prioritybadge fonksiyonu ile önceliklere göre renkleri ayarladım
const projectIcon = (icon) => PROJECT_ICONS[icon] || "fa-solid fa-folder";

// filtreeleme arama çubuğu falan ...
function refreshProjects() {
  const search = $("#searchbox").val().toLowerCase();
  const category = $("#categoryFilter").val();
  const priorityFilter = $("#stateFilter").val();
  const sort = $("#sortFilter").val();

  const priorityWeight = { Kritik: 4, Yüksek: 3, Orta: 2, Düşük: 1 };
  const cards = $(".project-card").get();

  cards.forEach((card) => {
    const $card = $(card);
    const text = $card.text().toLowerCase();
    const isVisible =
      text.includes(search) &&
      (!category || $card.data("category") === category) &&
      (!priorityFilter || $card.data("priority") === priorityFilter);

    $card.toggle(isVisible);
  });

  const visibleCards = $(".project-card:visible").get();

  if (sort) {
    visibleCards.sort((a, b) => {
      const pa = priorityWeight[$(a).data("priority")] || 0;
      const pb = priorityWeight[$(b).data("priority")] || 0;
      return sort === "Yüksek Öncelik-Düşük" ? pb - pa : pa - pb;
    });
    $("#projectList").append(visibleCards);
  }
}

$("#searchbox, #categoryFilter, #stateFilter, #sortFilter").on(
  "input change",
  refreshProjects,
);

// istatikleri buraya -*******
async function loadCount(url, elementId) {
  const user = getCurrentUser();

  if (!user) {
    $(elementId).text("0");
    return;
  }

  const data = await $.ajax({
    url,
    type: "GET",
    data: { userId: user.id },
  });

  $(elementId).text(data.length);
}

function updateStatistics(projects, tasks) {
  if (!projects) projects = [];

  if (!tasks) tasks = [];
  const totalProjects = projects.length;
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.status === "Tamamlandı").length;
  const progress =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  $("#totalProjectCount").text(totalProjects);
  $("#totalTaskCount").text(totalTasks);
  $("#completedTaskCount").text(completedTasks);
  $("#progressPercent").text(progress + "%");

  projects.forEach((project) => {
    const pTasks = tasks.filter((t) => t.projectId === project._id);
    const total = pTasks.length;
    const completed = pTasks.filter((t) => t.status === "Tamamlandı").length;
    const active = pTasks.filter((t) => t.status === "Devam Ediyor").length;
    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

    $("#taskCount-" + project._id).text(total);
    $("#completedCount-" + project._id).text(completed);
    $("#activeCount-" + project._id).text(active);
    $("#progress-" + project._id).text(percent + "%");
    $("#progressBar-" + project._id)
      .css("width", percent + "%")
      .attr("aria-valuenow", percent);
  });
}

async function loadProjects() {
  const user = getCurrentUser();

  if (!user) {
    $("#projectList").html(`
      <div class="col-12">
        <div class="alert alert-info text-center">

          <i class="fa-solid fa-user-lock fa-2x mb-3"></i>

          <h5>Misafir Modu</h5>

          <p>
            Projelerinizi görmek için giriş yapmalısınız.
          </p>

          <a href="/?page=login" class="btn btn-primary">

            Giriş Yap

          </a>

        </div>
      </div>
    `);

    updateStatistics([], []);

    return;
  }
  const [projects, tasks, template] = await Promise.all([
    get("/api/projects", { userId: user.id }),
    get("/api/tasks", { userId: user.id }),
    $.get("/templates/project-card.mustache"),
  ]);

  const html = projects
    .map((project) => {
      project.badgeClass = badgeClass(project.status);
      project.priorityClass = priorityBadge(project.priority);
      project.iconClass = projectIcon(project.icon);
      return Mustache.render(template, project);
    })
    .join("");

  $("#projectList").html(html);
  updateStatistics(projects, tasks);
}

loadProjects();
loadCount("/api/tasks", "#totalTaskCount");
loadCount("/api/projects", "#totalProjectCount");

let survey;
const projectsModal = new bootstrap.Modal(
  document.getElementById("projectModal"),
);
const myProjectsModal = new bootstrap.Modal(
  document.getElementById("myProjectsModal"),
);
const surveyContainer = document.getElementById("surveyContainer");

const projectsSurveyJson = {
  title: "Yeni Proje",
  showCompleteButton: true,
  completeText: "Kaydet",
  elements: [
    { type: "text", name: "title", title: "Proje Başlığı", isRequired: true },
    {
      type: "comment",
      name: "description",
      title: "Proje Açıklaması",
      isRequired: true,
    },
    {
      type: "dropdown",
      name: "category",
      title: "Kategori",
      isRequired: true,
      choices: [
        "Web",
        "Mobil",
        "Masaüstü",
        "Drone",
        "Yapay Zeka",
        "IoT",
        "Oyun",
        "Diğer",
      ],
    },
    {
      //bak burada elementleri veriyorum sadecde diyoru  bu text olucak bu işte ikon olucak falan sonr abak aşağı bak
      type: "imagepicker",
      name: "icon",
      title: "Proje İkonu",
      isRequired: true,
      imageFit: "contain",
      imageWidth: 80,
      imageHeight: 80,
      choices: [
        { value: "web", imageLink: "/images/web.png" },
        { value: "mobile", imageLink: "/images/mobile.png" },
        { value: "drone", imageLink: "/images/drone.png" },
        { value: "rocket", imageLink: "/images/rocket.png" },
      ],
    },
    {
      type: "dropdown",
      name: "priority",
      title: "Öncelik",
      isRequired: true,
      choices: ["Düşük", "Orta", "Yüksek", "Kritik"],
    },
    {
      type: "dropdown",
      name: "status",
      title: "Durum",
      isRequired: true,
      defaultValue: "Bekliyor",
      choices: ["Bekliyor", "Devam Ediyor", "Tamamlandı"],
    },
    {
      type: "text",
      inputType: "color",
      name: "color",
      title: "Tema Rengi",
      defaultValue: "#2563eb",
    },
    {
      type: "text",
      inputType: "date",
      name: "deadline",
      title: "Bitiş Tarihi",
    },
  ],
};

function openProjectsModal(data = {}) {
  if (!requireLogin()) return;
  surveyContainer.innerHTML = "";
  survey = new Survey.Model(projectsSurveyJson);
  data.color = data.color || "#2563eb";
  survey.data = data;
  survey.onComplete.add(saveProjects);
  survey.render(surveyContainer); //burada da render ediyorum yani ekran agetiriyorum bu verileri çekerek kullncı giriyor sonrasında
  projectsModal.show();
}

async function saveProjects({ data }) {
  const user = getCurrentUser();

  if (!user) return;

  data.userId = user.id;
  try {
    await post("/api/projects", data); //bka burada da veritabanın a gödneriyor ben mehemt hocaya bu yğzden demiştim mongo db nasıl entegre edicem diye kısa bir günklük kursal onu da hallettim
    projectsModal.hide();
    loadProjects();
    loadCount("/api/projects", "#totalProjectCount");
  } catch (err) {
    console.error(err);
  }
}

$("#newProjects").on("click", () => {
  if (!requireLogin()) return;

  openProjectsModal();
});
$(document).on("click", ".deleteProject", async function () {
  if (!requireLogin()) return;
  const card = $(this).closest(".project-card");
  const id = $(this).data("id");
  const title = card.find(".card-title").text();

  if (!confirm(`${title} silinsin mi?`)) return;

  try {
    await window.delete(`/api/projects/${id}`);
    card.remove();
    loadCount("/api/projects", "#totalProjectCount");
  } catch (err) {
    console.error(err);
  }
});

$(document).on("click", ".openProject", async function () {
  if (!requireLogin()) return;
  const id = $(this).data("id");
  localStorage.setItem("currentProjectId", id);
  const user = getCurrentUser();

  const [projects, tasks, taskTemplate] = await Promise.all([
    //hepsi verileri almak için bir söz bekliyor bu sırada program ahta avermiyor
    get("/api/projects", { userId: user.id }),
    get("/api/tasks", { userId: user.id }),
    $.get("/templates/task-card.mustache"),
  ]);

  const project = projects.find((p) => p._id === id);
  const projectTasks = tasks.filter((t) => t.projectId === id);

  $("#projectTitle").text(project.title);
  $("#projectDescription").text(project.description);

  const taskIcons = {
    Tamamlandı: "fa-solid fa-circle-check",
    "Devam Ediyor": "fa-solid fa-spinner",
    Bekliyor: "fa-regular fa-clock",
  };

  const html = projectTasks
    .map((task) => {
      //her biri için mustache şablonu olşutrudm um o yüzden map kullanım join de bunları neyile diziyi kesiceğimi belirten ifadededir.
      task.statusClass = badgeClass(task.status);
      task.priorityClass = priorityBadge(task.priority);
      task.iconClass = taskIcons[task.status] || "fa-solid fa-list-check";
      return Mustache.render(taskTemplate, task); //burada da render ediyor yani ekrana basıyor
    })
    .join("");

  $("#projectTaskList").html(html); //dizeyi göstermesini sağladım
  myProjectsModal.show();
});
