const EcommerceMockup = () => {
  return (
    <div className="w-full bg-white text-slate-900 overflow-hidden">
      {/* Header */}
      <header className="bg-slate-900 text-white border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center font-bold">
                S
              </div>
              <span className="text-xl font-bold">StyleHub</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a className="hover:text-pink-400 transition-colors">Neu</a>
              <a className="hover:text-pink-400 transition-colors">Damen</a>
              <a className="hover:text-pink-400 transition-colors">Herren</a>
              <a className="hover:text-pink-400 transition-colors">Sale</a>
            </nav>
            <div className="flex items-center gap-4">
              <span className="text-sm">🛒 Warenkorb (0)</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative py-16 px-6 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="container mx-auto text-center">
          <div className="inline-block bg-pink-600 text-white px-4 py-1 rounded-full text-sm mb-4">
            ✨ Frühlings-Kollektion 2024
          </div>
          <h1 className="text-5xl font-bold mb-6 text-slate-900 leading-tight">
            Die neuesten Trends<br />
            <span className="text-pink-600">direkt aus der Schweiz</span>
          </h1>
          <p className="text-xl text-slate-700 mb-8">
            Kostenloser Versand ab CHF 50 | Twint & PostFinance
          </p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors">
            Jetzt shoppen
          </button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Beliebte Produkte</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Sommer Kleid", price: "CHF 89.90", badge: "NEU" },
              { name: "Designer Jeans", price: "CHF 129.00", badge: "SALE" },
              { name: "Blazer", price: "CHF 159.00", badge: "" },
              { name: "Sneakers", price: "CHF 99.00", badge: "TOP" }
            ].map((product, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">👗</span>
                  </div>
                  {product.badge && (
                    <span className="absolute top-2 right-2 bg-pink-600 text-white px-2 py-1 rounded text-xs font-bold">
                      {product.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-bold mb-2">{product.name}</h3>
                <p className="text-pink-600 font-bold text-lg">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceMockup;
