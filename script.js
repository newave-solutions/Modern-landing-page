// --- Smooth Scrolling ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Calculate offset needed if you have a sticky navbar
            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// --- Basic CTA Button Handler ---
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        // Prevent default if it's inside a form, etc.
        // e.preventDefault();

        // Placeholder action
        console.log('CTA button clicked:', this.textContent);

        // Add real functionality here (e.g., open modal, redirect, send data)
        if (this.textContent.includes("Assessment")) {
            // Maybe redirect to assessment page or open signup
            console.log("Redirecting to assessment...");
        } else if (this.textContent.includes("Specialist")) {
             // Maybe open a contact form modal
             console.log("Opening contact form...");
        }
         else if (this.textContent.includes("Free Trial") || this.textContent.includes("Get Started")) {
             // Maybe open a signup modal or page
             console.log("Opening signup...");
        }

        // Example: Simulate form submission feedback (replace with real logic)
        // this.textContent = 'Processing...';
        // setTimeout(() => {
        //     this.textContent = 'Request Sent!';
        //     this.disabled = true;
        // }, 1500);
    });
});


// --- Intersection Observer for Fade-in Animations ---
const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');

const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once visible
        }
    });
};

const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);

animatedElements.forEach(el => {
    intersectionObserver.observe(el);
});

// --- Optional: Add subtle effect on scroll (e.g., shrink navbar) ---
// const navbar = document.querySelector('.navbar');
// let lastScrollTop = 0;

// window.addEventListener('scroll', function() {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     if (scrollTop > lastScrollTop && scrollTop > 100) {
//         // Scrolling down
//         navbar.style.paddingTop = '5px';
//         navbar.style.paddingBottom = '5px';
//     } else if (scrollTop < 100) {
//         // Scrolling up or near top
//         navbar.style.paddingTop = '10px'; // Restore original padding
//         navbar.style.paddingBottom = '10px';
//     }
//     lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
// }, false);