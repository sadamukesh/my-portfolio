import { motion } from 'framer-motion'

export default function SectionShell({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-10">
          {eyebrow ? (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-widest text-white/70 shadow-glass backdrop-blur-xl dark:text-white/70 light:border-slate-200 light:bg-white/70 light:text-slate-700">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-500 to-sky-400" />
              {eyebrow}
            </div>
          ) : null}

          {title ? (
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl dark:text-white light:text-slate-900">
              {title}
            </h2>
          ) : null}
        </div>

        {children}
      </motion.div>
    </section>
  )
}
