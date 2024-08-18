import React, { useEffect, useState } from 'react';
import SpinningCard from '../assets/Images/spinning-card.png'
import SpinningCard1 from '../assets/Images/spinning-card-1.png'
import SpinningCard2 from '../assets/Images/spinning-card-2.png'
import SpinningCard3 from '../assets/Images/spinning-card-3.png'
import SpinningCard4 from '../assets/Images/spinning-card-4.png'
import SpinningCard5 from '../assets/Images/spinning-card-5.png'
import Porfile from '../assets/Images/profile.png'

function Hero () {
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section');
      const heroSectionTop = heroSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      console.log(heroSectionTop);
      console.log((windowHeight - (windowHeight/2)));
      if (heroSectionTop <= (windowHeight - (windowHeight/2))) {
        console.log(12);
        heroSection.classList.add('show');
      } else {
        console.log(34);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check in case the page is loaded with scroll
    handleScroll();

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='relative min-h-[100vh] nav_blue pt-32 hero-section'>
      <div className='flex w-full items-center justify-center rotatingCardMainDiv'>

          <div className='relative'>
          <img
            src="/bg-element.png"
            alt="Custom Shape"
            className="max-w-[1000px] w-full px-3 relative z-10"
          />
          {/* <video
            src="/Video/bg-code.mp4"
            autoPlay
            className="absolute top-0 left-[2%] h-full w-[50%] z-0"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              top: '83px',
              left: '60px',
              height: 'calc(100% - 120px)',
              objectFit: "fill"
            }}
          ></video> */}
            <div className='absolute inset-0 grid grid-cols-2 gap left-20 top-32 z-20'>
              <div className='pt-10'>
                <div className="rotatingCard-container">
                  <div className="rotatingCard">
                    <div className="rotatingCard-front">
                      <div className='bg-[#687C87] rounded-lg shadow-md overflow-hidden'>
                        <div className='px-4 py-2 font-semibold flex justify-between'>
                          <div>
                            <img
                              className='h-[80px] w-[100px] rounded-lg absolute top-[-176px] z-50 hoverTranslate3D'
                              src={SpinningCard}
                              alt=''
                            />
                          </div>
                          <div className='flex text-[10px] text-white list-none gap-2'>
                            <li className='py-1'>Home</li>
                            <li className='py-1'>About</li>
                            <li className='py-1'>Component</li>
                            <li className='border border-white rounded-md px-1 py-1'>
                              Feather
                            </li>
                          </div>
                        </div>
                        <div className='p-4 pb-2 flex gap-[10px]'>
                          <div className='flex gap-[10px] relative z-[50] w-[200px] flex-none'>
                            <img
                              className='h-[160px] w-[100px] hoverTranslate3D'
                              src={SpinningCard1}
                              alt=''
                            />
                            <div className='flex flex-col gap-[10px] '>
                              <img
                                className='h-[75px] w-[90px] rounded-lg hoverTranslate3D'
                                src={SpinningCard2}
                                alt=''
                              />
                              <img
                                className='h-[75px] w-[90px] rounded-lg hoverTranslate3D'
                                src={SpinningCard3}
                                alt=''
                              />
                            </div>
                          </div>
                          <div class='bg-[#687C87] shadow-xl rounded-lg overflow-hidden py-3 flex-grow-1 hoverTranslate3D'>
                            <div className='px-5'>
                              <h5 class='text-2xl font-bold Robotic'>CHOSE YOUR</h5>
                            </div>
                            <div class='px-5 grid grid-cols-3 gap-14'>
                              <div>
                                <h5 class='text-2xl font-bold Robotic'>NEXT</h5>
                                <h5 class='text-2xl font-bold Robotic'>QUEST</h5>
                              </div>
                              <div className='col-span-2'>
                                <p className='text-[7px]'>
                                  Lorem ipsum dolor sit amet consectetur adipisicing
                                  elit. Iusto cum officiis sequi omnis debitis
                                  consequuntur?
                                </p>
                              </div>
                            </div>
                            <div className='px-5 mt-4'>
                              <button className='text-[7px] px-4 py-1 bg-black text-white rounded-2xl'>
                                Join Community
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className='px-4 flex gap-1'>
                          <div className='flex gap-3 flex-none'>
                            <img
                              className='h-[90px] w-[90px] rounded-lg hoverTranslate3D'
                              src={SpinningCard4}
                              alt=''
                            />
                            <img
                              className='h-[90px] w-[80px] rounded-lg hoverTranslate3D'
                              src={SpinningCard5}
                              alt=''
                            />
                          </div>
                          <div className='flex gap-2 py-4 flex-grow-1'>
                              <div className='pl-2 w-[125px]'>
                                <p className='text-xs'>Get ready to embark on a new workroad</p>
                              </div>
                              <div className='pl-2 flex flex-col gap-1 flex-grow-1'>
                                  <div className='flex bg-black text-white rounded-lg px-1 py-1 items-center hoverTranslate3D'>
                                    <img className='h-[20px]' src={Porfile} alt="" />
                                    <p className='text-[8px] px-1'>Lorem, ipsum.</p>
                                  </div>
                                  <div className='flex bg-black text-white rounded-lg px-1 py-1 items-center hoverTranslate3D'>
                                    <img className='h-[20px]' src={Porfile} alt="" />
                                    <p className='text-[8px] px-1'>Lorem, ipsum.</p>
                                  </div>
                                  <div className='flex bg-black text-white rounded-lg px-1 py-1 items-center hoverTranslate3D'>
                                    <img className='h-[20px]' src={Porfile} alt="" />
                                    <p className='text-[8px] px-1'>Lorem, ipsum.</p>
                                  </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rotatingCard-back text-white">
                      <div className='text-black p-1 text-center max-w-[360px] m-auto'>
                        <img className='h-[80px] hoverTranslate3D mx-auto mb-5' src={Porfile} />
                        <h3 className='text-[24px] font-extrabold opacity-70 px-1 fw-700'>Error 404: Page not found</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='text-white'>
                <div className='p-6 max-w-[360px] ml-auto'>
                  <div className='text-[45px] Robotic pb-3 flex gap-3'>
                    Be
                    <div className="flip-text">
                      <span>found</span>
                      <span>Known</span>
                      <span>recognized</span>
                    </div>
                  </div>
                  <p className='text-md'>
                    Does your <strong>website</strong> reflect the <strong>excellence</strong> of your work, or is
                    it holding you back?
                  </p>
                  <p className='text-sm py-3'>
                    LET'S TRANSFORM YOUR <strong>DIGITAL PRECENSE...</strong>
                  </p>
                  <div className="bullet-text pb-2">
                    <span className="bullet"></span>
                    <div>
                      <h4 className='font-bold'>Stand Out!</h4>
                      <p className='text-[16px]'>
                        Difference your craft, embrace your uniqueness.
                      </p>
                    </div>
                  </div>
                  <div className="bullet-text pb-2">
                    <span className="bullet"></span>
                    <div>
                      <h4 className='font-bold'>Make It Yours</h4>
                      <p className='text-[16px]'>
                        Unlike in social media, you have unlimited options here.
                      </p>
                    </div>
                  </div>
                  <div className="bullet-text pb-2">
                    <span className="bullet"></span>
                    <div>
                      <h4 className='font-bold'>Make It Functional</h4>
                      <p className='text-[16px]'>
                        Automate everyday tasks in your site. Focus on your skill.
                      </p>
                    </div>
                  </div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className='flex w-full items-center justify-center mt-[-50px] mb-[30px]'>
        <img
          src='light.png'
          alt=''
          width={600}
        />
      </div>
    </div>
  )
}

export default Hero
