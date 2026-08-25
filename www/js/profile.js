let profileModal;

$(document).ready(function () {
  profileModal = new bootstrap.Modal(document.getElementById("profileModal"));

  // Sayfa açılır açılmaz localStorage'daki resmi göster
  const user = JSON.parse(localStorage.getItem("user")) || {};

  if (user.picture) {
    $("#profileImage").attr("src", user.picture);
    $("#profileAvatar").attr("src", user.picture);
    $("#avatarPreview").attr("src", user.picture);
  }

  // Profil Modalını Aç
  $(document).on("click", "#profileBtn", function (e) {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user")) || {};

    $("#profileUsername").text(user.username || "");
    $("#profileEmail").text(user.email || "");

    $("#profileUsernameInput").val(user.username);

    $("#profileEmailInput").val(user.email);

    if (user.picture) {
      $("#avatarPreview").attr("src", user.picture);
    }

    profileModal.show();
    loadProfileStatistics();
  });

  // Resim seçildiğinde önizleme
  $(document).on("change", "#avatarInput", function () {
    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
      $("#avatarPreview").attr("src", e.target.result);
    };

    reader.readAsDataURL(file);
  });
  $(document).on("click", "#saveProfile", async function () {
    const user = getCurrentUser();

    const username = $("#profileUsernameInput").val();

    const email = $("#profileEmailInput").val();

    const picture = $("#avatarPreview").attr("src");

    try {
      await put("/api/profile", {
        id: user.id,
        username,
        email,
        picture,
        focusTime: user.focusTime || 0,
      });

      user.username = username;
      user.email = email;
      user.picture = picture;

      localStorage.setItem("user", JSON.stringify(user));
      if ($("#profileModal").hasClass("show")) {
        loadProfileStatistics();
      }
      $("#profileUsername").text(username);
      $("#profileEmail").text(email);

      $("#profileAvatar").attr("src", picture);
      $("#profileImage").attr("src", picture);

      alert("Profil güncellendi.");
    } catch (err) {
      console.error(err);
    }
  });
  // Kaydet
  $(document).on("click", "#saveAvatar", function () {
    const file = $("#avatarInput")[0].files[0];

    if (!file) {
      alert("Lütfen bir resim seçiniz.");

      return;
    }

    const reader = new FileReader();

    reader.onload = async function (e) {
      const base64 = e.target.result;

      const user = JSON.parse(localStorage.getItem("user")) || {};

      try {
        await put("/api/profile", {
          id: user.id,
          username: user.username,
          email: user.email,
          picture: base64,
          focusTime: user.focusTime || 0,
        });
        user.picture = base64;

        localStorage.setItem("user", JSON.stringify(user));
        if ($("#profileModal").hasClass("show")) {
          loadProfileStatistics();
        }
        $("#profileImage").attr("src", base64);
        $("#profileAvatar").attr("src", base64);
        $("#avatarPreview").attr("src", base64);

        alert("Profil resmi başarıyla kaydedildi.");
      } catch (err) {
        console.error(err);

        alert("Profil resmi kaydedilemedi.");
      }
    };

    reader.readAsDataURL(file);
  });

  // Sil
  $(document).on("click", "#deleteAvatar", async function () {
    if (!confirm("Profil resmini silmek istediğinize emin misiniz?")) return;

    const user = JSON.parse(localStorage.getItem("user")) || {};

    try {
      await put("/api/profile", {
        id: user.id,
        username: user.username,
        email: user.email,
        picture: null,
        focusTime: user.focusTime || 0,
      });
      delete user.picture;

      localStorage.setItem("user", JSON.stringify(user));

      const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.email)}`;
      $("#profileImage").attr("src", defaultAvatar);
      $("#profileAvatar").attr("src", defaultAvatar);
      $("#avatarPreview").attr("src", defaultAvatar);

      alert("Profil resmi silindi.");
    } catch (err) {
      console.error(err);

      alert("Profil resmi silinemedi.");
    }
  });
});
function formatFocusTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours > 0) {
    return hours + " Saat " + minutes + " Dakika";
  }

  return minutes + " Dakika";
}

async function loadProfileStatistics() {
  const user = getCurrentUser();

  if (!user) return;

  try {
    const [tasks, projects] = await Promise.all([
      get("/api/tasks", {
        userId: user.id,
      }),

      get("/api/projects", {
        userId: user.id,
      }),
    ]);

    const profile = getCurrentUser();
    const completed = tasks.filter((t) => t.status === "Tamamlandı").length;

    $("#profileTaskCount").text(tasks.length);

    $("#profileCompletedTask").text(completed);

    $("#profileProjectCount").text(projects.length);

    $("#profileFocusTime").text(formatFocusTime(profile.focusTime || 0));
    $("#profileUsername").text(profile.username);

    $("#profileEmail").text(profile.email);

    $("#profileUsernameInput").val(profile.username);

    $("#profileEmailInput").val(profile.email);

    if (profile.picture) {
      $("#profileImage").attr("src", profile.picture);

      $("#profileAvatar").attr("src", profile.picture);

      $("#avatarPreview").attr("src", profile.picture);
    }

    localStorage.setItem("user", JSON.stringify(profile));
  } catch (err) {
    console.error(err);
  }
}
