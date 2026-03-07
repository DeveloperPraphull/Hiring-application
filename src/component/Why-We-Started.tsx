"use client"

import { AlertCircle, EyeOff, Lock, Globe2 } from "lucide-react"
import { useInView } from "../hooks/use-in-view"

interface ProblemCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
  isInView: boolean
}

function ProblemCard({ icon, title, description, delay, isInView }: ProblemCardProps) {
  return (
    <div 
      className="p-6 rounded-2xl bg-card border border-border transition-all duration-500 hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 group"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

const problems = [
  {
    icon: <AlertCircle className="h-5 w-5" />,
    title: "Complex Processes",
    description: "Traditional finance is filled with paperwork, long wait times, and confusing procedures that slow you down.",
  },
  {
    icon: <EyeOff className="h-5 w-5" />,
    title: "Hidden Fees",
    description: "Banks and payment services often charge hidden fees that eat into your hard-earned money.",
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Lack of Transparency",
    description: "It's difficult to know exactly where your money goes and how much you're really paying.",
  },
  {
    icon: <Globe2 className="h-5 w-5" />,
    title: "Global Payment Barriers",
    description: "Sending money internationally is expensive, slow, and often unreliable with traditional methods.",
  },
]

export function WhyWeStarted() {
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
            Why We Started
          </h2>
          <p 
            className="mt-4 text-lg text-muted-foreground text-pretty transition-all duration-700 ease-out delay-100"
            style={{
              opacity: headerInView ? 1 : 0,
              transform: headerInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            We saw the problems in traditional finance and knew there had to be a better way.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <ProblemCard
              key={problem.title}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              delay={index * 100}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
