import React from "react";
import Footer from "../component/Footer";
import NormalHeader from "../component/Headers/NormalHeader";

function LearnMore() {
  return (
    <>
    <NormalHeader/>
    <section className="bg-gray-100 py-20 px-6 md:px-16">
        
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Why Choose CatchUp?</h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          CatchUp makes connecting with friends, sharing moments, and discovering trending content easier and more fun than ever.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {/* Connect */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <img src="/icons/connect.svg" alt="Connect" className="mx-auto mb-4 w-12"/>
          <h3 className="text-xl font-bold mb-2 text-blue-500">Connect</h3>
          <p className="text-gray-600">Follow friends and stay updated with their posts.</p>
        </div>

        {/* Share */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <img src="/icons/share.svg" alt="Share" className="mx-auto mb-4 w-12"/>
          <h3 className="text-xl font-bold mb-2 text-blue-500">Share</h3>
          <p className="text-gray-600">Post updates, images, and videos effortlessly.</p>
        </div>

        {/* Explore */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <img src="/icons/explore.svg" alt="Explore" className="mx-auto mb-4 w-12"/>
          <h3 className="text-xl font-bold mb-2 text-blue-500">Explore</h3>
          <p className="text-gray-600">Discover trending content and interesting people.</p>
        </div>

        {/* Engage */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <img src="/icons/engage.svg" alt="Engage" className="mx-auto mb-4 w-12"/>
          <h3 className="text-xl font-bold mb-2 text-blue-500">Engage</h3>
          <p className="text-gray-600">Like, comment, and interact with posts easily.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <a
          href="/signup"
          className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
        >
          Join CatchUp Now
        </a>
      </div>
      </section>
    <div>
      <Footer/>
      </div>
    </>
  );
}

export default LearnMore;
