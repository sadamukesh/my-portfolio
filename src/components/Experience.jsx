import { motion } from 'framer-motion'
import { Briefcase, CheckCircle2 } from 'lucide-react'
import SectionShell from './SectionShell'

const highlights = [
  'Built responsive UI components and landing pages with modern CSS and Tailwind.',
  'Developed React interfaces with reusable component patterns and clean state management.',
  'Worked on WordPress themes, custom sections, and PHP-based customizations.',
  'Improved performance and SEO via lightweight layouts, image optimization, and best practices.',
]

export default function Experience() {
  return (
    <SectionShell id="experience" eyebrow="Experience" title="3+ years of frontend + WordPress development">
      <div className="grid gap-6 md:grid-cols-3">
        <motion.div
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/5 light:border-slate-200 light:bg-white/70"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-gradient-to-r from-violet-500/25 to-sky-400/20 p-3">
              <Briefcase className="h-5 w-5 text-white dark:text-white light:text-slate-900" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white dark:text-white light:text-slate-900">Frontend Developer</div>
              <div className="text-xs text-white/60 light:text-slate-600">3+ years experience</div>
            </div>
          </div>

          <div className="mt-4 text-sm leading-relaxed text-white/70 dark:text-white/70 light:text-slate-700">
            I’ve delivered modern websites and interfaces with a strong focus on responsiveness, performance, and clean design.
            Experienced in both React UI and WordPress builds.
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/5 light:border-slate-200 light:bg-white/70"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        >
          <div className="text-sm font-semibold text-white dark:text-white light:text-slate-900">Work highlights</div>
          <div className="mt-4 grid gap-3">
            {highlights.map((h) => (
              <div key={h} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 dark:border-white/10 dark:bg-black/20 light:border-slate-200 light:bg-white/60">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-sky-300 dark:text-sky-300 light:text-sky-600" />
                <div className="text-sm text-white/70 dark:text-white/70 light:text-slate-700">{h}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionShell>
  )
}
