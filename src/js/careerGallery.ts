import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function careerGallery() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".career__gallery")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    const wrapper = element.querySelector<HTMLElement>(".swiper-wrapper");
    const slides = Array.from(
      element.querySelectorAll<HTMLElement>(".swiper-slide")
    );
    if (wrapper) {
      slides.forEach((slide) => {
        wrapper.append(slide.cloneNode(true));
      });
    }

    new Swiper(container, {
      slidesPerView: "auto",
      speed: 600,
      centeredSlides: true,
      modules: [Navigation],
      loop: true,
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".career__gallery-arrows-btn--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".career__gallery-arrows-btn--next"
        ),
      },
    });
  });
}
