window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section'); 
    const header = document.querySelector('.header');
    
    sections.forEach(section => {
      const top = window.scrollY;
      const offset = section.offsetTop;
      const height = section.offsetHeight;
      
      if (top >= offset && top < offset + height) {
        const bgColor = getComputedStyle(section).backgroundColor;
        header.style.backgroundColor = bgColor === 'rgba(0, 0, 0, 0)' ? 'transparent' : bgColor;
      }
    });
  });