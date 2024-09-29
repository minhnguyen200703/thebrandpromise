document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const fullscreenMenu = document.getElementById('fullscreen-menu');

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
        // Check if the menu is active and the click is outside both the menu and the button
        if (fullscreenMenu.classList.contains('active') && !fullscreenMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            fullscreenMenu.classList.remove('active');
        }
    });
});
