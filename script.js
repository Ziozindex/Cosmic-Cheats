// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000, // Duration of animations
  easing: 'ease-in-out', // Easing function
  once: true, // Animation should happen only once
});

// Handle scroll event for header background change and back-to-top button visibility
const header = document.querySelector('header');
const backToTopButton = document.querySelector('.back-to-top');

function handleScroll() {
  const scrollY = window.scrollY;

  // Header background change
  header.classList.toggle('scrolled', scrollY > 50);

  // Back-to-top button visibility
  backToTopButton.classList.toggle('visible', scrollY > 300);
}

window.addEventListener('scroll', handleScroll);

// Implement the testimonial slider functionality
const testimonials = document.querySelectorAll('.testimonial');
const testimonialContainer = document.querySelector('.testimonial-slider');
let currentIndex = 0;
let testimonialInterval;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
    testimonial.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
}

function startTestimonialSlider() {
  testimonialInterval = setInterval(nextTestimonial, 5000);
}

function stopTestimonialSlider() {
  clearInterval(testimonialInterval);
}

// Add navigation buttons for testimonials
const prevButton = document.createElement('button');
prevButton.textContent = '❮';
prevButton.classList.add('testimonial-nav', 'prev-testimonial');
prevButton.addEventListener('click', () => {
  prevTestimonial();
  stopTestimonialSlider();
  startTestimonialSlider();
});

const nextButton = document.createElement('button');
nextButton.textContent = '❯';
nextButton.classList.add('testimonial-nav', 'next-testimonial');
nextButton.addEventListener('click', () => {
  nextTestimonial();
  stopTestimonialSlider();
  startTestimonialSlider();
});

testimonialContainer.appendChild(prevButton);
testimonialContainer.appendChild(nextButton);

// Start the testimonial slider
startTestimonialSlider();

// Pause automatic sliding when hovering over testimonials
testimonialContainer.addEventListener('mouseenter', stopTestimonialSlider);
testimonialContainer.addEventListener('mouseleave', startTestimonialSlider);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Back to top button functionality
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('nav');

if (mobileMenuToggle && nav) {
  mobileMenuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
  });

  // Close mobile menu when a link is clicked
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      mobileMenuToggle.classList.remove('active');
    });
  });
}

// Simple form validation
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    });

    if (isValid) {
      // Add your form submission logic here
      console.log('Form submitted successfully');
      form.reset();
    } else {
      console.log('Please fill in all fields');
    }
  });
}
