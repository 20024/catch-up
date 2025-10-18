import React from "react";
import { FaUserPlus, FaFireAlt, FaBullhorn } from "react-icons/fa";
import { Link } from "react-router-dom";

function RightSidebar() {
  const suggestions = [
    { id: 1, name: "Aarav Mehta", avatar: "https://i.pravatar.cc/40?img=5" },
    { id: 2, name: "Priya Sharma", avatar: "https://i.pravatar.cc/40?img=8" },
    { id: 3, name: "Rohan Das", avatar: "https://i.pravatar.cc/40?img=10" },
  ];

  const trendingPosts = [
    { id: 1, title: "React 19 is here!", link: "#" },
    { id: 2, title: "How to grow your social presence 💡", link: "#" },
    { id: 3, title: "Top 10 UI trends of 2025", link: "#" },
  ];

  return (
    <aside className="hidden lg:block bg-white rounded-xl shadow-md p-4 h-fit sticky top-20 space-y-6">

      {/* People You May Know */}
      <div>
        <h3 className="font-semibold text-gray-800 flex items-center mb-3">
          <FaUserPlus className="mr-2 text-blue-600" /> People You May Know
        </h3>
        <ul className="space-y-3">
          {suggestions.map((user) => (
            <li key={user.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-sm font-medium text-gray-700">
                  {user.name}
                </span>
              </div>
              <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition">
                Follow
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Trending Posts */}
      <div>
        <h3 className="font-semibold text-gray-800 flex items-center mb-3">
          <FaFireAlt className="mr-2 text-orange-500" /> Trending Posts
        </h3>
        <ul className="space-y-2">
          {trendingPosts.map((post) => (
            <li key={post.id}>
              <Link
                to={post.link}
                className="text-sm text-gray-600 hover:text-blue-600 hover:underline"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Sponsored / Ads */}
      <div>
        <h3 className="font-semibold text-gray-800 flex items-center mb-3">
          <FaBullhorn className="mr-2 text-green-500" /> Sponsored
        </h3>
        <div className="relative rounded-lg overflow-hidden shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1602524815680-1d4e6e2f5f31?auto=format&fit=crop&w=500&q=60"
            alt="Ad"
            className="w-full h-36 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-3">
            <p className="text-white text-sm font-semibold">
              Try CatchUp Premium 🚀
            </p>
            <button className="mt-2 text-xs bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default RightSidebar;
