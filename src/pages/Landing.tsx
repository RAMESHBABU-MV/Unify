import { Link } from "react-router-dom";
import {
  Users,
  MapPin,
  Brain,
  HandHeart,
  Shield,
  MessageCircle,
} from "lucide-react";

function Landing() {
  const features = [
    {
      icon: <HandHeart size={40} className="text-blue-600" />,
      title: "Mutual Aid",
      description: "Request help or offer support within your community.",
    },
    {
      icon: <MapPin size={40} className="text-green-600" />,
      title: "Geolocation",
      description: "Find nearby resources and opportunities.",
    },
    {
      icon: <Brain size={40} className="text-purple-600" />,
      title: "AI Matching",
      description: "Smart recommendations based on needs and skills.",
    },
    {
      icon: <MessageCircle size={40} className="text-orange-500" />,
      title: "Community Chat",
      description: "Connect and collaborate with residents.",
    },
    {
      icon: <Shield size={40} className="text-red-500" />,
      title: "Secure Profiles",
      description: "Verified and trusted community members.",
    },
    {
      icon: <Users size={40} className="text-cyan-500" />,
      title: "Volunteer Network",
      description: "Connect with volunteers and organizations.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">UNIFY</h1>

          <div className="hidden md:flex gap-8 text-gray-700 font-medium">
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#how">How It Works</a>
            <a href="#impact">Impact</a>
          </div>

          <div className="flex gap-3">
            <Link to="/login">
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              Hyper Local Community Platform
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
              Building
              <span className="text-blue-600"> Stronger </span>
              Communities Together
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Connect with neighbors, share skills, request support, discover
              local resources and strengthen your community through AI-powered
              matching.
            </p>

            <div className="flex gap-4 mt-8">
              <Link to="/signup">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700">
                  Get Started
                </button>
              </Link>

              {/* <a href="#about">
                <button className="border border-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100">
                  Learn More
                </button>
              </a> */}
            </div>
          </div>

          {/* Right Cards */}
          <div className="space-y-5">
            <div className="bg-white p-6 rounded-2xl shadow-lg flex gap-4 items-center">
              <Users className="text-blue-600" size={40} />
              <div>
                <h3 className="font-bold text-xl">Community Support</h3>
                <p className="text-gray-500">Connect with local residents</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg flex gap-4 items-center">
              <MapPin className="text-green-600" size={40} />
              <div>
                <h3 className="font-bold text-xl">Nearby Resources</h3>
                <p className="text-gray-500">Discover local opportunities</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg flex gap-4 items-center">
              <Brain className="text-purple-600" size={40} />
              <div>
                <h3 className="font-bold text-xl">AI Matching</h3>
                <p className="text-gray-500">Smart support recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">What is UNIFY?</h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            UNIFY is a hyper-local community platform that enables residents to
            request support, offer skills, connect with neighbors and discover
            resources nearby. Our platform uses intelligent matching to
            strengthen local communities.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">Platform Features</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg">
                {feature.icon}

                <h3 className="text-2xl font-bold mt-5">{feature.title}</h3>

                <p className="text-gray-600 mt-3">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="bg-white py-20">
        <h2 className="text-4xl font-bold text-center">How It Works</h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-14 px-6">
          {["Create Profile", "Post Request", "AI Matching", "Get Support"].map(
            (step, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-3xl text-center shadow"
              >
                <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {index + 1}
                </div>

                <h3 className="font-bold mt-5 text-lg">{step}</h3>
              </div>
            ),
          )}
        </div>
      </section>

      {/* Stats */}
      <section id="impact" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-white py-14">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <h2 className="text-5xl font-bold">500+</h2>
                <p>Residents</p>
              </div>

              <div>
                <h2 className="text-5xl font-bold">120+</h2>
                <p>Volunteers</p>
              </div>

              <div>
                <h2 className="text-5xl font-bold">1000+</h2>
                <p>Requests Solved</p>
              </div>

              <div>
                <h2 className="text-5xl font-bold">30+</h2>
                <p>Communities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto bg-blue-600 text-white rounded-3xl text-center py-16 px-6">
          <h2 className="text-4xl font-bold">Ready To Help Your Community?</h2>

          <p className="mt-4 text-lg">
            Join residents, volunteers and organizations today.
          </p>

          <Link to="/signup">
            <button className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold">
              Join UNIFY
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white text-center py-8">
        <h2 className="text-3xl font-bold">UNIFY</h2>

        <p className="text-gray-400 mt-2">
          Connecting Communities Through Technology & Support
        </p>
      </footer>
    </div>
  );
}

export default Landing;
