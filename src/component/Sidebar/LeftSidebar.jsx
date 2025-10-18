import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaEnvelope, FaBookmark, FaUsers, FaCog ,FaUser} from "react-icons/fa";

function LeftSidebar() {
    return (
        <aside className="hidden md:flex flex-col bg-white shadow-md rounded-xl p-4 h-fit sticky top-20">
            {/* Edit Profile */}
            <div className="text-center mb-6">
                <img
                    src="https://i.pravatar.cc/100?img=32"
                    alt="User Avatar"
                    className="w-20 h-20 rounded-full mx-auto mb-3"
                />
                <h3 className="font-semibold text-gray-800">Shreya Sarkar</h3>
                <p className="text-sm text-gray-500 mb-2">Web Developer</p>
                <Link
                    to="/edit-profile"
                    className="text-blue-600 text-sm font-medium hover:underline"
                >
                    Edit Profile
                </Link>
            </div>

            {/* Quick Links */}
            <nav className="space-y-3 text-gray-700">
                <Link
                    to="/feed"
                    className="flex items-center gap-3 hover:text-blue-600 transition"
                >
                    <FaHome /> Home
                </Link>
                <Link
                    to="/profile"
                    className="flex items-center gap-3 hover:text-blue-600 transition"
                >
                    <FaUser /> My Profile
                </Link>
                <Link
                    to="/messages"
                    className="flex items-center gap-3 hover:text-blue-600 transition"
                >
                    <FaEnvelope /> Messages
                </Link>
                <Link
                    to="/saved"
                    className="flex items-center gap-3 hover:text-blue-600 transition"
                >
                    <FaBookmark /> Saved
                </Link>
                <Link
                    to="/following"
                    className="flex items-center gap-3 hover:text-blue-600 transition"
                >
                    <FaUsers /> Following
                </Link>
                <Link
                    to="/settings"
                    className="flex items-center gap-3 hover:text-blue-600 transition"
                >
                    <FaCog /> Settings
                </Link>
            </nav>
        </aside>
    );
}

export default LeftSidebar;
