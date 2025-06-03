document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate sections on scroll
  gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
      }
    });
  });

  // VANTA.js background
  VANTA.WAVES({
    el: "#hero-bg",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x0ff,
    shininess: 50.00
  });

  // Modal functionality
  window.openModal = (projectId) => {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');

    if (projectId === 'project1') {
      title.textContent = 'Project One';
      description.textContent = 'Description of Project One with details, challenges, and solutions.';
    }

    modal.style.display = 'flex';
  };

  window.closeModal = () => {
    document.getElementById('modal').style.display = 'none';
  };

  // Contact form submission
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! I’ll get back to you soon.');
    form.reset();
  });
});

