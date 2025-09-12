import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function generalScheme(section: HTMLElement) {
  return gsap.context(() => {
    const tl = gsap.timeline({
      delay: 0.5,
    });
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
    tl.from(".second.fade", {
      autoAlpha: 0,
      duration: 1,
    });
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
    tl.from(
      ".legend-group",
      {
        autoAlpha: 0,
        duration: 1,
        y: 30,
      },
      0.5
    );
  }, section);
}
