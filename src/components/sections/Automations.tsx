import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  BarChart3, 
  FileText, 
  Calendar, 
  Mail, 
  Users, 
  MessageSquare,
  Database,
  Shield
} from "lucide-react";

const automations = [
  {
    title: "Automatyczne zapisy w Google Classroom",
    description: "System automatycznie tworzy konta uczestników na podstawie danych z Google Forms, przypisuje ich do odpowiednich kursów, wysyła powiadomienia o rozpoczęciu szkolenia i generuje materiały dostępowe. Idealny dla firm szkoleniowych obsługujących dziesiątki kursów miesięcznie.",
    examples: "Przykład użycia: Firma IT prowadząca kursy programowania może automatycznie zapisywać uczestników, tworzyć indywidualne środowiska nauki i śledzić postępy.",
    integration: "Łączy się z: Google Forms (rejestracja) → Gmail (powiadomienia) → Google Docs (certyfikaty)",
    icon: GraduationCap,
    color: "text-primary"
  },
  {
    title: "Inteligentne raporty w Google Sheets",
    description: "Automatyczne pobieranie danych z różnych źródeł (Gmail, Calendar, Forms, Drive), ich przetwarzanie i generowanie szczegółowych raportów sprzedażowych, frekwencyjnych czy projektowych. System aktualizuje dane w czasie rzeczywistym i wysyła powiadomienia o osiągnięciu określonych wskaźników.",
    examples: "Przykład użycia: Dzienny raport sprzedaży łączący dane z Gmail (zapytania), Calendar (spotkania) i Forms (feedback klientów).",
    integration: "Łączy się z: Wszystkie narzędzia Google → Dashboard w Sheets → Powiadomienia w Chat",
    icon: BarChart3,
    color: "text-primary"
  },
  {
    title: "Automatyczne generowanie dokumentów",
    description: "Tworzenie spersonalizowanych dokumentów (umów, ofert, certyfikatów, faktur, raportów) na podstawie szablonów w Google Docs. System automatycznie wypełnia dane z arkuszy kalkulacyjnych, formatuje dokumenty i zapisuje je w odpowiednich folderach z właściwymi uprawnieniami dostępu.",
    examples: "Przykład użycia: Po zakończeniu kursu automatyczne generowanie certyfikatów z danymi uczestnika, wynikami i podpisem cyfrowym.",
    integration: "Łączy się z: Google Forms (dane) → Sheets (baza) → Docs (szablony) → Drive (archiwum)",
    icon: FileText,
    color: "text-accent"
  },
  {
    title: "Inteligentne zarządzanie kalendarzem",
    description: "Automatyczna rezerwacja sal, planowanie spotkań na podstawie dostępności uczestników, wysyłanie przypomnień, tworzenie linków do spotkań online i synchronizacja z systemami zewnętrznymi. Optymalizuje wykorzystanie zasobów i eliminuje konflikty terminów.",
    examples: "Przykład użycia: System automatycznie planuje spotkania handlowe, rezerwuje sale, wysyła zaproszenia i przygotowuje materiały.",
    integration: "Łączy się z: Gmail (zaproszenia) → Meet (spotkania online) → Sheets (raporty wykorzystania)",
    icon: Calendar,
    color: "text-secondary"
  },
  {
    title: "Zaawansowana integracja Gmail-CRM",
    description: "Automatyczne przetwarzanie emaili przychodzących, klasyfikacja wiadomości (zapytania, reklamacje, zamówienia), tworzenie rekordów w systemie CRM, przypisywanie do odpowiednich pracowników i śledzenie historii komunikacji. Wykorzystuje AI do analizy sentymentu i priorytetyzacji.",
    examples: "Przykład użycia: Email z zapytaniem o cennik automatycznie tworzy lead w CRM, przypisuje do handlowca i generuje odpowiedź z ofertą.",
    integration: "Łączy się z: Gmail (komunikacja) → Sheets (CRM) → Calendar (spotkania) → Docs (oferty)",
    icon: Mail,
    color: "text-primary"
  },
  {
    title: "Cyfrowy obieg dokumentów",
    description: "Kompleksowy system obiegu dokumentów firmowych (wnioski urlopowe, delegacje, zamówienia, faktury) z automatycznym routingiem do właściwych osób, kontrolą terminów, eskalacją przy opóźnieniach i archiwizacją. Pełna kontrola statusu i historia zmian.",
    examples: "Przykład użycia: Wniosek urlopowy przechodzi przez system zatwierdzania, automatycznie aktualizuje kalendarz i wysyła powiadomienia do zespołu.",
    integration: "Łączy się z: Forms (wnioski) → Sheets (tracking) → Gmail (powiadomienia) → Calendar (planowanie)",
    icon: Users,
    color: "text-secondary"
  },
  {
    title: "System powiadomień Google Chat",
    description: "Centrala komunikacyjna łącząca wszystkie automatyzacje. Wysyła inteligentne powiadomienia o zdarzeniach biznesowych, alerty o przekroczeniu KPI, powiadomienia o terminach i statusach projektów. Integruje się z systemami zewnętrznymi przez API.",
    examples: "Przykład użycia: Natychmiastowe powiadomienie zespołu o nowym zamówieniu, wraz z danymi klienta i kolejnymi krokami.",
    integration: "Łączy się z: Wszystkie systemy → Chat (powiadomienia) → Sheets (logi) → Calendar (przypomnienia)",
    icon: MessageSquare,
    color: "text-primary"
  },
  {
    title: "Zarządzanie bazami danych i inwentarzem",
    description: "Automatyczne śledzenie zasobów firmowych (sprzęt, licencje, subskrypcje), monitoring dat wygaśnięcia, generowanie raportów wykorzystania i planowanie odnowień. System zarządza również bazami klientów, dostawców i partnerów biznesowych z automatyczną aktualizacją danych.",
    examples: "Przykład użycia: Automatyczne powiadomienia o wygasających licencjach, generowanie zamówień odnowienia i aktualizacja budżetu IT.",
    integration: "Łączy się z: Sheets (bazy danych) → Calendar (terminy) → Gmail (powiadomienia) → Docs (raporty)",
    icon: Database,
    color: "text-accent"
  },
  {
    title: "System bezpieczeństwa i compliance",
    description: "Automatyczne monitorowanie dostępu do dokumentów, śledzenie zmian w plikach wrażliwych, generowanie logów bezpieczeństwa i raportów compliance. System automatycznie zarządza uprawnieniami użytkowników, archiwizuje dokumenty zgodnie z polityką retencji i wysyła alerty o podejrzanych działaniach.",
    examples: "Przykład użycia: Automatyczne usuwanie uprawnień byłych pracowników, archiwizacja dokumentów po określonym czasie i monitoring dostępu do danych RODO.",
    integration: "Łączy się z: Drive (uprawnienia) → Sheets (logi) → Gmail (alerty) → Admin Console (zarządzanie)",
    icon: Shield,
    color: "text-secondary"
  }
];

