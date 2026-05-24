"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiArrowRight } from "react-icons/fi";
import AnimatedSection from "@/Components/AnimatedSection";
import PageShell from "@/Components/PageShell";
import SocialLinks from "@/Components/home/SocialLinks";
import {
  homeActions,
  homeHighlights,
  homeProfile,
  socialLinks,
} from "@/data/home";

export default function HomeClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <PageShell>
      {({ dark }) => (
        <div className="items-center gap-12 lg:flex">
          <div className="basis-2/3">
            <AnimatedSection>
              <div className="text-start">
                <p className="mb-3 inline-flex rounded-lg border border-teal-500/20 bg-white/70 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm dark:border-teal-300/20 dark:bg-gray-900/70 dark:text-teal-300">
                  Software Developer
                </p>
                <h2 className="my-4 max-w-3xl pb-1 text-4xl font-semibold text-teal-600 dark:text-teal-400 md:text-6xl">
                  {homeProfile.name}
                </h2>
                <h3 className="my-4 min-h-[2.5rem] text-2xl font-semibold text-amber-600 dark:text-amber-300 md:text-3xl">
                  <TypeAnimation
                    sequence={homeProfile.roles.flatMap((role) => [
                      role,
                      1000,
                    ])}
                    speed={50}
                    repeat={Infinity}
                  />
                </h3>
                <p
                  className={`text-md text-justify leading-8 lg:pr-10 ${
                    dark ? "text-slate-200" : "text-gray-800"
                  }`}
                >
                  {homeProfile.intro}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {homeActions.map((action) => (
                    <Link
                      key={action.href}
                      href={action.href}
                      className={`inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold shadow-sm transition ${
                        action.variant === "primary"
                          ? "bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-400 dark:text-gray-950 dark:hover:bg-teal-300"
                          : "border border-teal-600/30 bg-white/70 text-teal-700 hover:border-teal-600 hover:bg-white dark:border-teal-300/30 dark:bg-gray-900/70 dark:text-teal-200 dark:hover:border-teal-300"
                      }`}
                    >
                      {action.label}
                      <FiArrowRight size={18} />
                    </Link>
                  ))}
                </div>
                <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
                  {homeHighlights.map((highlight) => (
                    <div
                      key={highlight.label}
                      className="rounded-lg border border-white/60 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-gray-900/60"
                    >
                      <p className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                        {highlight.value}
                      </p>
                      <p
                        className={`text-sm ${
                          dark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {highlight.label}
                      </p>
                    </div>
                  ))}
                </div>
                <SocialLinks links={socialLinks} dark={dark} />
              </div>
            </AnimatedSection>
          </div>
          {mounted && (
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 22 }}
              className="relative mt-10 h-[420px] basis-1/3 lg:mt-0 lg:h-[520px]"
            >
              <Image
                src={homeProfile.portrait.src}
                alt={homeProfile.portrait.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-contain"
                priority
              />
            </motion.div>
          )}
        </div>
      )}
    </PageShell>
  );
}
