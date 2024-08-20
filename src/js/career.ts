export default function career() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".career")
  );

  elements.forEach((element) => {
    const cards = Array.from(
      element.querySelectorAll<HTMLElement>(".swiper-slide")
    );
    const parent = element.querySelector(".swiper");

    cards.forEach((card, cardIndex) => {
      card.addEventListener("mouseenter", () => {
        cards.forEach((card) => {
          card.classList.remove("active");
          card.classList.remove("inactive");
        });

        cards.forEach((otherCard) => {
          if (otherCard !== card) {
            otherCard.classList.add("inactive");
          }
        });
        card.classList.add("active");

        parent.setAttribute("data-active-card", (cardIndex + 1).toString());
      });
    });
  });

  const showAllBtns = Array.from(
    document.querySelectorAll<HTMLElement>(".career__vacancies-all-btn")
  );

  showAllBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".js-tabs-item").classList.toggle("show-all");
    });
  });
}
