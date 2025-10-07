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
  badge: "Startupy & Fundraising",
  title: "Pitch Deck",
  idealFor: ["Startupy szukające inwestorów (Seed, Series A/B/C)", "Prezentacje dla VC i Business Angels", "Demo Days i konkursy startupowe"],
  includes: ["10-15 slajdów (struktura: Problem → Solution → Market → Traction → Team → Ask)", "Storytelling zgodny z metodologią Guy Kawasaki (10/20/30 rule)", "Financial projections z profesjonalną wizualizacją", "Competitive analysis i market positioning", "Edytowalne źródła (PPTX + PDF)"],
  voiceOver: "Zalecane dla: Pitch videos, social media, pre-meeting materials",
  voiceOverCost: "CHF 150-225 (10-15 slajdów)",
  price: "od CHF 2,500",
  timeline: "5-7 dni roboczych"
}, {
  icon: TrendingUp,
  badge: "Prezentacje Sprzedażowe",
  title: "Sales Deck",
  idealFor: ["Teams sprzedażowe B2B", "Prezentacje produktów i usług", "Meetings z klientami enterprise", "Propozycje handlowe"],
  includes: ["15-25 slajdów (Value proposition → Features/Benefits → Case Studies → Pricing)", "Social proof (testimoniale, logos klientów, case studies)", "ROI calculators i porównania konkurencji", "Pricing slides z elastycznymi wariantami", "Branding zgodny z Twoim visual identity", "Wszystkie formaty + ikony (500+ library)"],
  voiceOver: "Zalecane dla: Auto-play presentations, webinars, product demos",
  voiceOverCost: "CHF 300-450 (15-20 slajdów)",
  price: "od CHF 1,800",
  timeline: "5-7 dni roboczych"
}, {
  icon: BarChart3,
  badge: "Raporty Roczne",
  title: "Annual Report",
  idealFor: ["Board meetings i raporty dla zarządu", "Shareholder presentations", "Quarterly Business Reviews (QBR)", "Investor updates"],
  includes: ["20-40 slajdów (comprehensive overview roku)", "Data visualization (wykresy, dashboardy KPI, infografiki)", "Year-over-year comparisons z insights", "Financial highlights i operational metrics", "Strategy roadmap na kolejny rok", "Executive summary (1-pager)"],
  voiceOver: "Zalecane dla: Board meetings, investor calls, video reports",
  voiceOverCost: "CHF 450-700 (20-30 slajdów)",
  price: "od CHF 3,500",
  timeline: "7-10 dni roboczych"
}, {
  icon: Building2,
  badge: "Prezentacje Korporacyjne",
  title: "Corporate Presentation",
  idealFor: ["Company overview presentations", "Internal training materials", "Conference presentations", "Partnerships & colaborations"],
  includes: ["10-30 slajdów (flexible, dopasowane do potrzeb)", "Custom branded templates (master slides do dalszego użytku)", "Icon library & graphics w stylu firmy", "Spójny visual language", "Edytowalne komponenty", "Guidelines użycia (jak edytować samemu)"],
  voiceOver: "Zalecane dla: E-learning, onboarding, conference talks",
  voiceOverCost: "CHF 150-450 (10-30 slajdów)",
  price: "od CHF 1,500",
  timeline: "4-6 dni roboczych"
}];
const pricingPackages = [{
  name: "Start",
  badge: "Dla małych projektów",
  price: "CHF 1,200",
  slides: "10",
  concepts: "1",
  revisions: "2 rundy",
  timeline: "4-5 dni",
  includes: ["10 custom slajdów", "1 concept do wyboru", "2 rundy poprawek", "Wszystkie formaty (PPTX, PDF, Keynote, Google Slides)", "Podstawowe ikony i grafiki"],
  notIncluded: ["Animacje", "Brand guidelines", "Master templates"],
  voiceOverEstimate: "od CHF 150",
  popular: false
}, {
  name: "Business",
  badge: "Najpopularniejszy",
  price: "CHF 2,500",
  slides: "15-20",
  concepts: "3",
  revisions: "3 rundy",
  timeline: "5-7 dni",
  includes: ["15-20 custom slajdów", "3 koncepty do wyboru", "3 rundy poprawek", "Wszystkie formaty + źródła", "Podstawowe animacje i przejścia", "Icon library (500+ ikon)", "Brand guidelines document", "Priority support"],
  notIncluded: [],
  voiceOverEstimate: "od CHF 300",
  bundlePrice: "CHF 2,699",
  bundleSavings: "CHF 176",
  popular: true
}, {
  name: "Premium",
  badge: "Dla wymagających projektów",
  price: "CHF 5,000+",
  slides: "30+",
  concepts: "Unlimited",
  revisions: "Unlimited",
  timeline: "7-10 dni",
  includes: ["30+ custom slajdów", "Unlimited concepts", "Unlimited revisions", "Wszystkie formaty + źródła", "Zaawansowane animacje (motion graphics)", "Icon library premium", "Brand guidelines (rozszerzony)", "Master template do dalszego użytku", "Dedykowany designer", "Priority support 24/7", "1h training session"],
  notIncluded: [],
  voiceOverEstimate: "od CHF 600",
  bundlePrice: "CHF 5,399",
  bundleSavings: "CHF 351",
  popular: false
}];
const testimonials = [{
  stars: 5,
  quote: "Dzięki pitch deckowi stworzonym przez ProgressiveGroup pozyskaliśmy CHF 2M w rundzie seed. Inwestorzy byli zachwyceni profesjonalnym wyglądem i jasnym przekazem. To była najlepsza inwestycja w nasz startup!",
  author: "Thomas M., CEO",
  company: "FinTech Startup, Zürich"
}, {
  stars: 5,
  quote: "Nasza prezentacja sprzedażowa wyglądała amatorsko. Po redesignie od ProgressiveGroup, nasz win rate wzrósł z 20% do 45%! Klienci są pod wrażeniem i to widać w liczbach.",
  author: "Sarah K., Sales Director",
  company: "B2B SaaS Company, Berlin"
}, {
  stars: 5,
  quote: "Lektor AI to game changer! Potrzebowaliśmy wersji w 5 językach. Z tradycyjnym lektorem to by kosztowało CHF 10,000+. Z AI voice-over zrobiliśmy to za CHF 1,200. Jakość jest niesamowita - nikt nie poznał że to AI!",
  author: "Michael R., Marketing Manager",
  company: "International Corporation, Geneva"
}];
const faqItems = [{
  question: "Czy mogę zobaczyć przykłady Waszych prac?",
  answer: "Tak! Mamy publiczne portfolio z przykładami różnych typów prezentacji. Możemy też pokazać case studies najbliższe Twojej branży podczas bezpłatnej konsultacji."
}, {
  question: "Co jeśli nie mam contentu/tekstów do prezentacji?",
  answer: "Nie ma problemu! Oferujemy usługę copywritingu (CHF 50-120/slajd w zależności od długości). Nasz copywriter przeprowadzi z Tobą wywiad (30-45 min) i napisze profesjonalne skrypty dopasowane do Twojego przekazu i target audience."
}, {
  question: "Jakie formaty plików otrzymam?",
  answer: "Otrzymujesz kompletny package: PowerPoint (.pptx) - edytowalny, PDF - high resolution, Keynote (.key) dla Mac, Google Slides, pliki źródłowe - wszystkie grafiki (PNG, SVG), ikony, zdjęcia. Jeśli zamówisz voice-over: MP3 files + zsynchronizowana prezentacja + opcjonalnie video (MP4)."
}, {
  question: "Ile rund poprawek jest wliczonych w cenę?",
  answer: "Zależy od pakietu: Start - 2 rundy rewizji, Business - 3 rundy rewizji, Premium - Unlimited revisions. Co to znaczy 'runda rewizji'? = Jedna lista zmian/poprawek, którą wysyłasz po obejrzeniu draftu. Dodatkowe rundy: CHF 300/runda (Start & Business)."
}, {
  question: "Czy Voice-over AI naprawdę brzmi jak człowiek?",
  answer: "TAK! Używamy najnowszej generacji AI (ElevenLabs / Azure Neural TTS) która generuje fotorealistyczne głosy. 95% naszych klientów jest zachwyconych jakością. Dla pozostałych 5% (lub ultra-premium brands) oferujemy ludzkich lektorów (wycena indywidualna)."
}, {
  question: "Jak długo trwa cały proces?",
  answer: "Timeline per pakiet: Start 4-5 dni, Business 5-7 dni, Premium 7-10 dni roboczych. Voice-over (jeśli zamówiony): +2-3 dni do total timeline. To są dni robocze (poniedziałek-piątek)."
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
              Profesjonalne Prezentacje Biznesowe
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Prezentacje,<br />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                które sprzedają
              </span>
            </h1>
            
            <p className="text-xl text-foreground/70 mb-8 animate-fade-in animate-delay-100">
              Custom design + AI Voice-Over = Prezentacje gotowe do użycia.
            </p>

            {/* 4 key benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
              <div className="flex items-center gap-2 text-foreground/80 text-sm">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>Pitch Decks dla startupów</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80 text-sm">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>Prezentacje sprzedażowe B2B</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80 text-sm">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>Raporty roczne dla inwestorów</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80 text-sm">
                <Mic className="w-5 h-5 text-accent flex-shrink-0" />
                <span>+ Opcjonalny Lektor AI (20+ języków)</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="xl" variant="hero" onClick={() => document.getElementById('portfolio')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Zobacz Portfolio
              </Button>
              <Button size="xl" variant="outline-hero" onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Bezpłatna Wycena
              </Button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">150+</div>
                <div className="text-foreground/60">Projektów zrealizowanych</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">CHF 47M+</div>
                <div className="text-foreground/60">Pozyskanego fundingu przez klientów</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">5-7 dni</div>
                <div className="text-foreground/60">Średni czas realizacji</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Agitate-Solution Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Czy to brzmi znajomo?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            <Card className="glass-card border-white/10 hover:scale-105 transition-all duration-500">
              <CardContent className="p-8 text-center">
                
                <h3 className="text-2xl font-bold mb-4 text-amber-500">Spędzasz dni na PowerPoint</h3>
                <p className="text-foreground/70">
                  Walczysz z formatowaniem, szukasz grafik, próbujesz dopasować kolory. Czas mija, a deadline się zbliża. Twój biznes czeka.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10 hover:scale-105 transition-all duration-500">
              <CardContent className="p-8 text-center">
                
                <h3 className="text-2xl font-bold mb-4 text-amber-500">Twoja prezentacja wygląda jak wszyscy inni</h3>
                <p className="text-foreground/70">
                  Domyślne szablony PowerPoint. Standardowe cliparty. Zero wyróżnienia. Inwestorzy widzieli to tysiące razy i są już znudzeni.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10 hover:scale-105 transition-all duration-500">
              <CardContent className="p-8 text-center">
                
                <h3 className="text-2xl mb-4 font-bold text-amber-500">Tracisz klientów przez słabe slajdy</h3>
                <p className="text-foreground/70">
                  Świetny produkt, ale prezentacja nie oddaje jego wartości. Konkurencja wygrywa tylko dlatego, że lepiej się prezentuje.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">To się kończy dzisiaj.</h3>
            <p className="text-lg text-foreground/70">
              Zajmiemy się designem, animacjami i profesjonalną narracją. Ty skupisz się na tym, co najważniejsze - rozwoju swojego biznesu.
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
                Specjalizujemy się w 4 typach prezentacji
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
                        <h4 className="font-semibold text-foreground mb-3">Idealny dla:</h4>
                        <ul className="space-y-2">
                          {type.idealFor.map((item, i) => <li key={i} className="flex items-start gap-2 text-foreground/70">
                              <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                              <span className="text-sm">{item}</span>
                            </li>)}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Co zawiera:</h4>
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
                            <p className="text-sm font-semibold text-accent">Szacowany koszt: {type.voiceOverCost}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Button variant="hero" onClick={() => document.getElementById('contact')?.scrollIntoView({
                      behavior: 'smooth'
                    })}>
                          Zamów {type.title}
                        </Button>
                        <Button variant="outline" onClick={() => document.getElementById('portfolio')?.scrollIntoView({
                      behavior: 'smooth'
                    })}>
                          Zobacz przykład
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
                Profesjonalny Lektor AI
              </span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Najnowsza technologia - fotorealistyczne głosy nieodróżnialne od człowieka
            </p>
            <p className="text-foreground/60 max-w-3xl mx-auto mt-4">
              Dodaj profesjonalną narrację do swojej prezentacji. Wykorzystujemy najnowszą technologię AI, która generuje naturalne, fotorealistyczne głosy w 20+ językach. Idealne do video prezentacji, webinarów, pitch decków i materiałów sprzedażowych.
            </p>
          </div>

          {/* Pricing Table */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Wycena per slajd</h3>
            <div className="glass-card rounded-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-secondary/10">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Długość tekstu</th>
                    <th className="px-6 py-4 text-left font-semibold">Cena</th>
                    <th className="px-6 py-4 text-left font-semibold">Czas audio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4">Do 500 znaków (bez spacji)</td>
                    <td className="px-6 py-4 font-semibold text-accent">CHF 15/slajd</td>
                    <td className="px-6 py-4 text-foreground/60">~30-40 sekund</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4">501-1,000 znaków (bez spacji)</td>
                    <td className="px-6 py-4 font-semibold text-accent">CHF 25/slajd</td>
                    <td className="px-6 py-4 text-foreground/60">~60-75 sekund</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4">1,001-1,500 znaków (bez spacji)</td>
                    <td className="px-6 py-4 font-semibold text-accent">CHF 35/slajd</td>
                    <td className="px-6 py-4 text-foreground/60">~90-110 sekund</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4">Powyżej 1,500 znaków</td>
                    <td className="px-6 py-4 font-semibold text-accent">Wycena indywidualna</td>
                    <td className="px-6 py-4 text-foreground/60">Kontakt</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-foreground/60 mt-4 text-sm">
              💡 Każdy slajd wyceniany indywidualnie według długości tekstu. Płacisz tylko za to, czego używasz!
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Co dostajesz</h3>
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
                🧮 Oblicz koszt dla swojej prezentacji
              </h3>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="font-medium">Slajdy krótkie (do 500 znaków):</label>
                    <span className="font-semibold text-accent">
                      {voiceOverShort[0]} slajdów × CHF 15 = CHF {costs.shortCost}
                    </span>
                  </div>
                  <Slider value={voiceOverShort} onValueChange={setVoiceOverShort} max={50} step={1} className="w-full" />
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <label className="font-medium">Slajdy średnie (501-1,000 znaków):</label>
                    <span className="font-semibold text-accent">
                      {voiceOverMedium[0]} slajdów × CHF 25 = CHF {costs.mediumCost}
                    </span>
                  </div>
                  <Slider value={voiceOverMedium} onValueChange={setVoiceOverMedium} max={50} step={1} className="w-full" />
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <label className="font-medium">Slajdy długie (1,001-1,500 znaków):</label>
                    <span className="font-semibold text-accent">
                      {voiceOverLong[0]} slajdów × CHF 35 = CHF {costs.longCost}
                    </span>
                  </div>
                  <Slider value={voiceOverLong} onValueChange={setVoiceOverLong} max={50} step={1} className="w-full" />
                </div>

                <div className="border-t border-white/20 pt-6">
                  <div className="text-center">
                    <div className="text-sm text-foreground/60 mb-2">SZACOWANY KOSZT:</div>
                    <div className="text-5xl font-bold text-accent mb-4">CHF {costs.total}</div>
                    <div className="text-foreground/60 space-y-1">
                      <div>Łącznie: {costs.totalSlides} slajdów z narracją</div>
                      <div>Średnio: CHF {costs.avgPerSlide}/slajd</div>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/60 text-center mt-6">
                    💡 Nie jesteś pewien długości tekstów? Typowa prezentacja biznesowa: 30% krótkie, 50% średnie, 20% długie
                  </p>
                  <div className="flex justify-center mt-6">
                    <Button variant="hero" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth'
                  })}>
                      Dodaj voice-over do zamówienia
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI vs Human Comparison */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">🆚 Porównanie: AI vs Ludzki Lektor</h3>
            <div className="glass-card rounded-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-secondary/10">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Kryterium</th>
                    <th className="px-6 py-4 text-left font-semibold">Lektor AI</th>
                    <th className="px-6 py-4 text-left font-semibold">Lektor Ludzki</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4 font-medium">Jakość głosu</td>
                    <td className="px-6 py-4">⭐⭐⭐⭐ Fotorealistyczna</td>
                    <td className="px-6 py-4">⭐⭐⭐⭐⭐ Najwyższa</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4 font-medium">Koszt</td>
                    <td className="px-6 py-4 text-accent font-semibold">CHF 15-35/slajd</td>
                    <td className="px-6 py-4">CHF 80-150/slajd</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4 font-medium">Czas realizacji</td>
                    <td className="px-6 py-4 text-accent font-semibold">24-48h</td>
                    <td className="px-6 py-4">5-7 dni</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4 font-medium">Rewizje</td>
                    <td className="px-6 py-4 text-accent font-semibold">2 rundy GRATIS</td>
                    <td className="px-6 py-4">Kosztowne (+CHF 300/runda)</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-4 font-medium">Języki</td>
                    <td className="px-6 py-4 text-accent font-semibold">20+ języków</td>
                    <td className="px-6 py-4">2-3 języki</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-foreground/60 mt-6 max-w-3xl mx-auto">
              💡 Dla 95% zastosowań biznesowych: AI voice-over jest wystarczający i cost-effective. Dla premium brandów i szczególnych wymagań oferujemy ludzkich lektorów (wycena indywidualna).
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Wybierz pakiet dopasowany do Twoich potrzeb
            </h2>
            <p className="text-foreground/60">
              Wszystkie pakiety zawierają edytowalne źródła i wszystkie formaty
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
                      <span className="text-foreground/60">Slajdów:</span>
                      <span className="font-semibold">{pkg.slides}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/60">Koncepty:</span>
                      <span className="font-semibold">{pkg.concepts}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/60">Rewizje:</span>
                      <span className="font-semibold">{pkg.revisions}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/60">Timeline:</span>
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
                      Voice-over (opcjonalnie):
                    </div>
                    <div className="font-semibold text-accent">{pkg.voiceOverEstimate}</div>
                    {pkg.bundlePrice && <div className="mt-3 bg-accent/10 rounded-lg p-3 border border-accent/20">
                        <div className="text-sm font-medium">💰 BUNDLE DEAL:</div>
                        <div className="font-bold text-accent">Prezentacja + Voice-over = {pkg.bundlePrice}</div>
                        <div className="text-xs text-foreground/60">oszczędzasz {pkg.bundleSavings}!</div>
                      </div>}
                  </div>

                  <Button variant={pkg.popular ? "hero" : "outline"} className="w-full" onClick={() => document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                    {pkg.popular ? 'Zamów Business' : `Zamów ${pkg.name}`}
                  </Button>
                  
                  {pkg.bundlePrice && <Button variant="outline" className="w-full mt-3" onClick={() => document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                      Zamów z Voice-Over (Bundle)
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
            Co mówią nasi klienci?
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
            <h3 className="text-2xl font-bold mb-8">Zaufali nam</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              <div className="text-2xl font-bold">LOGO</div>
              <div className="text-2xl font-bold">LOGO</div>
              <div className="text-2xl font-bold">LOGO</div>
              <div className="text-2xl font-bold">LOGO</div>
              <div className="text-2xl font-bold">LOGO</div>
              <div className="text-2xl font-bold">LOGO</div>
            </div>
            <p className="text-foreground/60 mt-6">
              Współpracowaliśmy z 150+ firmami z Szwajcarii, Niemiec, Norwegii, Polski i całej Europy
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Najczęściej zadawane pytania
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
              Gotowy na prezentację,<br />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                która robi wrażenie?
              </span>
            </h2>
            <p className="text-xl text-foreground/70 mb-12">
              Dołącz do 150+ firm które zaufały ProgressiveGroup
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              

              <Card className="glass-card border-white/10 p-8">
                <h3 className="text-2xl font-bold mb-4">📝 Wyślij brief - wycena w 24h</h3>
                <p className="text-foreground/60 mb-6">
                  Wypełnij krótki formularz (5 min), otrzymasz dokładną wycenę następnego dnia roboczego.
                </p>
                
                <Button variant="outline-hero" className="w-full" size="lg">
                  Wypełnij brief
                </Button>
              </Card>
            </div>

            <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto">
              <h4 className="font-semibold mb-4">Wolisz po staremu?</h4>
              <div className="flex flex-col items-center gap-4 text-sm text-center">
                <div>📧 Email: info@progressivegroup.ch</div>
                <div>📍 Progressivegroup Sp. z o.o., ul. Rynek 5/6, 59-220 Legnica</div>
              </div>
              <div className="mt-6 text-sm text-foreground/60">
                <div className="font-medium mb-2">Godziny pracy:</div>
                <div>Pon-Pt: 9:00 - 18:00 CET</div>
                <div>Weekend: Tylko pilne projekty (express)</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-sm font-medium">150+ projektów</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-sm font-medium">CHF 47M+ fundingu</div>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-sm font-medium">4.9/5 ocena</div>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-sm font-medium">30-dni gwarancja</div>
              </div>
            </div>

            <p className="text-sm text-foreground/60 mt-8">
              💡 Pilny projekt? Express delivery dostępny (2-4 dni). Zadzwoń lub napisz - sprawdzimy dostępność!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Prezentacje;