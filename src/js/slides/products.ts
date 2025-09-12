import gsap from "gsap";
import { SplitText, DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(SplitText, DrawSVGPlugin);

export default function products(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".products__heading");

    let headingSplit = SplitText.create(heading, {
      type: "lines",
      autoSplit: true,
      onSplit: (self) => {
        const tl = gsap.timeline({
          delay: 0.5,
        });
        tl.from(headingSplit.lines, {
          autoAlpha: 0,
          x: -300,
          stagger: 0.1,
          duration: 1,
        });

        tl.from(".border, .year", {
          autoAlpha: 0,
          duration: 0.5,
        });
        tl.addLabel("pie-start");
        tl.from(".green-pie", {
          duration: 0.5,
          drawSVG: "100% 100%",
          ease: "none",
        });

        tl.from(
          ".brown-pie",
          {
            duration: 0.4,
            drawSVG: "100% 100%",
            ease: "none",
          },
          ">"
        );
        tl.addLabel("brown-end");
        tl.from(
          ".products__card:nth-child(1) .grey-pie",
          {
            duration: 0.3,
            drawSVG: "100% 100%",
            ease: "none",
          },
          "pie-start"
        );
        tl.from(
          ".products__card:nth-child(2) .grey-pie",
          {
            duration: 0.1,
            drawSVG: "0% 0%",
            ease: "none",
          },
          "pie-start"
        );
        tl.addLabel("grey-end");
        tl.from(
          ".yellow-pie",
          {
            duration: 0.1,
            drawSVG: "0% 0%",
            ease: "none",
          },
          ">"
        );
        tl.addLabel("yellow-end");
        tl.from(
          ".orange-pie",
          {
            duration: 0.2,
            drawSVG: "100% 100%",
            ease: "none",
          },
          ">"
        );
        tl.addLabel("orange-end");
        tl.from(
          ".green-label",
          {
            autoAlpha: 0,
            duration: 1,
          },
          "pie-start+=0.2"
        );
        tl.from(
          ".grey-label",
          {
            autoAlpha: 0,
            duration: 1,
          },
          "grey-end-=0.3"
        );
        tl.from(
          ".yellow-label",
          {
            autoAlpha: 0,
            duration: 1,
          },
          "yellow-end-=0.3"
        );
        tl.from(
          ".orange-label",
          {
            autoAlpha: 0,
            duration: 1,
          },
          "orange-end-=0.3"
        );
        tl.from(
          ".brown-label",
          {
            autoAlpha: 0,
            duration: 1,
          },
          "brown-end-=0.3"
        );
        return tl;
      },
    });
  }, section);
}
