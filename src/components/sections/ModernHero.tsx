import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Presentation, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import automationWorkspace from "@/assets/automation-workspace.jpg";
import presentationDark from "@/assets/presentation-dark.jpg";
import wordpressDark from "@/assets/wordpress-dark.jpg";

const ModernHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
              Nowoczesne rozwiązania
            </span>
            <br />
            <span className="text-foreground/90">dla Twojego biznesu</span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto mb-4">
            Łączymy technologię z kreatywnością, dostarczając rozwiązania,
            które napędzają rozwój i wyróżniają na rynku.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Automatyzacje Card */}
          <Link to="/automatyzacje" className="group">
            <div className="relative h-full">
              <div className="absolute inset-0 gradient-primary rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative h-full glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 shadow-3d">
                <div className="absolute inset-0 opacity-20">
                  <img 
                    src={automationWorkspace} 
                    alt="Automatyzacja procesów biznesowych" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>
                
                <div className="relative p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 gradient-primary rounded-xl shadow-elevated">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary">Automatyzacje</h2>
                  </div>
                  
                  <p className="text-foreground/70 mb-6 text-lg">
                    Eliminujemy powtarzalne zadania dzięki inteligentnym automatyzacjom Google Workspace.
                    Oszczędzaj czas i zwiększ efektywność swojego zespołu.
                  </p>

                  <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-foreground/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Automatyzacja procesów biznesowych</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Integracje z Google Workspace</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Oszczędność czasu i kosztów</span>
                  </li>
                </ul>

                  <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
                    <span className="font-medium">Dowiedz się więcej</span>
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
              <div className="relative h-full glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 shadow-3d">
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
                  <h2 className="text-3xl font-bold text-secondary">Prezentacje</h2>
                </div>
                
                <p className="text-foreground/70 mb-6 text-lg">
                  Tworzymy prezentacje, które robią wrażenie. Profesjonalne opracowanie graficzne
                  z narracją lektorską na najwyższym poziomie.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-foreground/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span>Kompleksowe przygotowanie prezentacji</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span>Profesjonalna narracja lektorska</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span>Indywidualne podejście do projektu</span>
                  </li>
                </ul>

                  <div className="flex items-center gap-2 text-secondary group-hover:gap-4 transition-all">
                    <span className="font-medium">Dowiedz się więcej</span>
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
              <div className="relative h-full glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 shadow-3d">
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
                    Profesjonalna opieka nad Twoją stroną WordPress. Regularne aktualizacje, 
                    bezpieczne kopie zapasowe i pełne wsparcie techniczne.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-foreground/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Regularne aktualizacje i backupy</span>
                    </li>
                    <li className="flex items-center gap-3 text-foreground/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Bezpieczeństwo i monitoring</span>
                    </li>
                    <li className="flex items-center gap-3 text-foreground/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Pakiety opieki dopasowane do potrzeb</span>
                    </li>
                  </ul>

                  <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
                    <span className="font-medium">Dowiedz się więcej</span>
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