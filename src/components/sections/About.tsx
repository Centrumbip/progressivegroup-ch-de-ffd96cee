import { Users, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in">
            O nas
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center animate-slide-up animate-delay-100">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Zespół ekspertów</h3>
              <p className="text-muted-foreground">Specjaliści Google Workspace z wieloletnim doświadczeniem</p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-slide-up animate-delay-200">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Precyzyjne rozwiązania</h3>
              <p className="text-muted-foreground">Każda automatyzacja dopasowana do Twoich potrzeb</p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-slide-up animate-delay-300">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Innowacyjność</h3>
              <p className="text-muted-foreground">Wykorzystujemy najnowsze możliwości platform Google</p>
            </div>
          </div>
          
          <div className="card-gradient rounded-2xl p-8 shadow-elegant animate-slide-up animate-delay-400">
            <p className="text-xl text-foreground leading-relaxed">
              Jesteśmy zespołem specjalistów w zakresie Google Workspace. 
              Tworzymy automatyzacje, które pozwalają firmom rozwijać się szybciej, 
              bez zbędnych kosztów i marnowania czasu na ręczne procesy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;