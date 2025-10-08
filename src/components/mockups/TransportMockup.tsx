const TransportMockup = () => {
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
          www.transexpress-logistik.de
        </div>
      </div>

      {/* Website Content */}
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Navigation */}
        <nav className="bg-blue-900 text-white px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded"></div>
              <span className="font-bold text-lg">TransExpress</span>
            </div>
            <div className="flex gap-6 text-sm">
              <span className="hover:text-blue-300 cursor-pointer">Dienstleistungen</span>
              <span className="hover:text-blue-300 cursor-pointer">Flotte</span>
              <span className="hover:text-blue-300 cursor-pointer">Tracking</span>
              <span className="hover:text-blue-300 cursor-pointer">Kontakt</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="px-8 py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">
              Zuverlässige Logistiklösungen für Deutschland
            </h1>
            <p className="text-blue-100 mb-6">
              Schnelle und sichere Transportdienstleistungen für Ihr Unternehmen
            </p>
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">
              Jetzt Anfrage senden
            </button>
          </div>
        </div>

        {/* Services */}
        <div className="px-8 py-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Unsere Dienstleistungen</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg border-2 border-gray-100 hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold mb-2">Paketversand</h3>
              <p className="text-sm text-gray-600">Schneller nationaler Versand</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-gray-100 hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold mb-2">Spedition</h3>
              <p className="text-sm text-gray-600">Komplette Ladungen</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-gray-100 hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold mb-2">Express</h3>
              <p className="text-sm text-gray-600">Same-Day Lieferung</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportMockup;