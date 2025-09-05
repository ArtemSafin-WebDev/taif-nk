import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function profile(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".profile__heading");
    const tl = gsap.timeline();
    let headingSplit = SplitText.create(heading);

    tl.from(headingSplit.lines, {
      autoAlpha: 0,
      x: -300,
      duration: 1,
      stagger: 0.1,
    });

    tl.from(
      ".profile__legend",
      {
        y: 60,
        autoAlpha: 0,
        duration: 1,
      },
      "-=0.4"
    );

    tl.from(
      ".profile__image",
      {
        y: 40,
        autoAlpha: 0,
        duration: 2,
        ease: "power2.out",
      },
      "-=0.4"
    );
    tl.from(
      ".profile__bottom-heading",
      {
        autoAlpha: 0,
        duration: 1,
        y: 30,
      },
      "<+=0.2"
    );
    tl.from(
      ".profile__table",
      {
        autoAlpha: 0,
        duration: 1,
        y: 30,
      },
      "<+=0.4"
    );
    tl.from(
      ".profile__card",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.05,
      },
      "<+=0.5"
    );
    tl.from(
      ".profile__card > *",
      {
        autoAlpha: 0,
        duration: 1,
      },
      ">-=0.2"
    );
  }, section);
}
