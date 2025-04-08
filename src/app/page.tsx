"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Card from "@/components/Card";
import About from "@/components/About";
import Learn from "@/components/Learn";
import Testimonials from "@/components/Testimonials";
import Register from "@/components/Register";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
  
    // Check scroll position immediately after DOM is ready
    requestAnimationFrame(() => {
      handleScroll();
    });
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement;
  
      if (anchor) {
        const id = anchor.getAttribute("href")!.substring(1);
        const el = document.getElementById(id);
  
        if (el) {
          e.preventDefault();
  
          // Let the browser finish its event loop and layout
          setTimeout(() => {
            const yOffset = -100; // Match navbar height
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }, 0); // Or use requestAnimationFrame instead
        }
      }
    };
  
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);
  
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="Home" className="scroll-smooth">
      <div className="w-full z-[-1] h-screen fixed">
        <Image
          src="/aurora.jpg"
          alt="Aurora background"
          fill
          className="z-[-1] object-cover fixed"
        />
      </div>

      <nav
        className={`fixed top-0 z-50 w-full transition-colors duration-300 border-b border-gray-500 ${
          scrolled ? "bg-gray-800/80 backdrop-blur" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between p-6">
          <h1 className="text-white text-2xl md:text-4xl font-mono whitespace-nowrap overflow-hidden border-r-4 border-white animate-typing">
            Physics at YOUR Pace
          </h1>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-yellow-300">
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            {[
              { href: "#Home", label: "Home" },
              { href: "#About", label: "About" },
              { href: "#Learn", label: "Learn" },
              { href: "#Testimonials", label: "Testimonials" },
              { href: "#Register", label: "Register" },
              { href: "#Contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-bold text-lg px-4 py-2 rounded-md bg-gradient-to-r from-yellow-200 to-yellow-400 text-transparent bg-clip-text hover:scale-110 transition-transform duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu with Slide-Down Animation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } bg-gray-800/90 backdrop-blur px-6`}
        >
          {[
            { href: "#Home", label: "Home" },
            { href: "#About", label: "About" },
            { href: "#Learn", label: "Learn" },
            { href: "#Testimonials", label: "Testimonials" },
            { href: "#Register", label: "Register" },
            { href: "#Contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block font-bold text-lg py-2 text-yellow-300 hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <h1 className="pt-[3em] pb-5 text-white text-center font-serif text-3xl md:text-5xl">Welcome to the Abode of Physics</h1>
      <div className="py-3 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl text-center text-white font-sans font-bold">
          An online space dedicated to Physics home tuitions — discover what we offer, read student stories, and get started with your learning journey.
        </h2>
      </div>

      <Card />
      <About />
      <Learn />
      <Testimonials />
      <Register />
      <Contact />
      <Footer />
    </div>
  );
}
