// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    // Basic toggle for mobile view (styling would be needed for a full menu)
    alert('يمكنك تصفح الأقسام من خلال النزول لأسفل الصفحة');
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.glass-card');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < triggerBottom) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        } else {
            // el.style.opacity = '0';
            // el.style.transform = 'translateY(20px)';
        }
    });
};

// Set initial state for reveal
revealElements.forEach(el => {
    el.style.transition = 'all 0.6s ease-out';
    // el.style.opacity = '0';
    // el.style.transform = 'translateY(20px)';
});

window.addEventListener('scroll', revealOnScroll);

// Navbar scroll background change
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 0';
        nav.style.background = 'rgba(2, 6, 23, 0.95)';
    } else {
        nav.style.padding = '20px 0';
        nav.style.background = 'rgba(15, 23, 42, 0.8)';
    }
});
