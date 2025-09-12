import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function developments(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".developments__title");

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
            autoAlpha: 1,
            stagger: 0.1,
            x: 0,
          }
        );

        tl.fromTo(
          ".developments__bg-image",
          {
            scale: 1.2,
          },
          {
            duration: 1,
            scale: 1,
          },
          "<"
        );
        tl.fromTo(
          ".developments__count-number",
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
          ".developments__count-content",
          {
            autoAlpha: 0,
            y: 40,
          },
          {
            autoAlpha: 1,
            duration: 1,
            y: 0,
          },
          "<"
        );
        tl.fromTo(
          ".developments__card",
          {
            autoAlpha: 0,
            y: 20,
          },
          {
            autoAlpha: 1,
            duration: 1,
            stagger: 0.1,
            y: 0,
          },
          "<"
        );
        return tl;
      },
    });
    return () => {
      instance.revert();
    };
  }, section);
}
