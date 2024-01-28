export default function menu() {
  const burger = document.querySelector<HTMLButtonElement>(
    ".page-header__burger"
  );
  const closeBtn = document.querySelector<HTMLButtonElement>(".menu__burger");

  burger?.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.add("menu-open");
  });

  closeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.remove("menu-open");
  });

  const links = Array.from(
    document.querySelectorAll<HTMLLinkElement>(".page-header__nav a")
  );

  links.forEach((link) =>
    link.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
    })
  );

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.body.classList.remove("menu-open");
    }
  });
}
