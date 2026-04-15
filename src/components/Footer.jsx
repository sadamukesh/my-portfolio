export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pb-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-sm text-white/60 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-white/60 light:border-slate-200 light:bg-white/70 light:text-slate-600">
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Mukesh Mehta. All rights reserved.</div>
          <div className="text-white/40 light:text-slate-500">Built with React + Tailwind</div>
        </div>
      </div>
    </footer>
  )
}
