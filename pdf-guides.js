const translations = {
  kk: {
    resources: "Ресурстар",
    back: "← Зерттеу бөліміне қайту",
    title: "PDF гайдтар мен кітапшалар",
    description: "Жаңа материалдар кейін қосылады.",
    guides: "гайд",
    emptyTitle: "Әзірге материал жоқ",
    emptyText: "Жаңа PDF гайдтар мен кітапшалар кейін қосылады."
  },
  ru: {
    resources: "Ресурсы",
    back: "← Вернуться к исследованиям",
    title: "PDF-гайды и пособия",
    description: "Новые материалы будут добавлены позже.",
    guides: "гайдов",
    emptyTitle: "Материалов пока нет",
    emptyText: "Новые PDF-гайды и пособия будут добавлены позже."
  },
  en: {
    resources: "Resources",
    back: "← Back to Research",
    title: "PDF Guides & Handbooks",
    description: "New materials will be added later.",
    guides: "guides",
    emptyTitle: "No materials yet",
    emptyText: "New PDF guides and handbooks will be added later."
  }
};

function setLanguage(language) {
  const current = translations[language] || translations.kk;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const value = current[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.title = `${current.title} — AI for Research Central Asia`;
  localStorage.setItem("ai-academy-language", language);
}

const select = document.querySelector("#language-select");
const saved = localStorage.getItem("ai-academy-language") || "kk";
select.value = saved;
select.addEventListener("change", event => setLanguage(event.target.value));
setLanguage(saved);
