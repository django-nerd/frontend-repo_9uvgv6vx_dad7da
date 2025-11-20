function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-tr from-fuchsia-500/20 via-sky-400/10 to-indigo-500/20 p-10 backdrop-blur">
          <div className="max-w-3xl">
            <h3 className="text-3xl sm:text-4xl font-semibold text-white">Ready to get started?</h3>
            <p className="mt-3 text-slate-300">Create your account and publish your first listing in minutes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="px-5 py-3 rounded-xl bg-white text-black font-medium hover:bg-slate-200 transition-colors">Create Account</a>
              <a href="#" className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors">Talk to Sales</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
