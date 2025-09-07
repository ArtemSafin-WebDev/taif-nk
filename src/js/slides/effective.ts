import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function effective(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".effective__heading");

    const tl = gsap.timeline();
    let headingSplit = SplitText.create(heading);
    tl.from(headingSplit.lines, {
      autoAlpha: 0,
      x: -300,
      stagger: 0.1,
      duration: 1,
    });
    tl.from(
      ".effective__legend",
      {
        y: 30,
        autoAlpha: 0,
        duration: 1,
      },
      "<+=0.4"
    );
    tl.from(
      ".effective__chart-title",
      {
        autoAlpha: 0,
        duration: 1,
        y: 30,
      },
      "-=0.4"
    );
    tl.from(
      ".effective__chart-table-rows",
      {
        autoAlpha: 0,
        duration: 1,
      },
      "<+=0.5"
    );
    tl.from(
      ".effective__chart-table-column-bar-inner",
      {
        height: 0,
        duration: 1,
        autoAlpha: 0,
        stagger: 0.05,
      },
      "<"
    );
    tl.from(
      ".effective__chart-table-column-percentages-wrapper, .effective__chart-table-remark",
      {
        autoAlpha: 0,
        duration: 1,
        stagger: 0.05,
        y: 30,
      },
      "<"
    );
    tl.from(
      ".effective__chart-table-column-title, .effective__chart-table-column-remark",
      {
        autoAlpha: 0,
        duration: 1,
      },
      "<+=0.5"
    );
    // tl.from(
    //   ".effective__chart-table-column",
    //   {
    //     autoAlpha: 0,
    //     duration: 1,
    //     ease: "power2.out",
    //     stagger: 1,
    //     y: 60,
    //   },
    //   "<+=0.5"
    // );
  }, section);
}
