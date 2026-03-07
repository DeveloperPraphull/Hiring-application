"use client"

import { ArrowRight } from "lucide-react"
import { useInView } from "../hooks/use-in-view"
import { Button } from "./ui/Button"

export function Hero() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl transition-all duration-1000 ease-out"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView 
              ? "translateY(-25%) translateX(25%)" 
              : "translateY(-25%) translateX(50%)",
          }}
        />
        <div 
          className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl transition-all duration-1000 ease-out delay-200"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView 
              ? "translateY(25%) translateX(-25%)" 
              : "translateY(25%) translateX(-50%)",
          }}
        />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div 
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground border border-border transition-all duration-700 ease-out"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Trusted by millions worldwide
          </div>
          
          <h1 
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance transition-all duration-700 ease-out delay-100"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            Your money. Your way.
          </h1>
          
          <p 
            className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty transition-all duration-700 ease-out delay-200"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            A modern digital wallet that puts you in control. Send money globally, receive payments instantly, and manage your finances with complete transparency.
          </p>
          
          <div 
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ease-out delay-300"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <Button size="lg" className="gap-2 w-full sm:w-auto group">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
