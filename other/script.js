document.getElementById('lecturerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the entered email address
    const email = document.getElementById('email').value;

    // Open the email compose form using the `mailto:` protocol
    window.location.href = `mailto:${email}`;
});
