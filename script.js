const swiper = new Swiper('.home-slider', {
    // Optional parameters
    spaceBetween: 30,
    effect: "fade",
    grabCursor: true,
    loop: true,
    centeredSlides: true,

    autoplay: {
      delay: 3000, // Set the delay between slides (in milliseconds)
      disableOnInteraction: false, // Allow autoplay to continue even when the user interacts with the slider
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true,
    },
  
    // And if we need scrollbar
  });
  