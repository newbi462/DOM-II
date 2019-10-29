// Your code goes here

const mainNav = document.querySelector('.main-navigation');

//  mouseover
mainNav.addEventListener('mouseover', (event) => {
  event.target.style.backgroundColor = 'black';
})
mainNav.addEventListener('mouseleave', (event) => {
  event.target.style.backgroundColor = 'white';
})

//keydown

//  wheel
mainNav.addEventListener('wheel', (event) => {
  event.target.style.backgroundColor = 'pink';
})

const introP = document.querySelector('.intro p');


//drag / drop
// load
// focus

// resize
/* Need to do this on the window?*/
const bodyBox = document.querySelector('body');
window.addEventListener('resize', () => {
  bodyBox.style.backgroundColor = 'pink';
})

// scroll
// select


//  dblclick
const darkmode = document.querySelector('body');
darkmode.addEventListener('dblclick', (event) => {
  event.target.style.backgroundColor = 'black';
  mainNav.style.backgroundColor = 'black';
})


/*





*/
//5 green soc to get to 10?

//move the bus
TweenMax.to(".intro img", 2, {
  y: 150, // + down - up
  ease: Elastic.easeOut.config(1, 0.3),
  yoyo: true,
  repeat: -1
});
