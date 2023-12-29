import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function docsSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".docs__slider")
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
          ".docs__arrows-btn--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".docs__arrows-btn--next"
        ),
      },
    });
  });
}
