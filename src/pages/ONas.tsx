import Navigation from "@/components/Navigation";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Award, Target, Heart } from "lucide-react";
import { useEffect } from "react";

const values = [
  {
    title: "Ekspertyza",
    description: "Nasz zespół to specjaliści z wieloletnim doświadczeniem w automatyzacji, projektowaniu i opiece nad stronami",
    icon: Award,
    color: "bg-primary"
  },
  {
    title: "Indywidualne podejście",
    description: "Każdy projekt traktujemy jako wyjątkowy - dostosowujemy rozwiązania do specyficznych potrzeb klienta",
    icon: Heart,
    color: "bg-accent"
  },
  {
    title: "Efektywność",
    description: "Skupiamy się na realnych korzyściach - oszczędności czasu, kosztów i zwiększeniu produktywności",
    icon: Target,
    color: "bg-primary"
  },
  {
    title: "Wsparcie i współpraca",
    description: "Jesteśmy z Tobą na każdym etapie - od analizy potrzeb, przez wdrożenie, aż po ciągłe wsparcie",
    icon: Users,
    color: "bg-secondary"
  }
];

const ONas = () => {
  useEffect(() => {
    document.title = "O nas — ProgressiveGroup";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 transform-3d">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span>Powrót do strony głównej</span>
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              O nas
            </span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-3xl leading-relaxed">
            Jesteśmy zespołem specjalistów IT, którzy pomagają firmom wykorzystać pełen potencjał 
            nowoczesnych technologii. Łączymy wiedzę techniczną z biznesowym podejściem, 
            dostarczając rozwiązania, które naprawdę działają.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Nasza misja
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in animate-delay-200">
              Wierzymy, że technologia powinna służyć ludziom, a nie odwrotnie. Dlatego tworzymy 
              rozwiązania, które są intuicyjne, skuteczne i rzeczywiście ułatwiają codzienną pracę. 
              Automatyzujemy to, co powtarzalne, projektujemy to, co przekonuje, i dbamy o to, 
              co już działa.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Nasze wartości
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in animate-delay-200">
              To, co nas wyróżnia i czym kierujemy się w codziennej pracy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index}
                  className="text-center group animate-slide-up"
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className={`w-20 h-20 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-button`}>
                    <IconComponent className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center animate-fade-in">
              Zespół specjalistów
            </h2>
            <div className="card-gradient rounded-2xl p-8 shadow-elegant animate-scale-in">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                W ProgressiveGroup pracują eksperci z różnych dziedzin IT – od automatyzacji procesów 
                biznesowych, przez projektowanie prezentacji i grafiki, po administrację i optymalizację 
                platform WordPress.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Nasz zespół składa się z programistów, projektantów UX/UI, specjalistów Google Workspace, 
                administratorów systemów oraz konsultantów biznesowych. Dzięki temu możemy spojrzeć na 
                każdy projekt holistycznie – zarówno od strony technicznej, jak i biznesowej.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stawiamy na ciągły rozwój i śledzenie najnowszych trendów technologicznych, 
                aby zawsze oferować rozwiązania najwyższej jakości. Twój sukces to nasz sukces.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default ONas;
