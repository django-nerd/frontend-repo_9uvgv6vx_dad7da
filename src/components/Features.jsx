function Feature({ title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-all">
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_20%_0%,rgba(99,102,241,0.25),transparent),radial-gradient(600px_200px_at_80%_10%,rgba(236,72,153,0.25),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Everything you need to run rentals</h2>
          <p className="mt-3 text-slate-300">From listing to lease and payments — all in one place, with an elegant, futuristic UX.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature title="Smart Listings" desc="Create stunning property pages with photos, amenities, and availability." />
          <Feature title="Tenant Portal" desc="Applications, messaging, maintenance requests — streamlined and secure." />
          <Feature title="Lipa Payments" desc="Track invoices, collect rent, and automate reminders with receipts." />
          <Feature title="Analytics" desc="Occupancy, revenue, and trends presented clearly." />
          <Feature title="Team Roles" desc="Invite managers with permissions and audit trails." />
          <Feature title="Mobile Ready" desc="A fast, responsive experience on any device." />
        </div>
      </div>
    </section>
  )
}

export default Features
