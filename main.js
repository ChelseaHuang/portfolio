const navSlide = () => {
  const burger = document.querySelector ('.burger');
  const nav = document.querySelector('.nav-link');
  const navLink = document.querySelectorAll('.nav-link li');
  const box1 = document.querySelector('.box1');
  const box2 = document.querySelector('.box2');
  const intro = document.querySelector('.intro');
  const skills= document.querySelector('.skills');


  burger.addEventListener('click', () => {
    $(".projects").toggleClass('hide');
    $(".navbar").toggleClass('show');
  });


box1.addEventListener('mouseover',function(event){
  $(".box1").toggleClass("opacity");
  $(".intro").toggleClass("show");
  $(".skills").toggleClass("show");
})

box1.addEventListener('mouseout',function(event){
  $(".box1").toggleClass("opacity");
  $(".intro").toggleClass("show");
  $(".skills").toggleClass("show");
})

box2.addEventListener('mouseover',function(event){
  $(".box2").toggleClass("opacity");
  $(".intro").toggleClass("show");
  $(".skills").toggleClass("show");
})

box2.addEventListener('mouseout',function(event){
  $(".box2").toggleClass("opacity");
  $(".intro").toggleClass("show");
  $(".skills").toggleClass("show");
})

  navLink.forEach((link,index) => {
    link.style.animation = 'navLinkFade 0.5s ease fowards ${index / 7}s';
  });

}

navSlide();
