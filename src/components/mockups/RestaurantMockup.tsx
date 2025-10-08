const RestaurantMockup = () => {
  return (
    <div className="w-full bg-gradient-to-br from-amber-50 to-orange-50 text-slate-900 overflow-hidden">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-amber-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🍝</span>
              <span className="text-2xl font-serif font-bold text-amber-900">La Bella Cucina</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a className="hover:text-amber-700 transition-colors">Startseite</a>
              <a className="hover:text-amber-700 transition-colors">Menü</a>
              <a className="hover:text-amber-700 transition-colors">Reservierung</a>
              <a className="hover:text-amber-700 transition-colors">Kontakt</a>
            </nav>
            <div className="flex gap-2 text-xs">
              <button className="px-3 py-1 rounded border border-amber-300 hover:bg-amber-100">DE</button>
              <button className="px-3 py-1 rounded border border-amber-300 hover:bg-amber-100">FR</button>
              <button className="px-3 py-1 rounded border border-amber-300 hover:bg-amber-100">IT</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-serif font-bold mb-6 text-amber-900 leading-tight">
            Authentische italienische Küche<br />
            <span className="text-amber-700">im Herzen von Zürich</span>
          </h1>
          <p className="text-xl text-amber-800 mb-8 max-w-2xl mx-auto">
            Erleben Sie traditionelle Rezepte aus allen Regionen Italiens
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Tisch reservieren
            </button>
            <button className="border border-amber-700 text-amber-900 hover:bg-amber-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Menü ansehen
            </button>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-amber-900">Unsere Spezialitäten</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
              <div className="text-4xl mb-4 text-center">🍕</div>
              <h3 className="text-xl font-serif font-bold mb-2 text-center">Pizza Margherita</h3>
              <p className="text-amber-800 text-center mb-3">Frische Tomaten, Mozzarella, Basilikum</p>
              <p className="text-center text-amber-900 font-bold">CHF 18.50</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
              <div className="text-4xl mb-4 text-center">🍝</div>
              <h3 className="text-xl font-serif font-bold mb-2 text-center">Pasta Carbonara</h3>
              <p className="text-amber-800 text-center mb-3">Hausgemachte Pasta mit Speck & Ei</p>
              <p className="text-center text-amber-900 font-bold">CHF 22.00</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
              <div className="text-4xl mb-4 text-center">🍰</div>
              <h3 className="text-xl font-serif font-bold mb-2 text-center">Tiramisu</h3>
              <p className="text-amber-800 text-center mb-3">Nach traditionellem Familienrezept</p>
              <p className="text-center text-amber-900 font-bold">CHF 9.50</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantMockup;
