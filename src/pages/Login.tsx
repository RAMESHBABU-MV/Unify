import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (e: React.FormEvent) => {
  e.preventDefault();

  navigate("/home");
};
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600">UNIFY</h1>

          <p className="text-gray-500 mt-2">Welcome Back 👋</p>
        </div>

        <form className="mt-8 space-y-5">
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

          {/* Password */}

          <div>
            <label className="font-medium text-gray-700">Password</label>

            <div className="flex items-center border rounded-xl mt-2 px-3">
              <Lock size={18} className="text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
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

          {/* Forgot */}

          <div className="text-right">
            <button type="button" className="text-blue-600 text-sm">
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Signup */}

        <div className="text-center mt-6">
          <p className="text-gray-500">Don't have an account?</p>

          <Link to="/signup" className="text-blue-600 font-semibold">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
