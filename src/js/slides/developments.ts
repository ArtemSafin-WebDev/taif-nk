import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function developments(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".developments__title");

    const tl = gsap.timeline({
      delay: 0.5,
    });
    let headingSplit = SplitText.create(heading);

    tl.fromTo(
      headingSplit.lines,
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
      ".developments__count-number",
      {
        autoAlpha: 0,
      },
      {
        duration: 1,
        autoAlpha: 1,
      },
      "<+=0.4"
    );
    tl.from(
      ".developments__count-content",
      {
        autoAlpha: 0,
        duration: 1,
        y: 40,
      },
      "<"
    );
    tl.from(
      ".developments__card",
      {
        autoAlpha: 0,
        duration: 1,
        stagger: 0.1,
        y: 20,
      },
      "<"
    );
  }, section);
}
