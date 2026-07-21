import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import GlassCard from "./GlassCard";

const timeline = [
  {
    year: "2023",
    title: "Foundation in web development",
    description: "Built my first React and JavaScript projects while strengthening core UI and problem-solving skills.",
    icon: BookOpen,
  },
  {
    year: "2024",
    title: "MERN stack depth",
    description: "Expanded into Node.js, Express, MongoDB, and REST APIs through full-stack project work and practical implementation.",
    icon: GraduationCap,
  },
  {
    year: "2025",
    title: "Design-forward growth",
    description: "Focused on polished interfaces, responsive systems, accessibility, and better developer experience in modern frontend work.",
    icon: Sparkles,
  },
];

const Journey = () => {
  return (
    <section className="py-16 sm:py-20">
      <SectionHeading eyebrow="Journey" title="A steady path from learning to building" subtitle="My experience has grown through continuous practice, real features, and a strong focus on user value." />

      <div className="mt-12 relative">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent md:block" />
        <div className="space-y-6">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.year} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative md:pl-12">
                <div className="absolute left-0 top-4 hidden h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-white text-cyan-600 shadow-lg dark:bg-slate-900 md:flex">
                  <Icon className="h-5 w-5" />
                </div>
                <GlassCard className="md:ml-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">{item.year}</span>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Journey;
