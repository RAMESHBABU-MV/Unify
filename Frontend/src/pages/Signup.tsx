import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const GRADIENT_BG =
  "bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500";

const GRADIENT_TEXT =
  "bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent";

function FloatingOrb({ className }: { className: string }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-20  pointer-events-none ${className}`}
    />
  );
}

export default function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [focused, setFocused] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Resident");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Orbs */}
      <FloatingOrb className="w-[500px] h-[500px] bg-violet-600 top-[-150px] left-[-150px]" />
      <FloatingOrb className="w-[400px] h-[400px] bg-pink-500 bottom-[-100px] right-[-100px]" />
      <FloatingOrb className="w-[300px] h-[300px] bg-fuchsia-500 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDBNIDAgMjAgTCA0MCAyMCBNIDIwIDAgTCAyMCA0MCBNIDAgMzAgTCA0MCAzMCBNIDMwIDAgTCAzMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-60 pointer-events-none" />

      <div className="relative w-full max-w-md">
        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl shadow-black/40">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent rounded-t-3xl" />

          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div
                className={`w-9 h-9 rounded-xl ${GRADIENT_BG} flex items-center justify-center shadow-lg shadow-violet-500/30`}
              >
                <Sparkles size={17} className="text-white" />
              </div>

              <span
                className={`text-3xl font-black tracking-tight ${GRADIENT_TEXT}`}
              >
                UNIFY
              </span>
            </Link>

            <h2 className="text-white text-xl font-bold">Create Account 🚀</h2>

            <p className="text-gray-400 text-sm mt-1">
              Join your community today
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSignup} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="text-sm font-medium text-gray-300 block mb-2">
                Full Name
              </label>

              <div
                className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 border transition-all duration-200 ${
                  focused === "name"
                    ? "border-violet-500/60 bg-violet-500/10 shadow-lg shadow-violet-500/10"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                }`}
              >
                <User
                  size={17}
                  className={`${
                    focused === "name" ? "text-violet-400" : "text-gray-500"
                  }`}
                />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-transparent text-white placeholder-gray-600 text-sm outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-300 block mb-2">
                Email Address
              </label>

              <div
                className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 border transition-all duration-200 ${
                  focused === "email"
                    ? "border-violet-500/60 bg-violet-500/10 shadow-lg shadow-violet-500/10"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                }`}
              >
                <Mail
                  size={17}
                  className={`${
                    focused === "email" ? "text-violet-400" : "text-gray-500"
                  }`}
                />

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-transparent text-white placeholder-gray-600 text-sm outline-none"
                />
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="text-sm font-medium text-gray-300 block mb-2">
                Select Role
              </label>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full rounded-2xl px-4 py-3.5 border border-white/10 bg-white/5 text-white outline-none"
              >
                <option value="Resident" className="bg-[#111]">
                  Resident
                </option>

                <option value="Volunteer" className="bg-[#111]">
                  Volunteer
                </option>

                <option value="Organization" className="bg-[#111]">
                  Organization
                </option>
              </select>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-300 block mb-2">
                Password
              </label>

              <div
                className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 border transition-all duration-200 ${
                  focused === "password"
                    ? "border-fuchsia-500/60 bg-fuchsia-500/10 shadow-lg shadow-fuchsia-500/10"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                }`}
              >
                <Lock
                  size={17}
                  className={`${
                    focused === "password"
                      ? "text-fuchsia-400"
                      : "text-gray-500"
                  }`}
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocused("password")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-transparent text-white placeholder-gray-600 text-sm outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm font-medium text-gray-300 block mb-2">
                Confirm Password
              </label>

              <div className="flex items-center gap-3 rounded-2xl px-4 py-3.5 border border-white/10 bg-white/5 hover:border-white/20 transition-all">
                <Lock size={17} className="text-gray-500" />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-gray-600 text-sm outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="text-gray-500 hover:text-gray-300"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                required
                className="w-4 h-4 accent-violet-500"
              />

              <label className="text-sm text-gray-400">
                I agree to the Terms & Conditions
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white ${GRADIENT_BG} hover:opacity-90 transition-all shadow-xl shadow-violet-500/25 hover:scale-[1.02] hover:shadow-violet-500/40 active:scale-[0.98]`}
            >
              Create Account
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className={`font-bold ${GRADIENT_TEXT} hover:opacity-80 transition-opacity`}
            >
              Sign In
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-gray-700 mt-6">
          By signing up you agree to our{" "}
          <span className="text-gray-500 hover:text-gray-400 cursor-pointer">
            Terms
          </span>{" "}
          and{" "}
          <span className="text-gray-500 hover:text-gray-400 cursor-pointer">
            Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
}
