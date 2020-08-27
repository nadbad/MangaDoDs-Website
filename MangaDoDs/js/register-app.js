const registerBtn = document.getElementById('register');
const pass = document.getElementById('password');
const conPass = document.getElementById('confirm-password');
const warnLength = document.getElementById('warning-length');
const warnCon = document.getElementById('warning-confirm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const warnEamil = document.getElementById('warning-email');
const warnNameShort = document.getElementById('warning-name-short');
const warnNameLong = document.getElementById('warning-name-long');
const expression = /\S+@\S+/

registerBtn.addEventListener('click', () => {
    if (pass.value.length < 8) {
        warnLength.style.display = 'block';
        pass.value = '';
        conPass.value = '';

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    } else if (pass.value !== conPass.value) {
        warnCon.style.display = 'block';
        pass.value = '';
        conPass.value = '';

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    } else if (name.value.length < 4) {
        warnNameShort.style.display = 'block';

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    } else if (name.value.length > 14) {
        warnNameLong.style.display = 'block';

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    } else if (expression.test(email.value) === false) {
        warnEamil.style.display = 'block';

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    } else {
        window.location.replace("http://127.0.0.1:5500/html/loggedin.html");
    }
});

function clearAlert() {
    if (warnLength) {
        warnLength.style.display = 'none';
    };
    if (warnCon) {
        warnCon.style.display = 'none';
    };
    if (warnNameLong) {
        warnNameLong.style.display = 'none';
    };
    if (warnNameShort) {
        warnNameShort.style.display = 'none';
    };
    if (warnEamil) {
        warnEamil.style.display = 'none';
    };
};


function openSlideMenu() {
    side = document.getElementById('side-menu').style.width = '300px';
    main = document.getElementById('main').style.marginLeft = '300px';
}

function closeSlideMenu() {
    side = document.getElementById('side-menu').style.width = '0';
    main = document.getElementById('main').style.marginLeft = '0';
}