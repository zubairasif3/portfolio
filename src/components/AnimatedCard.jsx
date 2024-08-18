import React, { useEffect } from "react";
import Ellipse from "../assets/Images/Ellipse.png";
import CardAnimated from "../assets/Videos/bg-testimonials.mp4";

const AnimatedCard = () => {
  useEffect(() => {
    const videoHoverCards = document.querySelectorAll(".videoHoverCard");

    videoHoverCards.forEach((card) => {
      const video = card.querySelector("video");

      card.addEventListener("mouseover", () => {
        video.play();
      });

      card.addEventListener("mouseout", () => {
        video.pause();
      });
    });

    // Clean up event listeners on component unmount
    return () => {
      videoHoverCards.forEach((card) => {
        const video = card.querySelector("video");

        card.removeEventListener("mouseover", () => {
          video.play();
        });

        card.removeEventListener("mouseout", () => {
          video.pause();
        });
      });
    };
  }, []);

  return (
    <>
      <div className="max-w-[800px] mx-auto">
        <div className="py-10">
          <h1 className="text-white leading-10 text-5xl py-2 Robotic">
            Committed To Delivering Delight
          </h1>
          <p className="text-white text-sm">
            We're all about creating customer wows! Read what our customers are
            saying <br /> and see why we're so passionate about exceeding
            expectations!
          </p>
        </div>
        <div className="grid grid-cols-3 relative bg-dark text-white rounded-lg overflow-hidden mb-10 gap-5">
          <div className="flex flex-col max-w-sm max-h-screen rounded-lg shadow-md overflow-hidden relative videoHoverCard">
            <video
              src={CardAnimated}
              alt="Card Video"
              className="w-full h-full object-cover absolute -z-10"
              loop
              muted
            ></video>
            <div className="relative">
              <div className="img-div">
                <img
                  src={Ellipse}
                  alt="Card Image"
                  className="w-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs text-center px-3 py-2">
                  Lorem ipsum dolor sit amet consectetur. Orci ipsum ac
                  consectetur dui mauris tincidunt convallis. Amet phasellus et
                  mi mauris. <br />
                  Et nisi quam tempor ornare vestibulum erat risus nunc. Sed
                  lectus ac praesent quis. Nullam volutpat gravida.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-sm max-h-screen rounded-lg shadow-md overflow-hidden relative videoHoverCard">
            <video
              src={CardAnimated}
              alt="Card Video"
              className="w-full h-full object-cover absolute -z-10"
              loop
              muted
            ></video>
            <div className="relative">
              <div className="img-div">
                <img
                  src={Ellipse}
                  alt="Card Image"
                  className="w-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs text-center px-3 py-2">
                  Figma ipsum component variant main layer. Bold stroke main
                  vector frame. Font move arrow comment component draft fill
                  edit italic union. Stroke invite invite library editor
                  community. Star ipsum star export create boolean text clip
                  reesizing layer. Effect pixel bold rotate variant align rotate
                  pixel thumbnail. Content.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-sm max-h-screen rounded-lg shadow-md overflow-hidden relative videoHoverCard">
            <video
              src={CardAnimated}
              alt="Card Video"
              className="w-full h-full object-cover absolute -z-10"
              loop
              muted
            ></video>
            <div className="relative">
              <div className="img-div">
                <img
                  src={Ellipse}
                  alt="Card Image"
                  className="w-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs text-center px-3 py-2">
                  Figma ipsum component variant main layer. Bold stroke main
                  vector frame. Font move arrow comment component draft fill
                  edit italic union. Stroke invite invite library editor
                  community. Star ipsum star export create boolean text clip
                  reesizing layer. Effect pixel bold rotate variant align rotate
                  pixel thumbnail. Content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mb-52 justify-center pt-10">
          <button className="border text-white border-[#C6EBFF] text-xs py-2 px-3 rounded-xl bookCallButton">
            BOOK A CALL
          </button>
        </div>
      </div>
    </>
  );
};

export default AnimatedCard;
