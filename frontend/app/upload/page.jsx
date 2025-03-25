"use client";
import { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import InfoCard from "../components/InfoCard/InfoCard";

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [parsedData, setParsedData] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;
    await processFile(selectedFile);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    setDragging(false);
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) await processFile(droppedFile);
  };

  const processFile = async (file) => {
    setFile(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64String = reader.result.split(",")[1]; 
      await sendFile(base64String, file.name);
    };
  };

  const sendFile = async (fileString, filename) => {
    try {
      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename, file: fileString }),
      });

      const result = await response.json();
      setParsedData(result);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex justify-center flex-col mt-5">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-3xl font-bold">Upload Your Resume</h1>
          <h2>Let Our AI analyze and optimize your resume for better job opportunities</h2>
        </div>

        <div className="flex items-center flex-col mt-5">
          <div
            className={`DRAG-DROP flex items-center flex-col p-5 rounded-xl mb-5 transition ${
              dragging ? "bg-blue-200 border-blue-500 border-2" : "bg-slate-100"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="bg-slate-400 p-5 rounded-xl">
              {/* upload svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                />
              </svg>
            </div>
            <h2 className="font-bold">Drag and drop your resume here</h2>
            <h3 className="mt-5">Or</h3>
            <input type="file" onChange={handleFileChange} className="hidden" id="fileInput" />
            <label htmlFor="fileInput" className="bg-black rounded-xl text-white p-3 text-sm mt-2 cursor-pointer">
              Browse Files
            </label>
            <h3 className="mt-5">Supported Formats: PDF, DOCX (Max 5MB)</h3>
          </div>

          {file && <p className="text-sm font-semibold">Selected file: {file.name}</p>}

          {parsedData && (
            <div className="mt-4 p-4 border rounded-lg shadow-md w-full max-w-lg text-center">
              <h2 className="text-lg font-semibold">Parsed Resume Data:</h2>
              <pre className="text-sm text-left">{JSON.stringify(parsedData, null, 2)}</pre>
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-3 mt-5">
            {/* TODO: Change svg icons */}
            <InfoCard icon="/svg/bolt.svg" title="AI-Powered Analysis" text="Our AI scans your resume and provides detailed feedback." />
            <InfoCard icon="/svg/verify.svg" title="Keyword Optimization" text="Optimize for ATS systems and job requirements" />
            <InfoCard icon="/svg/bolt.svg" title=" Accurate Data Output" text="We accurately extract the key points from your resume." />
            <InfoCard icon="/svg/verify.svg" title="Easy To Use" text="Just drag and drop or also visit the /api-doc page for more!" />
         
         </div>

          <div className="flex items-center mt-10 flex-col text-center">
            <h2 className="font-bold">How It Works</h2>
            <div className="flex flex-row justify-center gap-4">
              <div className="p-5 max-w-[200px] flex items-center flex-col">
                <div className="bg-black p-2 w-8 h-8 flex items-center justify-center rounded-full text-white">1</div>
                <h2 className="text-sm font-bold">Upload Resume</h2>
                <p className="text-xs">Upload your existing resume in PDF/DOCX format</p>
              </div>
              <div className="p-5 max-w-[200px] flex items-center flex-col">
                <div className="bg-black p-2 w-8 h-8 flex items-center justify-center rounded-full text-white">2</div>
                <h2 className="text-sm font-bold">AI Analysis</h2>
                <p className="text-xs">Our AI analyzes your content and structure</p>
              </div>
              <div className="p-5 max-w-[200px] flex items-center flex-col">
                <div className="bg-black p-2 w-8 h-8 flex items-center justify-center rounded-full text-white">3</div>
                <h2 className="text-sm font-bold">View Data</h2>
                <p className="text-xs">View the extracted data which is sent via a JSON string</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadPage;
