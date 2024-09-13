const menuMobile = document.querySelector('.mobile__menu');
const burgerMenu = document.querySelector('.burger__menu-open');
const cart = document.querySelector('.header__cart');
const body = document.querySelector('body');

burgerMenu.addEventListener('click', function () {

    burgerMenu.classList.toggle('open');
    menuMobile.classList.toggle('open');

    if (menuMobile.classList.contains('open')) {
        cart.classList.add('off');
        body.classList.add('fix');
    } else {
        cart.classList.remove('off');
        body.classList.remove('fix');
    }
})

const linkMenuBurger = document.querySelectorAll('.mobile__nav-link');
linkMenuBurger.forEach((item) => {
    item.addEventListener('click', function () {
        menuMobile.classList.remove('open');
        burgerMenu.classList.remove('open');
        cart.classList.remove('off');
        body.classList.remove('fix');
    })
})



