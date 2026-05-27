/* ============================================================
   ⚙️ CONFIGURATION — إعداد المتغيرات الثابتة للأزرار الشغالة
============================================================ */
const WHATSAPP_NUMBER = "213659272335"; 
const MESSENGER_LINK  = "https://www.messenger.com/t/mhmd.nafy.971323"; 

/* ============================================================
   🗂️ DATABASE — قاعدة بيانات الأقارب بأكواد مبسطة وسهلة
============================================================ */
const guests = {
  "A01": { "name": "أبي" },
  "A02": { "name": "أمي" },
  "A03": { "name": "إبراهيم" },
  "A04": { "name": "أيمن" },
  "A05": { "name": "بلقاسم" },
  "A06": { "name": "أسامة" },
  "A07": { "name": "توفيق" },
  "A08": { "name": "رضوان" },
  "A09": { "name": "فاريد" },
  "B01": { "name": "راضية" },
  "B02": { "name": "لينة" },
  "B03": { "name": "عبد المومن" },
  "B04": { "name": "علي" },
  "B05": { "name": "تقي الدين" },
  "B06": { "name": "كريم" },
  "B07": { "name": "خير الدين" },
  "B08": { "name": "أشرف" },
  "B09": { "name": "عبد الرؤوف" },
  "C01": { "name": "نوح" },
  "C02": { "name": "إسحاق" },
  "C03": { "name": "جابر" },
  "C04": { "name": "يوسف" },
  "C05": { "name": "إسماعيل" },
  "C06": { "name": "زياد" },
  "C07": { "name": "أحمد" },
  "C08": { "name": "سيف الدين" },
  "C09": { "name": "بدر الدين" },
  "D01": { "name": "محمود" },
  "D02": { "name": "منتصر" },
  "D03": { "name": "أمين" },
  "D04": { "name": "عماد الدين" }, 
  "D05": { "name": "بن عودة" },
  "D06": { "name": "نعمان" },
  "D07": { "name": "هارون" },
  "D08": { "name": "عبد العزيز" },
  "D09": { "name": "زاكي" },
  "E01": { "name": "ياسر" },
  "E02": { "name": "عبد الرحمان" },
  "E03": { "name": "ياسين" },
  "E04": { "name": "محمد" },
  "E05": { "name": "شراف" },
  "E06": { "name": "إياد" },
  "E07": { "name": "يعقوب" },
  "E08": { "name": "فارس" },
  "E09": { "name": "ملود" },
  "F01": { "name": "صالح" },
  "F02": { "name": "معتز" },
  "F03": { "name": "محسن" }
};

/* ============================================================
   📌 GLOBAL STATE — حالة الموقع الحالية
============================================================ */
var loginType = "public"; 
var selectedBackground = null;
var currentGuestName = "";
var finalCustomMessage = ""; 

/* 1. دالة التنقل بين التبويب العام والخاص */
function switchTab(type) {
  loginType = type;
  var pubForm = document.getElementById("public-form");
  var privForm = document.getElementById("private-form");
  var tabPub = document.getElementById("tab-public");
  var tabPriv = document.getElementById("tab-private");
  var errorMsg = document.getElementById("error-msg");
  
  errorMsg.style.display = "none";

  if (type === "public") {
    pubForm.classList.remove("hidden");
    privForm.classList.add("hidden");
    privForm.style.display = "none";
    pubForm.style.display = "block";
    
    tabPub.classList.add("active-tab");
    tabPriv.classList.remove("active-tab");
  } else {
    pubForm.classList.add("hidden");
    privForm.classList.remove("hidden");
    pubForm.style.display = "none";
    privForm.style.display = "block";
    
    tabPriv.classList.add("active-tab");
    tabPub.classList.remove("active-tab");
  }
}

