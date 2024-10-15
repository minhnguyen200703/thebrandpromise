document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const menuLinks = document.querySelectorAll('.menu-options a'); // Select all menu links

    // Function to open or close the menu
    function toggleMenu() {
        fullscreenMenu.classList.toggle('active');
    }

    // Open the menu when clicking the menu button
    menuBtn.addEventListener('click', function (e) {
        e.preventDefault();
        toggleMenu();
    });

    // Close the menu if clicking outside of the menu or the button
    document.addEventListener('click', function (e) {
        if (fullscreenMenu.classList.contains('active') && !fullscreenMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            fullscreenMenu.classList.remove('active');
        }
    });

    // Close the menu and scroll to section when clicking a menu link
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href'); // Get href attribute value
            if (targetId.startsWith("#")) {
                e.preventDefault(); // Prevent default behavior
                const targetElement = document.querySelector(targetId); // Find the target element
                
                if (targetElement) {
                    // Smooth scroll to the section
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Close the menu after scroll
                    fullscreenMenu.classList.remove('active');
                }
            } else {
                // For external links, keep the default behavior
                fullscreenMenu.classList.remove('active');
            }
        });
    });

    // Close the menu if clicking anywhere inside the menu
    fullscreenMenu.addEventListener('click', function () {
        fullscreenMenu.classList.remove('active');
    });
});
