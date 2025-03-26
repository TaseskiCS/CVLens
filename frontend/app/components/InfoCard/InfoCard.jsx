"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import * as LucideIcons from "lucide-react"

const InfoCard = ({ icon, title, text }) => {
  const [isHovered, setIsHovered] = useState(false)

  // Get the icon component from Lucide
  // Handle special cases with dashes in the name by converting to PascalCase
  const getIconComponent = (iconName) => {
    // Convert kebab-case to PascalCase (e.g., "check-circle" to "CheckCircle")
    if (!iconName) return
    const pascalCase = iconName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("")

    return LucideIcons[pascalCase]
  }

  const Icon = getIconComponent(icon)

  return (
    <motion.div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Animated background glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#dee2e6] to-[#495057] rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>

      {/* Card content */}
      <div className="relative bg-[#212529] border border-gray-700 rounded-xl p-8 h-full z-10 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5"></div>

        {/* Icon */}
        <motion.div
          className="mb-6 w-16 h-16 rounded-2xl bg-[#343a40] border border-gray-400 flex items-center justify-center relative overflow-hidden"
          animate={{
            rotateY: isHovered ? 180 : 0,
            backgroundColor: isHovered ? "#495057" : "#343a40",
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Icon background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#e9ecef]/10 to-[#adb5bd]/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

          {/* Icon front */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              rotateY: isHovered ? 180 : 0,
              opacity: isHovered ? 0 : 1,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {Icon && <Icon className="h-7 w-7 text-[#f8f9fa]" />}
          </motion.div>

          {/* Icon back */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ rotateY: 180 }}
            animate={{
              rotateY: isHovered ? 0 : 180,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {Icon && <Icon className="h-7 w-7 text-[#ced4da]" />}
          </motion.div>
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#e9ecef] group-hover:to-[#adb5bd] transition-all duration-300">
          {title}
        </h3>

        {/* Text */}
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#adb5bd] via-[#ced4da] to-[#dee2e6] transition-colors duration-300">
          {text}
        </p>

        {/* Animated corner */}
        <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-gradient-to-br from-[#e9ecef] to-[#495057] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-xl"></div>
      </div>
    </motion.div>
  )
}

export default InfoCard

