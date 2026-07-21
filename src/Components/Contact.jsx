import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { CONTACT } from "../constants";
import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({ name: "", email: "", project: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_placeholder",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_placeholder",
        {
          from_name: formData.name,
          from_email: formData.email,
          project_type: formData.project,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "public_placeholder"
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", project: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section className="py-16 sm:py-20" id="contact">
      <SectionHeading eyebrow="Contact" title="Let’s build something exceptional together" subtitle="I’m open to new opportunities, product collaborations, and ambitious frontend challenges." />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <GlassCard className="space-y-5">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-cyan-500/10 p-2 text-cyan-600 dark:text-cyan-300"><MapPin className="h-5 w-5" /></div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Location</p>
                <p className="mt-1 text-slate-700 dark:text-slate-200">{CONTACT.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-cyan-500/10 p-2 text-cyan-600 dark:text-cyan-300"><Phone className="h-5 w-5" /></div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Phone</p>
                <a href={`tel:${CONTACT.phoneNo}`} className="mt-1 text-slate-700 transition hover:text-cyan-600 dark:text-slate-200">{CONTACT.phoneNo}</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-cyan-500/10 p-2 text-cyan-600 dark:text-cyan-300"><Send className="h-5 w-5" /></div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Email</p>
                <a href={`mailto:${CONTACT.email}`} className="mt-1 text-slate-700 transition hover:text-cyan-600 dark:text-slate-200">{CONTACT.email}</a>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <GlassCard>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                  <span className="mb-2 block">Name</span>
                  <input required name="name" aria-label="Name" value={formData.name} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 bg-white/80 px-4 py-3 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-900/70" />
                </label>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                  <span className="mb-2 block">Email</span>
                  <input required type="email" name="email" aria-label="Email" value={formData.email} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 bg-white/80 px-4 py-3 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-900/70" />
                </label>
              </div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                <span className="mb-2 block">Project type</span>
                <input name="project" aria-label="Project type" value={formData.project} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 bg-white/80 px-4 py-3 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-900/70" />
              </label>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                <span className="mb-2 block">Message</span>
                <textarea required name="message" rows="5" aria-label="Message" value={formData.message} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 bg-white/80 px-4 py-3 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-900/70" />
              </label>
              <button type="submit" disabled={status === "sending"} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-wait disabled:opacity-70 dark:bg-white dark:text-slate-900">
                {status === "sending" ? "Sending..." : "Send message"} <Send className="h-4 w-4" />
              </button>
              {status === "success" ? (
                <p className="flex items-center gap-2 text-sm font-medium text-emerald-600"><CheckCircle2 className="h-4 w-4" /> Thanks! Your message is on its way.</p>
              ) : null}
              {status === "error" ? <p className="text-sm font-medium text-rose-600">Something went wrong. Please email me directly instead.</p> : null}
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
