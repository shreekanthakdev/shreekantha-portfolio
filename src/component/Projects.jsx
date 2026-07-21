import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Github, Play, X } from "lucide-react";
import { PROJECTS } from "../constants";
import SectionHeading from "./SectionHeading";
import GlassCard from "./GlassCard";

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState("All");
  const [modalProject, setModalProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allTechs = useMemo(() => ["All", ...new Set(PROJECTS.flatMap((project) => project.technologies))], []);

  const filteredProjects = useMemo(
    () => (selectedTech === "All" ? PROJECTS : PROJECTS.filter((project) => project.technologies.includes(selectedTech))),
    [selectedTech]
  );

  useEffect(() => {
    if (!modalProject) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setModalProject(null);
      if (event.key === "ArrowRight") setCurrentImageIndex((prev) => (prev === modalProject.images.length - 1 ? 0 : prev + 1));
      if (event.key === "ArrowLeft") setCurrentImageIndex((prev) => (prev === 0 ? modalProject.images.length - 1 : prev - 1));
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [modalProject]);

  return (
    <section className="py-16 sm:py-20" id="projects">
      <SectionHeading eyebrow="Projects" title="Selected work with measurable product value" subtitle="Each project reflects a blend of polished interfaces, real-world data handling, and a thoughtful development process." />

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {allTechs.map((tech) => (
          <button key={tech} type="button" onClick={() => setSelectedTech(tech)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${selectedTech === tech ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900" : "border border-slate-300 bg-white/70 text-slate-700 hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"}`}>
            {tech}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <motion.div key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}>
            <GlassCard className="flex h-full flex-col overflow-hidden p-0">
              <img src={project.images[0]} alt={project.title} className="h-56 w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <button type="button" onClick={() => { setModalProject(project); setCurrentImageIndex(0); }} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900">
                    View Gallery <Play className="h-4 w-4" />
                  </button>
                  <a href={project.livelink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200">
                    Live Demo <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href={project.repolink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {modalProject ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 p-4" onClick={() => setModalProject(null)}>
            <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ duration: 0.2 }} className="relative w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/20 bg-white/90 p-4 shadow-2xl backdrop-blur-xl dark:bg-slate-900/90 sm:p-6" onClick={(event) => event.stopPropagation()}>
              <button type="button" aria-label="Close project gallery" onClick={() => setModalProject(null)} className="absolute right-4 top-4 rounded-full border border-slate-300 bg-white p-2 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <X className="h-5 w-5" />
              </button>
              <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <img src={modalProject.images[currentImageIndex]} alt={modalProject.title} className="h-[320px] w-full rounded-[24px] object-cover sm:h-[420px]" />
                  {modalProject.images.length > 1 ? (
                    <div className="mt-4 flex items-center justify-between">
                      <button type="button" onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? modalProject.images.length - 1 : prev - 1))} className="rounded-full border border-slate-300 px-3 py-2 text-sm dark:border-slate-700">Previous</button>
                      <div className="flex gap-2">
                        {modalProject.images.map((_, index) => (
                          <button key={`${modalProject.title}-${index}`} type="button" aria-label={`Show image ${index + 1}`} onClick={() => setCurrentImageIndex(index)} className={`h-2.5 w-2.5 rounded-full ${currentImageIndex === index ? "bg-cyan-500" : "bg-slate-300 dark:bg-slate-700"}`} />
                        ))}
                      </div>
                      <button type="button" onClick={() => setCurrentImageIndex((prev) => (prev === modalProject.images.length - 1 ? 0 : prev + 1))} className="rounded-full border border-slate-300 px-3 py-2 text-sm dark:border-slate-700">Next</button>
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">Case Study</p>
                    <h3 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">{modalProject.title}</h3>
                    <p className="mt-4 text-sm leading-8 text-slate-600 dark:text-slate-300">{modalProject.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {modalProject.technologies.map((tech) => (
                        <span key={tech} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={modalProject.livelink} target="_blank" rel="noreferrer" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900">Live Demo</a>
                    <a href={modalProject.repolink} target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition dark:border-slate-700 dark:text-slate-200">GitHub</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
