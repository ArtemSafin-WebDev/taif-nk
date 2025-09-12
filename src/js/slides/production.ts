import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function production(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".production__title");

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
          ".production__card",
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
        tl.fromTo(
          ".production__card-image-container",
          {
            autoAlpha: 0,
            scale: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
            stagger: 0.1,
            scale: 1,
          },
          "<"
        );
        tl.fromTo(
          ".production__card-title",
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
