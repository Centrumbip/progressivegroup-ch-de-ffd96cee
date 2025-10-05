import Navigation from "@/components/Navigation";
import ModernHero from "@/components/sections/ModernHero";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ModernHero />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
