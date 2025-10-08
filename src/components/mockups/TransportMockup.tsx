const TransportMockup = () => {
  return (
    <div className="w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
                T
              </div>
              <span className="text-xl font-bold">TransExpress Logistik</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a className="hover:text-blue-400 transition-colors">Startseite</a>
              <a className="hover:text-blue-400 transition-colors">Dienstleistungen</a>
              <a className="hover:text-blue-400 transition-colors">Fuhrpark</a>
              <a className="hover:text-blue-400 transition-colors">Kontakt</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Zuverlässige Logistiklösungen<br />
              <span className="text-blue-400">in ganz Deutschland</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Professioneller Transport mit modernster Flotte und 24/7 Service
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                Angebot anfragen
              </button>
              <button className="border border-slate-500 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition-colors">
                Mehr erfahren
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Dienstleistungen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🚛</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Fernverkehr</h3>
              <p className="text-slate-400">Europaweit zuverlässige Transportlösungen</p>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Expresstransport</h3>
              <p className="text-slate-400">Schnelle Lieferung innerhalb 24 Stunden</p>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Logistiklösungen</h3>
              <p className="text-slate-400">Maßgeschneiderte Konzepte für Ihr Unternehmen</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransportMockup;
