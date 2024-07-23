document.addEventListener('DOMContentLoaded', function () {
    var heroVideo = document.getElementById('heroVideo');
    var heroSection = document.getElementById('hero');
    var body = document.body;

    // Initially hide the content using opacity
    body.classList.add('hidden-content');

    // Show the content when the video starts playing
    heroVideo.addEventListener('play', function () {
        body.classList.remove('hidden-content');
        body.classList.add('show-content');
    });

    heroVideo.addEventListener('ended', function () {
        // Apply the fade-out animation
        heroVideo.classList.add('fade-out');

        // Hide the video after the fade-out animation completes
        setTimeout(() => {
            heroVideo.classList.add('hidden');
            heroSection.style.zIndex = -1;
        }, 700); // Duration of the fade-out animation (0.7s)
    });
});
