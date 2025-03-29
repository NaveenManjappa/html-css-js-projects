const body = document.querySelector('body'),
nav = document.querySelector('nav'),
modeToggle = document.querySelector('.sidebar__theme'),
searchToggle = document.querySelector('.sidebar__search');

//Dark or light theme
modeToggle.addEventListener('click',() => {
  modeToggle.classList.toggle('active');
  body.classList.toggle('dark');
});

searchToggle.addEventListener('click',()=> {
  searchToggle.classList.toggle('active');
});