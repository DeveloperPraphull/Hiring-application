"use client"

import { Quote } from "lucide-react"
import { useInView } from "../hooks/use-in-view"

export function FounderQuote() {
  const { ref, isInView } = useInView({ threshold: 0.3 })

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-card">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div 
          className="relative rounded-3xl bg-primary p-8 sm:p-12 lg:p-16 transition-all duration-700 ease-out"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
          }}
        >
          <Quote 
            className="absolute top-6 left-6 h-12 w-12 text-primary-foreground/20 transition-all duration-500 delay-300"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "rotate(0deg)" : "rotate(-20deg)",
            }}
          />
          
          <blockquote className="relative z-10">
            <p 
              className="text-xl sm:text-2xl lg:text-3xl font-medium text-primary-foreground leading-relaxed text-pretty transition-all duration-700 ease-out delay-200"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
              }}
            >
              At Jeton, we believe people should have full control over their money. That's why we built a platform that puts transparency, simplicity, and your needs first.
            </p>
            
            <footer 
              className="mt-8 flex items-center gap-4 transition-all duration-700 ease-out delay-400"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateX(0)" : "translateX(-20px)",
              }}
            >
              <div className="h-14 w-14 rounded-full bg-primary-foreground/20 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <span className="text-lg font-bold text-primary-foreground">MK</span>
              </div>
              <div>
                <p className="font-semibold text-primary-foreground">Michael Kessler</p>
                <p className="text-sm text-primary-foreground/70">Founder & CEO, Jeton</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
