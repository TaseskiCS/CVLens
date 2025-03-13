"use client"

import { motion } from "framer-motion"
import { Check, Clock, ChevronRight } from "lucide-react"
import NavBar from "../components/NavBar/NavBar"
import InfoCard from "../components/InfoCard/InfoCard"

export default function Page() {
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

  return (

    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-white">
      <NavBar />

      {/* Hero Section */}
      <header className="text-center py-24 px-4">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-400">
            CVLens API Documentation
          </h1>
          <p className="text-xl mt-2 text-slate-300">Powerful resume parsing API for seamless application automation</p>
          <motion.div className="mt-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white px-8 py-6 rounded-xl text-lg font-medium inline-flex items-center cursor-pointer">
              Get Started <ChevronRight className="ml-2" href="/upload" />
            </div>
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
              icon={<Check className="h-10 w-10 text-blue-500" />}
              title="Simple Integration"
              text="Easy-to-use RESTful API endpoints with comprehensive documentation"
            />
          </motion.div>
          <motion.div variants={fadeIn}>
            <InfoCard
              icon={<Clock className="h-10 w-10 text-blue-500" />}
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
          <h2 className="text-2xl font-bold text-navy-900 mb-8">How It Works</h2>

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
                <h3 className="text-lg font-semibold text-navy-800">
                  Upload your <code className="text-navy-800 font-semibold">resume</code>
                </h3>
                <p className="text-slate-600 mt-2">
                  Send your resume to our custom trained model and extract information
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-800">
                  Receive <code className="text-navy-800 font-semibold">formatted information</code>
                </h3>
                <p className="text-slate-600 mt-2">
                  Get parsed resume information to simplify the application process
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}