import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun, ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 to-transparent dark:from-black/30 light:from-white/40" />

      <nav className="pointer-events-auto mx-auto w-full max-w-6xl px-4 py-3">
        <div className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2 shadow-glass backdrop-blur-2xl dark:border-white/10 dark:bg-white/5 light:border-slate-200 light:bg-white/75">
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.22),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.18),transparent_45%)]" />

          <a
            href="#top"
            className="relative group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur-xl transition hover:bg-white/5 dark:text-white light:border-slate-200 light:bg-white light:text-slate-900"
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-500 to-sky-400 shadow-neon" />
            Mukesh
            <ArrowUpRight className="h-4 w-4 opacity-60 transition group-hover:opacity-100" />
          </a>

          <div className="relative hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white light:text-slate-700 light:hover:bg-slate-200/70 light:hover:text-slate-900"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="relative flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={onToggleTheme}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white backdrop-blur-xl transition hover:bg-white/15 dark:text-white light:border-slate-200 light:bg-white light:text-slate-900"
              aria-label="Toggle theme"
              type="button"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </motion.button>

            <a
              href="#projects"
              className="hidden rounded-xl bg-gradient-to-r from-violet-500/90 to-sky-400/90 px-4 py-2 text-sm font-semibold text-white shadow-neon transition hover:brightness-110 md:inline"
            >
              View Work
            </a>

            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 p-2 text-white backdrop-blur-xl transition hover:bg-white/15 md:hidden dark:border-white/10 dark:bg-white/10 light:border-slate-200 light:bg-white light:text-slate-900"
              aria-label="Open menu"
              type="button"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-glass backdrop-blur-2xl dark:border-white/10 dark:bg-white/5 light:border-slate-200 light:bg-white/80 md:hidden"
            >
              <div className="grid gap-1 p-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10 dark:text-white/80 light:text-slate-800"
                  >
                    {l.label}
                  </a>
                ))}

                <a
                  href="#projects"
                  onClick={() => setOpen(false)}
                  className="mt-1 rounded-xl bg-gradient-to-r from-violet-500/90 to-sky-400/90 px-4 py-3 text-sm font-semibold text-white shadow-neon transition hover:brightness-110"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-glass backdrop-blur-xl transition hover:bg-white/15 light:border-slate-200 light:bg-white light:text-slate-900"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  )
}
