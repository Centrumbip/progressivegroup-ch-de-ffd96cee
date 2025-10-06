import { useState } from "react";
import { ArrowRight, Globe, Palette, Zap, CheckCircle2, Star, Languages, Layout, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";
import { Badge } from "@/components/ui/badge";
import WebsiteOrderForm from "@/components/forms/WebsiteOrderForm";
import PriceCalculator from "@/components/PriceCalculator";
import PortfolioItem from "@/components/PortfolioItem";

const StronyInternetowe = () => {
  const [orderFormOpen, setOrderFormOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{ name: string; price: string }>({ name: "", price: "" });

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOrderClick = (name: string, price: string) => {
    setSelectedPackage({ name, price });
    setOrderFormOpen(true);
  };

const portfolioItems = [
  {
    id: "tech-startup-2025",
    title: "TechFlow Solutions",
    description: "Moderne SaaS-Website für ein innovatives Tech-Startup mit interaktiven Dashboards und KI-Integration. Revolutionäre Benutzeroberfläche mit Echtzeit-Analytics und Machine Learning Features für moderne Unternehmen.",
    type: "SaaS-Website",
    language: "Deutsch",
    flag: "🇩🇪",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Prisma", "PostgreSQL", "TensorFlow.js"],
    features: [
      "KI-gestützte Analytics Dashboard",
      "Real-time Datenvisualisierung", 
      "Multi-Tenant Architektur",
      "API-First Design",
      "Advanced Security Features",
      "Mobile-First Responsive Design",
      "Progressive Web App",
      "Machine Learning Integration"
    ],
    category: "business" as const,
    screenshots: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop&crop=center"
    ],
    client: "TechFlow Solutions GmbH",
    duration: "8 Wochen",
    team: "5 Entwickler",
    awards: ["Best SaaS Platform 2025", "Innovation Award", "UX Excellence"],
    challenges: [
      "Komplexe Datenvisualisierung benutzerfreundlich gestalten",
      "Skalierbare Multi-Tenant Architektur implementieren", 
      "KI-Features nahtlos integrieren"
    ],
    solutions: [
      "Modulare Dashboard-Komponenten",
      "Microservices-Architektur",
      "TensorFlow.js Integration für Client-Side ML"
    ],
    results: [
      "300% Steigerung der Benutzeraktivität",
      "50% schnellere Datenverarbeitung", 
      "99.9% Uptime erreicht"
    ]
  }
];

  const examples = [
    {
      title: "Rechtsanwaltskanzlei Schmidt & Partners",
      language: "Deutsch",
      type: "Visitenkarte-Website",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      flag: "🇩🇪"
    },
    {
      title: "Restaurant Le Gourmet Français",
      language: "Französisch",
      type: "Menü-Katalog",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      flag: "🇫🇷"
    },
    {
      title: "Casa de Arquitectura Moderna",
      language: "Spanisch",
      type: "Architektur-Portfolio",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
      flag: "🇪🇸"
    },
    {
      title: "Fotostudio Krakau",
      language: "Polnisch",
      type: "Portfolio-Galerie",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      flag: "🇵🇱"
    },
    {
      title: "Beratungsfirma Zürich",
      language: "Deutsch",
      type: "Multi-Page Unternehmenswebsite",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      flag: "🇩🇪"
    },
    {
      title: "Cabinet Médical Genève",
      language: "Französisch",
      type: "One-Page Klinik",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
      flag: "🇫🇷"
    },
    {
      title: "Agencia Inmobiliaria Barcelona",
      language: "Spanisch",
      type: "Immobilienkatalog",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
      flag: "🇪🇸"
    },
    {
      title: "Premium Autowerkstatt",
      language: "Polnisch",
      type: "Landing Page",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800",
      flag: "🇵🇱"
    }
  ];

  const pricing = [
    {
      name: "One-Page",
      price: "2'500 - 4'000",
      description: "Ideal für kleine Unternehmen und Freelancer",
      features: [
        "1 Seite mit Sektionen",
        "Responsives Design",
        "Kontaktformular",
        "Basis-SEO-Optimierung",
        "Jahres-Hosting gratis",
        "Kostenloses SSL-Zertifikat",
        "Google Analytics",
        "Google Maps-Integration",
        "Content-Management-Panel",
        "Cookie-Banner und DSGVO-Konformität",
        "Realisierungszeit: 5-7 Tage"
      ],
      popular: false
    },
    {
      name: "Visitenkarte-Website",
      price: "4'000 - 8'000",
      description: "Professionelle Unternehmenspräsentation",
      features: [
        "Bis zu 5 Unterseiten",
        "Modernes individuelles Design",
        "Erweitertes CMS zur Inhaltsverwaltung",
        "Erweiterte SEO (Meta-Tags, schema.org)",
        "Blog optional",
        "Google Maps-Integration",
        "Google Analytics + Search Console",
        "Fotogalerie",
        "Jahres-Premium-Hosting gratis",
        "Kostenloses SSL-Zertifikat",
        "Mehrsprachigkeitsunterstützung",
        "Cookie-Banner und volle DSGVO-Konformität",
        "Realisierungszeit: 10-14 Tage"
      ],
      popular: true
    },
    {
      name: "Katalog-Website",
      price: "6'000 - 12'000",
      description: "Umfangreicher Produkt-/Dienstleistungskatalog",
      features: [
        "Bis zu 15 Unterseiten",
        "Kategorie- und Tag-System",
        "Erweiterte Galerie mit Lightbox",
        "Produkt-/Dienstleistungssuche",
        "Filter und erweiterte Sortierung",
        "Vollständiges Admin-Panel (CMS)",
        "SEO für jede Produktseite",
        "Integrierte Mehrsprachigkeit",
        "Integrationen: Google Maps, Analytics, Tag Manager",
        "In System integrierter Blog",
        "Jahres-Premium-Hosting gratis",
        "Kostenloses SSL-Zertifikat",
        "Automatisches Backup",
        "Cookie-Banner und volle DSGVO-Konformität",
        "Realisierungszeit: 3-4 Wochen"
      ],
      popular: false
    },
    {
      name: "Landing Page",
      price: "2'000 - 3'500",
      description: "Effektive Verkaufsseite",
      features: [
        "1 Seite optimiert für Konversion",
        "A/B-Testing-Bereitschaft",
        "Integration mit Google/Facebook Ads",
        "Strategisch platzierte Call-to-Action-Buttons",
        "Lead-Generation-Formulare",
        "Google Analytics + Konversionen",
        "Pixel-Tracking (Facebook, LinkedIn)",
        "Jahres-Hosting gratis",
        "Kostenloses SSL-Zertifikat",
        "Cookie-Banner und DSGVO-Konformität",
        "Realisierungszeit: 3-5 Tage"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Mehrsprachigkeit",
      description: "Wir erstellen Websites in vielen europäischen Sprachen - Deutsch, Französisch, Spanisch, Italienisch, Polnisch und andere"
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Alle Websites voll responsiv und für mobile Geräte optimiert"
    },
    {
      icon: Zap,
      title: "Schnelles Laden",
      description: "Leistungsoptimierung - Ihre Website lädt blitzschnell"
    },
    {
      icon: Palette,
      title: "Individuelles Design",
      description: "Einzigartiges grafisches Design, angepasst an Ihre Marke und Branche"
    },
    {
      icon: CheckCircle2,
      title: "SEO & Marketing",
      description: "Basis-SEO-Optimierung im Standard - hohe Position bei Google"
    },
    {
      icon: Layout,
      title: "CMS im Standard",
      description: "Benutzerfreundliches Panel zur selbstständigen Aktualisierung von Inhalten"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Bedarfsanalyse",
      description: "Kostenlose Beratung - wir lernen Ihre Erwartungen und Geschäftsziele kennen"
    },
    {
      step: "02",
      title: "Grafisches Design",
      description: "Wir erstellen ein individuelles Design, angepasst an Ihre Marke"
    },
    {
      step: "03",
      title: "Umsetzung",
      description: "Codierung der Website unter Einhaltung höchster Standards"
    },
    {
      step: "04",
      title: "Tests und Launch",
      description: "Wir überprüfen alles und veröffentlichen Ihre Website im Netz"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto text-center max-w-5xl">
          <Badge className="mb-4 text-lg px-4 py-2">Professionelle Websites</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in">
            Ihre Visitenkarte im Netz
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto animate-fade-in">
            Wir erstellen moderne Websites in mehreren europäischen Sprachen. 
            Deutsch, Französisch, Spanisch, Italienisch, Polnisch und andere - wir passen uns Ihren Bedürfnissen an.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="xl" variant="hero" onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })} className="gap-2">
              Preisrechner <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="xl" variant="outline-hero" onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>
              Referenzen ansehen
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 justify-center text-sm">
            <div className="flex items-center gap-2">
              <Languages className="w-5 h-5 text-primary" />
              <span>Mehrsprachigkeit</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span>Schnelle Umsetzung</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              <span>Individuelles Design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Warum wir?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <benefit.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Unsere Referenzen
            </h2>
            <p className="text-xl text-foreground/70">
              Portfolio von Websites in verschiedenen Sprachen
            </p>
          </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {portfolioItems.map((item) => (
            <PortfolioItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              type={item.type}
              language={item.language}
              flag={item.flag}
              image={item.image}
              technologies={item.technologies}
              features={item.features}
              liveUrl={item.liveUrl}
              category={item.category}
              screenshots={item.screenshots}
            />
          ))}
        </div>
        </div>
      </section>

      {/* Price Calculator Section */}
      <section id="calculator" className="py-20 px-6 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto">
          <PriceCalculator />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Pakete
            </h2>
            <p className="text-xl text-foreground/70">
              Wählen Sie ein Paket und füllen Sie das Kontaktformular aus
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {pricing.map((plan, index) => (
              <Card 
                key={index} 
                className={`glass-card relative ${plan.popular ? 'border-primary border-2 shadow-elevated' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="gradient-primary px-4 py-1">Am beliebtesten</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold gradient-text my-4">
                    {plan.price} CHF
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6" 
                    variant={plan.popular ? "hero" : "outline"}
                    onClick={() => handleOrderClick(plan.name, plan.price)}
                  >
                    Formular ausfüllen
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center glass-card rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Zusätzliche Optionen</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Languages className="w-5 h-5 text-primary" />
                  Mehrsprachige Version
                </h4>
                <p className="text-foreground/70 text-sm">+30-50% zum Basispreis (abhängig von der Anzahl der Sprachen)</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  After-Sales-Betreuung
                </h4>
                <p className="text-foreground/70 text-sm">Ab 100 CHF/Monat - Updates, technischer Support</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Express-Lieferung
                </h4>
                <p className="text-foreground/70 text-sm">+40% zum Preis - Realisierung in 2-4 Arbeitstagen</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Migration alter Website
                </h4>
                <p className="text-foreground/70 text-sm">Ab 500 CHF - Übertragung von Inhalten der aktuellen Website</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Wie arbeiten wir?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="glass-card rounded-xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-5xl font-bold gradient-text mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-sm">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="glass-card rounded-2xl p-12 text-center max-w-4xl mx-auto gradient-primary">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Bereit für eine professionelle Website?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Kontaktieren Sie uns und erhalten Sie ein kostenloses Angebot innerhalb von 24h
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="xl" 
                variant="outline-hero"
                onClick={scrollToContact}
                className="bg-white hover:bg-white/90 text-primary border-0"
              >
                Anfrage senden
              </Button>
              <a href="mailto:info@progressivegroup.ch">
                <Button 
                  size="xl" 
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  info@progressivegroup.ch
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />

      <WebsiteOrderForm 
        open={orderFormOpen}
        onOpenChange={setOrderFormOpen}
        packageName={selectedPackage.name}
        basePrice={selectedPackage.price}
      />
    </div>
  );
};

export default StronyInternetowe;
