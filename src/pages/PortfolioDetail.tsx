import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Globe, Palette, Zap, CheckCircle2, Star, Clock, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";

// Portfolio data - in a real app this would come from an API
const portfolioData = {
  "tech-startup-2025": {
    id: "tech-startup-2025",
    title: "TechFlow Solutions",
    description: "Moderne SaaS-Website für ein innovatives Tech-Startup mit interaktiven Dashboards und KI-Integration. Revolutionäre Benutzeroberfläche mit Echtzeit-Analytics und Machine Learning Features.",
    type: "SaaS-Website",
    language: "Deutsch",
    flag: "🇩🇪",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Prisma", "PostgreSQL"],
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
    category: "business",
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
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop&crop=center"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
    ]
  },
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
