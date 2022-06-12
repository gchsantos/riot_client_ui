const inputs = document.querySelectorAll('.input');
const loginButton = document.querySelector('.login__button');
const minimizeButton = document.querySelector('.nav__button_minimize');
const closeButton = document.querySelector('.nav__button_close');

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
    if (!target.value) {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}

const handleLoginButton = () => {
    let buttonIsEnable = true;
    inputs.forEach((element) => {
        if (!element.value) {
            buttonIsEnable = false;
            return;
        }
    })

    if (buttonIsEnable) {
        loginButton.removeAttribute('disabled');
    } else {
        loginButton.setAttribute('disabled', '');
    }
}

const close_window = () => {
    app.window.close();
}

const minimize_window = () => {
    app.window.minimize();
}

inputs.forEach((element) => element.addEventListener('focus', handleFocus));
inputs.forEach((element) => element.addEventListener('focusout', handleFocusOut));
inputs.forEach((element) => element.addEventListener('input', handleLoginButton));
closeButton.addEventListener('click', close_window);
minimizeButton.addEventListener('click', minimize_window);
