import {
  Users,
  HandHeart,
  MapPin,
  Brain,
  Bell,
  HeartHandshake,
} from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Top Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">UNIFY</h1>

          <div className="flex gap-8 font-medium text-gray-700">
            <button>Home</button>
            <button>Community</button>
            <button>Requests</button>
            <button>Profile</button>
          </div>

          <Bell className="cursor-pointer" />
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold">Welcome Back 👋</h1>

          <p className="mt-3 text-lg">
            Together we build stronger communities.
          </p>
        </div>

        {/* Quick Actions */}
        <h2 className="text-2xl font-bold mt-10 mb-5">Quick Actions</h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg cursor-pointer">
            <HandHeart size={40} className="text-blue-600" />
            <h3 className="font-bold mt-3">Request Help</h3>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg cursor-pointer">
            <HeartHandshake size={40} className="text-green-600" />
            <h3 className="font-bold mt-3">Offer Help</h3>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg cursor-pointer">
            <Users size={40} className="text-purple-600" />
            <h3 className="font-bold mt-3">Community Feed</h3>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg cursor-pointer">
            <MapPin size={40} className="text-red-500" />
            <h3 className="font-bold mt-3">Find Resources</h3>
          </div>
        </div>

        {/* Stats */}
        <h2 className="text-2xl font-bold mt-12 mb-5">Community Impact</h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-4xl font-bold text-blue-600">500+</h3>
            <p>Residents</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-4xl font-bold text-green-600">120+</h3>
            <p>Volunteers</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-4xl font-bold text-purple-600">1000+</h3>
            <p>Requests Solved</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-4xl font-bold text-red-500">30+</h3>
            <p>Communities</p>
          </div>
        </div>

        {/* Recent Requests */}
        <h2 className="text-2xl font-bold mt-12 mb-5">
          Recent Community Requests
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold">Grocery Delivery Needed</h3>

            <p className="text-gray-500 mt-2">
              Elderly resident needs help with groceries.
            </p>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
              Help Now
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold">Need Blood Donor</h3>

            <p className="text-gray-500 mt-2">Urgent requirement nearby.</p>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
              Help Now
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold">Laptop Repair Support</h3>

            <p className="text-gray-500 mt-2">
              Student requires technical help.
            </p>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
              Help Now
            </button>
          </div>
        </div>

        {/* AI Recommendations */}
        <h2 className="text-2xl font-bold mt-12 mb-5">AI Recommendations</h2>

        <div className="bg-white rounded-3xl p-8 shadow">
          <div className="flex items-center gap-3">
            <Brain className="text-purple-600" />

            <h3 className="font-bold text-xl">Recommended For You</h3>
          </div>

          <ul className="mt-5 space-y-3 text-gray-600">
            <li>✓ Help a student with tutoring</li>
            <li>✓ Join community clean-up drive</li>
            <li>✓ Assist elderly residents nearby</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
