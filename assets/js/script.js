document.addEventListener('DOMContentLoaded', function () {
    var heroVideo = document.getElementById('heroVideo');
    var heroSection = document.getElementById('hero');

    heroVideo.addEventListener('ended', function () {
        // Apply the fade-out animation
        heroVideo.classList.add('fade-out');

        // Hide the video after the fade-out animation completes
        setTimeout(() => {
            heroVideo.classList.add('hidden');
            heroSection.style.zIndex = -1;
        }, 1000); // Duration of the fade-out animation (0.7s)
    });
});
