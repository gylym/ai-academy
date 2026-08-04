(() => {
  "use strict";

  const translations = {
    kk: {
      skip: "Мазмұнға өту",
      resources: "Ресурстар",
      back: "Зерттеу және инновация бөліміне оралу",
      title: "Алдын ала жазылған тренингтер",
      intro: "Жаңа тренингтер кейін қосылады.",
      videoCount: "видеокурс"
    },
    ru: {
      skip: "Перейти к содержанию",
      resources: "Ресурсы",
      back: "Вернуться в раздел исследований и инноваций",
      title: "Предварительно записанные тренинги",
      intro: "Новые тренинги будут добавлены позже.",
      videoCount: "видеокурсов"
    },
    en: {
      skip: "Skip to content",
      resources: "Resources",
      back: "Back to Research & Innovation",
      title: "Pre-recorded Trainings",
      intro: "New trainings will be added later.",
      videoCount: "video courses"
    }
  };

  function setLanguage(language) {
    const current = translations[language] || translations.kk;
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach(element => {
      const value = current[element.dataset.i18n];
      if (value) element.textContent = value;
    });
    document.title = `${current.title} — AI Academy`;
    localStorage.setItem("ai-academy-language", language);
  }

  const select = document.querySelector("#language-select");
  const saved = localStorage.getItem("ai-academy-language") || "kk";
  select.value = saved;
  select.addEventListener("change", event => setLanguage(event.target.value));
  setLanguage(saved);
})();
