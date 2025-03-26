"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import NavBar from "../components/NavBar/NavBar"
import { useState, useEffect } from "react"
import InfoCard from "../components/InfoCard/InfoCard"

export default function Page() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  if (!isClient) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] via-[#e9ecef] to-[#dee2e6]">
      <div
        className="fixed inset-0 opacity-50 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(33, 37, 41, 0.8) 0%, rgba(73, 80, 87, 0.3) 50%, rgba(0, 0, 0, 0) 80%)`,
        }}
      />
      <NavBar />

      {/* Hero Section */}
      <header className="text-center py-24 px-4">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#212529] via-[#495057] to-[#6c757d]">
            CVLens API Documentation
          </h1>
          <p className="text-xl mt-2 text-[#495057] font-semibold">
            Powerful resume parsing API for seamless application automation
          </p>
          <motion.div className="mt-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="/upload"
              className="bg-gradient-to-r from-[#343a40] to-[#495057] hover:from-[#212529] hover:to-[#343a40] text-white px-6 py-4 rounded-xl text-lg font-medium inline-flex items-center cursor-pointer"
            >
              Get Started <ChevronRight className="ml-2" />
            </a>
          </motion.div>
        </motion.div>
      </header>

      {/* API Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div variants={fadeIn}>
            <InfoCard
              icon="Zap"
              title="Simple Integration"
              text="Easy-to-use RESTful API endpoints with comprehensive documentation"
            />
          </motion.div>
          <motion.div variants={fadeIn}>
            <InfoCard
              icon="CheckCircle"
              title="Fast Processing"
              text="Parse resumes in seconds with high accuracy and precision"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-[#212529] mb-8">Documentation</h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div
              variants={fadeIn}
              className="p-6 bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] rounded-xl flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#343a40] to-[#495057] rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#212529]">
                  Call our <code className="text-[#343a40] font-semibold">API</code>
                </h3>
                <p className="text-[#495057] mt-2">Enter text here on how to call the api</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="p-6 bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] rounded-xl flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#495057] to-[#6c757d] rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#212529]">
                  Receive <code className="text-[#343a40] font-semibold">formatted information</code>
                </h3>
                <p className="text-[#495057] mt-2">Get parsed resume information to simplify the application process</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

