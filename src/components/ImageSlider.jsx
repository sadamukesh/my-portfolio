import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ImageSlider({ images = [], alt = '', heightClass = 'h-56', objectFit = 'cover' }) {
  const safeImages = useMemo(() => (Array.isArray(images) ? images.filter(Boolean) : []), [images])
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    setIdx(0)
  }, [safeImages.length])

  const prev = () => setIdx((i) => (safeImages.length ? (i - 1 + safeImages.length) % safeImages.length : 0))
  const next = () => setIdx((i) => (safeImages.length ? (i + 1) % safeImages.length : 0))

  if (!safeImages.length) {
    return (
      <div className={`flex ${heightClass} w-full items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-sm text-white/60 dark:border-white/10 dark:bg-black/20 dark:text-white/60 light:border-slate-200 light:bg-white/60 light:text-slate-600`}>
        No screenshots
      </div>
    )
  }

  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <div className={`relative ${heightClass} overflow-hidden rounded-2xl border border-white/10 bg-black/30 dark:border-white/10 dark:bg-black/30 light:border-slate-200 light:bg-white`}>
        <AnimatePresence mode="wait">
          <motion.img
            key={safeImages[idx]}
            src={safeImages[idx]}
            alt={alt}
            className={`h-full w-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'}`}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.28 }}
            loading="lazy"
          />
        </AnimatePresence>
      </div>

      {safeImages.length > 1 ? (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-2 text-white backdrop-blur-xl transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-sky-400/40 dark:border-white/10 dark:bg-white/10 light:border-slate-200 light:bg-white/80 light:text-slate-900"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-2 text-white backdrop-blur-xl transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-sky-400/40 dark:border-white/10 dark:bg-white/10 light:border-slate-200 light:bg-white/80 light:text-slate-900"
            aria-label="Next screenshot"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="mt-3 flex items-center justify-center gap-1.5">
            {safeImages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIdx(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition focus:outline-none focus:ring-2 focus:ring-sky-400/30 ${i === idx ? 'w-8 bg-gradient-to-r from-violet-500 to-sky-400' : 'w-3 bg-white/20 light:bg-slate-300'}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}
