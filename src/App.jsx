import Header from "./components/Header";
import Body from "./components/Body";
import Feature from "./components/Feature";
import PartySection from "./components/PartySection";
import HorizontalScrool from "./components/HorizontalScrool";
import Footer from "./components/Footer";
import HeroWithImage from "./components/HeroWithImage"
import CaseStudy from "./components/CaseStudy";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      {/* <div className="h-[1500px] bg-[linear-gradient(to_top,#faf5e8_10%,#ffffff_80%,#faf5e8_100%)]">
        <Header />
      </div> */}
      <div>
        <Body />
      </div>
      <div className="bg-[linear-gradient(to_top,#faf5e8_10%,#ffffff_80%,#faf5e8_100%)]">
        <Feature />
      </div>
      <div className="h-[150px] bg-[#faf5e8]">
        {/* <Header /> for extra space */}
      </div>
      <div className=" bg-black">
        <PartySection />
      </div>
      <div className="">
        <HorizontalScrool />
      </div>
      <div className="">
        <Experience />
      </div>
      <div className="">
        <HeroWithImage />
      </div>
      <div className="">
        <CaseStudy />
      </div>
      
    </>
  );
}

export default App;
