import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import BackgroundGlow from './components/BackgroundGlow'
import WhatsAppButton from './components/WhatsAppButton'

const STORAGE_KEY = 'mm_portfolio_theme'

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'dark' || saved === 'light') return saved
    return 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.classList.toggle('light', theme === 'light')
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  const page = useMemo(
    () => (
      <motion.div
        key={theme}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-screen bg-base-950 text-white dark:bg-base-950 dark:text-white light:bg-slate-50 light:text-slate-900"
      >
        <BackgroundGlow />
        <CustomCursor />

        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <WhatsAppButton phoneE164={'+91 8218877845'} message={'Hi Mukesh, I saw your portfolio and want to connect.'} />

        <main className="relative">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </motion.div>
    ),
    [theme]
  )

  return <AnimatePresence mode="wait">{page}</AnimatePresence>
}
