document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.theme-toggle');
  const backToTopButton = document.querySelector('.back-to-top');
  const body = document.body;
  const expertiseSpan = document.querySelector('.expertise');
  const expertiseList = [
      'Front End Developer',
      'Full Stack Engineer',
      'Supply Chain Enthusiast'
  ];
  let expertiseIndex = 0;

  // Theme toggle
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      body.setAttribute('data-theme', savedTheme);
      updateToggleButton(savedTheme);
  }

  toggleButton.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateToggleButton(newTheme);
  });

  function updateToggleButton(theme) {
      toggleButton.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  // Slide-up expertise animation
  function updateExpertise() {
      expertiseSpan.textContent = expertiseList[expertiseIndex];
      expertiseSpan.style.animation = 'none'; // Reset animation
      void expertiseSpan.offsetWidth; // Trigger reflow
      expertiseSpan.style.animation = 'slideUp 3s infinite ease-in-out';
      
      // Update index after animation cycle
      setTimeout(() => {
          expertiseIndex = (expertiseIndex + 1) % expertiseList.length;
          updateExpertise();
      }, 3000); // Match animation duration
  }

  updateExpertise();

  // Back to Top functionality
  window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
          backToTopButton.classList.add('visible');
      } else {
          backToTopButton.classList.remove('visible');
      }
  });

  backToTopButton.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});