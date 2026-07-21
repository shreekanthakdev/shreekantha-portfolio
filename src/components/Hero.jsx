import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import profileP from "../assets/Shree0002.jpeg";
import { CONTACT } from "../constants";

const roles = ["MERN Developer", "React Engineer", "UI/UX Focused Builder"];

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[loopIndex % roles.length];
    const typingSpeed = isDeleting ? 60 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1200);
        } else {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }
      } else if (displayedText === "") {
        setIsDeleting(false);
        setLoopIndex((value) => (value + 1) % roles.length);
      } else {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, loopIndex]);

  return (
    <section id="top" className="relative overflow-hidden py-12 sm:py-20 lg:py-24">
      <div className="absolute inset-0 -z-10 rounded-[40px] border border-cyan-300/20 bg-gradient-to-br from-cyan-200/30 via-white/70 to-violet-200/40 dark:border-cyan-900/40 dark:from-cyan-500/10 dark:via-slate-900/60 dark:to-violet-500/10" />
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-700 dark:text-cyan-300">Available for full-time & freelance opportunities</p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            I build premium web experiences for modern teams.
          </h1>
          <div className="mt-5 flex min-h-[2.5rem] items-center text-2xl font-semibold text-slate-700 sm:text-3xl dark:text-slate-200">
            <span className="mr-2">I&apos;m a</span>
            <span className="bg-gradient-to-r from-cyan-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              <span className="animate-[pulse_4s_ease-in-out_infinite]">{displayedText}</span>
              <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-cyan-600 align-middle" />
            </span>
          </div>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            I&apos;m Shreekantha Kudlur, a MERN-focused developer crafting responsive, scalable, and product-minded interfaces that balance performance with polished UX.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/resume" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-2px] hover:bg-slate-700 dark:bg-white dark:text-slate-900">
              View Resume <Download className="h-4 w-4" />
            </a>
            <a href="/projects" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:translate-y-[-2px] hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200">
              Explore Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:translate-y-[-2px] hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200">
              Contact Me <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a href="https://github.com/Shreekantha45" target="_blank" rel="noreferrer" aria-label="Github" className="rounded-full border border-slate-300 p-3 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/shreekantha-k-106088253" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-slate-300 p-3 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={`mailto:${CONTACT.email}`} aria-label="Email" className="rounded-full border border-slate-300 p-3 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative mx-auto flex max-w-md items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 blur-3xl opacity-40" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/70 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.2)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70">
            <img src={profileP} alt="Shreekantha Kudlur" className="h-[360px] w-full rounded-[24px] object-cover object-top sm:h-[460px]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;