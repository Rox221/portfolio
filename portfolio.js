const sr = ScrollReveal();
  if (window.innerWidth < 768) {
  sr.reveal('.project-title', {
    duration: 1500, // Animation duration in milliseconds
    origin: 'left', // Animation starting point
    distance: '100px', // Distance the element moves during animation
    easing: 'ease-in-out', // Easing function
    // Add more options as needed
  });
  sr.reveal('.card', {
    duration: 1500, // Animation duration in milliseconds
    origin: 'bottom', // Animation starting point
    distance: '100px', // Distance the element moves during animation
    easing: 'ease-in-out', // Easing function
    // Add more options as needed
  });
  
}

  

