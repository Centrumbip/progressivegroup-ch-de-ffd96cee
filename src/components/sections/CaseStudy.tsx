import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { CheckCircle, ArrowRight, Users, Clock, BarChart3 } from "lucide-react";

const CaseStudy = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Fallstudie
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in animate-delay-200">
            Sehen Sie, wie wir unseren Kunden helfen, bessere Ergebnisse zu erzielen
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Card className="card-gradient border-border shadow-elegant overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left side - Content */}
                <div className="p-8 lg:p-12">
                  <div className="mb-6 animate-slide-up">
                    <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
                      Schulungsunternehmen
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      Automatisierung von Bildungsprozessen
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Ein Schulungsunternehmen, das hunderte Kursteilnehmer pro Woche betreut, sparte 
                      <span className="text-primary font-bold"> 30 Stunden pro Monat</span> durch die 
                      automatische Kontoerstellung in Google Classroom und Berichtserstellung in Google Sheets.
                    </p>
                  </div>
                  
                  {/* Benefits list */}
                  <div className="space-y-4 mb-8 animate-slide-up animate-delay-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">Automatische Erstellung von Teilnehmerkonten</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">Erstellung von Anwesenheitsberichten in Echtzeit</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">Automatische Ausstellung von Abschlusszertifikaten</p>
                    </div>
                  </div>
                  
                  <Button 
                    className={buttonVariants({ variant: "google-cta", size: "lg" })}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Erfahren Sie, wie wir Ihnen helfen können
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
                
                {/* Right side - Stats */}
                <div className="bg-primary/5 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-8 animate-slide-up animate-delay-300">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-3">
                        <Clock className="w-8 h-8 text-primary mr-3" />
                        <span className="text-4xl lg:text-5xl font-bold text-primary">30h</span>
                      </div>
                      <p className="text-muted-foreground">Monatliche Einsparungen</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-3">
                        <Users className="w-8 h-8 text-primary mr-3" />
                        <span className="text-4xl lg:text-5xl font-bold text-primary">500+</span>
                      </div>
                      <p className="text-muted-foreground">Kursteilnehmer pro Woche</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-3">
                        <BarChart3 className="w-8 h-8 text-secondary mr-3" />
                        <span className="text-4xl lg:text-5xl font-bold text-secondary">100%</span>
                      </div>
                      <p className="text-muted-foreground">Prozessautomatisierung</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
