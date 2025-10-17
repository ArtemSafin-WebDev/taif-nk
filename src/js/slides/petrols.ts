import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function petrols(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".petrols__heading");
    const instance = SplitText.create(heading, {
      autoSplit: true,
      type: "lines",
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
          ".petrols__legend",
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
          ".chart-title",
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

        tl.fromTo(
          ".gas-condensat",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          }
        );
        tl.fromTo(
          ".gas-condensat-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "-=0.5"
        );
        tl.fromTo(
          ".gas-condensat-block",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "center",
          },
          "-=0.5"
        );
        tl.addLabel("gas-condensat-block-shown");
        tl.fromTo(
          ".kerosine-fraction-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "gas-condensat-block-shown"
        );
        tl.fromTo(
          ".kerosine-fraction-label",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".diesel-fraction-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "gas-condensat-block-shown"
        );
        tl.fromTo(
          ".diesel-fraction-label",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "center",
          },
          "<"
        );
        tl.addLabel("govgo-appears", "-=0.5");
        tl.fromTo(
          ".govgo",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "govgo-appears-=0.5"
        );
        tl.fromTo(
          ".govgo-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "<+=0.5"
        );
        tl.fromTo(
          ".govgo-label",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".vgo",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "govgo-appears-=0.5"
        );
        tl.fromTo(
          ".vgo-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "<+=0.5"
        );
        tl.fromTo(
          ".vgo-label",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".hydrogen",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "govgo-appears-=0.5"
        );
        tl.fromTo(
          ".hydrogen-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "<+=0.5"
        );
        tl.fromTo(
          ".hydrogen-label",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".cracking-block",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "center",
          },
          "<+=0.2"
        );
        tl.addLabel("cracking-block-shown");
        tl.fromTo(
          ".mazut-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          }
        );
        tl.fromTo(
          ".mazut-label",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "center",
          },
          "<"
        );

        tl.fromTo(
          ".ug-vzp-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "cracking-block-shown"
        );
        tl.fromTo(
          ".ug-vzp-label",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "center",
          },
          "<"
        );

        tl.fromTo(
          ".nafta-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "cracking-block-shown"
        );
        tl.fromTo(
          ".nafta",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "<"
        );
        tl.fromTo(
          ".ppf-bbf-label",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".pbf-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "cracking-block-shown"
        );
        tl.fromTo(
          ".pbf-label",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".lbkk-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "cracking-block-shown+=0.5"
        );
        tl.fromTo(
          ".lbkk-label",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".vok-block",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "center",
          },
          "<+=0.5"
        );
        tl.addLabel("vok-block-shown");
        tl.fromTo(
          ".co-gas-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "cracking-block-shown"
        );
        tl.fromTo(
          ".co-gas-label",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".lgkk-kgpto-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "cracking-block-shown"
        );
        tl.fromTo(
          ".lgkk-kgpto-label",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".dry-gas-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "cracking-block-shown"
        );
        tl.fromTo(
          ".dry-gas-label",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".tgkk-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "cracking-block-shown"
        );
        tl.fromTo(
          ".tgkk",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "<"
        );
        tl.fromTo(
          ".tgkk-kgpto-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "cracking-block-shown"
        );
        tl.fromTo(
          ".tgkk-kgpto-label",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".metanol",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "vok-block-shown-=1"
        );
        tl.fromTo(
          ".metanol-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "<"
        );
        tl.fromTo(
          ".sugi-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "cracking-block-shown"
        );
        tl.fromTo(
          ".tbkk-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "vok-block-shown"
        );
        tl.fromTo(
          ".tbkk-label",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".tame-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "vok-block-shown"
        );
        tl.fromTo(
          ".tame-label",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".obbf-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "vok-block-shown"
        );
        tl.fromTo(
          ".obbf-label",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".sugi",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "<+=0.5"
        );
        tl.fromTo(
          ".compounding-block",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "center",
          },
          "vok-block-shown"
        );
        tl.addLabel("compounding-block-shown");
        tl.fromTo(
          ".mtbe",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          }
        );
        tl.fromTo(
          ".mtbe-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "<+=0.5"
        );
        tl.fromTo(
          ".toluol",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "compounding-block-shown"
        );
        tl.fromTo(
          ".toluol-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "<+=0.5"
        );
        tl.fromTo(
          ".prisadka",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "compounding-block-shown"
        );
        tl.fromTo(
          ".prisadka-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "<+=0.5"
        );

        tl.fromTo(
          ".ai-92-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          ">-=0.5"
        );
        tl.fromTo(
          ".ai-92",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "<"
        );
        tl.fromTo(
          ".ai-92-eko-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "<"
        );
        tl.fromTo(
          ".ai-92-eko",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "<"
        );
        tl.fromTo(
          ".ai-92-2-line",
          {
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "<"
        );
        tl.fromTo(
          ".ai-92-2",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "left center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            transformOrigin: "left center",
          },
          "<"
        );

        tl.timeScale(1);
        return tl;
      },
    });
    return () => {
      instance.revert();
    };
  }, section);
}
