const body = document.querySelector('body'),
nav = document.querySelector('nav'),
modeToggle = document.querySelector('.sidebar__theme'),
searchToggle = document.querySelector('.sidebar__search__toggle'),
sidebarClose = document.querySelector('.sidebarClose'),sidebarOpen = document.querySelector('.sidebarOpen');

let getMode = localStorage.getItem('mode');
if(getMode && getMode === 'dark-mode'){
  body.classList.add('dark');
}
//Dark or light theme
modeToggle.addEventListener('click',() => {
  modeToggle.classList.toggle('active');
  body.classList.toggle('dark');

  if(!body.classList.contains('dark')){
    localStorage.setItem('mode','light-mode');
  } else {
    localStorage.setItem('mode','dark-mode');
  }
});

//toggle search box
searchToggle.addEventListener('click',()=> {
  searchToggle.classList.toggle('active');
});

//Toggle sidebar
sidebarOpen.addEventListener('click',() => {
  nav.classList.add('active');
});

sidebarClose.addEventListener('click',() => {
  nav.classList.remove('active');
});

body.addEventListener('click',e => {
  let clickedEl = e.target;
  if(!clickedEl.classList.contains("sidebarOpen") && !clickedEl.classList.contains("nav__menu") ){
    nav.classList.remove('active');
  }
});

//Reference
//https://youtu.be/TWiy3dGSmgk?si=S7IRE6NdndCmtm3n