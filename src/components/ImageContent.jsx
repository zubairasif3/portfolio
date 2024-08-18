import React from "react";
import Group from "../assets/Images/Group.png";

const ImageContent = () => {
  return (
    <>
      <div className="bg-circle">
        <h2 className="text-[50px] text-white text-center pt-[100px] pb-10 Robotic checkOurPortfolio">
          Let's Talk And <br /> Create!
        </h2>
        <div className="flex justify-center py-10 mb-10">
          <img className="h-[500px]" src={Group} alt="#" />
        </div>
      </div>
    </>
  );
};

export default ImageContent;
