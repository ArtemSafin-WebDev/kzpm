import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function header() {
  const pageHeader = document.querySelector<HTMLElement>(".page-header");
  if (!pageHeader) return;

  ScrollTrigger.create({
    trigger: pageHeader,
    pin: true,
    pinSpacing: false,
    end: 99999999999,
    start: "top top",
  });
}
