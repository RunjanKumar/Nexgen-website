import { useState } from "react";
import { X, Menu } from "lucide-react";

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  const languages = ["DE", "EN", "ES", "FR", "NL"];
  const navItems = [
    "Basalte Home",
    "products",
    "realisations",
    "our story",
    "careers",
    "showrooms",
    "explore",
    "contact us",
  ];

  return (
    <div>
      <button onClick={toggleMenu} className="p-4 text-white">
        <Menu size={28} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black text-white z-50 flex flex-col md:flex-row">
          {/* Close button */}
          <button onClick={toggleMenu} className="absolute top-6 right-6 text-white">
            <X size={28} />
          </button>

          {/* Language list */}
          <div className="flex flex-col items-start gap-4 p-8">
            {languages.map((lang, index) => (
              <button
                key={lang}
                className={`text-gray-400 hover:text-white ${
                  lang === "EN" ? "text-white font-bold" : ""
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Main nav */}
          <div className="flex-1 flex flex-col justify-center items-start gap-4 p-8">
            {navItems.map((item) => (
              <span
                key={item}
                className={`text-2xl ${
                  item === "products"
                    ? "text-yellow-600 font-bold"
                    : item === "explore" || item === "contact us"
                    ? "text-gray-400"
                    : "font-bold"
                }`}
              >
                {item}
              </span>
            ))}

            {/* Social icons */}
            <div className="flex gap-4 mt-8 text-gray-400">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-vimeo"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-pinterest"></i>
              <i className="fas fa-envelope"></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
