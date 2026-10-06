export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#07100d] text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="grid size-12 place-items-center rounded-2xl bg-[#b7ff4a] text-[#07100d] shadow-[0_0_50px_rgba(183,255,74,.18)] animate-pulse">✦</div>
        <p className="text-sm font-medium text-white/50">Loading FUELIFY…</p>
      </div>
    </main>
  );
}
