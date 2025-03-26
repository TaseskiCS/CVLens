"use client"

import { motion } from "framer-motion"
import { Upload, Check, Copy, Download } from "lucide-react"
import NavBar from "../components/Navbar/NavBar"
import InfoCard from "../components/InfoCard/InfoCard"
import { useState, useRef } from "react" // Add useRef import here


export default function UploadPage() {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null) // Create a ref for the file input
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [data, setData] = useState({
    filename: "",
    parsed_data: [],
  })

  const copyToClipboard = () => {
    const jsonString = JSON.stringify(data.parsed_data, null, 2)
    navigator.clipboard.writeText(jsonString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadJson = () => {
    const jsonString = JSON.stringify(data.parsed_data, null, 2)
    const blob = new Blob([jsonString], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "data.json"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }


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
  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()

    reader.onloadend = async () => {
        const base64File = reader.result.split(",")[1] // Extract base64 data
        console.log("Base64 Encoded File:", base64File.substring(0, 100) + "...") // Log only first 100 chars

        const payload = {
            filename: file.name,
            file: base64File,
        }

        console.log("Sending payload:", payload) // Log the payload

        try {
            setIsLoading(true)
            const response = await fetch("http://localhost:8000/upload", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            })

            if (!response.ok) {
                console.error("Error uploading file:", response.status, response.statusText)
                return
            }

            const data = await response.json()
            console.log("Response Data:", data)
            setData(data)
        } catch (error) {
            console.error("Fetch error:", error)
        } finally {
          setIsLoading(false);
        }
    }

    reader.readAsDataURL(file)
}



  // Function to trigger file input click
  const handleBrowseClick = () => {
    fileInputRef.current.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] via-gray-300 to-gray-700">
      <NavBar />

      {/* Hero Section */}
      <header className="text-center py-14 px-4">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl mx-auto">
          <h1 className="text-5xl py-16 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#212529] via-[#495057] to-[#6c757d]">
            Upload Your Resume
          </h1>
          <p className="text-xl mt-2 text-[#495057] font-semibold">
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
              isDragging ? "border-[#495057] bg-[#f8f9fa]" : "border-[#adb5bd]"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            whileHover={{ scale: 1.01 }}
          >
            <div className="bg-gradient-to-r from-[#343a40] to-[#495057] p-4 rounded-full mb-4">
              <Upload className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-bold text-[#212529] mb-2">Drag and drop your resume here</h2>
            <p className="text-[#6c757d] mb-4">Or</p>
            <motion.button
              className="bg-gradient-to-r from-[#343a40] to-[#495057] hover:from-[#212529] hover:to-[#343a40] text-white px-6 py-3 rounded-xl font-medium"
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
            <p className="text-[#6c757d] mt-4">Supported Formats: PDF, DOCX (Max 5MB)</p>
          </motion.div>

          {isLoading && (
            <div className="mt-8 flex items-center justify-center">
              <div className="w-8 h-8 border-t-2 border-b-2 border-black rounded-full animate-spin"></div>
            </div>
          )}

          {!isLoading && data.filename && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-800">Parsed Data</h2>
                <motion.button
                  className="bg-gradient-to-r from-[#343a40] to-[#495057] hover:from-[#212529] hover:to-[#343a40] text-white px-6 py-3 rounded-xl font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={downloadJson} // Add click handler here
                >
                  Download JSON
                </motion.button>
              </div>

              <p className="text-slate-500 mb-4">Filename: {data.filename}</p>

              <div className="relative">
                <div className="absolute right-2 top-2">
                  <motion.button
                    className="font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={copyToClipboard} // Add click handler here
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </motion.button>
                  
                </div>

                <pre className="bg-slate-50 border rounded-md p-4 pt-12 text-sm text-slate-800 overflow-auto max-h-[500px]">
                  {JSON.stringify(data.parsed_data, null, 2)}
                </pre>
              </div>
            </div>
          )}


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
          <h2 className="text-2xl font-bold text-[#212529] mb-8 text-center">How It Works</h2>

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
                <h3 className="text-lg font-semibold text-[#212529]">Upload Resume</h3>
                <p className="text-[#495057] mt-2">Upload your existing resume in PDF/DOCX format</p>
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
                <h3 className="text-lg font-semibold text-[#212529]">AI Analysis</h3>
                <p className="text-[#495057] mt-2">Our AI analyzes your content and structure</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="p-6 bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] rounded-xl flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#495057] to-[#6c757d] rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#212529]">View Data</h3>
                <p className="text-[#495057] mt-2">View the extracted data which is sent via a JSON string</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}