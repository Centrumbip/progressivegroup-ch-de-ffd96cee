import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button-variants";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Błąd",
        description: "Proszę wypełnić wszystkie pola",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          type: 'contact',
          name: formData.name,
          email: formData.email,
          message: formData.message
        }
      });

      if (error) {
        console.error('Error sending email:', error);
        toast({
          title: "Błąd",
          description: "Nie udało się wysłać wiadomości. Spróbuj ponownie.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Wiadomość wysłana!",
        description: "Dziękujemy za kontakt. Odpowiemy w ciągu 24 godzin."
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
        title: "Błąd",
        description: "Wystąpił problem. Spróbuj ponownie.",
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
            Skontaktuj się z nami
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in animate-delay-200">
            Gotowy na współpracę? Napisz do nas lub umów bezpłatną konsultację
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <Card className="card-gradient border-border shadow-elegant animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Wyślij zapytanie
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Imię i nazwisko *</Label>
                  <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} className="bg-background border-border focus:border-primary" placeholder="Wprowadź swoje imię i nazwisko" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Adres e-mail *</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="bg-background border-border focus:border-primary" placeholder="Wprowadź swój adres e-mail" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Wiadomość *</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} className="bg-background border-border focus:border-primary min-h-32" placeholder="Opowiedz nam o swoich potrzebach..." required />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className={buttonVariants({
                    variant: "hero",
                    size: "lg"
                  })}
                >
                  {isLoading ? 'Wysyłanie...' : 'Wyślij zapytanie'}
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
                  Dane kontaktowe
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                      <p className="text-muted-foreground">info@progressivegroup.ch</p>
                    </div>
                  </div>
                  
                  
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Adres</h4>
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
                  Bezpłatna konsultacja obejmuje:
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Analizę obecnych procesów</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Dobór odpowiednich rozwiązań</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Wstępną wycenę projektu</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Plan wdrożenia rozwiązań</span>
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