let dropDown = document.querySelector('.nav-item.dropdown');
let dropDownMenu = document.querySelector('.dropdown-menu');
let dropDownToggle = document.querySelector('.nav-link.dropdown-toggle');
let navbar = document.querySelector('.navbar-expand-lg.navbar-light');
let navShow = document.getElementById('navbarNav');
let span = document.querySelector('span.navbar-toggler-icon');
let btnToggle = document.querySelector('button.navbar-toggler');
let svgClose = document.getElementById('svgClose');

if (screen.width <= 1024) {
  var background = () => {
    if (navShow.classList.contains('show')) {
      setTimeout(() => {
        navbar.classList.remove('backGroundBlue');
        svgClose.style.display = 'none';
        span.style.display = 'flex';
      }, 400);
    } else {
      span.style.display = 'none';
      svgClose.style.display = 'flex';
      navbar.classList.add('backGroundBlue');
    }
  }

} else if (screen.width > 1024) {

  dropDown.addEventListener('mouseover', () => {
    dropDown.classList.add('show');
    dropDownMenu.classList.add('show');
    dropDownToggle.setAttribute('aria-expanded', 'true');
    let dropDownMenuShow = document.querySelector('.dropdown-menu.show');
    dropDownMenuShow.addEventListener('mouseout', () => {
      dropDown.classList.remove('show');
      dropDownMenu.classList.remove('show');
      dropDownToggle.setAttribute('aria-expanded', 'false');
    });
    let dropDownShow = document.querySelector('.nav-item.dropdown.show');
    dropDownShow.addEventListener('mouseout', () => {
      dropDown.classList.remove('show');
      dropDownMenu.classList.remove('show');
      dropDownToggle.setAttribute('aria-expanded', 'false');
    });
  });

  console.log(window.location.href);

  let url = window.location.href;
  let n = url.indexOf('Oniun/') + 6;
  let n1 = url.length;
  let paginaAtiva = url.slice(n, n1);
  console.log(paginaAtiva);
}