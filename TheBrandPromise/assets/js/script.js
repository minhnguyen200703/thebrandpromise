document.addEventListener('DOMContentLoaded', function () {
    var logo = document.querySelector('.nav_logo-img');
    var heroVideo = document.getElementById('heroVideo');
    var heroSection = document.getElementById('hero');

    heroVideo.addEventListener('ended', function () {
        var logoRect = logo.getBoundingClientRect();
        var videoRect = heroVideo.getBoundingClientRect();
        var videoWidth = videoRect.width;
        var videoHeight = videoRect.height;
        
        // Calculate the position and size for shrinking
        var shrinkWidth = logoRect.width;
        var shrinkHeight = logoRect.height;
        var shrinkLeft = logoRect.left - videoRect.left;
        var shrinkTop = logoRect.top - videoRect.top;

        // Apply transition to the video
        heroVideo.style.transition = 'all 0.5s ease, opacity 0.1s ease';
        heroVideo.style.width = shrinkWidth + 'px';
        heroVideo.style.height = shrinkHeight + 'px';
        heroVideo.style.transform = `translate(${shrinkLeft}px, ${shrinkTop}px)`;

        // Fade out the video after shrinking
        setTimeout(() => {
            heroVideo.classList.add('fade-out');
        }, 500); // Match the transition duration in CSS

        // Hide the video after the fade-out transition
        setTimeout(() => {
            heroVideo.classList.add('hidden');
            heroSection.style.zIndex = -1;
        }, 600); // 2s + 0.7s for the fade-out
    });
});
