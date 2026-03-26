import { useState, useEffect, useRef } from "react";
import {
  Users,
  Globe,
  Building2,
  Target,
  Eye,
  Sparkles,
  Shield,
  Zap,
  Heart,
  Award,
  Lock,
  ArrowRight,
  Quote,
  TrendingUp,
  Rocket,
  Star,
  CheckCircle2,
  MapPin,
  ChevronRight,
} from "lucide-react";

/* ─── hook: fade-in on scroll ─── */
function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── animated counter ─── */
function Counter({ end, suffix = "", duration = 1800 }: { end: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const steps = 50;
        const inc = end / steps;
        let cur = 0;
        const iv = setInterval(() => {
          cur += inc;
          if (cur >= end) { setVal(end); clearInterval(iv); }
          else setVal(Math.floor(cur));
        }, duration / steps);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─── data ─── */
const stats = [
  { icon: <Users className="w-6 h-6" />, value: 1, suffix: "M+", label: "Active Users", color: "blue" },
  { icon: <Globe className="w-6 h-6" />, value: 60, suffix: "+", label: "Countries", color: "green" },
  { icon: <Building2 className="w-6 h-6" />, value: 1000, suffix: "+", label: "Business Partners", color: "purple" },
  { icon: <TrendingUp className="w-6 h-6" />, value: 99, suffix: "%", label: "Client Satisfaction", color: "orange" },
];

const values = [
  { icon: <Sparkles className="w-6 h-6" />, title: "Innovation", desc: "We push the boundaries of technology to deliver cutting-edge solutions that keep you ahead of the curve." },
  { icon: <Shield className="w-6 h-6" />, title: "Security", desc: "Bank-grade encryption and certified security protocols protect every transaction and piece of data." },
  { icon: <Eye className="w-6 h-6" />, title: "Transparency", desc: "No hidden fees, no surprises. Every cost and process is clearly communicated upfront." },
  { icon: <Heart className="w-6 h-6" />, title: "People First", desc: "Our users are at the heart of every decision. We design for real people with real needs." },
  { icon: <Zap className="w-6 h-6" />, title: "Speed", desc: "Instant transfers, real-time tracking, and lightning-fast support—because your time matters." },
  { icon: <Globe className="w-6 h-6" />, title: "Global Reach", desc: "Operating across 60+ countries, we break down borders so your money moves freely." },
];

const timeline = [
  { year: "2018", title: "The Spark", desc: "Founded with a vision to reimagine digital finance for everyone." },
  { year: "2019", title: "First 10K Users", desc: "Reached our first milestone with rapid organic growth." },
  { year: "2020", title: "Global Expansion", desc: "Launched services in 30+ countries across 3 continents." },
  { year: "2022", title: "1 Million Users", desc: "Surpassed one million active users worldwide." },
  { year: "2024", title: "Industry Recognition", desc: "Won Best Payment Provider at the Global Fintech Awards." },
];

const awards = [
  { icon: <Shield className="w-7 h-7" />, title: "ISO 27001", desc: "Certified Security Management" },
  { icon: <Award className="w-7 h-7" />, title: "Best Payment Provider", desc: "Fintech Awards 2024" },
  { icon: <Lock className="w-7 h-7" />, title: "Cyber Essentials Plus", desc: "Government Backed Certification" },
];

const team = [
  { initials: "MK", name: "Michael Kessler", role: "Founder & CEO", color: "from-blue-500 to-blue-700" },
  { initials: "SL", name: "Sarah Lee", role: "CTO", color: "from-purple-500 to-purple-700" },
  { initials: "AJ", name: "Alex Johnson", role: "Head of Product", color: "from-green-500 to-green-700" },
  { initials: "RD", name: "Rachel Davis", role: "Head of Design", color: "from-orange-500 to-orange-700" },
];

/* ═══════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <main
      className="min-h-screen w-full bg-gradient-to-b from-[#dce8f8] via-[#e8f0fb] to-[#f0f6fd]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* ═══════ HERO ═══════ */}
      <HeroSection />
      {/* ═══════ STATS ═══════ */}
      <StatsSection />
      {/* ═══════ OUR STORY ═══════ */}
      <StorySection />
      {/* ═══════ MISSION & VISION ═══════ */}
      <MissionVisionSection />
      {/* ═══════ VALUES ═══════ */}
      <ValuesSection />
      {/* ═══════ TIMELINE ═══════ */}
      <TimelineSection />
      {/* ═══════ TEAM ═══════ */}
      <TeamSection />
      {/* ═══════ FOUNDER QUOTE ═══════ */}
      <QuoteSection />
      {/* ═══════ AWARDS ═══════ */}
      <AwardsSection />
      {/* ═══════ CTA ═══════ */}
      <CTASection />
    </main>
  );
}

