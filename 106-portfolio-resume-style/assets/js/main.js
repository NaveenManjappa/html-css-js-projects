//Show Menu
const showMenu = (toggleId,navId) => {
  const toggle = document.getElementById(toggleId);
  const nav  = document.getElementById(navId);

  if(toggle && nav){
    toggle.addEventListener('click',() => {
      nav.classList.toggle('show-menu');
    });
  }
}

showMenu('nav-toggle','nav-menu');

// Remove Menu Mobile
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click',linkAction));

// Scroll sections active link /

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*='+sectionId+']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll',scrollActive);