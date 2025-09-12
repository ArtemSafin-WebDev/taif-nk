import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function info(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".info__heading");
    SplitText.create(heading, {
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

        tl.from(
          ".info__card",
          {
            autoAlpha: 0,
            duration: 2,
            stagger: 0.2,
            ease: "power2.out",
          },
          "<+=0.6"
        );
        tl.from(
          ".info__arrow",
          {
            autoAlpha: 0,
            duration: 0.5,
            scale: 0,
            stagger: 0.1,
          },
          "<+=0.6"
        );

        tl.from(
          ".info__card .info__card-wrapper",
          {
            autoAlpha: 0,
            scale: 0,
            duration: 0.9,
            stagger: 0.1,
            ease: "power2.out",
          },
          "<+=0.6"
        );
        tl.from(
          ".info__card .info__card-wrapper > *",
          {
            autoAlpha: 0,
            duration: 1,
          },
          ">-=0.4"
        );
        return tl;
      },
    });
  }, section);
}
