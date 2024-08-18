import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className=" w-full flex gap-8 justify-between sm:justify-center  mt-5  text-center px-2">
        <div className=" bg-black   rounded-lg shadow-custom flex-wrap ">
          <img src="/icon5.png" className="w-[40px]" />
        </div>
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="sm:flex hidden gap-8 isopen bg-black px-10 py-3 items-center opacity-[0.9] rounded-[0.7rem] shadow-custom flex-wrap text-[10px] ">
          <span className="cursor-pointer">Benefits</span>
          <span className="cursor-pointer">Process</span>
          <span className="cursor-pointer">Testimonials</span>
          <span className="cursor-pointer">Portfolio</span>
          <span className="cursor-pointer">Support</span>
          <span className="text-[11px] underline cursor-pointer">
            BOOK A CALL
          </span>
        </div>
      </nav>
      {isOpen && (
        <div className="w-full absolute  flex justify-center px-14 ">
          <div className="sm:hidden flex flex-col max-w-[400px] w-full gap-4 justify-center items-center h-auto bg-black px-10 py-3 justify-center-center opacity-[0.9] rounded-[0.7rem] shadow-custom flex-wrap text-[10px] ">
            <span className="cursor-pointer">Benefits</span>
            <span className="cursor-pointer">Process</span>
            <span className="cursor-pointer">Testimonials</span>
            <span className="cursor-pointer">Portfolio</span>
            <span className="cursor-pointer">Support</span>
            <span className="text-[11px] underline cursor-pointer">
              BOOK A CALL
            </span>
          </div>
        </div>
      )}
      
    </>
  );
};

export default Navbar;
