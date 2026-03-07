"use client"

import { ArrowRight } from "lucide-react"
import { useInView } from "../hooks/use-in-view"
import { Button } from "./ui/Button"

export function CallToAction() {
  const { ref, isInView } = useInView({ threshold: 0.3 })

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          className="relative rounded-3xl bg-secondary overflow-hidden transition-all duration-700 ease-out"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
          }}
        >
          <div className="absolute inset-0 -z-10">
            <div 
              className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl transition-all duration-1000 ease-out"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translate(0, 0)" : "translate(100px, -100px)",
              }}
            />
            <div 
              className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl transition-all duration-1000 ease-out delay-200"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translate(0, 0)" : "translate(-100px, 100px)",
              }}
            />
          </div>
          
          <div className="relative px-8 py-16 sm:px-16 sm:py-24 text-center">
            <h2 
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance transition-all duration-700 ease-out delay-100"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(30px)",
              }}
            >
              Ready to take control of your money?
            </h2>
            <p 
              className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty transition-all duration-700 ease-out delay-200"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(30px)",
              }}
            >
              Join over a million users who trust Jeton for their global payments. Sign up in minutes and experience the future of finance.
            </p>
            <div 
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ease-out delay-300"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(30px)",
              }}
            >
              <Button size="lg" className="gap-2 w-full sm:w-auto group">
                Create Account
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
