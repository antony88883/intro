const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  centeredSlides: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});