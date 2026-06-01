import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Sparkles, ArrowRight } from "lucide-react";

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

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background orbs */}
      <FloatingOrb className="w-[500px] h-[500px] bg-violet-600 top-[-150px] left-[-150px]" />
      <FloatingOrb className="w-[400px] h-[400px] bg-pink-500 bottom-[-100px] right-[-100px]" />
      <FloatingOrb className="w-[300px] h-[300px] bg-fuchsia-500 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" />

      {/* Grid texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDBNIDAgMjAgTCA0MCAyMCBNIDIwIDAgTCAyMCA0MCBNIDAgMzAgTCA0MCAzMCBNIDMwIDAgTCAzMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-60 pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl shadow-black/40">
          {/* Inner glow top */}
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
            <h2 className="text-white text-xl font-bold mt-1">
              Welcome back 👋
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Sign in to your community
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-300 block mb-2">
                Email address
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
                  className={`transition-colors ${focused === "email" ? "text-violet-400" : "text-gray-500"}`}
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

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-300">
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs text-fuchsia-400 hover:text-fuchsia-300 transition-colors font-medium"
                >
                  Forgot password?
                </button>
              </div>
              <div
                className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 border transition-all duration-200 ${
                  focused === "password"
                    ? "border-fuchsia-500/60 bg-fuchsia-500/10 shadow-lg shadow-fuchsia-500/10"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                }`}
              >
                <Lock
                  size={17}
                  className={`transition-colors ${focused === "password" ? "text-fuchsia-400" : "text-gray-500"}`}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocused("password")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-transparent text-white placeholder-gray-600 text-sm outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500 hover:text-gray-300 transition-colors flex-shrink-0"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded border-white/20 bg-white/5 accent-violet-500 cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="text-sm text-gray-400 cursor-pointer"
              >
                Keep me signed in
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white ${GRADIENT_BG} hover:opacity-90 transition-all shadow-xl shadow-violet-500/25 hover:scale-[1.02] hover:shadow-violet-500/40 active:scale-[0.98] mt-2`}
            >
              Sign In <ArrowRight size={18} />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-gray-600 font-medium">OR</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Social login */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20 transition-all text-sm font-medium text-gray-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Signup link */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className={`font-bold ${GRADIENT_TEXT} hover:opacity-80 transition-opacity`}
            >
              Create one
            </Link>
          </p>
        </div>

        {/* Bottom text */}
        <p className="text-center text-xs text-gray-700 mt-6">
          By signing in you agree to our{" "}
          <span className="text-gray-500 hover:text-gray-400 cursor-pointer transition-colors">
            Terms
          </span>{" "}
          and{" "}
          <span className="text-gray-500 hover:text-gray-400 cursor-pointer transition-colors">
            Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
}
