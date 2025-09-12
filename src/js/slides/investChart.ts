import gsap from "gsap";
import { SplitText, DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(SplitText, DrawSVGPlugin);

export default function investChart(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".invest-chart__heading");
    const year = section.querySelector(".invest-chart__subtitle");
    let yearSplit = SplitText.create(year);
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
          yearSplit.chars,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            stagger: 0.05,
            ease: "power2.out",
            duration: 0.6,
          },

          "<+=0.8"
        );
        tl.fromTo(
          ".invest-chart__amount-wrapper",
          {
            y: 60,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            stagger: 0.3,
          },
          "<-=0.4"
        );
        tl.fromTo(
          ".scales, .legend-item",
          {
            y: 50,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
          }
        );
        tl.fromTo(
          ".chart-bars",
          {
            scaleY: 0,
            transformOrigin: "center bottom",
          },
          {
            scaleY: 1,
            transformOrigin: "center bottom",
            duration: 1,
          },
          "<+=0.6"
        );
        tl.fromTo(
          ".chart-year",
          {
            y: 50,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
          },
          "<"
        );

        tl.fromTo(
          ".chart-line",
          {
            drawSVG: "0% 0%",
          },
          {
            duration: 1,
            drawSVG: "0% 100%",
            ease: "none",
          }
        );
        tl.fromTo(
          ".chart-dot",
          {
            scale: 0,
            transformOrigin: "center",
          },
          {
            duration: 0.1,
            stagger: 0.04,
            scale: 1,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".chart-label",
          {
            autoAlpha: 0,
            y: 10,
          },
          {
            autoAlpha: 1,
            duration: 1,
            y: 0,
            stagger: 0.05,
          },
          "<-=0.2"
        );
        tl.fromTo(
          ".bottom-table",
          {
            autoAlpha: 0,
            y: 40,
          },
          {
            autoAlpha: 1,
            duration: 1,
            y: 0,
          },
          "-=2.5"
        );
        tl.fromTo(
          ".right-bottom-part",
          {
            autoAlpha: 0,
            y: 40,
          },
          {
            autoAlpha: 1,
            duration: 1,
            y: 0,
          },
          "<+=0.5"
        );
        return tl;
      },
    });
    return () => {
      instance.revert();
    };
  }, section);
}
