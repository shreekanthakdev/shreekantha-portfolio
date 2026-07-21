import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";

const stats = [
  { value: "3+", label: "MERN projects shipped" },
  { value: "100%", label: "responsive UI focus" },
  { value: "10+", label: "modern tools practiced" },
  { value: "24/7", label: "iteration mindset" },
];

const StatsSection = () => {
  return (
    <section className="py-8 sm:py-10">
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div key={item.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
            <GlassCard className="text-center">
              <p className="text-3xl font-semibold text-slate-900 dark:text-white">{item.value}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.label}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
