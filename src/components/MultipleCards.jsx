import React, { useEffect } from 'react'
import BgSupport1 from '../assets/Videos/bg-support1.mp4'
import BgSupport4 from '../assets/Videos/bg-support4.mp4'
import BgSupport5 from '../assets/Videos/bg-support5.mp4'
import BgSupport7 from '../assets/Videos/bg-support7.mp4'
import AOS from 'aos'
import 'aos/dist/aos.css'

const MultipleCards = () => {
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
      <div className='max-w-[800px] mx-auto'>
        <div className='pt-32 pb-14'>
          <h1 className='text-white leading-10 text-5xl  Robotic pb-6'>
            Peace Of Mind Plan
          </h1>
          <p className='text-white text-sm'>
            Hassle-Free Website Management Content. Aurigital actively hosts,
            manages, <br /> secures and update your website, so you can focus on
            growing your business.
          </p>
        </div>
        <div class='grid grid-cols-2 h-[400px] relative bg-dark text-white rounded-lg overflow-hidden mb-10 gap-5'>
          <div
            data-aos='fade-up'
            class='flex flex-col max-w-sm max-h-screen border border-white rounded-lg shadow-md overflow-hidden relative'
          >
            <video
              src={BgSupport1}
              alt='Card Video'
              class='w-full h-full object-cover absolute -z-10'
              autoPlay
              loop
              muted
            ></video>
            <div className='relative pt-64'>
              <div>
                <p className='text-lg px-3 pt-4 Robotic'>
                  Always Fresh, Always Relevant
                </p>
                <p className='text-sm px-3'>
                  We keep your website evolving by updating it with the latest
                  media assets, promotions, and information, ensuring it always
                  represents your brand at its best.
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <div
              data-aos='fade-up'
              className='p-5 border border-white rounded-lg'
            >
              <p className='text-[#C6EBFF] m-0 text-lg Robotic'>
                Regular Updates
              </p>
              <p className='text-[#C6EBFF] m-0'>
                Keep your site fresh with new media and information.
              </p>
            </div>
            <div
              data-aos='fade-up'
              className='p-5 border border-white rounded-lg'
            >
              <p className='text-[#C6EBFF] m-0 text-lg Robotic'>
                Technical Support
              </p>
              <p className='text-[#C6EBFF] m-0'>
                Continuous assistance for any website <br /> issue.
              </p>
            </div>
            <div
              data-aos='fade-up'
              class='flex border border-white rounded-lg shadow-md overflow-hidden relative'
            >
              <video
                src={BgSupport4}
                alt='Card Video'
                class='w-full h-full object-cover absolute -z-10'
                autoPlay
                loop
                muted
              ></video>
              <div className='relative pt-8 '>
                <div>
                  <p className='text-[#C6EBFF] m-0 text-lg Robotic ps-4'>
                    Technical Support
                  </p>
                  <p className='text-[#C6EBFF] m-0 ps-4 pb-3'>
                    Continuous assistance for any website <br /> issue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-5 text-white'>
          <div>
            <div className='flex flex-col gap-5'>
              <div
                data-aos='fade-up'
                class='flex border border-white rounded-lg shadow-md overflow-hidden relative'
              >
                <video
                  src={BgSupport5}
                  alt='Card Video'
                  class='w-full h-full object-cover absolute -z-10'
                  autoPlay
                  loop
                  muted
                ></video>
                <div className='relative py-3'>
                  <div>
                    <p className='text-[#C6EBFF] m-0 text-md Robotic text-center'>
                      Manage and Update of Integrations
                    </p>
                    <p className='text-[#C6EBFF] text-md m-0 text-center'>
                      Everything working together <br /> smoothly.
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-aos='fade-up'
                className='p-2 border border-white rounded-lg'
              >
                <p className='text-[#C6EBFF] m-0 py-2 text-md Robotic text-center'>
                  Are you ready to work <br /> with us?
                </p>
                <div className='flex justify-center pb-1'>
                  <button className='text-[#C6EBFF] text-sm border p-2 rounded-xl'>
                    Message Aurigical
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-2'>
            <div
              data-aos='fade-up'
              class='flex border border-white rounded-lg shadow-md overflow-hidden relative'
            >
              <video
                src={BgSupport7}
                alt='Card Video'
                class='w-full h-full object-cover absolute -z-10'
                autoPlay
                loop
                muted
              ></video>
              <div data-aos='fade-up' className='relative pt-40 '>
                <div>
                  <p className='text-lg px-3 Robotic'>Personalized Service</p>
                  <p className='text-sm px-3 pb-4'>
                    We keep your website evolving by updating it with the latest
                    media assets, promotions, and information, ensuring it
                    always represents your brand at its best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MultipleCards
