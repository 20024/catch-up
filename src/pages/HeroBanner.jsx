import React from 'react';
import { Link } from "react-router-dom";
import { Typewriter } from "motion-plus/react"

function HeroBanner() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Stay Connected with <br/>
          <span className="text-yellow-300"><Typewriter speed="slow" backspace="all">CatchUp</Typewriter></span>
        </h1>
        <p className="text-lg text-blue-100 mb-8">
          Share your moments, follow your friends, and catch up with the world — all in one place.
        </p>
        <div className="space-x-4">
          <a
            href="/feed"
            className="bg-yellow-400 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Get Started
          </a>
          <Link to="/LearnMore"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <img
          src="/public/images/social.jpg"
          alt="CatchUp Social Media Banner"
          className="w-80 md:w-96 rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}

export default HeroBanner;
