import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function gasoline(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".gasoline__heading");

    const instance = SplitText.create(heading, {
      type: "lines",
      autoSplit: true,
      onSplit: (self) => {
        const tl = gsap.timeline({
          delay: 0.5,
        });
        tl.fromTo(
          self.lines,
          {
            autoAlpha: 0,
            x: -300,
          },
          {
            autoAlpha: 1,
            x: 0,
            stagger: 0.1,
            duration: 1,
          }
        );
        tl.addLabel("cardReveal");
        tl.fromTo(
          ".gasoline__left-card",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1.2,
            ease: "power2.out",
          }
        );
        tl.fromTo(
          ".gasoline__left-card-title",
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
          },
          "-=1"
        );
        tl.fromTo(
          ".gasoline__column",
          {
            y: 60,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            stagger: 0.1,
            duration: 1.4,
            ease: "power2.out",
          },
          "-=0.6"
        );
        tl.fromTo(
          ".gasoline__column .gasoline__list-item",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            stagger: 0.1,
            duration: 1,
          },
          "<"
        );
        tl.fromTo(
          ".gasoline__legend",
          {
            y: 30,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power2.out",
          },
          "-=1"
        );
        tl.fromTo(
          ".gasoline__right-card",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1.2,
            ease: "power2.out",
          },
          "cardReveal+=0.8"
        );
        tl.fromTo(
          ".gasoline__right-card-bg-image",
          {
            scale: 1.2,
          },
          {
            scale: 1,
            duration: 1,
          },
          "<"
        );
        tl.fromTo(
          ".gasoline__right-card-title",
          {
            autoAlpha: 0,
            y: 10,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
          },
          "<"
        );
        return self;
      },
    });
    return () => {
      instance.revert();
    };
  }, section);
}
