import Navigation from "@/components/Navigation";
import WhyUs from "@/components/sections/WhyUs";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const KorzysciAutomatyzacji = () => {
  useEffect(() => {
    document.title = "Vorteile der Automatisierung — ProgressiveGroup";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-40 pb-12">
        <div className="absolute inset-0 transform-3d">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-20 animate-float" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zur Startseite</span>
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Vorteile der Automatisierung
            </span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-3xl">
            Die wichtigsten Vorteile der Prozessautomatisierung in Google Workspace für Ihr Unternehmen.
          </p>
        </div>
      </section>

      <WhyUs />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default KorzysciAutomatyzacji;
