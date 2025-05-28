import { Link } from "react-router";
import {
  InstagramIcon,
  Linkedin,
  Facebook,
  Video,
  Youtube,
  Pin,
  Mail,
} from "lucide-react";

const Footer = () => {
  const productLinks = [
    "controls",
    "door communication",
    "music",
    "iPad mounts",
    "sockets & lights",
    "motion sensors",
    "Core servers",
  ];

  const homeLinks = ["lights & shades", "climate", "music", "security"];

  const footerLinks = [
    { name: "functions", href: "/functions" },
    { name: "products", href: "/products" },
    { name: "explore", href: "/explore" },
    { name: "our story", href: "/our-story" },
    { name: "careers", href: "/careers" },
    { name: "realisations", href: "/realisations" },
    { name: "contact", href: "/contact" },
    { name: "support", href: "/support" },
  ];

  const socialIcons = [
    { icon: <InstagramIcon />, label: "Instagram", href: "#" },
    { icon: <Facebook />, label: "Facebook", href: "#" },
    { icon: <Video />, label: "Vimeo", href: "#" },
    { icon: <Youtube />, label: "YouTube", href: "#" },
    { icon: <Pin />, label: "Pinterest", href: "#" },
    { icon: <Mail />, label: "Email", href: "#" },
  ];

  return (
    <footer className="bg-black text-white px-6 lg:px-24 py-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1: Contact */}
          <section aria-labelledby="footer-contact">
            <h1 id="footer-contact" className="text-4xl font-bold mb-4">
              basalte
            </h1>
            <address className="not-italic">
              <p>fraterstraat 37b</p>
              <p>9820 merelbeke, belgië</p>
              <p className="mt-4">+32 9 385 78 38</p>
              <p>
                <a href="mailto:info@basalte.be" className="underline">
                  info@basalte.be
                </a>
              </p>
            </address>
          </section>

          {/* Column 2: Products */}
          <section aria-labelledby="footer-products">
            <h2
              id="footer-products"
              className="text-[#d4af37] font-semibold mb-2"
            >
              Products
            </h2>
            <ul className="space-y-1">
              {productLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Column 3: Basalte Home */}
          <section aria-labelledby="footer-home">
            <h2 id="footer-home" className="text-[#d4af37] font-semibold mb-2">
              Basalte Home
            </h2>
            <ul className="space-y-1">
              {homeLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Column 4: Links */}
          <nav aria-label="Footer Navigation">
            <ul className="space-y-1">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <span className="font-semibold">basalte</span> | world
              </li>
            </ul>
          </nav>
        </div>

        {/* Social Icons */}
        <div className="absolute top-[40%] right-6 transform -translate-y-1/2 hidden lg:flex lg:flex-col lg:gap-4">
          {socialIcons.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-2 md:space-y-0">
          <p>
            handmade with <span className="text-white">♡</span> in Belgium
          </p>
          <p>
            ©{new Date().getFullYear()} Basalte bv – BE 0896.833.789 –{" "}
            <Link to="/privacy-policy" className="underline">
              privacy policy
            </Link>{" "}
            -{" "}
            <Link to="/cookies" className="underline">
              cookies
            </Link>{" "}
            -{" "}
            <Link to="/general-conditions" className="underline">
              general conditions
            </Link>
          </p>
          <p>
            website by{" "}
            <a
              href="https://www.linkedin.com/in/runjun-kumar-43a98b213"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Runjun Kumar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
