const MedicalMockup = () => {
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
          www.cabinet-medical-geneve.ch
        </div>
      </div>

      {/* Website Content */}
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Navigation */}
        <nav className="bg-white px-8 py-4 border-b shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                M
              </div>
              <div>
                <div className="font-bold text-lg text-blue-900">Cabinet Médical</div>
                <div className="text-xs text-blue-600">Genève</div>
              </div>
            </div>
            <div className="flex gap-6 text-sm">
              <span className="hover:text-blue-600 cursor-pointer">Services</span>
              <span className="hover:text-blue-600 cursor-pointer">Équipe</span>
              <span className="hover:text-blue-600 cursor-pointer">Rendez-vous</span>
              <span className="hover:text-blue-600 cursor-pointer">Contact</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Prendre RDV
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="px-8 py-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">
              Votre Santé, Notre Priorité
            </h1>
            <p className="text-blue-100 text-lg mb-6">
              Cabinet médical moderne au cœur de Genève
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">
                Prendre Rendez-vous
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10">
                Urgences
              </button>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="px-8 py-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Nos Services</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-blue-500 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Médecine Générale</h3>
              <p className="text-gray-600 text-sm">Consultations et suivis médicaux</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-blue-500 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Pédiatrie</h3>
              <p className="text-gray-600 text-sm">Soins pour enfants et adolescents</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-blue-500 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Vaccinations</h3>
              <p className="text-gray-600 text-sm">Programme complet de vaccination</p>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="px-8 py-8 bg-blue-50">
          <div className="bg-white rounded-xl p-8 border-2 border-blue-200">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-blue-900">Horaires d'Ouverture</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi:</span>
                    <span className="font-semibold">8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi:</span>
                    <span className="font-semibold">9h00 - 13h00</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-blue-900">Contact</h3>
                <div className="space-y-2 text-gray-700">
                  <div>📞 +41 22 XXX XX XX</div>
                  <div>✉️ contact@cabinet-geneve.ch</div>
                  <div>📍 Rue de Lausanne 123, Genève</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalMockup;