import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function kgpto(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".kgpto__title");
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
          ".kgpto__bg-image",
          {
            scale: 1.2,
            duration: 1,
          },
          "<"
        );
        return tl;
      },
    });
  }, section);
}
