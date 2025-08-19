import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function investments(section: HTMLElement) {
  const heading = section.querySelector(".investments__heading");

  const tl = gsap.timeline();

  tl.from(heading, {
    autoAlpha: 0,
    duration: 1,
    y: 100,
  });
}
