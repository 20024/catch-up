import React from "react";
import { FaUsers, FaShareAlt, FaComments, FaBell } from "react-icons/fa";

const features = [
  {
    icon: <FaUsers className="text-blue-500 text-4xl mb-3" />,
    title: "Connect Instantly",
    desc: "Find and connect with friends, family, and like-minded people effortlessly.",
  },
  {
    icon: <FaShareAlt className="text-blue-500 text-4xl mb-3" />,
    title: "Share Freely",
    desc: "Post your moments, stories, and updates to express yourself every day.",
  },
  {
    icon: <FaComments className="text-blue-500 text-4xl mb-3" />,
    title: "Chat & Interact",
    desc: "Join conversations, comment, and react — your social world, alive and active.",
  },
  {
    icon: <FaBell className="text-blue-500 text-4xl mb-3" />,
    title: "Stay Notified",
    desc: "Never miss a moment with real-time notifications and updates.",
  },
];

export default function Features() {
  return (
    <section className="py-8 bg-gray-50">
      <h2 className="text-4xl font-semibold text-center text-blue-600 mb-5">Features You Get</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-8 py-5 md:px-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center"
          >
            <div className="text-center grid justify-center">
            {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
