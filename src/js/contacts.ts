import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function contacts() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".contacts")
  );

  elements.forEach((element) => {
    const btns = Array.from(
      element.querySelectorAll<HTMLLinkElement>(".contacts__tabs-nav-link")
    );
    const items = Array.from(
      element.querySelectorAll<HTMLElement>(".contacts__tabs-item")
    );

    const setActiveTab = (index: number) => {
      btns.forEach((btn) => btn.classList.remove("active"));
      btns[index]?.classList.add("active");

      items.forEach((item) => item.classList.remove("active"));
      items[index]?.classList.add("active");

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    };

    setActiveTab(0);

    btns.forEach((btn, btnIndex) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        setActiveTab(btnIndex);
      });
    });
  });
}
