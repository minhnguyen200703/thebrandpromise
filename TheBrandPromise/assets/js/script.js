document.addEventListener('DOMContentLoaded', function () {
    var heroVideo = document.getElementById('heroVideo');
    var heroSection = document.getElementById('hero');

    heroVideo.addEventListener('ended', function () {
        // Apply the peel-off animation
        heroVideo.classList.add('peel-off');

        // Hide the video after the peel-off animation completes
        setTimeout(() => {
            heroVideo.classList.add('hidden');
            heroSection.style.zIndex = -1;
        }, 1500); // Duration of the peel-off animation
    });
});
