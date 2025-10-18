import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaEnvelope, FaBookmark, FaUsers, FaCog } from "react-icons/fa";

function FooterNav() {
  const location = useLocation();

  const navItems = [
    { path: "/feed", icon: <FaHome />, label: "Home" },
    { path: "/messages", icon: <FaEnvelope />, label: "Messages" },
    { path: "/saved", icon: <FaBookmark />, label: "Saved" },
    { path: "/following", icon: <FaUsers />, label: "Following" },
    { path: "/settings", icon: <FaCog />, label: "Settings" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-t p-3 flex justify-around items-center border-t md:hidden z-50">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex flex-col items-center text-sm ${
            location.pathname === item.path
              ? "text-blue-600"
              : "text-gray-500 hover:text-blue-500"
          }`}
        >
          <span className="text-xl">{item.icon}</span>
          <span className="text-xs">{item.label}</span>
        </Link>
      ))}
    </footer>
  );
}

export default FooterNav;
