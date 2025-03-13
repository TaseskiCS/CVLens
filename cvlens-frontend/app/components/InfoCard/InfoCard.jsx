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
    const pascalCase = iconName.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
    
    return LucideIcons[pascalCase];
  };

  const Icon = getIconComponent(icon);

  return (
    <motion.div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Animated background glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f0f0f0] to-[#0c3792] rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>

      {/* Card content */}
      <div className="relative bg-[#1A1A2E] border border-gray-800 rounded-xl p-8 h-full z-10 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5"></div>

        {/* Icon */}
        <motion.div
          className="mb-6 w-16 h-16 rounded-2xl bg-[#13131F] border border-gray-800 flex items-center justify-center relative overflow-hidden"
          animate={{
            rotateY: isHovered ? 180 : 0,
            backgroundColor: isHovered ? "#1E1E36" : "#13131F",
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Icon background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f0f0f0]/10 to-[#0c3792]/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

          {/* Icon front */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              rotateY: isHovered ? 180 : 0,
              opacity: isHovered ? 0 : 1,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {Icon && <Icon className="h-7 w-7 text-[#fffbfc]" />}
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
            {Icon && <Icon className="h-7 w-7  text-[#0c3792]" />}
          </motion.div>
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r  group-hover:from-[#f0f0f0] group-hover:to-[#7829FF] transition-all duration-300">
          {title}
        </h3>

        {/* Text */}
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-400 transition-colors duration-300">{text}</p>

        {/* Animated corner */}
        <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-gradient-to-br from-[#f0f0f0] to-[#0c3792]] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-xl"></div>
      </div>
    </motion.div>
  )
}

export default InfoCard