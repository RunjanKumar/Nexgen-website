import backGround from "../assets/experience/background-sky.jpg";
import curtain from "../assets/experience/curtains-close.jpeg";
import football from "../assets/experience/football.jpg";
import light from "../assets/experience/lights.jpg";
import popcorn from "../assets/experience/popcorn-football-match.jpeg";
import screenMP4 from "../assets/experience/screen-record-safari.mp4";
import screenWeb from "../assets/experience/screen-record-chrome.webm";

const Experience = () => {
  return (
    <div className="relative">
      {/* Background image as absolute */}
      <img
        src={backGround}
        alt="background sky"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />

      {/* Content */}
      <div className="py-32 px-40">
        <h1 className="text-8xl text-center">
          Watch the big match with little effort
        </h1>
        <div className="pt-12 text-center text-2xl font-extralight">
          <p>
            Custom-build a specific routine of room controls and service
            requests, so everything’s exactly how you want it, when you want it.
            Perfect for things like the weekly football match.
          </p>
        </div>

        {/* Video section (now flows normally below) */}
      </div>
      <div className="flex">
  {/* Left video section */}
  <div className="px-2 pb-20 mx-10">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="h-[400px] w-[350px] rounded-xl shadow-2xl shadow-black/40 transition duration-300 hover:scale-105"

    >
      <source src={screenWeb} type="video/webm" />
      <source src={screenMP4} type="video/mp4" />
      Your browser does not support the video tag.
      WTIV2R2D_D8BC38FD292C
    </video>
  </div>

  {/* Right image section */}
  <div className="flex flex-col space-y-4">
    {/* First row of images */}
    <div className="flex space-x-4">
      <div className="relative w-96 h-60">
        <img
          src={football}
          alt="football"
          className="w-full h-full object-cover rounded-lg"
        />
        <p className="absolute bottom-2 text-center px-6 py-4 text-xl text-[#eee5e0]">
        The TV automatically switches to the football channel.
        </p>
      </div>
      <div className="relative w-96 h-60">
        <img
          src={curtain}
          alt="curtain"
          className="w-full h-full object-cover rounded-lg"
        />
        <p className="absolute bottom-2 text-center px-6 py-4 text-xl text-[#eee5e0]">
        The curtains close to block out the light.
        </p>
      </div>
    </div>

    {/* Second row of images */}
    <div className="flex space-x-4 py-6">
      <div className="relative w-96 h-60">
        <img
          src={light}
          alt="light"
          className="w-full h-full object-cover rounded-lg"
        />
        <p className="absolute bottom-2 text-center px-6 py-4 text-xl text-[#eee5e0]">
        The living room lights dim.
        </p>
      </div>
      <div className="relative w-96 h-60">
        <img
          src={popcorn}
          alt="popcorn"
          className="w-full h-full object-cover rounded-lg"
        />
        <p className="absolute bottom-2 text-center px-6 py-4 text-xl text-[#eee5e0]">
        The butler brings soda and popcorn in time for kickoff.
        </p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Experience;
