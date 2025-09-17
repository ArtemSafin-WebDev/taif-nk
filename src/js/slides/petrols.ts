import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function petrols(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".petrols__heading");
    const instance = SplitText.create(heading, {
      autoSplit: true,
      type: "lines",
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
            autoAlpha: 1,
            x: 0,
            duration: 1,
            stagger: 0.1,
          }
        );
        tl.fromTo(
          ".petrols__legend",
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            duration: 1,
            y: 0,
          }
        );
        tl.fromTo(
          ".chart-title",
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            duration: 1,
            y: 0,
          },
          "<"
        );

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
        tl.timeScale(1.2);
        return tl;
      },
    });
    return () => {
      instance.revert();
    };
  }, section);
}
