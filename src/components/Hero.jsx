import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

function useTyping(text, speedMs = 45, startDelayMs = 250) {
  const [out, setOut] = useState('')

  useEffect(() => {
    let i = 0
    let timer1
    let timer2

    timer1 = setTimeout(() => {
      timer2 = setInterval(() => {
        i += 1
        setOut(text.slice(0, i))
        if (i >= text.length) clearInterval(timer2)
      }, speedMs)
    }, startDelayMs)

    return () => {
      clearTimeout(timer1)
      clearInterval(timer2)
    }
  }, [text, speedMs, startDelayMs])

  return out
}

export default function Hero() {
  const typing = useTyping('Mukesh Mehta')

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, idx) => ({
        id: idx,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 8 + Math.random() * 22,
        delay: Math.random() * 2,
        duration: 5 + Math.random() * 7,
      })),
    []
  )

  return (
    <section id="top" className="relative mx-auto w-full max-w-6xl px-4 pb-10 pt-10 sm:pb-16 sm:pt-16">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/5 light:border-slate-200 light:bg-white/70">
        <div aria-hidden className="absolute inset-0">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-gradient-to-r from-violet-500/35 to-sky-400/25 blur-xl"
              style={{ top: `${p.top}%`, left: `${p.left}%`, width: p.size, height: p.size }}
              animate={{ y: [0, -18, 0], opacity: [0.35, 0.7, 0.35] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
            />
          ))}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.35),transparent_55%),radial-gradient(circle_at_70%_30%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(217,70,239,0.18),transparent_55%)]" />
        </div>

        <div className="relative grid gap-10 p-7 sm:p-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold tracking-widest text-white/70 backdrop-blur dark:border-white/10 dark:text-white/70 light:border-slate-200 light:bg-white/60 light:text-slate-700">
              FRONTEND DEVELOPER
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl dark:text-white light:text-slate-900">
              <span className="bg-gradient-to-r from-violet-400 to-sky-300 bg-clip-text text-transparent">
                {typing}
              </span>
              <span className="ml-1 inline-block w-[10px] animate-pulse rounded-sm bg-white/60 align-middle dark:bg-white/60 light:bg-slate-900/60">&nbsp;</span>
            </h1>

            <p className="mt-3 text-base text-white/70 sm:text-lg dark:text-white/70 light:text-slate-600">
              Frontend Developer with 3+ years experience
            </p>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base dark:text-white/70 light:text-slate-600">
              I build fast, responsive and modern web experiences
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-5 py-3 text-sm font-semibold text-white shadow-neon transition hover:brightness-110"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white shadow-glass backdrop-blur-xl transition hover:bg-white/10 dark:text-white light:border-slate-200 light:bg-white/70 light:text-slate-900"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3 text-white/70 dark:text-white/70 light:text-slate-600">
              <a className="rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-xl transition hover:bg-white/10 light:border-slate-200 light:bg-white/70" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
              <a className="rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-xl transition hover:bg-white/10 light:border-slate-200 light:bg-white/70" href="https://www.linkedin.com/in/mukesh-mehta-2b84292a3/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a className="rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-xl transition hover:bg-white/10 light:border-slate-200 light:bg-white/70" href="#contact" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/5 light:border-slate-200 light:bg-white/70"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white dark:text-white light:text-slate-900">Highlights</div>
                <div className="text-xs text-white/60 dark:text-white/60 light:text-slate-600">2023 → 2026</div>
              </div>

              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/70 dark:border-white/10 dark:bg-black/20 dark:text-white/70 light:border-slate-200 light:bg-white/60 light:text-slate-700">
                  <div className="font-semibold text-white dark:text-white light:text-slate-900">Frontend Engineering</div>
                  <div className="mt-1">React, Tailwind UI systems, performance-first builds</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/70 dark:border-white/10 dark:bg-black/20 dark:text-white/70 light:border-slate-200 light:bg-white/60 light:text-slate-700">
                  <div className="font-semibold text-white dark:text-white light:text-slate-900">WordPress + PHP</div>
                  <div className="mt-1">Themes, custom sections, landing pages, SEO-friendly builds</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/70 dark:border-white/10 dark:bg-black/20 dark:text-white/70 light:border-slate-200 light:bg-white/60 light:text-slate-700">
                  <div className="font-semibold text-white dark:text-white light:text-slate-900">UX Polish</div>
                  <div className="mt-1">Micro-interactions, motion, scroll animations, accessibility</div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-500/30 to-sky-400/30 px-3 py-1 text-xs font-semibold text-white/80 light:text-slate-800">
                  Available for opportunities
                </span>
                <span className="text-xs text-white/60 light:text-slate-600">Remote / On-site</span>
              </div>
            </motion.div>

            <div aria-hidden className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-violet-600/25 blur-2xl" />
            <div aria-hidden className="absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-sky-500/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
