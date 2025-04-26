document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const passwordInput = document.getElementById('password');

    // التحقق من قوة كلمة المرور
    passwordInput.addEventListener('input', function () {
        const strength = checkPasswordStrength(passwordInput.value);
        passwordInput.style.borderColor = strength.color;
    });

    // منع الإرسال الوهمي إذا كانت بعض الحقول ناقصة
    form.addEventListener('submit', function (e) {
        if (!form.checkValidity()) {
            alert('يرجى تعبئة جميع الحقول المطلوبة بشكل صحيح.');
            e.preventDefault();
            return;
        }

        // تنبيه وهمي للنجاح (لا يتم الإرسال فعليًا)
        e.preventDefault();
        alert('تم إرسال النموذج بنجاح!');
        form.reset();
    });

    function checkPasswordStrength(password) {
        let strength = { color: 'red' };

        if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
            strength.color = 'green';
        } else if (password.length >= 6) {
            strength.color = 'orange';
        }
        function registerAccount() {
            alert("تم الضغط على زر تسجيل حساب! (يمكنك تخصيص هذا الإجراء)");
            // مثال: افتح صفحة جديدة
            // window.location.href = "signup.html";
        }
        function loginWithGoogle() {
            alert("تسجيل الدخول عبر Google غير مفعل حالياً، لكن يمكن ربطه لاحقاً بـ OAuth أو Firebase.");
            // مثال: window.location.href = "google-login.php";
        }
        
        function loginWithFacebook() {
            alert("تسجيل الدخول عبر Facebook غير مفعل حالياً، لكن يمكن ربطه لاحقاً بـ OAuth أو Facebook SDK.");
            // مثال: window.location.href = "facebook-login.php";
        }
        

        return strength;
    }
});
