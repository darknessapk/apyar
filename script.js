let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};
const sr = ScrollReveal ({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
});
sr.reveal('.hero-text',{delay: 200, origin: 'top'});
sr.reveal('.hero-img',{delay: 450, origin: 'top'});
sr.reveal('.icons',{delay: 500, origin: 'left'});
sr.reveal('.scroll-down',{delay: 200, origin: 'right'});
sr.reveal('.hero-img h1',{delay: 200, origin: 'top'});
sr.reveal('.hero-img h2',{delay: 200, origin: 'top'});
sr.reveal('.hero-img p',{delay: 200, origin: 'top'});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
