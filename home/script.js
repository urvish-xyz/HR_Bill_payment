// Navbar code
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuButton.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});


// Theme change code
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


// Share button code
document.addEventListener('DOMContentLoaded', function () {
    const shareButton = document.getElementById('share-button');

    if (navigator.share) {
        // Web Share API is supported
        shareButton.addEventListener('click', function () {
            navigator.share({
                title: 'Your Website',
                text: 'Check out this awesome website!',
                url: window.location.href
            })
                .then(() => console.log('Shared successfully'))
                .catch((error) => console.error('Error sharing:', error));
        });
    } else {
        // Web Share API is not supported, provide a fallback
        shareButton.addEventListener('click', function () {
            // You can implement your custom share logic here for unsupported browsers
            alert('Sharing is not supported on this browser.');
        });
    }
});
