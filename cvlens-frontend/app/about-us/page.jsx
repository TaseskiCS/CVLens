import React from "react";
import InfoCard from "../components/InfoCard/InfoCard";

export default function AboutUs() {
  const team = [
    { name: "Gurshan Sidhar", role: "Full Stack Engineer", img: "#" },
    { name: "Antonio Taseski", role: "CTO, Founder", img: "#" },
    { name: "Michael Marsillo", role: "Full Stack Engineer", img: "#" },
    { name: "Max Posadas", role: "ML Engineer", img: "#" },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="text-center py-20 mb-72">
        <h1 className="text-4xl font-bold text-black">Our Story</h1>
        <p className="text-gray-600 mt-4">
          We're building the future of digital experience with passion and
          purpose
        </p>
      </header>

      {/* Meet Our Team */}
      <section className="text-center py-12 bg-white mt-10">
        <h2 className="text-2xl font-bold text-black">Meet Our Team</h2>
        <p className="text-black text-sm mt-2">
          Driven by innovation and guided by experience
        </p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {team.map((member, index) => (
            <div
              key={index}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        <div className="col-span-3">
          <h3 className="text-center text-2xl font-bold text-black">
            Our Values
          </h3>
          <p className="text-center text-black text-sm mt-2">
            The principles that guide everything we do
          </p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="font-semibold flex items-center text-black">
            <span className="mr-2">&#128161;</span>
            Innovation
          </h3>
          <p className="text-gray-600 mt-2">
            We push boundaries and embrace new ideas.
          </p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="font-semibold flex items-center text-black">
            <span className="mr-2">Image</span>
            Collaboration
          </h3>
          <p className="text-gray-600 mt-2">Together we achieve more </p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="font-semibold flex items-center text-black">
            <span className="mr-2">Image</span>
            Passion
          </h3>
          <p className="text-gray-600 mt-2">We love what we do!</p>
        </div>
      </section>

      <section className="grid lg:grid-cols-4 bg-white mt-10 py-16">
        <div className="text-center p-6 text-black">
          <h2 className="text-4xl font-bold text-black">10+</h2>
          <p className="text-black text-md mt-2">Years Experience </p>
        </div>

        <div className="text-center p-6 text-black">
          <h2 className="text-4xl font-bold text-black">200+</h2>
          <p className="text-black text-md mt-2">Clients Worldwide </p>
        </div>

        <div className="text-center p-6 text-black">
          <h2 className="text-4xl font-bold text-black">50+</h2>
          <p className="text-black text-md mt-2">Team Members</p>
        </div>

        <div className="text-center p-6 text-black">
          <h2 className="text-4xl font-bold text-black">95%</h2>
          <p className="text-black text-md mt-2">Client Satisfaction</p>
        </div>
      </section>
    </div>
  );
}
