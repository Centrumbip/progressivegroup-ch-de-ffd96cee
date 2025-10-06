import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Cookie, Shield, Settings } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Switch } from './ui/switch';
import { Label } from './ui/label';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (prefs: typeof preferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    });
  };

  const acceptNecessary = () => {
    saveConsent({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    });
  };

  const saveCustomPreferences = () => {
    saveConsent(preferences);
  };

  const handleFunctionalChange = (checked: boolean) => {
    setPreferences(prev => ({ ...prev, functional: checked }));
  };

  const handleAnalyticsChange = (checked: boolean) => {
    setPreferences(prev => ({ ...prev, analytics: checked }));
  };

  const handleMarketingChange = (checked: boolean) => {
    setPreferences(prev => ({ ...prev, marketing: checked }));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card-solid rounded-2xl shadow-2xl border-2 border-primary/20 overflow-hidden">
            <div className="relative p-6 md:p-8">
              {/* Close button */}
              <button
                onClick={acceptNecessary}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Cookie className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Wir respektieren Ihre Privatsphäre
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Wir verwenden Cookies, um die Grundfunktionen unserer Website bereitzustellen und Ihr Nutzererlebnis zu verbessern. 
                      Sie können Ihre Präferenzen für Analyse- und Marketing-Cookies anpassen.
                    </p>
                  </div>

                  {/* Cookie types info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-start gap-2 bg-primary/5 p-3 rounded-lg border border-primary/10">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Technisch notwendig</div>
                        <div className="text-muted-foreground text-xs">Session-Management, Sicherheit</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-secondary/5 p-3 rounded-lg border border-secondary/10">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Funktional</div>
                        <div className="text-muted-foreground text-xs">Theme-Präferenz, Einstellungen</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-accent/5 p-3 rounded-lg border border-accent/10">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Analyse</div>
                        <div className="text-muted-foreground text-xs">Google Analytics, Website-Statistiken</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-orange-500/5 p-3 rounded-lg border border-orange-500/10">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Marketing</div>
                        <div className="text-muted-foreground text-xs">Personalisierte Werbung, Tracking</div>
                      </div>
                    </div>
                  </div>

                  {/* Info text */}
                  <p className="text-xs text-muted-foreground">
                    Mehr Informationen finden Sie in unserer{' '}
                    <Link to="/cookies" className="text-primary hover:underline font-medium">
                      Cookie-Richtlinie
                    </Link>
                    {' '}und{' '}
                    <Link to="/datenschutz" className="text-primary hover:underline font-medium">
                      Datenschutzerklärung
                    </Link>
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col gap-2 w-full md:w-auto md:min-w-[200px]">
                  <Button
                    onClick={acceptAll}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold"
                  >
                    Alle akzeptieren
                  </Button>
                  <Button
                    onClick={acceptNecessary}
                    variant="outline"
                    className="w-full"
                  >
                    Nur notwendige
                  </Button>
                  <Button
                    onClick={() => setShowSettings(true)}
                    variant="ghost"
                    className="w-full flex items-center gap-2"
                  >
                    <Settings className="w-4 h-4" />
                    Einstellungen
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Settings className="w-6 h-6 text-primary" />
              Cookie-Einstellungen
            </DialogTitle>
            <DialogDescription>
              Wählen Sie, welche Cookies Sie akzeptieren möchten. Technisch notwendige Cookies können nicht deaktiviert werden.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Necessary Cookies - Always ON */}
            <div className="space-y-3 p-4 rounded-lg border border-border bg-primary/5">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Label htmlFor="necessary" className="text-base font-semibold text-foreground">
                    Technisch notwendige Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Diese Cookies sind für die Grundfunktionalität der Website unbedingt erforderlich und können nicht deaktiviert werden.
                  </p>
                </div>
                <Switch
                  id="necessary"
                  checked={true}
                  disabled
                  className="ml-4"
                />
              </div>
              <div className="text-xs text-muted-foreground bg-background/50 p-3 rounded border border-border">
                <strong>Beispiele:</strong> Session-Management, Sicherheitsfunktionen, Cookie-Einwilligung
              </div>
            </div>

            {/* Functional Cookies */}
            <div className="space-y-3 p-4 rounded-lg border border-border">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Label htmlFor="functional" className="text-base font-semibold text-foreground cursor-pointer">
                    Funktionale Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Diese Cookies speichern Ihre Einstellungen wie Theme-Präferenzen und verbessern Ihr Nutzererlebnis.
                  </p>
                </div>
                <Switch
                  id="functional"
                  checked={preferences.functional}
                  onCheckedChange={handleFunctionalChange}
                  className="ml-4"
                />
              </div>
              <div className="text-xs text-muted-foreground bg-secondary/5 p-3 rounded border border-border">
                <strong>Beispiele:</strong> Theme-Einstellung (hell/dunkel), Sprachpräferenz
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="space-y-3 p-4 rounded-lg border border-border">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Label htmlFor="analytics" className="text-base font-semibold text-foreground cursor-pointer">
                    Analyse-Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen anonym sammeln und melden.
                  </p>
                </div>
                <Switch
                  id="analytics"
                  checked={preferences.analytics}
                  onCheckedChange={handleAnalyticsChange}
                  className="ml-4"
                />
              </div>
              <div className="text-xs text-muted-foreground bg-accent/5 p-3 rounded border border-border">
                <strong>Beispiele:</strong> Google Analytics, Website-Statistiken, Nutzerverhalten
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="space-y-3 p-4 rounded-lg border border-border">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Label htmlFor="marketing" className="text-base font-semibold text-foreground cursor-pointer">
                    Marketing-Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Diese Cookies werden verwendet, um Besuchern auf Webseiten zu folgen. Die Absicht ist, Anzeigen anzuzeigen, die relevant und ansprechend für den einzelnen Benutzer sind.
                  </p>
                </div>
                <Switch
                  id="marketing"
                  checked={preferences.marketing}
                  onCheckedChange={handleMarketingChange}
                  className="ml-4"
                />
              </div>
              <div className="text-xs text-muted-foreground bg-orange-500/5 p-3 rounded border border-border">
                <strong>Beispiele:</strong> Facebook Pixel, Google Ads, personalisierte Werbung
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <div className="flex gap-3">
                <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground mb-1">Ihre Privatsphäre ist uns wichtig</p>
                  <p>
                    Sie haben die volle Kontrolle über Ihre Cookie-Präferenzen. Sie können Ihre Einstellungen jederzeit ändern.
                    Analyse- und Marketing-Cookies helfen uns, unsere Website zu verbessern und relevante Inhalte zu zeigen.
                  </p>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="text-sm text-muted-foreground">
              Weitere Informationen:{' '}
              <Link to="/cookies" className="text-primary hover:underline font-medium" onClick={() => setShowSettings(false)}>
                Cookie-Richtlinie
              </Link>
              {' '}|{' '}
              <Link to="/datenschutz" className="text-primary hover:underline font-medium" onClick={() => setShowSettings(false)}>
                Datenschutzerklärung
              </Link>
            </div>
          </div>

          {/* Dialog Footer */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
            <Button
              onClick={saveCustomPreferences}
              className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
            >
              Einstellungen speichern
            </Button>
            <Button
              onClick={acceptAll}
              variant="outline"
              className="flex-1"
            >
              Alle akzeptieren
            </Button>
            <Button
              onClick={acceptNecessary}
              variant="ghost"
              className="flex-1 sm:flex-none"
            >
              Nur notwendige
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add animation styles */}
      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        @media (prefers-color-scheme: dark) {
          .glass-card {
            background: rgba(0, 0, 0, 0.98);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
        }
      `}</style>
    </>
  );
}