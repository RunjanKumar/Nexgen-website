// 

// ControlProduct.jsx
import ProductPage from "./ProductPage";
import bgVideo from "../assets/products/controls/products-controls-hero2-desktop.mp4";
import lena from "../assets/products/controls/lena@2x.png";
import ellie from "../assets/products/controls/ellie@2x.png";
import lisa from "../assets/products/controls/lisa@2x.png";
import fibonacci from "../assets/products/controls/fibonacci@2x.png";
import chopin from "../assets/products/controls/chopin@2x.png";
import sentido from "../assets/products/controls/sentido@2x.png";
import miro from "../assets/products/controls/miro@2x.png";
import deseo from "../assets/products/controls/deseo@2x.png";
import relay from "../assets/6M41P.18.png";
import relay2 from "../assets/6M41P1.16.png";

const productList = [
  {
    title: "Lena",
    description:
      "After Lisa and Ellie, big sister Lena completes the range as flagship touch display for Basalte Home!",
    img: relay,
  },
  {
    title: "Ellie",
    description:
      "Ellie, our elegant touch display for Basalte Home designed to intuitively control your home.",
    img: relay2,
  },
  {
    title: "Lisa",
    description:
      "Refined and minimalist, Lisa is the most beautiful touch display for Basalte Home in the small form factor of a keypad.",
    img: lisa,
  },
  {
    title: "Fibonacci",
    description:
      "Inspired by Fibonacci’s golden ratio, our switch brings natural beauty to the heart of your home.",
    img: relay,
  },
  {
    title: "Sentido",
    description:
      "Sentido is a multifunctional design switch to control lighting and even music at the slightest touch.",
    img: sentido,
  },
  {
    title: "Chopin",
    description:
      "Controlling Chopin feels a bit like playing the piano. Push the levers up or down to control everything at home.",
    img: chopin,
  },
  {
    title: "Miro",
    description:
      "Miro is the only remote you’ll ever need for your Basalte Home.",
    img: miro,
  },
  {
    title: "Deseo",
    description:
      "Deseo is an intelligent touch-sensitive thermostat to intuitively control your room climate and more.",
    img: deseo,
  },
];

const ControlProduct = () => {
  return (
    <ProductPage
      videoSrc={bgVideo}
      heroTitle="Controls."
      heroIntro="Basalte helps you intuitively control your most common functions in a simple and consistent way."
      heroDesc="They are precision-machined from high-quality finishes and hand-assembled in Belgium. They blend in with your interior design thanks to their uniform design language."
      products={productList}    
    />
  );
};

export default ControlProduct;
