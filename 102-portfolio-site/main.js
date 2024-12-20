/* Toggle nav bar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* Scroll section active link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((section, index) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if(top >= offset && top < offset + height) {
     navLinks.forEach((links)=>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
     });
    }
  });

  /* Sticky navbar */
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  /* Remove toggle icon and navbar */
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};

// window.addEventListener('scroll', () => {
//   console.log(`Scrolled from top: ${window.scrollY}px`);
// });

/* scroll reveal */

ScrollReveal({
  distance:'80px',
  duration: 2000,
  delay:200
});

ScrollReveal().reveal('.home-content,heading',{origin: 'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin: 'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin: 'right'});

/* Typed js */
const typed = new Typed('.multiple-text',{
  strings:['Frontend developer','Dotnet developer','Farmer'],
  typeSpeed:70,
  backSpeed:70,
  backDelay:1000,
  loop:true
});