import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div id='Testimonials'>
      <section className="mt-[6em] px-6 py-[50px] bg-white/80 w-full sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] rounded-3xl text-black shadow-xl backdrop-blur-md 
                          mx-auto md:ml-10 md:mr-0">
        <h1 className="text-3xl font-bold text-center mb-10">Testimonials</h1>

        {/* Testimonial 1 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10">
          <Image
            src="/ssp.jpg"
            alt="Shashwat Pandey"
            width={160}
            height={160}
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-white shadow-md hover:scale-105 duration-300"
          />
          <div className="italic text-gray-900 max-w-3xl text-center md:text-left">
            <p className="text-base sm:text-lg md:text-lg lg:text-xl">
              “Rajeev sir is a really experienced and down-to-earth teacher, who makes Physics very easy and interesting to study, through real-life and practical examples. His in-depth knowledge of the subject is testament to my success in class 12 as well as the JEE Main exam. I am really grateful to sir for strengthening my Physics.”
            </p>
            <p className="pt-4 text-sm sm:text-base md:text-md lg:text-lg italic">
              — Shashwat Pandey, secured 94 percentile in JEE Main 2021.
            </p>
          </div>
        </div>

        {/* Testimonial 2 (Image on right) */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6 mb-10">
          <Image
            src="/ssp2.jpg"
            alt="Satvik Pandey"
            width={160}
            height={160}
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-white shadow-md hover:scale-105 duration-300"
          />
          <div className="italic text-gray-900 max-w-3xl text-center md:text-left">
            <p className="text-base sm:text-lg md:text-lg lg:text-xl">
              “A very humble and approachable person; makes you comfortable in asking the simplest of queries. I prepared for NEET(UG) under his guidance.”
            </p>
            <p className="pt-4 lg:text-right text-sm sm:text-base md:text-md lg:text-lg italic">
              — Satvik Pandey, NEET UG 2020 aspirant.
            </p>
          </div>
        </div>

        {/* Testimonial 3 */}
        {/* <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10">
          <Image
            src="/testimonial3.jpg"
            alt="Sneha Gupta"
            width={160}
            height={160}
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-white shadow-md hover:scale-105 duration-300"
          />
          <div className="italic text-gray-900 max-w-3xl text-center md:text-left">
            <p className="text-base sm:text-lg md:text-lg lg:text-xl">
              “Rajeev sir's way of explaining tough concepts in a relatable way was a game changer for me. He truly cares for his students' progress.”
            </p>
            <p className="pt-4 text-sm sm:text-base md:text-md lg:text-lg italic">
              — Sneha Gupta, Class 12 CBSE Topper 2023
            </p>
          </div>
        </div> */}

      </section>
    </div>
  )
}

export default Testimonials
