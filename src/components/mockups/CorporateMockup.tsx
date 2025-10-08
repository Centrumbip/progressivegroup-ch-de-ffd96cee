const CorporateMockup = () => {
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
          www.asesoria-empresarial-madrid.es
        </div>
      </div>

      {/* Website Content */}
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Navigation */}
        <nav className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg"></div>
              <span className="font-bold text-xl">Asesoría Empresarial</span>
            </div>
            <div className="flex gap-6 text-sm">
              <span className="hover:text-blue-300 cursor-pointer">Servicios</span>
              <span className="hover:text-blue-300 cursor-pointer">Sobre Nosotros</span>
              <span className="hover:text-blue-300 cursor-pointer">Equipo</span>
              <span className="hover:text-blue-300 cursor-pointer">Carreras</span>
              <span className="hover:text-blue-300 cursor-pointer">Contacto</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="px-8 py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Soluciones Empresariales Profesionales
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Consultoría estratégica para el crecimiento de su negocio en España
            </p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50">
              Contáctenos Ahora
            </button>
          </div>
        </div>

        {/* Services */}
        <div className="px-8 py-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Nuestros Servicios</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-100 hover:border-blue-500 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultoría Fiscal</h3>
              <p className="text-gray-600">Optimización tributaria y cumplimiento normativo</p>
            </div>
            <div className="bg-white p-8 rounded-xl border-2 border-gray-100 hover:border-blue-500 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Estrategia Corporativa</h3>
              <p className="text-gray-600">Planificación y desarrollo empresarial</p>
            </div>
            <div className="bg-white p-8 rounded-xl border-2 border-gray-100 hover:border-blue-500 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Auditoría</h3>
              <p className="text-gray-600">Análisis financiero y control de riesgos</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="px-8 py-12 bg-blue-900 text-white">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">250+</div>
              <div className="text-blue-300">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15</div>
              <div className="text-blue-300">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-300">Tasa de Éxito</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateMockup;