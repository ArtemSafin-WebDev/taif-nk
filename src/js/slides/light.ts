import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function light(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".light__heading");
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
            duration: 1,
            stagger: 0.1,
            autoAlpha: 1,
            x: 0,
          },
          0
        );
        tl.addLabel("cards-reveal");
        tl.fromTo(
          ".light__card:nth-child(1)",
          {
            y: 100,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.5,
            ease: "power2.out",
          }
        );
        tl.fromTo(
          ".light__card:nth-child(1) .light__chart-labels > *",
          {
            scale: 0,
          },
          {
            scale: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: "power2.out",
          },
          "<+=0.2"
        );
        tl.fromTo(
          ".light__card:nth-child(2)",
          {
            y: 100,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.5,
            ease: "power2.out",
          },
          "cards-reveal+=0.3"
        );
        tl.fromTo(
          ".light__card:nth-child(2) .light__chart-labels > *",
          {
            scale: 0,
          },
          {
            scale: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: "power2.out",
          },
          "<+=0.2"
        );
        return tl;
      },
    });

    return () => {
      instance.revert();
    };
  }, section);
}
