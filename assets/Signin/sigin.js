// Function to show the sign-in form and hide the main content
function showSignInForm() {
    document.getElementById('content-section').style.display = 'none';
    document.getElementById('sign-in-section').style.display = 'block';
}

// Event listener for the sign-in link
document.getElementById('signin-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    showSignInForm();
});

// Event listener for the sign-in form submission
document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    // Simple validation (for demonstration purposes)
    if (username === "user" && password === "pass") {
        message.textContent = "Sign in successful!";
        message.style.color = "green";
    } else {
        message.textContent = "Invalid username or password.";
    }
});
