import type { ContactDetail } from "@/types/portfolio";

interface ContactDetailsProps {
  details: ContactDetail[];
  dark: boolean;
}

export default function ContactDetails({ details, dark }: ContactDetailsProps) {
  return (
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
        {details.map((detail) => (
          <li key={detail.label}>
            <strong>{detail.label}:</strong>{" "}
            {detail.href ? (
              <a
                href={detail.href}
                className="text-teal-600 dark:text-teal-400"
              >
                {detail.value}
              </a>
            ) : (
              detail.value
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
