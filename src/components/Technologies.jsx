import { motion } from "framer-motion";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import SectionHeading from "./SectionHeading";
import GlassCard from "./GlassCard";

const categories = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: RiReactjsLine, accent: "text-cyan-500" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, accent: "text-sky-500" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, accent: "text-green-600" },
      { name: "Express.js", icon: SiExpress, accent: "text-emerald-600" },
      { name: "MongoDB", icon: SiMongodb, accent: "text-green-500" },
    ],
  },
  {
    title: "Collaboration",
    items: [{ name: "GitHub", icon: FaGithub, accent: "text-slate-900 dark:text-white" }],
  },
];

const Technologies = () => {
  return (
    <section className="py-16 sm:py-20" id="skills">
      <SectionHeading eyebrow="Skills" title="Capabilities that support fast, clean delivery" subtitle="My stack focuses on React, Node, and modern tooling so I can move from design concepts to production-ready features with confidence." />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {categories.map((category, index) => (
          <motion.div key={category.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
            <GlassCard className="h-full">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{category.title}</h3>
              <div className="mt-6 space-y-3">
                {category.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.name} className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 transition hover:-translate-y-1 hover:border-cyan-500/30 dark:border-slate-700/70 dark:bg-slate-800/70">
                      <div className="flex items-center gap-3">
                        <Icon className={`h-5 w-5 ${item.accent}`} />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{item.name}</span>
                      </div>
                      <span className="text-xs uppercase tracking-[0.24em] text-slate-500">Core</span>
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
