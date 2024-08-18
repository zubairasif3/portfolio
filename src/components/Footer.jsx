import React from "react";
import "../Css/style.css";
import Logo from "../assets/Images/logo.png";
import facebook from "../assets/Images/facebook2.png";
import whatsapp from "../assets/Images/whatsapp2.png";
import linkIn from "../assets/Images/linkedin2.png";
import instagram from "../assets/Images/instagram2.png";
import background from "../assets/Images/BG-black.png";

const Footer = () => {
  const scrollTopRef = React.useRef(null);

  // Show or hide the "Back to top" button based on scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        scrollTopRef.current.style.display = "inline-block";
      } else {
        scrollTopRef.current.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {/* <div>
        <img className="" src={background} alt="#" />
      </div> */}
      <div className="bg-footer-img">
        <div className="flex justify-center pt-6">
          <img className="h-[150px]" src={Logo} alt="#" />
        </div>
        <div className="text-center text-white text-[30px] mb-20 leading-9 Robotic">
          <h3>
            "Changes Is Hard At First, Messy In <br /> The Middle, And Gorgeous
            At <br /> The End"
          </h3>
          <h3>-Robin Sharma</h3>
        </div>
        <div className="Robotic grid grid-cols-3 items-center justify-center gap-72 pt-20 pb-10 mx-16">
          <div className="flex gap-4">
            <img className="h-[70px] " src={instagram} alt="#" />
            <img className="h-[70px] " src={linkIn} alt="#" />
            <img className="h-[70px] " src={facebook} alt="#" />
            <img className="h-[70px] " src={whatsapp} alt="#" />
          </div>
          <div>
            <button
              onClick={scrollToTop}
              className="back-to-top"
              ref={scrollTopRef}
            >
              > Back to top
            </button>
          </div>
          <div>
            <p className="text-end text-2xl font-bold text-white">
              Escazú, Costa Rica
            </p>
            <p className="text-end text-2xl font-bold text-white">
              Austin, Texas
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
