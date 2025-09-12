import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function profile(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".profile__heading");
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
            duration: 1,
            stagger: 0.1,
          }
        );

        tl.fromTo(
          ".profile__legend",
          {
            y: 60,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
          },
          "-=0.4"
        );

        tl.fromTo(
          ".profile__image",
          {
            y: 40,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 2,
            ease: "power2.out",
          },
          "-=0.4"
        );
        tl.fromTo(
          ".profile__bottom-heading",
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            duration: 1,
            y: 0,
          },
          "<+=0.2"
        );
        tl.fromTo(
          ".profile__table",
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            duration: 1,
            y: 0,
          },
          "<+=0.4"
        );
        tl.fromTo(
          ".profile__card",
          {
            scale: 0,
            autoAlpha: 0,
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            stagger: 0.05,
          },
          "<+=0.5"
        );
        tl.fromTo(
          ".profile__card > *",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          },
          ">-=0.2"
        );
        return tl;
      },
    });
    return () => {
      instance.revert();
    };
  }, section);
}
