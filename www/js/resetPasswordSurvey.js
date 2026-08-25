console.log("resetPasswordSurvey.js çalıştı");

const resetPasswordJson = {
  title: "Şifre Sıfırlama",

  showQuestionNumbers: "off",
  showCompletedPage: false,
  completeText: "Şifreyi Sıfırla",

  elements: [
    {
      type: "text",
      name: "email",
      title: "E-Mail",
      inputType: "email",
      isRequired: true,
    },
  ],
};

function initResetPasswordSurvey() {
  console.log("initResetPasswordSurvey çalıştı");

  const survey = new Survey.Model(resetPasswordJson);

  survey.render(document.getElementById("resetPasswordSurvey"));

  survey.onComplete.add(async function (sender) {
    const surveyData = sender.data;

    console.log("Form Verisi:", surveyData);

    try {
      const result = await post("/api/resetPassword", surveyData);
      console.log(result);
      if (result.success) {
        loadLoginPage();

        setTimeout(() => {
          showToast(
            "Şifre sıfırlama maili gönderildi. Lütfen e-posta adresinizi kontrol edin.",
          );
        }, 300);
      } else {
        showToast(result.message);
      }
    } catch (err) {
      console.error(err);
      showToast("Sunucuya bağlanılamadı.");
    }
  });
}
