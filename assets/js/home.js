let btnScroll = document.querySelector('.controlFather');
let postion_Mouse;
let postionMouse;
let coluna = document.getElementById('coluna');
let backgroundBanner = document.querySelector('.backgroundBanner');

if (screen.width <= 1024) {
  if (screen.height >= 1180) {
    backgroundBanner.setAttribute("style", "background: url('assets/images/home/BANNERMOBILE.png') no-repeat center top !important; height: 108vh !important; background-size: 100% !important;");
    coluna.setAttribute("style", "max-height: 85% !important;");
  } else {
    console.log('1024');
    backgroundBanner.setAttribute("style", "background: url('assets/images/home/BANNERMOBILE.png') no-repeat center top !important; height: 120vh;");
  }
}

if (screen.width <= 1440 && screen.width > 1024) {
  console.log('1440');
  document.querySelector('.backgroundBanner').setAttribute("style", "background: url('assets/images/home/BANNER.webp') no-repeat center bottom; height: 100vh; background-size: auto !important;");
}