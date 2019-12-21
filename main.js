const navSlide = () => {
  const burger = document.querySelector ('.burger');
  const nav = document.querySelector('.nav-link');
  const navLink = document.querySelectorAll('.nav-link li');
  const box1 = document.querySelector('.box1');
  const box2 = document.querySelector('.box2');
  const box3 = document.querySelector('.box3');
  const box4 = document.querySelector('.box4');
  const intro = document.querySelector('.intro');
  const intro2 = document.querySelector('.intro2');
  const intro3 = document.querySelector('.intro3');
  const intro4 = document.querySelector('.intro4');
  const skills= document.querySelector('.skills');
  const navbar= document.querySelector('.navbar');




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

document.querySelector(".box3").addEventListener("mouseover", mouseOver3);
document.querySelector(".box3").addEventListener("mouseout", mouseOut3);

function mouseOver3() {
document.querySelector(".intro3").style.display = "block";
// console.log("in");
}

function mouseOut3() {
document.querySelector(".intro3").style.display = "none";
}

document.querySelector(".box4").addEventListener("mouseover", mouseOver4);
document.querySelector(".box4").addEventListener("mouseout", mouseOut4);

function mouseOver4() {
document.querySelector(".intro4").style.display = "block";
// console.log("in");
}

function mouseOut4() {
document.querySelector(".intro4").style.display = "none";
}


// navLink.forEach((link,index) => {
//   link.style.animation = 'navLinkFade 0.5s ease fowards ${index / 7}s';
// });
