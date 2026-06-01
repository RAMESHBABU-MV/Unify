import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Sparkles,
  Bell,
  Search,
  MapPin,
  Plus,
  Filter,
  Clock,
  CheckCircle2,
  AlertCircle,
  Wrench,
  ShoppingBag,
  Heart,
  Users,
  Zap,
  ChevronRight,
  MessageSquare,
  TrendingUp,
  LogOut,
  Home,
  Compass,
  UserCircle,
  X,
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────

const GRADIENT_BG =
  "bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500";
const GRADIENT_TEXT =
  "bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent";

// ─── Mock Data ────────────────────────────────────────────────────────────────

const POSTS = [
  {
    id: 1,
    user: "Ananya R.",
    avatar: "AR",
    avatarColor: "from-violet-500 to-fuchsia-500",
    category: "Tool Sharing",
    icon: Wrench,
    iconColor: "text-violet-400",
    title: "Leaky pipe in my kitchen — anyone with plumbing skills?",
    description:
      "Water dripping from under the sink. Not an emergency but need help this weekend if possible.",
    location: "Anna Nagar, 0.4 km",
    urgency: "medium",
    time: "12 min ago",
    replies: 3,
    status: "open",
  },
  {
    id: 2,
    user: "Karthik M.",
    avatar: "KM",
    avatarColor: "from-fuchsia-500 to-pink-500",
    category: "Grocery Delivery",
    icon: ShoppingBag,
    iconColor: "text-pink-400",
    title: "Can someone pick up groceries for my elderly neighbour?",
    description:
      "Mrs. Lalitha (78) needs her weekly essentials. I'll reimburse fully + small thank-you gift.",
    location: "T. Nagar, 1.2 km",
    urgency: "high",
    time: "34 min ago",
    replies: 7,
    status: "open",
  },
  {
    id: 3,
    user: "Priya S.",
    avatar: "PS",
    avatarColor: "from-pink-500 to-rose-500",
    category: "Skill Share",
    icon: Heart,
    iconColor: "text-fuchsia-400",
    title: "Offering free Carnatic music lessons for kids",
    description:
      "Certified teacher, 10 years exp. Weekend batches for ages 6–14. Community seva — no charges.",
    location: "Mylapore, 2.1 km",
    urgency: "low",
    time: "2 hrs ago",
    replies: 12,
    status: "active",
  },
  {
    id: 4,
    user: "Dev C.",
    avatar: "DC",
    avatarColor: "from-violet-600 to-blue-500",
    category: "Emergency Aid",
    icon: AlertCircle,
    iconColor: "text-rose-400",
    title: "Power cut — need a portable charger urgently",
    description:
      "Medical device needs charging. UPS failed. Any neighbour with a power bank or generator?",
    location: "Adyar, 0.8 km",
    urgency: "critical",
    time: "5 min ago",
    replies: 2,
    status: "open",
  },
];

const TRENDING = [
  { label: "Power outage Adyar", count: 14, hot: true },
  { label: "Weekend clean-up drive", count: 9, hot: false },
  { label: "Monsoon preparedness", count: 22, hot: true },
];

const CATEGORIES = [
  { label: "All", icon: Compass, active: true },
  { label: "Emergency", icon: AlertCircle, active: false },
  { label: "Tools", icon: Wrench, active: false },
  { label: "Groceries", icon: ShoppingBag, active: false },
  { label: "Skills", icon: Heart, active: false },
  { label: "Community", icon: Users, active: false },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function FloatingOrb({ className }: { className: string }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-10  pointer-events-none ${className}`}
    />
  );
}

function UrgencyBadge({ level }: { level: string }) {
  const map: Record<string, string> = {
    critical: "bg-rose-500/20 text-rose-400 border border-rose-500/30",
    high: "bg-orange-500/20 text-orange-400 border border-orange-500/30",
    medium: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    low: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  };
  return (
    <span
      className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${map[level] ?? ""}`}
    >
      {level}
    </span>
  );
}

// ─── Subcomponents ────────────────────────────────────────────────────────────

