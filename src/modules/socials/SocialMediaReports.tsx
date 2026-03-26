import { useState } from "react";
import {
  FaInstagram, FaFacebookF, FaTwitter, FaLock, FaMapMarkerAlt,
  FaShareAlt, FaComment, FaEnvelope, FaEye, FaPlus, FaFilter,
  FaEllipsisH, FaChevronDown,
} from "react-icons/fa";
import { HiCheckCircle, HiLightBulb } from "react-icons/hi";
import { MdCampaign } from "react-icons/md";

const platforms = [
  { name: "Instagram", icon: FaInstagram, active: true },
  { name: "Facebook", icon: FaFacebookF, active: false },
  { name: "Twitter", icon: FaTwitter, active: false },
];

type ReportCardData = {
  platform: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  created: string;
  target: string;
  age: string;
  amountSpent: string;
  leadsGenerated: number;
  impressions: string;
  image: string;
  postText: string;
  reach: string;
  followers: string;
  emails: string;
  engagement: string;
  aiSuggestion: string;
};

const cardsData: ReportCardData[] = [
  {
    platform: "Instagram",
    icon: FaInstagram,
    iconBg: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400",
    iconColor: "text-white",
    created: "2 days ago",
    target: "Target United State",
    age: "Age-344",
    amountSpent: "$8,420",
    leadsGenerated: 120,
    impressions: "58K",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop",
    postText: "Boost Your Productivity 💎🚀 Discover these top tips for staying focused and .....  more",
    reach: "56K",
    followers: "580",
    emails: "1,098",
    engagement: "34.2%",
    aiSuggestion: "Try using video content to drive more engagement.",
  },
  {
    platform: "Facebook",
    icon: FaFacebookF,
    iconBg: "bg-blue-600",
    iconColor: "text-white",
    created: "5 days ago",
    target: "Target United State",
    age: "Age-244",
    amountSpent: "$6,200",
    leadsGenerated: 90,
    impressions: "47K",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238f067?w=300&h=300&fit=crop",
    postText: "🎁 SPRING SPECIAL 🎯 25% OFF ON ALL COLLECTIONS! Shop now:example.com/sale...",
    reach: "47K",
    followers: "490",
    emails: "430",
    engagement: "60%",
    aiSuggestion: "Consider testing different ad copy for better conversion rates.",
  },
];

