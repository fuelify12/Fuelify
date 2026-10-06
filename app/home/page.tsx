import {redirect} from "next/navigation";
import Link from "next/link";
import {Gift,History,Home as HomeIcon,ScanLine,UserRound,Wallet} from "lucide-react";
import {createClient} from "@/lib/supabase/server";
import {BrandMark} from "@/components/brand";

export const dynamic = "force-dynamic";

export default async function CustomerHome() {
  const supabase = await createClient();
  const {data:{user}} = await supabase.auth.getUser();
  if (!user) redirect("/login");
  const {data:profile} = await supabase.from("profiles").select("full_name").eq("id", user.id).maybeSingle();
  const name = profile?.full_name || user.email?.split("@")[0] || "there";
  const {data:account} = await supabase.from("points_accounts").select("balance,lifetime_earned").eq("user_id", user.id).order("updated_at",{ascending:false}).limit(1).maybeSingle();
  const points = account?.balance ?? 0;

  return <main className="min-h-screen bg-[#07100d] text-white pb-24">
    <div className="mx-auto max-w-5xl px-5 pt-7">
      <div className="flex items-center justify-between"><div><span className="text-xs text-white/40">Good to see you</span><h1 className="mt-1 text-2xl font-black">Hi, {name} 👋</h1></div><BrandMark compact/></div>
      <section className="mt-7 rounded-[28px] p-6 bg-gradient-to-br from-[#c7ff63] to-[#65e6b7] text-[#07100d]">
        <span className="text-[10px] font-black uppercase tracking-[.18em] opacity-55">FUELIFY WALLET</span>
        <div className="mt-3 flex items-end justify-between"><strong className="text-5xl tracking-tight">{points.toLocaleString("en-IN")}</strong><span className="pb-1 font-bold">points</span></div>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-black/10"><div className="h-full rounded-full bg-[#07100d]" style={{width: `${Math.min(100, (points % 1000)/10)}%`}}/></div>
        <div className="mt-2 flex justify-between text-[11px] font-bold opacity-60"><span>Live wallet balance</span><span>{account?.lifetime_earned ?? 0} lifetime earned</span></div>
      </section>
      <Link href="/scan" className="mt-5 flex w-full items-center justify-center gap-3 rounded-[22px] bg-white py-5 text-[#07100d] font-black shadow-2xl"><ScanLine/> SCAN PARCHI</Link>
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[.04] p-5"><h2 className="font-bold">Your account</h2><p className="mt-2 text-sm text-white/45">{user.email}</p><p className="mt-1 text-xs text-white/25">Your verified transactions and rewards will appear here.</p></div>
    </div>
    <nav className="fixed bottom-4 left-1/2 z-20 flex w-[calc(100%-28px)] max-w-lg -translate-x-1/2 items-center justify-around rounded-2xl border border-white/10 bg-[#0c1714]/90 p-3 backdrop-blur-xl">
      <Link href="/home" className="grid place-items-center gap-1 text-[#b7ff4a]"><HomeIcon/><small>Home</small></Link>
      <Link href="/history" className="grid place-items-center gap-1 text-white/40"><History/><small>History</small></Link>
      <Link href="/scan" className="grid h-14 w-14 -translate-y-4 place-items-center rounded-2xl bg-[#b7ff4a] text-[#07100d] shadow-xl"><ScanLine/></Link>
      <Link href="/rewards" className="grid place-items-center gap-1 text-white/40"><Gift/><small>Rewards</small></Link>
      <Link href="/profile" className="grid place-items-center gap-1 text-white/40"><UserRound/><small>Profile</small></Link>
    </nav>
  </main>;
}