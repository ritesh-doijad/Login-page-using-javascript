
const signInButton = document.querySelector(".signinbtn");
const signUpButton = document.querySelector(".signupbtn");
const nameField = document.querySelector(".input-name");
const forgetPass = document.querySelector(".forget-pass");
const title = document.querySelector(".title");


signInButton.addEventListener("click", function () {

    nameField.style.transition = 'display 0.3s ease-in-out';
    nameField.style.display = 'none';

    title.style.transition = 'opacity 0.3s ease-in-out';
    title.innerText = "Sign In";

    forgetPass.style.transition = 'display 0.3s ease-in-out';
    forgetPass.style.display = 'block';

    signUpButton.classList.add('disable');
    signInButton.classList.remove('disable');
});


signUpButton.addEventListener("click", function () {

    nameField.style.transition = 'display 0.3s ease-in-out';
    nameField.style.display = 'block';
    title.style.transition = 'opacity 0.3s ease-in-out';
    title.innerText = "Sign Up";
    forgetPass.style.transition = 'display 0.3s ease-in-out';
    forgetPass.style.display = 'none';
    signInButton.classList.add('disable');
    signUpButton.classList.remove('disable');
});
