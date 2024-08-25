    document.addEventListener('DOMContentLoaded', () => {
        const header = document.querySelector('header');
        const backToTop = document.querySelector('.back-to-top');
        const testimonials = document.querySelectorAll('.testimonial');
        const contactForm = document.querySelector('.contact-form');

        // Log elements to debug potential DOM issues
        console.log('Header:', header);
        console.log('Back to Top:', backToTop);

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                console.log('Smooth Scroll Target Element:', targetElement);
                if (targetElement) {  // Ensure the target element exists
                    try {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    } catch (error) {
                        console.error('Error scrolling to target element:', error);
                    }
                } else {
                    console.error('Target element not found for smooth scrolling. ID:', targetId);
                }
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            if (header) {
                header.classList.toggle('scrolled', window.scrollY > 100);
            }
        });

        // Back to top button
        window.addEventListener('scroll', () => {
            if (backToTop) {
                backToTop.style.display = window.scrollY > 300 ? 'flex' : 'none';
            }
        });

        backToTop?.addEventListener('click', (e) => {
            e.preventDefault();
            try {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } catch (error) {
                console.error('Error scrolling to top:', error);
            }
        });

        // Initialize AOS
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                once: true
            });
        } else {
            console.error('AOS library not loaded.');
        }

        // Testimonial slider
        let currentTestimonial = 0;
        const totalTestimonials = testimonials.length;

        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.style.display = i === index ? 'block' : 'none';
            });
        }

        function nextTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
            showTestimonial(currentTestimonial);
        }

        if (totalTestimonials > 0) {
            showTestimonial(currentTestimonial);
            setInterval(nextTestimonial, 5000);
        }
    });