function Navbar({
  onNewPost,
  notifications,
}: {
  onNewPost: () => void;
  notifications: number;
}) {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/8 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 h-16">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-xl ${GRADIENT_BG} flex items-center justify-center shadow-lg shadow-violet-500/30`}
          >
            <Sparkles size={15} className="text-white" />
          </div>
          <span
            className={`text-2xl font-black tracking-tight ${GRADIENT_TEXT}`}
          >
            UNIFY
          </span>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onNewPost}
            className={`hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold text-white ${GRADIENT_BG} shadow-lg shadow-violet-500/20 hover:opacity-90 hover:scale-[1.02] transition-all`}
          >
            <Plus size={15} /> New Post
          </button>

          {/* Bell */}
          <button className="relative w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all">
            <Bell size={16} className="text-gray-400" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-fuchsia-500 text-[9px] font-bold text-white flex items-center justify-center">
                {notifications}
              </span>
            )}
          </button>

          {/* Avatar */}
          <button
            onClick={() => navigate("/profile")}
            className={`w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-violet-500/20 hover:scale-105 transition-all`}
          >
            YO
          </button>
        </div>
      </div>
    </header>
  );
}

function BottomNav({ onNewPost }: { onNewPost: () => void }) {
  const [active, setActive] = useState("home");
  const navigate = useNavigate();

  const items = [
    { id: "home", icon: Home, label: "Home" },
    { id: "explore", icon: Compass, label: "Explore" },
    { id: "new", icon: Plus, label: "", fab: true },
    { id: "messages", icon: MessageSquare, label: "Messages" },
    { id: "profile", icon: UserCircle, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 border-t border-white/8 bg-[#0a0a0f]/90 backdrop-blur-xl sm:hidden">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto px-2">
        {items.map((item) => {
          if (item.fab) {
            return (
              <button
                key={item.id}
                onClick={onNewPost}
                className={`-mt-6 w-13 h-13 rounded-2xl ${GRADIENT_BG} flex items-center justify-center shadow-xl shadow-violet-500/40 hover:scale-110 transition-all`}
                style={{ width: 52, height: 52 }}
              >
                <Plus size={22} className="text-white" />
              </button>
            );
          }
          return (
            <button
              key={item.id}
              onClick={() => {
                setActive(item.id);

                if (item.id === "home") navigate("/");
                if (item.id === "explore") navigate("/explore");
                if (item.id === "messages") navigate("/messages");
                if (item.id === "profile") navigate("/profile");
              }}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all ${
                active === item.id ? "text-fuchsia-400" : "text-gray-600"
              }`}
            >
              <item.icon size={20} />
              {item.label && (
                <span className="text-[10px] font-medium">{item.label}</span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

function NewPostModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-[#111118] border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/60 relative">
        {/* Glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent rounded-t-3xl" />

        <div className="flex items-center justify-between mb-5">
          <h2 className="text-white font-bold text-lg">New Community Post</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
          >
            <X size={15} className="text-gray-400" />
          </button>
        </div>

        <div className="space-y-4">
          <input
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500/60 focus:bg-violet-500/5 transition-all"
            placeholder="What do you need or offer?"
          />
          <textarea
            rows={3}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-fuchsia-500/60 focus:bg-fuchsia-500/5 transition-all resize-none"
            placeholder="Describe your request in detail..."
          />
          <div className="grid grid-cols-2 gap-3">
            <select className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-gray-400 outline-none focus:border-violet-500/60 transition-all">
              <option>Category</option>
              <option>Emergency Aid</option>
              <option>Tool Sharing</option>
              <option>Grocery Delivery</option>
              <option>Skill Share</option>
              <option>Community</option>
            </select>
            <select className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-gray-400 outline-none focus:border-violet-500/60 transition-all">
              <option>Urgency</option>
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <button
            onClick={onClose}
            className={`w-full py-3.5 rounded-2xl font-bold text-white ${GRADIENT_BG} shadow-lg shadow-violet-500/25 hover:opacity-90 hover:scale-[1.01] transition-all`}
          >
            Post to Community
          </button>
        </div>
      </div>
    </div>
  );
}

function PostCard({ post }: { post: (typeof POSTS)[0] }) {
  const Icon = post.icon;
  return (
    <div className="group relative bg-white/[0.03] border border-white/8 rounded-2xl p-5 hover:border-white/15 hover:bg-white/[0.05] transition-all duration-200 cursor-pointer">
      {/* Subtle left accent for critical */}
      {post.urgency === "critical" && (
        <div className="absolute left-0 top-4 bottom-4 w-[3px] bg-gradient-to-b from-rose-500 to-fuchsia-500 rounded-full" />
      )}

      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-xl bg-gradient-to-br ${post.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
          >
            {post.avatar}
          </div>
          <div>
            <p className="text-white text-sm font-semibold leading-tight">
              {post.user}
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <Icon size={11} className={post.iconColor} />
              <span className="text-[11px] text-gray-500">{post.category}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <UrgencyBadge level={post.urgency} />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-white font-semibold text-sm leading-snug mb-1.5">
        {post.title}
      </h3>
      <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
        {post.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-gray-600 text-xs">
          <span className="flex items-center gap-1">
            <MapPin size={11} className="text-fuchsia-500/60" />
            {post.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {post.time}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-500 text-xs">
          <MessageSquare size={12} className="text-violet-400/60" />
          <span>{post.replies}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-x-hidden">
      {/* Background orbs */}
      <FloatingOrb className="w-[600px] h-[600px] bg-violet-700 top-0 left-[-200px]" />
      <FloatingOrb className="w-[400px] h-[400px] bg-fuchsia-600 top-[40%] right-[-150px]" />
      <FloatingOrb className="w-[300px] h-[300px] bg-pink-600 bottom-[10%] left-[20%]" />

      {/* Grid texture */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDBNIDAgMjAgTCA0MCAyMCBNIDIwIDAgTCAyMCA0MCBNIDAgMzAgTCA0MCAzMCBNIDMwIDAgTCAzMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-60 pointer-events-none" />

      {/* Navbar */}
      <Navbar onNewPost={() => setShowModal(true)} notifications={3} />

      {/* Main */}
      <main className="max-w-6xl mx-auto px-4 sm:px-5 pt-6 pb-24 sm:pb-10">
        <div className="flex gap-6">
          {/* ── Left sidebar (desktop) ── */}
          <aside className="hidden lg:flex flex-col gap-4 w-56 flex-shrink-0">
            {/* Location chip */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/8 rounded-2xl px-4 py-3">
              <MapPin size={14} className="text-fuchsia-400 flex-shrink-0" />
              <div>
                <p className="text-[10px] text-gray-600 font-medium uppercase tracking-wider">
                  Your Area
                </p>
                <p className="text-white text-sm font-semibold">Chennai, TN</p>
              </div>
            </div>

            {/* Nav */}
            {[
              { icon: Home, label: "Feed", active: true },
              { icon: Compass, label: "Explore", active: false },
              { icon: MessageSquare, label: "Messages", active: false },
              { icon: UserCircle, label: "My Profile", active: false },
            ].map((item) => (
              <button
                key={item.label}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                  item.active
                    ? "bg-violet-500/15 border border-violet-500/30 text-violet-300"
                    : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                }`}
              >
                <item.icon size={16} />
                {item.label}
              </button>
            ))}

            {/* Trending */}
            <div className="mt-2 bg-white/[0.03] border border-white/8 rounded-2xl p-4">
              <div className="flex items-center gap-1.5 mb-3">
                <TrendingUp size={13} className="text-fuchsia-400" />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Trending
                </span>
              </div>
              <div className="space-y-2.5">
                {TRENDING.map((t) => (
                  <div
                    key={t.label}
                    className="flex items-center justify-between cursor-pointer group/t"
                  >
                    <p className="text-xs text-gray-400 group-hover/t:text-white transition-colors leading-tight">
                      {t.label}
                    </p>
                    <div className="flex items-center gap-1">
                      {t.hot && <Zap size={10} className="text-fuchsia-500" />}
                      <span className="text-[10px] text-gray-600">
                        {t.count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sign out */}
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm text-gray-600 hover:text-rose-400 hover:bg-rose-500/10 transition-all mt-auto">
              <LogOut size={15} />
              Sign Out
            </button>
          </aside>

          {/* ── Centre feed ── */}
          <div className="flex-1 min-w-0 space-y-4">
            {/* Hero greeting */}
            <div className="relative bg-white/[0.03] border border-white/8 rounded-2xl p-5 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
              <div className="relative z-10">
                <p className="text-gray-500 text-sm mb-0.5">Good morning 👋</p>
                <h1 className="text-white text-xl font-bold">
                  What does your community need today?
                </h1>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-10">
                <Sparkles size={64} className="text-violet-400" />
              </div>
            </div>

            {/* Search */}
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus-within:border-violet-500/50 focus-within:bg-violet-500/5 transition-all">
              <Search size={16} className="text-gray-500 flex-shrink-0" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm text-white placeholder-gray-600 outline-none"
                placeholder="Search posts, skills, neighbours…"
              />
              <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-fuchsia-400 transition-colors px-2 py-1 rounded-lg border border-white/10 hover:border-fuchsia-500/30">
                <Filter size={12} />
                Filter
              </button>
            </div>

            {/* Category pills */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const CatIcon = cat.icon;
                const isActive = activeCategory === cat.label;
                return (
                  <button
                    key={cat.label}
                    onClick={() => setActiveCategory(cat.label)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap flex-shrink-0 transition-all ${
                      isActive
                        ? `${GRADIENT_BG} text-white shadow-lg shadow-violet-500/20`
                        : "bg-white/5 border border-white/8 text-gray-500 hover:border-white/15 hover:text-gray-300"
                    }`}
                  >
                    <CatIcon size={12} />
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  label: "Open Requests",
                  value: "24",
                  icon: AlertCircle,
                  color: "text-rose-400",
                },
                {
                  label: "Active Helpers",
                  value: "11",
                  icon: Users,
                  color: "text-violet-400",
                },
                {
                  label: "Resolved Today",
                  value: "8",
                  icon: CheckCircle2,
                  color: "text-emerald-400",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/[0.03] border border-white/8 rounded-2xl p-3.5 text-center"
                >
                  <s.icon size={16} className={`${s.color} mx-auto mb-1`} />
                  <p className="text-white font-bold text-lg leading-none">
                    {s.value}
                  </p>
                  <p className="text-gray-600 text-[10px] mt-1 leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Feed header */}
            <div className="flex items-center justify-between">
              <h2 className="text-white font-bold text-sm">
                Recent Posts
                <span className="ml-2 text-gray-600 font-normal">
                  ({POSTS.length})
                </span>
              </h2>
              <button className="flex items-center gap-1 text-xs text-fuchsia-400 hover:text-fuchsia-300 transition-colors font-medium">
                See all <ChevronRight size={13} />
              </button>
            </div>

            {/* Posts */}
            <div className="space-y-3">
              {POSTS.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            {/* AI insight card */}
            <div className="relative bg-gradient-to-br from-violet-900/30 via-fuchsia-900/20 to-transparent border border-violet-500/20 rounded-2xl p-5 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
              <div className="flex items-start gap-3">
                <div
                  className={`w-9 h-9 rounded-xl ${GRADIENT_BG} flex items-center justify-center flex-shrink-0`}
                >
                  <Zap size={15} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">
                    AI Community Insight
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Surge in power-cut reports near Adyar in the last hour. 3
                    neighbours with generators are within 1 km. Consider
                    connecting them with open requests.
                  </p>
                  <button className="mt-3 text-xs font-semibold text-fuchsia-400 hover:text-fuchsia-300 transition-colors flex items-center gap-1">
                    View Matches <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right sidebar (desktop) ── */}
          <aside className="hidden xl:block w-64 flex-shrink-0 space-y-4">
            {/* Nearby helpers */}
            <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Nearby Helpers
              </p>
              <div className="space-y-3">
                {[
                  {
                    name: "Ramesh K.",
                    skill: "Electrician",
                    km: "0.3 km",
                    av: "RK",
                    c: "from-violet-500 to-fuchsia-500",
                  },
                  {
                    name: "Meena P.",
                    skill: "First Aid",
                    km: "0.6 km",
                    av: "MP",
                    c: "from-fuchsia-500 to-pink-500",
                  },
                  {
                    name: "Arjun V.",
                    skill: "Driver",
                    km: "1.1 km",
                    av: "AV",
                    c: "from-pink-500 to-rose-400",
                  },
                ].map((h) => (
                  <div key={h.name} className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-xl bg-gradient-to-br ${h.c} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}
                    >
                      {h.av}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-xs font-semibold truncate">
                        {h.name}
                      </p>
                      <p className="text-gray-600 text-[10px]">{h.skill}</p>
                    </div>
                    <span className="text-[10px] text-fuchsia-500/70">
                      {h.km}
                    </span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-3 py-2 rounded-xl border border-white/8 text-xs text-gray-500 hover:text-gray-300 hover:border-white/15 transition-all font-medium">
                View All
              </button>
            </div>

            {/* Your activity */}
            <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Your Activity
              </p>
              <div className="space-y-2">
                {[
                  { label: "Posts Created", val: 4 },
                  { label: "Requests Helped", val: 7 },
                  { label: "Reputation Points", val: 142 },
                ].map((a) => (
                  <div
                    key={a.label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-xs text-gray-500">{a.label}</span>
                    <span className={`text-xs font-bold ${GRADIENT_TEXT}`}>
                      {a.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick post CTA */}
            <button
              onClick={() => setShowModal(true)}
              className={`w-full py-3.5 rounded-2xl font-bold text-white text-sm ${GRADIENT_BG} shadow-lg shadow-violet-500/20 hover:opacity-90 hover:scale-[1.01] transition-all flex items-center justify-center gap-2`}
            >
              <Plus size={16} /> Post a Request
            </button>
          </aside>
        </div>
      </main>

      {/* Bottom nav (mobile) */}
      <BottomNav onNewPost={() => setShowModal(true)} />

      {/* Modal */}
      {showModal && <NewPostModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
