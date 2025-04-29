import golden from "../assets/golden_gradient.jpg";
const ImageText = ({ text }) => {
  return (
    <>
      <div className="">
        <div
          className="bg-clip-text text-transparent leading-tight"
          style={{
            backgroundImage: `url(${golden})`,
            backgroundSize: "300%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            WebkitBackgroundClip: "text",
          }}
        >
          {text}

        </div>
      </div>
    </>
  );
};

export default ImageText;
