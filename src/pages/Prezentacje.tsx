import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import { ArrowLeft, FileText, Presentation, BarChart3, Building2, CheckCircle, TrendingUp, Clock, DollarSign, Mic, Languages, Award, Play, ChevronDown, Users, Target, Zap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const presentationTypes = [{
  icon: Presentation,
  badge: "Startups & Fundraising",
  title: "Pitch Deck",
  idealFor: ["Startups auf Investorensuche (Seed, Series A/B/C)", "Präsentationen für VCs und Business Angels", "Demo Days und Startup-Wettbewerbe"],
  includes: ["10-15 Folien (Struktur: Problem → Solution → Market → Traction → Team → Ask)", "Storytelling nach Guy Kawasaki Methodik (10/20/30 Regel)", "Financial Projections mit professioneller Visualisierung", "Competitive Analysis und Market Positioning", "Bearbeitbare Quelldateien (PPTX + PDF)"],
  voiceOver: "Empfohlen für: Pitch Videos, Social Media, Pre-Meeting Materials",
  voiceOverCost: "CHF 150-225 (10-15 Folien)",
  price: "ab CHF 2,500",
  timeline: "5-7 Arbeitstage"
}, {
  icon: TrendingUp,
  badge: "Verkaufspräsentationen",
  title: "Sales Deck",
  idealFor: ["B2B-Vertriebsteams", "Produkt- und Dienstleistungspräsentationen", "Meetings mit Enterprise-Kunden", "Geschäftsangebote"],
  includes: ["15-25 Folien (Value Proposition → Features/Benefits → Case Studies → Pricing)", "Social Proof (Testimonials, Kundenlogos, Case Studies)", "ROI-Rechner und Wettbewerbsvergleiche", "Pricing-Folien mit flexiblen Varianten", "Branding gemäß Ihrer visuellen Identität", "Alle Formate + Symbole (500+ Bibliothek)"],
  voiceOver: "Empfohlen für: Auto-Play-Präsentationen, Webinare, Produktdemos",
  voiceOverCost: "CHF 300-450 (15-20 Folien)",
  price: "ab CHF 1,800",
  timeline: "5-7 Arbeitstage"
}, {
  icon: BarChart3,
  badge: "Jahresberichte",
  title: "Annual Report",
  idealFor: ["Board Meetings und Managementberichte", "Aktionärspräsentationen", "Quarterly Business Reviews (QBR)", "Investor Updates"],
  includes: ["20-40 Folien (umfassender Jahresüberblick)", "Datenvisualisierung (Charts, KPI-Dashboards, Infografiken)", "Jahresvergleiche mit Insights", "Financial Highlights und operative Kennzahlen", "Strategy Roadmap für das kommende Jahr", "Executive Summary (1-Pager)"],
  voiceOver: "Empfohlen für: Board Meetings, Investor Calls, Video-Berichte",
  voiceOverCost: "CHF 450-700 (20-30 Folien)",
  price: "ab CHF 3,500",
  timeline: "7-10 Arbeitstage"
}, {
  icon: Building2,
  badge: "Corporate Präsentationen",
  title: "Corporate Presentation",
  idealFor: ["Unternehmensübersichtspräsentationen", "Interne Schulungsunterlagen", "Konferenzpräsentationen", "Partnerschaften & Kooperationen"],
  includes: ["10-30 Folien (flexibel, an Bedürfnisse angepasst)", "Custom Branded Templates (Master-Folien zur weiteren Nutzung)", "Icon-Bibliothek & Grafiken im Firmenstil", "Einheitliche visuelle Sprache", "Bearbeitbare Komponenten", "Nutzungsrichtlinien (wie man selbst bearbeitet)"],
  voiceOver: "Empfohlen für: E-Learning, Onboarding, Konferenzvorträge",
  voiceOverCost: "CHF 150-450 (10-30 Folien)",
  price: "ab CHF 1,500",
  timeline: "4-6 Arbeitstage"
}];
const pricingPackages = [{
  name: "Start",
  badge: "Für kleine Projekte",
  price: "CHF 1,200",
  slides: "10",
  concepts: "1",
  revisions: "2 Runden",
  timeline: "4-5 Tage",
  includes: ["10 individuelle Folien", "1 Konzept zur Auswahl", "2 Überarbeitungsrunden", "Alle Formate (PPTX, PDF, Keynote, Google Slides)", "Grundlegende Symbole und Grafiken"],
  notIncluded: ["Animationen", "Brand Guidelines", "Master Templates"],
  voiceOverEstimate: "ab CHF 150",
  popular: false
}, {
  name: "Business",
  badge: "Am beliebtesten",
  price: "CHF 2,500",
  slides: "15-20",
  concepts: "3",
  revisions: "3 Runden",
  timeline: "5-7 Tage",
  includes: ["15-20 individuelle Folien", "3 Konzepte zur Auswahl", "3 Überarbeitungsrunden", "Alle Formate + Quelldateien", "Grundlegende Animationen und Übergänge", "Icon-Bibliothek (500+ Symbole)", "Brand Guidelines Dokument", "Priority Support"],
  notIncluded: [],
  voiceOverEstimate: "ab CHF 300",
  bundlePrice: "CHF 2,699",
  bundleSavings: "CHF 176",
  popular: true
}, {
  name: "Premium",
  badge: "Für anspruchsvolle Projekte",
  price: "CHF 5,000+",
  slides: "30+",
  concepts: "Unbegrenzt",
  revisions: "Unbegrenzt",
  timeline: "7-10 Tage",
  includes: ["30+ individuelle Folien", "Unbegrenzte Konzepte", "Unbegrenzte Überarbeitungen", "Alle Formate + Quelldateien", "Fortgeschrittene Animationen (Motion Graphics)", "Premium Icon-Bibliothek", "Brand Guidelines (erweitert)", "Master Template zur weiteren Nutzung", "Dedizierter Designer", "Priority Support 24/7", "1h Schulungssession"],
  notIncluded: [],
  voiceOverEstimate: "ab CHF 600",
  bundlePrice: "CHF 5,399",
  bundleSavings: "CHF 351",
  popular: false
}];
const testimonials = [{
  stars: 5,
  quote: "Dank des von ProgressiveGroup erstellten Pitch Decks haben wir CHF 2M in der Seed-Runde eingeworben. Die Investoren waren begeistert vom professionellen Aussehen und der klaren Botschaft. Das war die beste Investition in unser Startup!",
  author: "Thomas M., CEO",
  company: "FinTech Startup, Zürich"
}, {
  stars: 5,
  quote: "Unsere Verkaufspräsentation sah amateurhaft aus. Nach dem Redesign durch ProgressiveGroup stieg unsere Win-Rate von 20% auf 45%! Die Kunden sind beeindruckt und das sieht man in den Zahlen.",
  author: "Sarah K., Sales Director",
  company: "B2B SaaS Company, Berlin"
}, {
  stars: 5,
  quote: "KI-Voice-Over ist ein Game Changer! Wir brauchten Versionen in 5 Sprachen. Mit einem traditionellen Sprecher hätte das über CHF 10,000 gekostet. Mit KI-Voice-Over haben wir es für CHF 1,200 geschafft. Die Qualität ist unglaublich - niemand hat erkannt, dass es KI ist!",
  author: "Michael R., Marketing Manager",
  company: "International Corporation, Geneva"
}];
const faqItems = [{
  question: "Kann ich Beispiele Ihrer Arbeiten sehen?",
  answer: "Ja! Wir haben ein öffentliches Portfolio mit Beispielen verschiedener Präsentationstypen. Wir können auch Case Studies aus Ihrer Branche während einer kostenlosen Beratung zeigen."
}, {
  question: "Was ist, wenn ich keine Inhalte/Texte für die Präsentation habe?",
  answer: "Kein Problem! Wir bieten Copywriting-Services an (CHF 50-120/Folie je nach Länge). Unser Copywriter führt ein Interview mit Ihnen (30-45 Min.) und schreibt professionelle Skripte, die auf Ihre Botschaft und Zielgruppe zugeschnitten sind."
}, {
  question: "Welche Dateiformate erhalte ich?",
  answer: "Sie erhalten ein Komplettpaket: PowerPoint (.pptx) - bearbeitbar, PDF - hochauflösend, Keynote (.key) für Mac, Google Slides, Quelldateien - alle Grafiken (PNG, SVG), Symbole, Fotos. Bei Voice-Over-Bestellung: MP3-Dateien + synchronisierte Präsentation + optional Video (MP4)."
}, {
  question: "Wie viele Überarbeitungsrunden sind im Preis enthalten?",
  answer: "Je nach Paket: Start - 2 Revisionsrunden, Business - 3 Revisionsrunden, Premium - Unbegrenzte Revisionen. Was bedeutet 'Revisionsrunde'? = Eine Liste mit Änderungen/Korrekturen, die Sie nach Ansicht des Entwurfs senden. Zusätzliche Runden: CHF 300/Runde (Start & Business)."
}, {
  question: "Klingt KI-Voice-Over wirklich wie ein Mensch?",
  answer: "JA! Wir verwenden die neueste KI-Generation (ElevenLabs / Azure Neural TTS), die fotorealistische Stimmen erzeugt. 95% unserer Kunden sind von der Qualität begeistert. Für die restlichen 5% (oder Ultra-Premium-Marken) bieten wir menschliche Sprecher an (individuelle Preisgestaltung)."
}, {
  question: "Wie lange dauert der gesamte Prozess?",
  answer: "Timeline pro Paket: Start 4-5 Tage, Business 5-7 Tage, Premium 7-10 Arbeitstage. Voice-Over (falls bestellt): +2-3 Tage zur Gesamtzeit. Dies sind Arbeitstage (Montag-Freitag)."
}];
const Prezentacje = () => {
  const [voiceOverShort, setVoiceOverShort] = useState([5]);
  const [voiceOverMedium, setVoiceOverMedium] = useState([8]);
  const [voiceOverLong, setVoiceOverLong] = useState([2]);
  const calculateVoiceOverCost = () => {
    const shortCost = voiceOverShort[0] * 15;
    const mediumCost = voiceOverMedium[0] * 25;
    const longCost = voiceOverLong[0] * 35;
    const total = shortCost + mediumCost + longCost;
    const totalSlides = voiceOverShort[0] + voiceOverMedium[0] + voiceOverLong[0];
    const avgPerSlide = totalSlides > 0 ? Math.round(total / totalSlides) : 0;
    return {
      shortCost,
      mediumCost,
      longCost,
      total,
      totalSlides,
      avgPerSlide
    };
  };
  const costs = calculateVoiceOverCost();
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 pb-20">
        <div className="absolute inset-0 transform-3d">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 gradient-accent rounded-full blur-3xl opacity-20 animate-float" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-secondary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zur Startseite</span>
          </Link>
          
          <div className="text-center max-w-5xl mx-auto mb-12">
            <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
              Professionelle Business-Präsentationen
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Präsentationen,<br />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                die verkaufen
              </span>
            </h1>
            
            <p className="text-xl text-foreground/70 mb-8 animate-fade-in animate-delay-100">
              Custom Design + KI Voice-Over = Präsentationen einsatzbereit.
            </p>

            {/* 4 key benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
              <div className="flex items-center gap-2 text-foreground/80 text-sm">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>Pitch Decks für Startups</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80 text-sm">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>B2B Verkaufspräsentationen</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80 text-sm">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>Jahresberichte für Investoren</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80 text-sm">
                <Mic className="w-5 h-5 text-accent flex-shrink-0" />
                <span>+ Optionaler KI-Sprecher (20+ Sprachen)</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="xl" variant="hero" onClick={() => document.getElementById('portfolio')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Portfolio ansehen
              </Button>
              <Button size="xl" variant="outline-hero" onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Kostenlose Bewertung
              </Button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">150+</div>
                <div className="text-foreground/60">Abgeschlossene Projekte</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">CHF 47M+</div>
                <div className="text-foreground/60">Von Kunden eingeworbene Finanzierung</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">5-7 Tage</div>
                <div className="text-foreground/60">Durchschnittliche Realisierungszeit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Agitate-Solution Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Kommt Ihnen das bekannt vor?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            <Card className="glass-card border-white/10 hover:scale-105 transition-all duration-500">
              <CardContent className="p-8 text-center">
                
                <h3 className="text-2xl font-bold mb-4 text-amber-500">Sie verbringen Tage mit PowerPoint</h3>
                <p className="text-foreground/70">
                  Sie kämpfen mit der Formatierung, suchen nach Grafiken, versuchen Farben anzupassen. Die Zeit vergeht, die Deadline nähert sich. Ihr Geschäft wartet.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10 hover:scale-105 transition-all duration-500">
              <CardContent className="p-8 text-center">
                
                <h3 className="text-2xl font-bold mb-4 text-amber-500">Ihre Präsentation sieht aus wie alle anderen</h3>
                <p className="text-foreground/70">
                  Standard PowerPoint-Vorlagen. Gewöhnliche Cliparts. Null Differenzierung. Investoren haben das tausendmal gesehen und sind bereits gelangweilt.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10 hover:scale-105 transition-all duration-500">
              <CardContent className="p-8 text-center">
                
                <h3 className="text-2xl mb-4 font-bold text-amber-500">Sie verlieren Kunden durch schwache Folien</h3>
                <p className="text-foreground/70">
                  Großartiges Produkt, aber die Präsentation zeigt seinen Wert nicht. Die Konkurrenz gewinnt nur, weil sie sich besser präsentiert.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Das endet heute.</h3>
            <p className="text-lg text-foreground/70">
              Wir kümmern uns um Design, Animationen und professionelle Sprachausgabe. Sie konzentrieren sich auf das Wichtigste - die Entwicklung Ihres Geschäfts.
            </p>
          </div>
        </div>
      </section>

      {/* Presentation Types Section */}
      <section className="py-20" id="portfolio">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Wir spezialisieren uns auf 4 Präsentationstypen
              </span>
            </h2>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {presentationTypes.map((type, index) => <Card key={index} className="glass-card border-white/10 hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-10">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="p-4 gradient-accent rounded-xl w-fit mb-4">
                        <type.icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium mb-3">
                        {type.badge}
                      </div>
                      <h3 className="text-3xl font-bold mb-2 text-secondary">{type.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4">
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {type.price}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {type.timeline}
                        </div>
                      </div>
                    </div>

                    <div className="md:w-2/3 space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Ideal für:</h4>
                        <ul className="space-y-2">
                          {type.idealFor.map((item, i) => <li key={i} className="flex items-start gap-2 text-foreground/70">
                              <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                              <span className="text-sm">{item}</span>
                            </li>)}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Enthalten:</h4>
                        <ul className="space-y-2">
                          {type.includes.map((item, i) => <li key={i} className="flex items-start gap-2 text-foreground/70">
                              <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                              <span className="text-sm">{item}</span>
                            </li>)}
                        </ul>
                      </div>

                      <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                        <div className="flex items-start gap-2">
                          <Mic className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-foreground mb-1">Voice-Over:</p>
                            <p className="text-sm text-foreground/70 mb-1">{type.voiceOver}</p>
                            <p className="text-sm font-semibold text-accent">Geschätzte Kosten: {type.voiceOverCost}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Button variant="hero" onClick={() => document.getElementById('contact')?.scrollIntoView({
                      behavior: 'smooth'
                    })}>
                          {type.title} bestellen
                        </Button>
                        <Button variant="outline" onClick={() => document.getElementById('portfolio')?.scrollIntoView({
                      behavior: 'smooth'
                    })}>
                          Beispiel ansehen
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* AI Voice-Over Section */}
      <section className="py-20 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block text-6xl mb-4">🎙️</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Professioneller KI-Sprecher
              </span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Neueste Technologie - fotorealistische Stimmen, nicht von Menschen zu unterscheiden
            </p>
            <p className="text-foreground/60 max-w-3xl mx-auto mt-4">
              Fügen Sie Ihrer Präsentation professionelle Sprachausgabe hinzu. Wir nutzen die neueste KI-Technologie, die natürliche, fotorealistische Stimmen in über 20 Sprachen erzeugt. Ideal für Video-Präsentationen, Webinare, Pitch Decks und Verkaufsmaterialien.
            </p>
          </div>

          {/* Pricing Table */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Preise pro Folie</h3>
            <div className="glass-card rounded-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-secondary/10">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Textlänge</th>
                    <th className="px-6 py-4 text-left font-semibold">Preis</th>
                    <th className="px-6 py-4 text-left font-semibold">Audio-Dauer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4">Bis 500 Zeichen (ohne Leerzeichen)</td>
                    <td className="px-6 py-4 font-semibold text-accent">CHF 15/Folie</td>
                    <td className="px-6 py-4 text-foreground/60">~30-40 Sekunden</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4">501-1.000 Zeichen (ohne Leerzeichen)</td>
                    <td className="px-6 py-4 font-semibold text-accent">CHF 25/Folie</td>
                    <td className="px-6 py-4 text-foreground/60">~60-75 Sekunden</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4">1.001-1.500 Zeichen (ohne Leerzeichen)</td>
                    <td className="px-6 py-4 font-semibold text-accent">CHF 35/Folie</td>
                    <td className="px-6 py-4 text-foreground/60">~90-110 Sekunden</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4">Über 1.500 Zeichen</td>
                    <td className="px-6 py-4 font-semibold text-accent">Individuelle Bewertung</td>
                    <td className="px-6 py-4 text-foreground/60">Kontakt</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-foreground/60 mt-4 text-sm">
              💡 Jede Folie wird individuell nach Textlänge berechnet. Sie zahlen nur für das, was Sie nutzen!
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Was Sie erhalten</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[{
              icon: Sparkles,
              title: "Fotorealistyczny głos AI",
              desc: "Nieodróżnialny od ludzkiego lektora"
            }, {
              icon: Languages,
              title: "20+ języków",
              desc: "PL, EN, DE, FR, IT, ES, NO, SE, DK i więcej"
            }, {
              icon: Users,
              title: "Męskie i żeńskie głosy",
              desc: "Wybierz styl: formalny, energiczny, przyjazny"
            }, {
              icon: Target,
              title: "Synchronizacja z slajdami",
              desc: "Audio idealnie dopasowane do animacji"
            }, {
              icon: CheckCircle,
              title: "2 rundy rewizji GRATIS",
              desc: "Zmiany tekstu, głosu lub tempa"
            }, {
              icon: FileText,
              title: "Wszystkie formaty",
              desc: "MP3, prezentacja z audio, video export"
            }, {
              icon: Award,
              title: "Komercyjna licencja",
              desc: "Użyj wszędzie: YouTube, social media, webinary"
            }, {
              icon: Clock,
              title: "Delivery 24-48h",
              desc: "Od akceptacji skryptu do gotowego audio"
            }, {
              icon: Zap,
              title: "Nielimitowane języki",
              desc: "Multi-language presentations bez problemu"
            }].map((item, i) => <div key={i} className="flex items-start gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-foreground/60">{item.desc}</p>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Interactive Calculator */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="glass-card rounded-2xl p-8 border-2 border-accent/20">
              <h3 className="text-2xl font-bold mb-6 text-center">
                🧮 Berechnen Sie die Kosten für Ihre Präsentation
              </h3>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="font-medium">Kurze Folien (bis 500 Zeichen):</label>
                    <span className="font-semibold text-accent">
                      {voiceOverShort[0]} Folien × CHF 15 = CHF {costs.shortCost}
                    </span>
                  </div>
                  <Slider value={voiceOverShort} onValueChange={setVoiceOverShort} max={50} step={1} className="w-full" />
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <label className="font-medium">Mittlere Folien (501-1.000 Zeichen):</label>
                    <span className="font-semibold text-accent">
                      {voiceOverMedium[0]} Folien × CHF 25 = CHF {costs.mediumCost}
                    </span>
                  </div>
                  <Slider value={voiceOverMedium} onValueChange={setVoiceOverMedium} max={50} step={1} className="w-full" />
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <label className="font-medium">Lange Folien (1.001-1.500 Zeichen):</label>
                    <span className="font-semibold text-accent">
                      {voiceOverLong[0]} Folien × CHF 35 = CHF {costs.longCost}
                    </span>
                  </div>
                  <Slider value={voiceOverLong} onValueChange={setVoiceOverLong} max={50} step={1} className="w-full" />
                </div>

                <div className="border-t border-white/20 pt-6">
                  <div className="text-center">
                    <div className="text-sm text-foreground/60 mb-2">GESCHÄTZTE KOSTEN:</div>
                    <div className="text-5xl font-bold text-accent mb-4">CHF {costs.total}</div>
                    <div className="text-foreground/60 space-y-1">
                      <div>Gesamt: {costs.totalSlides} Folien mit Sprachausgabe</div>
                      <div>Durchschnittlich: CHF {costs.avgPerSlide}/Folie</div>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/60 text-center mt-6">
                    💡 Nicht sicher über Textlängen? Typische Business-Präsentation: 30% kurz, 50% mittel, 20% lang
                  </p>
                  <div className="flex justify-center mt-6">
                    <Button variant="hero" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth'
                  })}>
                      Voice-Over zur Bestellung hinzufügen
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI vs Human Comparison */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">🆚 Vergleich: KI vs Menschlicher Sprecher</h3>
            <div className="glass-card rounded-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-secondary/10">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Kriterium</th>
                    <th className="px-6 py-4 text-left font-semibold">KI-Sprecher</th>
                    <th className="px-6 py-4 text-left font-semibold">Menschlicher Sprecher</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4 font-medium">Stimmqualität</td>
                    <td className="px-6 py-4">⭐⭐⭐⭐ Fotorealistisch</td>
                    <td className="px-6 py-4">⭐⭐⭐⭐⭐ Höchste</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4 font-medium">Kosten</td>
                    <td className="px-6 py-4 text-accent font-semibold">CHF 15-35/Folie</td>
                    <td className="px-6 py-4">CHF 80-150/Folie</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4 font-medium">Realisierungszeit</td>
                    <td className="px-6 py-4 text-accent font-semibold">24-48h</td>
                    <td className="px-6 py-4">5-7 Tage</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4 font-medium">Überarbeitungen</td>
                    <td className="px-6 py-4 text-accent font-semibold">2 Runden GRATIS</td>
                    <td className="px-6 py-4">Kostspielig (+CHF 300/Runde)</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4 font-medium">Sprachen</td>
                    <td className="px-6 py-4 text-accent font-semibold">20+ Sprachen</td>
                    <td className="px-6 py-4">2-3 Sprachen</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-foreground/60 mt-6 max-w-3xl mx-auto">
              💡 Für 95% der Business-Anwendungen: KI Voice-Over ist ausreichend und kosteneffektiv. Für Premium-Marken und besondere Anforderungen bieten wir menschliche Sprecher an (individuelle Bewertung).
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Wählen Sie das Paket, das zu Ihren Bedürfnissen passt
            </h2>
            <p className="text-foreground/60">
              Alle Pakete enthalten bearbeitbare Quellen und alle Formate
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPackages.map((pkg, index) => <Card key={index} className={`glass-card ${pkg.popular ? 'border-accent border-2 shadow-2xl scale-105' : 'border-white/10'} hover:scale-105 transition-all duration-500`}>
                <CardContent className="p-8">
                  {pkg.popular && <div className="bg-gradient-to-r from-accent to-secondary text-white text-center py-2 px-4 rounded-full text-sm font-bold mb-4 -mt-4">
                      {pkg.badge}
                    </div>}
                  {!pkg.popular && <div className="text-center text-sm text-foreground/60 mb-4">{pkg.badge}</div>}
                  
                  <h3 className="text-3xl font-bold text-center mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-center text-accent mb-6">{pkg.price}</div>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/60">Folien:</span>
                      <span className="font-semibold">{pkg.slides}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/60">Konzepte:</span>
                      <span className="font-semibold">{pkg.concepts}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/60">Überarbeitungen:</span>
                      <span className="font-semibold">{pkg.revisions}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/60">Zeitrahmen:</span>
                      <span className="font-semibold">{pkg.timeline}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.includes.map((item, i) => <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                        <span className="text-sm text-foreground/70">{item}</span>
                      </div>)}
                  </div>

                  {pkg.notIncluded.length > 0 && <div className="space-y-2 mb-8 opacity-50">
                      {pkg.notIncluded.map((item, i) => <div key={i} className="flex items-start gap-2">
                          <span className="text-sm">❌ {item}</span>
                        </div>)}
                    </div>}

                  <div className="border-t border-white/10 pt-6 mb-6">
                    <div className="text-sm mb-2">
                      <Mic className="w-4 h-4 inline mr-2 text-accent" />
                      Voice-Over (optional):
                    </div>
                    <div className="font-semibold text-accent">{pkg.voiceOverEstimate}</div>
                    {pkg.bundlePrice && <div className="mt-3 bg-accent/10 rounded-lg p-3 border border-accent/20">
                        <div className="text-sm font-medium">💰 BUNDLE-ANGEBOT:</div>
                        <div className="font-bold text-accent">Präsentation + Voice-Over = {pkg.bundlePrice}</div>
                        <div className="text-xs text-foreground/60">Sie sparen {pkg.bundleSavings}!</div>
                      </div>}
                  </div>

                  <Button variant={pkg.popular ? "hero" : "outline"} className="w-full" onClick={() => document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                    {pkg.popular ? 'Business bestellen' : `${pkg.name} bestellen`}
                  </Button>
                  
                  {pkg.bundlePrice && <Button variant="outline" className="w-full mt-3" onClick={() => document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                      Mit Voice-Over bestellen (Bundle)
                    </Button>}
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Was sagen unsere Kunden?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => <Card key={index} className="glass-card border-white/10">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => <span key={i} className="text-accent text-xl">⭐</span>)}
                  </div>
                  <p className="text-foreground/70 italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-foreground/60">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-8">Sie haben uns vertraut</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              <div className="text-2xl font-bold">LOGO</div>
              <div className="text-2xl font-bold">LOGO</div>
              <div className="text-2xl font-bold">LOGO</div>
              <div className="text-2xl font-bold">LOGO</div>
              <div className="text-2xl font-bold">LOGO</div>
              <div className="text-2xl font-bold">LOGO</div>
            </div>
            <p className="text-foreground/60 mt-6">
              Wir haben mit über 150 Unternehmen aus der Schweiz, Deutschland, Norwegen, Polen und ganz Europa zusammengearbeitet
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Häufig gestellte Fragen
          </h2>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="glass-card border-white/10 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-secondary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-transparent" id="contact">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Bereit für eine Präsentation,<br />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                die beeindruckt?
              </span>
            </h2>
            <p className="text-xl text-foreground/70 mb-12">
              Schließen Sie sich über 150 Unternehmen an, die ProgressiveGroup vertraut haben
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              

              <Card className="glass-card border-white/10 p-8">
                <h3 className="text-2xl font-bold mb-4">📝 Brief senden - Bewertung in 24h</h3>
                <p className="text-foreground/60 mb-6">
                  Füllen Sie ein kurzes Formular aus (5 Min), Sie erhalten am nächsten Werktag eine genaue Bewertung.
                </p>
                
                <Button variant="outline-hero" className="w-full" size="lg">
                  Brief ausfüllen
                </Button>
              </Card>
            </div>

            <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto">
              <h4 className="font-semibold mb-4">Bevorzugen Sie die alte Schule?</h4>
              <div className="flex flex-col items-center gap-4 text-sm text-center">
                <div>📧 E-Mail: info@progressivegroup.ch</div>
                <div>📍 Progressivegroup Sp. z o.o., ul. Rynek 5/6, 59-220 Legnica</div>
              </div>
              <div className="mt-6 text-sm text-foreground/60">
                <div className="font-medium mb-2">Arbeitszeiten:</div>
                <div>Mo-Fr: 9:00 - 18:00 CET</div>
                <div>Wochenende: Nur dringende Projekte (Express)</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-sm font-medium">150+ Projekte</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-sm font-medium">CHF 47M+ Finanzierung</div>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-sm font-medium">4,9/5 Bewertung</div>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-sm font-medium">30-Tage Garantie</div>
              </div>
            </div>

            <p className="text-sm text-foreground/60 mt-8">
              💡 Dringendes Projekt? Express-Lieferung verfügbar (2-4 Tage). Rufen Sie an oder schreiben Sie - wir prüfen die Verfügbarkeit!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Prezentacje;