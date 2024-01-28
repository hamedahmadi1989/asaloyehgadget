document.addEventListener("DOMContentLoaded", function() {
    const eyeIcon = document.querySelector('.eye-icon');
    const passwordInput = document.querySelector('#in-pass');

    eyeIcon.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });
});