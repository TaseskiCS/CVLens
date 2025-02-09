export default async function Page() {
  
 
  return (
    <>
        {/* Header Section */}
      <header className="bg-gray-800 text-white py-4">
        <nav className="container mx-auto flex justify-center">
          <ul className="flex space-x-20">
            <li><a href="" className="hover:text-blue-400">Home</a></li>
            <li><a href="" className="hover:text-blue-400">API Info</a></li>
            <li><a href="" className="hover:text-blue-400">Creators</a></li>
          </ul>
        </nav>
      </header>

      {/* Title Section */}
      <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center px-4">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">
        Automatically parse your resume properly with our tool
      </h2>
      <p className="text-lg text-gray-600">
      </p>
    </div>
  </section>



    </>
  )
}