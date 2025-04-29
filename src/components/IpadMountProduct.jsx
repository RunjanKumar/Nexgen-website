import ProductPage from "./ProductPage";
import bgVideo from "../assets/products/ipadMount/products-ipad-mounts-hero-desktop.mp4";
import evePlus from "../assets/products/ipadMount/eve-plus@2x.png";
import eve from "../assets/products/ipadMount/eve@2x.png";

const productList = [
  {
    title: "eve Plus",
    description:
      "Eve Plus is a flexible docking station for iPad. Easily mount your iPad on a wall or table, in any orientation, while keeping it permanently charged.",
    img: evePlus,
  },
  {
    title: "eve",
    description:
      "Eve turns your iPad into a fixed on-wall touch screen, while enhancing its looks and keeping it permanently charged.",
    img: eve,
  },
];

const IpadMountProduct = () => {
  return (
    <ProductPage
      videoSrc={bgVideo}
      heroTitle="ipad Mounts."
      heroIntro="Today, iPads are an essential part of our lives so we make sure you can mount and charge them in the most elegant way."
      heroDesc="Our minimalist Eve mounts and Eve Plus docking stations are meticulously designed to be absolutely beautiful and come in different high-quality finishes. Handmade with love in Belgium."
      products={productList}
    />
  );
};

export default IpadMountProduct;
