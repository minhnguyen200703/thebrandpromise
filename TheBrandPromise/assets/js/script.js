document.addEventListener('DOMContentLoaded', function () {
    var logo = document.getElementById('logo');
    var heroVideo = document.getElementById('heroVideo');
    var heroSection = document.getElementById('hero');

    heroVideo.addEventListener('ended', function () {
        heroVideo.classList.add('shrink');
        setTimeout(() => {
            heroVideo.classList.add('hidden');
            heroSection.style.zIndex = -1;
        }, 2000); // Match the transition duration in CSS
    });
});
