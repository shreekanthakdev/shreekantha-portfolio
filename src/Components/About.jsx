import { motion } from "framer-motion";
import { Brain, Cpu, Rocket, Sparkles } from "lucide-react";
import Profile from "../assets/Profile.png";
import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";

const highPoints = [
  { title: "Product-minded", description: "I care about user flow, accessibility, and business impact as much as the codebase itself.", icon: Rocket },
  { title: "Fast learner", description: "I thrive in modern stacks and enjoy turning feedback into better UI and architecture decisions.", icon: Brain },
  { title: "Execution focused", description: "From design systems to deployment, I value clean delivery and thoughtful iteration.", icon: Cpu },
];

const About = () => {
  return (
    <section className="py-16 sm:py-20" id="about">
      <SectionHeading eyebrow="About" title="Building thoughtful interfaces and reliable systems" subtitle="I combine strong frontend craft with a solid MERN foundation to ship polished experiences that feel effortless to use." />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -24 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex justify-center lg:justify-start">
          <div className="relative">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-cyan-500/30 via-violet-500/20 to-fuchsia-500/30 blur-2xl" />
            <img src={Profile} alt="Shreekantha Kudlur" className="relative h-[320px] w-[280px] rounded-[32px] object-cover shadow-[0_30px_90px_rgba(15,23,42,0.2)] sm:h-[380px] sm:w-[320px]" />
          </div>
        </motion.div>

        <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 24 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
          <GlassCard>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              I&apos;m <span className="font-semibold text-slate-900 dark:text-white">Shreekantha Kudlur</span>, a MERN stack developer with a strong eye for detail and a passion for creating interfaces that feel premium, intuitive, and dependable. I enjoy translating product goals into thoughtful React experiences backed by clean APIs and scalable architecture.
            </p>
          </GlassCard>

          <div className="grid gap-4 md:grid-cols-3">
            {highPoints.map((item) => {
              const Icon = item.icon;
              return (
                <GlassCard key={item.title} className="space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                </GlassCard>
              );
            })}
          </div>

          <GlassCard className="flex items-start gap-3">
            <div className="rounded-full bg-cyan-500/10 p-2 text-cyan-600 dark:text-cyan-300">
              <Sparkles className="h-5 w-5" />
            </div>
            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
              My goal is to join teams that care about design quality, clean collaboration, and shipping meaningful experiences with measurable impact.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
