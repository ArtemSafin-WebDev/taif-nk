import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function position(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".position__heading");
    const subtitle = section.querySelector(".position__subtitle");
    let yearSplit = SplitText.create(subtitle);
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
          }
        );

        tl.from(
          ".position__text",
          {
            y: 60,
            autoAlpha: 0,
            duration: 1,
          },
          "<+=0.4"
        );
        tl.fromTo(
          yearSplit.chars,
          {
            autoAlpha: 0,
          },
          {
            duration: 0.6,
            autoAlpha: 1,
            stagger: 0.05,
            ease: "power2.out",
          },
          "<+=0.8"
        );

        tl.from(
          ".position__planet",
          {
            y: 80,
            duration: 1,
            autoAlpha: 0,
            ease: "power2.out",
          },
          "<-=0.3"
        );

        tl.from(
          ".position__circle-bar-inner",
          {
            autoAlpha: 0,
            height: 0,
            duration: 1,
            stagger: 0,
          },
          "<+=0.3"
        );
        tl.from(
          ".position__circle-bar-title",
          {
            autoAlpha: 0,
            duration: 1,
            stagger: 0,
          },
          ">-=0.3"
        );
        tl.from(
          ".position__circle",
          {
            autoAlpha: 0,
            duration: 1,
            scale: 0,
            ease: "power2.out",
          },
          "<-=0.1"
        );

        tl.fromTo(
          ".position__card",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1.5,
            ease: "power2.out",
          },
          "<"
        );
        tl.fromTo(
          ".position__card-wrapper",
          {
            autoAlpha: 0,
            scale: 0,
          },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          },
          "<+=0.2"
        );
        tl.fromTo(
          ".position__card-heading",
          {
            autoAlpha: 0,
            y: 20,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "<+=0.6"
        );

        tl.from(
          ".position__card-text",
          {
            autoAlpha: 0,
            y: 10,
            duration: 0.5,
            ease: "power2.out",
          },

          "<+=0.2"
        );
        tl.fromTo(
          ".position__card-amount",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "<+=0.2"
        );
        return tl;
      },
    });
  }, section);
}
