import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-blue-900 border-t-[0.5px] border-white text-white py-6 text-center text-sm">
            <p>📞 +91 96250 81353, +91 9811340754 | 📧 rajeeva.tutor@gmail.com</p>
            <p>© {new Date().getFullYear()} Rajeeva Kumar – Physics Home Tuitions</p>
        </footer>
    </div>
  )
}

export default Footer