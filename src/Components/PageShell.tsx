"use client";

import type { ReactNode } from "react";
import Navbar from "@/Components/navigationBar";
import { useGlobalState } from "@/app/context/GlobalStateContext";

interface PageShellProps {
  children: (props: { dark: boolean }) => ReactNode;
  bottomSpacerClassName?: string;
}

export default function PageShell({
  children,
  bottomSpacerClassName,
}: PageShellProps) {
  const { dark } = useGlobalState();

  return (
    <div className={dark ? "dark" : ""}>
      <main
        className={`min-h-screen overflow-hidden px-6 md:px-20 lg:px-40 ${
          dark
            ? "bg-[linear-gradient(135deg,#0f172a_0%,#111827_48%,#12211f_100%)]"
            : "bg-[linear-gradient(135deg,#e2e8f0_0%,#f8fafc_52%,#dbeafe_100%)]"
        }`}
      >
        <section className="min-h-screen">
          <nav
            className={`relative z-20 mb-12 flex justify-between pt-8 ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            <Navbar />
          </nav>
          <div className="relative z-10">{children({ dark })}</div>
          {bottomSpacerClassName && <div className={bottomSpacerClassName} />}
        </section>
      </main>
    </div>
  );
}
