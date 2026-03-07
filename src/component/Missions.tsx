"use client"

import { Wallet, Shield, Zap } from "lucide-react"
import { useInView } from "../hooks/use-in-view"

export function Mission() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section ref={ref} id="about" className="py-16 sm:py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance transition-all duration-700 ease-out"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateX(0)" : "translateX(-40px)",
              }}
            >
              Our Mission
            </h2>
            <p 
              className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty transition-all duration-700 ease-out delay-100"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateX(0)" : "translateX(-40px)",
              }}
            >
              We're on a mission to democratize financial services and make money management accessible to everyone, everywhere. Traditional banking has left too many people behind with complex processes and hidden fees.
            </p>
            <p 
              className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty transition-all duration-700 ease-out delay-200"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateX(0)" : "translateX(-40px)",
              }}
            >
              At Jeton, we believe that everyone deserves transparent, fast, and affordable financial services. We're building the tools that give you complete control over your money, no matter where you are in the world.
            </p>
          </div>
          
          <div 
            className="relative transition-all duration-700 ease-out delay-300"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateX(0) scale(1)" : "translateX(40px) scale(0.95)",
            }}
          >
            <div className="aspect-square rounded-3xl bg-secondary p-8 lg:p-12">
              <div className="h-full w-full rounded-2xl bg-card border border-border p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Wallet className="h-5 w-5 text-accent" />
                    </div>
                    <span className="font-semibold text-foreground">Digital Wallet</span>
                  </div>
                  <div 
                    className="h-3 rounded bg-secondary transition-all duration-1000 ease-out delay-500"
                    style={{ width: isInView ? "75%" : "0%" }}
                  />
                  <div 
                    className="h-3 rounded bg-secondary transition-all duration-1000 ease-out delay-700"
                    style={{ width: isInView ? "50%" : "0%" }}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 rounded-xl bg-secondary hover:bg-accent/10 transition-colors duration-300 group cursor-pointer">
                    <Shield className="h-5 w-5 text-accent mb-2 transition-transform group-hover:scale-110" />
                    <span className="text-xs text-muted-foreground">Secure</span>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary hover:bg-accent/10 transition-colors duration-300 group cursor-pointer">
                    <Zap className="h-5 w-5 text-accent mb-2 transition-transform group-hover:scale-110" />
                    <span className="text-xs text-muted-foreground">Instant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
