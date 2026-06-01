import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center px-4 py-10">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600">UNIFY</h1>

          <p className="text-gray-500 mt-2">Create Your Account 🚀</p>
        </div>

        <form className="mt-8 space-y-5">
          {/* Name */}

          <div>
            <label className="font-medium text-gray-700">Full Name</label>

            <div className="flex items-center border rounded-xl mt-2 px-3">
              <User size={18} className="text-gray-400" />

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          {/* Email */}

          <div>
            <label className="font-medium text-gray-700">Email</label>

            <div className="flex items-center border rounded-xl mt-2 px-3">
              <Mail size={18} className="text-gray-400" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          {/* Role */}

          <div>
            <label className="font-medium text-gray-700">Select Role</label>

            <select className="w-full border rounded-xl p-3 mt-2 outline-none">
              <option>Resident</option>
              <option>Volunteer</option>
              <option>Organization</option>
            </select>
          </div>

          {/* Password */}

          <div>
            <label className="font-medium text-gray-700">Password</label>

            <div className="flex items-center border rounded-xl mt-2 px-3">
              <Lock size={18} className="text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                className="w-full p-3 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}

          <div>
            <label className="font-medium text-gray-700">
              Confirm Password
            </label>

            <div className="flex items-center border rounded-xl mt-2 px-3">
              <Lock size={18} className="text-gray-400" />

              <input
                type="password"
                placeholder="Confirm password"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          {/* Terms */}

          <div className="flex items-center gap-2">
            <input type="checkbox" />

            <label className="text-sm text-gray-600">
              I agree to the Terms & Conditions
            </label>
          </div>

          {/* Signup Button */}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        </form>

        {/* Login */}

        <div className="text-center mt-6">
          <p className="text-gray-500">Already have an account?</p>

          <Link to="/login" className="text-blue-600 font-semibold">
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
