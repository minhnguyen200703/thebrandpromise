document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;
    let isScrolling = false; // Flag to prevent multiple scroll actions
    let scrollThreshold = 50; // Threshold for detecting scroll intent
    let accumulatedScroll = 0; // Tracks how much the user has scrolled
    let isAtTop = true; // Track whether the navbar should be visible based on section

    // Ensure the navbar is visible initially
    navbar.classList.add('show'); // Apply the "show" class to make it appear

    // Function to scroll to a specific section
    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            isScrolling = true;
            sections[index].scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                isScrolling = false; // Allow scrolling again after smooth transition completes
                accumulatedScroll = 0; // Reset accumulated scroll
                
                // Update the navbar visibility based on the current section
                updateNavbarVisibility(index);
            }, 800); // Adjust time to match the smooth scroll duration
        }
    }

    // Function to update navbar visibility based on the current section
    function updateNavbarVisibility(index) {
        if (index === 0) {
            console.log('At the first section. Showing the navbar.');
            navbar.classList.add('show');
            navbar.classList.remove('hidden');
            isAtTop = true;
        } else {
            console.log('Not at the first section. Hiding the navbar.');
            navbar.classList.add('hidden');
            navbar.classList.remove('show');
            isAtTop = false;
        }
    }

    // Event listener for handling the wheel scroll
    window.addEventListener('wheel', (event) => {
        if (isScrolling) return; // Prevent multiple scroll actions

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

        accumulatedScroll = 0; // Reset the accumulated scroll after deciding to move
    }, { passive: false });

    // Mouse movement event to show the navbar when the user hovers near the top
    document.addEventListener('mousemove', (event) => {
        console.log('Mouse move event detected. Y position:', event.clientY);
        if (event.clientY <= 50 && !isAtTop) {
            console.log('Mouse near the top. Showing the navbar.');
            navbar.classList.add('show');
            navbar.classList.remove('hidden');
        }
    });

    // Hide the navbar again when the mouse leaves the navbar area
    navbar.addEventListener('mouseleave', () => {
        console.log('Mouse left the navbar area.');
        if (!isAtTop) {
            console.log('Hiding the navbar again after leaving.');
            navbar.classList.add('hidden');
            navbar.classList.remove('show');
        }
    });

    // Set up the initial scroll position at the first section
    scrollToSection(currentSectionIndex);
});
