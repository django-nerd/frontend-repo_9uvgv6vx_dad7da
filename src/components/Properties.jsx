function PropertyCard({ title, price, location, img }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
      <div className="aspect-[16/10] bg-gradient-to-tr from-slate-700 to-slate-900" style={{backgroundImage: `url(${img})`, backgroundSize:'cover', backgroundPosition:'center'}} />
      <div className="p-5">
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-slate-400 text-sm">{location}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-white font-medium">${price}/mo</span>
          <button className="px-3 py-1.5 rounded-lg bg-white text-black text-sm font-medium">View</button>
        </div>
      </div>
    </div>
  )
}

function Properties() {
  const sample = [
    { title: 'Skyline Loft', price: 1450, location: 'Westlands', img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Garden Suites', price: 980, location: 'Kileleshwa', img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Coastal Retreat', price: 2100, location: 'Nyali', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop' },
  ]

  return (
    <section id="properties" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Featured listings</h2>
          <p className="mt-3 text-slate-300">A taste of what your marketplace can showcase.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sample.map((p, i) => <PropertyCard key={i} {...p} />)}
        </div>
      </div>
    </section>
  )
}

export default Properties
