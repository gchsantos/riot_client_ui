const inputs = document.querySelectorAll('.input');
const loginButton = document.querySelector('.login__button');

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
        if (!element.value){
            buttonIsEnable = false;
            return;
        }
    })

    if (buttonIsEnable){
        loginButton.removeAttribute('disabled');
    }else{
        loginButton.setAttribute('disabled','');
    }
}

inputs.forEach((element) => element.addEventListener('focus', handleFocus));
inputs.forEach((element) => element.addEventListener('focusout', handleFocusOut));
inputs.forEach((element) => element.addEventListener('input', handleLoginButton));
