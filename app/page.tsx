export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_10%_10%,#facc15_0%,transparent_24%),radial-gradient(circle_at_90%_20%,#5eead4_0%,transparent_26%),linear-gradient(160deg,#f8fafc_0%,#e2e8f0_50%,#dbeafe_100%)] text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="rounded-2xl border border-slate-200/70 bg-white/70 px-5 py-4 shadow-sm backdrop-blur sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-slate-900 text-sm font-bold text-white">
                EM
              </div>
              <div>
                <p className="text-sm font-semibold">ExpenseFlow</p>
                <p className="text-xs text-slate-500">Business Expense Management</p>
              </div>
            </div>
            <button className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
              Request Demo
            </button>
          </div>
        </header>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-slate-200/70 bg-slate-950 p-8 text-slate-100 shadow-2xl sm:p-10 lg:p-12">
            <p className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
              Finance Operations
            </p>
            <h1 className="mt-5 max-w-[14ch] text-4xl font-bold leading-[0.95] sm:text-5xl lg:text-6xl">
              Control business spend in real time.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300">
              Automate receipt capture, approval routing, reimbursement, and policy
              checks across every team from a single platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                Start Free Trial
              </button>
              <button className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                Watch Product Tour
              </button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-cyan-200">72%</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-300">
                  Faster approvals
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-cyan-200">3.2x</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-300">
                  Finance productivity
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-cyan-200">99.8%</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-300">
                  Policy compliance
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-xl backdrop-blur sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Live Overview
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900">
              Expense dashboard your CFO will trust
            </h2>

            <div className="mt-6 space-y-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  This month spend
                </p>
                <p className="mt-2 text-3xl font-bold">$184,920</p>
                <p className="mt-1 text-sm text-emerald-700">-12.4% vs last month</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Pending
                  </p>
                  <p className="mt-1 text-2xl font-bold">24</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Approved today
                  </p>
                  <p className="mt-1 text-2xl font-bold">41</p>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200/70 bg-white/75 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Capture</p>
            <h3 className="mt-3 text-xl font-semibold">Smart Receipt Scanning</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Auto-extract vendor, tax, currency, and category from paper and digital
              receipts.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200/70 bg-white/75 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Control</p>
            <h3 className="mt-3 text-xl font-semibold">Policy Enforcement</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Flag out-of-policy claims instantly and route exceptions to the right
              approver.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200/70 bg-white/75 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Close</p>
            <h3 className="mt-3 text-xl font-semibold">Accounting Sync</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Export clean, categorized expense data directly into your ERP and general
              ledger.
            </p>
          </article>
        </section>

        <section className="mt-6 rounded-3xl border border-slate-200/70 bg-gradient-to-r from-slate-900 to-cyan-900 p-8 text-white shadow-xl sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
            Ready To Deploy
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
            Launch modern expense management for every business unit.
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              Book a Consultation
            </button>
            <button className="rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
              Download Brochure
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
