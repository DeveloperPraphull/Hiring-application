"use client"

import { Users, CreditCard, Globe, Building2 } from "lucide-react"
import { useInView } from "../hooks/use-in-view"
import { useEffect, useState } from "react"

interface StatCardProps {
  icon: React.ReactNode
  value: string
  label: string
  delay: number
  isInView: boolean
}

function StatCard({ icon, value, label, delay, isInView }: StatCardProps) {
  const [count, setCount] = useState(0)
  const numericValue = parseInt(value.replace(/\D/g, ""))
  const suffix = value.replace(/[0-9]/g, "")

  useEffect(() => {
    if (!isInView) return
    
    const duration = 1500
    const steps = 60
    const increment = numericValue / steps
    let current = 0
    
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current += increment
        if (current >= numericValue) {
          setCount(numericValue)
          clearInterval(interval)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      
      return () => clearInterval(interval)
    }, delay)
    
    return () => clearTimeout(timer)
  }, [isInView, numericValue, delay])

  return (
    <div 
      className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border transition-all duration-500 hover:shadow-lg hover:border-accent/30 hover:-translate-y-1"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <span className="text-3xl font-bold text-foreground tabular-nums">
        {isInView ? count : 0}{suffix}
      </span>
      <span className="mt-1 text-sm text-muted-foreground">{label}</span>
    </div>
  )
}

const stats = [
  {
    icon: <Users className="h-6 w-6" />,
    value: "1M+",
    label: "Registered Users",
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    value: "50+",
    label: "Payment Methods",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    value: "60+",
    label: "Countries",
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    value: "1000+",
    label: "Business Partners",
  },
]

export function Stats() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={index * 100}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
