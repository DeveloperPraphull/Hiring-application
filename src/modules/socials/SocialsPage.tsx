import {
  FaEnvelope, FaLinkedinIn, FaSearch, FaHeart, FaThumbsUp,
  FaChartLine, FaAd, FaUsers, FaFacebookF,
  FaGoogle, FaYoutube, FaInstagram, FaTwitter, FaMicrophone,
  FaGift, FaHashtag, FaArrowUp,
} from "react-icons/fa";
import { MdEmail, MdCampaign } from "react-icons/md";
import { HiTrendingUp } from "react-icons/hi";

/* ─── Email Card ─── */
const EmailCard = () => (
  <div className="bg-white rounded-2xl shadow-lg border overflow-hidden flex-1 min-w-[280px]">
    {/* Header */}
    <div className="bg-gradient-to-r from-blue-600 to-blue-400 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MdEmail className="text-white text-xl" />
        <span className="text-white font-bold text-lg">Email</span>
      </div>
      <div className="flex items-center gap-2">
        <FaEnvelope className="text-white/80 text-sm" />
        <FaUsers className="text-white/80 text-sm" />
        <FaChartLine className="text-yellow-300 text-sm" />
      </div>
    </div>

    {/* Body */}
    <div className="p-4">
      <p className="text-gray-600 font-semibold text-sm mb-3">Audience Segmentation</p>

      <div className="flex items-start gap-6">
        <div>
          <p className="text-3xl font-bold text-gray-800">6,800</p>
          <div className="flex gap-4 mt-1 text-xs text-gray-500">
            <span><b className="text-gray-700">26%</b> Contacts</span>
            <span><b className="text-gray-700">7.99%</b></span>
          </div>
          <div className="flex gap-4 mt-1 text-xs text-gray-500">
            <span><b className="text-gray-700">540</b> Clicks</span>
            <span><b className="text-gray-700">7.9</b> Open rate</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <FaEnvelope className="text-blue-500 text-xs" />
          </div>
          <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
            <FaChartLine className="text-yellow-500 text-xs" />
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
          <FaYoutube className="text-red-500 text-xs" />
        </div>
        <div>
          <p className="text-xs text-gray-700">Product launch newsletter sent to segmented subscribers</p>
          <p className="text-[10px] text-gray-400">1hr ago</p>
        </div>
      </div>
    </div>
  </div>
);

