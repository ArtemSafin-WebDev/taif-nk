import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function scheme(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".scheme__heading");
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
          ".scheme__legend",
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
          ".pie",
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
          },
          "<+=1"
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
          ".green-bg-1",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          },
          "<"
        );
        tl.fromTo(
          ".block-1, .block-2, .block-6",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
            stagger: 0.05,
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
          ".seventh.fade",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          }
        );
        tl.fromTo(
          ".seventh.scale",
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
          ".orange-bg, .green-bg-2",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
            stagger: 0.05,
          },
          "<"
        );
        tl.fromTo(
          ".block-7, .block-10, .block-3, .block-4, .block-5",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
            stagger: 0.05,
          },
          "<"
        );
        tl.fromTo(
          ".eights.fade",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          }
        );
        tl.fromTo(
          ".eights.scale",
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
          ".ninth.fade",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          }
        );
        tl.fromTo(
          ".ninth.scale",
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
          ".tenth.fade",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          }
        );
        tl.fromTo(
          ".tenth.scale",
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
          ".eleventh.fade",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          }
        );
        tl.fromTo(
          ".eleventh.scale",
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
          ".twelves.fade",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          }
        );
        tl.fromTo(
          ".twelves.scale",
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
          ".thirteens.fade",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          }
        );
        tl.fromTo(
          ".thirteens.scale",
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
        tl.timeScale(1.4);
        return tl;
      },
    });
    return () => {
      instance.revert();
    };
  }, section);
}
