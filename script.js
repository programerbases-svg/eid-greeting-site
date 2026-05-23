/* ============================================================
       ⚙️ CONFIGURATION — إعداد المتغيرات الثابتة للأزرار الشغالة
    ============================================================ */
    const WHATSAPP_NUMBER = "213659272335"; // ضع رقمك الحقيقي هنا
    const MESSENGER_LINK  = "https://www.messenger.com/t/mhmd.nafy.971323"; // رابط دردشتك المباشر المستقر

    /* ============================================================
       🗂️ DATABASE — قاعدة بيانات الأقارب والأكواد الخاصة
    ============================================================ */
    const guests = {
    
  "A1B2C3D4": { "name": "محمد" },
  "E5F6G7H8": { "name": "أحمد" },
  "I9J0K1L2": { "name": "فاطمة" },
  "M3N4O5P6": { "name": "علي" },
  "Q7R8S9T0": { "name": "عائشة" },
  "U1V2W3X4": { "name": "عمر" },
  "Y5Z6A7B8": { "name": "زينب" },
  "C9D0E1F2": { "name": "يوسف" },
  "G3H4I5J6": { "name": "مريم" },
  "K7L8M9N0": { "name": "خالد" },
  "O1P2Q3R4": { "name": "سارة" },
  "S5T6U7V8": { "name": "عبد الله" },
  "W9X0Y1Z2": { "name": "نور" },
  "A3B4C5D6": { "name": "حمزة" },
  "E7F8G9H0": { "name": "ليان" },
  "I1J2K3L4": { "name": "إبراهيم" },
  "M5N6O7P8": { "name": "رنا" },
  "Q9R0S1T2": { "name": "حسن" },
  "U3V4W5X6": { "name": "ريم" },
  "Y7Z8A9B0": { "name": "مصطفى" },
  "C1D2E3F4": { "name": "هنا" },
  "G5H6I7J8": { "name": "طارق" },
  "K9L0M1N2": { "name": "جنى" },
  "O3P4Q5R6": { "name": "زياد" },
  "S7T8U9V0": { "name": "آية" },
  "W1X2Y3Z4": { "name": "كريم" },
  "A5B6C7D8": { "name": "ندى" },
  "E9F0G1H2": { "name": "سلطان" },
  "I3J4K5L6": { "name": "حلا" },
  "M7N8O9P0": { "name": "ياسين" }

    };

    /* ============================================================
       📌 GLOBAL STATE — حالة الموقع الحالية
    ============================================================ */
    let loginType = "public"; // يمكن أن يكون public أو private
    let selectedBackground = null;
    let currentGuestName = "";
    let finalCustomMessage = ""; // لتخزين النص المولد نهائياً وإرساله للواتساب والماسنجر

    /* 1. دالة التنقل بين التبويب العام والخاص */
    function switchTab(type) {
      loginType = type;
      const pubForm = document.getElementById("public-form");
      const privForm = document.getElementById("private-form");
      const tabPub = document.getElementById("tab-public");
      const tabPriv = document.getElementById("tab-private");
      const errorMsg = document.getElementById("error-msg");
      
      errorMsg.style.display = "none";

      if (type === "public") {
        pubForm.style.display = "block";
        privForm.style.display = "none";
        // تنسيق الأزرار النشطة
        tabPub.style.background = "linear-gradient(135deg, #f5d98b, #c9a227)";
        tabPub.style.color = "#07351f";
        tabPriv.style.background = "rgba(255,255,255,0.1)";
        tabPriv.style.color = "#fdf6e3";
      } else {
        pubForm.style.display = "none";
        privForm.style.display = "block";
        // تنسيق الأزرار النشطة
        tabPriv.style.background = "linear-gradient(135deg, #f5d98b, #c9a227)";
        tabPriv.style.color = "#07351f";
        tabPub.style.background = "rgba(255,255,255,0.1)";
        tabPub.style.color = "#fdf6e3";
      }
    }

    /* 2. الدالة الرئيسية لمعالجة الدخول للنوعين وتوليد التهنئة المدمجة */
    function processLogin() {
      const errorMsg = document.getElementById("error-msg");
      
      if (loginType === "public") {
        // --- معالجة الدخول العام بالاسم ---
        const nameInput = document.getElementById("public-name-input");
        const guestName = nameInput.value.trim();

        if (guestName === "") {
          errorMsg.textContent = "⚠️ يرجى كتابة اسمك أولاً لعرض التهنئة";
          errorMsg.style.display = "block";
          return;
        }

        currentGuestName = guestName;
        document.getElementById("guest-name").textContent = "يا " + guestName + " الكريم";
        
        finalCustomMessage = "كل عام وأنتم بخير وبألف صحة وعافية يا " + guestName + " بمناسبة عيد الأضحى المبارك 🌙✨\nأسأل الله أن يتقبّل منا ومنكم صالح الأعمال، وأن يجعل أيامكم كلها أفراحاً ومسرات.";

      } else {
        // --- معالجة الدخول الخاص للأقارب بالأكواد والصفة ---
        const codeInput = document.getElementById("private-code-input");
        const code = codeInput.value.trim().toUpperCase();
        const relationSelect = document.getElementById("relation-select");
        const selectedRelation = relationSelect.value;
        const guest = guests[code];

        if (!guest) {
          errorMsg.textContent = "⚠️ الكود السرّي غير صحيح، يرجى التحقق منه!";
          errorMsg.style.display = "block";
          return;
        }

        if (!selectedRelation) {
          errorMsg.textContent = "⚠️ يرجى تحديد صلة القرابة لتخصيص التهنئة!";
          errorMsg.style.display = "block";
          return;
        }

        // دمج الصفة مع الاسم برمجياً في الوقت نفسه (مثال: أخي إبراهيم)
        const fullStyledName = selectedRelation + " " + guest.name;
        currentGuestName = fullStyledName;
        
        document.getElementById("guest-name").textContent = "يا " + fullStyledName + " الغالي";
        
        finalCustomMessage = "عيدك مبارك وسعيد يا " + fullStyledName + " 🕋🐑\nتقبّل الله منا ومنكم صالح الأعمال، وجعلكم من عواده بالصحة والعافية والبركة وس سائر أفراد العائلة الكريمة.";
      }

      // إخفاء لوحة الدخول وإظهار واجهة التهنئة المخصصة
      errorMsg.style.display = "none";
      document.getElementById("login-section").style.display = "none";
      document.getElementById("greeting-section").style.display = "block";
      document.getElementById("guest-message").textContent = finalCustomMessage;
      // أضف هذا السطر في نهاية دالة processLogin قبل قوس الإغلاق مباشرة
      document.getElementById("greeting-section").scrollIntoView({ behavior: "smooth", block: "start" });
      // أضف هذا السطر قبل سطر التمرير (Scroll) في نهاية دالة processLogin
      history.pushState({ page: "greeting" }, "");
    }

    /* 3. دالة اختيار الخلفية */
    function selectBackground(bg) {
      selectedBackground = bg;
      const cards = document.getElementsByClassName("bg-card");
      for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove("selected");
      }
      document.getElementById("card-" + bg).classList.add("selected");
      
      const hints = { kaaba: "🕋 خلفية الكعبة المشرفة", sheep: "🐑 خلفية خروف العيد", islamic: "☪️ خلفية إسلامية فاخرة" };
      document.getElementById("selection-hint").textContent = "✅ اخترت: " + hints[bg];
    }

    /* 4. دالة الرد عبر الواتساب (تعديل: إرسال اسم الشخص النقي بدون صلة القرابة) */
    function replyViaWhatsApp() {
      if (!selectedBackground) { 
        alert("⚠️ يرجى اختيار خلفية أولاً!"); 
        return; 
      }
      
      const icons = { kaaba: "🕋", sheep: "🐑", islamic: "☪️" };
      
      // هنا نقوم بتنظيف الاسم: إذا كان الدخول خاصاً، نأخذ الاسم النقي فقط من الخانة ونترك الصفة
      let senderName = currentGuestName;
      if (loginType === "private") {
        const code = document.getElementById("private-code-input").value.trim().toUpperCase();
        if (guests[code]) {
          senderName = guests[code].name; // جلب الاسم فقط (مثل: إبراهيم) دون صلة القرابة
        }
      }

      // بناء نص الجواب الموجه لك باسم الشخص فقط
      const replyText = "مرحباً محمد نافي، أنا " + senderName + " قمت باختيار " + icons[selectedBackground] + " للرد على تهنئتك الجميلة! كل عام وأنت بخير ونجاح مبرمجنا الغالي 🎉";
      const encodedText = encodeURIComponent(replyText);
      
      const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
      let finalUrl = "";

      if (isMobile) {
        finalUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodedText;
      } else {
        finalUrl = "https://web.whatsapp.com/send?phone=" + WHATSAPP_NUMBER + "&text=" + encodedText;
      }
      
      window.open(finalUrl, "_blank");
    }

    /* 5. دالة الرد عبر الماسنجر (تعديل: إرسال اسم الشخص النقي بدون صلة القرابة) */
    function replyViaMessenger() {
      if (!selectedBackground) { 
        alert("⚠️ يرجى اختيار خلفية أولاً!"); 
        return; 
      }
      
      const icons = { kaaba: "🕋", sheep: "🐑", islamic: "☪️" };
      
      // تنظيف الاسم وجلب الاسم النقي للأقارب أيضاً هنا
      let senderName = currentGuestName;
      if (loginType === "private") {
        const code = document.getElementById("private-code-input").value.trim().toUpperCase();
        if (guests[code]) {
          senderName = guests[code].name;
        }
      }

      const replyText = "مرحباً محمد نافي، أنا " + senderName + " قمت باختيار " + icons[selectedBackground] + " للرد على تهنئتك الجميلة! كل عام وأنت بخير ونجاح مبرمجنا الغالي 🎉";
      
      // نسخ نص الرد النظيف تلقائياً في حافظة هاتف الزائر
      navigator.clipboard.writeText(replyText)
        .then(() => console.log("تم نسخ نص الرد بنجاح!"))
        .catch(err => console.error("فشل النسخ: ", err));
      
      // فتح رابط محادثتك المباشر المستقر
      window.open(MESSENGER_LINK, "_blank");
    }


