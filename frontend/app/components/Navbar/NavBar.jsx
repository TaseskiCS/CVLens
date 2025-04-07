"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={" bg-[#FAF9F6] fixed backdrop-blur-xl bg-transparent top-0 left-0 right-0 z-50 transition-all duration-300"}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.span
              className="text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)] font-bold bg-clip-text text-transparent bg-gradient-to-r bg-gradient-to-r from-[#212529] via-[#495057] to-[#6c757d]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              CVLens
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/"> Home</NavLink>
            <NavLink href="/api-doc">API</NavLink>
            <NavLink href="/about-us">About Us</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#1A1A2E] border border-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-[#0F0F19]/95 backdrop-blur-xl border-b border-gray-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 space-y-6">
              <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/api-doc" onClick={() => setIsMenuOpen(false)}>
                API
              </MobileNavLink>
              <MobileNavLink href="/about-us" onClick={() => setIsMenuOpen(false)}>
                About Us
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

const NavLink = ({ href, children }) => {
  return (
    <Link href={href} className="group relative">
      <span className="text-[#3e3b39] hover:scale-105 font-bold text-lg transition-colors duration-300">{children}</span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#fffeff] via-[#9b9a9c] to-[#3e3b39] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}

const MobileNavLink = ({ href, onClick, children }) => {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
      <Link
        href={href}
        className="block text-xl text-gray-300 hover:text-white font-medium transition-colors"
        onClick={onClick}
      >
        {children}
      </Link>
    </motion.div>
  )
}

export default NavBar

