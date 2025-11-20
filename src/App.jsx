import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Properties from './components/Properties'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-200">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Features />
        <Properties />
        <section id="how" className="relative py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <span className="text-xs text-slate-300">Step 1</span>
                <h3 className="mt-2 text-white font-semibold">Create your account</h3>
                <p className="mt-2 text-sm text-slate-300">Join as an owner or tenant and set your profile in minutes.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <span className="text-xs text-slate-300">Step 2</span>
                <h3 className="mt-2 text-white font-semibold">List or discover</h3>
                <p className="mt-2 text-sm text-slate-300">Publish a property or apply to your next home with ease.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <span className="text-xs text-slate-300">Step 3</span>
                <h3 className="mt-2 text-white font-semibold">Manage and pay</h3>
                <p className="mt-2 text-sm text-slate-300">Track leases, handle issues, and make payments securely.</p>
              </div>
            </div>
          </div>
        </section>
        <CTA />
        <footer className="py-10 text-center text-sm text-slate-400">© {new Date().getFullYear()} LipaBoma. All rights reserved.</footer>
      </main>
    </div>
  )
}

export default App
