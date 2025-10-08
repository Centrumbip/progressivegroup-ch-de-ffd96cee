const CorporateMockup = () => {
  return (
    <div className="w-full bg-white text-slate-900 overflow-hidden">
      {/* Header */}
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center font-bold">
                AE
              </div>
              <span className="text-xl font-bold">Asesoría Empresarial Madrid</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a className="hover:text-blue-300 transition-colors">Inicio</a>
              <a className="hover:text-blue-300 transition-colors">Servicios</a>
              <a className="hover:text-blue-300 transition-colors">Equipo</a>
              <a className="hover:text-blue-300 transition-colors">Carreras</a>
              <a className="hover:text-blue-300 transition-colors">Contacto</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-50 to-slate-50">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-blue-900 leading-tight">
              Consultoría empresarial<br />
              <span className="text-blue-600">de confianza en Madrid</span>
            </h1>
            <p className="text-xl text-slate-700 mb-8">
              Soluciones estratégicas personalizadas para impulsar el crecimiento de su negocio
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Solicitar consulta
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Nuestros servicios
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-lg mb-4 flex items-center justify-center text-2xl">
                📊
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Consultoría Estratégica</h3>
              <p className="text-slate-700">Planificación y desarrollo de estrategias empresariales a medida</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-lg mb-4 flex items-center justify-center text-2xl">
                💼
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Gestión Financiera</h3>
              <p className="text-slate-700">Optimización de recursos y planificación financiera empresarial</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-lg mb-4 flex items-center justify-center text-2xl">
                👥
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Recursos Humanos</h3>
              <p className="text-slate-700">Gestión del talento y desarrollo organizacional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["María García", "Carlos Rodríguez", "Ana Martínez", "Javier López"].map((name, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {name.charAt(0)}
                </div>
                <h3 className="font-bold mb-1">{name}</h3>
                <p className="text-sm text-slate-600">Consultor Senior</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateMockup;
