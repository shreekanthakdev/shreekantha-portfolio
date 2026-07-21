import { motion } from "framer-motion";

const SectionHeading = ({ eyebrow, title, subtitle, align = "center" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={`mx-auto max-w-3xl ${align === "left" ? "text-left" : "text-center"}`}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
};

export default SectionHeading;
