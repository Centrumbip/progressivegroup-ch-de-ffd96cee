import { Clock, DollarSign, TrendingUp, Puzzle } from "lucide-react";

const benefits = [
  {
    title: "Oszczędność czasu",
    description: "Eliminujemy powtarzające się zadania i umożliwiamy zespołowi skupienie się na działaniach strategicznych",
    icon: Clock,
    color: "bg-primary"
  },
  {
    title: "Redukcja kosztów zewnętrznych systemów", 
    description: "Wykorzystujemy pełny potencjał Google Workspace i redukujemy potrzebę dodatkowych narzędzi",
    icon: DollarSign,
    color: "bg-accent"
  },
  {
    title: "Skalowalność i niezawodność",
    description: "Rozwiązania Google wyróżniają się wysoką dostępnością i możliwością dostosowania się do rosnących wymagań",
    icon: TrendingUp,
    color: "bg-primary"
  },
  {
    title: "Integracja z narzędziami, które już znasz",
    description: "Bazujemy na istniejącej infrastrukturze Google i minimalizujemy czas wdrożenia",
    icon: Puzzle,
    color: "bg-secondary"
  }
];

const WhyUs = () => {
  return (
    <section id="benefits" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Dlaczego warto?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in animate-delay-200">
            Nasze automatyzacje przynoszą wymierne korzyści dla Twojej firmy
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
        
        {/* Additional stats section */}
        <div className="mt-20 card-gradient rounded-2xl p-8 shadow-elegant animate-scale-in animate-delay-600">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <p className="text-muted-foreground">Godzin zaoszczędzonych miesięcznie</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50%</div>
              <p className="text-muted-foreground">Redukcja czasu na rutynowe zadania</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">99.9%</div>
              <p className="text-muted-foreground">Niezawodność automatyzacji</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
