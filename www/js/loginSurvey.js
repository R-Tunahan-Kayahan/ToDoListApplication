console.log("loginSurvey.js çalıştı");

const surveyJson = {
  title: "Giriş Yap",

  showQuestionNumbers: "off",

  showCompletedPage: false,

  completeText: "Giriş Yap",

  elements: [
    {
      type: "text",

      name: "email",

      title: "E-Mail",

      inputType: "email",

      isRequired: true,
    },

    {
      type: "text",

      name: "password",

      title: "Şifre",

      inputType: "password",

      isRequired: true,
    },
  ],
};

function initLoginSurvey() {
  console.log("Login Survey başlatılıyor...");

  const survey = new Survey.Model(surveyJson);

  const container = document.getElementById("loginSurvey");

  if (!container) {
    console.error("loginSurvey elementi bulunamadı.");

    return;
  }

  survey.render(container);

  survey.onComplete.add(async function (sender) {
    try {
      console.log("Normal login verisi:", sender.data);

      const result = await post("/api/login", sender.data);

      console.log("Normal Login API:", result);

      if (!result || !result.success) {
        showToast(result?.message || "Giriş başarısız.");

        return;
      }

      localStorage.setItem("token", result.token);

      localStorage.setItem("user", JSON.stringify(result.user));

      window.location.href = "/dashboard";
    } catch (error) {
      console.error("LOGIN HATASI:", error);

      showToast("Sunucu hatası oluştu.");
    }
  });

  const googleButton = document.getElementById("googleLoginBtn");

  if (googleButton) {
    googleButton.addEventListener("click", handleGoogleLogin);
  } else {
    console.warn("googleLoginBtn bulunamadı.");
  }
}

async function handleGoogleLogin() {
  try {
    console.log("[Google Login] Başlatılıyor...");

    const result = await window.firebaseGoogleLogin();

    console.log("[Google Login] Sonuç:", result);

    if (!result || !result.success) {
      showToast(result?.message || "Google ile giriş başarısız.");

      return;
    }

    localStorage.setItem("token", result.token);

    localStorage.setItem("user", JSON.stringify(result.user));

    console.log("[Google Login] Oturum açıldı:", result.user);

    window.location.href = "/dashboard";
  } catch (error) {
    console.error("[Google Login] Hata:", error);

    showToast(error.message || "Google ile giriş sırasında hata oluştu.");
  }
}
