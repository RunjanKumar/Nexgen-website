import house from "../assets/case/house.png";
import parentWithLaptop from "../assets/case/parent-with-laptop.jpg";
import speaker from "../assets/case/speaker.png";

const CaseStudy = () => {
  return (
    <div className="h-[1100px] bg-red-50">
      <div className="px-12">
        <div className="text-6xl font-semibold pt-48">
          <h1>Case Studies</h1>
        </div>
        {/* // card */}
        <div className="flex gap-14 py-8">
          <div className="w-[400px] h-[400px]">
            <img
              src={house}
              alt="house"
              className="w-full h-full object-cover rounded-xl"
            />
            <div>
              <h3 className="text-2xl font-semibold my-4">
                The Evolution of Smart Home Technology
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 line-clamp-3">
                Smart homes have transformed from standalone gadgets into
                interconnected ecosystems that redefine modern living. Discover
                the evolution of smart homes—beginning with early innovations
                such as smart bulbs and progressing to today’s AI-driven systems
                that intelligently adapt to user behaviour.
              </p>
            </div>
          </div>

          <div className="w-[400px] h-[400px]">
            <img
              src={parentWithLaptop}
              alt="parent with laptop"
              className="w-full h-full object-cover rounded-xl"
            />
            <div>
              <h3 className="text-2xl font-semibold my-4">
                Simplify Smart Homes With Nexgen Automations
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 line-clamp-3">
                Discover how CasaDigi transforms the perception of smart homes
                by delivering effortless luxury and personalised automation.
                This blog debunks common myths about home automation, offering
                practical steps to integrate smart technology at your own pace.
                From a simplified interface to pre-set scenes, CasaDigi
                redefines smart living as intuitive, seamless, and tailored to
                your lifestyle.
              </p>
            </div>
          </div>

          <div className="w-[400px] h-[400px]">
            <img
              src={speaker}
              alt="speaker"
              className="w-full h-full object-cover rounded-xl"
            />
            <div>
              <h3 className="text-2xl font-semibold my-4 line-clamp-2">
                Redefining The Future of Multigenerational Living with Smart
                Home Automation
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 line-clamp-3">
                Explore how CasaDigi’s smart home automation enhances living
                spaces by crafting personalised environments that meet the
                unique needs of every generation.
              </p>
            </div>
          </div>
        </div>
        {/* // button */}
        <div className="py-48">
          <button className="bg-[#af776f] rounded-lg text-white h-10 px-6"> See All Articles </button>
        </div>
        
      </div>

    </div>
    

  );
};

export default CaseStudy;
