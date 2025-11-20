import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-slate-200">Modern rentals, simplified</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            LipaBoma — Manage, list, and pay rent in style
          </h1>
          <p className="mt-5 text-slate-300 text-lg">
            A sleek platform for property owners and tenants with immersive visuals, secure payments, and effortless management.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="px-5 py-3 rounded-xl bg-white text-black font-medium hover:bg-slate-200 transition-colors">Get Started</a>
            <a href="#features" className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors">Explore Features</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
