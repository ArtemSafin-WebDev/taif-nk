import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function sulfur(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".sulfur__title");
    const year = section.querySelector(".sulfur__year");
    let yearSplit = SplitText.create(year);
    SplitText.create(heading, {
      autoSplit: true,
      type: "lines",
      onSplit: (self) => {
        const tl = gsap.timeline();
        tl.fromTo(
          ".sulfur__legend-item",
          {
            y: 60,
            autoAlpha: 0,
          },
          { y: 0, duration: 1, autoAlpha: 1, stagger: 0.3 },
          0.5
        );

        tl.fromTo(
          self.lines,
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
          ".sulfur__chart-circle",
          {
            duration: 1,
            scale: 0,
            stagger: 0.05,
            ease: "power2.out",
          },
          "<"
        );
        tl.from(
          ".sulfur__chart-mark-bar-inner",
          {
            duration: 1,
            autoAlpha: 0,
            height: 0,
            stagger: 0.05,
            ease: "power2.out",
          },
          "<"
        );
        tl.from(
          ".sulfur__chart-year-circle",
          {
            duration: 1,
            autoAlpha: 0,
            stagger: 0.05,
            ease: "power2.out",
          },
          "<"
        );
        tl.from(
          ".sulfur__chart-year-text",
          {
            duration: 1,
            autoAlpha: 0,
            yPercent: 60,
            stagger: 0.05,
            ease: "power2.out",
          },
          "<"
        );
        tl.addLabel("sideCardReveal");
        tl.fromTo(
          ".sulfur__card",
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
          ".sulfur__card-bg-image",
          {
            scale: 1.2,
          },
          {
            scale: 1,
            duration: 1.5,
            ease: "power2.out",
          },
          "<"
        );
        tl.fromTo(
          ".sulfur__card-wrapper",
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
          ".sulfur__card-text",
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
          ".sulfur__card-icon",
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
          ".sulfur__card-amount .x",
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
          ".sulfur__card-amount .count",
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
        return tl;
      },
    });
  }, section);
}
