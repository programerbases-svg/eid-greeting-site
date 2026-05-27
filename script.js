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

/* 1. دالة التنقل بين التبويب العام والخاص مع التوسيط والتحكم بالـ Classes */
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

/* 2. الدالة الرئيسية لمعالجة الدخول لتوليد التهنئة المأثورة الخالية من التكرار */
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
    
    // تهنئة مباركة وموزونة للعامة بأسلوب أهل السنة
    finalCustomMessage = "كل عام وأنتم بخير وبألف صحة وعافية " + " بمناسبة عيد الأضحى المبارك 🌙✨\n\nأسأل الله العظيم أن يتقبّل منا ومنكم صالح الأعمال والعبادات، وأن يجعل أيامكم كلها مسرات وأفراح  .";

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

    // هنا دمج الصفة النقية المصلحة مع اسم الضيف (مثال: الأم الغالية صونية) بدون أي تكرار
    var fullStyledName = selectedRelation + " / " + guest.name;
    currentGuestName = fullStyledName;
    
    document.getElementById("guest-name").textContent = "يا " + selectedRelation + " (" + guest.name + ")";
    
    // تهنئة خاصة بليغة مستوحاة من مأثور السلف الصالح وعلماء أهل السنة
    finalCustomMessage = "عيدكم مبارك وسعيد  " + "  🕋🐑\n\nتقبّل الله منا ومنكم صالح الأعمال، وغفر لنا ولكم، وجعلكم الله سبحانه وتعالى من عواده بالصحة والعافية والبركة والقبول، وحفظكم وسائر العائلة الكريمة من كل سوء.";
  }

  // إخفاء لوحة الدخول وإظهار واجهة التهنئة الفخمة المضيئة
  errorMsg.style.display = "none";
  document.getElementById("login-section").style.display = "none";
  
  var greetingSection = document.getElementById("greeting-section");
  greetingSection.style.display = "block";
  document.getElementById("guest-message").textContent = finalCustomMessage;

  // تأثير قصاصات زينة احتفالية (🎉) تطلق في الكونسول ومؤثر صعود بلمح البصر
  console.log("🎉 عيد مبارك سعيد وسنة مباركة للجميع! 🎉");

  // التمرير التلقائي الانسيابي لبطاقة التهنئة المضيئة
  greetingSection.scrollIntoView({ behavior: "smooth", block: "start" });
  history.pushState({ page: "greeting" }, "");

  /* أضف هذا السطر في نهاية دالة processLogin() */
createConfetti(); // استدعاء دالة تناثر أوراق الحفل
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



/* 4. دالة الرد عبر الواتساب (كلام موزون ورزين بدون كلمة مبرمجنا) */
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

  // صياغة موزونة ومؤدبة وجميلة جداً للأقارب والمجتمع تليق بمقامك
  var replyText = "مرحباً محمد نافي، أنا " + senderName + "، قمت باختيار " + icons[selectedBackground] + " للرد على تهنئتك الكريمة والطيبة بمناسبة العيد الأضحى السعيد. تقبل الله منا ومنكم صالح الأعمال، وكل عام وأنت بخير وعافية وسرور والتوفيق الدائم حليفك 🎉";
  var encodedText = encodeURIComponent(replyText);
  
  var isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
  var finalUrl = "";

  if (isMobile) {
    finalUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodedText;
  } else {
    finalUrl = "https://web.whatsapp.com/send?phone=" + WHATSAPP_NUMBER + "&text=" + encodedText;
  }
  
  window.open(finalUrl, "_blank");
}

/* دالة تناثر أوراق الحفل (Confetti) المصححة والنقية */
function createConfetti() {
  const confettiCount = 100;
  // تم إصلاح علامات الاقتباس هنا لكل الألوان برمجياً
  const confettiColors = ['#f5d98b', '#c9a227', '#fdf6e3', '#ebdcb9'];
  const confettiParent = document.getElementById('greeting-section');

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    // موقع العرض العشوائي والألوان
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    
    // أحجام عشوائية للأوراق لإعطاء عمق بصري
    const size = Math.random() * 8 + 6;
    confetti.style.width = size + 'px';
    confetti.style.height = size + 'px';
    
    // توقيت عشوائي لكل ورقة لكي لا تسقط كلها في نفس اللحظة
    confetti.style.animationDelay = Math.random() * 2 + 's';
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';

    confettiParent.appendChild(confetti);

    // تنظيف المتصفح وحذف الأوراق بعد انتهاء سقوطها تلقائياً
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}


