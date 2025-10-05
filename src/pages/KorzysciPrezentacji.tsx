import Navigation from "@/components/Navigation";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Presentation, Users, TrendingUp, Award } from "lucide-react";
import { useEffect } from "react";

const benefits = [
  {
    title: "Profesjonalny wizerunek",
    description: "Prezentacje dopasowane do identyfikacji wizualnej firmy budują spójny, profesjonalny wizerunek",
    icon: Award,
    color: "bg-primary"
  },
  {
    title: "Wyższa skuteczność przekazu",
    description: "Przejrzyste slajdy i logiczna struktura sprawiają, że przekaz trafia do odbiorców",
    icon: TrendingUp,
    color: "bg-accent"
  },
  {
    title: "Oszczędność czasu",
    description: "Gotowe szablony i automatyzacja tworzenia prezentacji redukują czas przygotowania",
    icon: Presentation,
    color: "bg-primary"
  },
  {
    title: "Zaangażowanie odbiorców",
    description: "Atrakcyjna grafika i przemyślana kompozycja utrzymują uwagę i zwiększają zapamiętywanie",
    icon: Users,
    color: "bg-secondary"
  }
];

const KorzysciPrezentacji = () => {
  useEffect(() => {
    document.title = "Korzyści Prezentacji — ProgressiveGroup";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 transform-3d">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-20 animate-float" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span>Powrót do strony głównej</span>
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Korzyści Prezentacji
            </span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-3xl">
            Dlaczego warto zainwestować w profesjonalne prezentacje dla swojej firmy?
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Dlaczego warto?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in animate-delay-200">
              Profesjonalne prezentacje to inwestycja, która zwraca się wielokrotnie
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={index}
                  className="text-center group animate-slide-up"
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className={`w-20 h-20 ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-button`}>
                    <IconComponent className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* Stats */}
          <div className="mt-20 card-gradient rounded-2xl p-8 shadow-elegant animate-scale-in animate-delay-600">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">75%</div>
                <p className="text-muted-foreground">Wyższa zapamiętywanie treści</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">3x</div>
                <p className="text-muted-foreground">Szybsze przygotowanie prezentacji</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                <p className="text-muted-foreground">Spójność wizualna marki</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default KorzysciPrezentacji;
