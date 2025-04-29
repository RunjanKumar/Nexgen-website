import { motion, useScroll } from "framer-motion";
import bgVideo from "../assets/products/rondoPage/rondo-hero-desktop.mp4";
import { useEffect, useRef, useCallback } from "react";
import rondo from "../assets/products/rondoPage/rondo.png";
import rondoArt from "../assets/products/rondoPage/rondo-art-big@2x.jpg";
import threeRondos from "../assets/products/rondoPage/three circle rondo.png";
import sofa from "../assets/products/rondoPage/rondo-sfeer-big.jpg";
import speaker from "../assets/products/rondoPage/rondo-speaker-big@2x.jpg";
import amplifiers from "../assets/products/rondoPage/rondo-sound-big@2x.jpg";

const RondoPage = () => {
  const { scrollY } = useScroll();
  const rotatingImageRef = useRef(null);
  const threeRondoRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (rotatingImageRef.current) {
      const rotation = scrollY.get() * 0.03;
      rotatingImageRef.current.style.transform = `rotateY(${rotation}deg)`;
    }

    if (threeRondoRef.current) {
      const zoomFactor = scrollY.get() * 0.0005;
      threeRondoRef.current.style.transform = `scaleX(${zoomFactor})`;
    }
  }, [scrollY]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange(handleScroll);
    return () => unsubscribe();
  }, [scrollY, handleScroll]);

  return (
    <div className="bg-black text-white">
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          loading="lazy"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end pl-16">
          <div className="text-white w-full md:w-1/2">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-8xl font-lighter mb-4">rondo</h1>
              <p className="text-lg md:text-xl font-light">
                amplifying design with sound
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center py-16">
        <img
          ref={rotatingImageRef}
          src={rondo}
          alt="Rotating Image"
          className="transition-transform duration-200 ease-in-out"
          style={{ width: "500px", height: "500px" }}
          loading="lazy"
        />
        <p className="text-xl font-light w-[40%] p-10">
          Rondo is a unique collection of design speakers crafted for the most
          exclusive homes. These high-end speakers seamlessly blend
          crystal-clear audio with a playful design, elevating your audio
          experience to a true piece of art.
        </p>
      </div>

      {/* Art Section */}
      <div className="flex justify-center items-center bg-white/10">
        <div className="w-1/2">
          <h1 className="mx-14 my-8 text-5xl font-bold">piece of art</h1>
          <p className="mx-14 my-8 text-lg pr-28">
            Rondo is so much more than a speaker, it is an opportunity to
            express your creativity and style.
          </p>
          <p className="mx-14 my-8 text-lg pr-28">
            Choose from our luxurious finishes and fabrics to create a playful
            design that elevates your interior.
          </p>
        </div>
        <div className="w-1/2">
          <img src={rondoArt} alt="rondoArt" loading="lazy" />
        </div>
      </div>

      {/* Three Rondo Section */}
      <div className="flex justify-center items-center bg-black">
        <div className="w-1/2 flex justify-center">
          <img
            ref={threeRondoRef}
            src={threeRondos}
            alt="Three Rondos Rotating"
            className="transition-transform duration-200 ease-in-out"
            loading="lazy"
          />
        </div>
        <div className="w-1/2">
          <h1 className="mx-14 my-8 pl-10 text-5xl font-bold">how we roll</h1>
          <p className="mx-14 my-8 text-xl pl-10 font-light">
            Rondo is available in three different sizes to create the design you
            need. Choose to install speaker modules behind each unit, or opt for
            additional Rondos to enhance the aesthetic appeal. The choice is
            yours.
          </p>
        </div>
      </div>

      <div className="relative w-full">
        <img src={sofa} alt="sofa" className="w-full h-auto object-cover" loading="lazy" />
        <div className="absolute mx-36 top-2/10 w-1/2 my-10 text-white text-4xl font-bold">
          explore the possibility of backlighting to set the perfect ambiance
          for any occasion
        </div>
      </div>
      <div className="bg-white text-black text-center py-16 px-4">
        <div className="mx-auto flex flex-col items-center space-y-6">
          <h2 className="max-w-3xl text-4xl font-semibold">powerful & wonderful</h2>
          <p className="max-w-3xl text-lg leading-relaxed">
            Our Rondo passive speakers feature a 1" aluminium dome pivoting
            tweeter and Kevlar woofers, ensuring an impeccable sound
            performance.
          </p>
          <img
            src={speaker}
            alt="speaker"
            className="max-w-3xl w-[400px] h-[400px] object-contain"
            loading="lazy"
          />
          <motion.div
            className="max-w-3xl w-0.5 bg-black"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ height: "140px", transformOrigin: "bottom" }}
          />

          <h2 className="max-w-3xl text-4xl font-semibold">impeccable sound</h2>
          <p className="max-w-3xl text-lg leading-relaxed">
            Our speakers and amplifiers work in perfect harmony to create an
            extraordinary sound experience.
          </p>
          <div className="max-w-3xl text-amber-200">Discover our amplifiers →</div>
          <div className="pb-26 w-full bg-red">
            <img
              src={amplifiers}
              alt="amplifiers"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RondoPage;
