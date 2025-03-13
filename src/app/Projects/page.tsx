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
      title: "Monkey Bird Travels",
      year: "2024",
      description: " Developed a multi-page travel agency website designed to showcase comprehensive travel packages, destinations, and services, enhancing online visibility and user engagement. Integrated EmailJS to facilitate seamless user interactions, improving communication and booking inquiries.",
      imageUrl: "https://i.imgur.com/DpxkFsf.jpg",
      technologies: ["Next.js","Typescript", "Tailwind CSS", "EmailJs"],
      role: "Front-End Developer",
      url: "https://monkeybirdtravels.vercel.app/" 
    },
    {
      title: "Virtual School",
      year: "2023",
      description: " Designed and developed a Learning Management System (LMS) to digitize school activities in Sri Lanka, enhancing efficiency in academic and administrative processes. Key features include user management, attendance tracking, document management, and a discussion forum, providing a seamless and interactive learning experience.",
      imageUrl: "https://i.imgur.com/Xuv7Lrp.png",
      technologies: ["React","Springboot","Mongodb","AWS S3"],
      role: "Full-Stack Developer / Team leader",
      url: "https://github.com/Chinthana7858/virtualschool" 
    },
    {
      title: "IT Gura",
      year: "2024",
      description: " Developed a Learning Management System (LMS) for an educational institute, optimizing online learning and administrative processes with features such as course management, student tracking, and assessments, enhancing efficiency and engagement in digital education.",
      imageUrl: "https://i.imgur.com/68s6GbL.jpg",
      technologies: ["React","Typescript","Tailwind CSS"],
      role: "Front-End Developer",
      url: "" 
    },
    

    {
      title: "IoT-based Air Quality Monitoring System ",
      year: "2025",
      description: "Air quality monitoring system with a mobile app for real-time tracking, data visualization, and alerts. Measured temperature, humidity, eCO₂,and TVOC, transmitting data via Wi-Fi to an MQTT-based server",
      imageUrl: "https://i.imgur.com/5zzM7rt.jpg",
      technologies: ["Flutter", "MQTT" , "PlatformIO", "C++", "Python"],
      role: "Mobile App Developer",
      url: "https://github.com/IN4300-Embedded-Systems-Project/B20_Group04" 
    },

    {
      title: "The Travel Photographer (Personal project)",
      year: "2023",
      description: "Customizable web application featuring blogging capabilities, portfolio management, and an owner login system.",
      imageUrl: "https://i.imgur.com/QXSw96E.jpg",
      technologies: ["React", "Spring Boot" , "Mongodb"],
      role: "Full-Stack Developer",
      url: "https://thetravelphotographer.netlify.app/" 
    },
    {
      title: "Mind Healer",
      year: "2024",
      description: "Mobile application for diagnosing patients’ mental disorders and providing solutions using artificial intelligence techniques",
      imageUrl: "https://i.imgur.com/t7EiTjd.jpg",
      technologies: ["Flutter", "Firebase"],
      role: "Mobile App Developer",
      url: "https://github.com/Chinthana7858/mind_healer" 
    },
    
  ];

  return (
    <div className="">
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`px-10 md:px-20 lg:px-40 ${dark ? "bg-gray-900" : " bg-slate-200"}`}>
        <section className="min-h-screen">
          <nav className={`flex justify-between pt-10 mb-12 ${dark ? "text-white" : "text-gray-900"}`}>
            <Navbar />
          </nav>

          <div className="basis-2/3">
            <div className="text-start">
              <h2 className="pb-10 text-4xl font-medium text-teal-600 dark:text-teal-400 md:text-6xl">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                  <a 
                  key={index} 
                  href={project.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-transform duration-200" 
                 
                >
                  <div key={index} className={`border rounded-lg p-5 ${dark ? "bg-gray-800" : "bg-gray-100"} shadow-lg `}>
                    <img src={project.imageUrl} alt={project.title} className="w-full xl:h-96 object-cover rounded-lg mb-5" />
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
                  </a>
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
