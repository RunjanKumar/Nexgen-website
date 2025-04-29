import control from "../assets/products/controls-small.jpg";
// import music from "../assets/products/music-small.jpg";
import bigMusic from "../assets/products/music-big@2x.jpg";
import ipad from "../assets/products/ipad-mounts-small.jpg";
import socket from "../assets/products/sockets-lights-small.jpg";
import coreServer from "../assets/products/core-servers-big@2x.jpg";
import motionSensor from "../assets/products/motion-sensors-big@2x.jpg";
import { Link } from "react-router";

const products = [
  {
    title: "Controls",
    description: "Intuitively control your home",
    img: control,
    align: "right",
  },
  {
    title: "Music",
    description: "Enjoy studio-quality audio",
    img: bigMusic,
    align: "right",
  },
  {
    title: "iPad Mounts",
    description: "Combine elegance with functionality",
    img: ipad,
    align: "left",
  },
  {
    title: "Outlets & Lights",
    description: "Bring power to your home",
    img: socket,
    align: "left",
  },
  {
    title: "motion sensors",
    description: "embrance true home automation",
    img: motionSensor,
    align: "right",
  },
  {
    title: "core servers",
    description: "the beating heart of your home",
    img: coreServer,
    align: "right",
  },
];

const ProductCard = ({ title, description, img, align }) => {
  return (
    <div className="w-full md:w-1/2 p-2">
      <div className="relative overflow-hidden rounded-lg aspect-[4/3] group">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <div
          className={`absolute bottom-2 ${
            align === "right" ? "right-2 text-right" : "left-2 text-left"
          } bg-white bg-opacity-70 px-4 py-2 text-gray-800 font-extralight rounded-md`}
        >
          <h3 className="text-2xl md:text-4xl font-bold capitalize">{title}</h3>
          <p className="text-lg md:text-xl text-gray-700 flex items-center gap-2">
            {description}
            <span className="text-2xl leading-none">&rarr;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Product = () => {
  return (
    <div className="bg-[#ebeef0]">
      <div className="w-full md:w-1/2 ml-auto p-8">
        <h1 className="font-bold text-4xl p-5">discover our products</h1>
        <p className="px-5">
          Our products are designed to keep things simple, intuitive and
          elegant, both in its form and in its function. Reduced to its essence
          and improving the comfort of the modern home.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 p-6 text-gray-700 text-sm sm:text-base">
        {[
          { name: "controls", link: "/products/controls" },
          { name: "music", link: "/products/music" },
          { name: "ipad mounts", link: "/products/ipad-mounts" },
          { name: "outlets & lights", link: "/products/outlets-lights" },
          { name: "motion sensors", link: "/products/motion-sensors" },
          { name: "care servers", link: "/products/care-servers" },
          // Add more product items in the same format as above
        ].map((item, index, arr) => (
          <div key={index} className="flex items-center">
            <span className="capitalize">
              <Link to={item.link}> {item.name} </Link>
            </span>
            {index < arr.length - 1 && <span className="mx-2">|</span>}
          </div>
        ))}
      </div>

      {/* Product Grid */}
      <div className="flex flex-wrap">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
