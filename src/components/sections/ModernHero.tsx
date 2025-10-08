import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Presentation, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import automationWorkspace from "@/assets/automation-workspace.jpg";
import presentationDark from "@/assets/presentation-dark.jpg";
import wordpressDark from "@/assets/wordpress-dark.jpg";

const ModernHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 transform-3d">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 gradient-accent rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl opacity-10 animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-20 animate-fade-in">
          <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Moderne Lösungen
            </span>
            <br />
            <span className="text-foreground/90">für Ihr Unternehmen</span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto mb-4">
            Wir verbinden Technologie mit Kreativität und liefern Lösungen,
            die Wachstum fördern und sich am Markt abheben.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto relative z-10">
          {/* Automatyzacje Card */}
          <Link to="/automatyzacje" className="group">
            <div className="relative h-full">
              <div className="absolute inset-0 gradient-primary rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative h-full rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 shadow-3d bg-card/95 backdrop-blur-md border border-border/50">
                <div className="absolute inset-0 opacity-20">
                  <img 
                    src={automationWorkspace} 
                    alt="Automatisierung von Geschäftsprozessen" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>
                
                <div className="relative p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 gradient-primary rounded-xl shadow-elevated">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary">Automatisierung</h2>
                  </div>
                  
                  <p className="text-foreground/70 mb-6 text-lg">
                    Wir eliminieren wiederkehrende Aufgaben durch intelligente Google Workspace-Automatisierung.
                    Sparen Sie Zeit und steigern Sie die Effizienz Ihres Teams.
                  </p>

                  <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-foreground/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Automatisierung von Geschäftsprozessen</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Google Workspace-Integrationen</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Zeit- und Kosteneinsparungen</span>
                  </li>
                </ul>

                  <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
                    <span className="font-medium">Mehr erfahren</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Prezentacje Card */}
          <Link to="/prezentacje" className="group">
            <div className="relative h-full">
              <div className="absolute inset-0 gradient-accent rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative h-full rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 shadow-3d bg-card/95 backdrop-blur-md border border-border/50">
                <div className="absolute inset-0 opacity-30">
                  <img 
                    src={presentationDark} 
                    alt="Profesjonalne prezentacje biznesowe" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />
                </div>
                
                <div className="relative p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 gradient-accent rounded-xl shadow-elevated">
                    <Presentation className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-secondary">Präsentationen</h2>
                </div>
                
                <p className="text-foreground/70 mb-6 text-lg">
                  Wir erstellen Präsentationen, die beeindrucken. Professionelles Grafikdesign
                  mit erstklassiger Sprecherbegleitung.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-foreground/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span>Umfassende Präsentationserstellung</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span>Professionelle Sprecherbegleitung</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span>Individueller Projektansatz</span>
                  </li>
                </ul>

                  <div className="flex items-center gap-2 text-secondary group-hover:gap-4 transition-all">
                    <span className="font-medium">Mehr erfahren</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* WordPress Card */}
          <Link to="/wordpress" className="group">
            <div className="relative h-full">
              <div className="absolute inset-0 gradient-primary rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative h-full rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 shadow-3d bg-card/95 backdrop-blur-md border border-border/50">
                <div className="absolute inset-0 opacity-20">
                  <img 
                    src={wordpressDark} 
                    alt="Opieka WordPress" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>
                
                <div className="relative p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 gradient-primary rounded-xl shadow-elevated">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary">WordPress</h2>
                  </div>
                  
                  <p className="text-foreground/70 mb-6 text-lg">
                    Professionelle Betreuung Ihrer WordPress-Website. Regelmäßige Updates, 
                    sichere Backups und vollständiger technischer Support.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-foreground/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Regelmäßige Updates und Backups</span>
                    </li>
                    <li className="flex items-center gap-3 text-foreground/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Sicherheit und Monitoring</span>
                    </li>
                    <li className="flex items-center gap-3 text-foreground/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Bedarfsgerechte Wartungspakete</span>
                    </li>
                  </ul>

                  <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
                    <span className="font-medium">Mehr erfahren</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Webseiten Card */}
          <Link to="/strony-internetowe" className="group">
            <div className="relative h-full">
              <div className="absolute inset-0 gradient-accent rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative h-full rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 shadow-3d bg-card/95 backdrop-blur-md border border-border/50">
                <div className="absolute inset-0 opacity-20">
                  <img 
                    src={automationWorkspace} 
                    alt="Professionelle Webseiten-Erstellung" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>
                
                <div className="relative p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 gradient-accent rounded-xl shadow-elevated">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-secondary">Webseiten</h2>
                  </div>
                  
                  <p className="text-foreground/70 mb-6 text-lg">
                    Wir erstellen moderne, responsive Webseiten, die Ihre Marke perfekt präsentieren
                    und Ihre Kunden begeistern.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-foreground/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>Maßgeschneiderte Webdesign-Lösungen</span>
                    </li>
                    <li className="flex items-center gap-3 text-foreground/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>Responsive und SEO-optimiert</span>
                    </li>
                    <li className="flex items-center gap-3 text-foreground/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>Schnelle Ladezeiten und Performance</span>
                    </li>
                  </ul>

                  <div className="flex items-center gap-2 text-secondary group-hover:gap-4 transition-all">
                    <span className="font-medium">Mehr erfahren</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default ModernHero;