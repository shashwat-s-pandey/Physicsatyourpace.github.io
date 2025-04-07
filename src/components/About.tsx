import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='About'>
      <section className="scroll-mt-28 mt-10 px-6 py-[80px] bg-white/80 w-full sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] 
                          rounded-3xl text-black shadow-xl backdrop-blur-md mx-auto md:ml-10 md:mr-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
          
          {/* Profile Picture and Quote */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image
                src="/rajeevakumarpfp.jpg"
                alt="Rajeeva Kumar"
                width={208} // md:w-52 = 208px
                height={208} // md:h-52 = 208px
                className="w-48 h-48 md:w-52 md:h-52 object-cover rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <p className="mt-6 text-gray-800 italic text-base md:text-md max-w-xs">
              “Physics is the key to understanding how our universe works — and with the right guidance, anyone can master it.”
            </p>
          </div>

          {/* About Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
              About Me
            </h2>

            <p className="text-2xl font-semibold text-gray-800">Rajeeva Kumar</p>
            <p className="text-lg mt-2 text-gray-700 leading-relaxed">
              I am a passionate Physics educator with a deep belief that strong fundamentals build lasting academic success.
              With over two decades of experience teaching senior secondary students, I specialize in guiding learners through
              complex concepts with clarity, making Physics both engaging and accessible.
            </p>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Professional Background</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                I hold a B.E. degree and bring over 20 years of experience in teaching Physics to senior secondary students.
                My approach focuses on clarity of concepts, real-world applications, and exam-oriented preparation for JEE & NEET.
              </p>
            </div>
          </div>
        </div>

        <h2 className="mt-12 text-center text-xl font-mono text-gray-900">
          More than <span className="font-bold text-blue-800">two hundred</span> of my students have qualified in both engineering and medical entrance exams.
        </h2>
      </section>
    </div>
  )
}

export default About
