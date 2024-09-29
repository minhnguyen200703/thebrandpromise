document.addEventListener('DOMContentLoaded', function () {
    const slideElements = document.querySelectorAll('.slide-up');

    const observerOptions = {
        threshold: 0.2 // Trigger when 20% of the element is in the viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    slideElements.forEach(element => {
        observer.observe(element);
    });
});
