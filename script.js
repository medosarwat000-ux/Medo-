
// ==============================
// Batty Love Website ❤️
// ==============================

// الباسورد: تاريخ ميلاد بطتي
const correctPassword = "15/3/2005";


// ==============================
// التحقق من الباسورد 🔐
// ==============================

function checkPassword() {

    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error");

    const password = passwordInput.value.trim();

    if (password === correctPassword) {

        // إخفاء شاشة تسجيل الدخول
        document.getElementById("loginScreen")
            .classList.add("hidden");

        // إظهار الشاشة الرئيسية
        document.getElementById("loveScreen")
            .classList.remove("hidden");

        errorMessage.textContent = "";

    } else {

        errorMessage.textContent =
            "الباسورد غلط يا بطتي ❤️ حاولي تاني";

        passwordInput.value = "";

        passwordInput.focus();
    }
}


// ==============================
// فتح الظرف 💌
// ==============================

function openLetter() {

    const envelopeTop =
        document.querySelector(".envelope-top");

    const letter =
        document.querySelector(".letter");

    // فتح غطاء الظرف
    envelopeTop.style.transform =
        "rotateX(180deg)";

    // رفع الرسالة من الظرف
    setTimeout(function () {

        letter.style.transform =
            "translateY(-100px)";

    }, 400);


    // الانتقال للرسالة
    setTimeout(function () {

        document.getElementById("loveScreen")
            .classList.add("hidden");

        document.getElementById("letterScreen")
            .classList.remove("hidden");

    }, 1500);
}


// ==============================
// شاشة الأغنية 🎵
// ==============================

function showSong() {

    // إخفاء الرسالة
    document.getElementById("letterScreen")
        .classList.add("hidden");

    // إظهار شاشة الأغنية
    document.getElementById("songScreen")
        .classList.remove("hidden");

    // تشغيل الأغنية
    const song = document.getElementById("song");

    if (song) {

        song.play().catch(function () {

            console.log(
                "اضغط زر التشغيل في مشغل الأغنية لبدء الموسيقى."
            );

        });

    }
}


// ==============================
// السماح باستخدام Enter 🔐
// ==============================

document.addEventListener("DOMContentLoaded", function () {

    const passwordInput =
        document.getElementById("password");

    passwordInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                checkPassword();

            }

        }
    );

});
