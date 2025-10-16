import autoplay from "./pages-data/autoplay";
import home from "./pages-data/home";
import kgpto from "./pages-data/kgpto";
import kgptoAutoplay from "./pages-data/kgpto-autoplay";

const pagesConfig = {
  ...home,
  ...autoplay,
  ...kgpto,
  ...kgptoAutoplay,
};

export default pagesConfig;
