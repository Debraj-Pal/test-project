document.addEventListener("DOMContentLoaded", function () {
    const signupBtn = document.getElementById("signup-btn");

    signupBtn.addEventListener("click", function () {
        const email = document.getElementById("signup-email");
        const password = document.getElementById("signup-password");
       

        let valid = true;

        // Clear previous errors
        clearError(email, "email-error");
        clearError(password, "password-error");

        // Validate email
        if (email.value.trim() === "") {
            showError(email, "email-error", "Email is required.");
            valid = false;
        } else if (!email.value.includes("@")) {
            showError(email, "email-error", "Invalid email address.");
            valid = false;
        }

        // Validate password
        if (password.value.trim() === "") {
            showError(password, "password-error", "Password is required.");
            valid = false;
        } else if (password.value.length < 6) {
            showError(password, "password-error", "Password must be at least 8 characters.");
            valid = false;
        }

        

        if (valid) {
            // Store data temporarily
            localStorage.setItem("userEmail", email.value);
            localStorage.setItem("userPassword", password.value);

            alert("Sign-up successful! 🎉 Please log in.");
            window.location.href = "login.html";
        }
    });
});

function togglePassword(id, toggleIcon) {
    const passwordInput = document.getElementById(id);
    const icon = toggleIcon.querySelector("i");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");
    }
}



