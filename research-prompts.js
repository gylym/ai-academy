const directions = [
  {id:"research",icon:"⌁",name:"Зерттеу",desc:"Идеядан әдіснама мен нәтижеге дейін",tasks:[
    ["Тақырыпты нақтылау","Ұсынылған тақырыптың шекарасын, өзектілігін, негізгі ұғымдарын және зерттеуге келетін нұсқаларын анықта."],
    ["Зерттеу сұрағы мен гипотеза","Нақты, өлшенетін зерттеу сұрақтарын және тексерілетін гипотезаларды құрастыр."],
    ["Әдебиеттерге шолу","Әдебиеттерді тақырыптар бойынша жүйелеуге, қарама-қайшылықтар мен зерттеу олқылықтарын табуға арналған талдау құрылымын ұсын."],
    ["Әдіснаманы жоспарлау","Зерттеу мақсатына сай дизайн, іріктеу, дерек жинау және талдау әдістерін негіздеп ұсын."],
    ["Дерек жинау құралдары","Сауалнама, сұхбат немесе бақылау құралын зерттеу сұрағына сәйкестендіріп құрастыр."],
    ["Нәтижелерді талқылау","Нәтижелерді теориямен және алдыңғы зерттеулермен байланыстырып, балама түсіндірмелер мен шектеулерді көрсет."]]},
  {id:"writing",icon:"¶",name:"Ғылыми жазу",desc:"Мақала, диссертация және редакция",tasks:[
    ["Мақала құрылымы","IMRaD немесе салаға сай академиялық мақала құрылымын бөлімдер мен негізгі аргументтерге бөліп жаса."],
    ["Диссертация жоспары","Диссертацияның логикалық тарауларын, әр тараудың мақсатын және өзара байланысын жоспарла."],
    ["Аңдатпа жазу","Зерттеу мақсаты, әдісі, негізгі нәтижесі мен үлесін қамтитын ықшам аңдатпа құрылымын дайында."],
    ["Мәтінді редакциялау","Мәтіннің логикасын, дәлелін, академиялық стилін және тілдік анықтығын сақтай отырып редакцияла."],
    ["Рецензентке жауап","Рецензент пікірлеріне дәлелді, сыпайы және тармақталған жауап хат әзірле."]]},
  {id:"data",icon:"⌗",name:"Деректерді талдау",desc:"Сандық және сапалық деректер",tasks:[
    ["Талдау жоспары","Дерек түрі мен зерттеу сұрағына сай талдау қадамдарын, тексерулерді және нәтиже ұсыну тәсілін жаса."],
    ["Сандық талдау","Айнымалыларға сай сипаттамалық және қорытынды статистикалық әдістерді негіздеп ұсын."],
    ["Сапалық кодтау","Кодтау схемасын, тақырып қалыптастыру қадамдарын және рефлексивті тексеруді жоспарла."],
    ["Кесте мен визуализация","Негізгі нәтижелерді бұрмаламай көрсететін кесте және визуализация жоспарын әзірле."],
    ["Нәтижені түсіндіру","Берілген нәтижелерді шамадан тыс қорытынды жасамай, әсер көлемі мен белгісіздікті ескеріп түсіндір."]]},
  {id:"teaching",icon:"✦",name:"Оқыту",desc:"Сабақ, тапсырма және бағалау",tasks:[
    ["Сабақ жоспары","Оқу нәтижесі, белсенді әрекет, уақыт және қалыптастырушы бағалауы бар сабақ жоспарын жаса."],
    ["Оқу материалы","Күрделі ұғымды мысал, аналогия және өзін-өзі тексеру сұрақтарымен түсіндіретін материал әзірле."],
    ["Бағалау тапсырмасы","Оқу нәтижесіне сай валидті тапсырма, бағалау критерийлері және рубрика құрастыр."],
    ["Кері байланыс","Студент жұмысына нақты дәлелге сүйенген, дамуға бағытталған кері байланыс үлгісін жаса."],
    ["Инклюзивті бейімдеу","Материалды әртүрлі дайындық деңгейі мен тілдік қажеттілікке бейімде."]]},
  {id:"grant",icon:"◇",name:"Грант және жоба",desc:"Өтінім, әсер және жұмыс жоспары",tasks:[
    ["Жоба тұжырымдамасы","Мәселе, шешім, жаңашылдық, мақсатты топ және күтілетін әсерді бір логикаға біріктір."],
    ["Гранттық өтінім","Бағалау критерийлеріне сай дәлелді гранттық өтінім құрылымын және негізгі аргументтерін жаса."],
    ["Жұмыс жоспары","Міндеттер, нәтижелер, мерзім, жауаптылар және тәуекелдері бар іске асыру жоспарын дайында."],
    ["Әсер және тұрақтылық","Жобаның өлшенетін әсерін, индикаторларын және қаржыландырудан кейінгі тұрақтылығын сипатта."]]},
  {id:"admin",icon:"▦",name:"Университет жұмысы",desc:"Құжат, коммуникация және процесс",tasks:[
    ["Ресми құжат","Мақсатты аудиторияға сай қысқа, нақты және ресми құжат жобасын дайында."],
    ["Жиналыс қорытындысы","Талқылауларды шешімдерге, жауаптыларға және мерзімдерге бөліп қорытындыла."],
    ["Процесті жақсарту","Қолданыстағы процестегі кедергілерді анықтап, іске асатын жақсарту жоспарын ұсын."],
    ["Академиялық коммуникация","Хат немесе хабарламаны кәсіби, түсінікті және әрекетке бағытталған етіп құрастыр."],
    ["Презентация жоспары","Аудитория мен мақсатқа сай қысқа баяндау желісі және слайд құрылымын жаса."]]},
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const form = $("#prompt-form");
let selectedDirection = "";

function renderDirections(){
  $("#direction-grid").innerHTML = directions.map((direction,index)=>`
    <label class="direction-option">
      <input type="radio" name="direction" value="${direction.id}">
      <span class="direction-icon" aria-hidden="true">${direction.icon}</span>
      <span><strong>${direction.name}</strong><small>${direction.desc}</small></span>
    </label>`).join("");
}

function selectDirection(id){
  selectedDirection=id;
  const direction=directions.find(item=>item.id===id);
  const task=$("#task");
  task.disabled=false;
  task.innerHTML='<option value="">Нақты тапсырманы таңдаңыз</option>'+direction.tasks.map((item,index)=>`<option value="${index}">${item[0]}</option>`).join("");
  $("#direction-error").textContent="";
  updateSummary();
}

function value(id){return $(id).value.trim()}
function selectedTask(){
  const direction=directions.find(item=>item.id===selectedDirection);
  if(!$("#task").value) return null;
  const index=Number($("#task").value);
  return direction && Number.isInteger(index) ? direction.tasks[index] : null;
}

function updateSummary(){
  const direction=directions.find(item=>item.id===selectedDirection);
  const task=selectedTask();
  const items=[direction?.name,task?.[0],value("#language"),value("#format")].filter(Boolean);
  $("#selection-summary").innerHTML=items.length?items.map(item=>`<span>${item}</span>`).join(""):"<span>Бағыт таңдалмады</span>";
  const score=[selectedDirection,value("#task"),value("#topic"),value("#context"),value("#discipline"),value("#format")].filter(Boolean).length;
  $("#quality-badge").textContent=`${Math.round(score/6*100)}% ТОЛЫҚ`;
}

function validate(){
  let valid=true;
  const directionError=$("#direction-error"),taskError=$("#task-error"),topicError=$("#topic-error");
  directionError.textContent=selectedDirection?"":"Жұмыс бағытын таңдаңыз.";
  taskError.textContent=value("#task")?"":"Нақты тапсырманы таңдаңыз.";
  topicError.textContent=value("#topic")?"":"Нақты нәтиже алу үшін тақырыпты енгізіңіз.";
  $("#task").classList.toggle("invalid",!value("#task"));
  $("#topic").classList.toggle("invalid",!value("#topic"));
  if(!selectedDirection||!value("#task")||!value("#topic")) valid=false;
  if(!valid){const first=!selectedDirection?$("#direction-grid"):!value("#task")?$("#task"):$("#topic");first.scrollIntoView({behavior:"smooth",block:"center"});if(first.focus)first.focus();}
  return valid;
}

function buildPrompt(){
  const direction=directions.find(item=>item.id===selectedDirection);
  const task=selectedTask();
  const context=value("#context")||"Қосымша контекст берілмеді.";
  const region=value("#region")||"Өңір көрсетілмеді.";
  const centralAsia=$("#central-asia").checked?"- Талдауда Орталық Азияның әлеуметтік, мәдени және институционалдық контекстін ескер.":"";
  const clarify=$("#clarify").checked?"- Маңызды дерек жетіспесе, жұмысты бастамас бұрын ең көбі 3 нақтылаушы сұрақ қой.":"";
  return `Сен ${value("#discipline")} саласындағы тәжірибелі академиялық AI ассистентісің.

МІНДЕТ
${task[1]}

КОНТЕКСТ
- Жұмыс бағыты: ${direction.name}
- Тақырып: ${value("#topic")}
- Қолдану мақсаты: ${value("#purpose")}
- Академиялық деңгей: ${value("#level")}
- Ел немесе өңір: ${region}
- Қосымша контекст: ${context}

НӘТИЖЕГЕ ҚОЙЫЛАТЫН ТАЛАПТАР
- Жауап тілі: ${value("#language")}
- Нәтиже форматы: ${value("#format")}
- Толықтық деңгейі: ${value("#depth")}
- Стиль: ${value("#style")}
${centralAsia}

АКАДЕМИЯЛЫҚ СЕНІМДІЛІК
- Берілмеген факт, мақала, автор, DOI, сілтеме немесе статистиканы ойдан шығарма.
- Нақты дерек жетіспесе немесе бір тұжырымға сенімді болмасаң, оны ашық белгіле.
- Фактілерді, болжамдарды және ұсыныстарды бір-бірінен ажырат.
- Дереккөздер сұралса, тексерілмеген библиографиялық жазбаны нақты дерек ретінде берме; орнына іздеу стратегиясын ұсын.
- Академиялық адалдықты сақта және AI жасаған нәтижені адам тексеруі керегін ескерт.
${clarify}

ЖАУАП ҚҰРЫЛЫМЫ
1. Қысқа қорытындыдан баста.
2. Негізгі нәтижені таңдалған форматта бер.
3. Шектеулер мен тексеруді қажет ететін тұстарды бөлек көрсет.
4. Соңында пайдаланушының келесі 3 қадамын ұсын.`;
}

async function copyPrompt(){
  const text=$("#prompt-output").textContent;
  try{await navigator.clipboard.writeText(text)}catch{const area=document.createElement("textarea");area.value=text;document.body.append(area);area.select();document.execCommand("copy");area.remove()}
  $("#copy-prompt span").textContent="Көшірілді";
  $("#toast").classList.add("show");
  setTimeout(()=>{$("#toast").classList.remove("show");$("#copy-prompt span").textContent="Промптты көшіру"},1800);
}

function resetForm(){
  form.reset();selectedDirection="";
  $("#task").disabled=true;$("#task").innerHTML='<option value="">Алдымен бағытты таңдаңыз</option>';
  $("#region").value="Орталық Азия";$("#direction-error").textContent="";$("#task-error").textContent="";$("#topic-error").textContent="";
  $("#task").classList.remove("invalid");$("#topic").classList.remove("invalid");
  $("#result-ready").hidden=true;$("#result-empty").hidden=false;updateSummary();window.scrollTo({top:$("#constructor").offsetTop-20,behavior:"smooth"});
}

renderDirections();updateSummary();
$("#direction-grid").addEventListener("change",event=>{if(event.target.name==="direction")selectDirection(event.target.value)});
form.addEventListener("input",updateSummary);form.addEventListener("change",updateSummary);
form.addEventListener("submit",event=>{event.preventDefault();if(!validate())return;$("#prompt-output").textContent=buildPrompt();$("#result-empty").hidden=true;$("#result-ready").hidden=false;$("#result-panel").scrollIntoView({behavior:"smooth",block:"start"});setTimeout(()=>$("#prompt-output").focus(),350)});
$("#copy-prompt").addEventListener("click",copyPrompt);
$("#reset-form").addEventListener("click",resetForm);
$("#new-prompt").addEventListener("click",()=>$("#constructor").scrollIntoView({behavior:"smooth",block:"start"}));
