var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        520: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        960: {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
    },

  });