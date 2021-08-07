const menuBtn = document.querySelector(".menu-btn");
const menuBtnBurger = document.querySelector('.menu-btn__burger')
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const menuNavItems = document.querySelectorAll('.menu-nav__item')

menuBtn.addEventListener("click",toggleMenu);
let showMenu = false;

function toggleMenu() {
    if(!showMenu){
        menuBtnBurger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        menuNavItems.forEach(menuNavItem => {menuNavItem.classList.add('open')});

        showMenu = true;
    }
    else{
        menuBtnBurger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        menuNavItems.forEach(menuNavItem => {menuNavItem.classList.remove('open')});

        showMenu = false;
    }
}
