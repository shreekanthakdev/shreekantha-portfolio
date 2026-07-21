import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-slate-200/70 bg-white/60 px-4 py-8 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/60 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-slate-600 dark:text-slate-300 md:flex-row md:text-left">
        <p>&copy; {new Date().getFullYear()} Shreekantha Kudlur. Built with React, Tailwind, and Framer Motion.</p>
        <div className="flex items-center gap-3 text-xl">
          <a href="https://github.com/shreekanthakdev" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full p-2 transition hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-800">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shreekantha-k-106088253" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full p-2 transition hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-800">
            <FaLinkedin />
          </a>
          <a href="mailto:kudlurshreekantha@gmail.com" aria-label="Email" className="rounded-full p-2 transition hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-800">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
