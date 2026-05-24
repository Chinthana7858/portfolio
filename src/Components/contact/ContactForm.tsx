"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { emailConfig } from "@/data/contact";

interface ContactFormProps {
  dark: boolean;
}

export default function ContactForm({ dark }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
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

    if (formData.website) {
      setResponseMessage("Thank you! Your message has been sent.");
      return;
    }

    setIsSubmitting(true);
    setResponseMessage(null);

    emailjs
      .send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        emailConfig.publicKey
      )
      .then(
        () => {
          setFormData({ name: "", email: "", message: "", website: "" });
          setResponseMessage("Thank you! Your message has been sent.");
        },
        () => {
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
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

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
            className={`mt-1 w-full rounded-md p-2 ${
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
            className={`mt-1 w-full rounded-md p-2 ${
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
            className={`mt-1 w-full rounded-md p-2 ${
              dark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
            }`}
            rows={5}
            required
          />
        </div>
        <button
          type="submit"
          className={`mt-4 rounded-md px-4 py-2 text-white ${
            isSubmitting
              ? "cursor-not-allowed bg-gray-500"
              : "bg-teal-600 hover:bg-teal-700 dark:bg-teal-400 dark:hover:bg-teal-500"
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      {responseMessage && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed bottom-4 right-4 rounded-md p-6 text-white shadow-lg ${
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
}
