import About from "@/components/sections/About";
import Automations from "@/components/sections/Automations";
import WhyUs from "@/components/sections/WhyUs";
import CaseStudy from "@/components/sections/CaseStudy";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";
import Navigation from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Automatyzacje = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 transform-3d">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-20 animate-float" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Powrót do strony głównej</span>
          </Link>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Automatyzacje
            </span>
            <br />
            <span className="text-foreground/90">Google Workspace</span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-3xl mb-8 animate-fade-in animate-delay-100">
            Eliminujemy powtarzalne zadania i usprawniamy codzienną pracę Twojej firmy
            dzięki inteligentnym automatyzacjom.
          </p>
        </div>
      </section>

      <About />
      <Automations />
      <WhyUs />
      <CaseStudy />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Automatyzacje;