/* 5. دالة الرد عبر الماسنجر (كلام موزون ورزين بدون كلمة مبرمجنا) */

    // /* 4. دالة الرد عبر الواتساب (تعديل: إرسال اسم الشخص النقي بدون صلة القرابة) */
    // function replyViaWhatsApp() {
    //   if (!selectedBackground) { 
    //     alert("⚠️ يرجى اختيار خلفية أولاً!"); 
    //     return; 
    //   }
      
    //   const icons = { kaaba: "🕋", sheep: "🐑", islamic: "☪️" };
      
    //   // هنا نقوم بتنظيف الاسم: إذا كان الدخول خاصاً، نأخذ الاسم النقي فقط من الخانة ونترك الصفة
    //   let senderName = currentGuestName;
    //   if (loginType === "private") {
    //     const code = document.getElementById("private-code-input").value.trim().toUpperCase();
    //     if (guests[code]) {
    //       senderName = guests[code].name; // جلب الاسم فقط (مثل: إبراهيم) دون صلة القرابة
    //     }
    //   }

    //   // بناء نص الجواب الموجه لك باسم الشخص فقط
    //   const replyText = "مرحباً محمد نافي، أنا " + senderName + " قمت باختيار " + icons[selectedBackground] + " للرد على تهنئتك الجميلة! كل عام وأنت بخير ونجاح مبرمجنا الغالي 🎉";
    //   const encodedText = encodeURIComponent(replyText);
      
    //   const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
    //   let finalUrl = "";

    //   if (isMobile) {
    //     finalUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodedText;
    //   } else {
    //     finalUrl = "https://web.whatsapp.com/send?phone=" + WHATSAPP_NUMBER + "&text=" + encodedText;
    //   }
      
    //   window.open(finalUrl, "_blank");
    // }

/* 5. دالة الرد عبر الماسنجر (كلام موزون ورزين بدون كلمة مبرمجنا) */
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

/* الاستماع لزر الرجوع في الهاتف لإعادة إظهار واجهة الدخول المشرقة الفاتحة */
window.addEventListener("popstate", function(event) {
  document.getElementById("login-section").style.display = "block";
  document.getElementById("greeting-section").style.display = "none";
  
  if(document.getElementById("public-name-input")) document.getElementById("public-name-input").value = "";
  if(document.getElementById("private-code-input")) document.getElementById("private-code-input").value = "";
});

// 1. دالة التحكم في صوت التكبيرات مع معالجة قيود المتصفح
function toggleAudio() {
  const audio = document.getElementById("eid-audio");
  const icon = document.getElementById("audio-icon");
  const text = document.getElementById("audio-text");
  
  if (audio.paused) {
    audio.play()
      .then(() => {
        icon.textContent = "⏸️";
        text.textContent = "إيقاف التكبيرات";
      })
      .catch(err => {
        alert("الرجاء التفاعل مع الصفحة أولاً ليسمح المتصفح بتشغيل الصوت!");
        console.log("خطأ في التشغيل:", err);
      });
  } else {
    audio.pause();
    icon.textContent = "🔊";
    text.textContent = "تشغيل تكبيرات العيد";
  }
}

