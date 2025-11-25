document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let message = document.getElementById("message").value.trim();

    let isValid = true;

    // Clear previous errors
    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    // Name validation
    if (name === "") {
        document.getElementById("nameError").textContent = "Please enter your name";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "Email cannot be empty";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required";
        isValid = false;
    }

    // Confirm password
    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
        isValid = false;
    }

    // Message
    if (message === "") {
        document.getElementById("messageError").textContent = "Message cannot be empty";
        isValid = false;
    }

    if (isValid) {
        alert("Form Submitted Successfully!");
    }
});
