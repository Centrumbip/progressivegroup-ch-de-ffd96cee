import { Users, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in">
            Über uns
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center animate-slide-up animate-delay-100">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Expertenteam</h3>
              <p className="text-muted-foreground">Google Workspace-Spezialisten mit langjähriger Erfahrung</p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-slide-up animate-delay-200">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Präzise Lösungen</h3>
              <p className="text-muted-foreground">Jede Automatisierung auf Ihre Bedürfnisse zugeschnitten</p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-slide-up animate-delay-300">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Innovation</h3>
              <p className="text-muted-foreground">Wir nutzen die neuesten Möglichkeiten der Google-Plattformen</p>
            </div>
          </div>
          
          <div className="card-gradient rounded-2xl p-8 shadow-elegant animate-slide-up animate-delay-400">
            <p className="text-xl text-foreground leading-relaxed">
              Wir sind ein Team von Google Workspace-Spezialisten. 
              Wir erstellen Automatisierungen, die Unternehmen ein schnelleres Wachstum ermöglichen, 
              ohne unnötige Kosten und Zeitverschwendung durch manuelle Prozesse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;