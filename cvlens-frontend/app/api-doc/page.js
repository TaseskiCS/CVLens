export default async function Page() {


    return (
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-6">
        <span className="text-xl font-bold text-black">CVLens</span>
        <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
        <a href="#" className="text-gray-700 hover:text-blue-500">API</a>
        <a href="#" className="text-gray-700 hover:text-blue-500">About Us</a>
        </div>
        </nav>
  
        {/* Header */}
        <header className="text-center py-16">
          <h1 className="text-3xl font-bold text-black">CVLens API Documentation</h1>
          <p className="text-gray-600 mt-2">Powerful resume parsing API for seamless application automation</p>
        </header>
  
        {/* API Overview */}
        <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="font-semibold flex items-center text-gray-700">
              <span className="mr-2">💻</span> Simple Integration
            </h3>
            <p className="text-gray-600 mt-2">Easy-to-use RESTful API endpoints with comprehensive documentation</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="font-semibold flex items-center text-gray-700 ">
              <span className="mr-2">⚡</span> Fast Processing
            </h3>
            <p className="text-gray-600 mt-2">Parse resumes in seconds with high accuracy</p>
          </div>
        </section>
  
        {/* API Endpoints */}
        <section className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
          <h2 className="text-xl font-semibold text-gray-700 ">API Something</h2>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
              <div>
                <span className="UPLAOD BLUE px-3 p-1 bg-blue-500 text-white rounded-md text-xs">UPLOAD</span>
                <code className="ml-2 text-gray-700">scanner</code>
                <p className="text-gray-600 text-sm">Parse and extract information from resume documents</p>
              </div>
              <button className="px-4 py-2 bg-blue-500 rounded-md text ">Try it</button>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
              <div>
                <span className="RECEIVE GREEN px-3 p-1 bg-green-500 text-white rounded-md text-xs">RECIEVE</span>
                <code className="ml-2 text-gray-700">formatted information</code>
                <p className="text-gray-600 text-sm">Get supported resume file formats and limitations</p>
              </div>
              <button className="px-4 py-2 bg-green-500 rounded-md text ">Try it</button>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="mt-12 p-6 bg-gray-900 text-white text-center">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold">Product</h3>
              <ul className="mt-2 text-sm space-y-1">
                <li><a href="#" className="hover:underline">Features</a></li>
                <li><a href="#" className="hover:underline">Pricing</a></li>
                <li><a href="#" className="hover:underline">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Company</h3>
              <ul className="mt-2 text-sm space-y-1">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Legal</h3>
              <ul className="mt-2 text-sm space-y-1">
                <li><a href="#" className="hover:underline">Privacy</a></li>
                <li><a href="#" className="hover:underline">Terms</a></li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-sm">© 2025 CVLens. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  