import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function light(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".light__heading");
    SplitText.create(heading, {
      type: "lines",
      autoSplit: true,
      onSplit: (self) => {
        const tl = gsap.timeline({
          delay: 0.5,
        });
        tl.from(
          self.lines,
          {
            duration: 1,
            stagger: 0.1,
            autoAlpha: 0,
            x: -300,
          },
          0
        );
        tl.addLabel("cards-reveal");
        tl.from(".light__card:nth-child(1)", {
          y: 100,
          autoAlpha: 0,
          duration: 1.5,
          ease: "power2.out",
        });
        tl.from(
          ".light__card:nth-child(1) .light__chart-labels > *",
          {
            scale: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "power2.out",
          },
          "<+=0.2"
        );
        tl.from(
          ".light__card:nth-child(2)",
          {
            y: 100,
            autoAlpha: 0,
            duration: 1.5,
            ease: "power2.out",
          },
          "cards-reveal+=0.3"
        );
        tl.from(
          ".light__card:nth-child(2) .light__chart-labels > *",
          {
            scale: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "power2.out",
          },
          "<+=0.2"
        );
        return tl;
      },
    });
  }, section);
}
