document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuButton.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const stylesheet = document.getElementById('stylesheet');
    const toggleButton = document.getElementById('toggle-theme');
    const themeIcon = document.getElementById('theme-icon');

    toggleButton.addEventListener('click', function () {
        // Toggle between light and dark mode stylesheets
        if (stylesheet.href.includes('home/style-light.css')) {
            stylesheet.href = 'home/style-dark.css';
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            themeIcon.style.color = 'white'; // Set moon color to white
        } else {
            stylesheet.href = 'home/style-light.css';
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            themeIcon.style.color = 'black'; // Set sun color to black
        }
    });
});

