import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img src={logo} alt="ProgressiveGroup Logo" className="h-[110px]" />
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Kompleksowe rozwiązania IT dla Twojego biznesu - od automatyzacji procesów, 
              przez profesjonalne prezentacje, po obsługę WordPress.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Szybkie linki</h4>
            <ul className="space-y-3">
              <li>
                <a href="/o-nas" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  O nas
                </a>
              </li>
              <li>
                <a href="/korzysci-automatyzacji" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Korzyści Automatyzacji
                </a>
              </li>
              <li>
                <a href="/korzysci-prezentacji" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Korzyści Prezentacji
                </a>
              </li>
              <li>
                <a href="/korzysci-wordpress" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Korzyści WordPress
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">info@progressivegroup.ch</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground text-sm">
                  <div>Progressivegroup Sp. z o.o.</div>
                  <div>ul. Rynek 5/6</div>
                  <div>59-220 Legnica</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Progressivegroup Sp. z o.o. Wszelkie prawa zastrzeżone.
            </div>
            
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Polityka prywatności
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Regulamin
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;