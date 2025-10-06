import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

export default function AGB() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Allgemeine Geschäftsbedingungen — ProgressiveGroup";
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
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Allgemeine Geschäftsbedingungen (AGB)
            </span>
          </h1>
          <p className="text-muted-foreground">
            Gültig ab: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Geltungsbereich</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              1.1 Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle Verträge zwischen ProgressiveGroup mit Sitz in ul. Rynek 5/6, 59-220 Legnica, Polen (nachfolgend "Auftragnehmer") und dem Kunden (nachfolgend "Auftraggeber") über die Erbringung von IT-Dienstleistungen.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              1.2 Unsere Dienstleistungen umfassen insbesondere:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li>• Automatisierung von Geschäftsprozessen in Google Workspace</li>
              <li>• Erstellung professioneller Präsentationen</li>
              <li>• WordPress-Website-Betreuung und -Wartung</li>
              <li>• Entwicklung von Websites</li>
              <li>• IT-Beratung und Support</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              1.3 Abweichende Bedingungen des Auftraggebers erkennen wir nicht an, es sei denn, wir hätten ausdrücklich schriftlich ihrer Geltung zugestimmt.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Vertragsabschluss</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              2.1 Unsere Angebote sind freibleibend und unverbindlich, sofern nicht ausdrücklich als verbindlich gekennzeichnet.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              2.2 Der Vertrag kommt durch schriftliche Auftragsbestätigung des Auftragnehmers oder durch Beginn der Leistungserbringung zustande.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              2.3 Über das Kontaktformular oder per E-Mail übermittelte Anfragen stellen noch kein bindendes Angebot dar. Der Vertrag kommt erst durch unsere schriftliche Bestätigung zustande.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              2.4 Mündliche oder fernmündliche Vereinbarungen bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung durch den Auftragnehmer.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Leistungsumfang und Pflichten des Auftragnehmers</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              3.1 Der konkrete Leistungsumfang ergibt sich aus der jeweiligen Leistungsbeschreibung und Auftragsbestätigung.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              3.2 Der Auftragnehmer erbringt seine Leistungen mit der Sorgfalt eines ordentlichen Kaufmanns unter Einsatz qualifizierter Mitarbeiter.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              3.3 Der Auftragnehmer ist berechtigt, Unterauftragnehmer zur Leistungserbringung einzusetzen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              3.4 Änderungen oder Erweiterungen des vereinbarten Leistungsumfangs bedürfen der schriftlichen Vereinbarung und können zu einer Anpassung der Vergütung und der Fristen führen.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Mitwirkungspflichten des Auftraggebers</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              4.1 Der Auftraggeber stellt alle für die Leistungserbringung erforderlichen Informationen, Zugangsdaten und Materialien rechtzeitig und vollständig zur Verfügung.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              4.2 Der Auftraggeber benennt einen Ansprechpartner, der zur Entgegennahme von Informationen und zur Abgabe von Erklärungen befugt ist.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              4.3 Der Auftraggeber erstellt regelmäßige Sicherungskopien seiner Daten. Bei WordPress-Wartungsverträgen erfolgt die Datensicherung durch den Auftragnehmer gemäß vereinbartem Paket.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              4.4 Verzögerungen, die durch nicht rechtzeitige oder unvollständige Mitwirkung des Auftraggebers entstehen, gehen nicht zu Lasten des Auftragnehmers und können zu einer Anpassung von Fristen und Vergütung führen.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Fristen und Termine</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              5.1 Fristen und Termine sind nur dann verbindlich, wenn sie ausdrücklich schriftlich als verbindlich vereinbart wurden.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              5.2 Bei Express-Lieferung gelten die spezifisch vereinbarten verkürzten Fristen gegen Aufpreis.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              5.3 Höhere Gewalt, Arbeitskonflikte, Naturkatastrophen und andere unvorhersehbare Ereignisse befreien den Auftragnehmer für die Dauer der Störung von der Leistungspflicht.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Vergütung und Zahlung</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              6.1 Es gelten die zum Zeitpunkt des Vertragsabschlusses aktuellen Preise. Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              6.2 <strong>Einmalige Projekte:</strong> Die Zahlung erfolgt nach folgender Regelung:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li>• 50% Anzahlung bei Auftragserteilung</li>
              <li>• 50% nach Abnahme und Lieferung des Endprodukts</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              6.3 <strong>Wartungsverträge (WordPress Care):</strong> Die monatliche Gebühr ist im Voraus bis zum 5. des laufenden Monats zu zahlen.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              6.4 Zahlungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zu leisten, sofern nichts anderes vereinbart wurde.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              6.5 Bei Zahlungsverzug werden Verzugszinsen in Höhe von 8 Prozentpunkten über dem jeweiligen Basiszinssatz berechnet.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              6.6 Der Auftraggeber kann nur mit unbestrittenen oder rechtskräftig festgestellten Forderungen aufrechnen.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Urheberrechte und Nutzungsrechte</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              7.1 Alle erstellten Werke (Websites, Präsentationen, Code, Automatisierungen) sind urheberrechtlich geschützt.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              7.2 Nach vollständiger Zahlung erhält der Auftraggeber ein einfaches, zeitlich und räumlich unbeschränktes Nutzungsrecht an den erstellten Werken.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              7.3 Die Weitergabe oder Vervielfältigung des Quellcodes an Dritte bedarf der ausdrücklichen schriftlichen Zustimmung des Auftragnehmers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              7.4 Der Auftraggeber räumt dem Auftragnehmer das Recht ein, die erstellten Arbeiten (ggf. anonymisiert) zu Referenzzwecken zu nutzen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              7.5 Vom Auftraggeber zur Verfügung gestellte Inhalte dürfen keine Rechte Dritter verletzen. Der Auftraggeber stellt den Auftragnehmer von Ansprüchen Dritter frei.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Gewährleistung</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              8.1 <strong>Mängelansprüche:</strong> Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme bzw. Lieferung.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              8.2 Der Auftraggeber hat Mängel unverzüglich schriftlich zu rügen. Offensichtliche Mängel sind innerhalb von 7 Tagen nach Abnahme zu rügen.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              8.3 Bei berechtigter Mängelrüge hat der Auftragnehmer das Recht zur Nachbesserung. Bei Fehlschlagen der Nachbesserung nach angemessener Frist kann der Auftraggeber Minderung oder Rücktritt verlangen.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              8.4 Keine Gewährleistung besteht für Mängel, die durch:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li>• Unsachgemäße Bedienung oder Änderungen durch den Auftraggeber</li>
              <li>• Nicht autorisierte Eingriffe Dritter</li>
              <li>• Höhere Gewalt oder äußere Einflüsse</li>
              <li>• Nichtbeachtung von Bedienungs- oder Wartungsanweisungen</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              8.5 <strong>WordPress-Wartungsverträge:</strong> Die Gewährleistung umfasst die Funktionsfähigkeit der Website im Rahmen des vereinbarten Pakets. Updates und Sicherheitspatches werden regelmäßig eingespielt.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Haftung</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              9.1 Der Auftragnehmer haftet unbeschränkt:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li>• Bei Vorsatz und grober Fahrlässigkeit</li>
              <li>• Bei Verletzung von Leben, Körper oder Gesundheit</li>
              <li>• Nach den Vorschriften des Produkthaftungsgesetzes</li>
              <li>• Im Rahmen übernommener Garantien</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              9.2 Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              9.3 Im Übrigen ist die Haftung ausgeschlossen.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              9.4 Die Haftung für Datenverlust ist auf den typischen Wiederherstellungsaufwand beschränkt, der bei regelmäßiger Anfertigung von Sicherungskopien eingetreten wäre.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              9.5 Die vorstehenden Haftungsbeschränkungen gelten auch für die persönliche Haftung der Mitarbeiter, Vertreter und Erfüllungsgehilfen des Auftragnehmers.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Vertraulichkeit und Datenschutz</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              10.1 Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit bekannt gewordenen vertraulichen Informationen geheim zu halten.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              10.2 Der Auftragnehmer verarbeitet personenbezogene Daten gemäß der DSGVO und dem polnischen Datenschutzgesetz. Details regelt die <Link to="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</Link>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              10.3 Bei Verarbeitung personenbezogener Daten im Auftrag wird ein separater Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO geschlossen.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Kündigung und Vertragslaufzeit</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              11.1 <strong>Einmalige Projekte:</strong> Der Vertrag endet mit vollständiger Leistungserbringung und Zahlung.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              11.2 <strong>Wartungsverträge:</strong>
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li>• Mindestvertragslaufzeit: 3 Monate</li>
              <li>• Kündigungsfrist: 30 Tage zum Monatsende</li>
              <li>• Nach Ablauf der Mindestlaufzeit verlängert sich der Vertrag automatisch um jeweils 1 Monat</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              11.3 Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              11.4 Kündigungen bedürfen der Schriftform (E-Mail ausreichend).
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Zufriedenheitsgarantie</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              12.1 <strong>WordPress-Wartungsverträge:</strong> Bei Unzufriedenheit mit unseren Leistungen im ersten Monat erstatten wir 100% der Gebühr zurück (gilt nur für den ersten Vertragsmonat).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              12.2 <strong>Einmalige Projekte:</strong> Wir bieten 2-3 Korrekturschleifen (je nach Paket), um Ihre Zufriedenheit sicherzustellen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              12.3 Die Garantie gilt nicht bei Ansprüchen, die über den vereinbarten Leistungsumfang hinausgehen.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">13. Höhere Gewalt</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ereignisse höherer Gewalt (z.B. Naturkatastrophen, Kriege, Pandemien, Stromausfälle, Internet-Ausfälle, Server-Ausfälle bei Drittanbietern) befreien beide Parteien für die Dauer der Störung und im Umfang ihrer Auswirkung von den Leistungspflichten. Die Parteien sind verpflichtet, entsprechende Informationen unverzüglich mitzuteilen und ihre Verpflichtungen nach Treu und Glauben anzupassen.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">14. Änderungen der AGB</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              14.1 Der Auftragnehmer behält sich vor, diese AGB zu ändern. Änderungen werden dem Auftraggeber mindestens 6 Wochen vor ihrem Inkrafttreten per E-Mail mitgeteilt.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              14.2 Widerspricht der Auftraggeber nicht innerhalb von 6 Wochen nach Zugang der Mitteilung, gelten die geänderten AGB als akzeptiert. Der Auftragnehmer wird in der Mitteilung auf das Widerspruchsrecht und die Bedeutung der Frist hinweisen.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">15. Schlussbestimmungen</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              15.1 <strong>Anwendbares Recht:</strong> Es gilt das Recht der Republik Polen unter Ausschluss des UN-Kaufrechts (CISG).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              15.2 <strong>Gerichtsstand:</strong> Ausschließlicher Gerichtsstand für alle Streitigkeiten ist Legnica, Polen, sofern der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              15.3 <strong>Salvatorische Klausel:</strong> Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              15.4 <strong>Schriftform:</strong> Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform. Dies gilt auch für die Abbedingung des Schriftformerfordernisses.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl bg-primary/5">
            <h2 className="text-2xl font-bold text-foreground mb-4">Kontakt</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bei Fragen zu diesen AGB kontaktieren Sie uns bitte:
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

