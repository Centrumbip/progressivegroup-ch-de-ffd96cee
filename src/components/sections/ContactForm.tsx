import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button-variants";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle Felder aus",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);
    try {
      // Log form data (backend integration required)
      console.log('Contact form submitted:', {
        type: 'contact',
        name: formData.name,
        email: formData.email,
        message: formData.message
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank für Ihre Kontaktaufnahme. Wir antworten innerhalb von 24 Stunden."
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Fehler",
        description: "Es ist ein Problem aufgetreten. Bitte versuchen Sie es erneut.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Kontaktieren Sie uns
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in animate-delay-200">
            Bereit für die Zusammenarbeit? Schreiben Sie uns oder vereinbaren Sie eine kostenlose Beratung
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <Card className="card-gradient border-border shadow-elegant animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Anfrage senden
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Vor- und Nachname *</Label>
                  <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} className="bg-background border-border focus:border-primary" placeholder="Geben Sie Ihren Namen ein" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">E-Mail-Adresse *</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="bg-background border-border focus:border-primary" placeholder="Geben Sie Ihre E-Mail-Adresse ein" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Nachricht *</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} className="bg-background border-border focus:border-primary min-h-32" placeholder="Erzählen Sie uns von Ihren Anforderungen..." required />
                </div>
                
                <Button type="submit" disabled={isLoading} className={buttonVariants({
                variant: "hero",
                size: "lg"
              })}>
                  {isLoading ? 'Wird gesendet...' : 'Anfrage senden'}
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact information */}
          <div className="space-y-8 animate-slide-up animate-delay-200">
            <Card className="card-gradient border-border shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Kontaktdaten
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">E-Mail</h4>
                      <p className="text-muted-foreground">info@progressivegrouph</p>
                    </div>
                  </div>
                  
                  
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Adresse</h4>
                      <p className="text-muted-foreground">
                        Progressivegroup Sp. z o.o.<br />
                        ul. Rynek 5/6<br />
                        59-220 Legnica
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Quick benefits reminder */}
            <Card className="card-gradient border-border shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Kostenlose Beratung umfasst:
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Analyse der aktuellen Prozesse</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Auswahl geeigneter Lösungen</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Vorläufige Projektbewertung</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Implementierungsplan für Lösungen</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactForm;