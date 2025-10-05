import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { ChevronDown, Zap, Clock, DollarSign } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-secondary/20 animate-pulse animate-delay-200"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 rounded-full bg-accent/20 animate-pulse animate-delay-400"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 rounded-full bg-primary/15 animate-pulse animate-delay-100"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center z-10">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8 animate-fade-in">
          <img src={logo} alt="ProgressiveGroup Logo" className="h-[110px]" />
        </div>
        
        {/* Main heading */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in animate-delay-200">
          Automatyzacje w{" "}
          <span className="text-primary">
            Google Workspace
          </span>
        </h2>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto animate-fade-in animate-delay-300">
          oszczędzaj czas i pieniądze, rozwijaj swój biznes
        </p>
        
        {/* Description */}
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in animate-delay-400">
          Wdrażamy rozwiązania, które eliminują powtarzalne zadania i usprawniają codzienną pracę
        </p>
        
        {/* Benefits icons */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12 animate-fade-in animate-delay-500">
          <div className="flex items-center space-x-2 text-primary">
            <Clock className="w-6 h-6" />
            <span className="text-sm font-medium">Oszczędź czas</span>
          </div>
          <div className="flex items-center space-x-2 text-primary">
            <DollarSign className="w-6 h-6" />
            <span className="text-sm font-medium">Zmniejsz koszty</span>
          </div>
          <div className="flex items-center space-x-2 text-primary">
            <Zap className="w-6 h-6" />
            <span className="text-sm font-medium">Automatyzuj procesy</span>
          </div>
        </div>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animate-delay-600">
          <Button 
            className={buttonVariants({ variant: "hero", size: "xl" })}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Dowiedz się więcej
          </Button>
          <Button 
            className={buttonVariants({ variant: "outline-hero", size: "xl" })}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Umów konsultację
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;