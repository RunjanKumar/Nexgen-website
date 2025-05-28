import hero from "../assets/story/about-hero-2024-big@2x.jpg";
import inrto1 from "../assets/story/about-intro1-big@2x.jpg";
import inrto2 from "../assets/story/about-intro2-big@2x.jpg";
import inspire1 from "../assets/story/about-inspire1-big@2x.jpg";
import inspire2 from "../assets/story/about-inspire2-big@2x.jpg";
import inspire3 from "../assets/story/about-inspire3-big@2x.jpg";
import technology from "../assets/story/about-technology-big@2x.jpg";
import passion1 from "../assets/story/about-passion1-big@2x.jpg";
import passion2 from "../assets/story/about-passion2-big@2x.jpg";
import passion3 from "../assets/story/about-passion3-big@2x.jpg";
import passion4 from "../assets/story/about-passion4-big@2x.jpg";
import passion5 from "../assets/story/about-passion5-big@2x.jpg";
import passion6 from "../assets/story/about-passion6-big@2x.jpg";
import sfeer from "../assets/story/about-sfeer-big@2x.jpg";
import footer from "../assets/story/about-footer-big@2x.jpg";

import { Video } from "lucide-react";

const Story = () => {
  return (
    <div>
      <div className="relative w-full">
        {/* Background Image */}
        <img
          src={hero}
          alt="hero"
          className="w-full h-full object-cover rounded-xl"
        />

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full flex p-6 md:p-10">
          <div className="bg-opacity-50 px-4 md:px-10 w-full md:w-7/12 rounded-lg text-white">
            <h1 className="text-3xl md:text-5xl font-bold py-12 md:py-28">
              uniting exclusive design and smart home technology
            </h1>
            <p className="text-lg md:text-xl font-light py-8 md:py-16">
              With harmonious, instinctual and contemporary looks, Basalte
              designs minimalist products that blend seamlessly into any
              exclusive interior. We collaborate closely with architects and
              interior designers worldwide to ensure the beautiful integration
              of home technology into any project. Winning over 60 prestigious
              international design awards such as iF Design Award, Red Dot
              Design Award and Henry van de Velde Award underpins our focus on
              high-quality design.
            </p>
            <p className="text-lg md:text-xl font-light">
              how do we achieve this
              <span className="text-2xl leading-none"> &rarr;</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="flex py-28 px-6">
          <img src={inrto1} alt="" className="w-1/2" />
          <img src={inrto2} alt="" className="w-1/2" />
        </div>
        <h2 className="px-6 text-5xl pb-6">design to inspire you</h2>
        <p className="px-6 w-3/4 text-xl font-light pb-12">
          Basalte’s harmonious, intuitive and contemporary design products fit
          exclusive homes. By collaborating closely with architects and interior
          designers we ensure a beautiful home technology integration for every
          project. Winning over 60 international design awards such as the IF
          Design Award, Red Dot Design Awards and Henry van de Velde Awards
          underpins our focus on high-quality design.
        </p>
        <div className="flex flex-wrap py-14 gap-6 px-6">
          <div className="flex-1 w-full md:w-1/3">
            <img src={inspire1} alt="" className="w-full mb-6 md:mb-0" />
          </div>
          <div className="flex-1 w-full md:w-1/3">
            <img src={inspire2} alt="" className="w-full mb-6 md:mb-0" />
          </div>
          <div className="flex-1 w-full md:w-1/3">
            <img src={inspire3} alt="" className="w-full mb-6 md:mb-0" />
          </div>
        </div>
        <div className="text-center mx-80">
          <p className="text-xl font-medium py-10">
            We are determined to keep things simple, intuitive and elegant, both
            in form and function
            <span className="text-xl font-light">
              . Streamlined to improve the comfort of the modern home.
            </span>
          </p>
          <p className="p-4 pb-20 text-amber-200 font-extralight text-xl">
            Karan Arora, CEO Nexgen Automations
          </p>
        </div>
        <div className="relative w-full">
          {/* Background Image */}
          <img
            src={technology}
            alt="hero"
            className="w-full h-full object-cover rounded-xl"
          />

          {/* Overlay Content */}
          <div className="absolute top-0 left-0 w-full h-full flex p-6 md:p-10">
            <div className="bg-opacity-50 w-8/10 rounded-lg text-white">
              <h1 className="text-3xl md:text-5xl font-extralight py-8">
                bringing products to life through cutting-edge technology
              </h1>
              <p className="text-lg md:text-xl font-light py-8 md:py-16">
                Technology has the power to shape our world, and our engineering
                teams are committed to this mission every day. They work
                tirelessly to integrate the latest technologies into our
                products, all in the pursuit of enhancing true comfort in users’
                everyday lives.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="pt-28 text-5xl font-light w-1/2 px-10">
            passion, dedication and true craftsmanship
          </h2>
          <p className="px-10 w-3/4 text-xl font-light py-6">
            The most exclusive materials and fabrics should only be treated by
            craftspeople with a passion for their work. All our products are
            meticulously designed and handcrafted in-house. Always handmade with
            love in Belgium.
          </p>
          <div className="text-amber-200 px-10 pb-16 flex gap-4">
            <Video /> watch our craftsmanship
          </div>
        </div>
        <div className="flex flex-wrap px-6 py-10">
          <div className="w-full md:w-1/3">
            <img src={passion1} className="w-full rounded-lg" />
          </div>
          <div className="w-full md:w-1/3">
            <img src={passion2} className="w-full rounded-lg" />
          </div>
          <div className="w-full md:w-1/3">
            <img src={passion3} className="w-full rounded-lg" />
          </div>
          <div className="w-full md:w-1/3">
            <img src={passion4} className="w-full rounded-lg" />
          </div>
          <div className="w-full md:w-1/3">
            <img src={passion5} className="w-full rounded-lg" />
          </div>
          <div className="w-full md:w-1/3">
            <img src={passion6} className="w-full rounded-lg" />
          </div>
        </div>
        <div className="relative mt-20">
          {/* Image */}
          <img src={sfeer} alt="sfeer" className="w-full" />

          {/* Centered Text at Top */}
          <div className="absolute top-5/10 left-1/2  -translate-x-1/2 -translate-y-1/2 text-5xl p-4 rounded-lg">
            Welcome Home
            <p className="text-xl text-center font-medium py-4">
              {" "}
              Watch the basalte Home film
              <span className="text-2xl leading-none"> &rarr;</span>
            </p>
          </div>
        </div>
        <div className="relative">
          {/* Image */}
          <img src={footer} alt="sfeer" className="w-full" />

          {/* Centered Text at Top */}
          <div className="absolute top-1/10 left-6/10 text-5xl text-black">
           <div className="py-8">Solid as a rock</div>
            <p className="text-xl py-4">
            Basalt is a dark-coloured, fine-grained, igneous rock. Basalt underlies more of the Earth's surface than any other type of rock and can be found around the globe.
           
              
            </p>
            <p className="text-xl py-4">
             Beautiful and natural on the outside. Solid, strong and multi-layered on the inside. Like the rock from which Basalte takes its name, we are determined to create timeless products of outstanding durability. Reduced to its essence, what remains is pure elegance.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
