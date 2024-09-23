document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.font-item');
    let currentIndex = 0;

    // Initially show the first font item
    items[currentIndex].classList.add('active');

    setInterval(() => {
        // Remove the active class from the current item and add the fade-out class
        items[currentIndex].classList.remove('active');
        items[currentIndex].classList.add('fade-out');

        // Calculate the next index
        currentIndex = (currentIndex + 1) % items.length;

        // Reset all items except the next active one
        items.forEach((item, index) => {
            if (index !== currentIndex) {
                item.style.opacity = 0;
                item.style.transform = 'translateY(-100%)'; /* Move the item to the top */
                item.style.top = '-100%'; /* Ensure it's positioned above the view */
            }
        });

        // Add the active class to the next item and remove the fade-out class
        setTimeout(() => {
            items[currentIndex].classList.add('active');
            items[currentIndex].classList.remove('fade-out');
            items[currentIndex].style.transform = 'translateY(0)'; /* Move the item to the center */
            items[currentIndex].style.top = '0'; /* Ensure it's at the correct position */
        }, 500); // Ensure fade-out is complete before adding new active
    }, 3000);
});
