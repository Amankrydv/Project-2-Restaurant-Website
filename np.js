let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
    login.classList.remove("active");
    signup.classList.add("active");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
    signup.classList.remove("active");
    login.classList.add("active");
});

function validateEmail() {
    // Check if the login button is active before validating email
    if (login.classList.contains("active")) {
        var emailInput = document.querySelector('.email');
        var passwordInput = document.querySelector('.password');
        var email = emailInput.value;

        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
        } else if (passwordInput.value.trim() === '') {
            alert('Please enter your password.');
        } else {
            // Assuming you want to perform some action after a successful login
            alert('Login successful!'); // You can replace this with your logic
        }
    }
}


function validateSignup() {
    var nameInput = document.querySelector('.name');
    var emailInput = document.querySelector('.email');
    var passwordInput = document.querySelector('.password');
    var confirmPasswordInput = document.querySelectorAll('.password')[1];

    // Perform your signup form validation logic here

    // Assuming you want to perform some action after a successful signup
    alert('Signup successful!'); // You can replace this with your logic
}