// 2. دالة تشغيل العداد الرقمي الحي لأيام العيد الثلاثة لعام 2026
function initEidCountdown() {
  const targetDate = new Date("May 31, 2026 18:00:00").getTime(); // نهاية العيد (عصر 13 ذي الحجة)
  const startDate = new Date("May 28, 2026 00:00:00").getTime();  // بداية أول أيام العيد

  const timerContainer = document.getElementById("eid-info-container");
  if (!timerContainer) return;

  function updateTimer() {
    const now = new Date().getTime();
    const titleText = document.getElementById("timer-title-text");

    if (now < startDate) {
      // قبل العيد (يوم عرفة)
      if(titleText) titleText.textContent = "⏳ ساعات قليلة تفصلنا عن بهجة العيد... كل عام وأنتم بخير!";
      document.getElementById("eid-days").textContent = "00";
      document.getElementById("eid-hours").textContent = "00";
      document.getElementById("eid-mins").textContent = "00";
      document.getElementById("eid-secs").textContent = "00";
      return;
    }

    const distance = targetDate - now;

    if (distance < 0) {
      // بعد انتهاء العيد
      if(titleText) titleText.textContent = "✨ عساكم من عواده.. تقبل الله منا ومنكم صالح الأعمال.";
      document.querySelector(".eid-timer-digital").style.display = "none";
      document.querySelector(".prayer-reminder").style.display = "none";
      clearInterval(intervalInterval);
      return;
    }

    // حساب الأيام، الساعات، الدقائق والثواني
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // عرض الأرقام في الخانات مع إضافة صفر إذا كان الرقم أقل من 10
    document.getElementById("eid-days").textContent = days < 10 ? "0" + days : days;
    document.getElementById("eid-hours").textContent = hours < 10 ? "0" + hours : hours;
    document.getElementById("eid-mins").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("eid-secs").textContent = seconds < 10 ? "0" + seconds : seconds;
  }

  updateTimer();
  const intervalInterval = setInterval(updateTimer, 1000);
}

// التأكد من تشغيل العداد بعد تحميل واجهة الـ HTML بالكامل لضمان ظهوره في الـ VC
document.addEventListener("DOMContentLoaded", () => {
  initEidCountdown();
});




// /* ============================================================
//        ⚙️ CONFIGURATION — إعداد المتغيرات الثابتة للأزرار الشغالة
//     ============================================================ */
//     const WHATSAPP_NUMBER = "213659272335"; // ضع رقمك الحقيقي هنا
//     const MESSENGER_LINK  = "https://www.messenger.com/t/mhmd.nafy.971323"; // رابط دردشتك المباشر المستقر

//     /* ============================================================
//        🗂️ DATABASE — قاعدة بيانات الأقارب والأكواد الخاصة
//     ============================================================ */
//     const guests = {
    
//   "A1B2C3D4": { "name": "محمد" },
//   "E5F6G7H8": { "name": "صونية" },
//   "I9J0K1L2": { "name": "فاطمة" },
//   "M3N4O5P6": { "name": "علي" },
//   "Q7R8S9T0": { "name": "عائشة" },
//   "U1V2W3X4": { "name": "عمر" },
//   "Y5Z6A7B8": { "name": "زينب" },
//   "C9D0E1F2": { "name": "يوسف" },
//   "G3H4I5J6": { "name": "مريم" },
//   "K7L8M9N0": { "name": "خالد" },
//   "O1P2Q3R4": { "name": "سارة" },
//   "S5T6U7V8": { "name": "عبد الله" },
//   "W9X0Y1Z2": { "name": "نور" },
//   "A3B4C5D6": { "name": "حمزة" },
//   "E7F8G9H0": { "name": "ليان" },
//   "I1J2K3L4": { "name": "إبراهيم" },
//   "M5N6O7P8": { "name": "رنا" },
//   "Q9R0S1T2": { "name": "حسن" },
//   "U3V4W5X6": { "name": "ريم" },
//   "Y7Z8A9B0": { "name": "مصطفى" },
//   "C1D2E3F4": { "name": "هنا" },
//   "G5H6I7J8": { "name": "طارق" },
//   "K9L0M1N2": { "name": "جنى" },
//   "O3P4Q5R6": { "name": "زياد" },
//   "S7T8U9V0": { "name": "آية" },
//   "W1X2Y3Z4": { "name": "كريم" },
//   "A5B6C7D8": { "name": "ندى" },
//   "E9F0G1H2": { "name": "سلطان" },
//   "I3J4K5L6": { "name": "حلا" },
//   "M7N8O9P0": { "name": "ياسين" }

//     };

//     /* ============================================================
//        📌 GLOBAL STATE — حالة الموقع الحالية
//     ============================================================ */
//     let loginType = "public"; // يمكن أن يكون public أو private
//     let selectedBackground = null;
//     let currentGuestName = "";
//     let finalCustomMessage = ""; // لتخزين النص المولد نهائياً وإرساله للواتساب والماسنجر

