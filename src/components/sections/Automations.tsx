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
    title: "Automatische Anmeldung in Google Classroom",
    description: "Das System erstellt automatisch Teilnehmerkonten basierend auf Daten aus Google Forms, weist sie den entsprechenden Kursen zu, sendet Benachrichtigungen über den Kursstart und generiert Zugriffsmaterialien. Ideal für Schulungsunternehmen, die Dutzende Kurse pro Monat durchführen.",
    examples: "Anwendungsbeispiel: Ein IT-Unternehmen, das Programmierkurse anbietet, kann Teilnehmer automatisch registrieren, individuelle Lernumgebungen erstellen und Fortschritte verfolgen.",
    integration: "Verbindet sich mit: Google Forms (Registrierung) → Gmail (Benachrichtigungen) → Google Docs (Zertifikate)",
    icon: GraduationCap,
    color: "text-primary"
  },
  {
    title: "Intelligente Berichte in Google Sheets",
    description: "Automatischer Datenabruf aus verschiedenen Quellen (Gmail, Calendar, Forms, Drive), deren Verarbeitung und Erstellung detaillierter Verkaufs-, Anwesenheits- oder Projektberichte. Das System aktualisiert Daten in Echtzeit und sendet Benachrichtigungen über das Erreichen bestimmter Kennzahlen.",
    examples: "Anwendungsbeispiel: Täglicher Verkaufsbericht, der Daten aus Gmail (Anfragen), Calendar (Meetings) und Forms (Kundenfeedback) kombiniert.",
    integration: "Verbindet sich mit: Alle Google Tools → Dashboard in Sheets → Benachrichtigungen in Chat",
    icon: BarChart3,
    color: "text-primary"
  },
  {
    title: "Automatische Dokumentenerstellung",
    description: "Erstellung personalisierter Dokumente (Verträge, Angebote, Zertifikate, Rechnungen, Berichte) basierend auf Vorlagen in Google Docs. Das System füllt automatisch Daten aus Tabellenkalkulationen aus, formatiert Dokumente und speichert sie in den entsprechenden Ordnern mit den richtigen Zugriffsrechten.",
    examples: "Anwendungsbeispiel: Nach Kursabschluss automatische Erstellung von Zertifikaten mit Teilnehmerdaten, Ergebnissen und digitaler Signatur.",
    integration: "Verbindet sich mit: Google Forms (Daten) → Sheets (Datenbank) → Docs (Vorlagen) → Drive (Archiv)",
    icon: FileText,
    color: "text-accent"
  },
  {
    title: "Intelligentes Kalendermanagement",
    description: "Automatische Raumbuchung, Besprechungsplanung basierend auf Teilnehmerverfügbarkeit, Versand von Erinnerungen, Erstellung von Links zu Online-Meetings und Synchronisation mit externen Systemen. Optimiert die Ressourcennutzung und eliminiert Terminkonflikte.",
    examples: "Anwendungsbeispiel: Das System plant automatisch Verkaufsgespräche, reserviert Räume, sendet Einladungen und bereitet Materialien vor.",
    integration: "Verbindet sich mit: Gmail (Einladungen) → Meet (Online-Meetings) → Sheets (Nutzungsberichte)",
    icon: Calendar,
    color: "text-secondary"
  },
  {
    title: "Erweiterte Gmail-CRM-Integration",
    description: "Automatische Verarbeitung eingehender E-Mails, Klassifizierung von Nachrichten (Anfragen, Beschwerden, Bestellungen), Erstellung von Datensätzen im CRM-System, Zuweisung an entsprechende Mitarbeiter und Verfolgung der Kommunikationshistorie. Nutzt KI zur Sentiment-Analyse und Priorisierung.",
    examples: "Anwendungsbeispiel: E-Mail mit Preisanfrage erstellt automatisch einen Lead im CRM, weist ihn einem Vertriebsmitarbeiter zu und generiert eine Antwort mit einem Angebot.",
    integration: "Verbindet sich mit: Gmail (Kommunikation) → Sheets (CRM) → Calendar (Meetings) → Docs (Angebote)",
    icon: Mail,
    color: "text-primary"
  },
  {
    title: "Digitaler Dokumentenworkflow",
    description: "Umfassendes System für Unternehmensdokumentenworkflow (Urlaubsanträge, Dienstreisen, Bestellungen, Rechnungen) mit automatischem Routing an die richtigen Personen, Fristkontrolle, Eskalation bei Verzögerungen und Archivierung. Volle Statuskontrolle und Änderungshistorie.",
    examples: "Anwendungsbeispiel: Urlaubsantrag durchläuft das Genehmigungssystem, aktualisiert automatisch den Kalender und sendet Benachrichtigungen an das Team.",
    integration: "Verbindet sich mit: Forms (Anträge) → Sheets (Tracking) → Gmail (Benachrichtigungen) → Calendar (Planung)",
    icon: Users,
    color: "text-secondary"
  },
  {
    title: "Google Chat Benachrichtigungssystem",
    description: "Zentrale Kommunikationszentrale, die alle Automatisierungen verbindet. Sendet intelligente Benachrichtigungen über Geschäftsereignisse, Warnungen bei KPI-Überschreitungen, Benachrichtigungen über Fristen und Projektstatus. Integriert sich über API mit externen Systemen.",
    examples: "Anwendungsbeispiel: Sofortige Benachrichtigung des Teams über neue Bestellung, zusammen mit Kundendaten und nächsten Schritten.",
    integration: "Verbindet sich mit: Alle Systeme → Chat (Benachrichtigungen) → Sheets (Logs) → Calendar (Erinnerungen)",
    icon: MessageSquare,
    color: "text-primary"
  },
  {
    title: "Datenbank- und Inventarverwaltung",
    description: "Automatische Verfolgung von Unternehmensressourcen (Ausrüstung, Lizenzen, Abonnements), Überwachung von Ablaufdaten, Erstellung von Nutzungsberichten und Planung von Verlängerungen. Das System verwaltet auch Datenbanken von Kunden, Lieferanten und Geschäftspartnern mit automatischer Datenaktualisierung.",
    examples: "Anwendungsbeispiel: Automatische Benachrichtigungen über ablaufende Lizenzen, Erstellung von Verlängerungsaufträgen und Aktualisierung des IT-Budgets.",
    integration: "Verbindet sich mit: Sheets (Datenbanken) → Calendar (Fristen) → Gmail (Benachrichtigungen) → Docs (Berichte)",
    icon: Database,
    color: "text-accent"
  },
  {
    title: "Sicherheits- und Compliance-System",
    description: "Automatische Überwachung des Dokumentenzugriffs, Verfolgung von Änderungen an sensiblen Dateien, Erstellung von Sicherheitslogs und Compliance-Berichten. Das System verwaltet automatisch Benutzerberechtigungen, archiviert Dokumente gemäß Aufbewahrungsrichtlinien und sendet Warnungen bei verdächtigen Aktivitäten.",
    examples: "Anwendungsbeispiel: Automatisches Entfernen von Berechtigungen ehemaliger Mitarbeiter, Archivierung von Dokumenten nach einer bestimmten Zeit und Überwachung des Zugriffs auf DSGVO-Daten.",
    integration: "Verbindet sich mit: Drive (Berechtigungen) → Sheets (Logs) → Gmail (Warnungen) → Admin Console (Verwaltung)",
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
            Unsere Automatisierungen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in animate-delay-200">
            Entdecken Sie die Automatisierungsmöglichkeiten, die die Arbeitsweise Ihres Unternehmens transformieren. 
            Jede Automatisierung kann unabhängig funktionieren oder in umfassende Geschäftsprozesse integriert werden.
          </p>
        </div>
        
        {/* Integration highlight */}
        <div className="max-w-4xl mx-auto mb-16 card-gradient rounded-2xl p-8 shadow-elegant animate-scale-in animate-delay-300">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Die Kraft der Integration
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Alle Automatisierungen können miteinander verbunden werden und schaffen so umfassende Geschäftsprozesse. 
              Zum Beispiel: Registrierung in Google Forms → automatische Kontoerstellung in Classroom → 
              Benachrichtigung per Gmail → Terminplanung in Calendar → 
              Zertifikatserstellung in Docs → Berichtsaktualisierung in Sheets.
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
                      <p className="text-sm font-medium text-foreground mb-1">Anwendungsbeispiel:</p>
                      <p className="text-sm text-muted-foreground">{automation.examples}</p>
                    </div>
                    
                    <div className="p-3 bg-secondary/10 rounded-lg border-l-4 border-secondary">
                      <p className="text-sm font-medium text-foreground mb-1">Integrationen:</p>
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
              Bereit für die Automatisierung?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Jedes Unternehmen hat einzigartige Bedürfnisse. Kontaktieren Sie uns, um zu besprechen, 
              welche Automatisierungen für Ihr Geschäft am besten geeignet sind und wie sie in ein 
              umfassendes System integriert werden können.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 shadow-button transition-all duration-300 hover:scale-105 glow-primary rounded-lg font-medium"
            >
              Schreiben Sie uns, was Sie automatisieren möchten
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automations;
