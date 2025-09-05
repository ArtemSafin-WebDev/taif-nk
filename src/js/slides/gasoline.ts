import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function gasoline(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".gasoline__heading");

    const tl = gsap.timeline({
      delay: 0.5,
    });
    let headingSplit = SplitText.create(heading);

    tl.from(headingSplit.lines, {
      autoAlpha: 0,
      x: -300,
      stagger: 0.1,
      duration: 1,
    });
    tl.addLabel("cardReveal");
    tl.from(".gasoline__left-card", {
      autoAlpha: 0,
      duration: 1.2,
      ease: "power2.out",
    });
    tl.from(
      ".gasoline__left-card-title",
      {
        autoAlpha: 0,
        y: 30,
        duration: 1,
      },
      "-=1"
    );
    tl.from(
      ".gasoline__column",
      {
        y: 60,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 1.4,
        ease: "power2.out",
      },
      "-=0.6"
    );
    tl.from(
      ".gasoline__column .gasoline__list-item",
      {
        autoAlpha: 0,
        stagger: 0.1,
        duration: 1,
      },
      "<"
    );
    tl.from(
      ".gasoline__legend",
      {
        y: 30,
        autoAlpha: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=1"
    );
    tl.from(
      ".gasoline__right-card",
      {
        autoAlpha: 0,
        duration: 1.2,
        ease: "power2.out",
      },
      "cardReveal+=0.8"
    );
    tl.from(
      ".gasoline__right-card-bg-image",
      {
        scale: 1.2,
        duration: 1,
      },
      "<"
    );
    tl.from(
      ".gasoline__right-card-title",
      {
        autoAlpha: 0,
        y: 10,
        duration: 0.8,
      },
      "<"
    );
  }, section);
}
