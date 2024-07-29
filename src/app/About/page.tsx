"use client";

import Navbar from '@/Components/navigationBar';
import Head from 'next/head';
import React from 'react';
import { useGlobalState } from '../context/GlobalStateContext';

export default function AboutPage() {
  const { number, setNumber, dark, setDark } = useGlobalState();
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
          <div className="basis-2/3">
            <div className="text-start">
              <h2 className="pb-1 text-4xl font-medium text-teal-600 dark:text-teal-400 md:text-6xl">About</h2>

         

              <h3 className="pt-6 text-2xl font-medium text-teal-600 dark:text-teal-400">Education</h3>
              <p className={`leading-8 ${dark ? "text-white" : "text-gray-700"}`}>
                <strong>University of Moratuwa, Sri Lanka</strong><br />
                B.Sc. Engineering (Electronic and Telecommunication)<br />
                Dean’s list: Semester 1, 2<br />
                CGPA: 3.66
              </p>
              <p className={`leading-8 ${dark ? "text-white" : "text-gray-700"}`}>
                <strong>Bandaranayake College, Gampaha</strong><br />
                Physical science stream<br />
                3 As in advanced level examination<br />
                Z-Score: 2.0022
              </p>
              <p className={`leading-8 ${dark ? "text-white" : "text-gray-700"}`}>
                <strong>Other courses</strong><br />
                Essential English (British Council- Colombo)<br />
                C++, SQL (SoloLearn)<br />
                Machine Learning and Data Science (Udemy)<br />
                Machine Learning with Python offered by IBM (Coursera)<br />
                Deep Learning Specialization offered by Deeplearning.ai (Coursera)<br />
                Project Management and Other Tools for Career Development (Coursera)
              </p>

              <h3 className="pt-6 text-2xl font-medium text-teal-600 dark:text-teal-400">Skills</h3>
              <p className={`leading-8 ${dark ? "text-white" : "text-gray-700"}`}>
                Languages: Sinhala (Native), English<br />
                Programming Skills: Python, C++, MATLAB, Verilog, SQL<br />
                Tools: TensorFlow, Keras, PyTorch, Pandas<br />
                Technical Skills: Altium Designer, Arduino, Raspberry Pi, Multisim, Git<br />
                Soft Skills: Leadership, Teamwork, Time management, Critical thinking
              </p>

              <h3 className="pt-6 text-2xl font-medium text-teal-600 dark:text-teal-400">Achievements</h3>
              <ul className={`list-disc pl-5 ${dark ? "text-white" : "text-gray-700"}`}>
                <li>Finalist - SPARK Challenge (2022): SPARK challenge is an innovation competition organized by the department of electronic and telecommunication engineering, UoM. Our project Vis-BRIDGE was selected for the final round of the SPARK challenge.</li>
                <li>20th Rank in LK-IEEEXtream 16.0 (2022)</li>
                <li>49th Rank in LK-IEEEXtream 15.0 (2021)</li>
                <li>Colours Award - Bandaranayake College (2018)</li>
                <li>President’s Scout Award - Sri Lanka Scout Association (2017)</li>
              </ul>

              <h3 className="pt-6 text-2xl font-medium text-teal-600 dark:text-teal-400">Volunteer Experience</h3>
              <ul className={`list-disc pl-5 ${dark ? "text-white" : "text-gray-700"}`}>
                <li>
                  <strong>Electronic Club- UoM</strong><br />
                  Event coordinator- SLRC branch (2022-present): Responsible for organizing and conducting all robotics-related events in the Electronic Club. Sri Lankan Robotics Challenge (SLRC) is the premier robotics competition in Sri Lanka, organized annually by the SLRC branch. Currently working as the event chairperson for 2022.<br />
                  Committee member- Main branch (2021-2022): Successfully concluded a workshop series on embedded system design as chairperson.
                </li>
                <li>
                  <strong>President - Next Step</strong> (2021-Present): Next Step is a charity organization consisting of young people. We annually organize several charity programs focusing mainly on education and health development.
                </li>
                <li>
                  <strong>Member - IEEE</strong> (2021-Present)
                </li>
                <li>
                  <strong>President - Scout Group, Bandaranayake College</strong> (2017): Involved in organizing all-island scouting competitions and various scouting events by guiding over 400 scouts. Currently working as a warranted scout instructor.
                </li>
                <li>
                  <strong>Captain - Hiking Team, Bandaranayake College</strong> (2016-2017): Represented school hiking team for five consecutive years and led the team for 2 years. We won several competitions and were awarded as the best captain.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
