import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function about(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".about__title");

    SplitText.create(heading, {
      type: "lines",
      autoSplit: true,
      onSplit: (self) => {
        const tl = gsap.timeline();
        tl.from(self.lines, {
          autoAlpha: 0,
          x: -300,
          stagger: 0.1,
          duration: 1,
        });
        tl.from(
          ".about__bg-image",
          {
            scale: 1.2,
            duration: 1,
          },
          "<"
        );
        tl.from(
          ".about__text",
          {
            autoAlpha: 0,
            duration: 1,
            y: 30,
            ease: "power2.out",
          },
          "<+=0.5"
        );
        return tl;
      },
    });
  }, section);
}
