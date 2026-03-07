"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X, ChevronDown, User, LogOut } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/component/ui/Button"

const navLinks = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "Products", href: "#products", hasDropdown: true, dropdownItems: [
    { label: "Job Search", href: "/jobs" },
    { label: "Resume Builder", href: "/resume" },
    { label: "Interview Prep", href: "/interview" }
  ]},
  { label: "About", href: "/about", hasDropdown: false },
  { label: "Pricing", href: "#pricing", hasDropdown: false },
  { label: "Contact", href: "#contact", hasDropdown: false },
]

const fadeInVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
}

const slideInVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50'
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            variants={slideInVariants}
            className="flex items-center gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#f73b20] to-red-600 shadow-lg"
            >
              <span className="text-lg font-bold text-white">H</span>
            </motion.div>
            <motion.span
              className="text-xl font-bold text-foreground bg-gradient-to-r from-[#f73b20] to-red-600 bg-clip-text text-transparent"
            >
              HIRING
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.hasDropdown ? (
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-[#f73b20] transition-colors duration-200 rounded-lg hover:bg-accent/50"
                  >
                    {link.label}
                    <motion.div
                      animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-[#f73b20] transition-colors duration-200 rounded-lg hover:bg-accent/50"
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === link.label && link.hasDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg py-2 z-50"
                    >
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-[#f73b20] hover:bg-accent/50 transition-colors duration-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm" className="hover:text-[#f73b20]">
                Sign In
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="sm" className="bg-[#f73b20] hover:bg-[#f73b20]/90">
                Get Started
              </Button>
            </motion.div>

            {/* User Menu */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-accent hover:bg-accent/80 transition-colors"
              >
                <User className="h-4 w-4" />
              </motion.button>

              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50"
                  >
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-[#f73b20] hover:bg-accent/50 transition-colors"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <User className="h-4 w-4" />
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-[#f73b20] hover:bg-accent/50 transition-colors"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Settings
                    </Link>
                    <div className="border-t border-border my-1"></div>
                    <button
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-muted-foreground hover:text-red-600 hover:bg-red-50 transition-colors"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="button"
            className="lg:hidden p-2 text-foreground hover:text-[#f73b20] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-border">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      {link.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(link.label)}
                            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-muted-foreground hover:text-[#f73b20] transition-colors"
                          >
                            {link.label}
                            <motion.div
                              animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="h-4 w-4" />
                            </motion.div>
                          </button>
                          <AnimatePresence>
                            {activeDropdown === link.label && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-4 space-y-1"
                              >
                                {link.dropdownItems?.map((item) => (
                                  <Link
                                    key={item.label}
                                    to={item.href}
                                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-[#f73b20] transition-colors"
                                    onClick={() => {
                                      setMobileMenuOpen(false)
                                      setActiveDropdown(null)
                                    }}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={link.href}
                          className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-[#f73b20] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="flex flex-col gap-2 pt-4 mt-4 border-t border-border">
                  <Button variant="ghost" size="sm" className="justify-start hover:text-[#f73b20]">
                    Sign In
                  </Button>
                  <Button size="sm" className="bg-[#f73b20] hover:bg-[#f73b20]/90">
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
