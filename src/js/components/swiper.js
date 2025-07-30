import Swiper from "swiper";
// import { Navigation, Pagination } from "swiper/modules";
// Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".loop-items", {
  slidesPerView: "auto",
  autoplay: {
    enabled: true,
    delay: 1,
    pauseOnMouseEnter: false,
    disableOnInteraction: true,
  },
});
