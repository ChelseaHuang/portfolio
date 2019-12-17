const navSlide = () => {
  const burger = document.querySelector ('.burger');
  const nav = document.querySelector('.nav-link');
  const navLink = document.querySelectorAll('.nav-link li');
  const box1 = document.querySelector('.box1');
  const box2 = document.querySelector('.box2');
  const intro = document.querySelector('.intro');
  const intro2 = document.querySelector('.intro2');
  const skills= document.querySelector('.skills');


  burger.addEventListener('click', () => {
    $(".projects").toggleClass('hide');
    $(".navbar").toggleClass('show');
  });


}

navSlide();



document.querySelector(".box1").addEventListener("mouseover", mouseOver1);
document.querySelector(".box1").addEventListener("mouseout", mouseOut1);


function mouseOver1() {
  document.querySelector(".intro").style.display = "block";
  // console.log("in");
}

function mouseOut1() {
  document.querySelector(".intro").style.display = "none";
}



  document.querySelector(".box2").addEventListener("mouseover", mouseOver2);
document.querySelector(".box2").addEventListener("mouseout", mouseOut2);

function mouseOver2() {
  document.querySelector(".intro2").style.display = "block";
  // console.log("in");
}

function mouseOut2() {
  document.querySelector(".intro2").style.display = "none";
  // console.log("out");
}



// navLink.forEach((link,index) => {
//   link.style.animation = 'navLinkFade 0.5s ease fowards ${index / 7}s';
// });
