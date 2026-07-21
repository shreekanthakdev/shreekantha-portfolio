import { motion } from "framer-motion";
import { Award, Download } from "lucide-react";
import GlassCard from "../components/GlassCard";

const Resume = () => {
  const resumePDF = "/resume/Shreekantha_K_MERN.pdf";
  const resumePreview = "/resume/Shreekantha_K_MERN.jpg";

  return (
    <section className="py-16 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Resume</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">My professional profile</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">A concise snapshot of my Frontend and MERN development experience, certifications, and strengths.</p>
      </motion.div>

      <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-8 lg:flex-row">
        <GlassCard className="flex-1">
          <a href={resumePDF} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-[24px]" title="Open full resume PDF in a new tab">
            <img src={resumePreview} alt="Resume preview" className="h-auto w-full rounded-[24px] object-contain" />
          </a>
          <a href={resumePDF} target="_blank" rel="noreferrer" download="Shreekantha_Resume" className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900">
            <Download className="h-4 w-4" /> Download PDF
          </a>
        </GlassCard>

        <div className="flex-1 space-y-5">
          <GlassCard>
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-cyan-600" />
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Certifications</h2>
            </div>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">Issued by Oracle — May 21, 2025</p>
                <a href="/eCertificate.pdf" target="_blank" className="mt-2 inline-flex text-sm font-medium text-cyan-600 hover:text-cyan-700">View certificate</a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">MERN Stack programming</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">Issued by Oracle — March 2024</p>
                <a href="/MERN Stack.pdf" target="_blank" className="mt-2 inline-flex text-sm font-medium text-cyan-600 hover:text-cyan-700">View certificate</a>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Resume;
