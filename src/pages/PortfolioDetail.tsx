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
    description: "Deutsche Transportwebsite mit modernem Design. Professionelle Präsentation der Logistikdienstleistungen mit Fuhrpark-Galerie und Kontaktsystem für den deutschen Markt.",
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
      "SEO-Optimierung für deutsche Keywords",
      "Integrierte Google Maps",
      "Schnelle Ladezeiten",
      "Deutsche Sprache und Lokalisierung"
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
    description: "Schweizer Restaurant-Website mit elegantem Design. Speisekarte, Online-Reservierung und mehrsprachige Unterstützung für die mehrsprachige Schweiz (DE/FR/IT).",
    type: "Restaurant-Website",
    language: "Schweizerdeutsch / Français / Italiano",
    flag: "🇨🇭",
    image: portfolioRestaurant,
    technologies: ["React", "Tailwind CSS", "TypeScript", "Node.js", "WPML", "Reservation System"],
    features: [
      "Elegantes Menü mit Fotogalerie",
      "Online-Reservierungssystem",
      "Dreisprachig: DE/FR/IT",
      "Schweizer Währung (CHF)",
      "Mobile-optimiert für Restaurantbesucher",
      "Integration mit Google Business",
      "Social Media Verknüpfung",
      "Saisonale Menü-Updates"
    ],
    category: "restaurant",
    client: "La Bella Cucina, Zürich",
    duration: "4 Wochen",
    team: "3 Entwickler",
    awards: ["Swiss Restaurant Website Award 2024"],
    challenges: [
      "Mehrsprachigkeit für DE/FR/IT umsetzen",
      "Einfaches Reservierungssystem für alle Sprachen",
      "Schweizer Zahlungsmethoden integrieren"
    ],
    solutions: [
      "WPML Plugin für nahtlose Übersetzungen",
      "Sprachspezifische Reservierungsformulare",
      "Integration mit Schweizer Payment-Providern"
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
    title: "StyleHub Fashion Boutique",
    description: "Schweizer E-Commerce-Shop mit CHF-Währung und lokaler Zahlungsintegration. Modernes Design für den Schweizer Fashion-Markt mit Twint und PostFinance.",
    type: "E-Commerce",
    language: "Deutsch (Schweiz)",
    flag: "🇨🇭",
    image: portfolioEcommerce,
    technologies: ["Shopify", "React", "TypeScript", "Stripe", "Twint", "PostFinance", "Swiss Post API"],
    features: [
      "Produktkatalog mit Filtern",
      "CHF-Währung und Schweizer Preise",
      "Twint & PostFinance Integration",
      "Schweizer Versandoptionen (Post, DPD)",
      "Kundenkonto-System",
      "Responsive für alle Geräte",
      "SEO-optimiert für .ch Domain",
      "Newsletter mit SwissPost Integration"
    ],
    category: "ecommerce",
    client: "StyleHub Fashion Boutique, Basel",
    duration: "6 Wochen",
    team: "4 Entwickler",
    awards: ["Best Swiss E-Commerce 2024"],
    challenges: [
      "Schweizer Zahlungsmethoden integrieren (Twint, PostFinance)",
      "CHF-Preisgestaltung und Schweizer MwSt.",
      "Lokale Versandoptionen mit Swiss Post"
    ],
    solutions: [
      "Twint & PostFinance API Integration",
      "Schweizer Steuersystem-Automatisierung",
      "Swiss Post Tracking Integration"
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
    title: "Lens & Light Studio London",
    description: "Englisches Fotografen-Portfolio mit minimalistischem Design. Professionelle Galerie für den britischen und internationalen Markt mit mehrsprachiger Unterstützung.",
    type: "Portfolio Website",
    language: "English",
    flag: "🇬🇧",
    image: portfolioPhotographer,
    technologies: ["Next.js", "React", "Tailwind CSS", "Lightbox Gallery", "Vercel", "CMS Integration"],
    features: [
      "Masonry Gallery for Photos",
      "Lightbox for Full View",
      "Service Package Display",
      "Contact Form for Bookings",
      "Portfolio Categories (Wedding, Corporate, Events)",
      "Fast Image Optimization",
      "SEO for UK Market",
      "Instagram Feed Integration"
    ],
    category: "portfolio",
    client: "Lens & Light Photography Studio, London",
    duration: "3 Weeks",
    team: "2 Developers",
    awards: ["UK Portfolio Excellence 2024"],
    challenges: [
      "High-resolution images without performance loss",
      "Elegant gallery navigation for mobile",
      "SEO optimization for UK photography market"
    ],
    solutions: [
      "Next.js Image Optimization with Vercel CDN",
      "Responsive Masonry Grid Layout",
      "Touch-optimized Mobile Gallery with Swipe"
    ],
    results: [
      "300% increase in booking inquiries",
      "Portfolio reaches 100k views per month",
      "Featured in Top UK Photography Blogs"
    ],
    screenshots: [],
    gallery: []
  },
  "proconsult-partners": {
    id: "proconsult-partners",
    title: "Asesoría Empresarial Madrid",
    description: "Página web corporativa española para consultoría empresarial. Diseño profesional con presentación de servicios, equipo y área de carrera para el mercado hispanohablante.",
    type: "Sitio Web Corporativo",
    language: "Español",
    flag: "🇪🇸",
    image: portfolioCorporate,
    technologies: ["WordPress", "PHP", "JavaScript", "MySQL", "Corporate CMS", "Multi-Page", "WPML"],
    features: [
      "Estructura Multi-Página",
      "Descripción detallada de Servicios",
      "Presentación del Equipo con perfiles",
      "Sección de Carreras y ofertas laborales",
      "Blog Integrado en español",
      "Formularios de Contacto",
      "SEO optimizado para España",
      "Newsletter y Analytics"
    ],
    category: "corporate",
    client: "Asesoría Empresarial Madrid S.L.",
    duration: "5 Semanas",
    team: "3 Desarrolladores",
    awards: ["Premio Web Corporativa España 2024"],
    challenges: [
      "Presentación profesional de servicios complejos de consultoría",
      "Integración con sistema de RR.HH. para área de carreras",
      "SEO competitivo en mercado español"
    ],
    solutions: [
      "Categorización clara de servicios con iconos visuales",
      "Integración API con software de RR.HH.",
      "SEO técnico y marketing de contenidos"
    ],
    results: [
      "250% más leads cualificados",
      "40 solicitudes de empleo mensuales",
      "Top 3 en Google para palabras clave principales"
    ],
    screenshots: [],
    gallery: []
  },
  "medicare-wellness": {
    id: "medicare-wellness",
    title: "Cabinet Médical Genève",
    description: "Site web médical français pour cabinet de santé à Genève. Système de prise de rendez-vous en ligne, présentation des services et informations patients en français.",
    type: "Site Médical",
    language: "Français",
    flag: "🇫🇷",
    image: portfolioMedical,
    technologies: ["WordPress", "Appointment System", "PHP", "MySQL", "HIPAA Compliant", "Patient Portal", "Calendly"],
    features: [
      "Système de réservation en ligne",
      "Catalogue des services médicaux",
      "Présentation de l'équipe médicale",
      "Portail patient intégré",
      "Conforme RGPD et réglementations suisses",
      "Support multilingue (FR/DE)",
      "Optimisé mobile pour patients",
      "Certifications et accréditations"
    ],
    category: "business",
    client: "Cabinet Médical Genève",
    duration: "4 Semaines",
    team: "3 Développeurs",
    awards: ["Excellence Site Médical Suisse 2024"],
    challenges: [
      "Conformité RGPD pour données patients sensibles",
      "Système de réservation en ligne simple et sécurisé",
      "Présentation professionnelle et rassurante"
    ],
    solutions: [
      "Chiffrement SSL et transfert sécurisé des données",
      "Intégration Calendly avec disponibilité médicale",
      "Design professionnel avec certifications visibles"
    ],
    results: [
      "180% d'augmentation des réservations en ligne",
      "Réduction de 60% des appels téléphoniques",
      "Note moyenne de 4.8/5 étoiles par les patients"
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
