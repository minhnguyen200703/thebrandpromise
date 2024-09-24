document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;
    let isScrolling = false; // Flag to prevent multiple scroll actions
    let scrollThreshold = 50; // Threshold for detecting scroll intent
    let accumulatedScroll = 0; // Tracks how much the user has scrolled

    // Function to scroll to a specific section
    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            isScrolling = true;
            sections[index].scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                isScrolling = false; // Allow scrolling again after smooth transition completes
                accumulatedScroll = 0; // Reset accumulated scroll
            }, 800); // Adjust time to match the smooth scroll duration
        }
    }

    // Event listener for handling the scroll
    window.addEventListener('wheel', (event) => {
        // Prevent default scrolling
        event.preventDefault();

        // Ignore scroll events if already scrolling
        if (isScrolling) return;

        accumulatedScroll += event.deltaY;

        if (accumulatedScroll >= scrollThreshold) {
            // Scroll down to the next section
            currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
            scrollToSection(currentSectionIndex);
        } else if (accumulatedScroll <= -scrollThreshold) {
            // Scroll up to the previous section
            currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
            scrollToSection(currentSectionIndex);
        }
    }, { passive: false });

    // Set up the initial scroll position at the first section
    scrollToSection(currentSectionIndex);
});
