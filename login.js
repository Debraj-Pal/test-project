document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector("button");
    
    loginBtn.addEventListener("click", function () {
        const email = document.getElementById("floatingInput").value.trim();
        const password = document.getElementById("floatingPassword").value.trim();

        // Basic validation
        if (email === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Dummy credentials (replace with backend validation later)
        const dummyEmail = "user@example.com";
        const dummyPassword = "123456";

        if (email === dummyEmail && password === dummyPassword) {
            alert("Login successful! 🎉");
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid email or password. Please try again.");
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


