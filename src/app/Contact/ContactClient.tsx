"use client";

import ContactDetails from "@/Components/contact/ContactDetails";
import ContactForm from "@/Components/contact/ContactForm";
import PageHeading from "@/Components/PageHeading";
import PageShell from "@/Components/PageShell";
import { contactDetails, contactIntro } from "@/data/contact";

export default function ContactClient() {
  return (
    <PageShell bottomSpacerClassName="h-10">
      {({ dark }) => (
        <>
          <div className="mb-10 text-start">
            <PageHeading>Contact me</PageHeading>
            <p
              className={`text-md text-justify leading-8 md:text-lg ${
                dark ? "text-white" : "text-gray-700"
              }`}
            >
              {contactIntro}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <ContactForm dark={dark} />
            <ContactDetails details={contactDetails} dark={dark} />
          </div>
        </>
      )}
    </PageShell>
  );
}
