import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Users,
  MapPin,
  Brain,
  HandHeart,
  Shield,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  ChevronDown,
} from "lucide-react";

const GRADIENT_TEXT =
  "bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent";
const GRADIENT_BG =
  "bg-gradient-to-br from-violet-600 via-fuchsia-500 to-pink-500";

function FloatingOrb({ className }: { className: string }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-10  pointer-events-none ${className}`}
    />
  );
}

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [target]);
  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  const features = [
    {
      icon: HandHeart,
      title: "Mutual Aid",
      description: "Request help or offer support within your community.",
      color: "from-rose-500 to-pink-500",
      bg: "bg-rose-50",
      iconColor: "text-rose-500",
    },
    {
      icon: MapPin,
      title: "Geolocation",
      description: "Find nearby resources and opportunities instantly.",
      color: "from-emerald-500 to-teal-500",
      bg: "bg-emerald-50",
      iconColor: "text-emerald-500",
    },
    {
      icon: Brain,
      title: "AI Matching",
      description: "Smart recommendations based on needs and skills.",
      color: "from-violet-500 to-purple-500",
      bg: "bg-violet-50",
      iconColor: "text-violet-500",
    },
    {
      icon: MessageCircle,
      title: "Community Chat",
      description: "Connect and collaborate with your neighbors.",
      color: "from-amber-500 to-orange-500",
      bg: "bg-amber-50",
      iconColor: "text-amber-500",
    },
    {
      icon: Shield,
      title: "Secure Profiles",
      description: "Verified and trusted community members only.",
      color: "from-sky-500 to-blue-500",
      bg: "bg-sky-50",
      iconColor: "text-sky-500",
    },
    {
      icon: Users,
      title: "Volunteer Network",
      description: "Connect with volunteers and local organizations.",
      color: "from-fuchsia-500 to-pink-500",
      bg: "bg-fuchsia-50",
      iconColor: "text-fuchsia-500",
    },
  ];

  const steps = [
    { label: "Create Profile", icon: Users, color: "bg-violet-600" },
    { label: "Post Request", icon: Globe, color: "bg-fuchsia-500" },
    { label: "AI Matching", icon: Zap, color: "bg-pink-500" },
    { label: "Get Support", icon: HandHeart, color: "bg-rose-500" },
  ];

  const stats = [
    { value: 500, suffix: "+", label: "Residents" },
    { value: 120, suffix: "+", label: "Volunteers" },
    { value: 1000, suffix: "+", label: "Requests Solved" },
    { value: 30, suffix: "+", label: "Communities" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden font-sans">
      {/* Background orbs */}
      <FloatingOrb className="w-[600px] h-[600px] bg-violet-600 top-[-200px] left-[-200px]" />
      <FloatingOrb className="w-[400px] h-[400px] bg-fuchsia-500 top-[300px] right-[-100px]" />
      <FloatingOrb className="w-[500px] h-[500px] bg-pink-500 top-[800px] left-[40%]" />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-lg ${GRADIENT_BG} flex items-center justify-center`}
            >
              <Sparkles size={16} className="text-white" />
            </div>
            <span className="text-2xl font-black tracking-tight">
              <span className={GRADIENT_TEXT}>UNIFY</span>
            </span>
          </div>

          <div className="hidden md:flex gap-8 text-sm text-gray-400 font-medium">
            {["About", "Features", "How It Works", "Impact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex gap-3 items-center">
            <Link to="/login">
              <button className="text-sm text-gray-300 hover:text-white px-4 py-2 rounded-lg border border-white/10 hover:border-white/30 transition-all">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button
                className={`text-sm font-semibold px-5 py-2.5 rounded-lg ${GRADIENT_BG} hover:opacity-90 transition-all shadow-lg shadow-violet-500/25`}
              >
                Get Started →
              </button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg border border-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="space-y-1">
              <span className="block w-5 h-0.5 bg-white" />
              <span className="block w-5 h-0.5 bg-white" />
              <span className="block w-5 h-0.5 bg-white" />
            </div>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/80 px-6 pb-4 flex flex-col gap-3">
            {["About", "Features", "How It Works", "Impact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 text-sm py-1"
              >
                {item}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <Link to="/login" className="flex-1">
                <button className="w-full text-sm border border-white/20 py-2 rounded-lg text-gray-300">
                  Login
                </button>
              </Link>
              <Link to="/signup" className="flex-1">
                <button
                  className={`w-full text-sm font-semibold py-2 rounded-lg ${GRADIENT_BG}`}
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-8">
            <Sparkles size={14} />
            Hyper Local Community Platform
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-6">
            Building
            <span className={` ${GRADIENT_TEXT}`}> Stronger</span>
            <br />
            Communities
            <br />
            <span className="text-gray-400">Together</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Connect with neighbors, share skills, request support, and discover
            local resources through AI-powered matching.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/signup">
              <button
                className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg ${GRADIENT_BG} hover:opacity-90 transition-all shadow-2xl shadow-violet-500/30 hover:scale-105`}
              >
                Get Started Free <ArrowRight size={20} />
              </button>
            </Link>
            <a href="#features">
              <button className="flex items-center gap-2 px-8 py-4 rounded-2xl font-medium text-gray-300 border border-white/10 hover:bg-white/5 transition-all">
                See Features <ChevronDown size={18} />
              </button>
            </a>
          </div>

          {/* Hero feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: Users,
                label: "Community Support",
                sub: "Connect with local residents",
                color: "from-violet-500/20 to-violet-500/5",
                border: "border-violet-500/20",
                icon_c: "text-violet-400",
              },
              {
                icon: MapPin,
                label: "Nearby Resources",
                sub: "Discover local opportunities",
                color: "from-fuchsia-500/20 to-fuchsia-500/5",
                border: "border-fuchsia-500/20",
                icon_c: "text-fuchsia-400",
              },
              {
                icon: Brain,
                label: "AI Matching",
                sub: "Smart support recommendations",
                color: "from-pink-500/20 to-pink-500/5",
                border: "border-pink-500/20",
                icon_c: "text-pink-400",
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`bg-gradient-to-b ${card.color} border ${card.border} rounded-2xl p-6 flex items-center gap-4 backdrop-blur-sm hover:scale-105 transition-transform`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${card.icon_c}`}
                >
                  <card.icon size={24} />
                </div>
                <div className="text-left">
                  <p className="font-bold text-white">{card.label}</p>
                  <p className="text-sm text-gray-400">{card.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-xs font-bold tracking-widest text-fuchsia-400 uppercase">
            About
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">
            What is <span className={GRADIENT_TEXT}>UNIFY?</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            UNIFY is a hyper-local community platform that enables residents to
            request support, offer skills, connect with neighbors and discover
            resources nearby. Our platform uses intelligent matching to
            strengthen local communities.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-violet-400 uppercase">
              Features
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-4">
              Platform <span className={GRADIENT_TEXT}>Features</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 hover:bg-white/8 transition-all hover:scale-105 hover:-translate-y-1 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl`}
                />
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} p-0.5 mb-6`}
                >
                  <div className="w-full h-full rounded-2xl bg-[#0a0a0f] flex items-center justify-center">
                    <f.icon size={24} className={f.iconColor} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-gray-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-pink-400 uppercase">
              Process
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-4">
              How It <span className={GRADIENT_TEXT}>Works</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 hidden md:block" />

            {steps.map((step, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center text-center group"
              >
                <div
                  className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform z-10`}
                >
                  <step.icon size={28} className="text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#0a0a0f] border-2 border-white/20 rounded-full flex items-center justify-center text-xs font-black text-white z-20">
                  {i + 1}
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full hover:bg-white/8 hover:border-white/20 transition-all">
                  <h3 className="font-bold text-lg">{step.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="impact" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden">
            <div className={`absolute inset-0 ${GRADIENT_BG} opacity-90`} />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDBNIDAgMjAgTCA0MCAyMCBNIDIwIDAgTCAyMCA0MCBNIDAgMzAgTCA0MCAzMCBNIDMwIDAgTCAzMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDYiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
            <div className="relative py-16 px-6">
              <div className="text-center mb-12">
                <span className="text-xs font-bold tracking-widest text-white/60 uppercase">
                  Impact
                </span>
                <h2 className="text-4xl font-black mt-2 text-white">
                  Our Numbers
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                {stats.map((s, i) => (
                  <div key={i} className="group">
                    <p className="text-5xl md:text-6xl font-black group-hover:scale-110 transition-transform inline-block">
                      <CountUp target={s.value} suffix={s.suffix} />
                    </p>
                    <p className="text-white/70 mt-2 font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative bg-white/5 border border-white/10 rounded-3xl py-20 px-8 overflow-hidden">
            <FloatingOrb className="w-64 h-64 bg-violet-500 top-[-50px] right-[-50px] opacity-10" />
            <FloatingOrb className="w-64 h-64 bg-pink-500 bottom-[-50px] left-[-50px] opacity-10" />
            <div className="relative">
              <span className="text-xs font-bold tracking-widest text-fuchsia-400 uppercase">
                Join Us
              </span>
              <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4">
                Ready to Help Your{" "}
                <span className={GRADIENT_TEXT}>Community?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                Join residents, volunteers and organizations today.
              </p>
              <Link to="/signup">
                <button
                  className={`inline-flex items-center gap-2 px-10 py-5 rounded-2xl font-bold text-lg ${GRADIENT_BG} hover:opacity-90 transition-all shadow-2xl shadow-violet-500/30 hover:scale-105`}
                >
                  Join UNIFY <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div
              className={`w-7 h-7 rounded-lg ${GRADIENT_BG} flex items-center justify-center`}
            >
              <Sparkles size={13} className="text-white" />
            </div>
            <span className="text-xl font-black">
              <span className={GRADIENT_TEXT}>UNIFY</span>
            </span>
          </div>
          <p className="text-gray-500 text-sm text-center">
            Connecting Communities Through Technology & Support
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
