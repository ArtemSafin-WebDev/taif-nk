import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function taifcombi(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".taifcombi__heading");
    const instance = SplitText.create(heading, {
      type: "lines",
      autoSplit: true,
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
          ".taifcombi__legend",
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
          ".heading",
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
        // tl.fromTo(
        //   ".yellow-block",
        //   {
        //     autoAlpha: 0,
        //   },
        //   {
        //     autoAlpha: 1,
        //     duration: 1,
        //   },
        //   "<+=0.4"
        // );

        tl.fromTo(
          ".first.fade:not(.block)",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          }
        );

        tl.fromTo(
          ".first.scale:not(.block)",
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
          ".first.fade.block",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          },
          ">-=0.5"
        );

        tl.fromTo(
          ".first.scale.block",
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
          ".second.fade:not(.block)",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          }
        );
        tl.fromTo(
          ".second.scale:not(.block)",
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
          ".second.fade.block",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          },
          ">-=0.5"
        );
        tl.fromTo(
          ".second.scale.block",
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
          ".third.fade:not(.block)",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          }
        );
        tl.fromTo(
          ".third.scale:not(.block)",
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
          ".third.fade.block",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          },
          ">-=0.5"
        );
        tl.fromTo(
          ".third.scale.block",
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
          ".blue-block",
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
          ".fourth.fade:not(.block)",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          }
        );
        tl.fromTo(
          ".fourth.scale:not(.block)",
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
          ".fourth.fade.block",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          },
          ">-=0.5"
        );
        tl.fromTo(
          ".fourth.scale.block",
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
          ".fifth.fade:not(.block)",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          }
        );
        tl.fromTo(
          ".fifth.scale:not(.block)",
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
          ".fifth.fade.block",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          },
          ">-=0.5"
        );
        tl.fromTo(
          ".fifth.scale.block",
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
          ".sixth.fade:not(.block)",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          }
        );
        tl.fromTo(
          ".sixth.scale:not(.block)",
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
          ".sixth.fade.block",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          },
          ">-=0.5"
        );
        tl.fromTo(
          ".sixth.scale.block",
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
          ".conversion",
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
        tl.timeScale(0.8);
        return tl;
      },
    });
    return () => {
      instance.revert();
    };
  }, section);
}
