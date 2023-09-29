import Loadable from "@loadable/component";

// Load the TinySlider component dynamically using Loadable
const TinySlider = Loadable(() => import("tiny-slider-react"));

export default TinySlider;

// Configuration settings for the TinySlider component
export const settings = {
  // Enable mouse drag for navigation
  mouseDrag: true,
  // Disable autoplay
  autoplay: false,
  // Enable arrow key navigation
  arrowKeys: true,
  // Hide default controls
  controls: false,
  // Use thumbnail navigation
  navAsThumbnails: true,
  // Show navigation dots
  nav: true,
  // Position the navigation dots at the bottom
  navPosition: "bottom",
  // Enable auto width adjustment for slides
  autoWidth: true,
  // Responsive settings based on screen width
  responsive: {
    640: {
      gutter: 20,
      items: 2,
    },
    700: {
      gutter: 30,
    },
    900: {
      items: 3,
      gutter: 40,
    },
  },
};
