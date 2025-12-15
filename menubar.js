
document.addEventListener('DOMContentLoaded', function () {
const menubar = document.getElementById('menubar');
const menu = document.getElementById('menu');

menubar.addEventListener('change', function () {
    menu.classList.toggle('active');
});
});

document.addEventListener('DOMContentLoaded', function () {
    const iconBurger = document.querySelector('.icon-burger');
    const menu = document.getElementById('menu');
  
    iconBurger.addEventListener('change', function () {
      menu.classList.toggle('active');
    });
  
    const mainMenuItems = document.querySelectorAll('.main');
    mainMenuItems.forEach(function (mainMenuItem) {
      mainMenuItem.addEventListener('click', function () {
        mainMenuItem.querySelector('.sub').classList.toggle('active');
      });
    });
  });
  
  




