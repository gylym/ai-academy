(()=>{
const KASPI_PAY_URL="https://pay.kaspi.kz/pay/acrk2oxt";
const PHONE="77071799070";
const copy={
kk:{today:"БҮГІНГІ ҰСЫНЫС",barTitle:"8 академиялық курсты бірге алыңыз",barMeta:"Бейнедәрістерге қолжетімділік — шектеусіз уақытқа",installment:"0–0–12 БӨЛІП ТӨЛЕУ",monthly:"Айына шамамен 5 834 ₸",view:"КУРСТАРДЫ КӨРУ",bundleEye:"БАРЛЫҚ 8 КУРС · БІР ПАКЕТТЕ",bundleTitle:"Зерттеу дағдыларыңызға толық академиялық жинақ",bundleText:"Антиплагиаттан Scopus мақаласына, SPSS, SmartPLS, Bibliometrix және промпт-инжинирингке дейінгі толық видеокурс пакеті.",pay:"KASPI PAY СІЛТЕМЕСІН АЛУ",payDirect:"KASPI PAY АРҚЫЛЫ ТӨЛЕУ",receipt:"КВИТАНЦИЯНЫ WHATSAPP-ПЕН ЖІБЕРУ",catalog:"КУРС КАТАЛОГЫ",all:"Барлық бағдарламалар",access:"Барлық бейнедәріске қолжетімділік — шектеусіз уақытқа",unlimited:"Шектеусіз қолжетімділік",materials:"Қосымша материалдар: дәрістер, мақалалар, үлгілер және жұмыс файлдары.",buy:"САТЫП АЛУ",close:"Жабу",lesson:"видеосабақ",minutes:"минуттан",newest:"ЕҢ ЖАҢА КУРС · ЖЕЛТОҚСАН",requestMessage:"Сәлеметсіз бе! Барлық 8 курсты 70 000 тг-ге алғым келеді. Kaspi Pay төлем сілтемесін жіберіңізші.",receiptMessage:"Сәлеметсіз бе! Барлық 8 курсты 70 000 тг-ге сатып алдым. Төлем квитанциясын осы чатқа тіркеп жіберемін.",courseMessage:"Сәлеметсіз бе! {course} курсын сатып алғым келеді. Kaspi Pay төлем сілтемесін жіберіңізші."},
ru:{today:"ПРЕДЛОЖЕНИЕ СЕГОДНЯ",barTitle:"Все 8 академических курсов одним пакетом",barMeta:"Доступ к видеолекциям — без ограничения по времени",installment:"РАССРОЧКА 0–0–12",monthly:"Около 5 834 ₸ в месяц",view:"СМОТРЕТЬ КУРСЫ",bundleEye:"ВСЕ 8 КУРСОВ · ОДНИМ ПАКЕТОМ",bundleTitle:"Полный набор для развития исследовательских навыков",bundleText:"Комплект видеокурсов: от антиплагиата и статьи Scopus до SPSS, SmartPLS, Bibliometrix и промпт-инжиниринга.",pay:"ПОЛУЧИТЬ ССЫЛКУ KASPI PAY",payDirect:"ОПЛАТИТЬ ЧЕРЕЗ KASPI PAY",receipt:"ОТПРАВИТЬ КВИТАНЦИЮ В WHATSAPP",catalog:"КАТАЛОГ КУРСОВ",all:"Все программы",access:"Доступ ко всем видеолекциям — без ограничения по времени",unlimited:"Бессрочный доступ",materials:"Дополнительные материалы: лекции, статьи, образцы и рабочие файлы.",buy:"КУПИТЬ",close:"Закрыть",lesson:"видеоурока",minutes:"минут",newest:"САМЫЙ НОВЫЙ КУРС · ДЕКАБРЬ",requestMessage:"Здравствуйте! Хочу приобрести все 8 курсов за 70 000 тг. Отправьте, пожалуйста, ссылку Kaspi Pay.",receiptMessage:"Здравствуйте! Я приобрёл(а) все 8 курсов за 70 000 тг. Прикрепляю квитанцию об оплате в этот чат.",courseMessage:"Здравствуйте! Хочу приобрести курс «{course}». Отправьте, пожалуйста, ссылку Kaspi Pay."},
en:{today:"TODAY'S OFFER",barTitle:"Get all 8 academic courses in one bundle",barMeta:"Unlimited-time access to every video lecture",installment:"0–0–12 INSTALMENTS",monthly:"Approximately KZT 5,834 per month",view:"VIEW COURSES",bundleEye:"ALL 8 COURSES · ONE BUNDLE",bundleTitle:"A complete toolkit for stronger research skills",bundleText:"A full video-course package covering academic integrity, Scopus publishing, SPSS, SmartPLS, Bibliometrix, AI, and prompt engineering.",pay:"GET KASPI PAY LINK",payDirect:"PAY WITH KASPI PAY",receipt:"SEND RECEIPT VIA WHATSAPP",catalog:"COURSE CATALOGUE",all:"All programmes",access:"Unlimited-time access to all video lectures",unlimited:"Unlimited access",materials:"Additional materials include lectures, articles, examples, and working files.",buy:"BUY",close:"Close",lesson:"video lessons",minutes:"minutes each",newest:"NEWEST COURSE · DECEMBER",requestMessage:"Hello! I would like to purchase all 8 courses for KZT 70,000. Please send me the Kaspi Pay link.",receiptMessage:"Hello! I purchased all 8 courses for KZT 70,000. I am attaching the payment receipt in this chat.",courseMessage:"Hello! I would like to purchase the course “{course}”. Please send me the Kaspi Pay link."}
};
const courses={
kk:[
["Антиплагиат және ЖИ. Библиометриялық талдау",3,"120 минуттан",30000],
["Зерттеу әдістері және SPSS негіздері",20,"50 минуттан",40000],
["Зерттеу және білім берудегі жасанды интеллект",4,"2 сағаттан",33000],
["Талдау, жасанды интеллект және промпт-инжиниринг",8,"35 минуттан",33000],
["«Scopus-қа мақала» курсы",8,"120 минуттан",60000],
["Жасанды интеллект және зерттеу",6,"120 минуттан",33000],
["Мақала және SmartPLS",5,"120 минуттан",40000],
["Bibliometrix талдауы және ЖИ",3,"120 минуттан",33000]
],
ru:[
["Антиплагиат, ИИ и библиометрический анализ",3,"по 120 минут",30000],
["Методы исследования и основы SPSS",20,"по 50 минут",40000],
["Искусственный интеллект в исследованиях и образовании",4,"по 2 часа",33000],
["Анализ, искусственный интеллект и промпт-инжиниринг",8,"по 35 минут",33000],
["Курс «Статья в Scopus»",8,"по 120 минут",60000],
["Искусственный интеллект и исследование",6,"по 120 минут",33000],
["Статья и SmartPLS",5,"по 120 минут",40000],
["Анализ Bibliometrix и ИИ",3,"по 120 минут",33000]
],
en:[
["Academic integrity, AI, and bibliometric analysis",3,"120 minutes each",30000],
["Research methods and SPSS fundamentals",20,"50 minutes each",40000],
["Artificial intelligence in research and education",4,"2 hours each",33000],
["Analysis, artificial intelligence, and prompt engineering",8,"35 minutes each",33000],
["Publishing an article in Scopus",8,"120 minutes each",60000],
["Artificial intelligence and research",6,"120 minutes each",33000],
["Academic articles and SmartPLS",5,"120 minutes each",40000],
["Bibliometrix analysis and AI",3,"120 minutes each",33000]
]};
const money=n=>new Intl.NumberFormat("ru-RU").format(n)+" ₸";
const wa=text=>`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
function currentLang(){return document.documentElement.lang?.slice(0,2)||localStorage.getItem("researchPromptLang")||localStorage.getItem("ai-academy-language")||"kk"}
function itemMarkup(item,index,x){const [title,count,duration,price]=item,message=x.courseMessage.replace("{course}",title);return `<article class="course-item"><span class="course-number">${String(index+1).padStart(2,"0")}</span><div class="course-info"><h4>${title}</h4><p>${count} ${x.lesson} · ${duration}${index===7?` · ${x.newest}`:""}</p></div><div class="course-cost"><b>${money(price)}</b><small>${x.unlimited}</small></div><a class="course-item-action" href="${wa(message)}" target="_blank" rel="noopener">${x.buy} <span>↗</span></a></article>`}
function render(lang=currentLang()){
  if(!copy[lang])lang="kk";const x=copy[lang],list=courses[lang];
  const existing=document.querySelector(".course-offer-bar");if(existing)existing.remove();const oldDialog=document.querySelector("#course-catalog");if(oldDialog)oldDialog.remove();
  document.body.insertAdjacentHTML("afterbegin",`<aside class="course-offer-bar" aria-label="${x.today}"><div class="course-offer-trigger"><span class="course-offer-live"><i></i>${x.today}</span><span class="course-offer-main"><b>${x.barTitle}</b><span>${x.barMeta}</span><em>${x.installment}<small>${x.monthly}</small></em></span><span class="course-offer-price"><del>${money(302000)}</del><strong>${money(70000)}</strong></span><span class="course-offer-top-actions"><a href="${KASPI_PAY_URL}" target="_blank" rel="noopener">KASPI PAY <i>↗</i></a><button class="course-offer-action" id="course-offer-open" type="button" aria-haspopup="dialog"><span>${x.view}</span><i>＋</i></button></span></div></aside>`);
  document.body.insertAdjacentHTML("beforeend",`<dialog class="course-catalog" id="course-catalog"><div class="course-catalog-inner"><button class="course-catalog-close" type="button" aria-label="${x.close}">×</button><section class="course-bundle"><div class="course-bundle-copy"><p class="offer-eyebrow">${x.bundleEye}</p><h2>${x.bundleTitle}</h2><p>${x.bundleText}</p><span class="course-bundle-plan">${x.installment} · ${x.monthly}</span></div><div class="course-bundle-buy"><div class="course-bundle-price"><del>${money(302000)}</del><strong>${money(70000)}</strong></div><a class="course-pay" href="${KASPI_PAY_URL}" target="_blank" rel="noopener"><span>${x.payDirect}</span><b>↗</b></a><a class="course-receipt" href="${wa(x.receiptMessage)}" target="_blank" rel="noopener"><span>${x.receipt}</span><b>↗</b></a></div></section><div class="course-catalog-head"><div><p>${x.catalog}</p><h3>${x.all}</h3></div><span>${x.access}</span></div><div class="course-grid">${list.map((item,index)=>itemMarkup(item,index,x)).join("")}</div><p class="course-guarantee"><i>✓</i><span>${x.materials} ${x.access}.</span></p></div></dialog>`);
  const dialog=document.querySelector("#course-catalog");document.querySelector("#course-offer-open").addEventListener("click",()=>dialog.showModal());dialog.querySelector(".course-catalog-close").addEventListener("click",()=>dialog.close());dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close()});
}
render();
document.addEventListener("change",event=>{if(event.target.matches("#language-select,#ui-language"))requestAnimationFrame(()=>render(event.target.value))});
document.addEventListener("click",event=>{const button=event.target.closest("[data-lang]");if(button)requestAnimationFrame(()=>render(button.dataset.lang))});
})();