/* 2. الدالة الرئيسية لمعالجة الدخول وتوليد التهنئة الفاخرة */
function processLogin() {
  var errorMsg = document.getElementById("error-msg");
  
  if (loginType === "public") {
    var nameInput = document.getElementById("public-name-input");
    var guestName = nameInput.value.trim();

    if (guestName === "") {
      errorMsg.textContent = "⚠️ يرجى كتابة اسمك أولاً لعرض التهنئة الفاخرة";
      errorMsg.style.display = "block";
      return;
    }

    currentGuestName = guestName;
    document.getElementById("guest-name").textContent = "يا " + guestName + " العزيز";
    
    finalCustomMessage = "كل عام وأنتم بخير وبألف صحة وعافية بمناسبة عيد الأضحى المبارك 🌙✨\n\nأسأل الله العظيم أن يتقبّل منا ومنكم صالح الأعمال والعبادات، وأن يجعل أيامكم كلها مسرات وأفراح.";

  } else {
    var codeInput = document.getElementById("private-code-input");
    var code = codeInput.value.trim().toUpperCase();
    var relationSelect = document.getElementById("relation-select");
    var selectedRelation = relationSelect.value;
    var guest = guests[code];

    if (!guest) {
      errorMsg.textContent = "⚠️ الكود السرّي غير صحيح، يرجى التحقق منه!";
      errorMsg.style.display = "block";
      return;
    }

    if (!selectedRelation) {
      errorMsg.textContent = "⚠️ يرجى تحديد صلة القرابة لتهنئتك الخاصة!";
      errorMsg.style.display = "block";
      return;
    }

    var fullStyledName = selectedRelation + " / " + guest.name;
    currentGuestName = guest.name; // حفظ الاسم الصافي بدون اللقب للعلب التفاعلية
    
    document.getElementById("guest-name").textContent = "يا " + selectedRelation + " (" + guest.name + ")";
    
    finalCustomMessage = "عيدكم مبارك وسعيد 🕋🐑\n\nتقبّل الله منا ومنكم صالح الأعمال، وغفر لنا ولكم، وجعلكم الله سبحانه وتعالى من عواده بالصحة والعافية والبركة والقبول، وحفظكم وسائر العائلة الكريمة من كل سوء.";
  }

  errorMsg.style.display = "none";
  document.getElementById("login-section").style.display = "none";
  
  var greetingSection = document.getElementById("greeting-section");
  greetingSection.style.display = "block";
  document.getElementById("guest-message").textContent = finalCustomMessage;

  console.log("🎉 عيد مبارك سعيد وسنة مباركة للجميع! 🎉");

  greetingSection.scrollIntoView({ behavior: "smooth", block: "start" });
  history.pushState({ page: "greeting" }, "");

  // استدعاء دالة تناثر أوراق الحفل فور الدخول
  createConfetti(); 
}

/* 3. دالة اختيار الخلفية */
function selectBackground(bg) {
  selectedBackground = bg;
  var cards = document.getElementsByClassName("bg-card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.remove("selected");
  }
  document.getElementById("card-" + bg).classList.add("selected");
  
  var hints = { kaaba: "🕋 خلفية الكعبة المشرفة", sheep: "🐑 خلفية خروف العيد", islamic: "☪️ خلفية إسلامية فاخرة" };
  document.getElementById("selection-hint").textContent = "✅ اخترت بثقة: " + hints[bg];
}

/* 4. دالة الرد عبر الواتساب بدون تكرار الصفة */
function replyViaWhatsApp() {
  if (!selectedBackground) { 
    alert("⚠️ يرجى اختيار خلفية أولاً!"); 
    return; 
  }
  
  var icons = { kaaba: "🕋", sheep: "🐑", islamic: "☪️" };
  var senderName = currentGuestName;
  
  if (loginType === "private") {
    var code = document.getElementById("private-code-input").value.trim().toUpperCase();
    if (guests[code]) {
      senderName = guests[code].name; 
    }
  }

  var replyText = "مرحباً محمد نافي، أنا " + senderName + "، قمت باختيار " + icons[selectedBackground] + " للرد على تهنئتك الكريمة والطيبة بمناسبة العيد الأضحى السعيد. تقبل الله منا ومنكم صالح الأعمال، وكل عام وأنت بخير وعافية وسرور والتوفيق الدائم حليفك 🎉";
  var encodedText = encodeURIComponent(replyText);
  
  var isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
  var finalUrl = isMobile ? "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodedText : "https://web.whatsapp.com/send?phone=" + WHATSAPP_NUMBER + "&text=" + encodedText;
  
  window.open(finalUrl, "_blank");
}

/* 5. دالة الرد عبر الماسنجر */
function replyViaMessenger() {
  if (!selectedBackground) { 
    alert("⚠️ يرجى اختيار خلفية أولاً!"); 
    return; 
  }
  
  var icons = { kaaba: "🕋", sheep: "🐑", islamic: "☪️" };
  var senderName = currentGuestName;
  
  if (loginType === "private") {
    var code = document.getElementById("private-code-input").value.trim().toUpperCase();
    if (guests[code]) {
      senderName = guests[code].name;
    }
  }

  var replyText = "مرحباً محمد نافي، أنا " + senderName + "، قمت باختيار " + icons[selectedBackground] + " للرد على تهنئتك الكريمة والطيبة بمناسبة العيد الأضحى السعيد. تقبل الله منا ومنكم صالح الأعمال، وكل عام وأنت بخير وعافية وسرور والتوفيق الدائم حليفك 🎉";
  
  navigator.clipboard.writeText(replyText)
    .then(function() { console.log("تم نسخ نص الرد بنجاح!"); })
    .catch(function(err) { console.error("فشل النسخ: ", err); });
  
  window.open(MESSENGER_LINK, "_blank");
}

/* 6. دالة تناثر أوراق الحفل (Confetti) المصححة والنقية */
function createConfetti() {
  const confettiCount = 100;
  const confettiColors = ['#f5d98b', '#c9a227', '#fdf6e3', '#ebdcb9'];
  const confettiParent = document.getElementById('greeting-section');

  if (!confettiParent) return;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    
    const size = Math.random() * 8 + 6;
    confetti.style.width = size + 'px';
    confetti.style.height = size + 'px';
    
    confetti.style.animationDelay = Math.random() * 2 + 's';
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';

    confettiParent.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}
