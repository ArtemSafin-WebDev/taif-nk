import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function npzScheme(section: HTMLElement) {
  return gsap.context(() => {
    const heading = section.querySelector(".npz-scheme__heading");
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
          ".npz-scheme__legend",
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
          ".npz-scheme__chart-title",
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
          ".label-9",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          }
        );
        tl.fromTo(
          ".orange-line-2",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          }
        );
        tl.fromTo(
          ".block-8",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          }
        );
        tl.fromTo(
          ".label-8",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          }
        );
        tl.fromTo(
          ".orange-line-3",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          }
        );
        tl.fromTo(
          ".block-5",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".green-line-13",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );

        tl.fromTo(
          ".small-label-8",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.addLabel("green-lines-appear");

        tl.fromTo(
          ".green-line-1",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "green-lines-appear"
        );
        tl.fromTo(
          ".label-1",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          }
        );
        tl.fromTo(
          ".green-line-5",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "green-lines-appear"
        );
        tl.fromTo(
          ".small-label-1",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );

        tl.fromTo(
          ".green-line-15",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "green-lines-appear+=0.2"
        );
        tl.fromTo(
          ".small-label-11",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".block-7",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".blue-line-1",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          }
        );
        tl.fromTo(
          ".blue-line-2",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".blue-line-3",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".small-label-7",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".green-line-8",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "green-lines-appear+=0.4"
        );
        tl.fromTo(
          ".small-label-12",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".block-10",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".grey-line-4",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "green-lines-appear+=0.4"
        );
        tl.fromTo(
          ".small-label-9",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".block-9",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".green-line-10",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          ">+=0.2"
        );
        tl.fromTo(
          ".small-label-10",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".grey-line-5",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          }
        );
        tl.fromTo(
          ".small-label-5",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".grey-line-3",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          }
        );
        tl.fromTo(
          ".small-label-6",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".block-11",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".block-6",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );

        tl.addLabel("nafta-appear");
        tl.fromTo(
          ".green-line-14",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          }
        );
        tl.fromTo(
          ".small-label-13",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".green-line-6",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "nafta-appear"
        );
        tl.fromTo(
          ".small-label-2",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );

        tl.fromTo(
          ".green-line-12",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          }
        );
        tl.fromTo(
          ".small-label-3",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".green-line-7",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          }
        );
        tl.fromTo(
          ".small-label-4",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".brown-line-1",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          }
        );
        tl.fromTo(
          ".brown-line-2",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          }
        );
        tl.fromTo(
          ".small-label-14",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".block-1",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".orange-line-1",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          }
        );
        tl.fromTo(
          ".label-4",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.addLabel("dt-nodes");
        tl.fromTo(
          ".green-line-9",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          }
        );
        tl.fromTo(
          ".green-line-19",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".block-2",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".block-4",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<+=0.2"
        );
        tl.fromTo(
          ".green-line-16",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "dt-nodes"
        );

        tl.fromTo(
          ".block-3",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );

        tl.fromTo(
          ".grey-line-1",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          }
        );
        tl.fromTo(
          ".label-6",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".grey-line-2",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "-=0.8"
        );
        tl.fromTo(
          ".label-7",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".green-line-11",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "dt-nodes"
        );
        tl.addLabel("before-end");
        tl.fromTo(
          ".green-line-2",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          }
        );
        tl.fromTo(
          ".label-2",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".green-line-3",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "before-end"
        );
        tl.fromTo(
          ".label-3",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.fromTo(
          ".green-line-4",
          {
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "before-end"
        );
        tl.fromTo(
          ".label-5",
          {
            scale: 0,
            autoAlpha: 0,
            transformOrigin: "center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            transformOrigin: "center",
          },
          "<"
        );
        tl.timeScale(0.8);
        return tl;
      },
    });
    return () => {
      instance.revert();
    };
  }, section);
}
