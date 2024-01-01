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

  let mm = gsap.matchMedia();

  mm.add("(min-width: 641px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: () => `top bottom`,
        end: () => `top+=${300} bottom`,
        scrub: true,
      },
    });

    tl.from(inner, {
      y: -300,
      duration: 1,
      ease: "none",
    });
  });
}
