import gsap from "gsap";
import { SplitText, DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(SplitText, DrawSVGPlugin);

export default function products(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".products__heading");

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
            stagger: 0.1,
            duration: 1,
          }
        );

        tl.fromTo(
          ".border, .year",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 0.5,
          }
        );
        tl.addLabel("pie-start");
        tl.fromTo(
          ".green-pie",
          {
            drawSVG: "100% 100%",
          },
          {
            duration: 0.5,
            drawSVG: "0% 100%",
            ease: "none",
          }
        );

        tl.fromTo(
          ".brown-pie",
          {
            drawSVG: "100% 100%",
          },
          {
            duration: 0.4,
            drawSVG: "0% 100%",
            ease: "none",
          },
          ">"
        );
        tl.addLabel("brown-end");
        tl.fromTo(
          ".products__card:nth-child(1) .grey-pie",
          {
            drawSVG: "100% 100%",
          },
          {
            duration: 0.3,
            drawSVG: "0% 100%",
            ease: "none",
          },
          "pie-start"
        );
        tl.fromTo(
          ".products__card:nth-child(2) .grey-pie",
          {
            drawSVG: "0% 0%",
          },
          {
            duration: 0.1,
            drawSVG: "0% 100%",
            ease: "none",
          },
          "pie-start"
        );
        tl.addLabel("grey-end");
        tl.fromTo(
          ".yellow-pie",
          {
            drawSVG: "0% 0%",
          },
          {
            duration: 0.1,
            drawSVG: "0% 100%",
            ease: "none",
          },
          ">"
        );
        tl.addLabel("yellow-end");
        tl.fromTo(
          ".orange-pie",
          {
            drawSVG: "100% 100%",
          },
          {
            duration: 0.2,
            drawSVG: "0% 100%",
            ease: "none",
          },
          ">"
        );
        tl.addLabel("orange-end");
        tl.fromTo(
          ".green-label",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          },
          "pie-start+=0.2"
        );
        tl.fromTo(
          ".grey-label",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          },
          "grey-end-=0.3"
        );
        tl.fromTo(
          ".yellow-label",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          },
          "yellow-end-=0.3"
        );
        tl.fromTo(
          ".orange-label",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          },
          "orange-end-=0.3"
        );
        tl.fromTo(
          ".brown-label",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          },
          "brown-end-=0.3"
        );
        return tl;
      },
    });

    return () => {
      instance.revert();
    };
  }, section);
}
