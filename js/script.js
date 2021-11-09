document.querySelector('.header__burger').onclick = function() {
   document.querySelector('.header__menu').classList.toggle('header__menu-active')
   document.querySelector('.header__burger').classList.toggle('active')
   $('body').toggleClass('lock')
}