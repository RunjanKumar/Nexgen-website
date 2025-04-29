import AllProductsImage from "../assets/nexgen all products.png";
import owl from "../assets/universal-owl-remote.jpeg";
import butler from "../assets/butler.jpg";
import smartDevices from "../assets/control-smart-devices.jpg";
import roomAmbience from "../assets/room-ambience.jpg";

import FeatureCard from "./FeatureCard";
import SideBar from "./SideBar";

const featureData = [
  {
    Image: owl,
    title: "Universal Remote",
    heading: "One control for every TV in your home.",
    description:
      "Are you forever losing the remote? CasaDigi gives you one unified smart TV remote control, no matter the brand. So there’s no need to remember how each one works.",
  },
  {
    Image: butler,
    title: "Virtual Concierge",
    heading: "Your personalized assistant at your service.",
    description:
      "Get the luxury of having a butler at your command. CasaDigi’s virtual concierge helps you book reservations, manage tasks, and streamline your lifestyle effortlessly.",
  },
  {
    Image: roomAmbience,
    title: "Smart Room Customization",
    heading: "Set the perfect mood anytime.",
    description:
      "Adjust lighting, curtains, and ambiance to match your mood or occasion. CasaDigi lets you personalize your space with a tap.",
  },
  {
    Image: smartDevices,
    title: "IoT Device Integration",
    heading: "Control all your smart devices in one place.",
    description:
      "Connect and manage your IoT devices effortlessly, ensuring smooth automation of your home with a single app.",
  },
];

const Feature = () => {
  return (
    <>
      <div>
        <div className="text-8xl text-center p-16">
          More control <br /> than ever before
        </div>
        <div
          className="text-center text-2xl mx-72 text-[#11152b]"
          style={{ fontFamily: "Urbanist, sans-serif", fontWeight: 100 }}
        >
          Set the ambience, adjust temperatures, change channels, order snacks
          and more. Tailormade to your needs.
        </div>
        <div className="m-20">
          <img src={AllProductsImage} alt="all products images" />
        </div>

        {/* // images */}
        <div className="flex">
          {/* //SideBar */}
          <div className="h-screen sticky top-0">
            <SideBar />
          </div>
          <div>
            {featureData.map((feature, index) => (
              <FeatureCard
                key={index}
                Image={feature.Image}
                title={feature.title}
                heading={feature.heading}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
