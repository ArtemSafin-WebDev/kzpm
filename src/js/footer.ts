import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function footer() {
  const footer = document.querySelector<HTMLElement>(".page-footer");
  if (!footer) return;

  const inner = footer.querySelector<HTMLElement>(
    ".page-footer__wrapper-inner"
  );
  if (!inner) return;

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: footer,
  //       start: () => `top-=${window.innerHeight * 1} bottom`,
  //       end: () => `top+=${window.innerHeight} bottom`,
  //       scrub: true,
  //     },
  //   });

  //   tl.from(inner, {
  //     y: -1 * window.innerHeight,
  //     duration: 1,
  //     ease: "none",
  //   });
}