// الاستماع لزر الرجوع في الهاتف لإعادة إظهار واجهة الدخول
window.addEventListener("popstate", function(event) {
  // إعادة إظهار لوحة الدخول وإخفاء التهنئة
  document.getElementById("login-section").style.display = "block";
  document.getElementById("greeting-section").style.display = "none";
  
  // تصفير الحقول لراحة المستخدم
  if(document.getElementById("public-name-input")) document.getElementById("public-name-input").value = "";
  if(document.getElementById("private-code-input")) document.getElementById("private-code-input").value = "";
});











// /* ============================================================
//    ⚙️ CONFIGURATION — إعداد المتغيرات الثابتة (تُنطق: كونست)
// ============================================================ */
// // إنشاء متغير ثابت لتخزين رقم الهاتف للواتساب بالصيغة الدولية (تُنطق: كونست واتساب نمبر)
// const WHATSAPP_NUMBER = "213659272335"; 
// // إنشاء متغير ثابت لتخزين رابط حساب الماسنجر الشخصي (تُنطق: كونست ميسينجر لينك)
// // // قم بتغيير ما بين القوسين فقط في هذا السطر الموجود في الأعلى:
// const MESSENGER_LINK  = "https://www.messenger.com/t/mhmd.nafy.971323";
// /* ============================================================
//    🗂️ DATABASE — قاعدة بيانات الضيوف والأكواد كـ Object كلاسيكي
// ============================================================ */
// // مصفوفة كائنية تحتوي على الكود ومجموعة بيانات كل صديق (تُنطق: كونست غيستس)
// const guests = {
//   // المفتاح الأول ويمثل الكود الخاص بأبو أحمد
//   "23": {
//     name: "أبو أحمد",
//     message: "كل عام وأنتم بخير يا أبو أحمد 🌙\nأسأل الله أن يتقبّل منا ومنكم صالح الأعمال وأن يعيدكم بالصحة والعافية.",
//   },
//   // المفتاح الثاني ويمثل الكود الخاص بأم سعد
//   "GUEST02": {
//     name: "أم سعد",
//     message: "عيد أضحى مبارك يا أم سعد 🐑✨\nتقبّل الله منا ومنكم وجعل هذا العيد فرحةً لقلبكم ولأهل بيتكم.",
//   },
//   "GUEST03": {
//     name: "عمي الكريم",
//     message: "كل عام وأنت بخير وعافية يا عمي 🕋\nأسأل الله أن يديم عليك نعمة الصحة السعادة في هذا العيد المبارك.",
//   },
//   "GUEST04": {
//     name: "خالتي الغالية",
//     message: "عيد سعيد يا خالتي الغالية 🌸\nكل عام وأنتِ وأسرتكِ الكريمة بألف خير وبركة.",
//   }
// };

