import Swiper from "swiper";
import "swiper/css";
import { Autoplay, Keyboard, Mousewheel, EffectFade } from "swiper/modules";
import investments from "./slides/investments";
import "swiper/scss/effect-fade";

export default function slideshow() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".slideshow")
  );
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    const animateSlide = (swiper: Swiper) => {
      console.log("Active slide index", swiper.activeIndex);
      const activeSlide = swiper.slides[swiper.activeIndex];
      const section = activeSlide.querySelector<HTMLElement>("section");
      if (!section?.hasAttribute("data-section-name")) return;
      const name = section.getAttribute("data-section-name");
      console.log("Section name", name);

      if (name === "investments") {
        investments(section);
      }
    };

    const instance = new Swiper(container, {
      direction: "vertical",
      speed: 1000,
      modules: [Keyboard, Mousewheel, Autoplay, EffectFade],
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      longSwipesRatio: 0.2,
      keyboard: {
        onlyInViewport: false,
        enabled: true,
      },
      mousewheel: {
        enabled: true,
      },
      init: false,
      on: {
        init: animateSlide,
        slideChange: animateSlide,
      },
    });
    instance.init();
  });
}
