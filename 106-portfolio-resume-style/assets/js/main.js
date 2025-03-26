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

// Show Scroll Top //

function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');
  if(this.scrollY >= 560){
    scrollTop.classList.add('show-scroll');
  }
  else {
    scrollTop.classList.remove('show-scroll');
  }  
}

window.addEventListener('scroll',scrollTop);

// Dark Light Theme //
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

// Previoulsy selected theme
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light' ;
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

// Validate if user has set a theme already
if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

//Activate / Deactivate theme manually with the button
themeButton.addEventListener('click',() => {
  // Add or remove dark/icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  //save the theme
  localStorage.setItem('selected-theme',getCurrentTheme());
  localStorage.setItem('selected-icon',getCurrentIcon());
});


// Reduce the size and print on A4 sheet //
function scaleCv() {
  document.body.classList.add('scale-cv');
}

// Remove the size when download is complete
function removeScale() {
  document.body.classList.remove('scale-cv');
}


//Generate PDF
let areaCv = document.getElementById('area-cv');
let resumeButton = document.getElementById('resume-button');

//Html2pdf options
let opt = {
  margin:0,
  filename:'NaveenManjappa.pdf',
  Image: { type: 'jpeg',quality: 0.98 },
  html2canvas: { scale: 4},
  jsPDF: {format:'a4',orientation:'portrait'}
}

function generateResume() {
  html2pdf(areaCv,opt);
}
//Button click for Generate pdf
resumeButton.addEventListener('click',() => {
  scaleCv();
  
  generateResume();

  setTimeout(() => {
    removeScale();
  }, 5000);

});