const Automations = () => {
  return (
    <section id="automations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Nasze automatyzacje
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in animate-delay-200">
            Odkryj możliwości automatyzacji, które transformują sposób pracy Twojej firmy. 
            Każda automatyzacja może działać niezależnie lub być połączona w kompleksowe procesy biznesowe.
          </p>
        </div>
        
        {/* Integration highlight */}
        <div className="max-w-4xl mx-auto mb-16 card-gradient rounded-2xl p-8 shadow-elegant animate-scale-in animate-delay-300">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Potęga integracji
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Wszystkie automatyzacje można ze sobą łączyć, tworząc kompleksowe procesy biznesowe. 
              Na przykład: rejestracja w Google Forms → automatyczne utworzenie konta w Classroom → 
              wysłanie powiadomienia przez Gmail → zaplanowanie spotkania w Calendar → 
              wygenerowanie certyfikatu w Docs → aktualizacja raportu w Sheets.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {automations.map((automation, index) => {
            const IconComponent = automation.icon;
            return (
              <Card 
                key={index} 
                className="card-gradient border-border hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-slide-up group h-full"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 rounded-xl bg-card/50 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`w-8 h-8 ${automation.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground leading-tight">
                    {automation.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {automation.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-primary/10 rounded-lg border-l-4 border-primary">
                      <p className="text-sm font-medium text-foreground mb-1">Przykład zastosowania:</p>
                      <p className="text-sm text-muted-foreground">{automation.examples}</p>
                    </div>
                    
                    <div className="p-3 bg-secondary/10 rounded-lg border-l-4 border-secondary">
                      <p className="text-sm font-medium text-foreground mb-1">Integracje:</p>
                      <p className="text-sm text-muted-foreground">{automation.integration}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in animate-delay-600">
          <div className="max-w-2xl mx-auto card-gradient rounded-2xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Gotowy na automatyzację?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Każda firma ma unikalne potrzeby. Skontaktuj się z nami, aby omówić, 
              które automatyzacje będą najlepsze dla Twojego biznesu i jak można je połączyć 
              w kompleksowy system.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 shadow-button transition-all duration-300 hover:scale-105 glow-primary rounded-lg font-medium"
            >
              Napisz nam co chcesz zautomatyzować.
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automations;