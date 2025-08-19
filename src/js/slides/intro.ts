import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function investments(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".intro__title");
    const year = section.querySelector(".intro__year");

    const tl = gsap.timeline();
    let headingSplit = SplitText.create(heading);
    let yearSplit = SplitText.create(year);

    tl.fromTo(
      ".intro__bg-image",
      {
        scale: 1.1,
      },
      {
        scale: 1,
        duration: 1,
      },
      0.3
    );

    tl.fromTo(
      ".intro__logo",
      {
        scale: 0,
        autoAlpha: 0,
      },
      {
        scale: 1,
        duration: 1,
        autoAlpha: 1,
      },
      0.3
    );
    tl.fromTo(
      ".intro__small-text",
      {
        autoAlpha: 0,
      },
      {
        duration: 1,
        autoAlpha: 1,
      },
      "<+=0.4"
    );

    tl.fromTo(
      headingSplit.chars,
      {
        autoAlpha: 0,
      },
      {
        duration: 0.6,
        autoAlpha: 1,
        stagger: 0.05,
      },
      0.5
    );
    tl.fromTo(
      yearSplit.chars,
      {
        autoAlpha: 0,
        y: 10,
      },
      {
        duration: 0.6,
        autoAlpha: 1,
        y: 0,
        stagger: 0.05,
        ease: "power2.out",
      },
      "-=0.4"
    );

    tl.fromTo(
      ".intro__numbers-list-item",
      {
        yPercent: 60,
        autoAlpha: 0,
      },
      { yPercent: 0, duration: 1, autoAlpha: 1, stagger: 0.05 },
      "<-=0.3"
    );

    tl.fromTo(
      ".intro__numbers-card-title",
      {
        xPercent: -100,
        autoAlpha: 0,
      },
      {
        xPercent: 0,
        autoAlpha: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
      },
      "<+=0.4"
    );

    tl.fromTo(
      ".intro__numbers-card-text",
      {
        xPercent: -100,
        autoAlpha: 0,
      },
      {
        xPercent: 0,
        autoAlpha: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
      },
      "<+=0.4"
    );
  }, section);
}
