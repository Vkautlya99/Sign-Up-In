let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let UnderLine = document.querySelector('.underline');
let text = document.querySelector('.text');

signInBtn.addEventListener('click', () => {
    nameField.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    text.innerHTML = 'Lost Password '
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    UnderLine.style.transform = 'translateX(35px)';

    
})

signUpBtn.addEventListener('click', () => {
    nameField.style.maxHeight = '80px';
    title.innerHTML = 'Sign Up';
    title.style.fontFamily = 'Sanas-Serif';
    text.innerHTML = 'Password Suggestion !  '
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    UnderLine.style.transform = 'translateX(0px)';


})





