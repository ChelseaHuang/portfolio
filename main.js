const navSlide = () => {
  const burger = document.querySelector ('.burger');
  const nav = document.querySelector('.nav-link');
  const navLink = document.querySelectorAll('.nav-link li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  })
}



navSlide();
