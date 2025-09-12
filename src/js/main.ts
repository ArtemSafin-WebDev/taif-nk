import "virtual:svg-icons-register";
import "../scss/style.scss";
import slideshow from "./slideshow";
import gsap from "gsap/all";

document.addEventListener("DOMContentLoaded", () => {
  document.fonts.ready.then(() => {
    slideshow();
    gsap.to(".loader", {
      autoAlpha: 0,
      duration: 0.5,
    });
  });
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
