document.addEventListener('DOMContentLoaded', function () {
    const content1 = document.querySelector('.content_1');
    const content2 = document.querySelector('.content_2');
    const introVid = document.querySelector('.intro_vid');

    // Slide up and fade out content_1 after 2 seconds
    setTimeout(() => {
        content1.classList.add('fade-out');
    }, 2000); // Start sliding up and fading out content_1 after 2 seconds

    // Show content_2 after content_1 has finished sliding up
    setTimeout(() => {
        content2.classList.add('active');
    }, 2000); // Wait an extra 1 second to ensure content_1 completes its slide-up animation

    // Slide up the entire intro_vid 2 seconds after content_2 appears
    setTimeout(() => {
        introVid.classList.add('slide-up');
    }, 6000); // Start sliding up the intro_vid 2 seconds after content_2 appears
});
