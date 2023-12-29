import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/controller";
import "swiper/css/effect-fade";
import { Controller, EffectFade, Pagination, Navigation } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function secret() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".secret")
  );

  const mql = window.matchMedia("(max-width: 640px)");

  elements.forEach((element) => {
    const mainContainer = element.querySelector<HTMLElement>(
      ".secret__slider-inner .swiper"
    );
    const bgContainer = element.querySelector<HTMLElement>(
      ".secret__slider-bg .swiper"
    );

    if (!mainContainer || !bgContainer) return;

    let mainInstance: Swiper | null = null;
    let bgInstance: Swiper | null = null;

    const handleWidthChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        if (mainInstance) mainInstance.destroy();
        if (bgInstance) bgInstance.destroy();
        mainInstance = new Swiper(mainContainer, {
          effect: "fade",
          fadeEffect: {
            crossFade: true,
          },
          speed: 600,
          modules: [EffectFade, Controller, Pagination, Navigation],
          autoHeight: true,
          navigation: {
            prevEl: element.querySelector<HTMLButtonElement>(
              ".secret__slider-arrow--prev"
            ),
            nextEl: element.querySelector<HTMLButtonElement>(
              ".secret__slider-arrow--next"
            ),
          },
          pagination: {
            el: element.querySelector<HTMLElement>(
              ".secret__slider-pagination"
            ),
            type: "fraction",
          },
          on: {
            slideChange: () => {
              ScrollTrigger.refresh();
            },
          },
        });
        bgInstance = new Swiper(bgContainer, {
          effect: "fade",
          modules: [EffectFade, Controller],
          fadeEffect: {
            crossFade: false,
          },
          speed: 600,
        });

        mainInstance.controller.control = bgInstance;
        bgInstance.controller.control = mainInstance;
      } else {
        if (mainInstance) mainInstance.destroy();
        if (bgInstance) bgInstance.destroy();
        mainInstance = new Swiper(mainContainer, {
          effect: "fade",
          fadeEffect: {
            crossFade: true,
          },
          speed: 600,
          modules: [EffectFade, Controller, Pagination, Navigation],
          pagination: {
            el: element.querySelector<HTMLElement>(
              ".secret__slider-pagination"
            ),
            type: "fraction",
          },
          navigation: {
            prevEl: element.querySelector<HTMLButtonElement>(
              ".secret__slider-arrow--prev"
            ),
            nextEl: element.querySelector<HTMLButtonElement>(
              ".secret__slider-arrow--next"
            ),
          },
        });

        bgInstance = new Swiper(bgContainer, {
          effect: "fade",
          modules: [EffectFade, Controller],
          fadeEffect: {
            crossFade: false,
          },
          speed: 600,
          allowTouchMove: false,
        });

        mainInstance.controller.control = bgInstance;
        bgInstance.controller.control = mainInstance;
      }
    };

    mql.addEventListener("change", handleWidthChange);

    handleWidthChange(mql);
  });
}
