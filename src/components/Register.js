import React, { useState } from "react";
import { registerUser } from "../utils/authFunctions";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    await registerUser(username, email, password);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-gray-50 shadow-lg rounded-2xl">
      <h1 className="text-4xl font-bold text-left text-gray-600 mb-6">Register</h1>
      <form onSubmit={handleRegister} className="space-y-6">
        
        {/* Username Input */}
        <div>
          <label htmlFor="username" className="block text-lg font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block text-lg font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-gray-800 ml-50 text-white py-3 px-5 rounded-lg text-lg font-semibold hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Register
          </button>
        </div>
      </form>

      {/* Login Link */}
      <p className="text-sm text-center text-gray-500 mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-gray-800 font-semibold hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
