import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function powers(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".powers__heading");

    const tl = gsap.timeline({
      delay: 0.5,
    });
    let headingSplit = SplitText.create(heading);

    tl.from(
      headingSplit.lines,
      {
        duration: 1,
        stagger: 0.1,
        autoAlpha: 0,
        x: -300,
      },
      0
    );
    tl.from(
      ".powers__year",
      {
        y: 60,
        autoAlpha: 0,
        duration: 1,
      },
      "<+=0.2"
    );
    // tl.from(
    //   ".powers__column",
    //   {
    //     autoAlpha: 0,
    //     duration: 1,
    //     stagger: 0.05,
    //   },
    //   "-=0.4"
    // );
    tl.from(
      ".powers__column-title",
      {
        y: 50,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.05,
      },
      "<+=0.4"
    );
    tl.from(
      ".powers__column .powers__list-item",
      {
        y: 50,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.05,
      },
      "<"
    );
    tl.from(
      ".powers__image-container",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 1,
      },
      "<+=1"
    );
    tl.from(
      ".powers__legend",
      {
        y: 30,
        autoAlpha: 0,
        duration: 1,
      },
      "<+=0.2"
    );
  }, section);
}
