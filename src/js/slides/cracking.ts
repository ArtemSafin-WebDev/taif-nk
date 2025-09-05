import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function cracking(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".cracking__heading");

    const tl = gsap.timeline({
      delay: 0.5,
    });
    let headingSplit = SplitText.create(heading);

    tl.from(headingSplit.lines, {
      autoAlpha: 0,
      x: -300,
      stagger: 0.1,
      duration: 1,
    });
    tl.from(".cracking__equipment", {
      y: 30,
      autoAlpha: 0,
      duration: 1,
      ease: "power2.out",
    });
    tl.from(
      ".cracking__numbers-title",
      {
        autoAlpha: 0,
        duration: 1,
      },
      "-=0.4"
    );
    tl.from(
      ".cracking__numbers-card",
      {
        autoAlpha: 0,
        duration: 1,
        stagger: 0.1,
        y: 30,
      },
      "-=0.5"
    );
    tl.from(
      ".cracking__green-card",
      {
        autoAlpha: 0,
        scale: 0,
        duration: 1,
        ease: "power2.out",
      },
      "<"
    );
    tl.from(
      ".cracking__green-card > *",
      {
        autoAlpha: 0,
        duration: 1,
      },
      "<+=0.5"
    );

    tl.fromTo(
      ".cracking__card",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1.5,
        ease: "power2.out",
      },
      "-=1.1"
    );
    tl.fromTo(
      ".cracking__card-wrapper",
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
    tl.from(
      ".cracking__card-wrapper > *",
      {
        autoAlpha: 0,
        y: 20,
        duration: 1,
        ease: "power2.out",
      },
      "<+=0.6"
    );
  }, section);
}
