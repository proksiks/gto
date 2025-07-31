import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".loop-items", {
  slidesPerView: "auto",
  autoplay: {
    enabled: true,
    delay: 1,
    pauseOnMouseEnter: false,
    disableOnInteraction: true,
  },
});

const newsSwiper = new Swiper(".news__slider", {
  slidesPerView: 1.25,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});
