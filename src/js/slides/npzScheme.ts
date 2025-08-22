import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function npzScheme(section: HTMLElement) {
  return gsap.context(() => {
    const tl = gsap.timeline({
      delay: 0.5,
    });

    tl.from(".label-9", {
      scale: 0,
      autoAlpha: 0,
      duration: 0.4,
      transformOrigin: "center",
    });
    tl.from(".orange-line-2", {
      autoAlpha: 0,
      duration: 0.4,
      transformOrigin: "center",
    });
    tl.from(".block-8", {
      scale: 0,
      autoAlpha: 0,
      duration: 0.4,
      transformOrigin: "center",
    });
    tl.from(
      ".green-line-13",
      {
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );

    tl.from(
      ".small-label-8",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.addLabel("green-lines-appear");
    tl.from(
      ".green-line-1",
      {
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "green-lines-appear"
    );
    tl.from(".label-1", {
      scale: 0,
      autoAlpha: 0,
      duration: 0.4,
      transformOrigin: "center",
    });
    tl.from(
      ".green-line-5",
      {
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "green-lines-appear"
    );
    tl.from(
      ".small-label-1",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(
      ".green-line-15",
      {
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "green-lines-appear+=0.2"
    );
    tl.from(
      ".small-label-11",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(
      ".block-7",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(
      ".green-line-8",
      {
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "green-lines-appear+=0.4"
    );
    tl.from(
      ".small-label-12",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(
      ".block-10",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(
      ".grey-line-4",
      {
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "green-lines-appear+=0.4"
    );
    tl.from(
      ".small-label-9",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(
      ".block-9",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(
      ".green-line-10",
      {
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      ">+=0.2"
    );
    tl.from(
      ".small-label-10",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(".grey-line-5", {
      autoAlpha: 0,
      duration: 0.4,
      transformOrigin: "center",
    });
    tl.from(
      ".small-label-5",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(".grey-line-3", {
      autoAlpha: 0,
      duration: 0.4,
      transformOrigin: "center",
    });
    tl.from(
      ".small-label-6",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(
      ".block-11",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(
      ".block-6",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.addLabel("grey-lines-appear");
    tl.from(".grey-line-1", {
      autoAlpha: 0,
      duration: 0.4,
      transformOrigin: "center",
    });
    tl.from(
      ".label-6",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(
      ".grey-line-2",
      {
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "grey-lines-appear"
    );
    tl.from(
      ".label-7",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.addLabel("nafta-appear");
    tl.from(".green-line-14", {
      autoAlpha: 0,
      duration: 0.4,
      transformOrigin: "center",
    });
    tl.from(
      ".small-label-13",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(
      ".green-line-6",
      {
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "nafta-appear"
    );
    tl.from(
      ".small-label-2",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(".label-8", {
      scale: 0,
      autoAlpha: 0,
      duration: 0.4,
      transformOrigin: "center",
    });
    tl.from(".orange-line-3", {
      autoAlpha: 0,
      duration: 0.4,
      transformOrigin: "center",
    });
    tl.from(
      ".block-5",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(".blue-line-1", {
      autoAlpha: 0,
      duration: 0.4,
      transformOrigin: "center",
    });
    tl.from(
      ".blue-line-2",
      {
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(
      ".blue-line-3",
      {
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(
      ".small-label-7",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(".green-line-12", {
      autoAlpha: 0,
      duration: 0.4,
      transformOrigin: "center",
    });
    tl.from(
      ".small-label-3",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(".green-line-7", {
      autoAlpha: 0,
      duration: 0.4,
      transformOrigin: "center",
    });
    tl.from(
      ".small-label-4",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(".brown-line-1", {
      autoAlpha: 0,
      duration: 0.4,
      transformOrigin: "center",
    });
    tl.from(".brown-line-2", {
      autoAlpha: 0,
      duration: 0.4,
      transformOrigin: "center",
    });
    tl.from(
      ".small-label-14",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(
      ".block-1",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(".orange-line-1", {
      autoAlpha: 0,
      duration: 0.4,
      transformOrigin: "center",
    });
    tl.from(
      ".label-4",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.addLabel("dt-nodes");
    tl.from(".green-line-9", {
      autoAlpha: 0,
      duration: 0.4,
      transformOrigin: "center",
    });
    tl.from(
      ".green-line-19",
      {
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(
      ".block-2",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(
      ".block-4",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<+=0.2"
    );
    tl.from(
      ".green-line-16",
      {
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "dt-nodes"
    );
    tl.from(
      ".block-3",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(
      ".green-line-11",
      {
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "dt-nodes"
    );
    tl.addLabel("before-end");
    tl.from(".green-line-2", {
      autoAlpha: 0,
      duration: 0.4,
      transformOrigin: "center",
    });
    tl.from(
      ".label-2",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(
      ".green-line-3",
      {
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "before-end"
    );
    tl.from(
      ".label-3",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.from(
      ".green-line-4",
      {
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "before-end"
    );
    tl.from(
      ".label-5",
      {
        scale: 0,
        autoAlpha: 0,
        duration: 0.4,
        transformOrigin: "center",
      },
      "<"
    );
    tl.timeScale(0.6);
  }, section);
}
