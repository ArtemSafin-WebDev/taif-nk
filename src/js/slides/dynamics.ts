import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function dynamics(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".dynamics__heading");
    const year = section.querySelector(".dynamics__year");

    const tl = gsap.timeline();
    let headingSplit = SplitText.create(heading);
    let yearSplit = SplitText.create(year);

    tl.fromTo(
      ".dynamics__legend-item",
      {
        y: 60,
        autoAlpha: 0,
      },
      { y: 0, duration: 1, autoAlpha: 1, stagger: 0.3 },
      0.5
    );

    tl.fromTo(
      headingSplit.lines,
      {
        autoAlpha: 0,
        x: -300,
      },
      {
        duration: 1,
        autoAlpha: 1,
        stagger: 0.1,
        x: 0,
      },
      0
    );
    tl.fromTo(
      yearSplit.chars,
      {
        autoAlpha: 0,
      },
      {
        duration: 0.6,
        autoAlpha: 1,
        stagger: 0.05,
        ease: "power2.out",
      },
      "<+=0.8"
    );

    tl.from(
      ".dynamics__chart-bar-bottom-inner",
      {
        height: 0,
        duration: 1.2,
        stagger: {
          each: 0.1,
          ease: "power2.out",
        },
        ease: "expo.out",
      },
      0.5
    );
    tl.from(
      ".dynamics__chart-bar-top-inner",
      {
        height: 0,
        duration: 1.2,
        stagger: {
          each: 0.1,
          ease: "power2.out",
        },
        ease: "expo.out",
      },
      0.5
    );
    tl.fromTo(
      ".dynamics__chart-bar-top-inner span",
      {
        autoAlpha: 0,
        y: 10,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
        stagger: 0.05,
      },
      ">-=0.8"
    );
    tl.fromTo(
      ".dynamics__chart-bar-bottom-inner span",
      {
        autoAlpha: 0,
        y: 10,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
        stagger: 0.05,
      },
      "<+=0.2"
    );

    tl.addLabel("sideCardReveal");
    tl.fromTo(
      ".dynamics__card",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1.5,
        ease: "power2.out",
      },
      "-=1"
    );
    tl.fromTo(
      ".dynamics__card-wrapper",
      {
        autoAlpha: 0,
        scale: 0,
      },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      },
      "<+=0.2"
    );
    tl.fromTo(
      ".dynamics__card-text",
      {
        autoAlpha: 0,
        y: 20,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      },
      "<+=0.6"
    );
    tl.fromTo(
      ".dynamics__card-icon",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,

        duration: 1,
        ease: "power2.out",
      },
      "<+=0.2"
    );
    tl.fromTo(
      ".dynamics__card-amount .x",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      "<+=0.2"
    );
    tl.fromTo(
      ".dynamics__card-amount .count",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      "<+=0.2"
    );

    tl.fromTo(
      ".dynamics__chart-year span",
      {
        autoAlpha: 0,
        y: 10,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "sideCardReveal-=1.5"
    );
  }, section);
}
