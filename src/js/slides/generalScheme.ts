import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function generalScheme(section: HTMLElement) {
  return gsap.context(() => {
    const tl = gsap.timeline({
      delay: 0.5,
    });
    tl.fromTo(
      ".first.fade",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1,
      }
    );

    tl.fromTo(
      ".first.scale",
      {
        autoAlpha: 0,
        scale: 0,
        transformOrigin: "center",
      },
      {
        autoAlpha: 1,
        duration: 1,
        scale: 1,
        transformOrigin: "center",
      },
      "<"
    );
    tl.fromTo(
      ".second.fade",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1,
      }
    );
    tl.fromTo(
      ".second.scale",
      {
        autoAlpha: 0,
        scale: 0,
        transformOrigin: "center",
      },
      {
        autoAlpha: 1,
        duration: 1,
        scale: 1,
        transformOrigin: "center",
      },
      "<"
    );
    tl.fromTo(
      ".third.fade",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1,
      }
    );
    tl.fromTo(
      ".third.scale",
      {
        autoAlpha: 0,
        scale: 0,
        transformOrigin: "center",
      },
      {
        autoAlpha: 1,
        duration: 1,
        scale: 1,
        transformOrigin: "center",
      },
      "<"
    );
    tl.fromTo(
      ".fourth.fade",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1,
      }
    );
    tl.fromTo(
      ".fourth.scale",
      {
        autoAlpha: 0,
        scale: 0,
        transformOrigin: "center",
      },
      {
        autoAlpha: 1,
        duration: 1,
        scale: 1,
        transformOrigin: "center",
      },
      "<"
    );
    tl.fromTo(
      ".fifth.fade",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1,
      }
    );
    tl.fromTo(
      ".fifth.scale",
      {
        autoAlpha: 0,
        scale: 0,
        transformOrigin: "center",
      },
      {
        autoAlpha: 1,
        duration: 1,
        scale: 1,
        transformOrigin: "center",
      },
      "<"
    );

    tl.fromTo(
      ".sixth.fade",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1,
      }
    );
    tl.fromTo(
      ".sixth.scale",
      {
        autoAlpha: 0,
        scale: 0,
        transformOrigin: "center",
      },
      {
        autoAlpha: 1,
        duration: 1,
        scale: 1,
        transformOrigin: "center",
      },
      "<"
    );
    tl.fromTo(
      ".legend-group",
      {
        autoAlpha: 0,
        y: 30,
      },
      {
        autoAlpha: 1,
        duration: 1,
        y: 0,
      },
      0.5
    );
    tl.timeScale(0.8);
  }, section);
}
