import { useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const links = useMemo(
    () => [
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
      { name: "Skills", path: "/tech" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
      { name: "Resume", path: "/resume" },
    ],
    []
  );

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/70 bg-white/70 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/70">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <Link to="/" className="text-lg font-semibold tracking-[0.25em] text-slate-900 dark:text-white">
          SHREE
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-cyan-600 dark:hover:text-cyan-400 ${isActive ? "text-cyan-600 dark:text-cyan-400" : "text-slate-700 dark:text-slate-200"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="https://github.com/shreekanthakdev" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full p-2 text-slate-700 transition hover:bg-slate-200 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
            <FaGithub className="text-lg" />
          </a>
          <a href="https://www.linkedin.com/in/shreekantha-k-106088253" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full p-2 text-slate-700 transition hover:bg-slate-200 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
            <FaLinkedin className="text-lg" />
          </a>
          <button type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} className="rounded-full border border-slate-300 p-2 text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <button type="button" className="rounded-full border border-slate-300 p-2 text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-200" aria-label="Open menu" onClick={() => setOpen((value) => !value)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="border-t border-slate-200 bg-white/95 px-4 py-4 dark:border-slate-800 dark:bg-slate-950/95 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <NavLink key={link.name} to={link.path} onClick={() => setOpen(false)} className={({ isActive }) => `text-sm font-medium ${isActive ? "text-cyan-600 dark:text-cyan-400" : "text-slate-700 dark:text-slate-200"}`}>
                {link.name}
              </NavLink>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <button type="button" onClick={toggleTheme} className="rounded-full border border-slate-300 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-200">
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
};

export default Navbar;

