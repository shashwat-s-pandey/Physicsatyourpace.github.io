'use client';
import { useState } from "react";
import { useRef } from "react";
import { db } from "@/lib/firebaseConfig"; // adjust path if needed
import { collection, addDoc } from "firebase/firestore";

export default function RegisterSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    standard: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement | null>(null);

  const scrollToForm = () => {
    if (formRef.current) {
      const offset = 100; // Adjust this value as needed
      const elementPosition = formRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
      
        try {
          await addDoc(collection(db, "registrations"), {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            standard: formData.standard,
            timestamp: new Date()
          });
      
          setSubmitted(true);
          setFormData({ name: '', email: '', phone: '', standard: '' });
          setTimeout(() => setSubmitted(false), 5000);
        } catch (error) {
          console.error("Error submitting form: ", error);
        } finally {
          setIsSubmitting(false);
        }
      };

  return (
    <section id="Register" className="mt-20 py-20 bg-blue-950 text-white text-center px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to Join the Learning Journey?</h2>
        <p className="text-lg mb-6">Register now to start your personalized Physics home tuition experience.</p>

        {/* CTA Button — Replace action as needed */}
        <button
            onClick={scrollToForm}
            className="mb-20 mt-10 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300"
            >
            Register Now!
        </button>

        {/* Always Visible Form */}
        <div ref={formRef} className="bg-white text-black p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Registration Form</h3>
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Phone Number</label>
              <input
                type="tel"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Class / Standard</label>
              <select
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
                value={formData.standard}
                onChange={(e) => setFormData({ ...formData, standard: e.target.value })}
              >
                <option value="">Select</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
                <option value="jee">JEE</option>
                <option value="neet">NEET</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
              )}
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>

        {submitted && (
          <div className="text-green-500 font-semibold mt-4 transition-opacity duration-300">
            {`Registration successful! We'll reach out to you soon.`}
          </div>
        )}
      </div>
    </section>
  );
}
