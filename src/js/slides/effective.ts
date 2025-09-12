import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function effective(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".effective__heading");
    const instance = SplitText.create(heading, {
      type: "lines",
      autoSplit: true,
      onSplit: (self) => {
        const tl = gsap.timeline();
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
          ".effective__legend",
          {
            y: 30,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
          },
          "<+=0.4"
        );
        tl.fromTo(
          ".effective__chart-title",
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            duration: 1,
            y: 0,
          },
          "-=0.4"
        );
        tl.fromTo(
          ".effective__chart-table-rows",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          },
          "<+=0.5"
        );
        tl.fromTo(
          ".effective__chart-table-column-bar-inner",
          {
            height: 0,
            autoAlpha: 0,
          },
          {
            height: "100%",
            duration: 1,
            autoAlpha: 1,
            stagger: 0.05,
          },
          "<"
        );
        tl.fromTo(
          ".effective__chart-table-column-percentages-wrapper, .effective__chart-table-remark",
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            duration: 1,
            stagger: 0.05,
            y: 0,
          },
          "<"
        );
        tl.fromTo(
          ".effective__chart-table-column-title, .effective__chart-table-column-remark",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
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
