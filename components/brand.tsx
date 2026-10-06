import {Zap} from "lucide-react";

export function BrandMark({compact=false}: {compact?: boolean}) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid size-9 place-items-center rounded-xl bg-[#b7ff4a] text-[#07100d] shadow-[0_0_28px_rgba(183,255,74,.16)]">
        <Zap size={17} fill="currentColor" strokeWidth={2.5}/>
      </span>
      {!compact && <span className="text-base font-black tracking-[-.03em] text-white">FUELIFY</span>}
    </div>
  );
}
