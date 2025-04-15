const signup = document.querySelector(".signup");
const login = document.querySelector(".login");
const slider = document.querySelector(".slider");
const formSection = document.querySelector(".form-section");
const signupPassword = document.getElementById("signup-password");
const signupConfirmPassword = document.getElementById("signup-confirm-password");
const passwordStrengthIndicator = document.getElementById("password-strength");
const errorMessage = document.getElementById("error-message");
const signupButton = document.getElementById("signup-button");

signup.addEventListener("click", () => {
    slider.style.transform = "translateX(100%)";
    formSection.style.transform = "translateX(-100%)";
});

login.addEventListener("click", () => {
    slider.style.transform = "translateX(0)";
    formSection.style.transform = "translateX(0)";
});

// Password strength checker
signupPassword.addEventListener("input", () => {
    const password = signupPassword.value;
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    switch (strength) {
        case 0:
            passwordStrengthIndicator.style.width = "0%";
            passwordStrengthIndicator.style.backgroundColor = "transparent";
            break;
        case 1:
            passwordStrengthIndicator.style.width = "25%";
            passwordStrengthIndicator.style.backgroundColor = "red";
            break;
        case 2:
            passwordStrengthIndicator.style.width = "50%";
            passwordStrengthIndicator.style.backgroundColor = "orange";
            break;
        case 3:
            passwordStrengthIndicator.style.width = "75%";
            passwordStrengthIndicator.style.backgroundColor = "yellow";
            break;
        case 4:
            passwordStrengthIndicator.style.width = "100%";
            passwordStrengthIndicator.style.backgroundColor = "green";
            break;
    }
});

// Confirm password validation
signupConfirmPassword.addEventListener("input", () => {
    if (signupPassword.value !== signupConfirmPassword.value) {
        errorMessage.textContent = "Passwords do not match.";
    } else {
        errorMessage.textContent = "";
    }
});

// Signup button click event
signupButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission for validation

    const username = document.getElementById("signup-username").value;
    const email = document.getElementById("signup-email").value;
    const password = signupPassword.value;
    const confirmPassword = signupConfirmPassword.value;

    // Basic validation
    if (!username || !email || !password || !confirmPassword) {
        errorMessage.textContent = "All fields are required.";
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return;
    }

    // If all validations pass, you can proceed with form submission (e.g., send data to server)
    errorMessage.textContent = "Signup successful!"; // Placeholder for successful signup
    // Here you would typically send the data to your server
});

// Function to toggle password visibility
function togglePasswordVisibility(inputId, button) {
    const inputField = document.getElementById(inputId);
    const isPasswordVisible = inputField.type === "text";

    // Toggle the input type
    inputField.type = isPasswordVisible ? "password" : "text";

    // Optionally change the button text or icon
    button.textContent = isPasswordVisible ? "👁️" : "👁️‍🗨️"; // Change icon based on visibility
}