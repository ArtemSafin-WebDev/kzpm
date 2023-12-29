import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";

export default function trustSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".trust__slider")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      modules: [Navigation],
      slidesPerView: "auto",
      speed: 600,
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".trust__arrows-btn--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".trust__arrows-btn--next"
        ),
      },
    });
  });
}
