// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import golden from "../assets/golden_gradient.jpg";
import dinner from "../assets/party section left dining-p-500.jpg";
import bedroom from "../assets/party section right bedroom-p-500.jpg";
import partyVideoWebm from "../assets/video/party section.webm";
import partyVideomp4 from "../assets/video/party section.mp4";
import dancePartyVideoWebm from "../assets/video/dance party-transcode.webm";
import dancePartyVideomp4 from "../assets/video/dance party-transcode.mp4";
import birthdayPartyVideoWebm from "../assets/video/birthday party-transcode.webm";
import birthdayPartyVideomp4 from "../assets/video/birthday party-transcode.mp4";
import estateIcon from "../assets/icon/icon-real-estate-dimensions.svg";
import { partyAdVideoMp4, partyAdVideoWebm } from "../utils/constants";

const PartySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    triggerOnce: false,
    margin: "-100px 0px",
  });

  return (
    <div className="text-white">
      <div className="pt-28 text-center">MULTI-ZONE MUSIC</div>
      <div className="relative flex flex-col items-center justify-center text-center">
        <div
          className="text-8xl font-medium bg-clip-text text-transparent leading-tight px-56 pb-4"
          style={{
            backgroundImage: `url(${golden})`,
            backgroundSize: "300%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            WebkitBackgroundClip: "text",
          }}
        >
          Host two parties on the same night
        </div>
      </div>
      <div className="text-2xl px-68">
        <p>
          Create and manage music zones within your home, so you can stream and
          sync different playlists in selected areas of your home.
        </p>
      </div>
      <div className="mx-52 my-24 relative" ref={sectionRef}>
        {/* Video Container */}
        <div className="relative">
          <video autoPlay loop muted playsInline controls className="w-full">
            <source src={partyVideomp4} type="video/mp4" />
            <source src={partyVideoWebm} type="video/webm" />
            Your browser does not support the video tag.
          </video>

          {/* Left Image - Animates from Bottom to Position */}
          <motion.div
            initial={{ y: 200, opacity: 0 }} // Start from below with opacity 0
            animate={isInView ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }} // Animate when in view
            transition={{ duration: 1.5, ease: "easeOut" }} // Smooth transition
            className="absolute -bottom-20 left-[-90px] border-2 border-red-200 rounded-full overflow-hidden w-52 h-52"
          >
            <img
              src={dinner}
              alt="dinner image"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Image - Animates from Bottom to Position */}
          <motion.div
            initial={{ y: 200, opacity: 0 }} // Start from below with opacity 0
            animate={isInView ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }} // Animate when in view
            transition={{ duration: 1.5, ease: "easeOut" }} // Smooth transition
            className="absolute bottom-9 right-[-50px] border-2 border-red-200 rounded-full overflow-hidden w-40 h-40"
          >
            <img
              src={bedroom}
              alt="bedroom image"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      {/* // party advertisement */}
      <div>
        <div className="flex pt-40 my-10">
          <div className="w-1/2 pl-12">
            <div className="my-4">
              <img src={estateIcon} alt="icon" />
            </div>
            <div className="text-2xl">Music zone 1: The dining room</div>
            <div className="relative flex flex-col items-center justify-center">
              <div
                className="text-7xl font-medium bg-clip-text text-transparent leading-tight"
                style={{
                  backgroundImage: `url(${golden})`,
                  backgroundSize: "300%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  WebkitBackgroundClip: "text",
                }}
              >
                Classical music for a relaxing dinner party
              </div>
            </div>
          </div>
          <div className="w-1/2 h-[466px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full h-full object-cover"
            >
              <source src={partyAdVideoMp4} type="video/mp4" />
              <source src={partyAdVideoWebm} type="video/webm" />
              Your browser does not support the video
            </video>
          </div>
        </div>
        <div className="flex my-10">
          <div className="w-1/2 h-[466px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full h-full object-cover"
            >
              {/* <source
              src="https://cdn.prod.website-files.com/638809065816c86d85c2e45b/645f4c1bc592fff767f76cca_birthday party-transcode.mp4" type="video/mp4"
            />
            <source
              src="https://cdn.prod.website-files.com/638809065816c86d85c2e45b/645f4c1bc592fff767f76cca_birthday party-transcode.webm" type="video/webm"
            /> */}
              <source src={birthdayPartyVideomp4} type="video/mp4" />
              <source src={birthdayPartyVideoWebm} type="video/webm" />
              Your browser does not support the video
            </video>
          </div>
          <div className="w-1/2 pl-12">
            <div className="my-4">
              <img src={estateIcon} alt="icon" />
            </div>
            <div className="text-2xl">Music zone 2: The kids’ bedroom</div>
            <div className="relative flex flex-col items-center justify-center">
              <div
                className="text-7xl font-medium bg-clip-text text-transparent leading-tight"
                style={{
                  backgroundImage: `url(${golden})`,
                  backgroundSize: "300%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  WebkitBackgroundClip: "text",
                }}
              >
                The birthday party pop playlist in full swing
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-10">
          <div className="w-1/2 pl-12">
            <div className="my-4">
              <img src={estateIcon} alt="icon" />
            </div>
            <div className="text-2xl">Music zone 3: The patio</div>
            <div className="relative flex flex-col items-center justify-center">
              <div
                className="text-7xl font-medium bg-clip-text text-transparent leading-tight"
                style={{
                  backgroundImage: `url(${golden})`,
                  backgroundSize: "300%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  WebkitBackgroundClip: "text",
                }}
              >
                Sync with pop tracks to dance the night away
              </div>
            </div>
          </div>
          <div className="w-1/2 h-[466px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full h-full object-cover"
            >
              {/* <source
              src="https://cdn.prod.website-files.com/638809065816c86d85c2e45b/645f4da13a0d8e2c7a0f3a2f_dance party-transcode.mp4"
              type="video/mp4"
            />
            <source
              src="https://cdn.prod.website-files.com/638809065816c86d85c2e45b/645f4da13a0d8e2c7a0f3a2f_dance party-transcode.webm"
              type="video/webm"
            /> */}
              <source src={dancePartyVideomp4} type="video/mp4" />
              <source src={dancePartyVideoWebm} type="video/webm" />
              Your browser does not support the video
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartySection;
