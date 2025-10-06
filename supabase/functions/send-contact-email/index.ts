import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createTransport } from "npm:nodemailer@6.9.7";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface BaseEmailRequest {
  type?: "contact" | "audit" | "order" | "website-order";
  email: string;
}

interface ContactEmailRequest extends BaseEmailRequest {
  type: "contact";
  name: string;
  message: string;
}

interface AuditEmailRequest extends BaseEmailRequest {
  type: "audit";
  websiteUrl: string;
  fullName: string;
  companyName?: string;
  phone?: string;
  newsletter?: boolean;
}

interface OrderEmailRequest extends BaseEmailRequest {
  type: "order";
  packageName: string;
  packagePrice: string;
  companyName: string;
  vatId: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
  fullName: string;
  phone: string;
  contactPreference: string;
  websiteUrl: string;
  adminUrl?: string;
  hostingProvider?: string;
  hostingKnown: string;
  hasBackups: string;
  additionalInfo?: string;
  paymentMethod: string;
}

interface WebsiteOrderRequest extends BaseEmailRequest {
  type: "website-order";
  packageName: string;
  basePrice: string;
  companyName: string;
  firstName: string;
  lastName: string;
  phone: string;
  website?: string;
  projectDescription: string;
  [key: string]: any;
}

type EmailRequest = ContactEmailRequest | AuditEmailRequest | OrderEmailRequest | WebsiteOrderRequest;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestData: EmailRequest = await req.json();
    const type = requestData.type || "contact";
    
    console.log('Received form submission:', { type, email: requestData.email });

    // Validate basic fields
    if (!requestData.email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Get SMTP configuration from environment
    const smtpHost = Deno.env.get('SMTP_HOST');
    const smtpPort = parseInt(Deno.env.get('SMTP_PORT') || '587');
    const smtpUser = Deno.env.get('SMTP_USER');
    const smtpPassword = Deno.env.get('SMTP_PASSWORD');

    if (!smtpHost || !smtpUser || !smtpPassword) {
      console.error('SMTP configuration missing');
      return new Response(
        JSON.stringify({ error: 'SMTP not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Create SMTP transporter
    const useSecure = smtpPort === 465;
    const transporter = createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: useSecure, // SSL for 465, STARTTLS for 587
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      connectionTimeout: 15000,
      greetingTimeout: 10000,
      socketTimeout: 20000,
    });

    console.log('SMTP transporter created', { host: smtpHost, port: smtpPort, secure: useSecure });

    // Minimalist professional email template
    const createEmailTemplate = (content: string) => `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body { 
      margin: 0; 
      padding: 0; 
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #fafafa;
      line-height: 1.6;
    }
    
    .email-wrapper {
      background-color: #fafafa;
      padding: 40px 20px;
    }
    
    .container { 
      max-width: 600px; 
      margin: 0 auto; 
      background: #ffffff; 
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #e5e5e5;
    }
    
    .header { 
      background: #ffffff;
      padding: 40px 40px 30px;
      text-align: center;
      border-bottom: 3px solid #f59e0b;
    }
    
    .logo-text {
      font-size: 32px;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0;
      letter-spacing: -0.5px;
    }
    
    .header-subtitle {
      color: #737373;
      font-size: 13px;
      margin-top: 8px;
      font-weight: 500;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    
    .content { 
      padding: 40px; 
      color: #1a1a1a; 
      line-height: 1.7;
      background: #ffffff;
    }
    
    .content h2 { 
      color: #1a1a1a; 
      margin-top: 0; 
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: 700;
      line-height: 1.3;
    }
    
    .content h3 { 
      color: #1a1a1a; 
      margin-top: 30px;
      margin-bottom: 16px;
      font-size: 18px;
      font-weight: 600;
    }
    
    .content p { 
      margin: 16px 0;
      color: #525252;
      font-size: 15px;
    }
    
    .content strong {
      color: #1a1a1a;
      font-weight: 600;
    }
    
    .info-box { 
      background: #fafafa;
      border-left: 3px solid #f59e0b; 
      padding: 20px 24px; 
      margin: 24px 0; 
      border-radius: 4px;
    }
    
    .info-box p {
      margin: 8px 0;
      color: #525252;
      font-size: 14px;
    }
    
    .info-box strong {
      color: #1a1a1a;
      font-weight: 600;
    }
    
    .info-box-gradient {
      background: #f59e0b;
      border: none;
      color: #ffffff !important;
      padding: 24px;
      margin: 24px 0;
      border-radius: 4px;
    }
    
    .info-box-gradient h3 {
      color: #ffffff !important;
      margin-top: 0;
      font-size: 20px;
      margin-bottom: 12px;
    }
    
    .info-box-gradient p {
      color: #ffffff !important;
      margin: 10px 0;
      font-size: 15px;
    }
    
    .info-box-gradient strong {
      color: #ffffff !important;
      font-weight: 700;
    }
    
    .checklist { 
      list-style: none; 
      padding: 0; 
      margin: 20px 0; 
    }
    
    .checklist li { 
      padding: 12px 0; 
      padding-left: 32px; 
      position: relative;
      color: #525252;
      line-height: 1.6;
      font-size: 14px;
      border-bottom: 1px solid #f0f0f0;
    }
    
    .checklist li:last-child {
      border-bottom: none;
    }
    
    .checklist li:before { 
      content: "✓"; 
      position: absolute; 
      left: 0; 
      top: 12px;
      color: #f59e0b; 
      font-weight: bold; 
      font-size: 18px; 
    }
    
    .divider {
      height: 1px;
      background: #e5e5e5;
      margin: 32px 0;
    }
    
    .footer { 
      background: #fafafa;
      color: #737373; 
      padding: 32px 40px; 
      text-align: center; 
      font-size: 13px; 
      line-height: 1.6;
      border-top: 1px solid #e5e5e5;
    }
    
    .footer-brand {
      font-size: 18px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 12px;
    }
    
    .footer p {
      margin: 8px 0;
      color: #737373;
      font-size: 13px;
    }
    
    .footer a { 
      color: #f59e0b; 
      text-decoration: none;
      font-weight: 500;
    }
    
    .footer a:hover {
      text-decoration: underline;
    }
    
    .footer-divider {
      height: 1px;
      background: #e5e5e5;
      margin: 20px 0;
    }
    
    .footer-legal {
      margin-top: 20px;
      padding-top: 16px;
      font-size: 12px;
      color: #a3a3a3;
      border-top: 1px solid #e5e5e5;
    }
    
    .button { 
      display: inline-block; 
      padding: 14px 32px; 
      background: #f59e0b;
      color: #ffffff !important; 
      text-decoration: none; 
      border-radius: 4px; 
      font-weight: 600; 
      margin: 20px 0;
      font-size: 15px;
    }
    
    .button:hover {
      background: #d97706;
    }
    
    a {
      color: #f59e0b;
      text-decoration: none;
      font-weight: 500;
    }
    
    a:hover {
      text-decoration: underline;
    }
    
    @media only screen and (max-width: 600px) {
      .email-wrapper { padding: 20px 10px; }
      .header { padding: 32px 24px 24px; }
      .content { padding: 28px 24px; }
      .footer { padding: 28px 24px; }
      .logo-text { font-size: 26px; }
      .content h2 { font-size: 20px; }
      .info-box, .info-box-gradient { padding: 16px 20px; }
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="container">
      <div class="header">
        <h1 class="logo-text">ProgressiveGroup</h1>
        <div class="header-subtitle">Professional Digital Solutions</div>
      </div>
      <div class="content">
        ${content}
      </div>
      <div class="footer">
        <div class="footer-brand">ProgressiveGroup</div>
        <p>ul. Rynek 5/6<br>59-220 Legnica, POLEN</p>
        <div class="footer-divider"></div>
        <p>E-Mail: <a href="mailto:info@progressivegroup.ch">info@progressivegroup.ch</a></p>
        <p>Web: <a href="https://www.progressivegroup.ch">www.progressivegroup.ch</a></p>
        <div class="footer-legal">
          © ${new Date().getFullYear()} ProgressiveGroup. Alle Rechte vorbehalten.
        </div>
      </div>
    </div>
  </div>
</body>
</html>
    `;

    let companySubject = '';
    let companyBodyText = '';
    let companyBodyHtml = '';
    let userSubject = '';
    let userBodyText = '';
    let userBodyHtml = '';

    // Build email content based on type
    if (type === "contact") {
      const data = requestData as ContactEmailRequest;
      companySubject = 'Nachricht aus dem Kontaktformular';
      companyBodyText = `
Sie haben eine neue Nachricht aus dem Kontaktformular erhalten:

Vor- und Nachname: ${data.name}
E-Mail: ${data.email}

Nachricht:
${data.message}

---
Die Nachricht wurde über das Kontaktformular auf der ProgressiveGroup-Website gesendet.
      `;
      
      companyBodyHtml = createEmailTemplate(`
        <h2>Neue Nachricht aus dem Kontaktformular</h2>
        <div class="info-box">
          <p><strong>Vor- und Nachname:</strong> ${data.name}</p>
          <p><strong>E-Mail:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        </div>
        <p><strong>Nachricht:</strong></p>
        <div class="info-box">
          ${data.message.replace(/\n/g, '<br>')}
        </div>
      `);
      
      userSubject = 'Empfangsbestätigung - ProgressiveGroup';
      userBodyText = `
Guten Tag ${data.name},

Vielen Dank für Ihre Kontaktaufnahme mit ProgressiveGroup!

Wir bestätigen den Erhalt Ihrer Nachricht. Unser Team wird sich in Kürze bei Ihnen melden.

Ihre Nachricht:
${data.message}

---
Mit freundlichen Grüßen,
Das ProgressiveGroup-Team
info@progressivegroup.ch
      `;
      
      userBodyHtml = createEmailTemplate(`
        <h2>Guten Tag ${data.name}! 👋</h2>
        <p>Vielen Dank für Ihre Kontaktaufnahme mit <strong>ProgressiveGroup</strong>!</p>
        <p>Wir bestätigen den Erhalt Ihrer Nachricht. Unser Team wird sich in Kürze bei Ihnen melden.</p>
        <div class="info-box">
          <p><strong>Ihre Nachricht:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        </div>
        <p>Wir antworten innerhalb von <strong>24 Stunden</strong>.</p>
      `);
    } else if (type === "audit") {
      const data = requestData as AuditEmailRequest;
      companySubject = 'Neue Anfrage - Kostenloser WordPress-Audit';
      companyBodyText = `
Sie haben eine neue Anfrage für einen kostenlosen WordPress-Audit erhalten:

Kontaktdaten:
- Vor- und Nachname: ${data.fullName}
- E-Mail: ${data.email}
- Telefon: ${data.phone || 'Nicht angegeben'}
- Firma: ${data.companyName || 'Nicht angegeben'}

Website-Daten:
- Website-URL: ${data.websiteUrl}

Newsletter: ${data.newsletter ? 'Ja' : 'Nein'}

---
Formular gesendet von der ProgressiveGroup-Website - WordPress Care
      `;
      
      companyBodyHtml = createEmailTemplate(`
        <h2>🔒 Neue Anfrage - Kostenloser WordPress-Audit</h2>
        <h3>Kontaktdaten:</h3>
        <div class="info-box">
          <p><strong>Vor- und Nachname:</strong> ${data.fullName}</p>
          <p><strong>E-Mail:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Telefon:</strong> ${data.phone || 'Nicht angegeben'}</p>
          <p><strong>Firma:</strong> ${data.companyName || 'Nicht angegeben'}</p>
        </div>
        <h3>Website-Daten:</h3>
        <div class="info-box">
          <p><strong>Website-URL:</strong> <a href="${data.websiteUrl}" target="_blank">${data.websiteUrl}</a></p>
        </div>
        <p><strong>Newsletter:</strong> ${data.newsletter ? '✓ Ja' : '✗ Nein'}</p>
      `);
      
      userSubject = 'Empfangsbestätigung - Kostenloser WordPress-Audit';
      userBodyText = `
Guten Tag ${data.fullName},

Vielen Dank für Ihr Interesse an unserem kostenlosen WordPress-Sicherheitsaudit!

Ihre Anfrage wurde angenommen und wird bearbeitet.

Website für Audit: ${data.websiteUrl}

Sie erhalten innerhalb von 24-48 Stunden einen detaillierten Bericht mit:
✓ Sicherheitsbericht Ihrer Website
✓ Liste gefundener Schwachstellen
✓ Empfehlungen zur Behebung
✓ Kostenvoranschlag für Reparaturen (falls erforderlich)

---
Mit freundlichen Grüßen,
Das ProgressiveGroup-Team
info@progressivegroup.ch
      `;
      
      userBodyHtml = createEmailTemplate(`
        <h2>Guten Tag ${data.fullName}! 🔒</h2>
        <p>Vielen Dank für Ihr Interesse an unserem <strong>kostenlosen WordPress-Sicherheitsaudit</strong>!</p>
        <p>Ihre Anfrage wurde angenommen und wird bearbeitet.</p>
        <div class="info-box">
          <p><strong>Website für Audit:</strong></p>
          <p><a href="${data.websiteUrl}" target="_blank">${data.websiteUrl}</a></p>
        </div>
        <p><strong>Sie erhalten innerhalb von 24-48 Stunden einen detaillierten Bericht mit:</strong></p>
        <ul class="checklist">
          <li>Sicherheitsbericht Ihrer Website</li>
          <li>Liste gefundener Schwachstellen</li>
          <li>Empfehlungen zur Behebung</li>
          <li>Kostenvoranschlag für Reparaturen (falls erforderlich)</li>
        </ul>
        <p style="margin-top: 30px;">Unser Experte führt eine detaillierte Analyse durch und kontaktiert Sie mit den Ergebnissen.</p>
      `);
    } else if (type === "order") {
      const data = requestData as OrderEmailRequest;
      const price = parseFloat(data.packagePrice.replace("CHF ", ""));
      const vat = (price * 0.077).toFixed(2);
      const total = (price + parseFloat(vat)).toFixed(2);
      
      companySubject = `Neue Bestellung - Paket ${data.packageName}`;
      companyBodyText = `
Sie haben eine neue Bestellung für das WordPress Care-Paket erhalten:

=== PAKET ===
Paket: ${data.packageName}
Preis: ${data.packagePrice}/Monat

=== FIRMENDATEN ===
Firmenname: ${data.companyName}
UID/MwSt-Nr.: ${data.vatId}
Adresse: ${data.street}, ${data.postalCode} ${data.city}, ${data.country}

=== KONTAKTPERSON ===
Vor- und Nachname: ${data.fullName}
E-Mail: ${data.email}
Telefon: ${data.phone}
Bevorzugter Kontakt: ${data.contactPreference}

=== WEBSITE-DATEN ===
Website-URL: ${data.websiteUrl}
Admin-Panel: ${data.adminUrl || 'Nicht angegeben'}
Hosting: ${data.hostingKnown === 'known' ? data.hostingProvider : 'Unbekannt'}
Backups vorhanden: ${data.hasBackups}
Zusätzliche Info: ${data.additionalInfo || 'Keine'}

=== ZAHLUNG ===
Zahlungsmethode: ${data.paymentMethod}
MwSt (7.7%): CHF ${vat}
GESAMT: CHF ${total}/Monat

---
Bestellung gesendet von der ProgressiveGroup-Website - WordPress Care
      `;
      
      companyBodyHtml = createEmailTemplate(`
        <h2>🛒 Neue Bestellung - Paket ${data.packageName}</h2>
        
        <div class="info-box-gradient">
          <h3>Paket ${data.packageName}</h3>
          <p style="font-size: 28px; font-weight: bold; margin: 15px 0;">${data.packagePrice}/Monat</p>
        </div>
        
        <h3>Firmendaten:</h3>
        <div class="info-box">
          <p><strong>Firmenname:</strong> ${data.companyName}</p>
          <p><strong>UID/MwSt.-Nr.:</strong> ${data.vatId}</p>
          <p><strong>Adresse:</strong> ${data.street}, ${data.postalCode} ${data.city}, ${data.country}</p>
        </div>
        
        <h3>Kontaktperson:</h3>
        <div class="info-box">
          <p><strong>Vor- und Nachname:</strong> ${data.fullName}</p>
          <p><strong>E-Mail:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Telefon:</strong> ${data.phone}</p>
          <p><strong>Bevorzugter Kontakt:</strong> ${data.contactPreference}</p>
        </div>
        
        <h3>WordPress-Website-Daten:</h3>
        <div class="info-box">
          <p><strong>Website-URL:</strong> <a href="${data.websiteUrl}" target="_blank">${data.websiteUrl}</a></p>
          <p><strong>Admin-Panel:</strong> ${data.adminUrl || 'Nicht angegeben'}</p>
          <p><strong>Hosting:</strong> ${data.hostingKnown === 'known' ? data.hostingProvider : 'Unbekannt'}</p>
          <p><strong>Hat Backups:</strong> ${data.hasBackups}</p>
          ${data.additionalInfo ? `<p><strong>Zusätzliche Info:</strong> ${data.additionalInfo}</p>` : ''}
        </div>
        
        <h3>Zahlung:</h3>
        <div class="info-box">
          <p><strong>Zahlungsmethode:</strong> ${data.paymentMethod === 'bank' ? 'Banküberweisung' : data.paymentMethod === 'card' ? 'Kreditkarte (Stripe)' : 'PayPal'}</p>
          <p><strong>MwSt. (7.7%):</strong> CHF ${vat}</p>
          <p style="font-size: 20px; margin-top: 15px;"><strong>GESAMT: CHF ${total}/Monat</strong></p>
        </div>
      `);
      
      userSubject = `Bestellbestätigung - Paket ${data.packageName}`;
      userBodyText = `
Guten Tag ${data.fullName},

Vielen Dank für Ihre Bestellung des Pakets ${data.packageName}!

=== BESTELLZUSAMMENFASSUNG ===
Paket: ${data.packageName}
Preis: ${data.packagePrice}/Monat
MwSt. (7.7%): CHF ${vat}
GESAMT: CHF ${total}/Monat

=== WIE GEHT ES WEITER? ===
1. Wir prüfen Ihre Daten (bis zu 2 Std.)
2. Wir senden Ihnen den Vertrag zur Unterzeichnung (elektronisch)
3. Nach Unterzeichnung - Rechnung und Zahlungsdaten
4. Nach Zahlung - Formular mit Website-Zugangsdaten
5. Start der Betreuung innerhalb von 48 Std.!

Betreute Website: ${data.websiteUrl}

Wir werden uns in Kürze mit Ihnen in Verbindung setzen, um die Details zu finalisieren.

---
Mit freundlichen Grüßen,
Das ProgressiveGroup-Team
info@progressivegroup.ch
      `;
      
      userBodyHtml = createEmailTemplate(`
        <h2>Vielen Dank für Ihre Bestellung! 🎉</h2>
        <p>Guten Tag <strong>${data.fullName}</strong>,</p>
        <p>Vielen Dank für Ihre Bestellung des Pakets <strong>${data.packageName}</strong>!</p>
        
        <div class="info-box-gradient">
          <h3>📋 Bestellzusammenfassung</h3>
          <p><strong>Paket:</strong> ${data.packageName}</p>
          <p><strong>Preis:</strong> ${data.packagePrice}/Monat</p>
          <p><strong>MwSt. (7.7%):</strong> CHF ${vat}</p>
          <p style="font-size: 24px; margin-top: 15px;"><strong>GESAMT: CHF ${total}/Monat</strong></p>
        </div>
        
        <h3>Wie geht es weiter? 🚀</h3>
        <ul class="checklist">
          <li>Wir prüfen Ihre Daten (bis zu 2 Std.)</li>
          <li>Wir senden Ihnen den Vertrag zur Unterzeichnung (elektronisch)</li>
          <li>Nach Unterzeichnung - Rechnung und Zahlungsdaten</li>
          <li>Nach Zahlung - Formular mit Website-Zugangsdaten</li>
          <li>Start der Betreuung innerhalb von 48 Std.!</li>
        </ul>
        
        <h3>Betreute Website:</h3>
        <div class="info-box">
          <p><a href="${data.websiteUrl}" target="_blank" style="font-size: 16px;">${data.websiteUrl}</a></p>
        </div>
        
        <p style="margin-top: 30px;">Wir werden uns in Kürze mit Ihnen in Verbindung setzen, um die Details zu finalisieren.</p>
        <p>Bei Fragen stehen wir Ihnen gerne zur Verfügung!</p>
      `);
    } else if (type === "website-order") {
      const data = requestData as WebsiteOrderRequest;
      
      // Helper function to format option keys
      const formatKey = (key: string): string => {
        const keyMap: { [key: string]: string } = {
          sections: "Abschnitte",
          languages: "Sprachen",
          cms: "CMS-Panel",
          blog: "Blog",
          gallery: "Galerie",
          numberOfPages: "Anzahl der Unterseiten",
          numberOfProducts: "Anzahl der Produkte",
          search: "Suchfunktion",
          filters: "Filter",
          adsIntegration: "Werbeintegration",
          leadForms: "Lead-Generation-Formulare",
          abTesting: "A/B-Testing",
          expressDelivery: "Express-Lieferung",
          goal: "Ziel der Website",
        };
        return keyMap[key] || key;
      };

      // Filter and format selected options
      const optionsHtml = Object.entries(data)
        .filter(([key]) => !['type', 'packageName', 'basePrice', 'companyName', 'firstName', 'lastName', 'email', 'phone', 'website', 'projectDescription'].includes(key))
        .filter(([_, value]) => value && value !== false)
        .map(([key, value]) => {
          if (Array.isArray(value)) {
            return `<li><strong>${formatKey(key)}:</strong> ${value.join(", ")}</li>`;
          }
          return `<li><strong>${formatKey(key)}:</strong> ${value === true ? "Ja" : value}</li>`;
        })
        .join("");
      
      companySubject = `Neue Angebotsanfrage - ${data.packageName}`;
      companyBodyText = `
Neue Angebotsanfrage für eine Website:

PAKET: ${data.packageName}
Grundpreis: ${data.basePrice} CHF

KUNDENDATEN:
Firma: ${data.companyName}
Kontakt: ${data.firstName} ${data.lastName}
E-Mail: ${data.email}
Telefon: ${data.phone}
${data.website ? `Aktuelle Website: ${data.website}` : ''}

PROJEKTBESCHREIBUNG:
${data.projectDescription}

BESTELLDETAILS:
${JSON.stringify(data, null, 2)}
      `;
      
      companyBodyHtml = createEmailTemplate(`
        <h2>🌐 Neue Angebotsanfrage - ${data.packageName}</h2>
        <div class="info-box-gradient">
          <h3>${data.packageName}</h3>
          <p style="font-size: 16px;">Grundpreis: ${data.basePrice} CHF</p>
        </div>
        <h3>Kundendaten:</h3>
        <div class="info-box">
          <p><strong>Firma:</strong> ${data.companyName}</p>
          <p><strong>Kontakt:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>E-Mail:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Telefon:</strong> ${data.phone}</p>
          ${data.website ? `<p><strong>Aktuelle Website:</strong> <a href="${data.website}">${data.website}</a></p>` : ''}
        </div>
        <h3>Projektbeschreibung:</h3>
        <div class="info-box">
          <p>${data.projectDescription.replace(/\n/g, '<br>')}</p>
        </div>
        ${optionsHtml ? `
        <h3>Ausgewählte Optionen:</h3>
        <ul class="checklist">
          ${optionsHtml}
        </ul>
        ` : ''}
      `);
      
      userSubject = 'Anfragebestätigung - ProgressiveGroup';
      userBodyText = `
Guten Tag ${data.firstName},

Wir haben Ihre Angebotsanfrage für ${data.packageName} erhalten.

Unser Team wird Ihre Anforderungen analysieren und sich innerhalb von 24 Stunden mit einem individuellen Angebot bei Ihnen melden.

In der Zwischenzeit können Sie sich bei weiteren Fragen gerne an uns wenden.

---
Mit freundlichen Grüßen,
Das ProgressiveGroup-Team
info@progressivegroup.ch
      `;

      userBodyHtml = createEmailTemplate(`
        <h2>Vielen Dank für Ihre Anfrage! 🎉</h2>
        <p>Guten Tag <strong>${data.firstName}</strong>,</p>
        <p>Wir haben Ihre Angebotsanfrage für <strong>${data.packageName}</strong> erhalten.</p>
        <div class="info-box">
          <p><strong>Paket:</strong> ${data.packageName}</p>
          <p><strong>Grundpreis:</strong> ${data.basePrice} CHF</p>
        </div>
        <p>Unser Team wird Ihre Anforderungen analysieren und sich innerhalb von <strong>24 Stunden</strong> mit einem individuellen Angebot bei Ihnen melden, das auf Ihre Bedürfnisse zugeschnitten ist.</p>
        ${optionsHtml ? `
        <h3>Ausgewählte Optionen:</h3>
        <ul class="checklist">
          ${optionsHtml}
        </ul>
        ` : ''}
        <p style="margin-top: 30px;">In der Zwischenzeit können Sie sich bei weiteren Fragen gerne an uns wenden!</p>
      `);
    }

    // Send email to company
    await transporter.sendMail({
      from: `ProgressiveGroup <${smtpUser}>`,
      to: 'info@progressivegroup.ch',
      cc: smtpUser,
      subject: companySubject,
      text: companyBodyText,
      html: companyBodyHtml,
    });

    console.log('Email sent to company');

    // Send confirmation email to user
    await transporter.sendMail({
      from: `ProgressiveGroup <${smtpUser}>`,
      to: requestData.email,
      subject: userSubject,
      text: userBodyText,
      html: userBodyHtml,
    });

    console.log('Confirmation email sent to user');

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Error in send-contact-email function:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Failed to send email' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
