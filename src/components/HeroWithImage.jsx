import customerImage from "../assets/customers-photo.jpeg"
import golden from "../assets/golden_gradient.jpg";

const HeroWithImage = () => {
  return (
    <div className="relative h-[600px] w-full">
      <img
        src={customerImage}
        alt="hero image"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="text-9xl font-semibold bg-clip-text text-transparent leading-tight"
                style={{
                  backgroundImage: `url(${golden})`,
                  backgroundSize: "300%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  WebkitBackgroundClip: "text",
                }}
              >
                 Discover truly<br />
                 seamless living
      
              </div>
            </div>
    </div>
  );
};

export default HeroWithImage;
