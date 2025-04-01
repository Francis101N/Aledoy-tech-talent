// Get the toggle button and the nav links container
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

// Add an event listener to the toggle button to show/hide the navigation links
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
