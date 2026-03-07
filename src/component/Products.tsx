"use client"

import { Send, Download, Wallet, ArrowLeftRight } from "lucide-react"
import { useInView } from "../hooks/use-in-view"

interface ProductCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
  isInView: boolean
}

function ProductCard({ icon, title, description, delay, isInView }: ProductCardProps) {
  return (
    <div 
      className="group p-6 rounded-2xl bg-card border border-border transition-all duration-500 hover:shadow-xl hover:border-accent/50 hover:-translate-y-2"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4 transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2 transition-colors group-hover:text-accent">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

const products = [
  {
    icon: <Send className="h-6 w-6" />,
    title: "Send Money Globally",
    description: "Transfer funds to over 60 countries instantly with competitive exchange rates and low fees.",
  },
  {
    icon: <Download className="h-6 w-6" />,
    title: "Receive Payments",
    description: "Accept payments from anywhere in the world directly into your digital wallet.",
  },
  {
    icon: <Wallet className="h-6 w-6" />,
    title: "Digital Wallet",
    description: "Store, manage, and spend your money with a secure digital wallet accessible 24/7.",
  },
  {
    icon: <ArrowLeftRight className="h-6 w-6" />,
    title: "Multi-Currency Exchange",
    description: "Convert between 50+ currencies at real-time rates with complete transparency.",
  },
]

export function Products() {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.5 })

  return (
    <section ref={ref} id="products" className="py-16 sm:py-24 bg-card">
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
            Our Products
          </h2>
          <p 
            className="mt-4 text-lg text-muted-foreground text-pretty transition-all duration-700 ease-out delay-100"
            style={{
              opacity: headerInView ? 1 : 0,
              transform: headerInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            Everything you need to manage your money in one place.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              icon={product.icon}
              title={product.title}
              description={product.description}
              delay={index * 100}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
