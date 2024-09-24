document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.font-item');
    let currentIndex = 0;

    // Initially show the first font item
    items[currentIndex].classList.add('active');
    items[currentIndex].style.transform = 'translateY(0)';
    items[currentIndex].style.opacity = 1;

    setInterval(() => {
        // Slide out and fade out the current item
        items[currentIndex].classList.remove('active');
        items[currentIndex].style.transform = 'translateY(-100%)';
        items[currentIndex].style.opacity = 0;

        // Calculate the next index
        currentIndex = (currentIndex + 1) % items.length;

        // Prepare the next item to be visible by moving it to the top before sliding it in
        items[currentIndex].style.transform = 'translateY(100%)';
        items[currentIndex].style.opacity = 0;

        // Activate the next item after a slight delay to create the sliding effect
        setTimeout(() => {
            items[currentIndex].classList.add('active');
            items[currentIndex].style.transform = 'translateY(0)';
            items[currentIndex].style.opacity = 1;
        }, 1000); // Ensure this matches the transition duration to wait for the fade-out to complete
    }, 3000);
});
