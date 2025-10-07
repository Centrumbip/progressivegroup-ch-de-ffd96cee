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
<html lang="pl">
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
        <p>ul. Rynek 5/6<br>59-220 Legnica, POLSKA</p>
        <div class="footer-divider"></div>
        <p>Email: <a href="mailto:info@progressivegroup.ch">info@progressivegroup.ch</a></p>
        <p>Web: <a href="https://www.progressivegroup.ch">www.progressivegroup.ch</a></p>
        <div class="footer-legal">
          © ${new Date().getFullYear()} ProgressiveGroup. Wszystkie prawa zastrzeżone.
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
      companySubject = 'Wiadomość z formularza kontaktowego';
      companyBodyText = `
Otrzymałeś nową wiadomość z formularza kontaktowego:

Imię i nazwisko: ${data.name}
Email: ${data.email}

Wiadomość:
${data.message}

---
Wiadomość została wysłana z formularza kontaktowego na stronie ProgressiveGroup.
      `;
      
      companyBodyHtml = createEmailTemplate(`
        <h2>Nowa wiadomość z formularza kontaktowego</h2>
        <div class="info-box">
          <p><strong>Imię i nazwisko:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        </div>
        <p><strong>Wiadomość:</strong></p>
        <div class="info-box">
          ${data.message.replace(/\n/g, '<br>')}
        </div>
      `);
      
      userSubject = 'Potwierdzenie otrzymania wiadomości - ProgressiveGroup';
      userBodyText = `
Dzień dobry ${data.name},

Dziękujemy za kontakt z ProgressiveGroup!

Potwierdzamy otrzymanie Twojej wiadomości. Nasz zespół skontaktuje się z Tobą w najbliższym czasie.

Twoja wiadomość:
${data.message}

---
Pozdrawiamy,
Zespół ProgressiveGroup
info@progressivegroup.ch
      `;
      
      userBodyHtml = createEmailTemplate(`
        <h2>Dzień dobry ${data.name}! 👋</h2>
        <p>Dziękujemy za kontakt z <strong>ProgressiveGroup</strong>!</p>
        <p>Potwierdzamy otrzymanie Twojej wiadomości. Nasz zespół skontaktuje się z Tobą w najbliższym czasie.</p>
        <div class="info-box">
          <p><strong>Twoja wiadomość:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        </div>
        <p>Odpowiemy w ciągu <strong>24 godzin</strong>.</p>
      `);
    } else if (type === "audit") {
      const data = requestData as AuditEmailRequest;
      companySubject = 'Nowe zgłoszenie - Bezpłatny Audyt WordPress';
      companyBodyText = `
Otrzymałeś nowe zgłoszenie na bezpłatny audyt WordPress:

Dane kontaktowe:
- Imię i nazwisko: ${data.fullName}
- Email: ${data.email}
- Telefon: ${data.phone || 'Nie podano'}
- Firma: ${data.companyName || 'Nie podano'}

Dane strony:
- URL strony: ${data.websiteUrl}

Newsletter: ${data.newsletter ? 'Tak' : 'Nie'}

---
Formularz wysłany ze strony ProgressiveGroup - WordPress Care
      `;
      
      companyBodyHtml = createEmailTemplate(`
        <h2>🔒 Nowe zgłoszenie - Bezpłatny Audyt WordPress</h2>
        <h3>Dane kontaktowe:</h3>
        <div class="info-box">
          <p><strong>Imię i nazwisko:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Telefon:</strong> ${data.phone || 'Nie podano'}</p>
          <p><strong>Firma:</strong> ${data.companyName || 'Nie podano'}</p>
        </div>
        <h3>Dane strony:</h3>
        <div class="info-box">
          <p><strong>URL strony:</strong> <a href="${data.websiteUrl}" target="_blank">${data.websiteUrl}</a></p>
        </div>
        <p><strong>Newsletter:</strong> ${data.newsletter ? '✓ Tak' : '✗ Nie'}</p>
      `);
      
      userSubject = 'Potwierdzenie otrzymania - Bezpłatny Audyt WordPress';
      userBodyText = `
Dzień dobry ${data.fullName},

Dziękujemy za zainteresowanie naszym bezpłatnym audytem bezpieczeństwa WordPress!

Twoje zgłoszenie zostało przyjęte i jest w trakcie realizacji.

Strona do audytu: ${data.websiteUrl}

Otrzymasz szczegółowy raport w ciągu 24-48 godzin zawierający:
✓ Raport bezpieczeństwa Twojej strony
✓ Lista znalezionych podatności
✓ Rekomendacje naprawcze
✓ Wycena naprawy (jeśli potrzebna)

---
Pozdrawiamy,
Zespół ProgressiveGroup
info@progressivegroup.ch
      `;
      
      userBodyHtml = createEmailTemplate(`
        <h2>Dzień dobry ${data.fullName}! 🔒</h2>
        <p>Dziękujemy za zainteresowanie naszym <strong>bezpłatnym audytem bezpieczeństwa WordPress</strong>!</p>
        <p>Twoje zgłoszenie zostało przyjęte i jest w trakcie realizacji.</p>
        <div class="info-box">
          <p><strong>Strona do audytu:</strong></p>
          <p><a href="${data.websiteUrl}" target="_blank">${data.websiteUrl}</a></p>
        </div>
        <p><strong>Otrzymasz szczegółowy raport w ciągu 24-48 godzin zawierający:</strong></p>
        <ul class="checklist">
          <li>Raport bezpieczeństwa Twojej strony</li>
          <li>Lista znalezionych podatności</li>
          <li>Rekomendacje naprawcze</li>
          <li>Wycena naprawy (jeśli potrzebna)</li>
        </ul>
        <p style="margin-top: 30px;">Nasz ekspert przeprowadzi szczegółową analizę i skontaktuje się z Tobą z wynikami.</p>
      `);
    } else if (type === "order") {
      const data = requestData as OrderEmailRequest;
      const price = parseFloat(data.packagePrice.replace("CHF ", ""));
      const vat = (price * 0.077).toFixed(2);
      const total = (price + parseFloat(vat)).toFixed(2);
      
      companySubject = `Nowe zamówienie - Pakiet ${data.packageName}`;
      companyBodyText = `
Otrzymałeś nowe zamówienie pakietu WordPress Care:

=== PAKIET ===
Pakiet: ${data.packageName}
Cena: ${data.packagePrice}/miesiąc

=== DANE FIRMY ===
Nazwa firmy: ${data.companyName}
NIP/VAT ID: ${data.vatId}
Adres: ${data.street}, ${data.postalCode} ${data.city}, ${data.country}

=== OSOBA KONTAKTOWA ===
Imię i nazwisko: ${data.fullName}
Email: ${data.email}
Telefon: ${data.phone}
Preferowany kontakt: ${data.contactPreference}

=== DANE STRONY ===
URL strony: ${data.websiteUrl}
Panel admin: ${data.adminUrl || 'Nie podano'}
Hosting: ${data.hostingKnown === 'known' ? data.hostingProvider : 'Nieznany'}
Posiada backupy: ${data.hasBackups}
Dodatkowe info: ${data.additionalInfo || 'Brak'}

=== PŁATNOŚĆ ===
Metoda płatności: ${data.paymentMethod}
VAT (7.7%): CHF ${vat}
RAZEM: CHF ${total}/miesiąc

---
Zamówienie wysłane ze strony ProgressiveGroup - WordPress Care
      `;
      
      companyBodyHtml = createEmailTemplate(`
        <h2>🛒 Nowe zamówienie - Pakiet ${data.packageName}</h2>
        
        <div class="info-box-gradient">
          <h3>Pakiet ${data.packageName}</h3>
          <p style="font-size: 28px; font-weight: bold; margin: 15px 0;">${data.packagePrice}/miesiąc</p>
        </div>
        
        <h3>Dane firmy:</h3>
        <div class="info-box">
          <p><strong>Nazwa firmy:</strong> ${data.companyName}</p>
          <p><strong>NIP/VAT ID:</strong> ${data.vatId}</p>
          <p><strong>Adres:</strong> ${data.street}, ${data.postalCode} ${data.city}, ${data.country}</p>
        </div>
        
        <h3>Osoba kontaktowa:</h3>
        <div class="info-box">
          <p><strong>Imię i nazwisko:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Telefon:</strong> ${data.phone}</p>
          <p><strong>Preferowany kontakt:</strong> ${data.contactPreference}</p>
        </div>
        
        <h3>Dane strony WordPress:</h3>
        <div class="info-box">
          <p><strong>URL strony:</strong> <a href="${data.websiteUrl}" target="_blank">${data.websiteUrl}</a></p>
          <p><strong>Panel admin:</strong> ${data.adminUrl || 'Nie podano'}</p>
          <p><strong>Hosting:</strong> ${data.hostingKnown === 'known' ? data.hostingProvider : 'Nieznany'}</p>
          <p><strong>Posiada backupy:</strong> ${data.hasBackups}</p>
          ${data.additionalInfo ? `<p><strong>Dodatkowe info:</strong> ${data.additionalInfo}</p>` : ''}
        </div>
        
        <h3>Płatność:</h3>
        <div class="info-box">
          <p><strong>Metoda płatności:</strong> ${data.paymentMethod === 'bank' ? 'Przelew bankowy' : data.paymentMethod === 'card' ? 'Karta kredytowa (Stripe)' : 'PayPal'}</p>
          <p><strong>VAT (7.7%):</strong> CHF ${vat}</p>
          <p style="font-size: 20px; margin-top: 15px;"><strong>RAZEM: CHF ${total}/miesiąc</strong></p>
        </div>
      `);
      
      userSubject = `Potwierdzenie zamówienia - Pakiet ${data.packageName}`;
      userBodyText = `
Dzień dobry ${data.fullName},

Dziękujemy za złożenie zamówienia pakietu ${data.packageName}!

=== PODSUMOWANIE ZAMÓWIENIA ===
Pakiet: ${data.packageName}
Cena: ${data.packagePrice}/miesiąc
VAT (7.7%): CHF ${vat}
RAZEM: CHF ${total}/miesiąc

=== CO DALEJ? ===
1. Weryfikujemy Twoje dane (do 2h)
2. Wysyłamy umowę do podpisu (elektronicznie)
3. Po podpisaniu - faktura i dane do płatności
4. Po płatności - formularz z dostępami do strony
5. Start opieki w ciągu 48h!

Strona objęta opieką: ${data.websiteUrl}

Skontaktujemy się z Tobą wkrótce aby sfinalizować szczegóły.

---
Pozdrawiamy,
Zespół ProgressiveGroup
info@progressivegroup.ch
      `;
      
      userBodyHtml = createEmailTemplate(`
        <h2>Dziękujemy za zamówienie! 🎉</h2>
        <p>Dzień dobry <strong>${data.fullName}</strong>,</p>
        <p>Dziękujemy za złożenie zamówienia pakietu <strong>${data.packageName}</strong>!</p>
        
        <div class="info-box-gradient">
          <h3>📋 Podsumowanie zamówienia</h3>
          <p><strong>Pakiet:</strong> ${data.packageName}</p>
          <p><strong>Cena:</strong> ${data.packagePrice}/miesiąc</p>
          <p><strong>VAT (7.7%):</strong> CHF ${vat}</p>
          <p style="font-size: 24px; margin-top: 15px;"><strong>RAZEM: CHF ${total}/miesiąc</strong></p>
        </div>
        
        <h3>Co dalej? 🚀</h3>
        <ul class="checklist">
          <li>Weryfikujemy Twoje dane (do 2h)</li>
          <li>Wysyłamy umowę do podpisu (elektronicznie)</li>
          <li>Po podpisaniu - faktura i dane do płatności</li>
          <li>Po płatności - formularz z dostępami do strony</li>
          <li>Start opieki w ciągu 48h!</li>
        </ul>
        
        <h3>Strona objęta opieką:</h3>
        <div class="info-box">
          <p><a href="${data.websiteUrl}" target="_blank" style="font-size: 16px;">${data.websiteUrl}</a></p>
        </div>
        
        <p style="margin-top: 30px;">Skontaktujemy się z Tobą wkrótce aby sfinalizować szczegóły.</p>
        <p>W razie pytań, jesteśmy do Twojej dyspozycji!</p>
      `);
    } else if (type === "website-order") {
      const data = requestData as WebsiteOrderRequest;
      
      // Helper function to format option keys
      const formatKey = (key: string): string => {
        const keyMap: { [key: string]: string } = {
          sections: "Sekcje",
          languages: "Języki",
          cms: "Panel CMS",
          blog: "Blog",
          gallery: "Galeria",
          numberOfPages: "Liczba podstron",
          numberOfProducts: "Liczba produktów",
          search: "Wyszukiwarka",
          filters: "Filtry",
          adsIntegration: "Integracja z reklamami",
          leadForms: "Formularze lead generation",
          abTesting: "A/B Testing",
          expressDelivery: "Ekspresowa realizacja",
          goal: "Cel strony",
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
          return `<li><strong>${formatKey(key)}:</strong> ${value === true ? "Tak" : value}</li>`;
        })
        .join("");
      
      companySubject = `Nowe zapytanie ofertowe - ${data.packageName}`;
      companyBodyText = `
Nowe zapytanie ofertowe na stronę internetową:

PAKIET: ${data.packageName}
Cena bazowa: ${data.basePrice} CHF

DANE KLIENTA:
Firma: ${data.companyName}
Kontakt: ${data.firstName} ${data.lastName}
Email: ${data.email}
Telefon: ${data.phone}
${data.website ? `Obecna strona: ${data.website}` : ''}

OPIS PROJEKTU:
${data.projectDescription}

SZCZEGÓŁY ZAMÓWIENIA:
${JSON.stringify(data, null, 2)}
      `;
      
      companyBodyHtml = createEmailTemplate(`
        <h2>🌐 Nowe zapytanie ofertowe - ${data.packageName}</h2>
        <div class="info-box-gradient">
          <h3>${data.packageName}</h3>
          <p style="font-size: 16px;">Cena bazowa: ${data.basePrice} CHF</p>
        </div>
        <h3>Dane klienta:</h3>
        <div class="info-box">
          <p><strong>Firma:</strong> ${data.companyName}</p>
          <p><strong>Kontakt:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Telefon:</strong> ${data.phone}</p>
          ${data.website ? `<p><strong>Obecna strona:</strong> <a href="${data.website}">${data.website}</a></p>` : ''}
        </div>
        <h3>Opis projektu:</h3>
        <div class="info-box">
          <p>${data.projectDescription.replace(/\n/g, '<br>')}</p>
        </div>
        ${optionsHtml ? `
        <h3>Wybrane opcje:</h3>
        <ul class="checklist">
          ${optionsHtml}
        </ul>
        ` : ''}
      `);
      
      userSubject = 'Potwierdzenie zapytania - ProgressiveGroup';
      userBodyText = `
Dzień dobry ${data.firstName},

Otrzymaliśmy Twoje zapytanie ofertowe na ${data.packageName}.

Nasz zespół przeanalizuje Twoje wymagania i skontaktuje się z Tobą w ciągu 24 godzin z indywidualną wyceną.

W międzyczasie, jeśli masz dodatkowe pytania, śmiało się z nami skontaktuj.

---
Pozdrawiamy,
Zespół ProgressiveGroup
info@progressivegroup.ch
      `;

      userBodyHtml = createEmailTemplate(`
        <h2>Dziękujemy za zapytanie! 🎉</h2>
        <p>Dzień dobry <strong>${data.firstName}</strong>,</p>
        <p>Otrzymaliśmy Twoje zapytanie ofertowe na <strong>${data.packageName}</strong>.</p>
        <div class="info-box">
          <p><strong>Pakiet:</strong> ${data.packageName}</p>
          <p><strong>Cena bazowa:</strong> ${data.basePrice} CHF</p>
        </div>
        <p>Nasz zespół przeanalizuje Twoje wymagania i skontaktuje się z Tobą w ciągu <strong>24 godzin</strong> z indywidualną wyceną dopasowaną do Twoich potrzeb.</p>
        ${optionsHtml ? `
        <h3>Wybrane opcje:</h3>
        <ul class="checklist">
          ${optionsHtml}
        </ul>
        ` : ''}
        <p style="margin-top: 30px;">W międzyczasie, jeśli masz dodatkowe pytania, śmiało się z nami skontaktuj!</p>
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
