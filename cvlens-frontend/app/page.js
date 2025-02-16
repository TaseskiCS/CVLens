import NavBar from "./components/Navbar/NavBar";
import UploadButton from "./components/UploadButton/UploadButton";
export default function Home() {
  return (
    <>
      <div className='h-screen'>
        <NavBar/> 
        <section className="flex flex-col mx-40 justify-center ">
          <div className="TOP-TEXT flex flex-col gap-4 mb-5 mx-40 text-center"> { /*max-w-[800px]*/ }
            <div className="HEADER text-3xl font-bold flex justify-center mt-20 text-center w">
                <h3>Transform Your Resume into Structured Data</h3>
              </div>
              <div class="SUB-HEADER font-semibold">
                <h1>Upload your resume and let our AI powered system extract, analyze, and organize your professional information into a structured format.</h1>
              </div>
          </div>
          <div className="flex justify-center">
              <UploadButton/>
          </div>
        </section>
        <section className="SAMPLE-PREVIEW flex jusi gap-10 bg-slate-300">
          <div className="my-20 mx-10 p-64 rounded text-white bg-slate-500 flex justify-center items-center">
            <h3>Sample Resume</h3>
          </div>
          <div className="my-20 mx-10 p-64 rounded text-white bg-slate-500 flex justify-center items-center">
              Processed Data
          </div>
        </section>
      </div>
    </>
  );
}

