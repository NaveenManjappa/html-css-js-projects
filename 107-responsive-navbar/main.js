//Show Menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

//Menu Show
if(navToggle){
  navToggle.addEventListener('click',() => {
    navMenu.classList.add('show-menu');
  })
}

//Menu hidden
if(navClose){
  navClose.addEventListener('click',() => {
    navMenu.classList.remove('show-menu');
  })
}