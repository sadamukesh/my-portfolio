import { motion } from 'framer-motion'
import { Linkedin, Mail, Send } from 'lucide-react'
import SectionShell from './SectionShell'

export default function Contact() {
  return (
    <SectionShell id="contact" eyebrow="Contact" title="Let’s build something great">
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/5 light:border-slate-200 light:bg-white/70"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-sm font-semibold text-white dark:text-white light:text-slate-900">Reach me</div>
          <div className="mt-4 grid gap-3">
            <a
              href="mailto:techmukeshmehta@gmail.com"
              className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/70 transition hover:bg-white/5 dark:border-white/10 dark:bg-black/20 dark:text-white/70 light:border-slate-200 light:bg-white/60 light:text-slate-700"
            >
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                techmukeshmehta@gmail.com
              </span>
              <span className="text-xs text-white/60 light:text-slate-600">Email</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mukesh-mehta-2b84292a3/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/70 transition hover:bg-white/5 dark:border-white/10 dark:bg-black/20 dark:text-white/70 light:border-slate-200 light:bg-white/60 light:text-slate-700"
            >
              <span className="inline-flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
              </span>
              <span className="text-xs text-white/60 light:text-slate-600">Social</span>
            </a>
          </div>

          <div className="mt-5 text-sm leading-relaxed text-white/60 dark:text-white/60 light:text-slate-600">
            This is a UI-only contact form (no backend). If you want, I can wire it to EmailJS, Formspree, or a custom API.
          </div>
        </motion.div>

        <motion.form
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/5 light:border-slate-200 light:bg-white/70"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="text-sm font-semibold text-white dark:text-white light:text-slate-900">Send a message</div>

          <div className="mt-4 grid gap-3">
            <label className="grid gap-2">
              <span className="text-xs font-semibold tracking-wide text-white/60 light:text-slate-600">Name</span>
              <input
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/80 outline-none ring-0 transition focus:border-sky-400/50 dark:border-white/10 dark:bg-black/20 light:border-slate-200 light:bg-white/60 light:text-slate-900"
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-xs font-semibold tracking-wide text-white/60 light:text-slate-600">Email</span>
              <input
                type="email"
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/80 outline-none ring-0 transition focus:border-sky-400/50 dark:border-white/10 dark:bg-black/20 light:border-slate-200 light:bg-white/60 light:text-slate-900"
                placeholder="you@example.com"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-xs font-semibold tracking-wide text-white/60 light:text-slate-600">Message</span>
              <textarea
                rows={5}
                className="resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/80 outline-none ring-0 transition focus:border-sky-400/50 dark:border-white/10 dark:bg-black/20 light:border-slate-200 light:bg-white/60 light:text-slate-900"
                placeholder="Message..."
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-sky-400 px-4 py-3 text-sm font-semibold text-white shadow-neon transition hover:brightness-110"
          >
            Send
            <Send className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </SectionShell>
  )
}