// /* ============================================================
//    🖼️ MESSAGES GENERATOR — دوال توليد النصوص التلقائية حسب الاختيار
// ============================================================ */
// // كائن يحتوي على دوال تمرر اسم الصديق لدمجه بالرسالة (تُنطق: كونست بي جي ميسيجس)
// const bgMessages = {
//   // دالة توليد رسالة الكعبة (تُنطق: كابّا)
//   kaaba: function(name) {
//     // إرجاع النص المدمج مع اسم الشخص الممرر كـ Parameter (تُنطق: ريتيرن)
//     return "🕋 بسم الله الرحمن الرحيم\n\nكل عام وأنت بخير يا محمد 🌙\n\nبعثت إليك هذه التهنئة من أمام الكعبة المشرفة رمزاً،\nأسأل الله أن يتقبّل منا ومنك ويبلّغنا وإياك بيته الحرام.\n\nمع محبة " + name + " 💛";
//   },
//   // دالة توليد رسالة الخروف (تُنطق: شيب)
//   sheep: function(name) {
//     return "🐑 عيد الأضحى المبارك يا محمد!\n\nكل عام وأنت وأهلك بخير وصحة وسعادة 🌿\nأسأل الله أن تكون أضحيتك مقبولة وأن يعيد عليك هذا العيد بالفرح والهناء.\n\nمن: " + name + " 💚";
//   },
//   // دالة توليد رسالة النمط الإسلامي الفاخر (تُنطق: إسلاميك)
//   islamic: function(name) {
//     return "☪️ السلام عليكم ورحمة الله يا محمد\n\n✨ عيد أضحى مبارك وكل عام وأنت بخير ✨\n\nتقبّل الله منا ومنك صالح الأعمال\nوأعادك بالسعادة والعافية والسرور.\n\nبكل محبة، " + name + " 💛";
//   }
// };

