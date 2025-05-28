import readNewsPaper from "../assets/read-newspaper.jpg";
import girlCheckPhone from "../assets/girl-checks-phone.jpg";
import manCheckPhone from "../assets/man-checks-phone.jpg";
import bedPrepare from "../assets/housekeeping-prepares-bed.jpg";
import golden from "../assets/golden_gradient.jpg";
import services_kitchen from "../assets/services_kitchen.png";
import services_fruit from "../assets/services_fruit.jpg";
import service_coffee from "../assets/services_coffee.jpg";
import services_ballgown from "../assets/services_ballgown.jpg";
import service_gown from "../assets/service_gown.png";
import service_cookies from "../assets/services_cookies.jpg";

const HorizontalLayout = () => {
  return (
    <>
      <div>
        {/* // section 1 */}
        <div className="bg-[linear-gradient(to_right,#faf5e8,#ffffff,#faf5e8)] px-12 py-16">
          <div className=" flex items-center">
            <div className="flex flex-col text-8xl font-bold leading-tight pr-8">
              <div className="">
                <div
                  className="text-8xl bg-clip-text text-transparent leading-tight"
                  style={{
                    backgroundImage: `url(${golden})`,
                    backgroundSize: "300%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  <div> Feel at home </div>
                  <div> before you get home </div>
                </div>
              </div>
            </div>
            <div className="text-lg max-w-[400px] text-gray-700">
              Make service requests to your staff while you’re on the move. From
              food and drinks orders to housekeeping tasks, all it takes is one
              tap. You can voice chat with them through the app too.
            </div>
          </div>
          <div className="flex gap-6 pt-8">
            <img
              src={readNewsPaper}
              alt="readNewsPaper"
              className="w-[250px] h-[350px] object-cover"
            />
            <img
              src={girlCheckPhone}
              alt="girlCheckPhone"
              className="w-[350px] h-[350px] object-cover"
            />
            <img
              src={manCheckPhone}
              alt="manCheckPhone"
              className="w-[250px] h-[350px] object-cover"
            />
            <img
              src={bedPrepare}
              alt="bedPrepare"
              className="w-[250px] h-[350px] object-cover"
            />
          </div>
        </div>
        {/* section 2 */}
        <div className="flex">
          {/* <div className="w-1/2"> 
          <img src={ services_fruit } alt=" service_coffee" className=" object-cover" />
          </div> */}
          <div className="relative w-1/2">
            {/* Base Image */}
            <img
              src={services_fruit}
              alt="service_coffee"
              className="object-cover w-full"
            />

            {/* Overlay Image and Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
              <img
                src={services_kitchen}
                alt="overlay"
                className="w-56 h-120 mb-2"
              />
              <p className="text-xl font-light px-14 text-center text-red-50">
                After your morning smoothie, you notice you’re running low on
                fresh fruit. So you message the butler to make a grocery run.
              </p>
            </div>
          </div>

          <div className="relative w-1/2">
            <img
              src={service_coffee}
              alt=" service_coffee"
              className="object-cover w-full"
            />
            <div className="absolute bottom-0 px-2 py-18 text-center flex flex-col bg-black/40">
              <p className="text-xl font-light px-14 text-center text-red-50">
                Hit the preset coffee button, so your piping hot Arabica is
                ready for you the moment you walk through the front door.
              </p>
            </div>
          </div>
        </div>
        {/* section 3 */}
        <div className="flex">
          <div className="relative w-1/2">
            {/* Base Image */}
            <img
              src={services_ballgown}
              alt="service_coffee"
              className="object-cover w-full"
            />

            {/* Overlay Image and Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
              <img
                src={service_gown}
                alt="overlay"
                className="w-56 h-120 mb-2"
              />
              <p className="text-xl font-light px-14 text-center text-red-50">
                After yours morning smoothie, you notice you’re running low on
                fresh fruit. So you message the butler to make a grocery run.
              </p>
            </div>
          </div>

          <div className="relative w-1/2">
            <img
              src={service_cookies}
              alt=" service_coffee" 
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 px-14 py-22 text-center flex flex-col">
              <p className="text-xl font-light px-14 text-center text-red-50">
                A late night craving? So you ask the chef to bake a fresh batch
                of cookies for when you get home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalLayout;
