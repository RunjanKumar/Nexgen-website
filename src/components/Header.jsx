import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import logo from "../assets/BLACK_NEXT_GEN_LOGO_-removebg-preview.png";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header>
        {/* Top Bar with Logo & Menu */}
        <div className="flex justify-between items-center w-full z-10 px-4 py-2">
          <div className="m-2">
            <a href="/">
              <img
                src={logo}
                alt="Nexgen Homes Logo"
                className="h-20 w-auto object-contain"
              />
            </a>
          </div>

          <div className="text-xl md:text-2xl flex items-center">
            <div className="m-2">
              <Link to="/products"> products </Link>
            </div>
            <div className="m-2">
              <Link to="/story"> story </Link>
            </div>
            <div className="m-2">
              <Link to="/about"> about us </Link>
            </div>
            <div className="m-2">
              <button
                onClick={toggleMenu}
                className="text-black"
                aria-label="Open menu"
              >
                <Menu size={30} />
              </button>
            </div>
          </div>
        </div>

        

        {/* Fullscreen Menu Overlay */}
        {isOpen && (
  <div className="fixed inset-0 bg-black text-white z-50 flex flex-row-reverse">
    {/* Close Button */}
    <button
      onClick={toggleMenu}
      className="absolute top-6 right-6 text-white"
      aria-label="Close menu"
    >
      <X size={30} />
    </button>

    {/* Language Selector (now on right side) */}
    {/* <div className="w-1/5 p-6 flex flex-col gap-4 items-end text-right">
      {["DE", "EN", "ES", "FR", "NL"].map((lang) => (
        <span
          key={lang}
          className={`text-gray-400 hover:text-white ${
            lang === "EN" ? "text-white font-bold" : ""
          }`}
        >
          {lang}
        </span>
      ))}
    </div> */}

    {/* Navigation Items (now on left side) */}
    <div className="flex-1 px-20 flex flex-col justify-center items-end gap-4 ">
      {[
        "Basalte Home",
        "products",
        "realisations",
        "our story",
        "careers",
        "showrooms",
        "explore",
        "contact us",
      ].map((item) => (
        <span
          key={item}
          className={`text-3xl ${
            item === "products"
              ? "text-yellow-500 font-bold"
              : item === "explore" || item === "contact us"
              ? "text-gray-400"
              : "font-bold"
          }`}
        >
          {item}
        </span>
      ))}

      {/* Social Icons */}
      <div className="flex gap-6 mt-10 text-gray-400">
        <i className="fab fa-instagram"> instagram</i>
        <i className="fab fa-linkedin"> linkedin</i>
        <i className="fab fa-facebook"> facebook</i>
        <i className="fab fa-vimeo"> vimeo</i>
        <i className="fab fa-youtube"> youtube</i>
        <i className="fab fa-pinterest"> pinterest</i>
        <i className="fas fa-envelope"> email </i>
      </div>
    </div>
  </div>
)}
      </header>
    </>
  );
};

export default Header;
