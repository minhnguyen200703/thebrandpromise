document.addEventListener('DOMContentLoaded', function () {
    // Check if the body has the class 'fade-in'
    const bodyElement = document.body;

    if (bodyElement.classList.contains('fade-in')) {
        // Add the fade-in animation to the body element
        bodyElement.style.opacity = 0;

        // Trigger the animation after a small delay to ensure it works smoothly
        setTimeout(function () {
            bodyElement.style.transition = 'opacity 0.5s ease-in-out';
            bodyElement.style.opacity = 1;
        }, 10); // Small delay to trigger the transition after page load
    }
});
