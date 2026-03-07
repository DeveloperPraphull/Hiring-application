"use client"

import { Sparkles, Eye, Shield } from "lucide-react"
import { useInView } from "../hooks/use-in-view"

interface ValueCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
  isInView: boolean
}

function ValueCard({ icon, title, description, delay, isInView }: ValueCardProps) {
  return (
    <div 
      className="p-8 rounded-2xl bg-card border border-border shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-1 group"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-6 transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

const values = [
  {
    icon: <Sparkles className="h-7 w-7" />,
    title: "Simple",
    description: "We believe financial services should be easy to use. No complicated processes, no confusing jargon—just straightforward tools that work.",
  },
  {
    icon: <Eye className="h-7 w-7" />,
    title: "Transparent",
    description: "Every fee is clearly displayed upfront. No hidden charges, no surprises. You always know exactly what you're paying.",
  },
  {
    icon: <Shield className="h-7 w-7" />,
    title: "Reliable",
    description: "Your money is protected by bank-grade security. We're regulated, certified, and committed to keeping your funds safe.",
  },
]

export function Values() {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.5 })

  return (
    <section ref={ref} className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance transition-all duration-700 ease-out"
            style={{
              opacity: headerInView ? 1 : 0,
              transform: headerInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            Our Values
          </h2>
          <p 
            className="mt-4 text-lg text-muted-foreground text-pretty transition-all duration-700 ease-out delay-100"
            style={{
              opacity: headerInView ? 1 : 0,
              transform: headerInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            The principles that guide everything we do.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              delay={index * 150}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
