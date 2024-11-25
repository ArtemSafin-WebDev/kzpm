export default function geography() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".geography__map-point")
  );

  elements.forEach((element) => {
    const marker = element.querySelector<HTMLElement>(
      ".geography__map-point-marker"
    );

    const closeBtn = element.querySelector<HTMLElement>(
      ".geography__map-point-close"
    );

    marker?.addEventListener("click", (event) => {
      event.preventDefault();
      elements.forEach((element) => element.classList.remove("active"));
      marker.parentElement?.classList.add("active");
    });

    closeBtn?.addEventListener("click", (event) => {
      event.preventDefault();
      element.classList.remove("active");
    });
  });
}
