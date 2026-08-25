function getCurrentUser() {
  // kullanıcıyı alıyor
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch (err) {
    console.error("User parse error:", err);
    localStorage.removeItem("user");
    return null;
  }
}
//buradaki commo js uygulamadki ortak yapılan işleri yapıyor
const isGuest = () => !getCurrentUser(); //burada kontorl eğer yapmadıysa misafre geçiyor

function requireLogin() {
  if (!isGuest()) return true;

  showToast("Bu özelliği kullanmak için giriş yapmalısınız."); //burada syafının login kısmları gösteriliyor
  setTimeout(() => (location.href = "/?page=login"), 1200);
  return false;
}

const apiRequest = async (method, url, data = {}) => {
  try {
    const methods = { GET: get, POST: post, PUT: put, DELETE: window.delete };
    return await methods[method.toUpperCase()](url, data);
  } catch (err) {
    console.error(`API Error [${url}]`, err);
    return null;
  }
};

async function addNotification(title, message, type = "info") {
  //bidirim ekliyor
  const user = getCurrentUser();
  if (!user) return;

  await apiRequest("POST", "/api/notifications", {
    userId: user.id,
    title,
    message,
    type,
  });
  loadNotifications();
}

async function loadNotifications() {
  //bidlirimi ekrana geitiroyr
  const user = getCurrentUser();
  const $list = $("#notificationList");

  if (!user) {
    $("#notificationCount").hide();
    $list.html(
      `<div class="text-center p-4 text-muted">Misafir modunda bildirim bulunmamaktadır.</div>`,
    );
    return;
  }

  const notifications = await apiRequest("GET", "/api/notifications", {
    userId: user.id,
  });
  if (notifications) renderNotifications(notifications);
}

function renderNotifications(data) {
  //ekrana basıyor
  const unreadCount = data.filter((n) => !n.isRead).length;

  $("#notificationCount")
    .toggle(unreadCount > 0)
    .text(unreadCount);

  if (!data.length) {
    $("#notificationList").html(`
      <div class="text-center p-4">
        <i class="fa-regular fa-bell-slash fa-2x text-secondary mb-2"></i>
        <p class="mb-0 text-muted">Bildirim bulunmuyor.</p>
      </div>`);
    return;
  }

  const html = data
    .map(
      (n) => `
      <div class="notification-item ${n.isRead ? "" : "unread"}" data-id="${n._id}">
        <div class="notification-title">${n.title}</div>
        <div class="notification-message">${n.message}</div>
      </div>`,
    )
    .join("");

  $("#notificationList").html(html);
}

const handleAuthAction = (endpoint, method, dataBuilder) =>
  async function () {
    if (!requireLogin()) return;
    const user = getCurrentUser();
    await apiRequest(method, endpoint, dataBuilder(this, user));
    loadNotifications();
  };

$(document).on(
  //burada fetchler sayesinde bildirimleri okuma ve silme işlemleri yapılıyor
  "click",
  ".notification-item",
  handleAuthAction("/api/notifications/read", "PUT", (el) => ({
    id: $(el).data("id"),
  })),
);
$(document).on(
  "click",
  "#clearNotifications",
  handleAuthAction("/api/notifications", "DELETE", (_, user) => ({
    //bu butona basınca gerçekleşiyor
    userId: user.id,
  })),
);
$(document).on(
  "click",
  "#readAllBtn", //bu butona tıklanınc hepsinin read blouğunu true yap
  handleAuthAction("/api/notifications/read-all", "PUT", (_, user) => ({
    userId: user.id,
  })),
);

document.addEventListener("DOMContentLoaded", () => {
  const user = getCurrentUser();
  applyTheme();
  loadNotifications();

  const menu = document.getElementById("accountMenu");
  const name = document.getElementById("profileName");
  const avatar = document.getElementById("profileAvatar");

  if (!menu || !name || !avatar) return;

  name.textContent = user ? user.email : "Misafir";
  avatar.src = user
    ? user.picture ||
      `https://ui-avatars.com/api/?name=${encodeURIComponent(user.email)}`
    : "https://ui-avatars.com/api/?name=Guest";

  menu.innerHTML = user
    ? `
      <li><a class="dropdown-item" href="#" id="profileBtn"><i class="fa-solid fa-user me-2"></i>Profilim</a></li>
      <li><a class="dropdown-item" href="/settings"><i class="fa-solid fa-gear me-2"></i>Ayarlar</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item text-danger" href="#" id="logoutBtn"><i class="fa-solid fa-right-from-bracket me-2"></i>Çıkış Yap</a></li>`
    : `
      <li><a class="dropdown-item" href="/?page=login"><i class="fa-solid fa-right-to-bracket me-2"></i>Giriş Yap</a></li>
      <li><a class="dropdown-item" href="/?page=register"><i class="fa-solid fa-user-plus me-2"></i>Kayıt Ol</a></li>`;

  if (user) {
    document.getElementById("logoutBtn").onclick = (e) => {
      e.preventDefault();
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      location.reload();
    };
  }
}); //bu kısım komple hsap yöneimi ile alakalı

let googleCallback = null; //google kısmında ise bir eturn ilk başta logini google ile yapmadıysa null
let googleInitialized = false;

function initGoogle(callback) {
  googleCallback = callback;

  if (!window.google || !google.accounts || !google.accounts.id) {
    //google ekranı açılmazsa hata vermesin
    console.error("Google Identity Services yüklenmemiş.");

    return;
  }

  if (!googleInitialized) {
    //bu firebase üsütünden bağlandığımı clinet id
    google.accounts.id.initialize({
      client_id:
        "112224874996-ciupnoe143bg4klr2ogtu5hdtaeofpjd.apps.googleusercontent.com",
      callback: function (response) {
        if (typeof googleCallback === "function") {
          googleCallback(response);
        } else {
          console.error("Google callback bulunamadı.");
        }
      },
    });

    googleInitialized = true;

    console.log("Google Identity başlatıldı.");
  } else {
    console.log("Google Identity zaten başlatılmış. Callback güncellendi.");
  }
}

function renderGoogleButton(id, text) {
  const container = document.getElementById(id);

  if (!container) {
    console.error("Google buton alanı bulunamadı:", id);

    return;
  }

  if (!window.google || !google.accounts || !google.accounts.id) {
    console.error("Google Identity Services hazır değil.");

    return;
  }

  container.innerHTML = "";

  const isDark =
    document.documentElement.getAttribute("data-bs-theme") === "dark";

  google.accounts.id.renderButton(
    container,

    {
      theme: isDark ? "filled_black" : "outline",

      size: "large",

      width: 350,

      text: text,

      shape: "rectangular",

      logo_alignment: "left",
    },
  );

  console.log("Google butonu oluşturuldu:", id);
}

function applyTheme() {
  const theme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-bs-theme", theme);
}
