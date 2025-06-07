document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const rememberCheckbox = document.getElementById('remember');

    // Check if there's remembered data
    const rememberedUsername = localStorage.getItem('rememberedUsername');
    if (rememberedUsername && rememberCheckbox) {
        document.getElementById('username').value = rememberedUsername;
        rememberCheckbox.checked = true;
    }

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Basic validation
        if (!username || !password) {
            alert('Please fill in all required fields');
            return;
        }

        // Handle remember me
        if (rememberCheckbox.checked) {
            localStorage.setItem('rememberedUsername', username);
        } else {
            localStorage.removeItem('rememberedUsername');
        }

        // Here you would typically send the data to your server
        console.log('Form submitted:', { username, password });

        // For demo purposes, show success message
        alert('Sign up successful!');
        signupForm.reset();
    });
});
