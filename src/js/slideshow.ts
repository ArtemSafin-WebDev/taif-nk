import Swiper from "swiper";
import "swiper/css";
import { Autoplay, Keyboard, Mousewheel, EffectFade } from "swiper/modules";
import investments from "./slides/investments";
import "swiper/scss/effect-fade";
import intro from "./slides/intro";

export default function slideshow() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".slideshow")
  );
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    let context: gsap.Context | null = null;

    let contexts: gsap.Context[] = [];

    const animateSlide = (swiper: Swiper) => {
      console.log("Active slide index", swiper.activeIndex);
      const activeSlide = swiper.slides[swiper.activeIndex];
      const section = activeSlide.querySelector<HTMLElement>("section");
      if (!section?.hasAttribute("data-section-name")) return;
      const name = section.getAttribute("data-section-name");
      console.log("Section name", name);

      if (name === "investments") {
        contexts[swiper.activeIndex] = investments(section);
      } else if (name === "intro") {
        contexts[swiper.activeIndex] = intro(section);
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
        slideChangeTransitionEnd: (swiper) => {
          if (contexts[swiper.previousIndex]) {
            contexts[swiper.previousIndex].revert();
            delete contexts[swiper.previousIndex];
          }
        },
      },
    });
    instance.init();
  });
}
