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
      title: "Regelmäßige Updates",
      description: "Systematische Updates von WordPress, Plugins und Themes",
    },
    {
      icon: Shield,
      title: "Sichere Backups",
      description: "Regelmäßige Backups Ihrer Website, sicher gespeichert",
    },
    {
      icon: Headphones,
      title: "Technischer Support",
      description: "Hilfe bei der Problemlösung und Durchführung von Änderungen",
    },
  ];

  const packages = [
    {
      name: "BASIC CARE",
      price: "CHF 215",
      ideal: "Kleine Visitenkarten-Websites und Blogs, die keine häufigen Änderungen erfordern",
      features: [
        "Monatliche Updates von WordPress, Plugins und Themes",
        "Wöchentliche Backups",
        "Backup-Speicherung für 30 Tage (sichere Cloud)",
        "Funktionalitätstest der Website nach jedem Update",
        "Website-Verfügbarkeitsüberwachung (E-Mail-Alarm bei Ausfall)",
        "Monatlicher Bericht über durchgeführte Maßnahmen",
        "15 Minuten kleinere Inhaltsänderungen pro Monat (Texte, Bilder)",
        "E-Mail-Support (Antwort innerhalb von 48 Arbeitsstunden)",
      ],
      notIncluded: [
        "Layout- und Designänderungen",
        "Leistungsoptimierung",
        "Wochenend-Support",
      ],
    },
    {
      name: "PROFESSIONAL",
      price: "CHF 430",
      ideal: "Wachsende Unternehmen und kleine Online-Shops",
      popular: true,
      features: [
        "Alles aus dem Basic Care Paket",
        "Updates alle 2 Wochen (WordPress, Plugins, Themes)",
        "Tägliche automatische Backups",
        "Backup-Speicherung für 60 Tage",
        "Erweiterter Sicherheitsscan der Website",
        "Monatliche Datenbankoptimierung",
        "Cache-Bereinigung und Speicheroptimierung",
        "Überwachung von 404-Fehlern und deren Behebung",
        "1 Stunde Arbeit an der Website pro Monat",
        "Priorisierter E-Mail-Support (Antwort innerhalb von 24h)",
        "Hilfe bei der Lösung technischer Probleme",
        "Grundlegende Sicherheitsberatung",
      ],
    },
    {
      name: "BUSINESS",
      price: "CHF 755",
      ideal: "Unternehmen, die regelmäßige Inhaltsaktualisierungen und ständige technische Betreuung benötigen",
      features: [
        "Alles aus dem Professional Paket",
        "Wöchentliche Updates (WordPress, Plugins, Themes)",
        "Tägliche Backups mit Test-Wiederherstellung (einmal im Monat)",
        "Backup-Speicherung für 90 Tage",
        "Vollständiges Sicherheitsaudit mit Bericht",
        "3 Stunden Arbeit an der Website pro Monat",
        "Wöchentliche Leistungsoptimierung",
        "Überwachung und automatische Reparatur defekter Links",
        "Monatliches Offline-Backup (zusätzliche Kopie)",
        "Grundlegende SEO-Beratung",
        "Priorisierter E-Mail- und Chat-Support (Antwort innerhalb von 12h)",
        "Detaillierter monatlicher Bericht mit Analyse und Entwicklungsempfehlungen",
      ],
    },
  ];

  const additionalServices = [
    { name: "Zusätzliche Arbeitsstunde", price: "CHF 85/h" },
    { name: "Reparatur einer gehackten Website", price: "ab CHF 350" },
    { name: "Website-Wiederherstellung aus Backup", price: "CHF 85" },
    { name: "Website-Migration auf neues Hosting", price: "ab CHF 200" },
    { name: "Einmalige umfassende Geschwindigkeitsoptimierung", price: "ab CHF 350" },
    { name: "Installation und Konfiguration eines SSL-Zertifikats", price: "CHF 120" },
    { name: "Theme-Update mit Beibehaltung der Anpassungen", price: "ab CHF 250" },
    { name: "CDN-Konfiguration (Cloudflare, AWS)", price: "ab CHF 200" },
    { name: "Integration mit CRM-System", price: "ab CHF 400" },
    { name: "E-Mail-Marketing-Setup (Mailchimp, etc.)", price: "ab CHF 300" },
    { name: "Sicherheitsaudit (einmalig)", price: "CHF 500" },
    { name: "SEO-Audit (einmalig)", price: "CHF 600" },
    { name: "Wochenend-Support (außerhalb Business-Paket)", price: "+50% zum Tarif" },
    { name: "Dringender Support (sofortig)", price: "+100% zum Tarif" },
  ];

  const testimonials = [
    {
      name: "Thomas M.",
      role: "CEO, Zürich",
      text: "Seit wir die Betreuung unserer Website dem ProgressiveGroup-Team anvertraut haben, können wir ruhig schlafen. Alles läuft wie am Schnürchen, und wir konzentrieren uns auf die Geschäftsentwicklung.",
      rating: 5,
    },
    {
      name: "Sarah K.",
      role: "Online-Shop-Inhaberin, Genf",
      text: "Professionelle Herangehensweise und schnelle Reaktion auf jedes Problem. Besonders schätze ich die monatlichen Berichte - ich weiß genau, was mit meiner Website passiert.",
      rating: 5,
    },
    {
      name: "Michael R.",
      role: "Marketing Director, Basel",
      text: "Das Business-Paket ist die beste Investition. Die wöchentliche Optimierung sorgt dafür, dass die Website schneller läuft als je zuvor.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "Kann ich das Paket während der Laufzeit wechseln?",
      answer: "Ja, Sie können jederzeit auf ein höheres oder niedrigeres Paket wechseln. Wir rechnen die Differenz anteilig zu den verbleibenden Tagen im Monat ab.",
    },
    {
      question: "Was passiert, wenn ich alle Stunden in einem Monat aufgebraucht habe?",
      answer: "Sie können zusätzliche Stunden zum Preis von CHF 85/h nachkaufen oder im nächsten Monat auf ein höheres Paket wechseln. Nicht genutzte Stunden können auf den nächsten Monat übertragen werden (maximal einen Monat voraus).",
    },
    {
      question: "Wie schnell reagieren Sie auf Website-Ausfälle?",
      answer: "Je nach Paket: Basic Care: 48h (Arbeitstage), Professional: 24h, Business: 12h. Bei kritischen Ausfällen (Website komplett nicht erreichbar) reagieren wir sofort, unabhängig vom Paket.",
    },
    {
      question: "Wo werden die Backups gespeichert?",
      answer: "Alle Backups werden verschlüsselt und sicher in der Cloud gespeichert (Google Drive oder Dropbox Business).",
    },
    {
      question: "Enthalten die Backups die gesamte Website?",
      answer: "Ja, jedes Backup enthält: vollständige WordPress-Datenbank, alle WordPress-Dateien (Themes, Plugins, Medien) sowie Server-Konfiguration (falls wir Zugriff haben).",
    },
    {
      question: "Was passiert im Falle eines Ausfalls meiner Website?",
      answer: "Sie erhalten sofort eine Warnung von unserem Überwachungssystem. Wir reagieren gemäß der Reaktionszeit Ihres Pakets. Im schlimmsten Fall stellen wir die Website aus dem letzten Backup wieder her (maximaler Datenverlust: 24h bei Paketen mit täglichen Backups).",
    },
    {
      question: "Kann ich den Service jederzeit kündigen?",
      answer: "Ja, es gibt keine Kündigungsfrist. Sie können am Ende jedes Abrechnungsmonats kündigen. Informieren Sie uns mindestens 7 Tage vor Ende des Zeitraums.",
    },
    {
      question: "Wie läuft der Prozess des Starts der Zusammenarbeit ab?",
      answer: "Nach Auswahl des Pakets: 1) Sie füllen ein Formular mit Zugangsdaten aus (sicheres Formular), 2) Wir führen ein erstes Audit Ihrer Website durch (kostenlos), 3) Wir konfigurieren alle Monitoring- und Backup-Tools, 4) Sie erhalten einen Startbericht über den Zustand der Website, 5) Wir beginnen mit den regelmäßigen Maßnahmen gemäß Paket. Der gesamte Prozess dauert 2-3 Arbeitstage.",
    },
    {
      question: "Kann ich nicht genutzte Stunden auf den nächsten Monat übertragen?",
      answer: "Ja, nicht genutzte Stunden können auf den nächsten Monat übertragen werden (maximal einen Monat voraus). Zum Beispiel, wenn Sie im Professional-Paket im Januar 1 Stunde nicht nutzen, haben Sie im Februar 2 Stunden zur Verfügung.",
    },
    {
      question: "Welche Zugangsdaten benötigen Sie von mir?",
      answer: "Für die Standardbetreuung benötigen wir: Login und Passwort für das WordPress-Panel (Administrator-Level), FTP-Zugang oder File Manager im Hosting-Panel, Zugang zu phpMyAdmin oder Möglichkeit zum Export/Import der Datenbank. Alle Daten werden in einem verschlüsselten Passwort-Manager gespeichert.",
    },
    {
      question: "Was ist, wenn meine Website gehackt wird?",
      answer: "Im Basic-Paket: Wir helfen bei der Wiederherstellung aus dem Backup + grundlegende Bereinigung (zusätzlicher Service: ab CHF 350). Im Business-Paket: Vollständige Hilfe bei der Malware-Entfernung und Absicherung (prioritäre Behandlung).",
    },
    {
      question: "Betreuen Sie auch WooCommerce-Shops?",
      answer: "Ja, alle Pakete unterstützen WooCommerce-Shops. Aufgrund der höheren Komplexität von Shops empfehlen wir mindestens das Business-Paket für eine vollständige Shop-Betreuung.",
    },
    {
      question: "Führen Sie eine Dokumentation der durchgeführten Arbeiten?",
      answer: "Ja, in jedem Paket erhalten Sie: Monatlicher Bericht über durchgeführte Maßnahmen, Historie der Backups, Berichte über Sicherheitsaudits (in höheren Paketen).",
    },
    {
      question: "In welchen Sprachen bieten Sie Support an?",
      answer: "Wir bieten Support in den Sprachen: Polnisch, Englisch, Deutsch (grundlegend).",
    },
    {
      question: "Kann ich nur einen einmaligen Service ohne Abonnement kaufen?",
      answer: "Ja, wir bieten alle Services aus dem Bereich 'Zusätzliche Services' als einmalige Aufträge an. Allerdings gewährleistet die regelmäßige Betreuung in Form eines Abonnements den besten Schutz und die beste Leistung Ihrer Website.",
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
            Professionelle WordPress-Betreuung und Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sorgen Sie für Sicherheit, Geschwindigkeit und Aktualität Ihrer Website dank unserer umfassenden Betreuungspakete
          </p>
        </div>

        {/* Introduction */}
        <div className="glass-card p-8 rounded-2xl mb-16">
          <p className="text-foreground/90 leading-relaxed">
            Ihre WordPress-Website benötigt regelmäßige Pflege, um sicher zu bleiben, optimal zu funktionieren und den Besuchern die beste Erfahrung zu bieten. 
            Unsere Betreuungspakete garantieren, dass Ihre Website immer geschützt, aktualisiert und einwandfrei funktioniert - damit Sie sich auf die Entwicklung Ihres Geschäfts konzentrieren können.
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
          <h3 className="text-3xl font-bold text-center mb-12">Preispakete</h3>
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
                    Am beliebtesten
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
                    <span className="text-muted-foreground">/Monat</span>
                  </div>
                  <CardDescription className="mt-2 text-sm">
                    Ideal für: {pkg.ideal}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-3">Was enthalten ist:</h4>
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
                      <h4 className="font-semibold text-sm mb-2 text-muted-foreground">Nicht enthalten:</h4>
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
                    Kostenloses Audit
                  </Button>
                  <Button 
                    className="w-full" 
                    variant={pkg.popular ? "default" : "outline"}
                    onClick={() => {
                      setSelectedPackage({ name: pkg.name, price: pkg.price });
                      setOrderDialogOpen(true);
                    }}
                  >
                    Jetzt bestellen - Start in 48h
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-8">Paketvergleich</h3>
          <div className="glass-card p-8 rounded-2xl overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b-2 border-primary/20">
                  <TableHead className="w-[220px] text-base font-bold text-foreground pb-4">Funktion</TableHead>
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
                  <TableCell className="font-semibold py-4">Update-Häufigkeit</TableCell>
                  <TableCell className="text-center py-4">Monatlich</TableCell>
                  <TableCell className="text-center py-4 bg-primary/5">Alle 2 Wochen</TableCell>
                  <TableCell className="text-center py-4">Wöchentlich</TableCell>
                </TableRow>
                <TableRow className="hover:bg-background/50 transition-colors">
                  <TableCell className="font-semibold py-4">Backups</TableCell>
                  <TableCell className="text-center py-4">Wöchentlich</TableCell>
                  <TableCell className="text-center py-4 bg-primary/5">Täglich</TableCell>
                  <TableCell className="text-center py-4">Täglich + Test</TableCell>
                </TableRow>
                <TableRow className="hover:bg-background/50 transition-colors">
                  <TableCell className="font-semibold py-4">Backup-Speicherung</TableCell>
                  <TableCell className="text-center py-4">30 Tage</TableCell>
                  <TableCell className="text-center py-4 bg-primary/5">60 Tage</TableCell>
                  <TableCell className="text-center py-4">90 Tage</TableCell>
                </TableRow>
                <TableRow className="hover:bg-background/50 transition-colors">
                  <TableCell className="font-semibold py-4">Arbeitsstunden/Monat</TableCell>
                  <TableCell className="text-center py-4">0.25h</TableCell>
                  <TableCell className="text-center py-4 bg-primary/5">1h</TableCell>
                  <TableCell className="text-center py-4">3h</TableCell>
                </TableRow>
                <TableRow className="hover:bg-background/50 transition-colors">
                  <TableCell className="font-semibold py-4">Support-Reaktionszeit</TableCell>
                  <TableCell className="text-center py-4">48h</TableCell>
                  <TableCell className="text-center py-4 bg-primary/5">24h</TableCell>
                  <TableCell className="text-center py-4">12h</TableCell>
                </TableRow>
                <TableRow className="hover:bg-background/50 transition-colors">
                  <TableCell className="font-semibold py-4">Leistungsoptimierung</TableCell>
                  <TableCell className="text-center py-4">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-muted">
                      <span className="text-xs text-muted-foreground">—</span>
                    </span>
                  </TableCell>
                  <TableCell className="text-center py-4 bg-primary/5">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span>Monatlich</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center py-4">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span>Wöchentlich</span>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-background/50 transition-colors">
                  <TableCell className="font-semibold py-4">Sicherheitsüberwachung</TableCell>
                  <TableCell className="text-center py-4">Grundlegend</TableCell>
                  <TableCell className="text-center py-4 bg-primary/5">Erweitert</TableCell>
                  <TableCell className="text-center py-4">Vollständiges Audit</TableCell>
                </TableRow>
                <TableRow className="hover:bg-background/50 transition-colors border-b-2 border-primary/10">
                  <TableCell className="font-semibold py-4">SEO-Beratung</TableCell>
                  <TableCell className="text-center py-4">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-muted">
                      <span className="text-xs text-muted-foreground">—</span>
                    </span>
                  </TableCell>
                  <TableCell className="text-center py-4 bg-primary/5">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span>Grundlegend</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center py-4">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span>Erweitert</span>
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
            Zusätzliche Services
          </h3>
          <p className="text-muted-foreground mb-6">Verfügbar für alle Pakete</p>
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
          <h3 className="text-3xl font-bold text-center mb-12">Was unsere Kunden sagen</h3>
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
                Technische Anforderungen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Zugriff auf WordPress-Administrationsbereich</li>
                <li>• FTP-Zugriff oder File Manager im Hosting</li>
                <li>• Zugriff auf phpMyAdmin oder Möglichkeit zum Datenbank-Export</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Nicht im Service enthalten
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Zugriff auf Server-Konfiguration</li>
                <li>• Erweiterte Modifikationen mit SSH-Zugriff</li>
                <li>• Entwicklung komplett neuer Funktionalitäten</li>
                <li>• Komplette Website-Neuentwicklung</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Häufig gestellte Fragen</h3>
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
            Garantien
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Zufriedenheitsgarantie</p>
                <p className="text-sm text-muted-foreground">Wenn Sie im ersten Monat nicht zufrieden sind, erstatten wir 100% der Gebühr.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Sicherheitsgarantie</p>
                <p className="text-sm text-muted-foreground">Bei Ausfällen durch unsere Maßnahmen reparieren wir alles kostenlos und kompensieren Verluste.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Verfügbarkeitsgarantie</p>
                <p className="text-sm text-muted-foreground">Im Business-Paket garantieren wir 99,5% Uptime der Website (von uns überwacht).</p>
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
