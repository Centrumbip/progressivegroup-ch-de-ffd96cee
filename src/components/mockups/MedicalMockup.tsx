const MedicalMockup = () => {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-teal-50 text-slate-900 overflow-hidden">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-teal-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl">
                ⚕️
              </div>
              <span className="text-xl font-bold text-teal-900">Cabinet Médical Genève</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a className="hover:text-teal-700 transition-colors">Accueil</a>
              <a className="hover:text-teal-700 transition-colors">Services</a>
              <a className="hover:text-teal-700 transition-colors">Équipe</a>
              <a className="hover:text-teal-700 transition-colors">Rendez-vous</a>
              <a className="hover:text-teal-700 transition-colors">Contact</a>
            </nav>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-colors">
              Prendre RDV
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <div className="inline-block bg-teal-600 text-white px-4 py-1 rounded-full text-sm mb-4">
              ✓ Certifié par l'État de Genève
            </div>
            <h1 className="text-5xl font-bold mb-6 text-teal-900 leading-tight">
              Votre santé,<br />
              <span className="text-teal-600">notre priorité</span>
            </h1>
            <p className="text-xl text-slate-700 mb-8">
              Cabinet médical moderne à Genève offrant des soins de qualité avec réservation en ligne
            </p>
            <div className="flex gap-4">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Réserver en ligne
              </button>
              <button className="border border-teal-600 text-teal-700 hover:bg-teal-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Nos services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-teal-900">Nos Services Médicaux</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-teal-50 p-8 rounded-xl border border-teal-200">
              <div className="w-14 h-14 bg-teal-600 text-white rounded-full mb-4 flex items-center justify-center text-2xl">
                🩺
              </div>
              <h3 className="text-xl font-bold mb-3 text-teal-900">Médecine Générale</h3>
              <p className="text-slate-700">Consultations générales et suivi médical personnalisé</p>
            </div>
            <div className="bg-teal-50 p-8 rounded-xl border border-teal-200">
              <div className="w-14 h-14 bg-teal-600 text-white rounded-full mb-4 flex items-center justify-center text-2xl">
                💉
              </div>
              <h3 className="text-xl font-bold mb-3 text-teal-900">Vaccinations</h3>
              <p className="text-slate-700">Programme complet de vaccination pour tous les âges</p>
            </div>
            <div className="bg-teal-50 p-8 rounded-xl border border-teal-200">
              <div className="w-14 h-14 bg-teal-600 text-white rounded-full mb-4 flex items-center justify-center text-2xl">
                🔬
              </div>
              <h3 className="text-xl font-bold mb-3 text-teal-900">Analyses Médicales</h3>
              <p className="text-slate-700">Laboratoire sur place pour des résultats rapides</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-teal-900">Notre Équipe Médicale</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Dr. Sophie Martin", specialty: "Médecin généraliste" },
              { name: "Dr. Pierre Dubois", specialty: "Pédiatre" },
              { name: "Dr. Marie Bernard", specialty: "Médecin interne" }
            ].map((doctor, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-teal-200 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  {doctor.name.split(' ')[1].charAt(0)}
                </div>
                <h3 className="font-bold text-lg mb-1 text-teal-900">{doctor.name}</h3>
                <p className="text-sm text-slate-600 mb-4">{doctor.specialty}</p>
                <button className="text-teal-600 hover:text-teal-700 text-sm font-semibold">
                  Prendre rendez-vous →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Banner */}
      <section className="py-12 px-6 bg-teal-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Réservation en ligne 24/7</h2>
          <p className="text-teal-100 mb-6">Prenez rendez-vous facilement via notre système sécurisé</p>
          <button className="bg-white text-teal-600 hover:bg-teal-50 px-10 py-4 rounded-lg font-semibold text-lg transition-colors">
            Réserver maintenant
          </button>
        </div>
      </section>
    </div>
  );
};

export default MedicalMockup;
