document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;
    let isScrolling = false; // Flag to prevent multiple scroll actions
    let scrollThreshold = 50; // Threshold for detecting scroll intent
    let accumulatedScroll = 0; // Tracks how much the user has scrolled

    // Function to check if we're at the top or bottom of the section
    function isAtSectionEdge(direction) {
        const section = sections[currentSectionIndex];
        if (direction === 'down') {
            return section.scrollHeight - section.scrollTop <= section.clientHeight + 1;
        } else if (direction === 'up') {
            return section.scrollTop === 0;
        }
        return false;
    }

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

        const section = sections[currentSectionIndex];

        // Check if the section is scrollable (i.e., larger than viewport)
        if (section.scrollHeight > section.clientHeight) {
            if (accumulatedScroll > 0 && !isAtSectionEdge('down')) {
                section.scrollTop += event.deltaY;
                accumulatedScroll = 0; // Reset the accumulated scroll to prevent changing sections
                return;
            } else if (accumulatedScroll < 0 && !isAtSectionEdge('up')) {
                section.scrollTop += event.deltaY;
                accumulatedScroll = 0; // Reset the accumulated scroll to prevent changing sections
                return;
            }
        }

        // Handle section transitions
        if (accumulatedScroll >= scrollThreshold) {
            if (isAtSectionEdge('down')) {
                // Scroll down to the next section
                currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
                scrollToSection(currentSectionIndex);
            }
        } else if (accumulatedScroll <= -scrollThreshold) {
            if (isAtSectionEdge('up')) {
                // Scroll up to the previous section
                currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
                scrollToSection(currentSectionIndex);
            }
        }
    }, { passive: false });

    // Set up the initial scroll position at the first section
    scrollToSection(currentSectionIndex);
});
