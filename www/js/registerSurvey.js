console.log("registerSurvey.js çalıştı");

const registerSurveyJSON = {
  title: "Kayıt Ol",

  showQuestionNumbers: "off",

  showCompletedPage: false,

  completeText: "Kayıt Ol",

  elements: [
    {
      name: "username",

      type: "text",

      title: "Adınız",

      isRequired: true,
    },

    {
      name: "email",

      type: "text",

      title: "E-Mail",

      inputType: "email",

      isRequired: true,
    },

    {
      name: "password",

      type: "text",

      title: "Şifre",

      inputType: "password",

      isRequired: true,
    },
  ],
};

function initRegisterSurvey() {
  console.log("Register Survey başlatılıyor...");

  const survey = new Survey.Model(registerSurveyJSON);

  const container = document.getElementById("registerSurvey");

  if (!container) {
    console.error("registerSurvey elementi bulunamadı.");

    return;
  }

  survey.render(container);

  survey.onComplete.add(async function (sender) {
    try {
      const data = sender.data;

      console.log("Register verisi:", data);

      const result = await post("/api/register", data);

      console.log("Register API:", result);

      if (!result || !result.success) {
        showToast(result?.message || "Kayıt başarısız.");

        return;
      }

      showToast("Kayıt başarılı. Giriş sayfasına yönlendiriliyorsunuz...");

      setTimeout(() => {
        loadLoginPage();
      }, 1200);
    } catch (error) {
      console.error("REGISTER HATASI:", error);

      showToast("Sunucuya bağlanılamadı.");
    }
  });

  const googleRegisterButton = document.getElementById("googleRegisterBtn");

  if (googleRegisterButton) {
    googleRegisterButton.addEventListener("click", handleGoogleRegister);
  } else {
    console.warn("googleRegisterBtn bulunamadı.");
  }
}

async function handleGoogleRegister() {
  try {
    console.log("[Google Register] Başlatılıyor...");

    const result = await window.firebaseGoogleLogin();

    console.log("[Google Register] Sonuç:", result);

    if (!result || !result.success) {
      showToast(result?.message || "Google ile kayıt başarısız.");

      return;
    }

    localStorage.setItem("token", result.token);

    localStorage.setItem("user", JSON.stringify(result.user));

    console.log(
      "[Google Register] Hesap oluşturuldu ve oturum açıldı:",
      result.user,
    );

    window.location.href = "/dashboard";
  } catch (error) {
    console.error("[Google Register] Hata:", error);

    showToast(error.message || "Google ile kayıt sırasında hata oluştu.");
  }
}
