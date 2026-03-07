import { Awards } from "../component/Awards";
import { CallToAction } from "../component/CallToAction";
import { Footer } from "../component/Footer";
import { FounderQuote } from "../component/Founder-Quets";
import { Header } from "../component/Header";
import { Hero } from "../component/Hero";
import { Mission } from "../component/Missions";
import { Products } from "../component/Products";
import { Stats } from "../component/States";
import { Values } from "../component/Values";
import { WhyWeStarted } from "../component/Why-We-Started";


export default function AboutPage() {
  return (
    <main className="min-w-screen">
      <Hero />
      <Stats />
      <Mission />
      <WhyWeStarted />
      <Products />
      <Values />
      <FounderQuote />
      <Awards />
      <CallToAction />
    </main>
  )
}
