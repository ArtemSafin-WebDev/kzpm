import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";

export default function pressCenterSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-press-center-slider")
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
          ".press-center__arrows-btn--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".press-center__arrows-btn--next"
        ),
      },
    });
  });
}
