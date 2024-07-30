"use client";

import Navbar from '@/Components/navigationBar';
import Head from 'next/head';
import React from 'react';
import { useGlobalState } from '../context/GlobalStateContext';
import { FaJsSquare, FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiSpringboot, SiNextdotjs, SiFlutter, SiJavascript, SiMysql, SiMongodb, SiFirebase, SiDart, SiGithub, SiPostman, SiFigma, SiAdobephotoshop, SiBlender, SiCanva } from 'react-icons/si';
import { RiSoundcloudLine } from 'react-icons/ri';



const frontEndSkills = [
  { name: 'Flutter', icon: SiFlutter },
  { name: 'React Js', icon: FaReact },
  { name: 'Next Js', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
];

const backEndskills = [

  { name: 'Spring boot', icon: SiSpringboot },
  { name: 'REST API', icon: RiSoundcloudLine }
];

const databaseskills = [

  { name: 'MySQL', icon: SiMysql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Firebase', icon: SiFirebase }
];
const programmingLanguagekills = [
  { name: 'Java', icon: FaJava },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Dart', icon: SiDart},
];

const toolbox = [
  { name: 'Github', icon: SiGithub},
  { name: 'Postman', icon: SiPostman },
  { name: 'Figma', icon: SiFigma },
  { name: 'Adobe Photoshop', icon: SiAdobephotoshop },
  { name: 'Blender', icon: SiBlender },
  { name: 'Canva', icon: SiCanva },
];

export default function AboutPage() {
  const { number, setNumber, dark, setDark } = useGlobalState();
  const iconColor = dark ? "text-teal-400" : "text-gray-700";

  return (
    <div className="">
      <Head>
        <title>About Me</title>
        <meta name="description" content="About page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`px-10 md:px-20 lg:px-40 ${dark ? "bg-gray-900" : "bg-white"}`}>
        <section className="min-h-screen">
          <nav className={`flex justify-between pt-10 mb-12 ${dark ? "text-white" : "text-gray-900"}`}>
            <Navbar />
          </nav>
          <div className="text-start">
            <h2 className={`pb-1 text-4xl font-medium text-teal-600 dark:text-teal-400 md:text-6xl`}>About</h2>
            
            {/* Skills Section */}
            <h3 className="pt-10 text-2xl font-medium text-teal-600 dark:text-teal-400">Skills</h3>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-4">
              <div>            <h3 className={`pt-6 text-xl font-medium  ${dark?"text-teal-600":"text-gray-700"}`}>Front-End Development</h3>
            <div className="flex flex-wrap gap-4 pt-4">
              {frontEndSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <skill.icon size={40} className={iconColor} />
                  <span className={`${dark ? "text-white" : "text-gray-700"}  text-sm font-medium`}>{skill.name}</span>
                </div>
              ))}
            </div></div>
              <div>            <h3 className={`pt-6 text-xl font-medium  ${dark?"text-teal-600":"text-gray-700"}`}>Back-End Development</h3>
            <div className="flex flex-wrap gap-4 pt-4">
              {backEndskills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <skill.icon size={40} className={iconColor} />
                  <span className={`${dark ? "text-white" : "text-gray-700"}  text-sm font-medium`}>{skill.name}</span>
                </div>
              ))}
            </div></div>
              <div>            <h3 className={`pt-6 text-xl font-medium  ${dark?"text-teal-600":"text-gray-700"}`}>Databases</h3>
            <div className="flex flex-wrap gap-4 pt-4">
              {databaseskills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <skill.icon size={40} className={iconColor} />
                  <span className={`${dark ? "text-white" : "text-gray-700"}  text-sm font-medium`}>{skill.name}</span>
                </div>
              ))}
            </div></div>
              <div>            <h3 className={`pt-6 text-xl font-medium  ${dark?"text-teal-600":"text-gray-700"}`}>Programming Languages</h3>
            <div className="flex flex-wrap gap-4 pt-4">
              {programmingLanguagekills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <skill.icon size={40} className={iconColor} />
                  <span className={`${dark ? "text-white" : "text-gray-700"}  text-sm font-medium`}>{skill.name}</span>
                </div>
              ))}
            </div></div>
              <div>            <h3 className={`pt-6 text-xl font-medium  ${dark?"text-teal-600":"text-gray-700"}`}>Toolbox</h3>
            <div className="flex flex-wrap gap-4 pt-4">
              {toolbox.map((skill, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <skill.icon size={40} className={iconColor} />
                  <span className={`${dark ? "text-white" : "text-gray-700"} text-sm font-medium`}>{skill.name}</span>
                </div>
              ))}
            </div></div>
              <div></div>
            </div>







            
            {/* Timeline Section */}
            <h3 className="pt-10 text-2xl font-medium text-teal-600 dark:text-teal-400">Experience & Education</h3>
            <div className="mt-6 border-l border-teal-600 dark:border-teal-400 relative">
              {/* Experience */}
              <div className="mb-8 ml-4">
                <div className="absolute w-3 h-3 bg-teal-600 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-teal-400"></div>
                <h4 className={`text-xl font-semibold ${dark ? "text-white" : "text-gray-900"}`}>Hasthiya IT</h4>
                <p className={`${dark ? "text-white" : "text-gray-700"}`}>Software Engineer (Intern)</p>
              </div>
              {/* Education */}
              <div className="mb-8 ml-4">
                <div className="absolute w-3 h-3 bg-teal-600 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-teal-400"></div>
                <h4 className={`text-xl font-semibold ${dark ? "text-white" : "text-gray-900"}`}>University of Moratuwa, Sri Lanka</h4>
                <p className={`${dark ? "text-white" : "text-gray-700"}`}>B.Sc (Hons) Information Technology</p>
              </div>

              <div className="mb-8 ml-4">
                <div className="absolute w-3 h-3 bg-teal-600 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-teal-400"></div>
                <h4 className={`text-xl font-semibold ${dark ? "text-white" : "text-gray-900"}`}>Bandaranayake College, Gampaha</h4>
                <p className={`${dark ? "text-white" : "text-gray-700"}`}>
                  Physical science stream<br />
                  Advanced level examination (2019)<br />
                  Combined Mathematics - A <br />
                  Physics - B <br />
                  Chemistry - B <br />
                </p>
              </div>

              <div className="mb-8 ml-4">
                <div className="absolute w-3 h-3 bg-teal-600 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-teal-400"></div>
                <h4 className={`text-xl font-semibold ${dark ? "text-white" : "text-gray-900"}`}>Other courses</h4>
                <p className={`${dark ? "text-white" : "text-gray-700"}`}>
                  Certificate in Software Engineering (NIBM) <br />
                  React - the complete guide 2023 (Udemy)  <br />
                  Web design for beginners (Open UOM)<br />
                  Cambridge English: Key (KET)
                </p>
              </div>
            </div>

            <h3 className="pt-10 text-2xl font-medium text-teal-600 dark:text-teal-400">Achievements</h3>
            <ul className={`list-disc pl-5 ${dark ? "text-white" : "text-gray-700"}`}>
              <li>President’s Scout Award - Sri Lanka Scout Association (2017)</li>
              <li>Colors Award  - Bandaranayake College Gampaha (2018)</li>
            </ul>

            <h3 className="pt-10 text-2xl font-medium text-teal-600 dark:text-teal-400">Volunteer Experience</h3>
            <ul className={`list-disc pl-5 ${dark ? "text-white" : "text-gray-700"}`}>
              <li>
                <strong>FIT Moments - University of Moratuwa  </strong><br />
                Member of Photography and videography pillar   (2023-2024)
              </li>
              <li>
                <strong>Treasurer - Scout Group, Bandaranayake College</strong> (2017): Involved in organizing all-island scouting competitions and various scouting events by guiding over 400 scouts.
              </li>
              <li>
                <strong>Vice captain - Hiking Team, Bandaranayake College</strong> (2016-2017): Represented school hiking team for five consecutive years and led the team for 2 years. We won several competitions and were awarded as the best explorer.
              </li>
            </ul>
          </div>
          <div className=' h-9'>

          </div>
        </section>
      </main>
    </div>
  );
}
