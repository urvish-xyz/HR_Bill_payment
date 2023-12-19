document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuButton.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-theme');
    const themeIcon = document.getElementById('theme-icon');

    toggleButton.addEventListener('click', function () {
        // Check if the current theme is moon (light mode)
        if (themeIcon.classList.contains('fa-moon')) {
            // Switch to dark mode
            document.body.style.backgroundColor = '#333';
            document.body.style.color = 'white';
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            // Switch to light mode
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });
});


