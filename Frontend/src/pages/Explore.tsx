import {
  Search,
  Filter,
  MapPin,
  Star,
  Wrench,
  GraduationCap,
  Car,
  HeartPulse,
  ShoppingCart,
  Users,
} from "lucide-react";

const categories = [
  { name: "Electricians", icon: <Wrench size={24} /> },
  { name: "Tutors", icon: <GraduationCap size={24} /> },
  { name: "Drivers", icon: <Car size={24} /> },
  { name: "First Aid", icon: <HeartPulse size={24} /> },
  { name: "Grocery Help", icon: <ShoppingCart size={24} /> },
  { name: "Volunteers", icon: <Users size={24} /> },
];

const helpers = [
  {
    name: "Ramesh K.",
    skill: "Electrician",
    distance: "0.3 km",
    rating: "4.9",
  },
  {
    name: "Meena P.",
    skill: "First Aid",
    distance: "0.6 km",
    rating: "4.8",
  },
  {
    name: "Arjun V.",
    skill: "Driver",
    distance: "1.1 km",
    rating: "4.7",
  },
];

const opportunities = [
  {
    title: "Weekend Clean-up Drive",
    location: "Adyar",
    people: 15,
  },
  {
    title: "Blood Donation Camp",
    location: "Velachery",
    people: 25,
  },
];

export default function Explore() {
  return (
    <div className="min-h-screen bg-[#070014] text-white px-8 py-6">
      {/* Header */}
      <div className="mb-8">
        <p className="text-gray-400">Explore</p>

        <h1 className="text-4xl font-bold mt-2">Discover Your Community</h1>

        <p className="text-gray-400 mt-2">
          Find helpers, services, volunteers and opportunities nearby.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
          <h2 className="text-3xl font-bold text-pink-400">120</h2>
          <p className="text-gray-400 mt-2">Active Helpers</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
          <h2 className="text-3xl font-bold text-purple-400">35</h2>
          <p className="text-gray-400 mt-2">Requests Today</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
          <h2 className="text-3xl font-bold text-cyan-400">4.8</h2>
          <p className="text-gray-400 mt-2">Average Rating</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between mb-8">
        <div className="flex items-center gap-3 w-full">
          <Search size={20} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search helpers, skills, services..."
            className="bg-transparent outline-none w-full text-white"
          />
        </div>

        <button className="border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2">
          <Filter size={18} />
          Filter
        </button>
      </div>

      {/* Categories */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-5">Service Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="
                bg-white/5
                border border-white/10
                rounded-2xl
                p-5
                backdrop-blur-xl
                hover:border-pink-500
                transition
                cursor-pointer
              "
            >
              <div className="text-pink-400 mb-3">{category.icon}</div>

              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nearby Helpers */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-5">Nearby Helpers</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {helpers.map((helper) => (
            <div
              key={helper.name}
              className="
                bg-white/5
                border border-white/10
                rounded-3xl
                p-6
                backdrop-blur-xl
              "
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="
                    h-14 w-14
                    rounded-full
                    bg-gradient-to-r
                    from-purple-500
                    to-pink-500
                    flex items-center justify-center
                    font-bold
                  "
                >
                  {helper.name[0]}
                </div>

                <div>
                  <h3 className="font-semibold text-lg">{helper.name}</h3>

                  <p className="text-gray-400">{helper.skill}</p>
                </div>
              </div>

              <div className="flex justify-between text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Star size={16} />
                  {helper.rating}
                </div>

                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  {helper.distance}
                </div>
              </div>

              <button
                className="
                  w-full
                  mt-5
                  py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-purple-600
                  to-pink-500
                  font-medium
                "
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Community Opportunities */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-5">Community Opportunities</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {opportunities.map((item) => (
            <div
              key={item.title}
              className="
                bg-white/5
                border border-white/10
                rounded-3xl
                p-6
                backdrop-blur-xl
              "
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

              <p className="text-gray-400 mb-2">Location: {item.location}</p>

              <p className="text-gray-400">Volunteers Needed: {item.people}</p>

              <button
                className="
                  mt-5
                  px-6
                  py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-purple-600
                  to-pink-500
                "
              >
                Join Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Map Card */}
      <div
        className="
          bg-white/5
          border border-white/10
          rounded-3xl
          p-8
          backdrop-blur-xl
        "
      >
        <h2 className="text-2xl font-semibold mb-4">Nearby Activity</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-4xl font-bold text-pink-400">12</p>
            <p className="text-gray-400">Active Helpers</p>
          </div>

          <div>
            <p className="text-4xl font-bold text-purple-400">5</p>
            <p className="text-gray-400">Open Requests</p>
          </div>

          <div>
            <p className="text-4xl font-bold text-cyan-400">3</p>
            <p className="text-gray-400">Volunteer Events</p>
          </div>
        </div>
      </div>
    </div>
  );
}
