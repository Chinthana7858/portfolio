"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import Navbar from "@/Components/navigationBar";
import { TypeAnimation } from "react-type-animation";
import { useGlobalState } from "./context/GlobalStateContext";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { number, setNumber, dark, setDark } = useGlobalState();
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={dark ? "dark" : ""}>
      <Head>
        <title>My Portfolio - Contact Me</title>
        <meta
          name="description"
          content="Welcome to my portfolio! Connect with me to explore exciting opportunities, discuss projects, or share feedback."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`px-10  md:px-20 lg:px-40 ${
          dark ? "bg-gray-900 " : " bg-slate-200"
        }`}
      >
        <section className="min-h-screen">
          <nav
            className={`flex justify-between pt-10 mb-12  ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            <Navbar />
          </nav>
          <div className="lg:flex">
            <div className=" basis-2/3">
              <div className="text-start">
                <h2 className="pb-1 text-4xl font-medium text-teal-600 dark:text-teal-400 md:text-6xl my-4">
                  Chinthana Rajapaksha
                </h2>
                <h3
                  className={`text-lg  md:text-2xl my-4 ${
                    dark ? "text-white" : "text-gray-700"
                  }`}
                >
                  <TypeAnimation
                    sequence={[
                      "Problem Solver_",
                      1000,
                      "Designer_",
                      1000,
                      "Software Developer_",
                      1000,
                    ]}
                    speed={50}
                    repeat={0}
                    style={{ fontSize: "2em" }}
                  />
                </h3>
                <p
                  className={`text-md lg:pr-10 leading-8 text-gray-800 text-justify ${
                    dark ? "text-white " : " bg-slate-200"
                  }`}
                >
                  I am an enthusiastic undergraduate with a passion for solving
                  complex problems using an engineering approach. My ability to
                  quickly adapt to new technologies allows me to leverage my
                  full potential and skills to achieve successful outcomes. I am
                  particularly interested in software development, with a focus
                  on full-stack development, and database design. My academic
                  background has equipped me with a strong foundation in both
                  theoretical and practical aspects of these areas, and I am
                  eager to apply my knowledge to real-world projects. I thrive
                  in dynamic environments where I can continuously learn and
                  grow, and I am committed to contributing to innovative
                  solutions in the field of software engineering.
                </p>
                <div
                  className={`flex justify-start gap-6 py-5 text-5xl ${
                    dark ? "text-white " : " text-slate-500"
                  }`}
                >
                  <a href="http://linkedin.com/in/prchinthana">
                    <AiFillLinkedin size={40} />
                  </a>
                  <a href="http://github.com/Chinthana7858">
                    <AiFillGithub size={40} />
                  </a>
                  <a href="mailto:chinthanaprabhashitha@gmail.com">
                    <BiLogoGmail size={40} />
                  </a>
                  <a href="https://wa.me/94711700404" target="_blank" rel="noopener noreferrer">
  <FaSquareWhatsapp size={40} />
</a>

                </div>
              </div>
            </div>
            {mounted && (
              <motion.div
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="basis-1/3"
              >
                <img
                  src="https://i.imgur.com/TGxPsM1.jpg"
                  alt="Portrait"
                  className="w-full lg:min-w-full lg:min-h-full object-cover mx-auto"
                />
              </motion.div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
