document.addEventListener('DOMContentLoaded', function () {
    var heroVideo = document.getElementById('heroVideo');
    var heroSection = document.getElementById('hero');

    heroVideo.addEventListener('ended', function () {
        // Apply the circular shrink and fade-out animation
        heroVideo.classList.add('circular-shrink-fade');

        // Hide the video after the animation completes
        setTimeout(() => {
            heroVideo.classList.add('hidden');
            heroSection.style.zIndex = -1;
        }, 700); // Duration of the animation (0.7s)
    });
});