const ReportCard = ({ data }: { data: ReportCardData }) => {
  const Icon = data.icon;
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex-1 min-w-[320px]">

      {/* Card Header */}
      <div className="px-5 py-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 ${data.iconBg} rounded-xl flex items-center justify-center`}>
            <Icon className={`${data.iconColor} text-lg`} />
          </div>
          <span className="text-xl font-bold text-gray-800" style={{ fontFamily: "Inter, sans-serif" }}>
            {data.platform}
          </span>
          <span className="text-[11px] px-2 py-0.5 bg-blue-50 text-blue-500 rounded-full border border-blue-200 font-medium">
            Created <FaChevronDown className="inline text-[8px] ml-0.5" />
          </span>
          <span className="text-sm text-gray-400">{data.created}</span>
        </div>
        <button className="text-sm text-blue-500 font-medium hover:text-blue-700">Filters</button>
      </div>

      {/* Target Info */}
      <div className="px-5 py-2 flex items-center gap-3 text-xs text-gray-500 border-b border-gray-50">
        <span className="flex items-center gap-1">
          <FaMapMarkerAlt className="text-blue-400" />
          {data.target}
        </span>
        <span className="flex items-center gap-1">
          <FaLock className="text-gray-400" />
          {data.age}
        </span>
      </div>

      {/* Stats + Image */}
      <div className="px-5 py-4 flex gap-4">

        {/* Stats */}
        <div className="flex-1 space-y-4">
          {/* Amount Spent */}
          <div>
            <p className="text-xs text-gray-500 flex items-center gap-1.5 mb-1">
              <FaLock className="text-gray-400 text-[10px]" />
              Amount spent
            </p>
            <p className="text-2xl font-bold text-gray-800" style={{ fontFamily: "Inter, sans-serif" }}>
              {data.amountSpent}
            </p>
          </div>

          {/* Leads Generated */}
          <div>
            <p className="text-xs text-gray-500 flex items-center gap-1.5 mb-1">
              <HiCheckCircle className="text-blue-400 text-sm" />
              Leads Generated
            </p>
            <p className="text-2xl font-bold text-gray-800" style={{ fontFamily: "Inter, sans-serif" }}>
              {data.leadsGenerated}
            </p>
          </div>

          {/* Impressions */}
          <div>
            <p className="text-xs text-gray-500 flex items-center gap-1.5 mb-1">
              <MdCampaign className="text-gray-400 text-sm" />
              Impressions
            </p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold text-gray-800" style={{ fontFamily: "Inter, sans-serif" }}>
                {data.impressions}
              </p>
              <span className="text-gray-400">·</span>
              <FaShareAlt className="text-gray-300 text-sm" />
              <FaEye className="text-gray-300 text-sm" />
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-40 h-44 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
          <img
            src={data.image}
            alt={data.platform}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Post Text */}
      <div className="px-5 py-3 border-t border-gray-100">
        <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
          {data.postText}
        </p>
      </div>

      {/* Engagement Row */}
      <div className="px-5 py-3 flex items-center justify-between border-t border-gray-100 bg-blue-50/50">
        <div className="flex items-center gap-1.5">
          <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
            <FaShareAlt className="text-white text-[8px]" />
          </span>
          <span className="text-sm font-bold text-gray-700">{data.reach}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
            <FaPlus className="text-white text-[8px]" />
          </span>
          <span className="text-sm font-bold text-gray-700">{data.followers}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <FaEnvelope className="text-gray-400 text-sm" />
          <span className="text-sm font-bold text-gray-700">{data.emails}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <FaComment className="text-gray-400 text-sm" />
          <span className="text-sm font-bold text-gray-700">{data.engagement}</span>
        </div>
      </div>

      {/* AI Suggestion */}
      <div className="px-5 py-3 border-t border-gray-100">
        <p className="text-sm">
          <span className="text-green-500 font-semibold flex items-center gap-1 mb-1">
            <HiLightBulb className="text-yellow-500" />
            AI Suggestion
          </span>
          <span className="text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>
            {data.aiSuggestion}
          </span>
        </p>
      </div>

    </div>
  );
};

const SocialMediaReports = () => {
  const [activePlatform, setActivePlatform] = useState("Instagram");

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 via-blue-50/50 to-white py-6 px-4" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="max-w-7xl mx-auto">

        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Social Media Reports
          </h1>

          <div className="flex items-center gap-3 text-sm text-gray-500">
            <div className="w-8 h-8 bg-gray-200 rounded-lg" />
            <span>Regions : <b className="text-gray-800">United States</b></span>
            <span className="text-gray-300">|</span>
            <span>Age : <b className="text-gray-800">25–34</b></span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-1">
              All Users <FaChevronDown className="text-[10px]" />
            </span>
          </div>
        </div>

        {/* Platform Tabs + Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
            {platforms.map((p) => {
              const Icon = p.icon;
              const isActive = activePlatform === p.name;
              return (
                <button
                  key={p.name}
                  onClick={() => setActivePlatform(p.name)}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-blue-500 text-white shadow-md"
                      : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <Icon className={isActive ? "text-white" : "text-gray-400"} />
                  {p.name}
                </button>
              );
            })}
            <div className="hidden sm:flex items-center gap-2 ml-2 text-gray-400">
              <FaTwitter className="text-blue-400" />
              <span className="text-sm text-gray-500">Twitter</span>
              <FaLock className="text-gray-300 text-xs" />
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-500 hover:bg-gray-50 whitespace-nowrap">
              <FaFilter className="text-xs" />
              Filters
            </button>
            <button className="p-1.5 border border-gray-200 rounded-lg text-gray-400 hover:bg-gray-50">
              <FaEllipsisH />
            </button>
          </div>
        </div>

        {/* Report Cards */}
        <div className="flex flex-col lg:flex-row gap-5">
          {cardsData.map((card) => (
            <ReportCard key={card.platform} data={card} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default SocialMediaReports;
