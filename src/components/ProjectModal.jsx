import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'
import ImageSlider from './ImageSlider'

export default function ProjectModal({ open, onClose, project }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm dark:bg-black/70 light:bg-slate-900/30"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            className="cursor-auto relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.65)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/10 light:border-slate-200 light:bg-white"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-h-[85vh] overflow-y-auto">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5 dark:border-white/10 light:border-slate-200">
                <div>
                  <div className="text-lg font-bold text-white dark:text-white light:text-slate-900">{project?.title}</div>
                  <div className="mt-1 text-sm text-white/70 dark:text-white/70 light:text-slate-600">{project?.description}</div>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-white/10 bg-white/10 p-2 text-white backdrop-blur-xl transition hover:bg-white/15 dark:border-white/10 dark:bg-white/10 light:border-slate-200 light:bg-white light:text-slate-900"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="px-6 pt-6">
                <ImageSlider
                  images={project?.screenshots || []}
                  alt={project?.title || 'Project screenshot'}
                  heightClass="h-64 sm:h-72 md:h-[420px]"
                  objectFit="contain"
                />
              </div>

              <div className="grid gap-6 px-6 py-6 md:grid-cols-2">
                <div>
                  <div className="text-sm font-semibold text-white dark:text-white light:text-slate-900">Tech stack</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(project?.tech || []).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-gradient-to-r from-violet-500/15 to-sky-400/10 px-3 py-1 text-xs font-semibold text-white/70 dark:border-white/10 dark:text-white/70 light:border-slate-200 light:text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {project?.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-4 py-2 text-xs font-semibold text-white shadow-neon transition hover:brightness-110"
                      >
                        Live Demo
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                    
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-white dark:text-white light:text-slate-900">What I did</div>
                  <div className="mt-3 grid gap-3">
                    {(project?.highlights || []).map((h) => (
                      <div
                        key={h}
                        className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/70 dark:border-white/10 dark:bg-black/20 dark:text-white/70 light:border-slate-200 light:bg-slate-50 light:text-slate-700"
                      >
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