/* ─────────────────── HERO ─────────────────── */
function HeroSection() {
  const { ref, visible } = useFadeIn();
  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 sm:py-28 lg:py-36"
    >
      {/* bg blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full bg-[#1e3a6e]/8 blur-[100px]" />
        <div className="absolute bottom-[-60px] left-[-60px] w-[400px] h-[400px] rounded-full bg-blue-400/10 blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 text-center">
        <div
          className="inline-flex items-center gap-2 bg-white/60 backdrop-blur rounded-full px-5 py-2 mb-6 shadow-sm border border-white/50 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
        >
          <span className="w-2 h-2 rounded-full bg-[#1e3a6e] animate-pulse" />
          <span className="text-sm font-semibold text-gray-600">About Us</span>
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-5 transition-all duration-700 delay-100"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
        >
          Building the Future of{" "}
          <span className="bg-gradient-to-r from-[#1e3a6e] to-blue-500 bg-clip-text text-transparent">
            Digital Finance
          </span>
        </h1>

        <p
          className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 transition-all duration-700 delay-200"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
        >
          We started with a simple belief: everyone deserves transparent, fast,
          and affordable financial services — no matter where they are in the world.
        </p>

        <div
          className="flex flex-wrap justify-center gap-4 transition-all duration-700 delay-300"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
        >
          <a
            href="#story"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1e3a6e] hover:bg-[#163058] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.97]"
          >
            Our Story
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#values"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/70 backdrop-blur hover:bg-white text-gray-700 font-bold rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all active:scale-[0.97]"
          >
            Our Values
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── STATS ─────────────────── */
function StatsSection() {
  const { ref, visible } = useFadeIn();
  const colorMap: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    purple: "bg-purple-50 text-purple-600",
    orange: "bg-orange-50 text-orange-600",
  };
  return (
    <section ref={ref} className="pb-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className={`w-12 h-12 rounded-xl ${colorMap[s.color]} flex items-center justify-center mx-auto mb-3`}>
                {s.icon}
              </div>
              <span className="text-3xl font-extrabold text-gray-800 block">
                <Counter end={s.value} suffix={s.suffix} />
              </span>
              <span className="text-sm text-gray-500 mt-1 block">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── OUR STORY ─────────────────── */
function StorySection() {
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} id="story" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* text */}
          <div>
            <div
              className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-1.5 mb-5 transition-all duration-700"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-30px)" }}
            >
              <Rocket className="w-3.5 h-3.5 text-[#1e3a6e]" />
              <span className="text-xs font-bold text-[#1e3a6e] uppercase tracking-wider">Our Story</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-5 transition-all duration-700 delay-100"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-30px)" }}
            >
              From a Bold Idea to a Global Platform
            </h2>
            <p
              className="text-gray-500 leading-relaxed mb-4 transition-all duration-700 delay-200"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-30px)" }}
            >
              We started in 2018 with a clear conviction: traditional finance had left too many people behind.
              Complex processes, hidden fees, and slow transfers were the norm — and we knew there had to be a better way.
            </p>
            <p
              className="text-gray-500 leading-relaxed transition-all duration-700 delay-300"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-30px)" }}
            >
              Today, we serve over a million users in 60+ countries with instant transfers,
              transparent pricing, and a platform designed to put you in complete control of your money.
            </p>
          </div>

          {/* visual card */}
          <div
            className="transition-all duration-700 delay-300"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0) scale(1)" : "translateX(30px) scale(0.95)" }}
          >
            <div className="bg-gradient-to-br from-[#1e3a6e] to-[#2a4a80] rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-[-60px] right-[-60px] w-60 h-60 bg-white/5 rounded-full" />
              <div className="absolute bottom-[-40px] left-[-40px] w-40 h-40 bg-white/5 rounded-full" />
              <div className="relative space-y-6">
                {[
                  { icon: <CheckCircle2 className="w-5 h-5" />, text: "1M+ users across 60+ countries" },
                  { icon: <CheckCircle2 className="w-5 h-5" />, text: "100% transparent fee structure" },
                  { icon: <CheckCircle2 className="w-5 h-5" />, text: "Instant cross-border transfers" },
                  { icon: <CheckCircle2 className="w-5 h-5" />, text: "Bank-grade security & compliance" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90">
                    <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── MISSION & VISION ─────────────────── */
function MissionVisionSection() {
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Mission */}
          <div
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-500"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)" }}
          >
            <div className="w-12 h-12 bg-[#1e3a6e] rounded-xl flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-extrabold text-gray-800 mb-3">Our Mission</h3>
            <p className="text-gray-500 leading-relaxed">
              To democratize financial services and make money management accessible to everyone, everywhere.
              We're building tools that give you complete control over your finances — transparent, fast, and affordable.
            </p>
          </div>

          {/* Vision */}
          <div
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-500 delay-150"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transitionDelay: "150ms" }}
          >
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-5">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-extrabold text-gray-800 mb-3">Our Vision</h3>
            <p className="text-gray-500 leading-relaxed">
              A world where financial borders don't exist. Where sending money across the globe is as simple as
              sending a message — instant, secure, and cost-free for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── VALUES ─────────────────── */
function ValuesSection() {
  const { ref, visible } = useFadeIn();
  const colors = ["blue", "green", "orange", "rose", "purple", "teal"];
  const bgMap: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600",
    green: "bg-green-50 text-green-600 group-hover:bg-green-600",
    orange: "bg-orange-50 text-orange-600 group-hover:bg-orange-600",
    rose: "bg-rose-50 text-rose-600 group-hover:bg-rose-600",
    purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-600",
    teal: "bg-teal-50 text-teal-600 group-hover:bg-teal-600",
  };
  return (
    <section ref={ref} id="values" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 bg-white/60 backdrop-blur rounded-full px-5 py-2 mb-4 shadow-sm border border-white/50 transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
          >
            <Heart className="w-4 h-4 text-[#1e3a6e]" />
            <span className="text-sm font-semibold text-gray-600">What Drives Us</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3 transition-all duration-700 delay-100"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
          >
            Our Core Values
          </h2>
          <p
            className="text-gray-500 max-w-lg mx-auto transition-all duration-700 delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
          >
            The principles that guide every decision we make.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div className={`w-12 h-12 rounded-xl ${bgMap[colors[i]]} flex items-center justify-center mb-4 transition-all duration-300 group-hover:text-white group-hover:scale-110`}>
                {v.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{v.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── TIMELINE ─────────────────── */
function TimelineSection() {
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3 transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
          >
            Our Journey
          </h2>
          <p
            className="text-gray-500 transition-all duration-700 delay-100"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
          >
            Key milestones that shaped who we are today.
          </p>
        </div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <div
                key={t.year}
                className="relative pl-16 transition-all duration-500"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-30px)",
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                {/* dot */}
                <div className="absolute left-[14px] top-1 w-6 h-6 bg-[#1e3a6e] rounded-full border-4 border-[#dce8f8] shadow-sm" />
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 hover:shadow-lg transition-shadow">
                  <span className="inline-block text-xs font-extrabold text-[#1e3a6e] bg-blue-50 px-3 py-1 rounded-full mb-2">
                    {t.year}
                  </span>
                  <h3 className="text-base font-bold text-gray-800 mb-1">{t.title}</h3>
                  <p className="text-sm text-gray-500">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── TEAM ─────────────────── */
function TeamSection() {
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3 transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
          >
            Leadership Team
          </h2>
          <p
            className="text-gray-500 max-w-md mx-auto transition-all duration-700 delay-100"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
          >
            The people driving our mission forward every day.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <div
              key={m.name}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-xl font-extrabold text-white">{m.initials}</span>
              </div>
              <h4 className="font-bold text-gray-800 text-sm">{m.name}</h4>
              <p className="text-xs text-gray-400 mt-0.5">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── FOUNDER QUOTE ─────────────────── */
function QuoteSection() {
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div
          className="relative bg-gradient-to-br from-[#1e3a6e] to-[#2a4a80] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)" }}
        >
          <div className="absolute top-[-60px] right-[-60px] w-60 h-60 bg-white/5 rounded-full" />
          <div className="absolute bottom-[-40px] left-[-40px] w-40 h-40 bg-white/5 rounded-full" />
          <Quote className="absolute top-6 left-6 w-12 h-12 text-white/10" />
          <blockquote className="relative z-10">
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/90 leading-relaxed mb-8">
              "At Jeton, we believe people should have full control over their money.
              That's why we built a platform that puts transparency, simplicity, and your needs first."
            </p>
            <footer className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center">
                <span className="text-lg font-extrabold text-white">MK</span>
              </div>
              <div>
                <p className="font-bold text-white">Michael Kessler</p>
                <p className="text-sm text-white/60">Founder & CEO</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── AWARDS ─────────────────── */
function AwardsSection() {
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-10 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
        >
          Awards & Certifications
        </h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {awards.map((a, i) => (
            <div
              key={a.title}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-7 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-[#1e3a6e]/10 text-[#1e3a6e] rounded-2xl flex items-center justify-center group-hover:bg-[#1e3a6e] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                {a.icon}
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{a.title}</h3>
              <p className="text-xs text-gray-400">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── CTA ─────────────────── */
function CTASection() {
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} className="py-16 sm:py-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div
          className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)" }}
        >
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full bg-blue-100/40 blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] rounded-full bg-purple-100/30 blur-[80px]" />
          </div>
          <div className="relative px-8 py-14 sm:px-16 sm:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-8">
              Join over a million users who trust us for their global payments.
              Sign up in minutes and experience the future of finance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1e3a6e] hover:bg-[#163058] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.97]"
              >
                Contact Us
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="/locations"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-all active:scale-[0.97]"
              >
                <MapPin className="w-4 h-4" />
                Visit Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


