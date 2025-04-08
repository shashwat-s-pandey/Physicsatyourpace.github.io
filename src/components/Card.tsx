import React from 'react';

const Card = () => {
  return (
    <section className="py-12 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold mb-12 text-white text-shadow-cool">
          Why Choose Us?
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: "🧪",
            title: "Concept-based Learning",
            description:
              "Deep understanding through simplified explanations and real-life applications.",
          },
          {
            icon: "📚",
            title: "Personalized Attention",
            description:
              "One-on-one focus to match each student’s pace and learning style.",
          },
          {
            icon: "🕒",
            title: (
              <>
                Flexible <br /> Scheduling
              </>
            ),
            description:
              "Convenient tuition timings that fit your academic and personal schedule.",
          },
          {
            icon: "🎯",
            title: (
              <>
                Targeted <br /> Preparation
              </>
            ),
            description:
              "Structured approach for Class 11–12 as well as JEE & NEET exams.",
          },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/80 text-gray-900 p-6 rounded-2xl shadow-lg border border-yellow-300 hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-yellow-500 to-yellow-700 text-transparent bg-clip-text">
                {item.title}
              </h4>
              <p className="text-sm font-semibold leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
