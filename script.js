// Language Toggle Functionality
let currentLanguage = 'en';

function toggleLanguage() {
    // Add transition effect
    document.body.classList.add('lang-transition', 'changing');
    
    setTimeout(() => {
        currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
        updateLanguage();
        
        // Remove transition effect
        setTimeout(() => {
            document.body.classList.remove('changing');
        }, 100);
    }, 150);
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-en][data-zh]');
    const langButton = document.getElementById('lang-button');
    
    elements.forEach(element => {
        if (currentLanguage === 'en') {
            element.textContent = element.getAttribute('data-en');
        } else {
            element.textContent = element.getAttribute('data-zh');
        }
    });
    
    // Update language button
    langButton.textContent = currentLanguage === 'en' ? '中文' : 'EN';
    
    // Update HTML lang attribute
    document.getElementById('html-root').setAttribute('lang', currentLanguage === 'en' ? 'en' : 'zh-TW');
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// CTA Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const ctaPrimary = document.querySelector('.cta-primary');
    const ctaSecondary = document.querySelector('.cta-secondary');
    
    if (ctaPrimary) {
        ctaPrimary.addEventListener('click', function() {
            // Scroll to contact section
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                const offsetTop = contactSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    if (ctaSecondary) {
        ctaSecondary.addEventListener('click', function() {
            // Scroll to about section
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                const offsetTop = aboutSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Animation on scroll for better UX
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-item, .service-card, .contact-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Email link functionality
document.addEventListener('DOMContentLoaded', function() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add a small animation effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// Social links analytics tracking (placeholder)
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            const platform = this.textContent.trim();
            console.log(`Social link clicked: ${platform}`);
            // Here you would add actual analytics tracking
        });
    });
});

// Mobile menu handling (for future enhancement)
function handleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const screenWidth = window.innerWidth;
    
    if (screenWidth <= 768) {
        // Mobile menu adjustments
        navMenu.style.flexDirection = 'column';
    } else {
        navMenu.style.flexDirection = 'row';
    }
}

// Handle window resize
window.addEventListener('resize', handleMobileMenu);
document.addEventListener('DOMContentLoaded', handleMobileMenu);

// Form submission handling (if forms are added later)
function handleFormSubmission(formElement) {
    formElement.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add form submission logic here
        console.log('Form submitted');
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.textContent = currentLanguage === 'en' ? 
            'Thank you for your message!' : '感謝您的留言！';
        successMessage.style.cssText = `
            background: var(--success-green);
            color: white;
            padding: 1rem;
            border-radius: 8px;
            margin-top: 1rem;
            text-align: center;
        `;
        
        formElement.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    updateLanguage();
    
    // Add loading animation for hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
    
    console.log('Sky Long AI website initialized');
}); 