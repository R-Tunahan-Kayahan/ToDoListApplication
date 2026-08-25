const helpsurveyjson = {
  showQuestionNumbers: "off",
  showCompletedPage: false,
  showPrevButton: false,
  widthMode: "static",
  allowDynamicLayout: true,
  renderMode: "progress",
  enableResponsiveDesign: true,

  completeText: "Talebi Gönder",

  pages: [
    {
      elements: [
        {
          type: "panel",
          name: "info",
          elementsLayout: "responsive",
          gridLayoutColumns: ["1fr", "1fr"],
          elements: [
            {
              type: "text",
              name: "name",
              title: "Ad ",
              isRequired: true,
            },
            {
              type: "text",
              name: "surname",
              title: "Soyad",
              isRequired: true,
            },

            {
              type: "text",
              name: "email",
              title: "E-Posta",
              inputType: "email",
              isRequired: true,
            },
            {
              type: "text",
              name: "subject",
              title: "Konu",
              isRequired: true,
            },

            {
              type: "comment",
              name: "message",
              title: "Mesaj",
              isRequired: true,
              rows: 6,
              colSpan: 2,
            },
          ],
        },
      ],
    },
  ],
};

function initHelpSurvey() {
  const container = document.getElementById("helpSurveyContainer");

  if (!container) {
    console.error("helpSurveyContainer bulunamadı.");
    return;
  }

  container.innerHTML = "";

  const survey = new Survey.Model(helpsurveyjson);

  survey.render(container);

  survey.onComplete.add(async function (sender) {
    try {
      const result = await post("/api/help", sender.data);

      alert("Talebiniz başarıyla gönderildi.");

      sender.clear();

      sender.render(document.getElementById("helpSurveyContainer"));
    } catch (err) {
      console.error(err);

      alert("Gönderim sırasında hata oluştu.");
    }
  });
}

$(document).ready(function () {
  $("#themeSwitch").on("change", function () {
    const dark = $(this).is(":checked");
    const theme = dark ? "dark" : "light";

    localStorage.setItem("theme", theme);

    $("body").toggleClass("dark-theme", dark);
    document.documentElement.setAttribute("data-bs-theme", theme);
  });

  const currentTheme = localStorage.getItem("theme") || "light";

  $("#themeSwitch").prop("checked", currentTheme === "dark");
  $("body").toggleClass("dark-theme", currentTheme === "dark");
  document.documentElement.setAttribute("data-bs-theme", currentTheme);

  const savedLanguage = localStorage.getItem("language") || "tr";

  $("#languageSelect").val(savedLanguage);

  $("#languageSelect").on("change", function () {
    const language = $(this).val();

    localStorage.setItem("language", language);

    alert("Dil değiştirildi. Sayfa yenilendiğinde uygulanacaktır.");
  });

  $("#helpBtn").on("click", function (e) {
    e.preventDefault();

    window.location.href = "/support";
  });

  initHelpSurvey();
});

$("#aboutt").click(function (e) {
  console.log("Hakkında butonuna tıklandı.");

  const aboutModal = new bootstrap.Modal(
    document.getElementById("openaboutinfo"),
  );

  aboutModal.show();
  e.preventDefault();
});
