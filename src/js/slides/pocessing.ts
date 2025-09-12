import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function processing(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".processing__heading");

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
          },
          0
        );

        tl.fromTo(
          ".processing__text",
          {
            y: 60,
            autoAlpha: 0,
          },
          { y: 0, duration: 1, autoAlpha: 1, stagger: 0.3 },
          "<+=0.4"
        );

        tl.fromTo(
          ".processing__list-item",
          {
            autoAlpha: 0,
            y: 60,
          },
          {
            autoAlpha: 1,
            duration: 2,
            stagger: 0.1,
            y: 0,
            ease: "power2.out",
          },
          ">-=0.3"
        );

        tl.fromTo(
          ".processing__table",
          {
            y: 60,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
          },
          "<+=0.4"
        );
        return tl;
      },
    });
    return () => {
      instance.revert();
    };
  }, section);
}
