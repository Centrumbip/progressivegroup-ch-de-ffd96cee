import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Globe, Palette, Zap, CheckCircle2, Star, Clock, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import portfolioTransport from "@/assets/portfolio-transport.jpg";
import portfolioRestaurant from "@/assets/portfolio-restaurant.jpg";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import portfolioPhotographer from "@/assets/portfolio-photographer.jpg";
import portfolioCorporate from "@/assets/portfolio-corporate.jpg";
import portfolioMedical from "@/assets/portfolio-medical.jpg";

// Portfolio data - in a real app this would come from an API
const portfolioData = {
  "transexpress-logistik": {
    id: "transexpress-logistik",
    title: "TransExpress Logistik",
    description: "Professionelle Transportwebsite mit modernem, responsivem Design. Umfassende Darstellung der Logistikdienstleistungen, Fuhrpark-Präsentation und integriertem Kontaktsystem für Anfragen.",
    type: "Transport-Website",
    language: "Deutsch",
    flag: "🇩🇪",
    image: portfolioTransport,
    technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "CSS3", "Responsive Design"],
    features: [
      "Moderne Fuhrpark-Präsentation",
      "Dienstleistungskatalog mit Details",
      "Kontaktformular für Transportanfragen",
      "Mobile-First responsives Design",
      "SEO-Optimierung für Transport-Keywords",
      "Integrierte Google Maps",
      "Schnelle Ladezeiten",
      "24/7 Verfügbarkeit"
    ],
    category: "business",
    client: "TransExpress Logistik GmbH",
    duration: "3 Wochen",
    team: "3 Entwickler",
    awards: ["Beste Transport-Website 2024"],
    challenges: [
      "Übersichtliche Darstellung komplexer Logistikdienstleistungen",
      "Integration von Fuhrpark-Management-System",
      "Mobile Optimierung für LKW-Fahrer"
    ],
    solutions: [
      "Klare Servicekategorien mit visuellen Icons",
      "Responsive Fuhrpark-Galerie",
      "One-Click Kontaktaufnahme"
    ],
    results: [
      "150% mehr Anfragen über die Website",
      "Reduzierung der Telefonanfragen um 40%",
      "95% mobile Nutzer"
    ],
    screenshots: [],
    gallery: []
  },
  "bella-cucina-restaurant": {
    id: "bella-cucina-restaurant",
    title: "La Bella Cucina",
    description: "Elegante Restaurant-Website mit ansprechendem Design und appetitlicher Fotografie. Perfekt präsentiert das Speiseangebot mit Online-Reservierungssystem und Öffnungszeiten.",
    type: "Restaurant-Website",
    language: "Deutsch",
    flag: "🇩🇪",
    image: portfolioRestaurant,
    technologies: ["React", "Tailwind CSS", "TypeScript", "Node.js", "Reservation System"],
    features: [
      "Elegantes Menü mit Fotogalerie",
      "Online-Reservierungssystem",
      "Öffnungszeiten und Standort",
      "Mehrsprachige Unterstützung",
      "Mobile-optimiert für Restaurantbesucher",
      "Integration mit Google Business",
      "Social Media Verknüpfung",
      "Saisonale Menü-Updates"
    ],
    category: "restaurant",
    client: "La Bella Cucina Restaurant",
    duration: "4 Wochen",
    team: "2 Entwickler",
    awards: ["Design Excellence Award 2024"],
    challenges: [
      "Appetitliche Präsentation der Speisekarte",
      "Einfaches Reservierungssystem",
      "Mehrsprachigkeit für Touristen"
    ],
    solutions: [
      "Professionelle Food-Fotografie Integration",
      "Intuitives Buchungssystem mit Kalender",
      "DE/EN/IT Sprachversionen"
    ],
    results: [
      "200% mehr Online-Reservierungen",
      "Durchschnittlich 50 Buchungen pro Tag",
      "4.9/5 Sterne bei Google Reviews"
    ],
    screenshots: [],
    gallery: []
  },
  "stylehub-fashion": {
    id: "stylehub-fashion",
    title: "StyleHub Fashion",
    description: "Moderner E-Commerce-Shop für Mode mit benutzerfreundlichem Design. Umfassende Produktkategorien, Filter, Warenkorb und sichere Zahlungsintegration für optimales Shopping-Erlebnis.",
    type: "E-Commerce",
    language: "Deutsch",
    flag: "🇩🇪",
    image: portfolioEcommerce,
    technologies: ["Shopify", "React", "TypeScript", "Stripe", "Payment Gateway", "Inventory System"],
    features: [
      "Produktkatalog mit Filtern",
      "Warenkorb und Checkout-System",
      "Sichere Zahlungsintegration",
      "Bestandsverwaltung in Echtzeit",
      "Kundenkonto-System",
      "Responsive für alle Geräte",
      "SEO-optimierte Produktseiten",
      "Newsletter-Integration"
    ],
    category: "ecommerce",
    client: "StyleHub Fashion GmbH",
    duration: "6 Wochen",
    team: "4 Entwickler",
    awards: ["Best E-Commerce Platform 2024"],
    challenges: [
      "Große Produktdatenbank effizient verwalten",
      "Schnelle Ladezeiten trotz vieler Bilder",
      "Sichere Payment-Integration"
    ],
    solutions: [
      "Image Lazy Loading und Optimization",
      "CDN für schnelle Auslieferung",
      "Stripe Payment Gateway"
    ],
    results: [
      "500+ Bestellungen in der ersten Woche",
      "Conversion Rate von 3.5%",
      "Durchschnittlicher Warenkorb: 150 CHF"
    ],
    screenshots: [],
    gallery: []
  },
  "lens-light-studio": {
    id: "lens-light-studio",
    title: "Lens & Light Studio",
    description: "Kreatives Fotografen-Portfolio mit minimalistischem Design und beeindruckender Bildgalerie im Masonry-Layout. Perfekte Präsentation der fotografischen Arbeiten mit Service-Paketen.",
    type: "Portfolio-Website",
    language: "Deutsch",
    flag: "🇩🇪",
    image: portfolioPhotographer,
    technologies: ["Next.js", "React", "Tailwind CSS", "Lightbox Gallery", "CMS Integration"],
    features: [
      "Masonry-Galerie für Fotos",
      "Lightbox für Vollbildansicht",
      "Service-Paket-Darstellung",
      "Kontaktformular für Buchungen",
      "Portfolio-Kategorien",
      "Schnelle Bildoptimierung",
      "SEO für Fotografen",
      "Instagram Feed Integration"
    ],
    category: "portfolio",
    client: "Lens & Light Photography Studio",
    duration: "2 Wochen",
    team: "2 Entwickler",
    awards: ["Portfolio Excellence 2024"],
    challenges: [
      "Hochauflösende Bilder ohne Performance-Verlust",
      "Elegante Galerie-Navigation",
      "Mobile Bilddarstellung"
    ],
    solutions: [
      "Next.js Image Optimization",
      "Masonry Grid Layout",
      "Touch-optimierte Mobile Gallery"
    ],
    results: [
      "300% mehr Buchungsanfragen",
      "Portfolio erreicht 100k Aufrufe pro Monat",
      "Featured in Top Photography Blogs"
    ],
    screenshots: [],
    gallery: []
  },
  "proconsult-partners": {
    id: "proconsult-partners",
    title: "ProConsult Partners",
    description: "Professionelle Unternehmenswebsite für Beratungsfirma mit klarem, geschäftlichem Design. Umfassende Darstellung der Dienstleistungen, Team-Präsentation und Karrierebereich.",
    type: "Unternehmens-Website",
    language: "Deutsch",
    flag: "🇩🇪",
    image: portfolioCorporate,
    technologies: ["WordPress", "PHP", "JavaScript", "MySQL", "Corporate CMS", "Multi-Page"],
    features: [
      "Multi-Page-Struktur",
      "Dienstleistungs-Übersicht",
      "Team-Präsentation mit Profilen",
      "Karrierebereich mit Stellenangeboten",
      "Blog-Integration",
      "Kontaktformulare",
      "SEO und Analytics-Integration",
      "Newsletter-System"
    ],
    category: "corporate",
    client: "ProConsult Partners AG",
    duration: "5 Wochen",
    team: "3 Entwickler",
    awards: ["Corporate Website Award 2024"],
    challenges: [
      "Professionelle Darstellung komplexer Beratungsdienstleistungen",
      "Integration von HR-System für Karrierebereich",
      "Multi-Language Support"
    ],
    solutions: [
      "Klare Service-Kategorisierung",
      "API-Integration mit HR-Software",
      "WPML für Mehrsprachigkeit"
    ],
    results: [
      "250% mehr qualifizierte Leads",
      "40 Bewerbungen über Karriereseite pro Monat",
      "Top 3 Google Ranking für Haupt-Keywords"
    ],
    screenshots: [],
    gallery: []
  },
  "medicare-wellness": {
    id: "medicare-wellness",
    title: "MediCare Wellness Zentrum",
    description: "Professionelle medizinische Website für Gesundheitszentrum mit vertrauenswürdigem Design. Online-Terminbuchung, Leistungsübersicht, Team-Vorstellung und umfassende Patienteninformationen.",
    type: "Medizin-Website",
    language: "Deutsch",
    flag: "🇩🇪",
    image: portfolioMedical,
    technologies: ["WordPress", "Appointment System", "PHP", "MySQL", "HIPAA Compliant", "Patient Portal"],
    features: [
      "Online-Terminbuchungssystem",
      "Leistungskatalog mit Details",
      "Team-Präsentation mit Qualifikationen",
      "Patientenportal-Integration",
      "DSGVO-konforme Datenverwaltung",
      "Mehrsprachige Unterstützung",
      "Mobile-optimiert für Patienten",
      "Zertifizierungen und Auszeichnungen"
    ],
    category: "business",
    client: "MediCare Wellness Zentrum",
    duration: "4 Wochen",
    team: "3 Entwickler",
    awards: ["Healthcare Website Excellence 2024"],
    challenges: [
      "DSGVO-konforme Patientendaten-Verwaltung",
      "Einfaches Online-Terminbuchungssystem",
      "Vertrauenswürdige Darstellung"
    ],
    solutions: [
      "Verschlüsselte Datenübertragung",
      "Kalender-Integration mit Arztverfügbarkeit",
      "Professionelle Zertifikats-Darstellung"
    ],
    results: [
      "180% mehr Online-Terminbuchungen",
      "Reduzierung Telefonanfragen um 60%",
      "4.8/5 Sterne Patientenbewertungen"
    ],
    screenshots: [],
    gallery: []
  }
};

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = portfolioData[id as keyof typeof portfolioData];

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Projekt nicht gefunden</h1>
          <p className="text-muted-foreground mb-8">Das angeforderte Projekt konnte nicht gefunden werden.</p>
          <Button asChild>
            <Link to="/strony-internetowe">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Portfolio
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/strony-internetowe">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Zurück zur Portfolio
                </Link>
              </Button>
              <Badge variant="secondary" className="bg-white/90 text-black">
                {project.flag} {project.language}
              </Badge>
              <Badge variant="outline" className="bg-white/90 text-black border-white/20">
                {project.type}
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="outline" asChild>
                <Link to="/strony-internetowe#contact">
                  Ähnliches Projekt anfragen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Technologies */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      Verwendete Technologien
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-sm py-2 px-4">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Features */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Hauptfunktionen
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Screenshots */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-primary" />
                        Screenshots der Website
                      </CardTitle>
                      <CardDescription>
                        Verschiedene Ansichten der fertigen Website
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {project.screenshots.slice(0, 4).map((screenshot, index) => (
                          <div key={index} className="space-y-3">
                            <h4 className="font-semibold text-sm text-foreground">
                              {index === 0 ? "Desktop Ansicht" : 
                               index === 1 ? "Mobile Ansicht" : 
                               index === 2 ? "Dashboard" : "Admin Panel"}
                            </h4>
                            <div className="aspect-video bg-muted rounded-lg overflow-hidden border">
                              <img 
                                src={screenshot}
                                alt={`${project.title} Screenshot ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Gallery */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="w-5 h-5 text-primary" />
                      Projektgalerie
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {project.gallery.map((image, index) => (
                        <div key={index} className="relative rounded-lg overflow-hidden group cursor-pointer">
                          <img 
                            src={image} 
                            alt={`${project.title} - Bild ${index + 1}`}
                            className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Project Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Projektinformationen</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Kunde</p>
                        <p className="text-sm text-muted-foreground">{project.client}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Dauer</p>
                        <p className="text-sm text-muted-foreground">{project.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Team</p>
                        <p className="text-sm text-muted-foreground">{project.team}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Awards */}
                {project.awards.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        Auszeichnungen
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {project.awards.map((award, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm text-muted-foreground">{award}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Results */}
                <Card>
                  <CardHeader>
                    <CardTitle>Ergebnisse</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="text-sm text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioDetail;
