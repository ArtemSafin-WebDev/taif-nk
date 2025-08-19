import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function investments(section: HTMLElement) {
  const heading = section.querySelector(".investments__heading");
  const bgImage = section.querySelector(
    ".investments__bg-image"
  ) as HTMLImageElement;
  const bgContainer = section.querySelector(".investments__bg") as HTMLElement;
  const counter = section.querySelector(".investments__count");
  const targetValue = parseInt(counter?.textContent?.trim() || "0", 10);
  const counterWrapper = section.querySelector(".investments__wrapper");

  const tl = gsap.timeline();
  let headingSplit = SplitText.create(heading);
  tl.fromTo(
    bgImage,
    {
      y: 0,
    },
    {
      y: () => {
        const containerHeight = bgContainer.offsetHeight;
        const imageHeight = bgImage.offsetHeight;
        const heightDifference = imageHeight - containerHeight;
        if (imageHeight <= containerHeight) return 0;
        return heightDifference;
      },
      duration: 2,
      ease: "power1.out",
    }
  );

  tl.fromTo(
    headingSplit.chars,
    {
      autoAlpha: 0,
    },
    {
      duration: 0.4,
      autoAlpha: 1,
      stagger: 0.05,
    },
    "-=1"
  );

  // Counter animation from 0 to target value

  tl.fromTo(
    counter,
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      duration: 1,
    },
    "<+=1"
  );

  tl.fromTo(
    counter,
    {
      innerText: 0,
    },
    {
      innerText: targetValue,
      duration: 2,
      ease: "none",
      snap: { innerText: 1 }, // Snap to whole numbers
    },
    "<" // Start counter animation 0.5 seconds before heading animation ends
  );

  tl.fromTo(
    counterWrapper,
    {
      x: -30,
      autoAlpha: 0,
    },
    {
      x: 0,
      autoAlpha: 1,
      duration: 0.7,
      ease: "power2.out",
    },
    "+=0.1"
  );

  return tl;
}
