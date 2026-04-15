import { motion } from 'framer-motion'
import { Code2, Gauge, Sparkles } from 'lucide-react'
import SectionShell from './SectionShell'

export default function About() {
  return (
    <SectionShell id="about" eyebrow="About" title="Building modern frontend experiences">
      <div className="grid gap-6 md:grid-cols-3">
        <motion.div
          className="md:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/5 light:border-slate-200 light:bg-white/70"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm leading-relaxed text-white/70 dark:text-white/70 light:text-slate-700">
           I’m Mukesh Mehta — a Frontend Developer with 3+ years of experience building clean, responsive, and high-performance web interfaces. I specialize in transforming design concepts into polished, user-friendly UI with strong attention to detail, accessibility, and smooth interactions.

          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/70 dark:text-white/70 light:text-slate-700">
           My core focus is modern frontend development using React, Tailwind CSS, and JavaScript, along with WordPress development including custom themes, reusable components, and high-converting landing pages.
              </p>
           <p className=" mt-4 text-sm leading-relaxed text-white/70 dark:text-white/70 light:text-slate-700">
          I actively work on website performance optimization by improving Core Web Vitals (LCP, CLS, FID), optimizing images, reducing unused CSS/JS, implementing lazy loading, and ensuring fast load times across devices. I also follow on-page SEO best practices such as semantic HTML structure, proper heading hierarchy, meta optimization, schema integration, and clean URL structures to improve search visibility.
             </p>
          <p className="mt-4 text-sm leading-relaxed text-white/70 dark:text-white/70 light:text-slate-700">
          I believe in building scalable and maintainable UI systems, focusing on code quality, reusability, and performance. My goal is to deliver websites that are not just visually appealing, but also fast, SEO-friendly, and conversion-focused.
             </p>
        </motion.div>

        <div className="grid gap-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/5 light:border-slate-200 light:bg-white/70">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-gradient-to-r from-violet-500/25 to-sky-400/20 p-3">
                <Code2 className="h-5 w-5 text-white dark:text-white light:text-slate-900" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white dark:text-white light:text-slate-900">Frontend + React</div>
                <div className="text-xs text-white/60 light:text-slate-600">Component systems, responsive UI</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/5 light:border-slate-200 light:bg-white/70">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-gradient-to-r from-violet-500/25 to-sky-400/20 p-3">
                <Gauge className="h-5 w-5 text-white dark:text-white light:text-slate-900" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white dark:text-white light:text-slate-900">Performance-first</div>
                <div className="text-xs text-white/60 light:text-slate-600">Fast loading and smooth motion</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/5 light:border-slate-200 light:bg-white/70">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-gradient-to-r from-violet-500/25 to-sky-400/20 p-3">
                <Sparkles className="h-5 w-5 text-white dark:text-white light:text-slate-900" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white dark:text-white light:text-slate-900">WordPress + PHP</div>
                <div className="text-xs text-white/60 light:text-slate-600">Themes, custom blocks, SEO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
