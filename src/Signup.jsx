import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!form.fullName || !form.email || !form.password || !form.confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Signed up:", form);
    navigate("/Login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl ">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Create your <span className="text-gray-800">WorkNaija</span> Account
        </h2>

        {/* Social sign up buttons */}
        <div className="space-y-3 mb-6">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 py-2 rounded-lg hover:shadow-md transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-gray-700 font-medium">Sign up with Google</span>
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M16.365 1.43c-.871.056-1.954.58-2.588 1.293-.565.64-1.04 1.662-.857 2.625 1.002.078 2.05-.506 2.692-1.235.607-.692 1.075-1.714.753-2.683zm-1.974 4.418c-1.399 0-2.574.809-3.238.809-.667 0-1.681-.78-2.772-.759-1.42.02-2.741.826-3.473 2.1-1.482 2.551-.38 6.335 1.063 8.406.705 1.017 1.537 2.159 2.648 2.118 1.05-.041 1.446-.679 2.726-.679 1.276 0 1.632.679 2.754.659 1.137-.02 1.851-1.048 2.552-2.07.52-.747.726-1.128 1.137-1.972-3.001-1.126-3.483-5.311-.518-6.568-.87-1.307-2.208-1.834-3.379-1.834z" />
            </svg>
            <span className="font-medium">Sign up with Apple</span>
          </button>
        </div>

        {/* Traditional form */}
        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label htmlFor="fullName" className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="John Doe"
              value={form.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="••••••••"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/Login")}
            className="text-indigo-600 font-semibold cursor-pointer hover:underline"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
