"use client";
import Navbar from "@/Components/navigationBar";
import Head from "next/head";
import React, { useState } from "react";
import { useGlobalState } from "../context/GlobalStateContext";
import emailjs from "emailjs-com";

interface Props {
  dark: boolean;
}

export default function ContactPage() {
  const { dark } = useGlobalState();

  return (
    <div className="">
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`px-10 md:px-20 lg:px-40 ${
          dark ? "bg-gray-900" : " bg-slate-200"
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
          <Paragraph dark={dark} />
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <ContactForm dark={dark} />
              <ContactDetails dark={dark} />
            </div>
          </div>
          <div className=" h-10"></div>
        </section>
      </main>
    </div>
  );
}

const Paragraph: React.FC<Props> = ({ dark }) => (
  <div className="text-start mb-10">
    <h2 className="pb-1 text-4xl font-medium text-teal-600 dark:text-teal-400 md:text-6xl">
      Contact me
    </h2>
    <p
      className={` leading-8 text-md md:text-lg text-justify ${
        dark ? "text-white" : "text-gray-700"
      }`}
    >
      Thank you for visiting my portfolio! I am always eager to connect and
      collaborate on exciting projects. Whether you would like to discuss potential
      opportunities, share your thoughts on my work, or simply say hello, feel
      free to get in touch. As a passionate student exploring the world of
      technology and innovation, I am excited to hear from you and build
      meaningful connections. Let s create something amazing together!
    </p>
  </div>
);





const ContactForm: React.FC<Props> = ({ dark }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage(null);

    emailjs
      .send(
        "service_cdpawmb", // Replace with your EmailJS Service ID
        "template_b732889", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "H6cy8FN4gnmq0sggW" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setResponseMessage("Thank you! Your message has been sent.");
        },
        (error) => {
          console.error("Error sending email:", error);
          setResponseMessage(
            "Sorry, there was an error sending your message. Please try again."
          );
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div>
      <h3
        className={`pb-4 text-2xl font-medium ${
          dark ? "text-teal-400" : "text-teal-600"
        }`}
      >
        Contact Form
      </h3>
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
              dark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
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
              dark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
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
              dark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
            }`}
            rows={5}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={`px-4 py-2 mt-4 text-white rounded-md ${
            isSubmitting
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-teal-600 hover:bg-teal-700 dark:bg-teal-400 dark:hover:bg-teal-500"
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* Popup for Response Message */}
      {responseMessage && (
        <div
          className={`fixed bottom-4 right-4 p-4 rounded-md shadow-lg text-white p-10 ${
            responseMessage.includes("Thank you")
              ? "bg-green-500"
              : "bg-red-500"
          }`}
        >
          {responseMessage}
        </div>
      )}
    </div>
  );
};



const ContactDetails: React.FC<Props> = ({ dark }) => (
  <div>
    <h3
      className={`pb-4 text-2xl font-medium ${
        dark ? "text-teal-400" : "text-teal-600"
      }`}
    >
      Contact Details
    </h3>
    <p className={`text-lg ${dark ? "text-white" : "text-gray-700"}`}>
      Feel free to reach out to me via email or phone:
    </p>
    <ul
      className={`mt-4 space-y-2 text-lg ${
        dark ? "text-white" : "text-gray-700"
      }`}
    >
      <li>
        <strong>Email:</strong> chinthanaprabhashitha@gmail.com
      </li>
      <li>
        <strong>Phone:</strong> +94 70 6574222
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
);