//     /* 1. دالة التنقل بين التبويب العام والخاص */
//     function switchTab(type) {
//       loginType = type;
//       const pubForm = document.getElementById("public-form");
//       const privForm = document.getElementById("private-form");
//       const tabPub = document.getElementById("tab-public");
//       const tabPriv = document.getElementById("tab-private");
//       const errorMsg = document.getElementById("error-msg");
      
//       errorMsg.style.display = "none";

//       if (type === "public") {
//         pubForm.style.display = "block";
//         privForm.style.display = "none";
//         // تنسيق الأزرار النشطة
//         tabPub.style.background = "linear-gradient(135deg, #f5d98b, #c9a227)";
//         tabPub.style.color = "#07351f";
//         tabPriv.style.background = "rgba(255,255,255,0.1)";
//         tabPriv.style.color = "#fdf6e3";
//       } else {
//         pubForm.style.display = "none";
//         privForm.style.display = "block";
//         // تنسيق الأزرار النشطة
//         tabPriv.style.background = "linear-gradient(135deg, #f5d98b, #c9a227)";
//         tabPriv.style.color = "#07351f";
//         tabPub.style.background = "rgba(255,255,255,0.1)";
//         tabPub.style.color = "#fdf6e3";
//       }
//     }

//     /* 2. الدالة الرئيسية لمعالجة الدخول للنوعين وتوليد التهنئة المدمجة */
//     function processLogin() {
//       const errorMsg = document.getElementById("error-msg");
      
//       if (loginType === "public") {
//         // --- معالجة الدخول العام بالاسم ---
//         const nameInput = document.getElementById("public-name-input");
//         const guestName = nameInput.value.trim();

//         if (guestName === "") {
//           errorMsg.textContent = "⚠️ يرجى كتابة اسمك أولاً لعرض التهنئة";
//           errorMsg.style.display = "block";
//           return;
//         }

//         currentGuestName = guestName;
//         document.getElementById("guest-name").textContent = "يا " + guestName + " الكريم";
        
//         finalCustomMessage = "كل عام وأنتم بخير وبألف صحة وعافية يا " + guestName + " بمناسبة عيد الأضحى المبارك 🌙✨\nأسأل الله أن يتقبّل منا ومنكم صالح الأعمال، وأن يجعل أيامكم كلها أفراحاً ومسرات.";

//       } else {
//         // --- معالجة الدخول الخاص للأقارب بالأكواد والصفة ---
//         const codeInput = document.getElementById("private-code-input");
//         const code = codeInput.value.trim().toUpperCase();
//         const relationSelect = document.getElementById("relation-select");
//         const selectedRelation = relationSelect.value;
//         const guest = guests[code];

//         if (!guest) {
//           errorMsg.textContent = "⚠️ الكود السرّي غير صحيح، يرجى التحقق منه!";
//           errorMsg.style.display = "block";
//           return;
//         }

//         if (!selectedRelation) {
//           errorMsg.textContent = "⚠️ يرجى تحديد صلة القرابة لتخصيص التهنئة!";
//           errorMsg.style.display = "block";
//           return;
//         }

//         // دمج الصفة مع الاسم برمجياً في الوقت نفسه (مثال: أخي إبراهيم)
//         const fullStyledName = selectedRelation + " " + guest.name;
//         currentGuestName = fullStyledName;
        
//         document.getElementById("guest-name").textContent = "يا " + fullStyledName + " ";
        
//         finalCustomMessage = "عيدك مبارك وسعيد يا " + fullStyledName + " 🕋🐑\nتقبّل الله منا ومنكم صالح الأعمال، وجعلكم من عواده بالصحة والعافية والبركة وس سائر أفراد العائلة الكريمة.";
//       }

//       // إخفاء لوحة الدخول وإظهار واجهة التهنئة المخصصة
//       errorMsg.style.display = "none";
//       document.getElementById("login-section").style.display = "none";
//       document.getElementById("greeting-section").style.display = "block";
//       document.getElementById("guest-message").textContent = finalCustomMessage;
//       // أضف هذا السطر في نهاية دالة processLogin قبل قوس الإغلاق مباشرة
//       document.getElementById("greeting-section").scrollIntoView({ behavior: "smooth", block: "start" });
//       // أضف هذا السطر قبل سطر التمرير (Scroll) في نهاية دالة processLogin
//       history.pushState({ page: "greeting" }, "");
//     }

