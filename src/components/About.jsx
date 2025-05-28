import googlePlay from "../assets/about/google_play.png";
import appleStore from "../assets/about/apple store.png";

const About = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 pt-16">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold py-8">About Nexgen</h1>

      <div className="text-base sm:text-lg leading-relaxed text-justify space-y-6">
        <p>
          Nexgen Automations is passionately devoted to enhancing the quality
          of people’s lives through smart living solutions. Our meticulously
          crafted products epitomize opulence, convenience, and refined
          elegance, setting a new standard in modern living. Driven by an
          unwavering commitment to innovation, we employ cutting-edge
          technology and prioritize design excellence in every aspect of our
          creations.
        </p>
        <p>
          At the heart of Nexgen Automations is a dynamic team comprising
          seasoned engineers and visionary designers. Together, we channel our
          expertise towards the development of Internet of Things (IoT)
          products and other seamlessly connected devices. Our commitment to
          staying ahead of the technological curve ensures that each Nexgen
          Automations product is a testament to both functionality and style.
        </p>
        <p>
          In an era where smart living is becoming increasingly integral to
          our daily routines, Nexgen Automations stands as a beacon of
          innovation, offering products that seamlessly integrate into the
          fabric of modern living. Whether it’s the intuitive user interfaces,
          energy-efficient features, or the sophisticated design elements,
          Nexgen Automations consistently delivers an unparalleled living
          experience. Elevate your lifestyle with Nexgen Automations – where
          luxury meets technology, and innovation meets comfort. Welcome to a
          smarter way of living.
        </p>
      </div>

      {/* Philosophy - Vision - Mission */}
      <div className="flex flex-col lg:flex-row gap-6 mt-16">
        {[
          {
            title: "Philosophy",
            text: "Nexgen Automations embodies a philosophy of smart living, merging luxury with innovation. Our IoT products, crafted with design precision, redefine modern living for an elevated, connected lifestyle."
          },
          {
            title: "Vision",
            text: "Nexgen Automations redefines modern living with luxury and innovation. Our IoT products offer sophisticated, connected living, blending cutting-edge technology and design excellence for an elevated lifestyle."
          },
          {
            title: "Mission",
            text: "Nexgen Automations is on a mission to revolutionize modern living. We strive to seamlessly integrate luxury and innovation in our IoT products, enhancing lives through sophisticated, connected living experiences."
          },
        ].map((item, index) => (
          <div key={index} className="flex-1 min-h-72 shadow-2xl p-6 bg-white rounded-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-4">{item.title}</h2>
            <p className="text-base sm:text-lg">{item.text}</p>
          </div>
        ))}
      </div>

      {/* App Store Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-16">
        <img
          src={googlePlay}
          alt="Google Play"
          className="h-12 sm:h-16 md:h-20 w-auto"
        />
        <img
          src={appleStore}
          alt="Apple Store"
          className="h-12 sm:h-16 md:h-20 w-auto"
        />
      </div>
    </div>
  );
};

export default About;
