import gsap from "gsap";
import { SplitText, DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(SplitText, DrawSVGPlugin);

export default function investChart(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".invest-chart__heading");
    const year = section.querySelector(".invest-chart__subtitle");
    let headingSplit = SplitText.create(heading);
    let yearSplit = SplitText.create(year);

    const tl = gsap.timeline({
      delay: 0.5,
    });
    tl.from(headingSplit.lines, {
      autoAlpha: 0,
      x: -300,
      stagger: 0.1,
      duration: 1,
    });
    tl.from(
      yearSplit.chars,
      {
        autoAlpha: 0,
        stagger: 0.05,
        ease: "power2.out",
        duration: 0.6,
      },

      "<+=0.8"
    );
    tl.from(
      ".invest-chart__amount-wrapper",
      {
        y: 60,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.3,
      },
      "<-=0.4"
    );
    tl.from(".scales, .legend-item", {
      y: 50,
      autoAlpha: 0,
      duration: 1,
    });
    tl.from(
      ".chart-bars",
      {
        scaleY: 0,
        transformOrigin: "center bottom",
        duration: 1,
      },
      "<+=0.6"
    );
    tl.from(
      ".chart-year",
      {
        y: 50,
        autoAlpha: 0,
        duration: 1,
      },
      "<"
    );

    tl.from(".chart-line", {
      duration: 1,
      drawSVG: "0% 0%",
      ease: "none",
    });
    tl.from(
      ".chart-dot",
      {
        duration: 0.1,
        stagger: 0.04,
        scale: 0,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(
      ".chart-label",
      {
        autoAlpha: 0,
        duration: 1,
        y: 10,
        stagger: 0.05,
      },
      "<-=0.2"
    );
    tl.from(
      ".bottom-table",
      {
        autoAlpha: 0,
        duration: 1,
        y: 40,
      },
      "-=2.5"
    );
    tl.from(
      ".right-bottom-part",
      {
        autoAlpha: 0,
        duration: 1,
        y: 40,
      },
      "<+=0.5"
    );
  }, section);
}