// /* ============================================================
//    📌 GLOBAL STATE — متغيرات عامة ديناميكية (تُنطق: ليت)
// ============================================================ */
// // متغير لتخزين اسم الخلفية التي حددها الصديق حالياً (تُنطق: ليت سيلكتد باك جراوند)
// let selectedBackground = null;
// // متغير لتخزين اسم الصديق الحالي الذي نجح في تسجيل الدخول (تُنطق: ليت كارنت غيست نيم)
// let currentGuestName   = "";

// /* ============================================================
//    🛠️ FUNCTIONS — الدوال الأكاديمية (تُنطق: فانكشن)
// ============================================================ */

// // // 1. دالة التحقق من صحة الكود المدخل (تُنطق: فانكشن تشيك كود)
// // function checkCode() {
// //   // جلب عنصر حقل الإدخال من الـ HTML (تُنطق: دوكيومنت دوت غيت إليمنت باي آي دي)
// //   const codeInput = document.getElementById("code-input");
// //   // استخراج النص من الحقل وتنظيف الفراغات وتحويل الحروف لكبيرة (تُنطق: فاليو دوت تريم دوت تو أوبّر كيس)
// //   const code = codeInput.value.trim().toUpperCase();
// //   // البحث عن الكود داخل الكائن وقاعدة البيانات الصغيرة لدينا
// //   const guest = guests[code];
// //   // جلب عنصر رسالة الخطأ من الـ HTML
// //   const errorMsg = document.getElementById("error-msg");

// //   // شرط في حال لم يتم العثور على الكود (تُنطق: إف نات غيست)
// //   if (!guest) {
// //     // إظهار رسالة الخطأ للمستخدم عبر الـ CSS الكلاسيكي
// //     errorMsg.style.display = "block";
// //     // إنهاء تنفيذ الدالة فوراً (تُنطق: ريتيرن)
// //     return;
// //   }

