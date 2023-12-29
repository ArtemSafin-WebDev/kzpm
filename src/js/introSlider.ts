import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/controller";
import "swiper/css/effect-fade";
import { Navigation, EffectFade, Controller, Pagination } from "swiper/modules";

export default function introSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".intro__slider")
  );

  elements.forEach((element) => {
    const textContainer = element.querySelector<HTMLElement>(
      ".intro__slider-text-wrapper .swiper"
    );
    const imageContainer = element.querySelector<HTMLElement>(
      ".intro__slider-image-wrapper .swiper"
    );

    if (!textContainer || !imageContainer) return;

    const textInstance = new Swiper(textContainer, {
      speed: 600,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      modules: [Navigation, Pagination, EffectFade, Controller],
      navigation: {
        prevEl: element.querySelector<HTMLElement>(
          ".intro__slider-arrow--prev"
        ),
        nextEl: element.querySelector<HTMLElement>(
          ".intro__slider-arrow--next"
        ),
      },
      pagination: {
        el: element.querySelector<HTMLElement>(".intro__slider-pagination"),
        type: "fraction",
      },
      autoHeight: true,
    });

    const imageInstance = new Swiper(imageContainer, {
      speed: 600,
      effect: "fade",
      fadeEffect: {
        crossFade: false,
      },
      modules: [EffectFade, Controller],
      allowTouchMove: false,
    });

    textInstance.controller.control = imageInstance;
  });
}
