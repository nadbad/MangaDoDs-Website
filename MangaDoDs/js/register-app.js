const registerBtn = document.getElementById('register');

registerBtn.addEventListener('click', () => {
    const pass = document.getElementById('password');
    const conPass = document.getElementById('confirm-password');
    const warnLength = document.getElementById('warning-length');
    const warnCon = document.getElementById('warning-confirm');

    if (pass.value !== conPass.value) {
        warnCon.style.display = 'block';
        pass.value = '';
        conPass.value = '';
    };
});