// //   // في حال كان الكود صحيحاً، إخفاء رسالة الخطأ أولاً
// //   errorMsg.style.display = "none";
  
// //   // استبدال النص الافتراضي باسم الصديق الحقيقي المكتوب في قاعدة البيانات
// //   document.getElementById("guest-name").textContent = guest.name;
// //   // استبدال نص التهنئة بالنص المخصص لهذا الصديق
// //   document.getElementById("guest-message").textContent = guest.message;
// //   // تخزين اسم الصديق في المتغير العام لاستخدامه لاحقاً في رسالة الرد
// //   currentGuestName = guest.name;

// //   // إخفاء صندوق إدخال الكود لمنع التشويش
// //   document.getElementById("login-section").style.display = "none";
// //   // إظهار بطاقة التهنئة وقسم الردود الجاهزة على الشاشة
// //   document.getElementById("greeting-section").style.display = "block";
// // }

// function checkCode() {
//       // قراءة ما كتبه الزائر في حقل الإدخال
//       const nameInput = document.getElementById("code-input");
//       const guestName = nameInput.value.trim();
//       const errorMsg = document.getElementById("error-msg");

//       // التحقق من أن الحقل ليس فارغاً
//       if (guestName === "") {
//         errorMsg.style.display = "block";
//         return;
//       }

//       errorMsg.style.display = "none";
      
//       // حفظ الاسم في المتغير العام لاستخدامه لاحقاً عند الرد
//       currentGuestName = guestName;

//       // تحديث واجهة التهنئة باسم الزائر مباشرة
//       document.getElementById("guest-name").textContent = "يا " + guestName + " الكريم";
      
//       // توليد نص تهنئة ديناميكي فخم يدمج اسم الزائر تلقائياً
//       const customMessage = "كل عام وأنتم بخير وبألف صحة وعافية يا " + guestName + " بمناسبة عيد الأضحى المبارك 🌙✨\nأسأل الله أن يتقبّل منا ومنكم صالح الأعمال، وأن يجعل أيامكم كلها أفراحاً ومسرات وأن يعيدكم بالخير والبركات.";
      
//       document.getElementById("guest-message").textContent = customMessage;

//       // إخفاء صندوق الإدخال وإظهار بطاقة التهنئة الساحرة
//       document.getElementById("login-section").style.display = "none";
//       document.getElementById("greeting-section").style.display = "block";
//     }

// // 2. دالة تحديد وتظليل بطاقة الخلفية المختارة (تُنطق: فانكشن سيلكت باك جراوند)
// function selectBackground(bg) {
//   // حفظ اسم الخلفية المختارة في المتغير العام
//   selectedBackground = bg;
  
//   // جلب جميع العناصر التي تحمل كلاس بطاقة الخلفية لعمل حلقة (تُنطق: غيت إليمنتس باي كلاس نيم)
//   const cards = document.getElementsByClassName("bg-card");
//   // حلقة تكرارية كلاسيكية للمرور على كافة البطاقات (تُنطق: فور لوب)
//   for (let i = 0; i < cards.length; i++) {
//     // إزالة كلاس التظليل (selected) من كل البطاقات لضمان عدم تداخل الاختيارات
//     cards[i].classList.remove("selected");
//   }
  
//   // إضافة كلاس التظليل للبطاقة الحالية التي ضغط عليها الصديق فقط لتبدو مضيئة
//   document.getElementById("card-" + bg).classList.add("selected");
  
//   // إعداد نصوص التلميح التوضيحية باللغة العربية
//   const hints = { kaaba: "🕋 خلفية الكعبة المشرفة", sheep: "🐑 خلفية خروف العيد", islamic: "☪️ خلفية إسلامية فاخرة" };
//   // تحديث النص السفل على الشاشة ليؤكد للصديق نجاح اختياره
//   document.getElementById("selection-hint").textContent = "✅ اخترت: " + hints[bg];
// }

// function replyViaWhatsApp() {
//   if (!selectedBackground) { 
//     alert("⚠️ يرجى اختيار خلفية أولاً!"); 
//     return; 
//   }
  
