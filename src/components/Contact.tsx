import React from 'react'

const Contact = () => {
  return (
    <div id='Contact'>
        <section className="bg-blue-950 text-white border-t-[0.5px] border-white py-20 px-6" id="contact">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
            <p className="text-lg text-gray-300 mb-10">
              Reach out anytime for queries about classes, availability, or learning paths. I&apos;m just a call or message away.
            </p>

            <div className="space-y-6 text-left sm:text-center">
              <div className="flex items-center justify-center space-x-4">
                <span className="text-yellow-400 text-2xl">📞</span>
                <span className="text-lg">+91 96250 81353,</span>
                <span className="text-lg">+91 98113 40754</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <span className="text-yellow-400 text-2xl">📧</span>
                <span className="text-lg">rajeeva.tutor@gmail.com</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <span className="text-yellow-400 text-2xl">📍</span>
                <span className="text-lg">326 Ashirwad Apartment, Mayur Vihar Phase-3, East Delhi</span>
              </div>
            </div>
          </div>
        </section>

    </div>
  )
}

export default Contact