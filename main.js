const navSlide = () => {
  const burger = document.querySelector ('.burger');
  const nav = document.querySelector('.nav-link');
  const navLink = document.querySelectorAll('.nav-link li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });


  navLink.forEach((link,index) => {
    link.style.animation = 'navLinkFade 0.5s ease fowards ${index / 7}s';
  });

}

navSlide();
