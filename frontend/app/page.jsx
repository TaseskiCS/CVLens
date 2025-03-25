"use client";
import NavBar from "./components/Navbar/NavBar";
import UploadButton from "./components/UploadButton/UploadButton";
import Image from 'next/image';
import { CopyBlock, dracula } from "react-code-blocks";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import InfoCard from "./components/InfoCard/InfoCard";

const resumeData = {
  name: "NAME",
  contact: {
    email: "name@gmail.com",
    linkedin: "linkedin.com/in/name",
    github: "github.com/name",
    website: "name.dev"
  },
  education: [
    {
      school: "University of Waterloo",
      degree: "Bachelor of Software Engineering",
      start_date: "2017",
      graduation_date: "2022",
      extracurriculars: ["Cycling", "Lifting", "Dragon Boat", "Debate", "Soccer"]
    }
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
        "Worked on resolving customer escalations, developing new APIs and monolith decomposition"
      ]
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
        "Reduced contest load times by 60% by designing a new authentication flow, using resource prefetching, and lazy loading below-the-fold content"
      ]
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
        "Implemented searching, filters, location selection via Google Maps, and payments via Stripe"
      ]
    }
  ],
  projects: [
    {
      name: "Project 1",
      github: "github.com/name/project",
      description: "Built a service that generates videos following people using People Pathing from AWS Rekognition.",
      tech_stack: ["AWS Rekognition", "AWS Lambda", "SNS", "Webhooks"],
      bullet_points: [
        "Used an event-driven architecture with AWS Lambda functions triggered by SNS and webhooks",
        "Resulted in two offshoot projects: an SDK for Go and a Go HTTP Client Library"
      ]
    },
    {
      name: "Project 2",
      github: "github.com/name/project",
      description: "Developed a Java application that parses and visualizes the 100,000+ foods in the USDA database.",
      tech_stack: ["Java"],
      bullet_points: [
        "Designed a weighted searching algorithm to determine the most relevant search results for queries",
        "Built custom data structures for specific purposes, i.e., an AVL tree for searching for individual items"
      ]
    }
  ],
  skills: {
    languages: ["Java", "Go", "Scala", "C++", "JavaScript"],
    frameworks_and_tools: ["AWS", "GCP", "Jenkins", "MySQL", "DynamoDB", "SQS", "SNS", "AWS Lambda", "Datadog"]
  }
};

export default function Home() {
  return (
    <>
      <div className='h-screen'>
        <NavBar/> 
        <section className="TOP-SECTION flex flex-col mx-1 lg:mx-40 justify-center mb-20">
          <div className="TOP-TEXT flex flex-col gap-4 mb-5 mx-10 text-center"> { /*max-w-[800px]*/ }
              <div className="HEADER text-3xl font-bold flex justify-center mt-20 text-center w">
                <h3>Transform Your Resume into Structured Data</h3>
              </div>
              <div className="SUB-HEADER font-semibold">
                <h1>Upload your resume and let our AI powered system extract, analyze, and organize your professional information into a structured format.</h1>
              </div>
          </div>
          <div className="flex justify-center">
              <UploadButton/>
          </div>
        </section>
        <section className="SAMPLE-PREVIEW flex flex-col md:flex-row justify-center items-center gap-10 bg-slate-200">
          {/* Image Container */}
          <div className="flex flex-col md:flex-row justify-center items-start gap-10 bg-slate-200 py-5 px-5">
              {/* Resume Preview Image */}
              <div className="p-1 rounded-lg text-white bg-slate-500 flex justify-center items-center shadow-lg h-[450px] w-[350px]">
                <Image 
                  src="/cvlens_resume.png" 
                  alt="Resume Preview" 
                  width={350} 
                  height={450} 
                  className="rounded-lg"
                />
              </div>

              {/* Processed Data Container */}
              <div className="p-1 rounded-lg bg-gray-900 text-white shadow-lg w-[350px] h-[450px] overflow-y-auto">
                <SyntaxHighlighter 
                  language="json" 
                  style={atomOneDark} 
                  customStyle={{ borderRadius: '8px', padding: '10px', fontSize: '14px' }}
                >
                  {JSON.stringify(resumeData, null, 2)}
                </SyntaxHighlighter>
              </div>
            </div>

        </section>
        <section className="CARDS p-5 flex flex-col sm:flex-row justify-center gap-10 bg-slate-100">
          <InfoCard 
            icon="/svg/bolt.svg" 
            title="Fast Processing" 
            text="Get your resume processed in seconds with our enhanced AI technology"
          />
          <InfoCard 
            icon="/svg/verify.svg" 
            title="Accurate" 
            text="High precision extraction with machine learning algorithms"
          />
        </section>

      </div>
    </>
  );
}

