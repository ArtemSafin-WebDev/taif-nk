import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function powers(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".powers__heading");
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
            duration: 1,
            stagger: 0.1,
            autoAlpha: 1,
            x: 0,
          },
          0
        );
        tl.fromTo(
          ".powers__year",
          {
            y: 60,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
          },
          "<+=0.2"
        );

        tl.fromTo(
          ".powers__column-title",
          {
            y: 50,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            stagger: 0.05,
          },
          "<+=0.4"
        );
        tl.fromTo(
          ".powers__column .powers__list-item",
          {
            y: 50,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            stagger: 0.05,
          },
          "<"
        );
        tl.fromTo(
          ".powers__image-container",
          {
            scale: 0,
            autoAlpha: 0,
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
          },
          0.5
        );
        tl.fromTo(
          ".powers__legend",
          {
            y: 30,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
          },
          "<+=0.2"
        );
        return tl;
      },
    });
    return () => {
      instance.revert();
    };
  }, section);
}
