// Get the elements
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

// Add event listener to toggle the menu
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});