//     /* 3. دالة اختيار الخلفية */
//     function selectBackground(bg) {
//       selectedBackground = bg;
//       const cards = document.getElementsByClassName("bg-card");
//       for (let i = 0; i < cards.length; i++) {
//         cards[i].classList.remove("selected");
//       }
//       document.getElementById("card-" + bg).classList.add("selected");
      
//       const hints = { kaaba: "🕋 خلفية الكعبة المشرفة", sheep: "🐑 خلفية خروف العيد", islamic: "☪️ خلفية إسلامية فاخرة" };
//       document.getElementById("selection-hint").textContent = "✅ اخترت: " + hints[bg];
//     }

//     /* 4. دالة الرد عبر الواتساب (تعديل: إرسال اسم الشخص النقي بدون صلة القرابة) */
//     function replyViaWhatsApp() {
//       if (!selectedBackground) { 
//         alert("⚠️ يرجى اختيار خلفية أولاً!"); 
//         return; 
//       }
      
//       const icons = { kaaba: "🕋", sheep: "🐑", islamic: "☪️" };
      
//       // هنا نقوم بتنظيف الاسم: إذا كان الدخول خاصاً، نأخذ الاسم النقي فقط من الخانة ونترك الصفة
//       let senderName = currentGuestName;
//       if (loginType === "private") {
//         const code = document.getElementById("private-code-input").value.trim().toUpperCase();
//         if (guests[code]) {
//           senderName = guests[code].name; // جلب الاسم فقط (مثل: إبراهيم) دون صلة القرابة
//         }
//       }

//       // بناء نص الجواب الموجه لك باسم الشخص فقط
//       const replyText = "مرحباً محمد نافي، أنا " + senderName + " قمت باختيار " + icons[selectedBackground] + " للرد على تهنئتك الجميلة! كل عام وأنت بخير ونجاح مبرمجنا الغالي 🎉";
//       const encodedText = encodeURIComponent(replyText);
      
//       const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
//       let finalUrl = "";

//       if (isMobile) {
//         finalUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodedText;
//       } else {
//         finalUrl = "https://web.whatsapp.com/send?phone=" + WHATSAPP_NUMBER + "&text=" + encodedText;
//       }
      
//       window.open(finalUrl, "_blank");
//     }

//     /* 5. دالة الرد عبر الماسنجر (تعديل: إرسال اسم الشخص النقي بدون صلة القرابة) */
//     function replyViaMessenger() {
//       if (!selectedBackground) { 
//         alert("⚠️ يرجى اختيار خلفية أولاً!"); 
//         return; 
//       }
      
//       const icons = { kaaba: "🕋", sheep: "🐑", islamic: "☪️" };
      
//       // تنظيف الاسم وجلب الاسم النقي للأقارب أيضاً هنا
//       let senderName = currentGuestName;
//       if (loginType === "private") {
//         const code = document.getElementById("private-code-input").value.trim().toUpperCase();
//         if (guests[code]) {
//           senderName = guests[code].name;
//         }
//       }

//       const replyText = "مرحباً محمد نافي، أنا " + senderName + " قمت باختيار " + icons[selectedBackground] + " للرد على تهنئتك الجميلة! كل عام وأنت بخير ونجاح مبرمجنا الغالي 🎉";
      
//       // نسخ نص الرد النظيف تلقائياً في حافظة هاتف الزائر
//       navigator.clipboard.writeText(replyText)
//         .then(() => console.log("تم نسخ نص الرد بنجاح!"))
//         .catch(err => console.error("فشل النسخ: ", err));
      
//       // فتح رابط محادثتك المباشر المستقر
//       window.open(MESSENGER_LINK, "_blank");
//     }


// // الاستماع لزر الرجوع في الهاتف لإعادة إظهار واجهة الدخول
// window.addEventListener("popstate", function(event) {
//   // إعادة إظهار لوحة الدخول وإخفاء التهنئة
//   document.getElementById("login-section").style.display = "block";
//   document.getElementById("greeting-section").style.display = "none";
  
//   // تصفير الحقول لراحة المستخدم
//   if(document.getElementById("public-name-input")) document.getElementById("public-name-input").value = "";
//   if(document.getElementById("private-code-input")) document.getElementById("private-code-input").value = "";
// });











