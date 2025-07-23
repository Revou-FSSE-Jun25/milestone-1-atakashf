document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href');
      
      const targetElement = (targetId === '#home') ? document.body : document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // --- Contact Form Submission Alert ---
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    
    // Show a success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Clear the form fields
    contactForm.reset();
  });
});