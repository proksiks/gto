import Swiper from "swiper/bundle";
import { Navigation, Pagination } from "swiper/modules";
const AUTO_PLAY = {
  enabled: true,
  delay: 1,
  pauseOnMouseEnter: false,
  // disableOnInteraction: true,
};

const LOOP_ANIMATION = {
  slidesPerView: "auto",
  loop: true,
  speed: 6000,
  // freeMode: true,
  autoplay: AUTO_PLAY,
};

Swiper.use([Navigation, Pagination]);

new Swiper(".loop-items", LOOP_ANIMATION);
new Swiper("#galleryTop", { ...LOOP_ANIMATION, spaceBetween: 16 });
new Swiper("#galleryBottom", {
  ...LOOP_ANIMATION,
  spaceBetween: 16,
  speed: 12000,
});
new Swiper("#partnersTop", { ...LOOP_ANIMATION, spaceBetween: 16 });
new Swiper("#partnersBottom", {
  ...LOOP_ANIMATION,
  spaceBetween: 16,
  speed: 12000,
});
new Swiper(".news__slider", {
  slidesPerView: 1.25,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});

new Swiper(".about-disciplines__slider", {
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
    el: ".about-disciplines__pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".about-disciplines__button-next",
    prevEl: ".about-disciplines__button-prev",
  },
});
