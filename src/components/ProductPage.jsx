import { motion } from "framer-motion";
import { useNavigate, useLocation, Link } from "react-router";
import ProductShowcase from "./ProductShowcase";

const ProductPage = ({ videoSrc, heroTitle, heroIntro, heroDesc, products }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Nexgen Homes", link: "/" },
    { name: "controls", link: "/products/controls" },
    { name: "music", link: "/products/music" },
    { name: "ipad mounts", link: "/products/ipad-mounts" },
    { name: "outlets & lights", link: "/products/outlets-lights" },
    { name: "motion sensors", link: "/products/motion-sensors" },
    { name: "care servers", link: "/products/care-servers" },
  ];

  const handleNavigation = (link) => {
    if (location.pathname === link) {
      // Re-trigger route
      navigate(link, { replace: true });
    } else {
      navigate(link);
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-black text-white">
      {/* Background Video Section */}
      <div className="relative w-full h-screen">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full flex items-center pl-10">
          <div className="text-white w-6/10 mx-28">
            <div className="flex items-start gap-10">
              <motion.div
                className="w-0.5 bg-white"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ height: "140px", transformOrigin: "bottom" }}
              />
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-7xl font-bold mb-4">
                  {heroTitle}
                </h1>
                <p className="text-lg md:text-xl font-light">{heroIntro}</p>
              </motion.div>
            </div>

            <motion.p
              className="text-lg md:text-xl font-light py-8 px-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              {heroDesc}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Product Showcase List */}
      <div>
        {products.map((product, index) => (
          <ProductShowcase
            key={`${product.title}-${index}`}
            title={product.title}
            description={product.description}
            imgSrc={product.img}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>

      {/* Product Navigation */}
      <div className="p-20">
        <div className="text-center text-5xl font-bold mb-8">
          Discover our products
        </div>
        <div className="text-amber-200 flex flex-wrap justify-center gap-4 p-6 text-sm sm:text-base">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center hover:text-white cursor-pointer"
              onClick={() => handleNavigation(item.link)}
            >
              <span className="capitalize">{item.name}</span>
              {index < navItems.length - 1 && <span className="mx-2">|</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

