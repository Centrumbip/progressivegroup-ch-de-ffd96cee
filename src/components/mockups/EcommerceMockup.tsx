const EcommerceMockup = () => {
  return (
    <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-xl">
      {/* Browser Chrome */}
      <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-600">
          www.stylehub.ch
        </div>
      </div>

      {/* Website Content */}
      <div className="bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white px-8 py-4 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-teal-500 rounded-full"></div>
              <span className="font-bold text-xl">StyleHub</span>
            </div>
            <div className="flex gap-8 text-sm">
              <span className="hover:text-teal-600 cursor-pointer">Damen</span>
              <span className="hover:text-teal-600 cursor-pointer">Herren</span>
              <span className="bg-red-500 text-white px-3 py-1 rounded">Sale</span>
              <span className="hover:text-teal-600 cursor-pointer">Warenkorb (0)</span>
            </div>
          </div>
        </nav>

        {/* Banner */}
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-6 text-center">
          <p className="text-lg font-semibold">
            Kostenloser Versand in der Schweiz ab CHF 50
          </p>
          <p className="text-sm text-teal-100">Twint & PostFinance verfügbar</p>
        </div>

        {/* Product Grid */}
        <div className="px-8 py-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Neue Kollektion</h2>
            <div className="flex gap-2 text-sm">
              <button className="px-4 py-2 bg-white border rounded hover:bg-gray-50">
                Filter
              </button>
              <button className="px-4 py-2 bg-white border rounded hover:bg-gray-50">
                Sortieren
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {[
              { name: "Sommerjacke", price: "CHF 89.90", sale: false },
              { name: "Jeans Slim Fit", price: "CHF 79.90", sale: true, oldPrice: "CHF 99.90" },
              { name: "T-Shirt Basic", price: "CHF 29.90", sale: false },
              { name: "Sneakers Sport", price: "CHF 129.90", sale: true, oldPrice: "CHF 159.90" }
            ].map((product, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-shadow">
                <div className="relative">
                  <div className={`h-48 bg-gradient-to-br ${
                    i % 4 === 0 ? 'from-blue-200 to-blue-300' :
                    i % 4 === 1 ? 'from-gray-200 to-gray-300' :
                    i % 4 === 2 ? 'from-green-200 to-green-300' :
                    'from-purple-200 to-purple-300'
                  }`}></div>
                  {product.sale && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      SALE
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-teal-700 font-bold">{product.price}</p>
                    {product.oldPrice && (
                      <p className="text-gray-400 line-through text-sm">{product.oldPrice}</p>
                    )}
                  </div>
                  <button className="w-full mt-3 bg-teal-600 text-white py-2 rounded hover:bg-teal-700 text-sm">
                    In den Warenkorb
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceMockup;