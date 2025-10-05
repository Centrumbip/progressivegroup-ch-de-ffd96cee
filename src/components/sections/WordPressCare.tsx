import { useState } from "react";
import { Check, Shield, Clock, Headphones, ArrowRight, Plus, Star, Award, Zap, FileCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FreeAuditForm } from "@/components/forms/FreeAuditForm";
import { OrderForm } from "@/components/forms/OrderForm";

const WordPressCare = () => {
  const [auditDialogOpen, setAuditDialogOpen] = useState(false);
  const [orderDialogOpen, setOrderDialogOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState({ name: "", price: "" });
  const benefits = [
    {
      icon: Clock,
      title: "Regularne Aktualizacje",
      description: "Systematyczne aktualizacje WordPress, wtyczek i motywów",
    },
    {
      icon: Shield,
      title: "Bezpieczne Kopie Zapasowe",
      description: "Regularne backupy Twojej strony przechowywane bezpiecznie",
    },
    {
      icon: Headphones,
      title: "Wsparcie Techniczne",
      description: "Pomoc w rozwiązywaniu problemów i wprowadzaniu zmian",
    },
  ];

  const packages = [
    {
      name: "BASIC CARE",
      price: "CHF 215",
      ideal: "Małych stron wizytówkowych i blogów, które nie wymagają częstych zmian",
      features: [
        "Miesięczne aktualizacje WordPress, wtyczek i motywów",
        "Cotygodniowe kopie zapasowe",
        "Przechowywanie kopii zapasowych przez 30 dni (bezpieczna chmura)",
        "Test funkcjonalności strony po każdej aktualizacji",
        "Monitoring dostępności strony (alert email przy awarii)",
        "Miesięczny raport z wykonanych działań",
        "15 minut drobnych zmian treści miesięcznie (teksty, zdjęcia)",
        "Wsparcie przez email (odpowiedź w ciągu 48h roboczych)",
      ],
      notIncluded: [
        "Zmian layoutu i designu",
        "Optymalizacji wydajności",
        "Wsparcia w weekendy",
      ],
    },
    {
      name: "PROFESSIONAL",
      price: "CHF 430",
      ideal: "Rozwijających się firm i małych sklepów internetowych",
      popular: true,
      features: [
        "Wszystko z Pakietu Basic Care",
        "Aktualizacje co 2 tygodnie (WordPress, wtyczki, motywy)",
        "Codzienne automatyczne kopie zapasowe",
        "Przechowywanie kopii zapasowych przez 60 dni",
        "Zaawansowany skan bezpieczeństwa strony",
        "Miesięczna optymalizacja bazy danych",
        "Czyszczenie cache'u i optymalizacja pamięci",
        "Monitoring błędów 404 i ich naprawa",
        "1 godzina pracy nad stroną miesięcznie",
        "Priorytetowe wsparcie przez email (odpowiedź w ciągu 24h)",
        "Pomoc przy rozwiązywaniu problemów technicznych",
        "Podstawowe doradztwo w zakresie zabezpieczeń",
      ],
    },
    {
      name: "BUSINESS",
      price: "CHF 755",
      ideal: "Firm wymagających regularnych aktualizacji treści i stałej opieki technicznej",
      features: [
        "Wszystko z Pakietu Professional",
        "Aktualizacje cotygodniowe (WordPress, wtyczki, motywy)",
        "Codzienne kopie zapasowe z testowym przywracaniem (raz w miesiącu)",
        "Przechowywanie kopii zapasowych przez 90 dni",
        "Pełny audyt bezpieczeństwa z raportem",
        "3 godziny pracy nad stroną miesięcznie",
        "Cotygodniowa optymalizacja wydajności",
        "Monitoring i automatyczna naprawa zepsutych linków",
        "Miesięczny backup offline (dodatkowa kopia)",
        "Podstawowe doradztwo SEO",
        "Priorytetowe wsparcie przez email i chat (odpowiedź w ciągu 12h)",
        "Szczegółowy raport miesięczny z analizą i rekomendacjami rozwoju",
      ],
    },
  ];

  const additionalServices = [
    { name: "Dodatkowa godzina pracy", price: "CHF 85/h" },
    { name: "Naprawa zhakowanej strony", price: "od CHF 350" },
    { name: "Przywrócenie strony z kopii zapasowej", price: "CHF 85" },
    { name: "Migracja strony na nowy hosting", price: "od CHF 200" },
    { name: "Jednorazowa kompleksowa optymalizacja szybkości", price: "od CHF 350" },
    { name: "Instalacja i konfiguracja certyfikatu SSL", price: "CHF 120" },
    { name: "Aktualizacja motywu z zachowaniem customizacji", price: "od CHF 250" },
    { name: "Konfiguracja CDN (Cloudflare, AWS)", price: "od CHF 200" },
    { name: "Integracja z systemem CRM", price: "od CHF 400" },
    { name: "Setup email marketingu (Mailchimp, etc.)", price: "od CHF 300" },
    { name: "Audyt bezpieczeństwa (jednorazowy)", price: "CHF 500" },
    { name: "Audyt SEO (jednorazowy)", price: "CHF 600" },
    { name: "Pomoc w weekendy (poza pakietem Business)", price: "+50% do stawki" },
    { name: "Wsparcie w trybie pilnym (natychmiastowe)", price: "+100% do stawki" },
  ];

  const testimonials = [
    {
      name: "Thomas M.",
      role: "CEO, Zürich",
      text: "Od czasu powierzenia opieki nad naszą stroną zespołowi ProgressiveGroup, możemy spać spokojnie. Wszystko działa jak w zegarku, a my skupiamy się na rozwoju biznesu.",
      rating: 5,
    },
    {
      name: "Sarah K.",
      role: "Właścicielka sklepu online, Genève",
      text: "Profesjonalne podejście i szybka reakcja na każdy problem. Szczególnie cenię sobie miesięczne raporty - wiem dokładnie co się dzieje z moją stroną.",
      rating: 5,
    },
    {
      name: "Michael R.",
      role: "Marketing Director, Basel",
      text: "Pakiet Business to najlepsza inwestycja. Cotygodniowa optymalizacja sprawia, że strona działa szybciej niż kiedykolwiek.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "Czy mogę zmienić pakiet w trakcie trwania usługi?",
      answer: "Tak, możesz w każdej chwili przejść na wyższy lub niższy pakiet. Rozliczymy różnicę proporcjonalnie do pozostałych dni w miesiącu.",
    },
    {
      question: "Co się stanie, jeśli wykorzystam wszystkie godziny w danym miesiącu?",
      answer: "Możesz dokupić dodatkowe godziny w stawce CHF 85/h lub przejść na wyższy pakiet w następnym miesiącu. Niewykorzystane godziny można przenieść na kolejny miesiąc (maksymalnie jeden miesiąc w przód).",
    },
    {
      question: "Jak szybko reagujecie na awarie strony?",
      answer: "W zależności od pakietu: Basic Care: 48h (dni robocze), Professional: 24h, Business: 12h. W przypadku krytycznej awarii (strona całkowicie niedostępna) reagujemy natychmiast niezależnie od pakietu.",
    },
    {
      question: "Gdzie są przechowywane kopie zapasowe?",
      answer: "Wszystkie backupy są szyfrowane i przechowywane w bezpiecznej chmurze (Google Drive lub Dropbox Business).",
    },
    {
      question: "Czy kopie zapasowe zawierają całą stronę?",
      answer: "Tak, każda kopia zapasowa zawiera: pełną bazę danych WordPress, wszystkie pliki WordPress (motywy, wtyczki, multimedia) oraz konfigurację serwera (jeśli mamy dostęp).",
    },
    {
      question: "Co w przypadku awarii mojej strony?",
      answer: "Otrzymasz natychmiastowy alert z naszego systemu monitoringu. Zareagujemy zgodnie z czasem reakcji Twojego pakietu. W najgorszym przypadku przywrócimy stronę z ostatniej kopii zapasowej (maksymalna utrata danych: 24h w pakietach z codziennymi backupami).",
    },
    {
      question: "Czy mogę anulować usługę w każdej chwili?",
      answer: "Tak, nie ma okresu wypowiedzenia. Możesz zrezygnować na koniec każdego miesiąca rozliczeniowego. Poinformuj nas o tym co najmniej 7 dni przed końcem okresu.",
    },
    {
      question: "Jak wygląda proces rozpoczęcia współpracy?",
      answer: "Po wybraniu pakietu: 1) Wypełniasz formularz z danymi dostępowymi (bezpieczny formularz), 2) Przeprowadzamy wstępny audyt Twojej strony (bezpłatnie), 3) Konfigurujemy wszystkie narzędzia do monitoringu i backupu, 4) Otrzymujesz raport startowy ze stanem strony, 5) Rozpoczynamy regularne działania zgodnie z pakietem. Cały proces trwa 2-3 dni robocze.",
    },
    {
      question: "Czy mogę przenieść niewykorzystane godziny na kolejny miesiąc?",
      answer: "Tak, niewykorzystane godziny można przenieść na następny miesiąc (maksymalnie jeden miesiąc w przód). Na przykład, jeśli w pakiecie Professional nie wykorzystasz 1 godziny w styczniu, w lutym będziesz miał 2 godziny do wykorzystania.",
    },
    {
      question: "Jakie dane dostępowe od mnie potrzebujecie?",
      answer: "Do standardowej opieki potrzebujemy: Login i hasło do panelu WordPress (poziom Administrator), Dostęp FTP lub File Manager w panelu hostingu, Dostęp do phpMyAdmin lub możliwość eksportu/importu bazy danych. Wszystkie dane są przechowywane w zaszyfrowanym menedżerze haseł.",
    },
    {
      question: "Co jeśli moja strona zostanie zhakowana?",
      answer: "W pakiecie Basic: Pomożemy w przywróceniu z kopii zapasowej + podstawowe czyszczenie (dodatkowa usługa: od CHF 350). W pakiecie Business: Pełna pomoc w usunięciu malware i zabezpieczeniu (priorytetowe traktowanie).",
    },
    {
      question: "Czy obsługujecie również sklepy WooCommerce?",
      answer: "Tak, wszystkie pakiety obsługują sklepy WooCommerce. Ze względu na większą złożoność sklepów, zalecamy minimum pakiet Business dla pełnej opieki nad sklepem.",
    },
    {
      question: "Czy prowadzicie dokumentację wykonanych prac?",
      answer: "Tak, w każdym pakiecie otrzymujesz: Miesięczny raport z wykonanych działań, Historia kopii zapasowych, Raporty z audytów bezpieczeństwa (w wyższych pakietach).",
    },
    {
      question: "W jakich językach oferujecie wsparcie?",
      answer: "Oferujemy wsparcie w językach: Polski, Angielski, Niemiecki (podstawowy).",
    },
    {
      question: "Czy mogę kupić tylko jednorazową usługę bez abonamentu?",
      answer: "Tak, oferujemy wszystkie usługi z sekcji 'Dodatkowe usługi' jako jednorazowe zlecenia. Jednak regularna opieka w formie abonamentu zapewnia najlepszą ochronę i wydajność Twojej strony.",
    },
  ];

  return (
    <section id="wordpress" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow animation-delay-2000" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Profesjonalna Opieka i Aktualizacje WordPress
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Zadbaj o bezpieczeństwo, szybkość i aktualność swojej strony dzięki naszym kompleksowym pakietom opieki
          </p>
        </div>

        {/* Introduction */}
        <div className="glass-card p-8 rounded-2xl mb-16">
          <p className="text-foreground/90 leading-relaxed">
            Twoja strona WordPress wymaga regularnej opieki, aby pozostać bezpieczna, działać optymalnie i zapewniać najlepsze doświadczenia odwiedzającym. 
            Nasze pakiety opieki gwarantują, że Twoja witryna jest zawsze chroniona, zaktualizowana i działa bez zarzutu - abyś mógł skupić się na rozwoju swojego biznesu.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card key={index} className="glass-card border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Packages */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Pakiety Cenowe</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative glass-card border-primary/20 hover:border-primary/40 transition-all hover:scale-105 flex flex-col ${
                  pkg.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Najpopularniejszy
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-primary uppercase tracking-wide">
                    {pkg.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {pkg.price}
                    </span>
                    <span className="text-muted-foreground">/miesiąc</span>
                  </div>
                  <CardDescription className="mt-2 text-sm">
                    Idealny dla: {pkg.ideal}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-3">Co zawiera:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {pkg.notIncluded && (
                    <div className="mt-4 pt-4 border-t border-primary/10">
                      <h4 className="font-semibold text-sm mb-2 text-muted-foreground">Nie obejmuje:</h4>
                      <ul className="space-y-1">
                        {pkg.notIncluded.map((item, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => setAuditDialogOpen(true)}
                  >
                    <FileCheck className="w-4 h-4 mr-2" />
                    Bezpłatny audyt
                  </Button>
                  <Button 
                    className="w-full" 
                    variant={pkg.popular ? "default" : "outline"}
                    onClick={() => {
                      setSelectedPackage({ name: pkg.name, price: pkg.price });
                      setOrderDialogOpen(true);
                    }}
                  >
                    Zamów teraz - start w 48h
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-8">Porównanie Pakietów</h3>
          <div className="glass-card p-8 rounded-2xl overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b-2 border-primary/20">
                  <TableHead className="w-[220px] text-base font-bold text-foreground pb-4">Funkcja</TableHead>
                  <TableHead className="text-center text-base font-bold pb-4">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-primary">Basic Care</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">CHF 215</span>
                    </div>
                  </TableHead>
                  <TableHead className="text-center text-base font-bold pb-4 bg-primary/5 rounded-t-lg">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="text-primary">Professional</span>
                      </div>
                      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">CHF 430</span>
                    </div>
                  </TableHead>
                  <TableHead className="text-center text-base font-bold pb-4">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-primary">Business</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">CHF 755</span>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-background/50 transition-colors">
                  <TableCell className="font-semibold py-4">Częstotliwość aktualizacji</TableCell>
                  <TableCell className="text-center py-4">Co miesiąc</TableCell>
                  <TableCell className="text-center py-4 bg-primary/5">Co 2 tyg.</TableCell>
                  <TableCell className="text-center py-4">Co tydzień</TableCell>
                </TableRow>
                <TableRow className="hover:bg-background/50 transition-colors">
                  <TableCell className="font-semibold py-4">Kopie zapasowe</TableCell>
                  <TableCell className="text-center py-4">Co tydzień</TableCell>
                  <TableCell className="text-center py-4 bg-primary/5">Codziennie</TableCell>
                  <TableCell className="text-center py-4">Codziennie + test</TableCell>
                </TableRow>
                <TableRow className="hover:bg-background/50 transition-colors">
                  <TableCell className="font-semibold py-4">Przechowywanie backupów</TableCell>
                  <TableCell className="text-center py-4">30 dni</TableCell>
                  <TableCell className="text-center py-4 bg-primary/5">60 dni</TableCell>
                  <TableCell className="text-center py-4">90 dni</TableCell>
                </TableRow>
                <TableRow className="hover:bg-background/50 transition-colors">
                  <TableCell className="font-semibold py-4">Godziny pracy/miesiąc</TableCell>
                  <TableCell className="text-center py-4">0.25h</TableCell>
                  <TableCell className="text-center py-4 bg-primary/5">1h</TableCell>
                  <TableCell className="text-center py-4">3h</TableCell>
                </TableRow>
                <TableRow className="hover:bg-background/50 transition-colors">
                  <TableCell className="font-semibold py-4">Czas reakcji wsparcia</TableCell>
                  <TableCell className="text-center py-4">48h</TableCell>
                  <TableCell className="text-center py-4 bg-primary/5">24h</TableCell>
                  <TableCell className="text-center py-4">12h</TableCell>
                </TableRow>
                <TableRow className="hover:bg-background/50 transition-colors">
                  <TableCell className="font-semibold py-4">Optymalizacja wydajności</TableCell>
                  <TableCell className="text-center py-4">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-muted">
                      <span className="text-xs text-muted-foreground">—</span>
                    </span>
                  </TableCell>
                  <TableCell className="text-center py-4 bg-primary/5">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span>Miesięczna</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center py-4">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span>Cotygodniowa</span>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-background/50 transition-colors">
                  <TableCell className="font-semibold py-4">Monitoring bezpieczeństwa</TableCell>
                  <TableCell className="text-center py-4">Podstawowy</TableCell>
                  <TableCell className="text-center py-4 bg-primary/5">Zaawansowany</TableCell>
                  <TableCell className="text-center py-4">Pełny audyt</TableCell>
                </TableRow>
                <TableRow className="hover:bg-background/50 transition-colors border-b-2 border-primary/10">
                  <TableCell className="font-semibold py-4">Doradztwo SEO</TableCell>
                  <TableCell className="text-center py-4">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-muted">
                      <span className="text-xs text-muted-foreground">—</span>
                    </span>
                  </TableCell>
                  <TableCell className="text-center py-4 bg-primary/5">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span>Podstawowe</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center py-4">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span>Zaawansowane</span>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Additional Services */}
        <div className="glass-card p-8 rounded-2xl mb-20">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Plus className="w-6 h-6 text-primary" />
            Dodatkowe Usługi
          </h3>
          <p className="text-muted-foreground mb-6">Dostępne do wszystkich pakietów</p>
          <div className="grid md:grid-cols-2 gap-3">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-background/50 border border-primary/10 text-sm">
                <span className="text-foreground">{service.name}</span>
                <span className="text-primary font-semibold whitespace-nowrap ml-4">{service.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Co Mówią Nasi Klienci</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card border-primary/20">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-foreground/90 italic">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="glass-card border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                Wymogi techniczne
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Dostęp do panelu administracyjnego WordPress</li>
                <li>• Dostęp FTP lub do File Managera w hostingu</li>
                <li>• Dostęp do phpMyAdmin lub możliwość eksportu bazy danych</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Czego nie obejmuje opieka
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Dostęp do konfiguracji serwera</li>
                <li>• Zaawansowane modyfikacje wymagające SSH</li>
                <li>• Tworzenie kompletnie nowych funkcjonalności</li>
                <li>• Przepisywanie całej strony od podstaw</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Najczęściej Zadawane Pytania</h3>
          <Accordion type="single" collapsible className="glass-card p-6 rounded-2xl">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Guarantees */}
        <div className="glass-card p-8 rounded-2xl mb-20">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Gwarancje
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Gwarancja satysfakcji</p>
                <p className="text-sm text-muted-foreground">Jeśli w pierwszym miesiącu nie będziesz zadowolony z naszych usług, zwrócimy 100% opłaty.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Gwarancja bezpieczeństwa</p>
                <p className="text-sm text-muted-foreground">W przypadku awarii wynikającej z naszych działań, naprawimy wszystko bezpłatnie i zrekompensujemy straty.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Gwarancja dostępności</p>
                <p className="text-sm text-muted-foreground">W pakiecie Business gwarantujemy 99.5% uptime strony (monitorowane przez nas).</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
        </div>
      </div>

      {/* Forms */}
      <FreeAuditForm open={auditDialogOpen} onOpenChange={setAuditDialogOpen} />
      <OrderForm 
        open={orderDialogOpen} 
        onOpenChange={setOrderDialogOpen}
        packageName={selectedPackage.name}
        packagePrice={selectedPackage.price}
      />
    </section>
  );
};

export default WordPressCare;
