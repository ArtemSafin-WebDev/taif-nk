import Swiper from "swiper";
import "swiper/css";
import { Autoplay, Keyboard, Mousewheel, EffectFade } from "swiper/modules";
import investments from "./slides/investments";
import "swiper/scss/effect-fade";
import intro from "./slides/intro";
import dynamics from "./slides/dynamics";
import npzScheme from "./slides/npzScheme";
import sulfur from "./slides/sulfur";
import light from "./slides/light";
import powers from "./slides/powers";
import generalScheme from "./slides/generalScheme";
import processing from "./slides/pocessing";
import info from "./slides/info";
import position from "./slides/position";
import developments from "./slides/developments";
import production from "./slides/production";
import taifcombi from "./slides/taifcombi";
import cracking from "./slides/cracking";
import profile from "./slides/profile";

export default function slideshow() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".slideshow")
  );
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

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
      } else if (name === "dynamics") {
        contexts[swiper.activeIndex] = dynamics(section);
      } else if (name === "npz-scheme") {
        contexts[swiper.activeIndex] = npzScheme(section);
      } else if (name === "sulfur") {
        contexts[swiper.activeIndex] = sulfur(section);
      } else if (name === "light") {
        contexts[swiper.activeIndex] = light(section);
      } else if (name === "powers") {
        contexts[swiper.activeIndex] = powers(section);
      } else if (name === "general-scheme") {
        contexts[swiper.activeIndex] = generalScheme(section);
      } else if (name === "processing") {
        contexts[swiper.activeIndex] = processing(section);
      } else if (name === "info") {
        contexts[swiper.activeIndex] = info(section);
      } else if (name === "position") {
        contexts[swiper.activeIndex] = position(section);
      } else if (name === "developments") {
        contexts[swiper.activeIndex] = developments(section);
      } else if (name === "production") {
        contexts[swiper.activeIndex] = production(section);
      } else if (name === "taifcombi") {
        contexts[swiper.activeIndex] = taifcombi(section);
      } else if (name === "cracking") {
        contexts[swiper.activeIndex] = cracking(section);
      } else if (name === "profile") {
        contexts[swiper.activeIndex] = profile(section);
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
      longSwipesRatio: 0.1,
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
