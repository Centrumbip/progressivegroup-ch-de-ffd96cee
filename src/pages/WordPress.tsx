import Navigation from "@/components/Navigation";
import WordPressCare from "@/components/sections/WordPressCare";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";

const WordPress = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32">
        <WordPressCare />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default WordPress;
