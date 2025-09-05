import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function production(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".production__title");

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

    tl.from(
      ".production__card",
      {
        autoAlpha: 0,
        duration: 1,
        stagger: 0.1,
        y: 20,
      },
      "<"
    );
    tl.from(
      ".production__card-image-container",
      {
        autoAlpha: 0,
        duration: 1,
        stagger: 0.1,
        scale: 0,
      },
      "<"
    );
    tl.from(
      ".production__card-title",
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
