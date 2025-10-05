import Navigation from "@/components/Navigation";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Zap, Clock, HeartHandshake } from "lucide-react";
import { useEffect } from "react";

const benefits = [
  {
    title: "Bezpieczeństwo",
    description: "Regularne aktualizacje, monitoring zagrożeń i backup zapewniają spokój o Twoją stronę",
    icon: Shield,
    color: "bg-primary"
  },
  {
    title: "Szybkość działania",
    description: "Optymalizacja wydajności sprawia, że strona ładuje się błyskawicznie, co poprawia SEO",
    icon: Zap,
    color: "bg-accent"
  },
  {
    title: "Oszczędność czasu",
    description: "Zajmujemy się wszystkimi aspektami technicznymi, abyś mógł skupić się na biznesie",
    icon: Clock,
    color: "bg-primary"
  },
  {
    title: "Wsparcie eksperckie",
    description: "Zawsze możesz liczyć na pomoc doświadczonych specjalistów WordPress",
    icon: HeartHandshake,
    color: "bg-secondary"
  }
];

const KorzysciWordPress = () => {
  useEffect(() => {
    document.title = "Korzyści WordPress — ProgressiveGroup";
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
              Korzyści WordPress Care
            </span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-3xl">
            Kompleksowa opieka nad Twoją stroną WordPress – spokój i pewność każdego dnia
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
              Profesjonalna opieka nad WordPress to pewność działania i rozwoju strony
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
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Monitoring i ochrona strony</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-muted-foreground">Dostępność strony (uptime)</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">50%</div>
                <p className="text-muted-foreground">Szybsze ładowanie po optymalizacji</p>
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

export default KorzysciWordPress;
