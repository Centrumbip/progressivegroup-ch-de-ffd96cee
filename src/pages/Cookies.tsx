import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie } from 'lucide-react';

export default function Cookies() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Cookie-Richtlinie — ProgressiveGroup";
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
            <Cookie className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Cookie-Richtlinie
            </span>
          </h1>
          <p className="text-muted-foreground">
            Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Was sind Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Gerät (Computer, Smartphone, Tablet) gespeichert werden. Sie ermöglichen es der Website, Ihr Gerät wiederzuerkennen und bestimmte Informationen über Ihre Nutzung zu speichern.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cookies werden von nahezu allen Websites verwendet, um das Nutzererlebnis zu verbessern und grundlegende Funktionen bereitzustellen.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Welche Cookies verwenden wir?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Unsere Website verwendet verschiedene Arten von Cookies, um die Grundfunktionen bereitzustellen und Ihr Nutzererlebnis zu verbessern. Sie können Ihre Präferenzen für verschiedene Cookie-Kategorien anpassen.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.1 Technisch notwendige Cookies (Essenzielle Cookies)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Diese Cookies sind für die Grundfunktionalität der Website unbedingt erforderlich und können nicht deaktiviert werden:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Cookie-Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Zweck</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Laufzeit</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono text-xs">session_id</td>
                    <td className="py-3 px-4">Sitzungsverwaltung und Authentifizierung</td>
                    <td className="py-3 px-4">Session (bis Browser geschlossen wird)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono text-xs">csrf_token</td>
                    <td className="py-3 px-4">Schutz vor Cross-Site-Request-Forgery-Angriffen</td>
                    <td className="py-3 px-4">Session</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono text-xs">cookie_consent</td>
                    <td className="py-3 px-4">Speicherung Ihrer Cookie-Einstellungen</td>
                    <td className="py-3 px-4">12 Monate</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono text-xs">theme_preference</td>
                    <td className="py-3 px-4">Speicherung Ihrer Theme-Präferenz (hell/dunkel)</td>
                    <td className="py-3 px-4">12 Monate</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Rechtsgrundlage:</strong> Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) – diese Cookies sind zur Bereitstellung der grundlegenden Website-Funktionen erforderlich.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Cookies von Drittanbietern</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Unsere Website verwendet minimale Dienste von Drittanbietern, die möglicherweise eigene Cookies setzen:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.1 Supabase (Backend-Dienst)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wir verwenden Supabase für unsere Backend-Infrastruktur (Datenbank, Authentifizierung, Server-Funktionen).
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li>• <strong>Anbieter:</strong> Supabase Inc., USA</li>
              <li>• <strong>Zweck:</strong> Technische Bereitstellung der Website-Funktionen</li>
              <li>• <strong>Cookie-Typ:</strong> Technisch notwendig (Session-Management)</li>
              <li>• <strong>Datenschutz:</strong> <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">supabase.com/privacy</a></li>
              <li>• <strong>Rechtsgrundlage:</strong> Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) + EU-Standardvertragsklauseln</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.2 Zahlungsanbieter (nur bei Vertragsabschluss)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bei Zahlungsvorgängen werden Sie auf die Websites unserer Zahlungsdienstleister weitergeleitet:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li>• <strong>Stripe:</strong> <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">stripe.com/privacy</a></li>
              <li>• <strong>PayPal:</strong> <a href="https://www.paypal.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">paypal.com/privacy</a></li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Diese Anbieter setzen eigene Cookies gemäß ihrer Datenschutzrichtlinien.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Analyse- und Marketing-Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wir verwenden auch Analyse- und Marketing-Cookies, um unsere Website zu verbessern und relevante Inhalte zu zeigen:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.1 Analyse-Cookies</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Cookie-Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Zweck</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Laufzeit</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono text-xs">_ga</td>
                    <td className="py-3 px-4">Google Analytics - Unterscheidung von Benutzern</td>
                    <td className="py-3 px-4">2 Jahre</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono text-xs">_ga_*</td>
                    <td className="py-3 px-4">Google Analytics - Speicherung des Session-Status</td>
                    <td className="py-3 px-4">2 Jahre</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono text-xs">_gid</td>
                    <td className="py-3 px-4">Google Analytics - Unterscheidung von Benutzern</td>
                    <td className="py-3 px-4">24 Stunden</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.2 Marketing-Cookies</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Diese Cookies werden verwendet, um personalisierte Werbung zu zeigen:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Cookie-Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Zweck</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Laufzeit</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono text-xs">_fbp</td>
                    <td className="py-3 px-4">Facebook Pixel - Tracking für Werbung</td>
                    <td className="py-3 px-4">3 Monate</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono text-xs">_gcl_au</td>
                    <td className="py-3 px-4">Google Ads - Conversion-Tracking</td>
                    <td className="py-3 px-4">3 Monate</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) – diese Cookies werden nur mit Ihrer ausdrücklichen Zustimmung gesetzt.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Wie können Sie Cookies verwalten?</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.1 Cookie-Banner</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bei Ihrem ersten Besuch unserer Website erscheint ein Cookie-Banner, in dem Sie Ihre Präferenzen für verschiedene Cookie-Kategorien festlegen können:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li>• <strong>Alle akzeptieren:</strong> Aktiviert alle Cookie-Kategorien</li>
              <li>• <strong>Nur notwendige:</strong> Aktiviert nur technisch notwendige Cookies</li>
              <li>• <strong>Einstellungen:</strong> Granulare Auswahl einzelner Cookie-Kategorien</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.2 Browser-Einstellungen</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sie können Cookies in Ihren Browser-Einstellungen verwalten oder blockieren:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li>• <strong>Google Chrome:</strong> Einstellungen → Datenschutz und Sicherheit → Cookies</li>
              <li>• <strong>Mozilla Firefox:</strong> Einstellungen → Datenschutz & Sicherheit → Cookies</li>
              <li>• <strong>Safari:</strong> Einstellungen → Datenschutz → Cookies blockieren</li>
              <li>• <strong>Microsoft Edge:</strong> Einstellungen → Cookies und Websiteberechtigungen</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.3 Cookies löschen</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sie können bereits gespeicherte Cookies jederzeit in Ihrem Browser löschen. Die genaue Vorgehensweise finden Sie in der Hilfe Ihres Browsers.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.4 Auswirkungen der Cookie-Deaktivierung</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Wichtig:</strong> Wenn Sie Cookies deaktivieren oder löschen, können einige Funktionen unserer Website möglicherweise nicht mehr oder nur eingeschränkt funktionieren:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Kontaktformulare funktionieren möglicherweise nicht</li>
              <li>• Ihre Theme-Einstellungen (hell/dunkel) werden nicht gespeichert</li>
              <li>• Sie müssen sich bei jedem Besuch erneut anmelden</li>
            </ul>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Local Storage und Session Storage</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Zusätzlich zu Cookies verwenden wir Local Storage und Session Storage (Web Storage API) für:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li>• Zwischenspeicherung von Formular-Eingaben (verhindert Datenverlust bei versehentlichem Schließen)</li>
              <li>• Speicherung von UI-Einstellungen (z.B. geöffnete/geschlossene Menüs)</li>
              <li>• Temporäre Daten während der Sitzung</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Diese Daten werden nur lokal auf Ihrem Gerät gespeichert und nicht an unsere Server übertragen. Sie können über die Browser-Entwicklertools gelöscht werden.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Ihre Rechte</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Im Zusammenhang mit der Verwendung von Cookies haben Sie folgende Rechte gemäß DSGVO:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Auskunft über gespeicherte Cookies und Daten</li>
              <li>• <strong>Löschungsrecht (Art. 17 DSGVO):</strong> Löschung Ihrer Cookie-Daten</li>
              <li>• <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Widerspruch gegen die Cookie-Nutzung</li>
              <li>• <strong>Beschwerderecht (Art. 77 DSGVO):</strong> Beschwerde bei der polnischen Datenschutzbehörde (PUODO)</li>
            </ul>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Änderungen der Cookie-Richtlinie</h2>
            <p className="text-muted-foreground leading-relaxed">
              Wir behalten uns vor, diese Cookie-Richtlinie bei Bedarf zu aktualisieren, um Änderungen an unserer Website oder gesetzlichen Anforderungen Rechnung zu tragen. Die jeweils aktuelle Version finden Sie stets auf dieser Seite. Das Datum der letzten Aktualisierung ist oben angegeben.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Weitere Informationen</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Weitere Informationen zum Datenschutz finden Sie in unserer ausführlichen <Link to="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</Link>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Weitere Informationen zu Cookies im Allgemeinen:
            </p>
            <ul className="space-y-2 text-muted-foreground mt-4">
              <li>• <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aboutcookies.org</a></li>
              <li>• <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">allaboutcookies.org</a></li>
              <li>• <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">youronlinechoices.eu</a></li>
            </ul>
          </div>

          <div className="glass-card p-8 rounded-2xl bg-primary/5">
            <h2 className="text-2xl font-bold text-foreground mb-4">Kontakt</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bei Fragen zu unserer Verwendung von Cookies kontaktieren Sie uns bitte:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>ProgressiveGroup</strong></p>
              <p>ul. Rynek 5/6</p>
              <p>59-220 Legnica, Polen</p>
              <p className="mt-2"><strong>E-Mail:</strong> <a href="mailto:info@progressivegroup.ch" className="text-primary hover:underline">info@progressivegroup.ch</a></p>
              <p><strong>Web:</strong> <a href="https://www.progressivegroup.ch" className="text-primary hover:underline">www.progressivegroup.ch</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

