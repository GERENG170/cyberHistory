let elem = document.querySelector(".btnOne");
let btn = elem.querySelector("button");
let elem2 = document.querySelector(".btnTwo");
let btn2 = elem2.querySelector("button");
let elem3 = document.querySelector(".btnGames");
let btn3 = elem3.querySelector("button");
let block1 = document.querySelector(".blockOne");
let block2 = document.querySelector(".blockTwo");
let block3 = document.querySelector(".blockThree");
let mainFirst = document.querySelector(".mainFirst");
let circle1 = document.querySelector(".circle1");
let mainTwo = document.querySelector(".mainMidle");
let circle2 = document.querySelector(".circle2");
let mainThree = document.querySelector(".mainR");
let circle3 = document.querySelector(".circle3");
let main = document.querySelector(".main");
let mainConteiner = main.querySelector(".conteiner");
btn.addEventListener("mouseenter",() => {
    btn.style.backgroundImage = "linear-gradient(45deg,#E52652 25%,#f15692 50%,#E52652 100%)";
    btn.style.boxShadow = "2px 2px 20px #E52652";
    // alert("qwe");
});
btn.addEventListener("mouseleave",() => {
    btn.style.backgroundImage = "none";
    btn.style.boxShadow = "none";
    // alert("qwe");
});
btn2.addEventListener("mouseenter",() => {
    btn2.style.backgroundImage = "linear-gradient(45deg,#E52652 25%,#f15692 50%,#E52652 100%)";
    btn2.style.boxShadow = "2px 2px 20px #E52652";
    // alert("qwe");
});
btn2.addEventListener("mouseleave",() => {
    btn2.style.backgroundImage = "none";
    btn2.style.boxShadow = "none"
    // alert("qwe");
});
btn3.addEventListener("mouseenter",() => {
    btn3.style.backgroundImage = "linear-gradient(45deg,#E52652 25%,#f15692 50%,#E52652 100%)";
    btn3.style.boxShadow = "2px 2px 20px #E52652";
    // alert("qwe");
});
btn3.addEventListener("mouseleave",() => {
    btn3.style.backgroundImage = "none";
    btn3.style.boxShadow = "none"
    // alert("qwe");
});
block1.addEventListener("mouseenter",()=>{
    elem.style.opacity = "1";
});
block1.addEventListener("mouseleave",()=>{
    elem.style.opacity = "0";
});
block2.addEventListener("mouseenter",()=>{
    elem2.style.opacity = "1";
});
block2.addEventListener("mouseleave",()=>{
    elem2.style.opacity = "0";
});
block3.addEventListener("mouseenter",()=>{
    elem3.style.opacity = "1";
});
block3.addEventListener("mouseleave",()=>{
    elem3.style.opacity = "0";
});
mainFirst.addEventListener("mouseover",()=>{
    circle1.style.background = "#E52652";
    circle2.style.background = "#b7b7b7";
    circle3.style.background = "#b7b7b7";
    circle1.style.boxShadow = "4px 4px 35px #E52652";
    circle2.style.boxShadow = "none";
    circle3.style.boxShadow = "none";
});
mainTwo.addEventListener("mouseover",()=>{
    circle2.style.background = "#E52652";
    circle3.style.background = "#b7b7b7";
    circle1.style.background = "#b7b7b7";
    circle2.style.boxShadow = "4px 4px 35px #E52652";
    circle1.style.boxShadow = "none";
    circle3.style.boxShadow = "none";
});
mainThree.addEventListener("mouseover",()=>{
    circle3.style.background = "#E52652";
    circle1.style.background = "#b7b7b7";
    circle2.style.background = "#b7b7b7";
    circle3.style.boxShadow = "4px 4px 35px #E52652";
    circle1.style.boxShadow = "none";
    circle2.style.boxShadow = "none";
});
mainConteiner.addEventListener("mouseleave",()=>{
    circle3.style.background = "#b7b7b7";
    circle1.style.background = "#b7b7b7";
    circle2.style.background = "#b7b7b7";
    circle3.style.boxShadow = "none";
    circle1.style.boxShadow = "none";
    circle2.style.boxShadow = "none";
});

let goTopBtn = document.querySelector(".back_to_top");

(function() {
    'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
        goTopBtn.style.display = "flex";
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
        goTopBtn.style.display = "none";
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.back_to_top');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
    goTopBtn.addEventListener("mouseover",()=>{
        goTopBtn.style.boxShadow = "4px 4px 35px white";
    });
    goTopBtn.addEventListener("mouseleave",()=>{
        goTopBtn.style.boxShadow = "none";
    });
  })();
 

let blockTxt = main.querySelectorAll(".txtBlockOne");
for(let i =0;i<=blockTxt.length; i++){
    let arr = blockTxt[i].querySelectorAll("p");
    // console.log(arr);
    arr.forEach(function(item, index, array) {
        item.addEventListener("mouseover",()=>{
            item.style.borderBottom = "15px solid #E52652";
            item.style.fontSize = "16px";
        });
        item.addEventListener("mouseleave",()=>{
            item.style.borderBottom = "5px solid #E52652";
            item.style.fontSize = "15px";
            
        });
      });
 
}

