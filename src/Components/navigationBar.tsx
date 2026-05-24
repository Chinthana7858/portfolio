"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { useGlobalState } from "@/app/context/GlobalStateContext";
import { navLinks } from "@/data/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const { dark, setDark } = useGlobalState();

  return (
    <div className="sticky top-0 flex w-full items-center justify-between rounded-2xl border border-white/20 bg-white/60 px-3 py-2 shadow-lg shadow-slate-900/5 backdrop-blur-md dark:border-white/10 dark:bg-gray-950/45 dark:shadow-black/20">
      

      <div className="flex flex-wrap justify-start gap-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-xl px-3 py-2 text-center text-sm font-medium transition-all hover:bg-teal-500 hover:text-white md:text-base ${
                isActive
                  ? "bg-teal-500 text-white shadow-sm shadow-teal-700/20"
                  : "text-gray-700 dark:text-gray-200"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <button
        type="button"
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-white shadow-sm transition hover:bg-teal-600 dark:bg-teal-400 dark:text-gray-950 dark:hover:bg-teal-300"
        onClick={() => setDark(!dark)}
      >
        {dark ? <FiSun size={19} /> : <BsFillMoonStarsFill size={18} />}
      </button>
    </div>
  );
};

export default Navbar;
