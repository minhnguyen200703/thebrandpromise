document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;
    let isScrolling = false;
    const scrollThreshold = 50; // Threshold for changing sections
    let accumulatedScroll = 0;

    // Function to scroll to a specific section
    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            isScrolling = true;
            sections[index].scrollIntoView({ behavior: 'smooth' });
            currentSectionIndex = index;
            setTimeout(() => {
                isScrolling = false;
                accumulatedScroll = 0;
            }, 800); // Adjust this time according to your smooth scroll duration
        }
    }

    // Event listener for wheel scrolling
    window.addEventListener('wheel', (event) => {
        if (isScrolling) return;

        accumulatedScroll += event.deltaY;

        const section = sections[currentSectionIndex];

        // If we are on the "what-we-do" section, allow normal scrolling
        if (section.classList.contains('what-we-do')) {
            section.scrollTop += event.deltaY;

            // Check if the user has reached the top or bottom of this section
            const isAtBottom = section.scrollTop + section.clientHeight >= section.scrollHeight - 1;
            const isAtTop = section.scrollTop <= 0;

            // Move to the next section when reaching the bottom
            if (accumulatedScroll > 0 && isAtBottom) {
                currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
                scrollToSection(currentSectionIndex);
            }
            // Move to the previous section when reaching the top
            else if (accumulatedScroll < 0 && isAtTop) {
                currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
                scrollToSection(currentSectionIndex);
            }
            accumulatedScroll = 0; // Reset accumulated scroll
            return; // Exit to allow normal scrolling within "what-we-do"
        }

        // Handle auto-scrolling for other sections
        if (accumulatedScroll >= scrollThreshold) {
            // Scroll to the next section
            currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
            scrollToSection(currentSectionIndex);
        } else if (accumulatedScroll <= -scrollThreshold) {
            // Scroll to the previous section
            currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
            scrollToSection(currentSectionIndex);
        }
    }, { passive: false });

    // Initialize the scroll position at the first section
    scrollToSection(currentSectionIndex);
});
