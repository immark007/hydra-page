function menuShow(){
    const menuMobile = document.querySelector('.header__mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    menuMobile.classList.toggle('open');

    if (menuMobile.classList.contains('open')) {
        menuIcon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        menuIcon.classList.replace('fa-xmark', 'fa-bars');
    }
}