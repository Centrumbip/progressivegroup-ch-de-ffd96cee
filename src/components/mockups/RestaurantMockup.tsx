const RestaurantMockup = () => {
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
          www.labellacucina.ch
        </div>
      </div>

      {/* Website Content */}
      <div className="bg-gradient-to-b from-amber-50 to-white">
        {/* Navigation */}
        <nav className="bg-gradient-to-r from-amber-900 to-amber-800 text-white px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl italic">La Bella Cucina</span>
            </div>
            <div className="flex gap-6 text-sm">
              <span className="hover:text-amber-200 cursor-pointer">Menu / Speisekarte / Menù</span>
              <span className="hover:text-amber-200 cursor-pointer">Reservierung</span>
              <span className="hover:text-amber-200 cursor-pointer flex items-center gap-1">
                <span>DE</span>|<span>FR</span>|<span>IT</span>
              </span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="px-8 py-16 bg-gradient-to-br from-amber-100 via-orange-50 to-amber-50">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-serif mb-4 text-amber-900">
              Authentische italienische Küche
            </h1>
            <p className="text-amber-800 mb-2 text-lg">
              Cucina italiana autentica
            </p>
            <p className="text-amber-700 mb-6">
              Cuisine italienne authentique
            </p>
            <button className="bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-800">
              Jetzt reservieren / Réserver
            </button>
          </div>
        </div>

        {/* Menu Preview */}
        <div className="px-8 py-12">
          <h2 className="text-3xl font-serif mb-8 text-amber-900">Unsere Spezialitäten</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="h-32 bg-gradient-to-br from-amber-200 to-orange-300"></div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">Pasta Carbonara</h3>
                <p className="text-sm text-gray-600 mb-2">Klassisch römisch</p>
                <p className="text-amber-700 font-bold">CHF 24.90</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="h-32 bg-gradient-to-br from-red-200 to-orange-300"></div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">Pizza Margherita</h3>
                <p className="text-sm text-gray-600 mb-2">Traditionell napolitanisch</p>
                <p className="text-amber-700 font-bold">CHF 18.50</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="h-32 bg-gradient-to-br from-green-200 to-lime-300"></div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">Tiramisu</h3>
                <p className="text-sm text-gray-600 mb-2">Hausgemacht</p>
                <p className="text-amber-700 font-bold">CHF 9.90</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMockup;