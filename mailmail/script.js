document.getElementById('addBtn').addEventListener('click', function () {
    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const position = document.getElementById('position').value;
    const id = document.getElementById('id').value;
    const contact = document.getElementById('contact').value;

    if (!email) {
        alert('Please enter a valid email address.');
        return;
    }

    // Define the email content
    const subject = `Welcome, ${name}`;
    const body = `Hello ${name},%0D%0A%0D%0AWelcome to our academic team as a ${position}.%0D%0A%0D%0AYour details are:%0D%0A- ID: ${id}%0D%0A- Email: ${email}%0D%0A- Contact No: ${contact}%0D%0A%0D%0ARegards,%0D%0AAdministration Team`;

    // Create the mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
});
