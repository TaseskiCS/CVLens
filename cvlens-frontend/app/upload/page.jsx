"use client"

import { motion } from "framer-motion"
import { Upload } from "lucide-react"
import NavBar from "../components/Navbar/NavBar"
import InfoCard from "../components/InfoCard/InfoCard"
import { useState, useRef } from "react" // Add useRef import here

export default function UploadPage() {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null) // Create a ref for the file input

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

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    // Handle file drop logic here
    const files = e.dataTransfer.files
    if (files && files.length > 0) {
      handleFileChange({ target: { files } })
    }
  }

  // Function to handle file selection
  const handleFileChange = (e) => {
    const files = e.target.files
    if (files && files.length > 0) {
      // Process the file(s) here
      console.log("Selected files:", files)
      // Add your file processing logic here
    }
  }

  // Function to trigger file input click
  const handleBrowseClick = () => {
    fileInputRef.current.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-white">
      <NavBar />

      {/* Hero Section */}
      <header className="text-center py-14 px-4">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl mx-auto">
          <h1 className="text-5xl py-16 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-400">
            Upload Your Resume
          </h1>
          <p className="text-xl mt-2 text-slate-100">
            Let our model analyze your resume for better job opportunities
          </p>
        </motion.div>
      </header>

      {/* Upload Section */}
      <section className="max-w-3xl mx-auto px-6 mb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8"
        >
          <motion.div
            className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center transition-all duration-200 ${
              isDragging ? "border-blue-500 bg-blue-50" : "border-slate-300"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            whileHover={{ scale: 1.01 }}
          >
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-full mb-4">
              <Upload className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">Drag and drop your resume here</h2>
            <p className="text-slate-500 mb-4">Or</p>
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBrowseClick} // Add click handler here
            >
              Browse Files
            </motion.button>
            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.docx"
              multiple={false}
            />
            <p className="text-slate-500 mt-4">Supported Formats: PDF, DOCX (Max 5MB)</p>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
          >
            <motion.div variants={fadeIn}>
              <InfoCard
                icon="zap"
                title="AI-Powered Analysis"
                text="Our AI scans your resume and provides detailed feedback."
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <InfoCard
                icon="check-circle"
                title="Keyword Optimization"
                text="Knows how to pull all the essential keywords"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

       {/* How It Works */}
       <section className="max-w-4xl mx-auto px-6 py-8 mb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">How It Works</h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div
              variants={fadeIn}
              className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-700 to-indigo-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">Upload Resume</h3>
                <p className="text-slate-600 mt-2">Upload your existing resume in PDF/DOCX format</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">AI Analysis</h3>
                <p className="text-slate-600 mt-2">Our AI analyzes your content and structure</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">View Data</h3>
                <p className="text-slate-600 mt-2">View the extracted data which is sent via a JSON string</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

     