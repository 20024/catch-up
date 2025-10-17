import React from "react";
import CountUp from "react-countup";
import { FaUsers, FaGlobe, FaSmile } from "react-icons/fa";

function Counting() {
  return (
    <section className="py-5 bg-blue-50 text-center">
      <h2 className="text-3xl font-semibold text-blue-600 mb-8">
        Our Growing CatchUp Community
      </h2>

      <div className="flex flex-col py-8 sm:flex-row justify-center items-center gap-10 md:gap-20 lg:90 px-8">
        <div className="flex flex-col items-center">
          <FaUsers className="text-blue-600 text-5xl mb-3" />
          <h3 className="text-4xl font-bold text-gray-800">
            <CountUp start={0} end={25000} duration={3} separator="," />+
          </h3>
          <p className="text-gray-600 mt-2 font-medium">Users Joined</p>
        </div>

        <div className="flex flex-col items-center">
          <FaGlobe className="text-green-500 text-5xl mb-3" />
          <h3 className="text-4xl font-bold text-gray-800">
            <CountUp start={0} end={120} duration={3} />+
          </h3>
          <p className="text-gray-600 mt-2 font-medium">Countries Reached</p>
        </div>

        <div className="flex flex-col items-center">
          <FaSmile className="text-yellow-500 text-5xl mb-3" />
          <h3 className="text-4xl font-bold text-gray-800">
            <CountUp start={0} end={98} duration={3} />%
          </h3>
          <p className="text-gray-600 mt-2 font-medium">User Satisfaction</p>
        </div>
      </div>
    </section>
  );
}

export default Counting;
