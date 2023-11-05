// 'use client';

// import { Carousel } from 'flowbite-react'

const Banner = () => {
  // const images = [
  //     {
  //         img:'https://i.ibb.co/z6HWFXx/safari.jpg'
  //     },
  //     {
  //         img:'https://i.ibb.co/Nyb5xBD/french.jpg'
  //     },
  //     {
  //         img:'https://i.ibb.co/z6HWFXx/safari.jpg'
  //     },
  //     {
  //         img:'https://i.ibb.co/SJFZ4N0/fitness.jpg'
  //     },
  // ]
  return (
    <div className=" h-64 md:h-full bg-[#f1f2f3] md:mb-20">
      <section className=" ">
        
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

          <div className="mr-auto text-left place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl lg:text-6xl dark:text-white">
            Welcome to our <span className="text-[#5869DA]">Unscripted</span> Canvas.
            </h1>
            <p className="max-w-2xl mb-6  font-semibold lg:mb-8 md:text-lg lg:text-xl text-[#6c757d]">
            Embrace the Unscripted Journey of Authenticity, Creativity, and Endless Discoveries.
            </p>
            
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Lets Read
            </a>
          </div>

          
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://i.ibb.co/jJbJvzD/featured.png"
              alt="mockup" className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
