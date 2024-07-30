"use client";
import Navbar from "@/Components/navigationBar";
import Head from "next/head";
import React, { useState } from "react";
import { useGlobalState } from "../context/GlobalStateContext";

export default function ContactPage() {
  const { dark } = useGlobalState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="">
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`px-10 md:px-20 lg:px-40 ${
          dark ? "bg-gray-900" : "bg-white"
        }`}
      >
        <section className="min-h-screen">
          <nav
            className={`flex justify-between pt-10 mb-12 ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            <Navbar />
          </nav>

          <div className="basis-2/3">
            <div className="text-start mb-10">
              <h2 className="pb-1 text-4xl font-medium text-teal-600 dark:text-teal-400 md:text-6xl">
                Contact
              </h2>
              {/* <p
                className={`max-w-xl leading-8 text-md md:text-xl ${
                  dark ? "text-white" : "text-gray-700"
                }`}
              >
                I am an enthusiastic undergraduate who loves to solve problems
                with an engineering approach. I can quickly adapt to new
                technologies and use my full potential and skills to reach a
                successful outcome. I am interested in software development
                (full stack) and database design.
              </p> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3
                  className={`pb-4 text-2xl font-medium ${
                    dark ? "text-teal-400" : "text-teal-600"
                  }`}
                >
                  Contact Form
                </h3>
                <p
                  className={`text-lg ${dark ? "text-white" : "text-gray-700"}`}
                >
                  Thinking about a new project, a problem to solve, or just want to connect? Let's do it!Use the form on this page or get in touch by other means.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      className={`block text-sm font-medium ${
                        dark ? "text-white" : "text-gray-700"
                      }`}
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-2 mt-1 rounded-md ${
                        dark
                          ? "bg-gray-800 text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                      required
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-sm font-medium ${
                        dark ? "text-white" : "text-gray-700"
                      }`}
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-2 mt-1 rounded-md ${
                        dark
                          ? "bg-gray-800 text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                      required
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-sm font-medium ${
                        dark ? "text-white" : "text-gray-700"
                      }`}
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full p-2 mt-1 rounded-md ${
                        dark
                          ? "bg-gray-800 text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                      rows={5}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 mt-4 text-white bg-teal-600 rounded-md hover:bg-teal-700 dark:bg-teal-400 dark:hover:bg-teal-500"
                  >
                    Submit
                  </button>
                </form>
              </div>

              <div>
              <h3
                  className={`pb-4 text-2xl font-medium ${
                    dark ? "text-teal-400" : "text-teal-600"
                  }`}
                >
                  Let's talk about your project
                </h3>
               


                <h3
                  className={`pb-4 text-2xl font-medium ${
                    dark ? "text-teal-400" : "text-teal-600"
                  }`}
                >
                  Contact Details
                </h3>
                <p
                  className={`text-lg ${dark ? "text-white" : "text-gray-700"}`}
                >
                  Feel free to reach out to me via email or phone:
                </p>
                <ul
                  className={`mt-4 space-y-2 text-lg ${
                    dark ? "text-white" : "text-gray-700"
                  }`}
                >
                  <li>
                    <strong>Email:</strong> your.email@example.com
                  </li>
                  <li>
                    <strong>Phone:</strong> +94 71 1700 404
                  </li>
                  <li>
                    <strong>LinkedIn:</strong>{" "}
                    <a
                      href="https://linkedin.com/in/prchinthana"
                      className="text-teal-600 dark:text-teal-400"
                    >
                      linkedin.com/in/prchinthana
                    </a>
                  </li>
                  <li>
                    <strong>GitHub:</strong>{" "}
                    <a
                      href="https://github.com/Chinthana7858"
                      className="text-teal-600 dark:text-teal-400"
                    >
                      github.com/Chinthana7858
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" h-20">

          </div>
        </section>
      </main>
    </div>
  );
}
