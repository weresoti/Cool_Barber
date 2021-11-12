/*document.querySelector('.header__burger').onclick = function() {
   document.querySelector('.header__menu').classList.toggle('header__menu-active')
   document.querySelector('.header__burger').classList.toggle('active')
   $('body').toggleClass('lock')
}*/
document.addEventListener("click", function (event) {
  if (event.target.closest(".header__burger")) {
    document.querySelector(".header__menu").classList.toggle("header__menu-active");
    document.querySelector(".header__burger").classList.toggle("active");
    $("body").toggleClass("lock");
  }
  if (event.target.closest(".header__menu__link")) {
		document.querySelector(".header__menu").classList.remove("header__menu-active")
		document.querySelector(".header__burger").classList.remove("active")
		document.querySelector("body").classList.remove("lock")
	}
});

new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  /*centeredSlides: true,*/
  spaceBetween: 20,
  slidesPerView: "auto",
  watchOverflow: true,
  initialSlide: 0,
  /*loop: true,*/
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },
  /*effect: 'flip',
   flipEffect: {
      slideShadows: true,
      limitRotation: true,
   }*/
});
