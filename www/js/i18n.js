let translations = {};

async function loadLanguage(lang) {
  if (lang === "tr") {
    return;
  }

  const response = await fetch(`/lang/${lang}.json`);//burada dil dosyalarını alıyoruz

  translations = await response.json();

  applyLanguage();
}

function applyLanguage() { //burada dil dosyalarını html e basıyoruz
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    const value = key
      .split(".")
      .reduce((o, i) => (o ? o[i] : null), translations);

    if (value !== undefined) {
      element.innerHTML = value;
    }
  });
}

$(document).ready(async function () {
  const lang = localStorage.getItem("language") || "tr";

  $("#languageSelect").val(lang);

  if (lang !== "tr") {
    await loadLanguage(lang);
    //epğer türkçeyse tekrar render etme
  }

  $("#languageSelect").on("change", async function () {
    const selected = $(this).val();

    localStorage.setItem("language", selected);

    if (selected === "tr") {
      location.reload();

      return;
    }

    await loadLanguage(selected);
  });
});
