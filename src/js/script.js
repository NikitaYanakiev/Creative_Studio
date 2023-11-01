  function animateOnScroll() {
    const elements = document.querySelectorAll('.anim-left, .anim-right, .anim-down, .anim-show');
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect();
      const screenHeight = window.innerHeight;

      if (elementPosition.top < screenHeight) {
        element.classList.add('anim-active');
      }
    });

    if (document.querySelectorAll('.anim-left.anim-active, .anim-right.anim-active, .anim-down.anim-active, .anim-show.anim-active').length === elements.length) {
      window.removeEventListener('scroll', animateOnScroll);
    }
  }

  window.addEventListener('load', () => {
    const elementsOnLoad = document.querySelectorAll('.anim-load');
    elementsOnLoad.forEach((element) => {
      element.classList.add('anim-active');
    });

    const preloader = document.getElementById('page-preloader');
    if (preloader) {
      preloader.classList.add('done');

      const elementsAfterPreload = document.querySelectorAll('.anim-after-preload');
      elementsAfterPreload.forEach((element) => {
        element.classList.add('anim-active');
      });

      window.addEventListener('scroll', animateOnScroll);
    }
  });


  const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const blockID = anchor.getAttribute('href').substr(1);
        
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }