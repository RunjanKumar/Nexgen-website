import ProductPage from "./ProductPage";
import bgVideo from "../assets/products/music/products-music-hero-desktop.mp4";
import aalto from "../assets/products/music/aalto@2x.png";
import asano from "../assets/products/music/asano@2x.png";
import avComponents from "../assets/products/music/av-components@2x.png";
import cielo from "../assets/products/music/cielo@2x.png";
import coreServers from "../assets/products/music/core-servers@2x.png";
import miro from "../assets/products/music/miro@2x.png";
import rondo from "../assets/products/music/rondo@2x.png";
import plano from "../assets/products/music/plano@2x.png";

const productList = [
  {
    title: "aalto",
    description:
      "Aalto is a unique collection of high-performance speakers with many finish and mounting options: a true design statement.",
    img: aalto,
  },
  {
    title: "Plano",
    description:
      "Plano is a unique collection of high-performance, in-wall speakers for the world’s most exclusive homes.",
    img: plano,
  },
  {
    title: "rondo",
    description:
      "Rondo is a playful collection of wall-mountable, passive design speakers.",
    img: rondo,
  },
  {
    title: "cielo",
    description:
      " Cielo speakers discretely blend into the ceiling to bring high-quality audio to any room.",
    img: cielo,
  },
  {
    title: "asano",
    description:
      "Basalte amplifiers boast incredible performance to fill any room with crystal clear audio.",
    img: asano,
  },
  {
    title: "core servers",
    description: "Our Core servers are the beating heart of your Basalte Home.",
    img: coreServers,
  },
  {
    title: "miro",
    description: "Our Core servers are the beating heart of your Basalte Home.",
    img: miro,
  },
  {
    title: "av components",
    description:
      "The audio components allow you to connect your turntable, amplifiers and other AV devices to the system.",
    img: avComponents,
  },
];

const MusicProduct = () => {
  return (
    <ProductPage
      videoSrc={bgVideo}
      heroTitle="Music."
      heroIntro="Basalte multiroom audio blends studio-quality music with your interior style."
      heroDesc="It is at the heart of Basalte Home so you can easily play your favourite music from the app, keypads and comfort scenes."
      products={productList}
    />
  );
};

export default MusicProduct;
