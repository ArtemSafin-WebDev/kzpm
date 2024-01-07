import "virtual:svg-icons-register";
import "../scss/style.scss";
import solutionsSlider from "./solutionsSlider";
import pressCenterSlider from "./pressCenterSlider";
import trustSlider from "./trustSlider";
import partnersSlider from "./partnersSlider";
import fancybox from "./fancybox";
import docsSlider from "./docsSlider";
import secret from "./secret";
import smoothScrolling from "./smoothScrolling";
import numbers from "./numbers";
import footer from "./footer";
import introSlider from "./introSlider";
import header from "./header";
import intro from "./intro";
import geography from "./geography";
import contacts from "./contacts";
import balls from "./balls";

document.addEventListener("DOMContentLoaded", () => {
  smoothScrolling();
  fancybox();
  introSlider();
  intro();
  header();
  solutionsSlider();
  pressCenterSlider();
  trustSlider();
  partnersSlider();
  docsSlider();
  secret();
  numbers();
  footer();
  geography();
  contacts();
  balls();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
