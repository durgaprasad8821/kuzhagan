function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
  }


window.onload = function () {
    const section = document.querySelector('.explore-opportunities');
  
    // Add the "show" class to trigger the animation
    setTimeout(() => {
      section.classList.add('show');
    }, 300);  
  };


  window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.review-card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.transition = 'all 0.6s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 200);
    });
  });






  



  