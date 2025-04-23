//  script to header section
// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});


// script to hero section
// Scroll Animation Trigger
document.addEventListener('DOMContentLoaded', function() {
    const scrollTriggers = document.querySelectorAll('.scroll-trigger');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    
    scrollTriggers.forEach(trigger => {
        observer.observe(trigger);
    });
});


// script to services section
document.addEventListener('DOMContentLoaded', function() {
    const scrollTriggers = document.querySelectorAll('.scroll-trigger');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    
    scrollTriggers.forEach(trigger => {
        observer.observe(trigger);
    });
});


// script to doctors section
// تفعيل تأثيرات التمرير
document.addEventListener('DOMContentLoaded', function() {
const scrollTriggers = document.querySelectorAll('.scroll-trigger');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

scrollTriggers.forEach(trigger => {
    observer.observe(trigger);
});
});


// script to why choose us section
// تفعيل تأثيرات التمرير
document.addEventListener('DOMContentLoaded', function() {
    const scrollTriggers = document.querySelectorAll('.scroll-trigger');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    
    scrollTriggers.forEach(trigger => {
        observer.observe(trigger);
    });
});

// script to testimonials section
    

// تفعيل تأثيرات التمرير
document.addEventListener('DOMContentLoaded', function() {
    const scrollTriggers = document.querySelectorAll('.scroll-trigger');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    
    scrollTriggers.forEach(trigger => {
        observer.observe(trigger);
    });
    
    // تأثيرات الأسهم (يمكن تطويرها لتحويل حقيقي)
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let currentIndex = 0;
    
    document.querySelector('.testimonial-next').addEventListener('click', function() {
        testimonialCards[currentIndex].classList.remove('opacity-100');
        testimonialCards[currentIndex].classList.add('opacity-0');
        currentIndex = (currentIndex + 1) % testimonialCards.length;
        testimonialCards[currentIndex].classList.remove('opacity-0');
        testimonialCards[currentIndex].classList.add('opacity-100');
    });
    
    document.querySelector('.testimonial-prev').addEventListener('click', function() {
        testimonialCards[currentIndex].classList.remove('opacity-100');
        testimonialCards[currentIndex].classList.add('opacity-0');
        currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
        testimonialCards[currentIndex].classList.remove('opacity-0');
        testimonialCards[currentIndex].classList.add('opacity-100');
    });
});


// script to contact section
// تفعيل تأثيرات التمرير
document.addEventListener('DOMContentLoaded', function() {
    const scrollTriggers = document.querySelectorAll('.scroll-trigger');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    
    scrollTriggers.forEach(trigger => {
        observer.observe(trigger);
    });
});