/* ─── LinkedIn Card ─── */
const LinkedInCard = () => (
  <div className="bg-white rounded-2xl shadow-lg border overflow-hidden flex-1 min-w-[280px]">
    {/* Header */}
    <div className="bg-gradient-to-r from-blue-700 to-blue-500 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center">
          <FaLinkedinIn className="text-blue-700 text-sm" />
        </div>
        <span className="text-white font-bold text-lg">Linkedin</span>
      </div>
      <div className="flex items-center gap-2">
        <FaChartLine className="text-white/80 text-sm" />
        <FaUsers className="text-green-300 text-sm" />
        <FaChartLine className="text-yellow-300 text-sm" />
      </div>
    </div>

    {/* Body */}
    <div className="p-4">
      <p className="text-gray-600 font-semibold text-sm mb-3">Sponsored Update</p>

      <div className="flex items-start gap-6">
        <div>
          <p className="text-3xl font-bold text-gray-800">23,400</p>
          <div className="flex gap-4 mt-1 text-xs text-gray-500">
            <span><b className="text-gray-700">Impressions</b></span>
            <span><b className="text-gray-700">2.40</b></span>
          </div>
          <div className="flex gap-4 mt-1 text-xs text-gray-500">
            <span><b className="text-gray-700">240</b> Clicks</span>
            <span><b className="text-gray-700">90</b> Leads</span>
          </div>
        </div>
        <div className="w-20 h-14 bg-blue-50 rounded-lg border border-blue-200 flex items-center justify-center">
          <div className="text-blue-400 text-2xl">💻</div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
          <FaFacebookF className="text-blue-600 text-xs" />
        </div>
        <div>
          <p className="text-xs text-gray-700">New thought leadership article published on company</p>
          <p className="text-[10px] text-gray-400">4hr ago</p>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Small Channel Card ─── */
type ChannelCardProps = {
  title: string;
  gradient: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  footerLabel?: string;
};

const ChannelCard = ({ title, gradient, icon, children, footerLabel }: ChannelCardProps) => (
  <div className="bg-white rounded-2xl shadow-lg border overflow-hidden flex-1 min-w-[200px]">
    <div className={`${gradient} px-3 py-2 flex items-center justify-between`}>
      <div className="flex items-center gap-1.5">
        {icon}
        <span className="text-white font-bold text-sm">{title}</span>
      </div>
    </div>
    <div className="p-3">
      {children}
    </div>
    {footerLabel && (
      <div className="px-3 pb-2">
        <p className="text-[10px] text-gray-400">{footerLabel}</p>
      </div>
    )}
  </div>
);

/* ─── Main Page ─── */
const SocialsPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 via-white to-blue-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-8">
          Update for <span className="text-blue-600">Email</span>, <span className="text-blue-700">Linkedin</span>, and <span className="text-blue-700">Linkedin</span> markets
        </h1>

        {/* Top Row: Email + LinkedIn */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <EmailCard />
          <LinkedInCard />
        </div>

        {/* Middle Row: Paid Search, Social Media, Content, SEO Ads */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

          {/* Paid Search */}
          <ChannelCard
            title="Paid Search"
            gradient="bg-gradient-to-r from-red-500 to-orange-400"
            icon={<FaSearch className="text-white text-sm" />}
            footerLabel="Paid Search : Spent"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="px-2 py-0.5 bg-gray-100 rounded text-[10px] text-gray-600 border">Google Search</div>
                <FaGoogle className="text-blue-500 text-xs" />
              </div>
              <p className="text-2xl font-bold text-gray-800">$62,600</p>
              <p className="text-xs text-gray-500">Spent</p>
              <div className="flex gap-2">
                <span className="text-[10px] px-1.5 py-0.5 bg-green-100 text-green-600 rounded">Searches</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-blue-100 text-blue-600 rounded">Bids</span>
              </div>
            </div>
          </ChannelCard>

          {/* Social Media */}
          <ChannelCard
            title="Social Media"
            gradient="bg-gradient-to-r from-orange-400 to-yellow-400"
            icon={<FaHeart className="text-white text-sm" />}
            footerLabel="Total engagement"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FaFacebookF className="text-blue-600 text-lg" />
                <FaYoutube className="text-red-500" />
                <FaInstagram className="text-pink-500" />
                <FaTwitter className="text-blue-400 text-sm" />
              </div>
              <p className="text-2xl font-bold text-gray-800">560K</p>
              <p className="text-xs text-gray-500">Likes & organics</p>
            </div>
          </ChannelCard>

          {/* Content */}
          <ChannelCard
            title="Content"
            gradient="bg-gradient-to-r from-blue-500 to-indigo-500"
            icon={<FaThumbsUp className="text-white text-sm" />}
            footerLabel="Posts : 7.2K Views"
          >
            <div className="space-y-2">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-gray-800">17</span>
                <span className="text-lg font-bold text-gray-600">7</span>
                <span className="text-xs text-gray-500 ml-1">Posts & Views</span>
              </div>
              <p className="text-xs text-gray-500">7.2K Views</p>
            </div>
          </ChannelCard>

          {/* SEO Ads */}
          <ChannelCard
            title="SEO Ads"
            gradient="bg-gradient-to-r from-green-400 to-teal-400"
            icon={<FaSearch className="text-white text-sm" />}
            footerLabel="Status : Rank Ranking >"
          >
            <div className="space-y-2">
              <p className="text-2xl font-bold text-gray-800">54.7K</p>
              <div className="flex gap-3 text-xs text-gray-500">
                <span>Visits</span>
                <span>Visits Ads</span>
              </div>
              <div className="flex items-center gap-2">
                <FaHashtag className="text-green-500 text-xs" />
                <span className="text-xs text-green-600 font-semibold">up</span>
                <HiTrendingUp className="text-green-500" />
              </div>
            </div>
          </ChannelCard>
        </div>

        {/* Bottom Row: Display Ads, Influencer, Referral, PR */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Display Ads */}
          <ChannelCard
            title="Display Ads"
            gradient="bg-gradient-to-r from-red-400 to-pink-400"
            icon={<FaAd className="text-white text-sm" />}
            footerLabel="Amount Spent"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <p className="text-2xl font-bold text-gray-800">$21,400</p>
                <span className="text-[10px] px-1.5 py-0.5 bg-red-100 text-red-600 rounded font-semibold">Amount Off</span>
              </div>
              <div className="flex gap-2 text-xs text-gray-500">
                <span>1 visit</span>
                <span>890%</span>
              </div>
            </div>
          </ChannelCard>

          {/* Influencer */}
          <ChannelCard
            title="Influencer"
            gradient="bg-gradient-to-r from-green-400 to-emerald-400"
            icon={<FaUsers className="text-white text-sm" />}
            footerLabel="3 Months Purchases"
          >
            <div className="space-y-2">
              <p className="text-2xl font-bold text-gray-800">221,700</p>
              <p className="text-xs text-gray-500">3 Months Purchases</p>
              <div className="flex items-center gap-1">
                <FaGift className="text-green-500 text-sm" />
                <HiTrendingUp className="text-green-500 text-sm" />
              </div>
            </div>
          </ChannelCard>

          {/* Referral */}
          <ChannelCard
            title="Referral"
            gradient="bg-gradient-to-r from-purple-500 to-pink-400"
            icon={<FaGift className="text-white text-sm" />}
            footerLabel="Members"
          >
            <div className="space-y-2">
              <p className="text-2xl font-bold text-gray-800">$12,400</p>
              <p className="text-xs text-gray-500">Members</p>
              <div className="flex gap-1">
                <FaArrowUp className="text-purple-500 text-xs" />
                <HiTrendingUp className="text-purple-400 text-sm" />
              </div>
            </div>
          </ChannelCard>

          {/* PR */}
          <ChannelCard
            title="PR"
            gradient="bg-gradient-to-r from-teal-400 to-cyan-400"
            icon={<FaMicrophone className="text-white text-sm" />}
            footerLabel="3 Mentions ok"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MdCampaign className="text-teal-500 text-lg" />
                <FaUsers className="text-teal-400 text-sm" />
                <FaChartLine className="text-teal-300 text-sm" />
              </div>
              <p className="text-2xl font-bold text-gray-800">40</p>
              <p className="text-xs text-gray-500">Mentions</p>
            </div>
          </ChannelCard>
        </div>

      </div>
    </div>
  );
};

export default SocialsPage;
