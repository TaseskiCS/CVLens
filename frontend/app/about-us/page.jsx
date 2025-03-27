"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import NavBar from "../components/Navbar/NavBar"
import InfoCard from "../components/InfoCard/InfoCard"
import { useState, useEffect } from "react"
// Animation variants
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

// Team Card Component
const TeamCard = ({ name, role, image, socials }) => {
  return (
    <motion.div
      variants={fadeIn}
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative h-64 w-full">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl text-navy-800">{name}</h3>
        <p className="text-navy-600 mb-4">{role}</p>
        <div className="flex space-x-3">
          {socials.linkedin && (
            <Link href={socials.linkedin} className="text-navy-700 hover:text-navy-900 transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          )}
          {socials.github && (
            <Link href={socials.github} className="text-navy-700 hover:text-navy-900 transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          )}
          {socials.portfolio && (
            <Link href={socials.portfolio} className="text-navy-700 hover:text-navy-900 transition-colors">
              <ExternalLink className="h-5 w-5" />
              <span className="sr-only">Portfolio</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// Value Card Component


export default function AboutUs() {
  const team = [
    {
      name: "Gurshan Sidhar",
      role: "Frontend Developer",
      image: "/images/gurshan_linkedin.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/gurshan-sidhar",
        github: "https://github.com/GurshanSidhar7",
        portfolio: "https://gurshansidhar.com",
      },
    },
    {
      name: "Antonio Taseski",
      role: "Full Stack, Machine Learning",
      image: "/images/tony_linkedin.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/antonio-taseski-8ba015290/",
        github: "https://github.com/TaseskiCS",
        portfolio: "https://antoniotaseski.com/",
      },
    },
    {
      name: "Michael Marsillo",
      role: "Frontend Developer",
      image: "/images/mike_linkedin.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/michaelmarsillo/",
        github: "https://github.com/michaelmarsillo",
        portfolio: "https://michaelmarsillo.ca",
      },
    },
    {
      name: "Max Posadas",
      role: "Machine Learning",
      image: "/images/max_linkedin.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/maxwell-posadas8/",
        github: "https://github.com/maxposadas",
        portfolio: "",
      },
    },
  ]

  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    setIsMobile(window.innerWidth < 768)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-[url('/images/wlu.jpg')] bg-cover bg-center relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-black/30 backdrop-filter"></div>
        <div className="relative z-10 flex items-center justify-center h-screen">
          <div className="max-w-6xl w-full px-4 backdrop-blur-sm py-16 rounded-xl bg-black/10">
            {/* Initial centered logo that moves left */}
            <motion.div
              className="flex flex-col items-center w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="w-full flex justify-center overflow-hidden">
                <motion.div
                  className="flex flex-col justify-center lg:flex-row items-center w-full lg:w-auto"
                  initial={{ x: 0 }}
                  animate={
                    isLoaded
                      ? {
                        x: isMobile ? 0 : '0',
                        y: isMobile ? 0 : 0,
                      }
                      : { x: 0, y: 0 }
                  }
                  transition={{
                    duration: 1.8,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                  }}
                >
                  {/* Logo */}
                  <motion.div
                    className="relative h-40 w-40 lg:h-64 lg:w-64 transform mb-6 lg:mb-0"
                    initial={{ scale: 1.2 }}
                    animate={isLoaded ? { scale: 1, rotate: 0 } : { scale: 1.2 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    transition={{
                      duration: 1.2,
                      delay: 0.5,
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                  >
                    <Image
                      src="/images/cvlens-logo.png"
                      alt="CVLens Logo"
                      fill
                      className="object-contain drop-shadow-xl rounded-full"
                    />
                  </motion.div>

                  {/* Text that appears */}
                  <motion.div
                    className="text-center lg:text-left lg:ml-12 w-full lg:w-[500px] px-4 lg:px-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{
                      duration: 1,
                      delay: isMobile ? 0.1 : 0.4,
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    }}
                  >
                    <motion.h1
                      className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.7, delay: isMobile ? 0.2 : 0.6 }}
                    >
                      More About{" "}
                      <motion.span
                        className="text-blue-400"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.7, delay: isMobile ? 0.4 : 0.8, type: "spring" }}
                      >
                        CVLens
                      </motion.span>
                    </motion.h1>
                    <motion.p
                      className="text-base md:text-lg lg:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 drop-shadow-md"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, delay: isMobile ? 0.2 : 0.4 }}
                    >
                      Our project was designed to help companies easily extract and analyze important data from resumes, simplifying the hiring process and enabling more efficient, recruitment decisions.
                    </motion.p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* meet our team section */}
  
      <motion.section
        id="team"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2,
              ease: "easeOut",
              duration: 0.8,
            },
          },
        }}
        className="py-20 px-6 bg-gradient-to-b from-gray-200 to-gray-300"
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="text-4xl font-bold text-navy-900 text-center mb-2"
        >
          The Creators
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="text-navy-600 text-center mb-16"
        >
          Passionate about Web Development and Machine Learning 🚀
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <TeamCard name={member.name} image={member.image} role={member.role} socials={member.socials} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2,
              ease: "easeOut",
              duration: 0.8,
            },
          },
        }}
        className="py-20 px-6 bg-gradient-to-b from-gray-300 t0-gray-400"
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="text-3xl font-bold text-navy-900 text-center mb-2"
        >
          A Little Backstory
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="text-navy-600 text-center mb-16"
        >
          The journey of how we came up with the idea
        </motion.p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <InfoCard
            icon="File-text"
            title="Applying Sucks"
            text="After submitting hundreds of applications through various company websites, we quickly noticed that the resume parsers they used were often inaccurate."
          />

          <InfoCard
            icon="users"
            title="The Idea"
            text="Together, we wanted to create a solution that would streamline the information gathering process, benefiting both companies and job applicants."
          />

          <InfoCard
            icon="Code"
            title="Outcome"
            text="We developed a custom model using Python and SpaCy that instantly and accurately parses resume information, ensuring a seamless and precise process."
          />
        </div>
      </motion.section>
    </>
  )
}

