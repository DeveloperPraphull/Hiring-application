"use client"

import { Shield, Award, Lock } from "lucide-react"
import { useInView } from "../hooks/use-in-view"

interface BadgeCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
  isInView: boolean
}

function BadgeCard({ icon, title, description, delay, isInView }: BadgeCardProps) {
  return (
    <div 
      className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border text-center transition-all duration-500 hover:shadow-lg hover:-translate-y-1 hover:border-accent/30 group"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0) scale(1)" : "translateY(40px) scale(0.9)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
        {icon}
      </div>
      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

const awards = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "ISO 27001",
    description: "Certified Security Management",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Best Payment Provider",
    description: "Fintech Awards 2024",
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: "Cyber Essentials Plus",
    description: "Government Backed Certification",
  },
]

export function Awards() {
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
            Awards & Certifications
          </h2>
          <p 
            className="mt-4 text-lg text-muted-foreground text-pretty transition-all duration-700 ease-out delay-100"
            style={{
              opacity: headerInView ? 1 : 0,
              transform: headerInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            Recognized for our commitment to security and excellence.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
          {awards.map((award, index) => (
            <BadgeCard
              key={award.title}
              icon={award.icon}
              title={award.title}
              description={award.description}
              delay={index * 150}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
