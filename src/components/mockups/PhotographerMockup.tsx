const PhotographerMockup = () => {
  return (
    <div className="w-full bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📸</span>
              <span className="text-xl font-light">Lens & Light Studio</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm font-light">
              <a className="hover:text-slate-400 transition-colors">Home</a>
              <a className="hover:text-slate-400 transition-colors">Portfolio</a>
              <a className="hover:text-slate-400 transition-colors">Services</a>
              <a className="hover:text-slate-400 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-light mb-6 leading-tight tracking-wide">
            Capturing Moments<br />
            <span className="text-slate-400">Creating Memories</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 font-light max-w-2xl mx-auto">
            Professional photography services in London for weddings, corporate events, and portraits
          </p>
          <button className="bg-white text-black hover:bg-slate-200 px-10 py-4 rounded font-semibold transition-colors">
            View Portfolio
          </button>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-6 bg-slate-950">
        <div className="container mx-auto">
          <h2 className="text-3xl font-light text-center mb-12 tracking-wide">Recent Work</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { category: "Wedding", icon: "💒" },
              { category: "Corporate", icon: "🏢" },
              { category: "Portrait", icon: "👤" },
              { category: "Events", icon: "🎉" },
              { category: "Fashion", icon: "👗" },
              { category: "Product", icon: "📦" }
            ].map((item, i) => (
              <div key={i} className="relative group overflow-hidden rounded-lg">
                <div className="w-full h-64 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <span className="text-6xl opacity-50 group-hover:opacity-100 transition-opacity">
                    {item.icon}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-light">{item.category}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-black border-t border-slate-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">Ready to book your session?</h2>
          <p className="text-slate-400 mb-8 font-light">Get in touch to discuss your photography needs</p>
          <button className="border border-white hover:bg-white hover:text-black px-10 py-4 rounded font-semibold transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default PhotographerMockup;
