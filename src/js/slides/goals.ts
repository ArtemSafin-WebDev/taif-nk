import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function goals(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".goals__large-text");
    const instance = SplitText.create(heading, {
      autoSplit: true,
      type: "lines",
      onSplit: (self) => {
        const tl = gsap.timeline();
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
        tl.fromTo(
          ".goals__bg-image",
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
          ".goals__small-text",
          {
            autoAlpha: 0,
            y: 50,
          },
          {
            autoAlpha: 1,
            duration: 1,
            y: 0,
          },
          "<+=0.5"
        );
        tl.fromTo(
          ".goals__title",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          },
          "-=0.5"
        );
        tl.fromTo(
          ".goals__goals-list-item",
          {
            autoAlpha: 0,
            y: 60,
          },
          {
            autoAlpha: 1,
            duration: 1,
            y: 0,
            stagger: 0.05,
          },
          "-=0.5"
        );
        return tl;
      },
    });
    return () => {
      instance.revert();
    };
  }, section);
}
