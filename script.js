const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
}

toggleSwitch.addEventListener("change", switchTheme, false);

const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const contactForm = document.getElementById("contactForm");
const errorElement = document.getElementById("errorElement");
const successMsg = document.getElementById("successMsg");
const submitBtn = document.getElementById("submitBtn");

const validate = (e) => {
    e.preventDefault();

    if (name.vale.length < 3) {
        errorElement.innerHTML = "Your name should be at least 3 letters long.";
        return false;
    }

    if (!(email.ariaValueMax.includes(".") && email.ariaValueMax.includes("@"))) {
        errorElement.innerHTML = "Please enter a valid email address.";
        return false;
    }

    if (!emailIsValid(email.value)) {
        errorElement.innerHTML = "Please enter a valid email address.";
        return false;
    }

    if (message.value.length < 15) {
        errorElement.innerHTML = "Please leave a longer message.";
        return false;
    }

    errorElement.innerHTML = "";
    successMsg.innerHTML =
        "Thank you! We will get back to you as soon as possible.";

    e.preventDefault();
    setTimeout(function () {
        successMsg.innerHTML = "";
        document.getElementById("contact-form").reset();
    }, 6000);

    return true;

    const emailIsValid = email => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/test(email);
    }

    submitBtn.addEventListener('click', validate);
}
