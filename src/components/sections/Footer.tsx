import { Link } from "react-router-dom";
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
              Umfassende IT-Lösungen für Ihr Unternehmen - von Prozessautomatisierung 
              über professionelle Präsentationen bis hin zu WordPress-Betreuung.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Schnellzugriff</h4>
            <ul className="space-y-3">
              <li>
                <a href="/o-nas" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Über uns
                </a>
              </li>
              <li>
                <a href="/korzysci-automatyzacji" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Vorteile der Automatisierung
                </a>
              </li>
              <li>
                <a href="/korzysci-prezentacji" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Vorteile von Präsentationen
                </a>
              </li>
              <li>
                <a href="/korzysci-wordpress" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Vorteile von WordPress
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
              © {currentYear} Progressivegroup Sp. z o.o. Alle Rechte vorbehalten.
            </div>
            
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link to="/datenschutz" className="hover:text-primary transition-colors duration-300">
                Datenschutz
              </Link>
              <Link to="/agb" className="hover:text-primary transition-colors duration-300">
                AGB
              </Link>
              <Link to="/cookies" className="hover:text-primary transition-colors duration-300">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;