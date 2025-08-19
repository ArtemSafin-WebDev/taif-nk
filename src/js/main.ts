import "virtual:svg-icons-register";
import "../scss/style.scss";
import slideshow from "./slideshow";

document.addEventListener("DOMContentLoaded", () => {
  slideshow();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
