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
    const numBalls = 15; // Increased number of balls
    
    for (let i = 0; i < numBalls; i++) {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        
        // Random size - increased variation
        const size = Math.random() * 30 + 10;
        ball.style.width = `${size}px`;
        ball.style.height = `${size}px`;
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        ball.style.left = `${posX}%`;
        ball.style.top = `${posY}%`;
        
        // Random opacity for depth effect
        ball.style.opacity = (Math.random() * 0.15 + 0.05).toString();
        
        // Append to container
        container.appendChild(ball);
        
        // Animate with GSAP - more varied movement
        gsap.to(ball, {
            x: Math.random() * 300 - 150,
            y: Math.random() * 300 - 150,
            duration: Math.random() * 15 + 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: Math.random() * 5
        });
    }
}

// Enhanced GSAP animations
function initAnimations() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations with improved sequence
    const heroTL = gsap.timeline();
    
    heroTL.to('.hero h1', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    })
    .to('.hero p', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.4")
    .to('.hero-buttons', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2
    }, "-=0.4")
    .to('.hero-image', {
        opacity: 1,
        y: 0, // This will create a slide-up effect
        duration: 1.2,
        ease: "power3.out"
    }, "-=0.6")
    .to('.scroll-indicator', {
        opacity: 1,
        duration: 0.8
    }, "-=0.4");
    
    // Improved ScrollTrigger setup with better defaults
    ScrollTrigger.defaults({
        markers: false,
        toggleActions: "play none none none"
    });
    
    // Section headers with improved animations
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.timeline({
            scrollTrigger: {
                trigger: header,
                start: "top 80%"
            }
        })
        .to(header.querySelector('h2'), {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        })
        .to(header.querySelector('p'), {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.6");
    });
    
    // Features animation with staggered entry
    gsap.utils.toArray('.features').forEach(featureGrid => {
        const features = featureGrid.querySelectorAll('.feature');
        
        gsap.to(features, {
            scrollTrigger: {
                trigger: featureGrid,
                start: "top 85%"
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: {
                each: 0.15,
                grid: "auto", // Works with grid layouts
                from: "start"
            },
            ease: "power2.out"
        });
    });
    
    // App showcase section with improved animation
    gsap.utils.toArray('.app-showcase').forEach(showcase => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: showcase,
                start: "top 70%"
            }
        });
        
        tl.to(showcase.querySelector('.app-showcase-image'), {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out"
        })
        .to(showcase.querySelector('.app-showcase-content'), {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.7")
        .to(showcase.querySelectorAll('.feature-list li'), {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.8");
    });
    
    // Testimonials with improved staggered reveal
    gsap.utils.toArray('.testimonials-container').forEach(container => {
        const testimonials = container.querySelectorAll('.testimonial');
        
        gsap.to(testimonials, {
            scrollTrigger: {
                trigger: container,
                start: "top 80%"
            },
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.2)"
        });
    });
    
    // Download section with improved animation
    gsap.utils.toArray('.download').forEach(section => {
        gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 80%"
            }
        })
        .to(section, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        })
        .to(section.querySelectorAll('.download-button'), {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.15,
            ease: "back.out(1.5)"
        }, "-=0.4");
    });
    
    // Footer animations with improved sequence
    gsap.timeline({
        scrollTrigger: {
            trigger: 'footer',
            start: "top 90%"
        }
    })
    .to('.footer-column', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
    })
    .to('.footer-bottom', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
    }, "-=0.4");
}

// Enhanced testimonials auto-scroll
function initTestimonialsScroll() {
    const testimonials = document.querySelector('.testimonials');
    
    if (testimonials) {
        const testimonialItems = testimonials.querySelectorAll('.testimonial');
        const testimonialWidth = testimonialItems[0].offsetWidth + parseInt(window.getComputedStyle(testimonialItems[0]).marginRight);
        const totalTestimonials = testimonialItems.length;
        
        // Create a smoother, pausing scroll animation
        const scrollTween = gsap.to(testimonials, {
            x: -testimonialWidth * (totalTestimonials - 2.5),
            duration: 30,
            ease: "none",
            repeat: -1,
            yoyo: true,
            repeatDelay: 1
        });
        
        // Pause on hover
        testimonials.addEventListener('mouseenter', () => {
            scrollTween.pause();
        });
        
        testimonials.addEventListener('mouseleave', () => {
            scrollTween.play();
        });
    }
}

// Enhanced scroll indicator
function setupScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.style.cursor = 'pointer';
        scrollIndicator.addEventListener('click', function() {
            const featuresSection = document.getElementById('features');
            
            if (featuresSection) {
                featuresSection.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
        
        // Hide scroll indicator when scrolled past hero section
        window.addEventListener('scroll', function() {
            if (window.scrollY > window.innerHeight * 0.5) {
                gsap.to(scrollIndicator, {
                    opacity: 0,
                    duration: 0.3
                });
            } else {
                gsap.to(scrollIndicator, {
                    opacity: 1,
                    duration: 0.3
                });
            }
        });
    }
}

// Enhanced responsive handling
function handleResponsiveness() {
    // Adjust animations and layouts based on screen size
    const updateResponsiveElements = () => {
        const windowWidth = window.innerWidth;
        
        // Hide hero image on small screens
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            if (windowWidth <= 768) {
                heroImage.style.display = 'none';
            } else {
                heroImage.style.display = 'block';
            }
        }
        
        // Adjust testimonials container
        const testimonials = document.querySelector('.testimonials');
        if (testimonials && windowWidth <= 768) {
            // Reset or adjust animations for mobile
            gsap.set(testimonials, { x: 0 });
        }
    };
    
    // Run on load and resize
    updateResponsiveElements();
    window.addEventListener('resize', updateResponsiveElements);
}

// Handle parallax effects for added depth
function setupParallaxEffects() {
    // Simple parallax effect on hero section
    window.addEventListener('mousemove', function(e) {
        const mouseMoveX = (e.clientX / window.innerWidth) - 0.5;
        const mouseMoveY = (e.clientY / window.innerHeight) - 0.5;
        
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            gsap.to(heroImage, {
                x: mouseMoveX * 20,
                y: mouseMoveY * 20,
                duration: 1,
                ease: "power2.out"
            });
        }
        
        const balls = document.querySelectorAll('.ball');
        balls.forEach((ball, index) => {
            const depth = 0.5 + (index % 3) * 0.2;
            gsap.to(ball, {
                x: mouseMoveX * 30 * depth,
                y: mouseMoveY * 30 * depth,
                duration: 1,
                ease: "power2.out"
            });
        });
    });
}

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    createFloatingBalls();
    initAnimations();
    initTestimonialsScroll();
    setupScrollIndicator();
    handleResponsiveness();
    setupParallaxEffects();
    
    // Initialize download buttons with scale animation
    gsap.set('.download-button', { scale: 0.9, opacity: 0.7 });
});