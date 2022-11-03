// list video accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}



// responsive menu

const navMenu = document.querySelector('.header__mobile-menu');
const burger = document.getElementById('burger');
const burgerClose = document.querySelector('.burger__mobile-close');
const overLay = document.querySelector('.nav__mobile-overlay');


burger.addEventListener('click', () => {
  navMenu.style.transform = "translateX(0)"
  overLay.style.display = "block"
 
})

burgerClose.addEventListener('click', () => {
  navMenu.style.transform = "translateX(-100%)"
})

overLay.addEventListener('click', () => {
  navMenu.style.transform = "translateX(-100%)"
  overLay.style.display = "none"
 
})



// auto write text animation
let textEl = document.querySelector('.text__animation');

let text = "Oshi.";
let index = 1;

function writeText() {
	textEl.innerText = text.slice(0, index);
	index++;
	if(index > text.length){
		index = 1;
	}
	setTimeout(writeText, 450);
}

writeText();



