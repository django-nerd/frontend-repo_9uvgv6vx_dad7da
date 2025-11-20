import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-sky-400 to-indigo-500 animate-pulse" />
              <span className="text-white text-lg font-semibold tracking-wide">LipaBoma</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <button onClick={() => scrollTo('features')} className="text-slate-300 hover:text-white transition-colors">Features</button>
              <button onClick={() => scrollTo('properties')} className="text-slate-300 hover:text-white transition-colors">Listings</button>
              <button onClick={() => scrollTo('how')} className="text-slate-300 hover:text-white transition-colors">How it works</button>
              <button onClick={() => scrollTo('cta')} className="px-4 py-2 rounded-xl bg-white text-black font-medium hover:bg-slate-200 transition-colors">Get Started</button>
            </nav>
            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
          {open && (
            <div className="md:hidden px-6 pb-6">
              <div className="flex flex-col gap-3">
                <button onClick={() => scrollTo('features')} className="text-left text-slate-200 py-2">Features</button>
                <button onClick={() => scrollTo('properties')} className="text-left text-slate-200 py-2">Listings</button>
                <button onClick={() => scrollTo('how')} className="text-left text-slate-200 py-2">How it works</button>
                <button onClick={() => scrollTo('cta')} className="text-left mt-1 px-4 py-2 rounded-xl bg-white text-black font-medium">Get Started</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
