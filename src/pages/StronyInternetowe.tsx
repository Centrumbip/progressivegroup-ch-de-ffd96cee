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

  const examples = [
    {
      title: "Kancelaria Prawna Schmidt & Partners",
      language: "Niemiecki",
      type: "Strona wizytówka",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      flag: "🇩🇪"
    },
    {
      title: "Restaurant Le Gourmet Français",
      language: "Francuski",
      type: "Katalog menu",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      flag: "🇫🇷"
    },
    {
      title: "Casa de Arquitectura Moderna",
      language: "Hiszpański",
      type: "Portfolio architektoniczne",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
      flag: "🇪🇸"
    },
    {
      title: "Studio Fotograficzne Kraków",
      language: "Polski",
      type: "Galeria portfolio",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      flag: "🇵🇱"
    },
    {
      title: "Beratungsfirma Zürich",
      language: "Niemiecki",
      type: "Strona firmowa multi-page",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      flag: "🇩🇪"
    },
    {
      title: "Cabinet Médical Genève",
      language: "Francuski",
      type: "One-page klinika",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
      flag: "🇫🇷"
    },
    {
      title: "Agencia Inmobiliaria Barcelona",
      language: "Hiszpański",
      type: "Katalog nieruchomości",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
      flag: "🇪🇸"
    },
    {
      title: "Warsztat Samochodowy Premium",
      language: "Polski",
      type: "Landing page",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800",
      flag: "🇵🇱"
    }
  ];

  const pricing = [
    {
      name: "One-Page",
      price: "2'500 - 4'000",
      description: "Idealna dla małych firm i freelancerów",
      features: [
        "1 strona z sekcjami",
        "Responsywny design",
        "Formularz kontaktowy",
        "Optymalizacja SEO podstawowa",
        "Roczny hosting gratis",
        "Darmowy certyfikat SSL",
        "Google Analytics",
        "Integracja z Google Maps",
        "Panel do edycji treści",
        "Baner Cookies i zgoda GDPR",
        "Czas realizacji: 5-7 dni"
      ],
      popular: false
    },
    {
      name: "Strona Wizytówka",
      price: "4'000 - 8'000",
      description: "Profesjonalna prezentacja firmy",
      features: [
        "Do 5 podstron",
        "Nowoczesny indywidualny design",
        "Zaawansowany CMS do zarządzania treścią",
        "Zaawansowane SEO (meta tagi, schema.org)",
        "Blog opcjonalnie",
        "Integracja z Google Maps",
        "Google Analytics + Search Console",
        "Galeria zdjęć",
        "Roczny hosting premium gratis",
        "Darmowy certyfikat SSL",
        "Wsparcie wielojęzyczności",
        "Baner Cookies i pełna zgodność GDPR",
        "Czas realizacji: 10-14 dni"
      ],
      popular: true
    },
    {
      name: "Strona Katalogowa",
      price: "6'000 - 12'000",
      description: "Rozbudowany katalog produktów/usług",
      features: [
        "Do 15 podstron",
        "System kategorii i tagów",
        "Zaawansowana galeria z lightbox",
        "Wyszukiwarka produktów/usług",
        "Filtry i zaawansowane sortowanie",
        "Pełny panel administracyjny (CMS)",
        "SEO dla każdej strony produktowej",
        "Wielojęzyczność wbudowana",
        "Integracje: Google Maps, Analytics, Tag Manager",
        "Blog zintegrowany z systemem",
        "Roczny hosting premium gratis",
        "Darmowy certyfikat SSL",
        "Backup automatyczny",
        "Baner Cookies i pełna zgodność GDPR",
        "Czas realizacji: 3-4 tygodnie"
      ],
      popular: false
    },
    {
      name: "Landing Page",
      price: "2'000 - 3'500",
      description: "Skuteczna strona sprzedażowa",
      features: [
        "1 strona zoptymalizowana pod konwersję",
        "A/B testing gotowość",
        "Integracja z Google/Facebook Ads",
        "Call-to-action buttons strategicznie umieszczone",
        "Lead generation formularze",
        "Google Analytics + konwersje",
        "Pixel tracking (Facebook, LinkedIn)",
        "Roczny hosting gratis",
        "Darmowy certyfikat SSL",
        "Baner Cookies i zgoda GDPR",
        "Czas realizacji: 3-5 dni"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Wielojęzyczność",
      description: "Tworzymy strony w wielu językach europejskich - niemiecki, francuski, hiszpański, włoski, polski i inne"
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Wszystkie strony w pełni responsywne i zoptymalizowane pod urządzenia mobilne"
    },
    {
      icon: Zap,
      title: "Szybkie Ładowanie",
      description: "Optymalizacja wydajności - twoja strona ładuje się błyskawicznie"
    },
    {
      icon: Palette,
      title: "Indywidualny Design",
      description: "Unikalny projekt graficzny dopasowany do Twojej marki i branży"
    },
    {
      icon: CheckCircle2,
      title: "SEO & Marketing",
      description: "Podstawowa optymalizacja SEO w standardzie - wysoka pozycja w Google"
    },
    {
      icon: Layout,
      title: "CMS w standardzie",
      description: "Łatwy w obsłudze panel do samodzielnej aktualizacji treści"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Analiza potrzeb",
      description: "Bezpłatna konsultacja - poznajemy Twoje oczekiwania i cele biznesowe"
    },
    {
      step: "02",
      title: "Projekt graficzny",
      description: "Tworzymy indywidualny design dopasowany do Twojej marki"
    },
    {
      step: "03",
      title: "Realizacja",
      description: "Kodowanie strony z zachowaniem najwyższych standardów"
    },
    {
      step: "04",
      title: "Testy i uruchomienie",
      description: "Sprawdzamy wszystko i publikujemy Twoją stronę w sieci"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto text-center max-w-5xl">
          <Badge className="mb-4 text-lg px-4 py-2">Profesjonalne Strony Internetowe</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in">
            Twoja Wizytówka w Sieci
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto animate-fade-in">
            Tworzymy nowoczesne strony internetowe w wielu językach europejskich. 
            Niemiecki, francuski, hiszpański, włoski, polski i inne - dopasowujemy się do Twoich potrzeb.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="xl" variant="hero" onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })} className="gap-2">
              Generator wyceny <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="xl" variant="outline-hero" onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>
              Zobacz realizacje
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 justify-center text-sm">
            <div className="flex items-center gap-2">
              <Languages className="w-5 h-5 text-primary" />
              <span>Wielojęzyczność</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span>Szybka realizacja</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              <span>Indywidualny design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Dlaczego My?
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
              Nasze Realizacje
            </h2>
            <p className="text-xl text-foreground/70">
              Portfolio stron internetowych w różnych językach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {examples.map((example, index) => (
              <Card key={index} className="glass-card overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={example.image} 
                    alt={example.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 text-4xl">{example.flag}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <Badge className="mb-2">{example.type}</Badge>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{example.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Languages className="w-4 h-4" />
                    {example.language}
                  </CardDescription>
                </CardHeader>
              </Card>
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
              Pakiety
            </h2>
            <p className="text-xl text-foreground/70">
              Wybierz pakiet i wypełnij formularz kontaktowy
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
                    <Badge className="gradient-primary px-4 py-1">Najpopularniejsze</Badge>
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
                    Wypełnij formularz
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center glass-card rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Dodatkowe Opcje</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Languages className="w-5 h-5 text-primary" />
                  Wersja wielojęzyczna
                </h4>
                <p className="text-foreground/70 text-sm">+30-50% do ceny bazowej (w zależności od liczby języków)</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Opieka posprzedażowa
                </h4>
                <p className="text-foreground/70 text-sm">Od 100 CHF/miesiąc - aktualizacje, wsparcie techniczne</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Express delivery
                </h4>
                <p className="text-foreground/70 text-sm">+40% do ceny - realizacja w 2-4 dni robocze</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Migracja starej strony
                </h4>
                <p className="text-foreground/70 text-sm">Od 500 CHF - transfer treści z obecnej strony</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Jak Pracujemy?
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
              Gotowy na profesjonalną stronę?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Skontaktuj się z nami i otrzymaj bezpłatną wycenę w 24h
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="xl" 
                variant="outline-hero"
                onClick={scrollToContact}
                className="bg-white hover:bg-white/90 text-primary border-0"
              >
                Wyślij zapytanie
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
