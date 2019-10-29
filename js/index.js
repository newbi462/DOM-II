// Your code goes here

const mainNav = document.querySelector('.main-navigation');

//  mouseover
mainNav.addEventListener('mouseover', (event) => {
  event.target.style.backgroundColor = 'black';
})
mainNav.addEventListener('mouseleave', (event) => {
  event.target.style.backgroundColor = 'white';
})

//Nest two similar events somewhere in the site and prevent the event propagation properly
const mainNav2 = document.querySelector('.nav-container');
mainNav2.addEventListener('mouseover', (event) => {
  event.target.style.backgroundColor = 'blue';
  event.stopPropagation();
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

//move the bus pics
TweenMax.to(".intro img", 2, {
  y: 150, // + down - up
  ease: Elastic.easeOut.config(1, 0.3),
  yoyo: true,
  repeat: -1
});

TweenMax.to(".content-section img", 2, {
  x: -425, // + right - left
  ease: Elastic.easeOut.config(1, 0.3),
  yoyo: true,
  repeat: -1
});

TweenMax.to(".inverse-content img", 2, {
  x: 425, // + right - left
  ease: Elastic.easeOut.config(1, 0.3),
  yoyo: true,
  repeat: -1
});

TweenMax.to(".content-destination img", 2, {
  y: -150, // + down - up
  ease: Elastic.easeOut.config(1, 0.3),
  yoyo: true,
  repeat: -1
});


const messButton = document.querySelector('.destination .btn');
messButton.addEventListener('mouseover', () => {
  TweenMax.to(".destination .btn", 2, {
    y: 150, // + down - up
    ease: Elastic.easeOut.config(1, 0.3),
    yoyo: true,
    repeat: -1
  });
})

// top the navigation from items from refreshing the page by using preventDefault()
const killLink = document.querySelectorAll('.nav-link');

for (let i = 0; i < killLink.length; i++) {
  killLink[i].addEventListener('click', (event) => {
    event.preventDefault();
    console.log("killed link");
  })
}
