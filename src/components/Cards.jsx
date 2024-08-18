import React from "react";
import "../Css/style.css";
import ImageCard1 from "../assets/Images/Tutiitips.png";
import ImageCard2 from "../assets/Images/Abraham.png";
import ImageCard3 from "../assets/Images/ADV.png";

function Cards() {
  return (
    <div className="bg-card-img relative nav_blue pt-[85px]">
      <div className="text-white text-center Robotic checkOurPortfolio">Check our Portfolio</div>
      <div className="text-white text-center mt-[60px]">
        <p className="text-sm font-thin">
          Check out the brands we have helped to get <br /> their place in the
          web.
        </p>
        <p className="text-sm font-thin pt-3 border-b-[1px] inline-block">
          Go to Portfolio >>>
        </p>
      </div>
      <div className="flex w-full h-full items-center justify-center mt-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* First Card */}
          <div className="hover-container">
            <div className="image-overlay">
              <img className="hover-image" src={ImageCard1} alt="#" />
            </div>
            <div className="text-content">
              <h2>Tutiitips</h2>
            </div>
          </div>
          {/* Center Card */}
          <div className="hover-container large-card">
            <div className="image-overlay">
              <img className="hover-image" src={ImageCard2} alt="#" />
            </div>
            <div className="text-content">
              <h2>Abraham Studio</h2>
            </div>
          </div>
          {/* Third Card */}
          <div className="hover-container">
            <div className="image-overlay">
              <img className="hover-image" src={ImageCard3} alt="#" />
            </div>
            <div className="text-content">
              <h2>Architect Du Visage</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
