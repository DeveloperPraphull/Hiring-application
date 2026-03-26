import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Headphones,
  Users,
  Newspaper,
  Rocket,
  Globe,
} from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import GoogleMapView from "../modules/location/GoogleMapView";
import ContactForm from "../modules/contact/ContactForm";
import ContactFormExcel from "../modules/contact/ContactFormExcel";

const LOCATION = {
  name: "Shalimar Swayam Flats",
  lat: 22.7721543,
  lng: 75.8762416,
  address: "Shalimar Swayam Flats, Kumedi, Indore, Madhya Pradesh, India",
  phone: "+91 731 XXX XXXX",
  email: "contact@company.com",
  hours: "Mon – Fri: 9:00 AM – 6:00 PM",
};

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const contacts = [
    { title: "Consumer Support", desc: "Questions about payments or account issues", icon: Headphones, lightBg: "bg-blue-50", color: "text-blue-600" },
    { title: "Business Partners", desc: "Work with us as a partner", icon: Users, lightBg: "bg-green-50", color: "text-green-600" },
    { title: "Media & Press", desc: "Press and journalist inquiries", icon: Newspaper, lightBg: "bg-orange-50", color: "text-orange-600" },
    { title: "Careers", desc: "Join our global team", icon: Rocket, lightBg: "bg-purple-50", color: "text-purple-600" },
  ];

  const supportChannels = [
    { title: "Live Chat", desc: "Talk instantly with our support team for real-time help.", icon: MessageCircle, btn: "Start Chat", gradient: "from-blue-500 to-blue-600" },
    { title: "Email Support", desc: "Send us your questions and get a reply within 24 hours.", icon: Mail, btn: "Send Email", gradient: "from-green-500 to-green-600" },
    { title: "Help Center", desc: "Browse FAQs, guides, and troubleshooting articles.", icon: HelpCircle, btn: "View Help", gradient: "from-purple-500 to-purple-600" },
  ];

  const faqs = [
    { q: "How do I contact support?", a: "You can reach our support team through live chat on this page, by email at contact@company.com, or by calling during business hours." },
    { q: "How long does support take to respond?", a: "Live chat responses are instant during business hours. Email queries are typically answered within 24 hours on business days." },
    { q: "Where can I track my payments?", a: "You can track all your payments and transaction history in your account dashboard under the 'Payments' section." },
    { q: "Do you offer remote support?", a: "Yes, our team can provide remote assistance via screen sharing for complex technical issues. Just request it during a live chat session." },
    { q: "What are your business hours?", a: "Our office is open Monday through Friday, 9:00 AM to 6:00 PM IST. Live chat is available 24/7 for urgent queries." },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#dce8f8] via-[#e8f0fb] to-[#f0f6fd]" style={{ fontFamily: "Inter, sans-serif" }}>

      {/* ═══════ HERO ═══════ */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1e3a6e] via-[#2a4a80] to-[#163058] text-white py-24 sm:py-32">
        <div className="absolute top-[-60px] right-[-60px] w-60 h-60 bg-white/5 rounded-full" />
        <div className="absolute bottom-[-40px] left-[-40px] w-40 h-40 bg-white/5 rounded-full" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-white/10">
            <Mail className="w-4 h-4" />
            <span className="text-sm font-medium">Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">Contact Us</h1>
          <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Our team is ready to help you anytime. Reach out through any channel — we'd love to hear from you.
          </p>
        </div>
      </div>

      {/* ═══════ CONTACT CARDS ═══════ */}
      <div className="max-w-6xl mx-auto px-6 -mt-14 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contacts.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
              <div className={`w-12 h-12 ${item.lightBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-1.5">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════ SUPPORT CHANNELS ═══════ */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-3">Support Channels</h2>
          <p className="text-gray-500 max-w-md mx-auto">Choose the way that works best for you</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportChannels.map((ch, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all group">
              <div className={`bg-gradient-to-r ${ch.gradient} p-5 flex items-center gap-3`}>
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <ch.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">{ch.title}</h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-5 leading-relaxed">{ch.desc}</p>
                <button className="w-full py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold rounded-xl transition-all text-sm group-hover:bg-[#1e3a6e] group-hover:text-white">
                  {ch.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════ FORM + INFO ═══════ */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            <ContactForm/>
          </div>

          {/* Sidebar — 2 cols */}
          <div className="lg:col-span-2 space-y-5">
            {/* Contact info */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-5">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: Globe, label: "Address", value: LOCATION.address, iconBg: "bg-blue-50", iconColor: "text-blue-600" },
                  { icon: Phone, label: "Phone", value: LOCATION.phone, iconBg: "bg-green-50", iconColor: "text-green-600" },
                  { icon: Mail, label: "Email", value: LOCATION.email, iconBg: "bg-orange-50", iconColor: "text-orange-600" },
                  { icon: Clock, label: "Hours", value: LOCATION.hours, iconBg: "bg-purple-50", iconColor: "text-purple-600" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-9 h-9 ${item.iconBg} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold block">{item.label}</span>
                      <span className="text-sm text-gray-700 font-medium">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { icon: <FaFacebookF />, hover: "hover:bg-blue-600" },
                  { icon: <FaTwitter />, hover: "hover:bg-sky-500" },
                  { icon: <FaLinkedinIn />, hover: "hover:bg-[#0077b5]" },
                  { icon: <FaInstagram />, hover: "hover:bg-pink-500" },
                  { icon: <FaYoutube />, hover: "hover:bg-red-600" },
                ].map((s, i) => (
                  <button key={i} className={`w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 ${s.hover} hover:text-white transition-all text-sm`}>
                    {s.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Mini map */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <div className="bg-white px-4 py-3 flex items-center gap-2 border-b border-gray-100">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">{LOCATION.name}</span>
              </div>
              <iframe
                title={`Map of ${LOCATION.name}`}
                src={`https://maps.google.com/maps?q=${LOCATION.lat},${LOCATION.lng}&z=17&output=embed`}
                className="w-full h-[200px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ FAQ ═══════ */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-500 max-w-md mx-auto">Quick answers to common questions</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50/50 transition">
                <span className="font-semibold text-gray-800 text-[15px] pr-4">{faq.q}</span>
                {openFaq === i ? <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-3">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ═══════ FULL MAP ═══════ */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <GoogleMapView latitude={LOCATION.lat} longitude={LOCATION.lng} locationName={LOCATION.name} height="380px" zoom={17} />
      </div>

      {/* ═══════ CTA ═══════ */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1e3a6e] via-[#2a4a80] to-[#163058] text-white py-20">
        <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-white/5 rounded-full" />
        <div className="absolute bottom-[-30px] left-[-30px] w-32 h-32 bg-white/5 rounded-full" />
        <div className="relative z-10 text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Still Need Help?</h2>
          <p className="text-blue-200 mb-8 max-w-lg mx-auto">Our dedicated support team is available 24/7 to assist you with any questions or concerns.</p>
          <button className="bg-white text-[#1e3a6e] px-8 py-3.5 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2">
            <Headphones className="w-5 h-5" />
            Contact Support
          </button>
        </div>
      </div>
      <ContactFormExcel/>
    </div>
  );
}