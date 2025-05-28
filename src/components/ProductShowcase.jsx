// ProductShowcase.jsx
import { Link } from "react-router";

const ProductShowcase = ({ title, description, imgSrc, reverse }) => {
  return (
    <div className="h-[25rem] md:h-[30rem] flex items-center mx-10 md:mx-28 py-10 my-10 hover:bg-white/20">
      <div
        className={`w-1/2 ${
          reverse ? "order-last pr-10 md:pr-28 mr-0 md:mr-10" : "pl-10 md:ml-28"
        }`}
      >
        <h1 className="text-4xl md:text-7xl font-bold mb-4 capitalize">
          {title}
        </h1>
        <p className="text-lg md:text-xl font-light">{description}</p>
        <div className="text-amber-300 text-base sm:text-lg md:text-xl hover:underline cursor-pointer">
           <Link to='/rondo'> Discover → </Link>
        </div>
      </div>
      <div className="w-1/2 h-full m-8 flex items-center justify-center">
        <img src={imgSrc} alt={title} className="h-full object-contain" />
      </div>
    </div>
  );
};

export default ProductShowcase;
