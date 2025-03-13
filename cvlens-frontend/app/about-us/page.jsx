"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import NavBar from "../components/Navbar/NavBar"

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
const ValueCard = ({ icon, title, description }) => {
  return (
    <motion.div
      variants={fadeIn}
      className="p-6 bg-white shadow-md rounded-xl border border-navy-100 hover:shadow-lg transition-all duration-300"
    >
      <h3 className="font-semibold flex items-center text-navy-800 text-lg">
        <span className="mr-2">{icon}</span>
        {title}
      </h3>
      <p className="text-navy-600 mt-2">{description}</p>
    </motion.div>
  )
}

export default function AboutUs() {
  const team = [
    {
      name: "Gurshan Sidhar",
      role: "Full Stack Engineer",
      image: "/images/gurshan_linkedin.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/gurshan-sidhar",
        github: "https://github.com/GurshanSidhar7",
        portfolio: "https://www.google.com/search?q=funny+monkey",
      },
    },
    {
      name: "Antonio Taseski",
      role: "CTO, Founder",
      image: "/images/tony_linkedin.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/antonio-taseski-8ba015290/",
        github: "https://github.com/TaseskiCS",
        portfolio: "https://antoniotaseski.com/",
      },
    },
    {
      name: "Michael Marsillo",
      role: "Full Stack Engineer",
      image: "/images/mike_linkedin.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/michaelmarsillo/",
        github: "https://github.com/michaelmarsillo",
        portfolio: "https://www.google.com/search?q=funny+monkey",
      },
    },
    {
      name: "Max Posadas",
      role: "ML Engineer",
      image: "/images/max_linkedin.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/maxwell-posadas8/",
        github: "https://github.com/maxposadas",
        portfolio: "https://www.google.com/search?q=funny+monkey",
      },
    },
  ]

  return (
    <>
      <NavBar/>
      <div className="min-h-screen bg-[url('/images/wlu.jpg')] h-32 bg-cover  bg-center">
      {/* Header */}
      <motion.header initial="hidden" animate="visible" variants={staggerContainer} className="backdrop-blur-sm text-center py-24 px-4">
        <motion.div variants={fadeIn}>
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-navy-200">Our Story</span>
          </h1>
        </motion.div>

        <motion.div variants={fadeIn} className="flex justify-center items-center mb-10">
          <div className="relative h-80 w-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image src="/images/gurshan_linkedin.jpeg" alt="Team" fill className="object-cover" />
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="text-center max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-xl">
            <p className="text-navy-800 text-lg leading-relaxed">
              We are four second-year computer science students working on <strong>CVLens</strong>, a project born from
              our passion for technology and innovation. Driven by our love for problem-solving and our desire to create
              something impactful, we set out to develop a tool that pushes the boundaries of computer vision.
              Collaboration is at the heart of our work—we each bring unique skills and perspectives, combining our
              strengths to tackle challenges and refine our ideas. Through <strong>CVLens</strong>, we aim to not only
              deepen our understanding of CS but also build something meaningful that can make a real difference.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="mt-10">
          <Link
            href="#team"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-navy-700 to-navy-500 text-white font-medium shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
          >
            Meet Our Team
          </Link>
        </motion.div>
      </motion.header>

      {/* Meet Our Team */}
      <motion.section
        id="team"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-20 px-6 bg-white"
      >
        <motion.h2 variants={fadeIn} className="text-4xl font-bold text-navy-900 text-center mb-2">
          Meet Our Team
        </motion.h2>

        <motion.p variants={fadeIn} className="text-navy-600 text-center mb-16">
          Driven by innovation and guided by experience
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <TeamCard key={index} name={member.name} image={member.image} role={member.role} socials={member.socials} />
          ))}
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-20 px-6 bg-gradient-to-b from-white to-navy-50"
      >
        <motion.h2 variants={fadeIn} className="text-3xl font-bold text-navy-900 text-center mb-2">
          Our Values
        </motion.h2>

        <motion.p variants={fadeIn} className="text-navy-600 text-center mb-16">
          The principles that guide everything we do
        </motion.p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard
            icon="💡"
            title="Innovation"
            description="We push boundaries and embrace new ideas to create cutting-edge solutions."
          />

          <ValueCard
            icon="👥"
            title="Collaboration"
            description="Together we achieve more through open communication and teamwork."
          />

          <ValueCard
            icon="🚀"
            title="Passion"
            description="We love what we do and bring enthusiasm to every challenge we face."
          />
        </div>
      </motion.section>

    </div>

    
    </>
    
  )
}

