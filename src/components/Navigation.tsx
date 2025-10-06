import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card-solid border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="ProgressiveGroup Logo" className="h-[110px] transition-opacity group-hover:opacity-80" />
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/automatyzacje"
              className={`px-4 py-2 rounded-lg transition-all hover:bg-white/5 ${
                location.pathname === '/automatyzacje' ? 'bg-white/10 text-primary' : 'text-foreground/70'
              }`}
            >
              Automatisierung
            </Link>
            <Link 
              to="/prezentacje"
              className={`px-4 py-2 rounded-lg transition-all hover:bg-white/5 ${
                location.pathname === '/prezentacje' ? 'bg-white/10 text-secondary' : 'text-foreground/70'
              }`}
            >
              Präsentationen
            </Link>
            <Link 
              to="/wordpress"
              className={`px-4 py-2 rounded-lg transition-all hover:bg-white/5 ${
                location.pathname === '/wordpress' ? 'bg-white/10 text-primary' : 'text-foreground/70'
              }`}
            >
              WordPress
            </Link>
            <Link 
              to="/strony-internetowe"
              className={`px-4 py-2 rounded-lg transition-all hover:bg-white/5 ${
                location.pathname === '/strony-internetowe' ? 'bg-white/10 text-primary' : 'text-foreground/70'
              }`}
            >
              Webseiten
            </Link>
            <a
              href="#contact"
              className="px-6 py-2 gradient-primary rounded-lg font-medium hover:opacity-90 transition-opacity shadow-elevated"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;