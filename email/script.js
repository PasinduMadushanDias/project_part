document.getElementById('lecturerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    window.location.href = `mailto:${email}`;
});
