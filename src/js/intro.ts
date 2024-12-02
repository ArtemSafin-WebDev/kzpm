import balls from "./balls.ts";

export default function intro() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".intro"));

  elements.forEach((element) => {
    const links = Array.from(
      element.querySelectorAll<HTMLLinkElement>(".intro__bottom-nav-link")
    );
    const layers = Array.from(
      element.querySelectorAll<HTMLElement>(".intro__bg-layer")
    );

    const setActiveItem = (index: number) => {
      links.forEach((link) => link.classList.remove("active"));
      layers.forEach((layer) => layer.classList.remove("active"));
      links[index]?.classList.add("active");
      layers[index]?.classList.add("active");

      // Включаем/отключаем видео
      const video = layers[index].querySelector<HTMLVideoElement>('.js-bg-video')
      if (video) {
        if (video.src) {
          video.play();
        } else {
          video.src = video.getAttribute('data-src');
        }
      } else {
        const allVideos = element.querySelectorAll<HTMLVideoElement>('.js-bg-video');
        allVideos.forEach(v => {
          if (v.src) {
            v.pause();
          }
        })
      }

      // Включаем/отключаем шарики
      const ballsElement = layers[index].querySelector<HTMLElement>('.js-bg-balls');
      if (ballsElement) {
        balls();
      } else {
        const allBalls = element.querySelectorAll<HTMLElement>('.js-bg-balls canvas');
        allBalls.forEach(b => {
          b.remove();
        })
      }
    };

    setActiveItem(0);

    links.forEach((link, linkIndex) => {
      link.addEventListener("mouseenter", () => {
        setActiveItem(linkIndex);
      });

      link.addEventListener("click", (event) => {
        event.preventDefault();
        setActiveItem(linkIndex);
      });
    });
  });
}
