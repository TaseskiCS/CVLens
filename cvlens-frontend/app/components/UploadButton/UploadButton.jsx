"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, ArrowRight } from "lucide-react"

const UploadButton = ({ variant = "default" }) => {
  const [isHovered, setIsHovered] = useState(false)

  const getButtonStyles = () => {
    switch (variant) {
      case "gradient":
        return "bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-400 text-white"
      case "white":
        return "bg-white text-[#1A1A2E]"
      default:
        return "bg-[#1A1A2E] text-white border border-gray-800"
    }
  }

  return (
    <motion.button
      className={`
        relative overflow-hidden rounded-full py-4 px-8 font-medium text-lg
        shadow-lg flex items-center justify-center gap-3
        ${getButtonStyles()}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r ffrom-[#f0f0f0]/20 to-[#0c3792]/20 blur-md"></div>
      </div>

      {/* Button content */}
      <div className="relative z-10 flex items-center">
        <motion.div animate={{ x: isHovered ? -5 : 0 }} transition={{ duration: 0.3 }}>
          <Upload className="w-5 h-5" />
        </motion.div>

        <motion.span className="mx-1 font-bold" animate={{ x: isHovered ? -5 : 0 }} transition={{ duration: 0.3 }}>
          Upload Resume
        </motion.span>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : -10,
          }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight className="w-5 h-5" />
        </motion.div>
      </div>

      {/* Animated border */}
      {variant !== "gradient" && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 rounded-full border border-[#0c3792]/30 animate-pulse"></div>
        </div>
      )}
    </motion.button>
  )
}

export default UploadButton

