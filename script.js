// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');
const mobileLinks = document.querySelectorAll('.mobile-menu-links a');

hamburger.addEventListener('click', function() {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

function closeMenuFunction() {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

closeMenu.addEventListener('click', closeMenuFunction);
overlay.addEventListener('click', closeMenuFunction);

mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenuFunction);
});

// Create floating soccer balls
function createFloatingBalls() {
    const container = document.querySelector('.floating-balls');
    const numBalls = 10;
    
    for (let i = 0; i < numBalls; i++) {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        
        // Random size
        const size = Math.random() * 20 + 10;
        ball.style.width = `${size}px`;
        ball.style.height = `${size}px`;
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        ball.style.left = `${posX}%`;
        ball.style.top = `${posY}%`;
        
        // Append to container
        container.appendChild(ball);
        
        // Animate with GSAP
        gsap.to(ball, {
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            duration: Math.random() * 10 + 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
}

// Initialize GSAP animations
function initAnimations() {
    // Hero section animations
    gsap.to('.hero h1', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2
    });
    
    gsap.to('.hero p', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.4
    });
    
    gsap.to('.hero-buttons', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.6
    });
    
    gsap.to('.hero-image', {
        opacity: 1,
        duration: 1,
        delay: 0.8
    });
    
    // ScrollTrigger for section headers
    gsap.utils.toArray('.section-header h2').forEach(header => {
        gsap.to(header, {
            scrollTrigger: {
                trigger: header,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0,
            duration: 0.8
        });
    });
    
    gsap.utils.toArray('.section-header p').forEach(text => {
        gsap.to(text, {
            scrollTrigger: {
                trigger: text,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2
        });
    });
    
    // Features animation
    gsap.utils.toArray('.feature').forEach((feature, i) => {
        gsap.to(feature, {
            scrollTrigger: {
                trigger: feature,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.1 * i
        });
    });
    
    // App showcase animations
    gsap.to('.app-showcase-image', {
        scrollTrigger: {
            trigger: '.app-showcase',
            start: "top 70%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        x: 0,
        duration: 0.8
    });
    
    gsap.to('.app-showcase-content', {
        scrollTrigger: {
            trigger: '.app-showcase',
            start: "top 70%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.2
    });
    
    // Feature list animation
    gsap.utils.toArray('.feature-list li').forEach((item, i) => {
        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: 0.1 * i + 0.3
        });
    });
    
    // Testimonials animation
    gsap.utils.toArray('.testimonial').forEach((testimonial, i) => {
        gsap.to(testimonial, {
            scrollTrigger: {
                trigger: '.testimonials-container',
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: 0.15 * i
        });
    });
    
    // Download section animation
    gsap.to('.download', {
        scrollTrigger: {
            trigger: '.download',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 0.8
    });
    
    // Footer animations
    gsap.utils.toArray('.footer-column').forEach((column, i) => {
        gsap.to(column, {
            scrollTrigger: {
                trigger: 'footer',
                start: "top 90%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.1 * i
        });
    });
}

// Auto-scroll testimonials
function initTestimonialsScroll() {
    const testimonials = document.querySelector('.testimonials');
    const testimonialWidth = document.querySelector('.testimonial').offsetWidth + 30; // Width + gap
    const totalTestimonials = document.querySelectorAll('.testimonial').length;
    
    gsap.to(testimonials, {
        x: -testimonialWidth * (totalTestimonials - 2.5),
        duration: 20,
        ease: "none",
        repeat: -1,
        yoyo: true
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createFloatingBalls();
    initAnimations();
    initTestimonialsScroll();
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the scroll indicator element
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    // Make it clickable and scroll to features section when clicked
    if (scrollIndicator) {
        scrollIndicator.style.cursor = 'pointer'; // Change cursor to pointer to indicate it's clickable
        scrollIndicator.addEventListener('click', function() {
        // Get the features section
            const featuresSection = document.getElementById('features');
        
            if (featuresSection) {
            // Scroll to the features section smoothly
                featuresSection.scrollIntoView({ 
                behavior: 'smooth' 
                });
            }
        });
    }
});