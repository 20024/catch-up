import React, { useEffect, useState } from "react";

function Login({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md md:max-w-lg lg:max-w-md p-6 md:p-8 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg md:text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl md:text-2xl font-bold text-center text-blue-600 mb-6">
          Welcome Back!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1 text-sm md:text-base">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 md:px-4 py-2 text-black border border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm md:text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1 text-sm md:text-base">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full text-black px-3 md:px-4 py-2 border border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm md:text-base"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-sm md:text-base"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600 text-sm md:text-base">
          Don't have an account?{" "}
          <span className="text-blue-600 font-semibold hover:underline cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
