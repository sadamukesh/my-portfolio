import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton({ phoneE164 = '+918218877845', message = 'Hi Mukesh, I want to discuss a project.' }) {
  const href = `https://wa.me/${phoneE164.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[70] inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-glass backdrop-blur-xl transition hover:bg-white/15 dark:border-white/10 dark:bg-white/10 dark:text-white light:border-slate-200 light:bg-white/80 light:text-slate-900"
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400/90 to-teal-400/90 text-black shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_0_45px_rgba(16,185,129,0.22)]">
        <MessageCircle className="h-5 w-5" />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </motion.a>
  )
}
