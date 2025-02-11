const swiper = new Swiper(".swiper", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  autoplay: {
    delay: 3000, // 3초마다 자동전환
    disableOnInteraction: false,
  },
  speed: 800, // 전환 속도
});

const target = document.querySelector("#target");
target.addEventListener("mouseover", () => {
  swiper.slideNext(1000);
});
