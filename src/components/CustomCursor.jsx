import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onMove = (e) => {
      setVisible(true)
      setPos({ x: e.clientX, y: e.clientY })
    }
    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[120] hidden md:block">
      <div
        className="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 backdrop-blur-md transition-opacity duration-300 dark:bg-white/5 light:bg-slate-900/5"
        style={{ left: pos.x, top: pos.y, opacity: visible ? 1 : 0 }}
      />
      <div
        className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-500 to-sky-400 shadow-neon transition-opacity duration-300"
        style={{ left: pos.x, top: pos.y, opacity: visible ? 1 : 0 }}
      />
    </div>
  )
}
