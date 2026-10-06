export default function Employee() {
  return (
    <main className="min-h-screen bg-[#07100d] p-6 text-white">
      <div className="mx-auto max-w-lg pt-12">
        <div className="eyebrow">Staff mode</div>
        <h1 className="mt-4 text-4xl font-black">Ready for the next shift.</h1>
        <div className="mt-8 grid gap-3">
          <div className="feature-card"><strong>Shift status</strong><p>Open • Pump 02 • Evening</p></div>
          <div className="grid grid-cols-2 gap-3">
            <button className="primary-button justify-center">New sale</button>
            <button className="secondary-button justify-center">Redeem</button>
          </div>
          <div className="feature-card"><strong>Fast actions</strong><p>Verify receipt • Find customer • Check pump status</p></div>
        </div>
      </div>
    </main>
  );
}
