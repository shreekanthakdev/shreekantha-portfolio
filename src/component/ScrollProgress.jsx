import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrollProgress } from "../hooks/useScrollProgress";

const ScrollProgress = () => {
  const { progress, showBackToTop, scrollToTop } = useScrollProgress();

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500"
          animate={{ scaleX: progress }}
          style={{ transformOrigin: "left" }}
        />
      </div>

      {showBackToTop ? (
        <button
          type="button"
          aria-label="Back to top"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-slate-900 text-white shadow-[0_18px_50px_rgba(15,23,42,0.3)] transition hover:scale-105 dark:bg-white dark:text-slate-900"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      ) : null}
    </>
  );
};

export default ScrollProgress;
