"use client";
"use client";
import Navbar from '@/Components/navigationBar';
import Head from 'next/head';
import React from 'react';
import { useGlobalState } from '../context/GlobalStateContext';

export default function ProjectsPage() {
  const { number, setNumber, dark, setDark } = useGlobalState();
  
  const projects = [
    {
      title: "IT Gura",
      year: "2024",
      description: "Learning management system for an institute",
      imageUrl: "/images/it-gura.jpg",
      technologies: ["React","Typescript","Tailwind CSS"],
      role: "Front-End Developer"
    },
    {
      title: "Mind Healer",
      year: "2024",
      description: "Mobile application for diagnosing patients’ mental disorders and providing solutions using artificial intelligence techniques",
      imageUrl: "/images/mind-healer.jpg",
      technologies: ["Flutter", "Firebase"],
      role: "Mobile App Developer"
    },
    {
      title: "Lak Dream Travel Destination",
      year: "2024",
      description: "Website for a tourism company",
      imageUrl: "/images/lak-dream.jpg",
      technologies: ["Next.js","Typescript", "Tailwind CSS"],
      role: "Front-End Developer"
    },
    {
      title: "Virtual School",
      year: "2023",
      description: "LMS project for an education institute",
      imageUrl: "/images/virtual-school.jpg",
      technologies: ["React","Springboot","Mongodb"],
      role: "Full-Stack Developer / Team leader"
    },
  ];

  return (
    <div className="">
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`px-10 md:px-20 lg:px-40 ${dark ? "bg-gray-900" : "bg-white"}`}>
        <section className="min-h-screen">
          <nav className={`flex justify-between pt-10 mb-12 ${dark ? "text-white" : "text-gray-900"}`}>
            <Navbar />
          </nav>

          <div className="basis-2/3">
            <div className="text-start">
              <h2 className="pb-10 text-4xl font-medium text-teal-600 dark:text-teal-400 md:text-6xl">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                  <div key={index} className={`border rounded-lg p-5 ${dark ? "bg-gray-800" : "bg-gray-100"} shadow-lg`}>
                    <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-5" />
                    <h3 className={`text-2xl font-semibold mb-2 ${dark ? "text-teal-400" : "text-teal-600"}`}>{project.title}</h3>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{project.year}</p>
                    <p className={`text-base ${dark ? "text-gray-200" : "text-gray-700"}`}>{project.description}</p>
                    <div className="mt-4">
                      <h4 className={`text-lg font-medium ${dark ? "text-teal-400" : "text-teal-600"}`}>Technologies Used:</h4>
                      <ul className={`list-disc pl-5 ${dark ? "text-gray-200" : "text-gray-700"}`}>
                        {project.technologies.map((tech, techIndex) => (
                          <li key={techIndex}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className={`text-lg font-medium ${dark ? "text-teal-400" : "text-teal-600"}`}>Role:</h4>
                      <p className={`${dark ? "text-gray-200" : "text-gray-700"}`}>{project.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=' h-28'></div>
        </section>
      </main>
    </div>
  );
}
