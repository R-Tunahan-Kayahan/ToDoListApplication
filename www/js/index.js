const params = new URLSearchParams(window.location.search);
const page = params.get("page");

switch (page) {
  case "register":
    loadRegisterPage();
    break;

  case "resetpassword":
    loadResetPasswordPage();
    break;

  case "newpassword":
    loadNewPasswordPage();
    break;

  case "login":
    loadLoginPage();
    break;
  case "settings":
    loadSettingsPage();
    break;

  case "calendar":
    loadCalendarPage();
    break;

  default:
    window.location.href = "/dashboard";
    break;
}
function loadCalendarPage() {
  fetch("/calendar")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("app").innerHTML = html;

      initCalendar();
    })
    .catch((err) => {
      console.error("Calendar yükleme hatası:", err);
    });
}
function loadLoginPage() {
  fetch("/login")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("app").innerHTML = html;
      initLoginSurvey();
    });
}

function loadResetPasswordPage() {
  fetch("/resetpassword")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("app").innerHTML = html;
      initResetPasswordSurvey();
    });
}

function loadRegisterPage() {
  fetch("/register")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("app").innerHTML = html;
      initRegisterSurvey();
    });
}

function loadNewPasswordPage() {
  fetch("/newpassword")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("app").innerHTML = html;
      initResetMailSurvey();
    });
}

function loadSettingsPage() {
  fetch("/settings")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("app").innerHTML = html;

      setTimeout(() => {
        initHelpSurvey();
      }, 0);
    });
}
document.addEventListener("click", function (e) {
  if (e.target.id === "loginLink") {
    e.preventDefault();
    loadLoginPage();
    return;
  }

  if (e.target.id === "registerLink") {
    e.preventDefault();
    loadRegisterPage();
    return;
  }

  if (e.target.id === "forgotPasswordLink") {
    e.preventDefault();
    loadResetPasswordPage();
    return;
  }
});

function showToast(message) {
  const body = document.getElementById("toastMessage");

  if (!body) {
    console.error("Toast bulunamadı.");
    return;
  }

  body.textContent = message;

  const toast = new bootstrap.Toast(document.getElementById("liveToast"));

  toast.show();
}
