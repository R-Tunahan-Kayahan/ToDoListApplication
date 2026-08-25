document.addEventListener("DOMContentLoaded", async () => {
  const calendarEl = document.getElementById("taskCalendar");
  const projectEl = document.getElementById("calendarProjectLegend");

  if (!calendarEl) return;

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = user.id || user._id;

  if (!userId) return;

  try {
    const [taskResponse, projectResponse] = await Promise.all([
      //burada kullnıcın tüm bilgilerini alıyor
      fetch(`/api/tasks?userId=${encodeURIComponent(userId)}`),
      fetch(`/api/projects?userId=${encodeURIComponent(userId)}`),
    ]);

    if (!taskResponse.ok || !projectResponse.ok) {
      //buradaki ok bool değerinde  true dönerse veri alaımaanı anlamaına geliyor
      throw new Error("Veriler alınamadı.");
    }

    const taskResult = await taskResponse.json(); //response sonuçlarıaı değişkene atıyorum
    const projectResult = await projectResponse.json();

    const tasks = Array.isArray(taskResult) //göevleri  filtreleme yapıyorm
      ? taskResult
      : taskResult.data || taskResult.tasks || [];

    const projects = Array.isArray(projectResult)
      ? projectResult
      : projectResult.data || projectResult.projects || [];

    const projectMap = {};

    projects.forEach((project) => {
      projectMap[String(project._id)] = project;
    });

    const events = tasks
      .filter((task) => task.dueDate)
      .map((task) => {
        const project = projectMap[String(task.projectId)];

        const color = project?.color || "#4f46e5"; //kendi reng varsa onu ekle yoksa ototmaik mavi olsun fadsasdsgf

        return {
          id: String(task._id || task.id),
          title: task.title || "Görev",
          start: task.dueDate,
          backgroundColor: color,
          borderColor: color,

          extendedProps: {
            //burası da roje bşlgilerini tutuyor zaten
            projectName: project?.title || "Projesiz",

            description: task.description || "",

            priority: task.priority || "Orta",

            status: task.status || "Bekliyor",
          },
        };
      });

    const calendar = new FullCalendar.Calendar(calendarEl, {
      locale: "tr",
      initialView: "dayGridMonth",
      firstDay: 1,
      height: "auto",
      dayMaxEvents: true,

      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,listWeek",
      },

      buttonText: {
        today: "Bugün",
        month: "Ay",
        week: "Hafta",
        list: "Liste",
      },

      events: events,

      eventClick: function (info) {
        showTask(info.event);
      },
    });

    calendar.render();

    projectEl.innerHTML = projects
      .map((project) => {
        const count = tasks.filter(
          (task) => String(task.projectId) === String(project._id),
        ).length;

        const color = project.color || "#4f46e5";
        //burada da proje karltını verdim mustache içerisinde de vebliridim ama burada daha dinamik ve eliin atında oluyor
        return ` 
                <div
                    class="calendar-project-card"
                    style="--project-color:${color}">

                    <div class="calendar-project-color"></div>

                    <div class="calendar-project-info">

                        <strong>
                            ${project.title || "Proje"}
                        </strong>

                        <span>
                            ${count} görev
                        </span>

                    </div>

                </div>
            `;
      })
      .join(""); //yana yana getir bunları
  } catch (error) {
    console.error("Takvim hatası:", error);
  }
});

function showTask(event) {
  //görevleri burada gösteriyorum her birin in ısd si var ne olsa
  const data = event.extendedProps || {};

  const title = document.getElementById("calendarTaskTitle");

  const project = document.getElementById("calendarTaskProject");

  const date = document.getElementById("calendarTaskDate");

  const priority = document.getElementById("calendarTaskPriority");

  const status = document.getElementById("calendarTaskStatus");

  const description = document.getElementById("calendarTaskDescription");

  if (title) title.textContent = event.title || "Görev";

  if (project) project.textContent = data.projectName || "Projesiz";

  if (date)
    date.textContent = event.start
      ? event.start.toLocaleDateString("tr-TR")
      : "-";

  if (priority) priority.textContent = data.priority || "Orta";

  if (status) status.textContent = data.status || "Bekliyor";

  if (description)
    description.textContent = data.description || "Açıklama bulunmuyor.";

  const modal = document.getElementById("calendarTaskModal");

  if (!modal) return;

  bootstrap.Modal.getOrCreateInstance(modal).show(); //modal gösteriyor buradada
}
