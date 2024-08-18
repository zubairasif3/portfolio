import React, { useEffect } from 'react'
import BenefitCard1 from '../assets/Images/bg-benefit1.png'
import BenefitCard2 from '../assets/Images/bg-benefit2.png'
import BenefitCard3 from '../assets/Images/bg-benefit3.png'
import ImageRow from '../assets/Images/Group-2.png'
import CardBorder from '../assets/Videos/bg-benefit4.mp4'
import ImageShadow from '../assets/Images/Light3.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const DigitalSpace = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      offset: 200 // Adjust the offset to trigger animations at the right time
    })
    AOS.refresh() // Optional: Refresh AOS to ensure it picks up new content
  }, [])
  return (
    <>
      <div className='background-shadows'>
        <div className='left-shadow'>
          <img src={ImageShadow} alt='Card Image' />
        </div>
        <div className='right-shadow'>
          <img src={ImageShadow} alt='Card Image' />
        </div>
        <div className='max-w-[800px] mx-auto'>
          <div className='py-10 Robotic'>
            <h1 className='text-white leading-10 text-4xl py-2'>
              Your own digital space
            </h1>
            <p className='text-white text-sm'>
              We craft a website where your personal brand can thrive. Using our
              team’s skillset <br /> and the right tools, we take care of all
              the technical aspects of your website so <br /> you can focus on
              your business and expertise.
            </p>
          </div>
          <div
            data-aos='fade-up'
            class='grid grid-cols-1 relative bg-dark text-white rounded-lg overflow-hidden'
          >
            <img
              src={BenefitCard1}
              alt='Card Image'
              class='w-[800px] h-full object-cover opacity-70'
            />
            <div class='absolute inset-0 p-20 flex flex-col justify-center items-end'>
              <div class=''>
                <div></div>
                <div className=''>
                  <h5 class='text-2xl mb-2 Robotic font-thin'>
                    GroundBreaking <br /> Technology
                  </h5>
                  <p class='border-b-[1px] pb-3'>
                    The best tools integrated for <br /> maximum funtionailty
                    and <br /> aesthetic
                  </p>
                  <p class='border-b-[1px] py-2 bullet-text'>
                  <span className="bullet"></span>
                    Latest Technology and <br /> design trends
                  </p>
                  <p class='border-b-[1px] py-2 bullet-text'>
                    <span className="bullet"></span>
                    Web functionalities to <br /> authomatize your tasks.
                  </p>
                  <p class='py-2 bullet-text'>
                    <span className="bullet"></span>
                    Animated Interactions
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class='grid grid-cols-2 my-6 gap-10'>
            <div
              data-aos='fade-up'
              class='relative bg-dark text-white rounded-lg overflow-hidden'
            >
              <img
                src={BenefitCard2}
                alt='Card Image'
                class='w-full h-[600px]'
              />
              <div class='absolute inset-0 p-8 flex flex-col justify-end items-start'>
                <h5 class='text-xs border py-2 px-6 rounded-3xl font-bold mb-2'>
                  AI is Generative
                </h5>
                <p class='text-3xl text-start Robotic py-3'>Generative AI</p>
                <p class='text-xs font-extralight'>
                  Let’s take advantage of AI! We complement your site with Ai
                  generated images and elements to give it the final touch.{' '}
                </p>
              </div>
            </div>
            <div
              data-aos='fade-up'
              class='max-w-sm bg-[#273a44] text-white rounded-lg shadow-md overflow-hidden flex flex-col'
            >
              <div class='flex-1 p-10'>
                <h5 class='text-2xl mb-2 Robotic'>Technical Support</h5>
                <p class='text-white mb-4'>
                  Any problem with your website? You don’t need to figure out
                  what happened. We do it for you!
                </p>
                <img src={ImageRow} alt='Card Image' />
              </div>
              <div class='flex-1'>
                <img
                  src={BenefitCard3}
                  alt='Card Image'
                  class='w-full h-full object-cover'
                />
              </div>
            </div>
          </div>
          <div
            data-aos='fade-up'
            class='m-w-[800px] bg-[#000a11] border text-white rounded-lg shadow-md flex flex-row movingGrowDiv'
          >
            {/* <div className="growing-image"><img src={ImageShadow} alt="Growing Image" /></div> */}
            <div class='flex-1 p-16'>
              <h5 class='text-2xl mb-2 Robotic'>Unlimited Reviews</h5>
              <p class='text-white text-sm mb-4'>
                We undertand that your brand constantly evolves along with you.
                That’s why we ensure that your website is up to date with that
                evolution.
              </p>
              <button className='border border-[#C6EBFF] text-xs py-2 px-3 rounded-xl'>
                BOOK A CALL
              </button>
            </div>
            <div class='flex-1'>
              <video
                src={CardBorder}
                alt='Card Video'
                class='w-full h-full object-cover'
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DigitalSpace
