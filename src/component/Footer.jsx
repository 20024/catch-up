import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-700 py-6 text-center mt-auto">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-2">
        <Link to="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <span className="hidden sm:inline">|</span>

        <Link to="/about" className="hover:text-blue-600 transition-colors">
          About
        </Link>
        <span className="hidden sm:inline">|</span>

        <Link to="/terms" className="hover:text-blue-600 transition-colors">
          Terms
        </Link>
        <span className="hidden sm:inline">|</span>

        <Link to="/privacy" className="hover:text-blue-600 transition-colors">
          Privacy
        </Link>
      </div>

      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} CatchUp. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
