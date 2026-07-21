import { motion } from "framer-motion";

const GlassCard = ({ children, className = "", hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.01, transition: { duration: 0.2 } } : undefined}
      className={`rounded-[28px] border border-white/60 bg-white/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
