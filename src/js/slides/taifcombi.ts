import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function taifcombi(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".taifcombi__heading");
    let headingSplit = SplitText.create(heading);
    const tl = gsap.timeline({
      delay: 0.5,
    });
    tl.from(headingSplit.lines, {
      autoAlpha: 0,
      x: -300,
      duration: 1,
      stagger: 0.1,
    });
    tl.from(".taifcombi__legend", {
      autoAlpha: 0,
      duration: 1,
      y: 30,
    });
    tl.from(
      ".heading",
      {
        autoAlpha: 0,
        duration: 1,
        y: 30,
      },
      "<"
    );
    tl.from(
      ".yellow-block",
      {
        autoAlpha: 0,
        duration: 1,
      },
      "<+=0.4"
    );

    tl.from(".first.fade", {
      autoAlpha: 0,
      duration: 1,
    });

    tl.from(
      ".first.scale",
      {
        autoAlpha: 0,
        duration: 1,
        scale: 0,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(
      ".second.fade",
      {
        autoAlpha: 0,
        duration: 1,
      },
      "+=1"
    );
    tl.from(
      ".second.scale",
      {
        autoAlpha: 0,
        duration: 1,
        scale: 0,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(".third.fade", {
      autoAlpha: 0,
      duration: 1,
    });
    tl.from(
      ".third.scale",
      {
        autoAlpha: 0,
        duration: 1,
        scale: 0,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(
      ".blue-block",
      {
        autoAlpha: 0,
        duration: 1,
      },
      "<"
    );
    tl.from(".fourth.fade", {
      autoAlpha: 0,
      duration: 1,
    });
    tl.from(
      ".fourth.scale",
      {
        autoAlpha: 0,
        duration: 1,
        scale: 0,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(".fifth.fade", {
      autoAlpha: 0,
      duration: 1,
    });
    tl.from(
      ".fifth.scale",
      {
        autoAlpha: 0,
        duration: 1,
        scale: 0,
        transformOrigin: "center",
      },
      "<"
    );

    tl.from(".sixth.fade", {
      autoAlpha: 0,
      duration: 1,
    });
    tl.from(
      ".sixth.scale",
      {
        autoAlpha: 0,
        duration: 1,
        scale: 0,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(".conversion", {
      autoAlpha: 0,
      duration: 1,
      y: 30,
    });
  }, section);
}
