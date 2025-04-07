import React from 'react'

const Learn = () => {
  return (
    <div id="Learn">
      <section className="mt-24 py-20 px-6 md:px-10 bg-white/80 w-full sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] rounded-3xl text-black shadow-xl backdrop-blur-md ml-auto mr-10">

        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10 border-b-2 border-gray-300 pb-3">
          Learn with Me
        </h1>

        {/* Teaching Approach */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">Teaching Approach</h3>
          <p className="text-lg text-gray-700 mb-2">
            My methodology centers on <span className="font-medium text-blue-800">concept-first learning</span>{`— where understanding the "why" behind every formula and phenomenon takes priority.
            Physics becomes simpler and more enjoyable when taught using`} <span className="italic">real-life analogies</span>{`, visual aids, and intuitive problem-solving.`}
          </p>
          <p className="text-lg text-gray-700">
            I ensure that every concept is fully understood before progressing further — each student gets time to <span className="font-medium text-blue-800">truly grasp</span> the topic.
          </p>
        </div>

        {/* What I Offer */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">What I Offer</h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            <li>One-on-one sessions</li>
            <li>Tuition for Class 11, 12 as well as JEE and NEET</li>
            <li>Flexible tuition schedules (home-based)</li>
            <li>{`Customized attention based on each student's pace`}</li>
          </ul>
        </div>

        {/* Mode of Teaching */}
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">Mode of Teaching</h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            <li>Offline (In-person home tuitions)</li>
            <li>Online (via Google Meet, Zoom, or any preferred platform)</li>
          </ul>
        </div>
        
      </section>
    </div>
  )
}

export default Learn
