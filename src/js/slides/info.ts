import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function info(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".info__heading");
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
          ".info__card",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 2,
            stagger: 0.2,
            ease: "power2.out",
          },
          "<+=0.6"
        );
        tl.fromTo(
          ".info__arrow",
          {
            autoAlpha: 0,
            scale: 0,
          },
          {
            autoAlpha: 1,
            duration: 0.5,
            scale: 1,
            stagger: 0.1,
          },
          "<+=0.6"
        );

        tl.fromTo(
          ".info__card .info__card-wrapper",
          {
            autoAlpha: 0,
            scale: 0,
          },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.1,
            ease: "power2.out",
          },
          "<+=0.6"
        );
        tl.fromTo(
          ".info__card .info__card-wrapper > *",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          },
          ">-=0.4"
        );
        return tl;
      },
    });
    return () => {
      instance.revert();
    };
  }, section);
}
