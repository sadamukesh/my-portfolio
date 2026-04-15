import { motion } from 'framer-motion'
import {
  Braces,
  Code,
  FileCode2,
  LayoutPanelTop,
  Paintbrush,
  Wand2,
  Globe,
} from 'lucide-react'
import SectionShell from './SectionShell'

const skills = [
  { name: 'HTML', level: 92, icon: Code },
  { name: 'CSS', level: 88, icon: Paintbrush },
  { name: 'JavaScript', level: 86, icon: Braces },
  { name: 'React', level: 84, icon: LayoutPanelTop },
  { name: 'Tailwind', level: 82, icon: Wand2 },
  { name: 'PHP', level: 72, icon: FileCode2 },
  { name: 'WordPress', level: 80, icon: Globe },
]

export default function Skills() {
  return (
    <SectionShell id="skills" eyebrow="Skills" title="Tools I use to build UI">
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((s) => {
          const Icon = s.icon
          return (
            <motion.div
              key={s.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/5 light:border-slate-200 light:bg-white/70"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-gradient-to-r from-violet-500/25 to-sky-400/20 p-3">
                    <Icon className="h-5 w-5 text-white dark:text-white light:text-slate-900" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white dark:text-white light:text-slate-900">{s.name}</div>
                    <div className="text-xs text-white/60 light:text-slate-600">{s.level}%</div>
                  </div>
                </div>

                <div className="text-xs font-semibold text-white/60 light:text-slate-600">Proficiency</div>
              </div>

              <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-white/5 dark:bg-white/5 light:bg-slate-200">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-sky-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1 }}
                />
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/5 light:border-slate-200 light:bg-white/70">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-gradient-to-r from-violet-500/25 to-sky-400/20 p-3">
            <Code className="h-5 w-5 text-white dark:text-white light:text-slate-900" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white dark:text-white light:text-slate-900">Bonus</div>
            <div className="text-xs text-white/60 light:text-slate-600">UI polish, animations, SEO-friendly pages</div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
