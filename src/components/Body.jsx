// import textureBackground from "../assets/texture-rosegold.jpg";
import smartLivingImage from "../assets/smart-living-revolution-photo.jpg";
import golden from "../assets/golden_gradient.jpg";
import video from "../assets/video/18051870-hd_1920_1080_30fps.mp4";

const Body = () => {
  return (
    <>
      <div className="bg-black text-white">
        <div className=" text-black   bg-[linear-gradient(to_top,#faf5e8_10%,#ffffff_80%,#faf5e8_100%)]">
          {/* Hero Section */}

          <div className="text-center text-5xl md:text-7xl font-bold py-20">
            <h1>Fusion of Smart & Luxurious LifeStyle</h1>
          </div>

          {/* Background Video Section */}
          <div className="flex justify-center items-center min-h-screen relative">
            <div className="relative w-[95%]">
              <video
                className="w-full h-auto"
                autoPlay
                playsInline
                muted
                loop
                controls
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#faf3de] text-4xl font-bold bg-opacity-50 p-4 rounded-lg">
                Watch Nexgen in Actions
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="flex flex-col md:flex-row text-2xl px-8 py-12 gap-8">
            <div className="font-bold">
              <p>
                Luxury isn’t limited to the finest hotels or First Class Airport
                Lounges. The future of luxury is now at home.
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">CASADIGI</span> creates that same
                level of comfort and convenience at home by integrating your
                smart devices and your in-house staff together on one incredible
                platform.
              </p>
              <br />
              <p> Experience luxury through seamless living. </p>
            </div>
          </div>
        </div>

        <div className="relative h-screen flex flex-col items-center justify-center text-center">
          <h1
            className="text-8xl font-bold bg-clip-text text-transparent leading-tight pb-4"
            style={{
              backgroundImage: `url(${golden})`,
              backgroundSize: "300%", // Spread texture evenly across all letters
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              WebkitBackgroundClip: "text",
            }}
          >
            Join the Smart
          </h1>
          <div className="flex items-center space-x-4 text-8xl font-bold">
            <span
              className="bg-clip-text text-transparent leading-tight pb-4"
              style={{
                backgroundImage: `url(${golden})`,
                backgroundSize: "300%", // Adjust texture scale to avoid cutting letters
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                WebkitBackgroundClip: "text",
              }}
            >
              Living
            </span>
            <span
              className="bg-clip-text text-transparent leading-tight pb-4"
              style={{
                backgroundImage: `url(${golden})`,
                backgroundSize: "300%", // Ensures all text is properly textured
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                WebkitBackgroundClip: "text",
                // fontFamily: "italic",
                // fontFamily: `'Boostard Signature' italic`,
              }}
            >
              revolution
            </span>
          </div>
        </div>
        {/* // image + text */}
        <div className="m-16 text-white text-lg">
          <img src={smartLivingImage} alt="smart living image" />
          <div className="flex flex-col items-center">
            <div className="w-[700px] text-center m-16">
              <p className="m-4">
                A luxurious lifestyle is all about the experiences you enjoy.
              </p>
              <p className="m-4">
                A seamless integration of all your devices and butlers in one
                elegant solution. No wonder it’s the world’s most intelligent
                smart living platform. There’s nothing else on earth like it.
              </p>
            </div>
          </div>
        </div>
        {/* from the team behind  */}
        <div className="relative  flex flex-col items-center justify-center text-center">
          <div
            className="text-7xl font-medium bg-clip-text text-transparent leading-tight pb-4"
            style={{
              backgroundImage: `url(${golden})`,
              backgroundSize: "300%", // Spread texture evenly across all letters
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              WebkitBackgroundClip: "text",
            }}
          >
            From the team behind <br /> luxurious experiences <br /> at landmark
            addresses
          </div>
        </div>
        {/* // casadigi takes everyThing */}
        <div className="relative  flex flex-col items-center justify-center text-center Urbanist, sans-serif">
          <div className="text-2xl font-light px-85 text-[#eee5e0e6] m-10">
            <strong> CasaDigi </strong> takes everything we’ve ever learnt from
            working with iconic global hospitality brands, and brings it into
            the heart of your home.
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
