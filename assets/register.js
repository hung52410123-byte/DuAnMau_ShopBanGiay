document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    let countdown = 30;
    const countdownEl = document.getElementById('countdown');

    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePassword.textContent = 'visibility_off';
        } else {
            passwordInput.type = 'password';
            togglePassword.textContent = 'visibility';
        }
    });

    // Đếm ngược Resend code (chỉ để đẹp)
    const timer = setInterval(() => {
        countdown--;
        if (countdownEl) countdownEl.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(timer);
        }
    }, 1000);

    // Xử lý submit form → Chuyển thẳng sang Profile
    form.addEventListener('submit', (e) => {
        e.preventDefault();   // Ngăn form submit mặc định

        // Có thể thêm validation đơn giản ở đây nếu muốn

        // Chuyển sang trang Profile
        window.location.href = "/Hưng/profile.html";
    });
});