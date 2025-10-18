import React from "react";
import { FaUserPlus } from "react-icons/fa";

const mobileRightside = () => {
  const people = [
    { id: 1, name: "Aarav Mehta", img: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, name: "Isha Sharma", img: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 3, name: "Rohan Patel", img: "https://randomuser.me/api/portraits/men/3.jpg" },
    { id: 4, name: "Sneha Gupta", img: "https://randomuser.me/api/portraits/women/4.jpg" },
    { id: 5, name: "Aditya Singh", img: "https://randomuser.me/api/portraits/men/5.jpg" },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-6">
      <h3 className="font-semibold text-lg mb-3">Suggestion For Catch-up</h3>
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide scroll-smooth snap-x snap-mandatory">
        {people.map((person) => (
          <div
            key={person.id}
            className="min-w-[150px] snap-start flex-shrink-0 flex flex-col items-center text-center bg-gray-50 rounded-xl p-3 hover:bg-gray-100 transition"
          >
            <img
              src={person.img}
              alt={person.name}
              className="w-16 h-16 rounded-full mb-2 object-cover"
            />
            <p className="text-sm font-medium">{person.name}</p>
            <button className="mt-2 text-xs flex items-center bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
              <FaUserPlus className="mr-1" /> Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default mobileRightside;
