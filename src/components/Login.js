import { useState } from "react";
import { loginUser } from "../utils/authFunctions";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      alert("Logged in successfully!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-gray-50 shadow-lg rounded-2xl">
      <h1 className="text-4xl font-bold text-left text-gray-600 mb-6">Login</h1>
      <form onSubmit={handleLogin} className="space-y-6">
        
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
            className="bg-gray-800 ml-55 text-white py-3 px-5 rounded-lg text-lg font-semibold hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Login
          </button>
        </div>
      </form>

      {/* Signup Link */}
      <p className="text-sm text-center text-gray-500 mt-4">
        Don't have an account?{" "}
        <Link to="/register" className="text-gray-800 font-semibold hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
