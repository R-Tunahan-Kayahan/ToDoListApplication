const resetMailSurveyJSON = {
  title: "Yeni Şifre Oluştur",

  showQuestionNumbers: "off",
  showCompletedPage: false,
  completeText: "Şifreyi Güncelle",

  elements: [
    {
      type: "text",
      name: "password",
      title: "Yeni Şifre",
      inputType: "password",
      isRequired: true,
      minLength: 8,
    },
    {
      type: "text",
      name: "confirmPassword",
      title: "Yeni Şifre Tekrar",
      inputType: "password",
      isRequired: true,
    },
  ],
};

function initResetMailSurvey() {
  console.log("initResetMailSurvey çalıştı");

  const survey = new Survey.Model(resetMailSurveyJSON);

  survey.render(document.getElementById("newpasswordSurvey"));

  survey.onComplete.add(async function (sender) {
    const surveyData = sender.data;

    if (surveyData.password !== surveyData.confirmPassword) {
      showToast("Şifreler uyuşmuyor.");
      return;
    }

    try {
      const token = new URLSearchParams(window.location.search).get("token");

      const result = await patch("/api/resetpassword", {
        token: token,
        password: surveyData.password,
      });

      if (result.success) {
        showToast(result.message);

        setTimeout(() => {
          loadLoginPage();
        }, 1500);
      } else {
        showToast(result.message);
      }
    } catch (err) {
      console.error(err);
      showToast("Sunucuya bağlanılamadı.");
    }
  });
}
