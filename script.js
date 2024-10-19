document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Show/hide back-to-top button
  const backToTopButton = document.querySelector('.back-to-top');
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  // Add fade-in-up animation to elements
  const animatedElements = document.querySelectorAll('.section-title, .feature, .service-card, .testimonial');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(element => {
    observer.observe(element);
  });
});

 // Navbar scroll effect
 const header = document.querySelector('header');
 window.addEventListener('scroll', function() {
   if (window.pageYOffset > 50) {
     header.classList.add('scrolled');
   } else {
     header.classList.remove('scrolled');
   }
 });

 // Mobile menu toggle
 const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
 const navLinks = document.querySelector('.nav-links');

 mobileMenuToggle.addEventListener('click', function() {
   this.classList.toggle('active');
   navLinks.classList.toggle('active');
 });

 // Close mobile menu when a link is clicked
 document.querySelectorAll('.nav-links a').forEach(link => {
   link.addEventListener('click', () => {
     mobileMenuToggle.classList.remove('active');
     navLinks.classList.remove('active');
   });
 });
