"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs"
import SyntaxHighlighter from "react-syntax-highlighter"
import { motion } from "framer-motion"
import NavBar from "./components/Navbar/NavBar"
import UploadButton from "./components/UploadButton/UploadButton"
import InfoCard from "./components/InfoCard/InfoCard"
import { Sparkles } from "lucide-react"

const resumeData = {
  name: "NAME",
  contact: {
    email: "name@gmail.com",
    linkedin: "linkedin.com/in/name",
    github: "github.com/name",
    website: "name.dev",
  },
  education: [
    {
      school: "University of Waterloo",
      degree: "Bachelor of Software Engineering",
      start_date: "2017",
      graduation_date: "2022",
      extracurriculars: ["Cycling", "Lifting", "Dragon Boat", "Debate", "Soccer"],
    },
  ],
  experience: [
    {
      job_title: "Full Stack Developer Intern",
      company: "SAP",
      location: "Unknown",
      start_date: "January 2019",
      end_date: "April 2019",
      bullet_points: [
        "Member of core backend team for SAP Commerce Cloud",
        "Proposed, owned, and developed a new express checkout flow reducing checkout time by 70%",
        "Designed and presented a Go + gRPC microservice quick starter to increase gRPC adoption at SAP",
        "Worked on resolving customer escalations, developing new APIs and monolith decomposition",
      ],
    },
    {
      job_title: "Software Developer Co-op (Backend)",
      company: "BBM",
      location: "Unknown",
      start_date: "May 2018",
      end_date: "August 2018",
      bullet_points: [
        "Developed an advertisement pushing service that reaches over 10M users daily",
        "Reduced push start time by 90% by leveraging lazy processing and Pub/Sub messaging",
        "Built a contest generation service that generates contests based on partner configuration",
        "Reduced contest development time by 75% for partners",
        "Over 200K global participants",
        "Reduced contest load times by 60% by designing a new authentication flow, using resource prefetching, and lazy loading below-the-fold content",
      ],
    },
    {
      job_title: "Lead Software Engineer (Android)",
      company: "A Start Up",
      location: "Unknown",
      start_date: "August 2017",
      end_date: "April 2018",
      bullet_points: [
        "Founding member of a startup enabling small businesses to take part in digital grocery",
        "Built an Android application for testing and product demos, resulting in $30,000 of investment",
        "Implemented searching, filters, location selection via Google Maps, and payments via Stripe",
      ],
    },
  ],
  projects: [
    {
      name: "Project 1",
      github: "github.com/name/project",
      description: "Built a service that generates videos following people using People Pathing from AWS Rekognition.",
      tech_stack: ["AWS Rekognition", "AWS Lambda", "SNS", "Webhooks"],
      bullet_points: [
        "Used an event-driven architecture with AWS Lambda functions triggered by SNS and webhooks",
        "Resulted in two offshoot projects: an SDK for Go and a Go HTTP Client Library",
      ],
    },
    {
      name: "Project 2",
      github: "github.com/name/project",
      description: "Developed a Java application that parses and visualizes the 100,000+ foods in the USDA database.",
      tech_stack: ["Java"],
      bullet_points: [
        "Designed a weighted searching algorithm to determine the most relevant search results for queries",
        "Built custom data structures for specific purposes, i.e., an AVL tree for searching for individual items",
      ],
    },
  ],
  skills: {
    languages: ["Java", "Go", "Scala", "C++", "JavaScript"],
    frameworks_and_tools: ["AWS", "GCP", "Jenkins", "MySQL", "DynamoDB", "SQS", "SNS", "AWS Lambda", "Datadog"],
  },
}

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] via-[#e9ecef] to-[#212529] text-white overflow-hidden">
      {/* Background gradient */}
      <div
        className="fixed inset-0 opacity-50 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(33, 37, 41, 0.8) 0%, rgba(73, 80, 87, 0.3) 20%, rgba(0, 0, 0, 0) 70%)`,
        }}
      />

      {/* Grid background */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10 pointer-events-none" />

      <NavBar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="relative mt-4 inline-flex items-center px-3 py-1 mb-6 rounded-full bg-[#212529] border border-gray-700">
              {/* border */}
              <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#dee2e6] to-[#adb5bd] z-0">
                <div className="h-full w-full bg-[#212529] rounded-full"></div>
              </div>
              {/* text and sparkle icon */}
              <Sparkles className="w-4 h-4 mr-2 text-gray-200 z-10" />
              <span className="text-sm font-medium text-gray-200 z-10">AI-Powered Resume Parser</span>
            </div>

            <motion.h1
              className="text-5xl md:text-7xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#212529] via-[#495057] to-[#6c757d]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Transform Your Resume into Structured Data
            </motion.h1>

            <motion.p
              className="text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)] md:text-1xl font-bold text-gray-600 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Upload your resume and let our AI powered system extract, analyze, and organize your professional
              information into a structured format.
            </motion.p>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            >
              <UploadButton variant="gradient" />
            </motion.div>
          </motion.div>
        </div>

        {/* Animated shapes */}
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-[#343a40] rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-10 w-64 h-64 bg-[#6c757d] rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </section>

      {/* Preview Section */}
      <section className="relative py-24 ">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#212529] via-[#495057] to-[#6c757d]">
              See How It Works
            </h2>
            <p className="text-xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] text-gray-600 max-w-2xl mx-auto">
              Our AI analyzes your resume and converts it into structured JSON data that can be used across platforms.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
            {/* Resume Preview */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#dee2e6] to-[#495057] opacity-70 blur-lg group-hover:opacity-100 animate-pulse"></div>
              <div className="relative bg-[#212529] rounded-xl border border-gray-700 shadow-2xl overflow-hidden h-[450px] w-[320px] md:w-[350px] perspective-card">
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-transparent z-10"></div>
                <Image
                  src="/cvlens_resume.png"
                  alt="Resume Preview"
                  width={350}
                  height={450}
                  className="object-cover h-full w-full transform transition-transform duration-1000 hover:scale-110"
                />
              </div>
            </motion.div>

            {/* Arrow */}
            <motion.div
              className="hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-[#dee2e6] to-[#495057] rounded-full opacity-20 animate-ping"></div>
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#212529] border border-gray-500/30 shadow-lg shadow-gray-500/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* JSON Output */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#dee2e6] to-[#495057] opacity-70 blur-lg group-hover:opacity-100 animate-pulse"></div>
              <div className="relative bg-[#212529] rounded-xl border border-gray-700 shadow-2xl h-[450px] w-[320px] md:w-[350px] overflow-hidden perspective-card">
                <div className="flex items-center px-4 py-3 bg-[#343a40] border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="mx-auto pr-8 text-xs text-gray-400 font-mono">resume_data.json</div>
                </div>
                <div className="h-[410px] overflow-y-auto syntax-highlighter">
                  <SyntaxHighlighter
                    language="json"
                    style={atomOneDark}
                    customStyle={{
                      background: "transparent",
                      padding: "16px",
                      fontSize: "13px",
                      height: "100%",
                    }}
                  >
                    {JSON.stringify(resumeData, null, 2)}
                  </SyntaxHighlighter>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
          <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] md:text-4xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#212529] via-[#495057] to-[#6c757d]">
              Why Choose CVLens?
            </h2>
            <p className="text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] text-gray-600 max-w-2xl mx-auto">
              Our custom trained model offers greater capabilities for resume parsing and data extraction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <InfoCard
                icon="zap"
                title="Fast Processing"
                text="Get your resume processed in seconds with our enhanced AI technology"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <InfoCard
                icon="check-circle"
                title="Accurate"
                text="High precision extraction with machine learning algorithms"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <InfoCard
                icon="shield"
                title="Secure"
                text="Your data is encrypted and never shared with third parties"
              />
            </motion.div>
          </div>
        </div>

        {/* Animated shapes */}
        <div className="absolute top-1/3 right-10 w-64 h-64 bg-gray-500/20 rounded-full filter blur-3xl animate-blob animation-delay-3000"></div>
        <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-gray-700/20 rounded-full filter blur-3xl animate-blob animation-delay-1000"></div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#212529] to-[#343a40]"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#e9ecef] to-[#adb5bd]">
              Ready to Parse Your Resume?
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              Try CVLens today and start streamlining your job application process.
            </p>
            <motion.div
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <UploadButton variant="gradient" />
            </motion.div>
          </motion.div>
        </div>

        {/* Animated lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-20"></div>
        </div>
      </section>
    </div>
  )
}

