export default function BackgroundGlow() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-600/30 blur-3xl dark:bg-violet-600/30 light:bg-violet-500/12" />
      <div className="absolute top-40 left-10 h-[420px] w-[420px] rounded-full bg-sky-500/20 blur-3xl dark:bg-sky-500/20 light:bg-sky-400/10" />
      <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-fuchsia-500/15 blur-3xl dark:bg-fuchsia-500/15 light:bg-fuchsia-400/8" />

      <div className="absolute inset-0 opacity-[0.12] dark:opacity-[0.12] light:opacity-[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.55),transparent_45%),radial-gradient(circle_at_75%_30%,rgba(56,189,248,0.45),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(217,70,239,0.35),transparent_55%)]" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 dark:from-black/40 dark:to-black/70 light:from-white/70 light:to-slate-100/90" />

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[length:200%_200%] bg-[linear-gradient(120deg,rgba(139,92,246,0.0),rgba(139,92,246,0.18),rgba(56,189,248,0.14),rgba(217,70,239,0.1),rgba(139,92,246,0.0))] animate-shimmer dark:opacity-100 light:opacity-40" />
      </div>
    </div>
  )
}
