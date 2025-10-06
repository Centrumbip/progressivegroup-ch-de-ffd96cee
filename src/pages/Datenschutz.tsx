import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

export default function Datenschutz() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Datenschutzerklärung — ProgressiveGroup";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Zurück zur Startseite</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Datenschutzerklärung
            </span>
          </h1>
          <p className="text-muted-foreground">
            Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Verantwortlicher für die Datenverarbeitung</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Verantwortlich für die Verarbeitung personenbezogener Daten im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <div className="bg-secondary/10 p-4 rounded-lg">
              <p className="font-semibold text-foreground">ProgressiveGroup</p>
              <p className="text-muted-foreground">ul. Rynek 5/6</p>
              <p className="text-muted-foreground">59-220 Legnica, Polen</p>
              <p className="text-muted-foreground mt-2">E-Mail: info@progressivegroup.ch</p>
              <p className="text-muted-foreground">Web: www.progressivegroup.ch</p>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Art der verarbeiteten Daten</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wir verarbeiten folgende Kategorien personenbezogener Daten:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Kontaktdaten:</strong> Vor- und Nachname, E-Mail-Adresse, Telefonnummer, Firmenname</li>
              <li>• <strong>Technische Daten:</strong> IP-Adresse, Browser-Typ, Betriebssystem, Zugriffszeiten</li>
              <li>• <strong>Nutzungsdaten:</strong> Besuchte Seiten, Verweildauer, Klickverhalten</li>
              <li>• <strong>Kommunikationsdaten:</strong> Inhalt von Kontaktformularen, E-Mail-Korrespondenz</li>
              <li>• <strong>Vertragsdaten:</strong> Bestellinformationen, Rechnungsdaten (bei Vertragsabschluss)</li>
            </ul>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Zwecke und Rechtsgrundlagen der Datenverarbeitung</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.1 Bereitstellung der Website</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Zweck:</strong> Technische Bereitstellung und Sicherheit der Website<br />
              <strong>Rechtsgrundlage:</strong> Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)<br />
              <strong>Speicherdauer:</strong> 30 Tage (Logfiles)
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.2 Kontaktformulare</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Zweck:</strong> Beantwortung von Anfragen, Kommunikation mit Interessenten<br />
              <strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) bzw. vorvertragliche Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO)<br />
              <strong>Speicherdauer:</strong> Bis zur vollständigen Bearbeitung der Anfrage, danach Löschung nach gesetzlichen Aufbewahrungsfristen
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.3 Vertragsabwicklung</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Zweck:</strong> Durchführung und Abwicklung von Verträgen<br />
              <strong>Rechtsgrundlage:</strong> Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)<br />
              <strong>Speicherdauer:</strong> Dauer der Vertragsbeziehung + gesetzliche Aufbewahrungsfristen (in Polen: 5 Jahre für Buchhaltungsunterlagen gem. polnischem Rechnungslegungsgesetz)
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.4 Newsletter (optional)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Zweck:</strong> Versand von Informationen über unsere Dienstleistungen<br />
              <strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)<br />
              <strong>Speicherdauer:</strong> Bis zum Widerruf der Einwilligung
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Weitergabe von Daten an Dritte</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wir geben Ihre personenbezogenen Daten nur in folgenden Fällen an Dritte weiter:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Hosting-Provider:</strong> Unsere Website wird auf Servern externer Dienstleister gehostet (Supabase - USA, mit EU-Standardvertragsklauseln)</li>
              <li>• <strong>E-Mail-Versand:</strong> Versand von Bestätigungs- und Benachrichtigungs-E-Mails über sichere SMTP-Dienste</li>
              <li>• <strong>Zahlungsabwicklung:</strong> Bei Vertragsabschluss: Stripe, PayPal (jeweils mit eigenen Datenschutzrichtlinien)</li>
              <li>• <strong>Gesetzliche Verpflichtungen:</strong> Wenn wir gesetzlich dazu verpflichtet sind (z.B. Steuerbehörden, Strafverfolgungsbehörden)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Alle Drittanbieter sind vertraglich verpflichtet, Ihre Daten vertraulich zu behandeln und nur im Rahmen der Leistungserbringung zu verwenden.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Datenübermittlung in Drittländer</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Einige unserer Dienstleister (z.B. Supabase) haben Serverstandorte außerhalb des Europäischen Wirtschaftsraums (EWR), insbesondere in den USA. Die Datenübermittlung erfolgt auf Grundlage:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO)</li>
              <li>• Angemessenheitsbeschlüsse der EU-Kommission</li>
              <li>• Ihrer ausdrücklichen Einwilligung</li>
            </ul>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies und ähnliche Technologien</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Unsere Website verwendet Cookies. Detaillierte Informationen finden Sie in unserer <Link to="/cookies" className="text-primary hover:underline">Cookie-Richtlinie</Link>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Essenzielle Cookies:</strong> Notwendig für die grundlegende Funktionalität der Website (Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO)<br />
              <strong>Speicherdauer:</strong> Session oder max. 1 Jahr
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Ihre Rechte</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Gemäß der DSGVO haben Sie folgende Rechte:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong>• Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten.
              </li>
              <li>
                <strong>• Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie haben das Recht, die Berichtigung unrichtiger Daten zu verlangen.
              </li>
              <li>
                <strong>• Löschungsrecht (Art. 17 DSGVO):</strong> Sie haben das Recht auf Löschung Ihrer Daten, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </li>
              <li>
                <strong>• Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschränkung der Verarbeitung zu verlangen.
              </li>
              <li>
                <strong>• Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen Format zu erhalten.
              </li>
              <li>
                <strong>• Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, der Verarbeitung Ihrer Daten zu widersprechen.
              </li>
              <li>
                <strong>• Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Sie können eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte unter: <a href="mailto:info@progressivegroup.ch" className="text-primary hover:underline">info@progressivegroup.ch</a>
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Beschwerderecht bei einer Aufsichtsbehörde</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer Daten zu beschweren.
            </p>
            <div className="bg-secondary/10 p-4 rounded-lg">
              <p className="font-semibold text-foreground">Zuständige Behörde in Polen:</p>
              <p className="text-muted-foreground mt-2">Prezes Urzędu Ochrony Danych Osobowych (PUODO)</p>
              <p className="text-muted-foreground">ul. Stawki 2</p>
              <p className="text-muted-foreground">00-193 Warszawa, Polen</p>
              <p className="text-muted-foreground mt-2">Tel: +48 22 531 03 00</p>
              <p className="text-muted-foreground">E-Mail: kancelaria@uodo.gov.pl</p>
              <p className="text-muted-foreground">Web: www.uodo.gov.pl</p>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Datensicherheit</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder unbefugten Zugriff zu schützen:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• SSL/TLS-Verschlüsselung für die Datenübertragung</li>
              <li>• Verschlüsselte Speicherung sensibler Daten</li>
              <li>• Regelmäßige Sicherheits-Updates und Backups</li>
              <li>• Zugriffsbeschränkungen und Authentifizierung</li>
              <li>• Regelmäßige Sicherheitsaudits</li>
            </ul>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Minderjährige</h2>
            <p className="text-muted-foreground leading-relaxed">
              Unsere Dienste richten sich nicht an Personen unter 18 Jahren. Wir erfassen wissentlich keine personenbezogenen Daten von Minderjährigen. Sollten wir feststellen, dass wir versehentlich Daten von Minderjährigen erhalten haben, werden diese umgehend gelöscht.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Änderungen der Datenschutzerklärung</h2>
            <p className="text-muted-foreground leading-relaxed">
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an geänderte rechtliche Rahmenbedingungen oder Änderungen unserer Dienste anzupassen. Die jeweils aktuelle Version finden Sie stets auf dieser Seite.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl bg-primary/5">
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Kontakt</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>E-Mail:</strong> <a href="mailto:info@progressivegroup.ch" className="text-primary hover:underline">info@progressivegroup.ch</a></p>
              <p><strong>Post:</strong> ProgressiveGroup, ul. Rynek 5/6, 59-220 Legnica, Polen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

