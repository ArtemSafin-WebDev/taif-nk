import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function scheme(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".scheme__heading");
    SplitText.create(heading, {
      autoSplit: true,
      type: "lines",
      onSplit: (self) => {
        const tl = gsap.timeline({
          delay: 0.5,
        });
        tl.from(self.lines, {
          autoAlpha: 0,
          x: -300,
          duration: 1,
          stagger: 0.1,
        });
        tl.from(".scheme__legend", {
          autoAlpha: 0,
          duration: 1,
          y: 30,
        });
        tl.from(
          ".chart-title",
          {
            autoAlpha: 0,
            duration: 1,
            y: 30,
          },
          "<"
        );
        tl.from(
          ".pie",
          {
            autoAlpha: 0,
            duration: 1,
            y: 30,
          },
          "<"
        );

        tl.from(
          ".first.fade",
          {
            autoAlpha: 0,
            duration: 1,
          },
          "<+=1"
        );

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
        tl.from(
          ".green-bg-1",
          {
            autoAlpha: 0,
            duration: 1,
          },
          "<"
        );
        tl.from(
          ".block-1, .block-2, .block-6",
          {
            autoAlpha: 0,
            duration: 1,
            stagger: 0.05,
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
        tl.from(".seventh.fade", {
          autoAlpha: 0,
          duration: 1,
        });
        tl.from(
          ".seventh.scale",
          {
            autoAlpha: 0,
            duration: 1,
            scale: 0,
            transformOrigin: "center",
          },
          "<"
        );
        tl.from(
          ".orange-bg, .green-bg-2",
          {
            autoAlpha: 0,
            duration: 1,
            stagger: 0.05,
          },
          "<"
        );
        tl.from(
          ".block-7, .block-10, .block-3, .block-4, .block-5",
          {
            autoAlpha: 0,
            duration: 1,
            stagger: 0.05,
          },
          "<"
        );
        tl.from(".eights.fade", {
          autoAlpha: 0,
          duration: 1,
        });
        tl.from(
          ".eights.scale",
          {
            autoAlpha: 0,
            duration: 1,
            scale: 0,
            transformOrigin: "center",
          },
          "<"
        );
        tl.from(".ninth.fade", {
          autoAlpha: 0,
          duration: 1,
        });
        tl.from(
          ".ninth.scale",
          {
            autoAlpha: 0,
            duration: 1,
            scale: 0,
            transformOrigin: "center",
          },
          "<"
        );
        tl.from(".tenth.fade", {
          autoAlpha: 0,
          duration: 1,
        });
        tl.from(
          ".tenth.scale",
          {
            autoAlpha: 0,
            duration: 1,
            scale: 0,
            transformOrigin: "center",
          },
          "<"
        );
        tl.from(".eleventh.fade", {
          autoAlpha: 0,
          duration: 1,
        });
        tl.from(
          ".eleventh.scale",
          {
            autoAlpha: 0,
            duration: 1,
            scale: 0,
            transformOrigin: "center",
          },
          "<"
        );
        tl.from(".twelves.fade", {
          autoAlpha: 0,
          duration: 1,
        });
        tl.from(
          ".twelves.scale",
          {
            autoAlpha: 0,
            duration: 1,
            scale: 0,
            transformOrigin: "center",
          },
          "<"
        );
        tl.from(".thirteens.fade", {
          autoAlpha: 0,
          duration: 1,
        });
        tl.from(
          ".thirteens.scale",
          {
            autoAlpha: 0,
            duration: 1,
            scale: 0,
            transformOrigin: "center",
          },
          "<"
        );
        return tl;
      },
    });
  }, section);
}
