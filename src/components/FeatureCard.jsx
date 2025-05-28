
const FeatureCard = (props) => {
  const { Image, title, heading, description } = props;
  console.log("props", props);
  return (
    <>
      <div className="flex">
        <div className="m-20">
            <div className="w-[480px] h-[560px] "> 
            <img className="w-full h-full object-cover" src={Image} alt="Feature Image" />    
            </div>
        </div>
        <div className="m-2">
          <div className="text-2xl pt-14 px-6 m-2"> { title } </div>
          <h1 className="text-6xl font-semibold px-6 m-4">
            { heading }
          </h1>
          <div className="text-2xl px-6 m-2">
            <p>
              { description }
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