//   // توليد النص التلقائي بناءً على اسم الضيف الحالي والخلفية التي اختارها
//   const messageText = bgMessages[selectedBackground](currentGuestName);
//   // تشفير النص ليفهمه متصفح الإنترنت والرابط بدون مشاكل (تُنطق: إنكود يور آي كومبوننت)
//   const encodedText = encodeURIComponent(messageText);
  
//   const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
//   let finalUrl = "";

//   if (isMobile) {
//     // على الهاتف: يفتح التطبيق مباشرة والنص مكتوب داخل صندوق الإرسال
//     finalUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodedText;
//   } else {
//     // على الحاسوب: يفتح واتساب ويب والنص جاهز في الصندوق
//     finalUrl = "https://web.whatsapp.com/send?phone=" + WHATSAPP_NUMBER + "&text=" + encodedText;
//   }
  
//   window.open(finalUrl, "_blank");
// }

// // 3. دالة معالجة الإرسال والرد التلقائي عبر تطبيق واتساب (تُنطق: فانكشن ريبلاي فيا واتساب)
// // 3. دالة فتح محادثة واتساب مباشرة (مثل آلية عمل المسنجر تماماً)
// // function replyViaWhatsApp() {
// //   // التحقق أولاً إذا لم يقم الصديق باختيار أي خلفية
// //   if (!selectedBackground) { 
// //     alert("⚠️ يرجى اختيار خلفية أولاً!"); 
// //     return; 
// //   }
  
// //   // بناء رابط فتح المحادثة المباشرة برقمك فقط بدون إرفاق أي نصوص معقدة
// //   // هذا الرابط مستقر 100% ويفتح التطبيق فوراً على الهاتف أو المتصفح
// //   const finalUrl = "https://wa.me/" + WHATSAPP_NUMBER;
  
// //   // فتح الرابط في نافذة جديدة
// //   window.open(finalUrl, "_blank");
// // }


// // 4. دالة فتح محادثة ماسنجر فيسبوك (النسخة الأصلية الشغالة مع ميزة النسخ الذكي)
// function replyViaMessenger() {
//   if (!selectedBackground) { 
//     alert("⚠️ يرجى اختيار خلفية أولاً!"); 
//     return; 
//   }
  
//   // 1. توليد نص التهنئة التلقائي بناءً على الخلفية واسم الضيف الحالي
//   // (هذا السطر يعتمد على كائن bgMessages المعرف في كودك الأصلي)
//   if (typeof bgMessages !== 'undefined' && bgMessages[selectedBackground] && currentGuestName) {
//     const messageText = bgMessages[selectedBackground](currentGuestName);
    
//     // 2. نسخ النص تلقائياً لحافظة جهاز الزائر ليقوم بلصقه فوراً في المحادثة
//     navigator.clipboard.writeText(messageText)
//       .then(() => console.log("تم نسخ التهنئة للحافظة!"))
//       .catch(err => console.error("لم يتم النسخ التلقائي: ", err));
//   }
  
//   // 3. فتح رابط محادثة الماسنجر الخاصة بك مباشرة والمستقرة 100% كما كانت
//   window.open(MESSENGER_LINK, "_blank");
// }

// // //4. دالة فتح محادثة ماسنجر فيسبوك (تُنطق: فانكشن ريبلاي فيا ميسينجر)
// // function replyViaMessenger() {
// //   if (!selectedBackground) { 
// //     alert("⚠️ يرجى اختيار خلفية أولاً!"); 
// //     return; 
// //   }
// //   // فتح رابط محادثة الماسنجر الخاصة بك مباشرة في نافذة جديدة
// //   window.open(MESSENGER_LINK, "_blank");
// // }

// // // 5. الاستماع للوحة المفاتيح لتفعيل زر الدخول عند الضغط على مفتاح Enter (تُنطق: أد إيفينت ليسينر)
// // document.getElementById("code-input").addEventListener("keydown", function(e) {
// //   // إذا كان المفتاح المضغوط هو مفتاح الإدخال الشهير (تُنطق: إف إي دوت كي إيكوال إنتر)
// //   if (e.key === "Enter") {
// //     // تنفيذ دالة الفحص تلقائياً ودخول الموقع لراحة المستخدم
// //     checkCode();
// //   }
// // });