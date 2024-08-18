import React, { useEffect } from "react";
import CardAnimated from "../assets/Videos/bg-testimonials.mp4";
import BgProcess1 from "../assets/Videos/bg-process1.mp4";
import BgProcess2 from "../assets/Videos/bg-process2.mp4";
import BgProcess3 from "../assets/Videos/bg-process3.mp4";
import BgProcess4 from "../assets/Videos/bg-process4.mp4";
import Rectangle from "../assets/Images/Rectangle.png";
import Logo1 from "../assets/Images/logo1.png";

const Animations2 = () => {
  useEffect(() => {
    const scrollBtn = document.getElementById("scrollBtn");

    const handleClick = () => {
      document.querySelectorAll(".timeline-animation").forEach((el) => {
        el.classList.add("show-animation");
      });
    };

    scrollBtn.addEventListener("click", handleClick);

    // Clean up event listener on component unmount
    return () => {
      scrollBtn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <div className="max-w-[800px] mx-auto">
        <div className="py-32">
          <h1 className="text-white leading-10 text-4xl py-2 Robotic">The Process</h1>
          <p className="text-white text-sm">
            From day #1, we guide you through the process of <br /> creating the first version of your site.
            And once it is Completed, we make sure to keep it functional and <br /> updated.
          </p>
        </div>
        <div className="timeline-animation relative mb-20 py-20">
          <div className="absolute left-[50%] h-[100%] top-0">
            <img className="h-[100%]" src={Rectangle} alt="#" />
          </div>
          <p className="text-white Robotic scrollBtnLabel">Click To Play <span>{">"}{">"}{">"}</span></p>
          <div className="absolute left-[47%] top-[-40px] cursor-pointer" id="scrollBtn">
            <img className="" src={Logo1} alt="#" style={{width: 62, height: 62, boxShadow: '0px 0px 65px 0px #3BB9FF'}}/>
          </div>
          <div className="flex justify-between text-white scrollCardShowDiv1">
            <div className="w-full lg:w-5/12 scrollCardShow">
              <div className="flex flex-col gap-5">
                <div className="flex border border-white justify-center rounded-lg shadow-md overflow-hidden relative">
                  <video
                    src={BgProcess1}
                    alt="Card Video"
                    className="w-full h-full object-cover absolute -z-10"
                    autoPlay
                    loop
                    muted
                  ></video>
                  <div className="relative py-8 px-10">
                    <div>
                      <p className="text-[white] m-0 text-4xl text-center Robotic ps-4">1</p>
                      <p className="text-[white] m-0 ps-4 pb-3">Everything starts with an idea</p>
                      <p className="text-[white] text-center text-sm m-0 ps-4 pb-3">Let's hear yours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-5/12 mt-36 scrollCardShow">
              <div className="flex flex-col gap-5">
                <div className="flex border border-white justify-center rounded-lg shadow-md overflow-hidden relative">
                  <video
                    src={BgProcess2}
                    alt="Card Video"
                    className="w-full h-full object-cover absolute -z-10"
                    autoPlay
                    loop
                    muted
                  ></video>
                  <div className="relative py-8 px-10">
                    <div>
                      <p className="text-[white] m-0 text-4xl text-center Robotic ps-4">2</p>
                      <p className="text-[white] text-center m-0 ps-4 pb-3">
                        We transform it into a <br /> customized digital design
                      </p>
                      <p className="text-[white] text-center text-sm m-0 ps-4 pb-3">
                        Once you're happy with the <br /> result...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-white scrollCardShowDiv2">
            <div className="w-full lg:w-5/12 scrollCardShow">
              <div className="flex flex-col gap-5">
                <div className="flex border border-white justify-center rounded-lg shadow-md overflow-hidden relative">
                  <video
                    src={BgProcess3}
                    alt="Card Video"
                    className="w-full h-full object-cover absolute -z-10"
                    autoPlay
                    loop
                    muted
                  ></video>
                  <div className="relative py-8 px-10">
                    <div>
                      <p className="text-[white] m-0 text-4xl text-center Robotic ps-4">3</p>
                      <p className="text-[white] m-0 ps-4 pb-3">
                        We actually create it on the web <br /> Your digital space is ready!
                      </p>
                      <p className="text-[white] text-center text-sm m-0 ps-4 pb-3">Let's hear yours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-5/12 mt-36 scrollCardShow">
              <div className="flex flex-col gap-5">
                <div className="flex border border-white justify-center rounded-lg shadow-md overflow-hidden relative">
                  <video
                    src={BgProcess4}
                    alt="Card Video"
                    className="w-full h-full object-cover absolute -z-10"
                    autoPlay
                    loop
                    muted
                  ></video>
                  <div className="relative py-8 px-10">
                    <div>
                      <p className="text-[white] m-0 text-4xl text-center Robotic ps-4">4</p>
                      <p className="text-[white] m-0 ps-4 pb-3 text-center">PEACE OF MIND</p>
                      <p className="text-[white] text-center text-sm m-0 ps-4 pb-3">
                        Powered by Constant Support & <br /> On-demand Updates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Animations2;
