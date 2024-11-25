import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function numbers() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".numbers")
  );

  elements.forEach((element) => {
    const content = element.querySelector<HTMLElement>(
      ".numbers__main-wrapper"
    );
    const contentWrapper = element.querySelector(".numbers__main");
    const container = element.querySelector<HTMLElement>(".swiper");
    const wrapper = element.querySelector<HTMLElement>(".swiper-wrapper");
    const slides = Array.from(
      element.querySelectorAll<HTMLElement>(".swiper-slide")
    );
    if (!slides.length || !container) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: content,
        pin: contentWrapper,
        start: "bottom bottom",
        end: () =>
          `bottom+=${window.innerHeight * 0.75 * slides.length} bottom`,
        pinSpacing: true,
        scrub: true,
      },
    });

    tl.to(wrapper, {
      x: () => {
        let slidesLength = 0;
        slides.forEach(
          (slide) =>
            (slidesLength +=
              slide.offsetWidth +
              parseFloat(
                window.getComputedStyle(slide).getPropertyValue("margin-right")
              ))
        );
        if (container.offsetWidth >= slidesLength) {
          return 0;
        } else {
          return -1 * Math.abs(slidesLength - container.offsetWidth);
        }
      },
      duration: 1,
      ease: "none",
    });
  });
}
