import React from "react";
import "../Css/style.css";

const Content = () => {
  return (
    <>
      <div className="bg-content-img relative nav_blue pt-32">
        <div className="max-w-[800px] mx-auto">
          <div>
            <p className="text-white text-2xl Robotic">
              NOT SURE FOR WHAT KIND OF WEBSITE <br /> RIGHT FOR YOU?
            </p>
            <p className="text-white text-lg py-2">Find out now!</p>
          </div>
          <div>
            <button className="border rounded-xl px-6 py-2 text-sm text-[#C6EBFF]">
                Find the website for me 
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