/* ============================================================
   7. دالة صندوق المعايدة التفاعلي — أحاديث نبوية صحيحة وتوجيهات شرعية
============================================================ */
function triggerGreetingAction(type) {
  const resultBox = document.getElementById("interactive-result-text");
  if (!resultBox) return;

  const displayName = currentGuestName || " ";
  let message = "";

  if (type === 'gift') {
    const propheticHadiths = [
      `💡 عن سُنّة يوم النحر  ${displayName}، رُوي عن رسول الله ﷺ أنه قال: «إِنَّ أَوَّلَ مَا نَبْدَأُ بِهِ فِي يَوْمِنَا هَذَا أَنْ نُصَلِّيَ، ثُمَّ نَرْجِعَ فَنَنْحَرَ، فَمَنْ فَعَلَ ذَلِكَ فَقَدْ أَصَابَ سُنَّتَنَا» [رواه البخاري ومسلم].`,
      `🕌 عن آداب وخلف الطرقات  ${displayName}، رُوي عن جابر بن عبد الله رضي الله عنهما قال: «كَانَ النَّبِيُّ ﷺ إِذَا كَانَ يَوْمُ عِيدٍ خَالَفَ الطَّرِيقَ» [رواه البخاري].`,
      `🕊️ عن فضل أيام العيد والتوسعة فيه  ${displayName}، قال رسول الله ﷺ: «أَيَّامُ التَّشْرِيقِ أَيَّامُ أَكْلٍ وَشُرْبٍ وَذِكْرٍ لِلَّهِ» [رواه مسلم].`
    ];
    message = propheticHadiths[Math.floor(Math.random() * propheticHadiths.length)];
    
    // إطلاق أوراق الاحتفال لزيادة التفاعل البصري عند عرض الحديث الشريف
    createConfetti();
    
  } else if (type === 'coffee') {
    message = `☕ حياك الله  ${displayName}، وتذكيراً بفضل صلة الرحم في المجالس، قال رسول الله ﷺ: «مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَصِلْ رَحِمَهُ» [رواه البخاري ومسلم].`;
  } else if (type === 'oud') {
    message = `🪵 طاب ممشاك  ${displayName}، وفي استحباب الطيب والجمال يوم العيد، رُوي عن رسول الله ﷺ أنه قال: «إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ» [رواه مسلم].`;
  }

  // عرض النص وإزالة خاصية الإخفاء
  resultBox.textContent = message;
  resultBox.classList.remove("hidden");
}
/* 8. دالة العداد التنازلي التلقائي لأيام العيد 2026 الحي */
function initEidCountdown() {
  const eidStartDate = new Date("May 27, 2026 00:00:00").getTime(); 
  const eidEndDate = new Date("May 30, 2026 18:00:00").getTime(); 

  const titleText = document.getElementById("timer-title-text");
  if (!titleText) return;

  function updateTimer() {
    const now = new Date().getTime();
    let distance = 0;

    if (now < eidStartDate) {
      titleText.textContent = "⏳ متبقٍ على حلول صبيحة عيد الأضحى المبارك:";
      distance = eidStartDate - now;
    } else if (now >= eidStartDate && now <= eidEndDate) {
      titleText.textContent = "🎉 تقبل الله طاعتكم! نحن الآن في أيام العيد والتشريق.. متبقٍ على انتهاء التكبير:";
      distance = eidEndDate - now;
    } else {
      titleText.textContent = "✨ عساكم من عواده.. تقبل الله منا ومنكم صالح الأعمال.";
      const digitalTimer = document.querySelector(".eid-timer-digital");
      const reminderBox = document.querySelector(".prayer-reminder");
      if (digitalTimer) digitalTimer.style.display = "none";
      if (reminderBox) reminderBox.style.display = "none";
      clearInterval(intervalInstance);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysElem = document.getElementById("eid-days");
    const hoursElem = document.getElementById("eid-hours");
    const minsElem = document.getElementById("eid-mins");
    const secsElem = document.getElementById("eid-secs");

    if (daysElem) daysElem.textContent = days < 10 ? "0" + days : days;
    if (hoursElem) hoursElem.textContent = hours < 10 ? "0" + hours : hours;
    if (minsElem) minsElem.textContent = minutes < 10 ? "0" + minutes : minutes;
    if (secsElem) secsElem.textContent = seconds < 10 ? "0" + seconds : seconds;
  }

  updateTimer();
  const intervalInstance = setInterval(updateTimer, 1000);
}

/* 9. ربط حدث استرجاع الصفحات في شاشة الهاتف والـ Back Button */
window.addEventListener("popstate", function(event) {
  document.getElementById("login-section").style.display = "block";
  document.getElementById("greeting-section").style.display = "none";
  if(document.getElementById("public-name-input")) document.getElementById("public-name-input").value = "";
  if(document.getElementById("private-code-input")) document.getElementById("private-code-input").value = "";
});

/* 10. تشغيل العداد فور تحميل المستند */
document.addEventListener("DOMContentLoaded", () => {
  initEidCountdown();
});