import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function about(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".about__title");

    const instance = SplitText.create(heading, {
      type: "lines",
      autoSplit: true,
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
          ".about__bg-image",
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
          ".about__text",
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            duration: 1,
            y: 0,
            ease: "power2.out",
          },
          "<+=0.5"
        );
        return tl;
      },
    });
    return () => {
      instance.revert();
    };
  }, section);
}
