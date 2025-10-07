import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ArrowRight, ArrowLeft } from "lucide-react";

interface WebsiteOrderFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  packageName: string;
  basePrice: string;
}

const baseSchema = z.object({
  companyName: z.string().min(2, "Nazwa firmy jest wymagana"),
  firstName: z.string().min(2, "Imię jest wymagane"),
  lastName: z.string().min(2, "Nazwisko jest wymagane"),
  email: z.string().email("Nieprawidłowy adres email"),
  phone: z.string().min(9, "Nieprawidłowy numer telefonu"),
  website: z.string().optional(),
  projectDescription: z.string().min(10, "Opisz swoje potrzeby (minimum 10 znaków)"),
});

const onePageSchema = baseSchema.extend({
  sections: z.array(z.string()).optional(),
  languages: z.array(z.string()).optional(),
  cms: z.boolean().optional(),
  blog: z.boolean().optional(),
  expressDelivery: z.boolean().optional(),
});

const businessCardSchema = baseSchema.extend({
  numberOfPages: z.enum(["3", "5"]).optional(),
  languages: z.array(z.string()).optional(),
  blog: z.boolean().optional(),
  gallery: z.boolean().optional(),
  cms: z.boolean().optional(),
  expressDelivery: z.boolean().optional(),
});

const catalogSchema = baseSchema.extend({
  numberOfPages: z.enum(["10", "15"]).optional(),
  numberOfProducts: z.enum(["50", "100", "200", "500+"]).optional(),
  languages: z.array(z.string()).optional(),
  search: z.boolean().optional(),
  filters: z.boolean().optional(),
  blog: z.boolean().optional(),
  cms: z.boolean().optional(),
  expressDelivery: z.boolean().optional(),
});

const landingPageSchema = baseSchema.extend({
  goal: z.string().optional(),
  languages: z.array(z.string()).optional(),
  adsIntegration: z.boolean().optional(),
  leadForms: z.boolean().optional(),
  abTesting: z.boolean().optional(),
  expressDelivery: z.boolean().optional(),
});

export default function WebsiteOrderForm({ open, onOpenChange, packageName, basePrice }: WebsiteOrderFormProps) {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getSchema = () => {
    switch (packageName) {
      case "One-Page":
        return onePageSchema;
      case "Strona Wizytówka":
        return businessCardSchema;
      case "Strona Katalogowa":
        return catalogSchema;
      case "Landing Page":
        return landingPageSchema;
      default:
        return baseSchema;
    }
  };

  const getDefaultValues = () => {
    const base = {
      companyName: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      website: "",
      projectDescription: "",
    };

    switch (packageName) {
      case "One-Page":
        return { ...base, sections: [], languages: ["polski"], cms: false, blog: false, expressDelivery: false };
      case "Strona Wizytówka":
        return { ...base, numberOfPages: "5" as const, languages: ["polski"], blog: false, gallery: false, cms: false, expressDelivery: false };
      case "Strona Katalogowa":
        return { ...base, numberOfPages: "15" as const, numberOfProducts: "100" as const, languages: ["polski"], search: false, filters: false, blog: false, cms: false, expressDelivery: false };
      case "Landing Page":
        return { ...base, goal: "", languages: ["polski"], adsIntegration: false, leadForms: false, abTesting: false, expressDelivery: false };
      default:
        return base;
    }
  };

  const form = useForm<any>({
    resolver: zodResolver(getSchema()),
    defaultValues: getDefaultValues(),
  });

  // On invalid submit, navigate user to the step with errors and show a toast
  const onInvalid = (errors: Record<string, any>) => {
    console.log("Validation errors on submit:", errors);
    const baseFields = ["companyName", "firstName", "lastName", "email", "phone", "projectDescription"];
    const hasBaseErrors = baseFields.some((f) => !!errors[f]);
    if (hasBaseErrors) {
      setStep(1);
      toast({
        title: "Uzupełnij dane kontaktowe",
        description: "Sprawdź wymagane pola w kroku 1.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Uzupełnij wymagane pola",
        description: "Sprawdź wybory w kroku 2.",
        variant: "destructive",
      });
    }
  };


  const onSubmit = async (values: any) => {
    console.log("Form submit started", { values, step });
    setIsSubmitting(true);
    try {
      const emailData = {
        type: "website-order",
        packageName,
        basePrice,
        ...values,
      };

      console.log("Sending email data:", emailData);

      // Simulate API call (backend integration required)
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log("Email sent successfully");

      toast({
        title: "Zapytanie wysłane!",
        description: "Skontaktujemy się z Tobą w ciągu 24 godzin z indywidualną wyceną.",
      });

      onOpenChange(false);
      form.reset();
      setStep(1);
    } catch (error) {
      console.error("Error sending form:", error);
      toast({
        title: "Błąd",
        description: "Nie udało się wysłać formularza. Spróbuj ponownie.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    console.log("Next step clicked, current step:", step);
    const fieldsToValidate = step === 1 
      ? ["companyName", "firstName", "lastName", "email", "phone", "projectDescription"]
      : [];
    
    const isValid = await form.trigger(fieldsToValidate as any);
    console.log("Validation result:", isValid, "Errors:", form.formState.errors);
    if (isValid) {
      // Defer state update to avoid the click ending on the new submit button after re-render
      (document.activeElement as HTMLElement | null)?.blur();
      setTimeout(() => {
        setStep(2);
        console.log("Moving to step 2");
      }, 0);
    } else {
      console.log("Validation failed, staying on step 1");
    }
  };

  const prevStep = () => setStep(1);

  const renderStep1 = () => (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="companyName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nazwa firmy *</FormLabel>
            <FormControl>
              <Input placeholder="Progressive Group" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imię *</FormLabel>
              <FormControl>
                <Input placeholder="Jan" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nazwisko *</FormLabel>
              <FormControl>
                <Input placeholder="Kowalski" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email *</FormLabel>
            <FormControl>
              <Input type="email" placeholder="jan@firma.pl" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Telefon *</FormLabel>
            <FormControl>
              <Input placeholder="+48 123 456 789" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="website"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Obecna strona (jeśli istnieje)</FormLabel>
            <FormControl>
              <Input placeholder="https://..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="projectDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Opisz swoje potrzeby i oczekiwania *</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Jakie są cele Twojej strony? Jaka jest grupa docelowa? Czego potrzebujesz..." 
                className="min-h-[120px]"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );

  const renderStep2OnePage = () => (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="sections"
        render={() => (
          <FormItem>
            <FormLabel>Jakie sekcje potrzebujesz?</FormLabel>
            <div className="space-y-2 mt-2">
              {["O nas", "Usługi", "Portfolio", "Zespół", "Kontakt", "FAQ", "Cennik", "Blog"].map((section) => (
                <FormField
                  key={section}
                  control={form.control}
                  name="sections"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={Array.isArray(field.value) && field.value.includes(section)}
                          onCheckedChange={(checked) => {
                            const current = Array.isArray(field.value) ? field.value : [];
                            field.onChange(
                              checked
                                ? [...current, section]
                                : current.filter((v: string) => v !== section)
                            );
                          }}
                        />
                      </FormControl>
                      <FormLabel 
                        className="font-normal cursor-pointer"
                        onClick={(e) => e.preventDefault()}
                      >
                        {section}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="languages"
        render={() => (
          <FormItem>
            <FormLabel>Wersje językowe</FormLabel>
            <div className="space-y-2 mt-2">
              {[
                { value: "polski", label: "🇵🇱 Polski" },
                { value: "niemiecki", label: "🇩🇪 Niemiecki" },
                { value: "francuski", label: "🇫🇷 Francuski" },
                { value: "hiszpanski", label: "🇪🇸 Hiszpański" },
                { value: "wloski", label: "🇮🇹 Włoski" },
                { value: "angielski", label: "🇬🇧 Angielski" },
              ].map((lang) => (
                <FormField
                  key={lang.value}
                  control={form.control}
                  name="languages"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={Array.isArray(field.value) && field.value.includes(lang.value)}
                          onCheckedChange={(checked) => {
                            const current = Array.isArray(field.value) ? field.value : [];
                            field.onChange(
                              checked
                                ? [...current, lang.value]
                                : current.filter((v: string) => v !== lang.value)
                            );
                          }}
                        />
                      </FormControl>
                      <FormLabel 
                        className="font-normal cursor-pointer"
                        onClick={(e) => e.preventDefault()}
                      >
                        {lang.label}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="space-y-3">
        <FormField
          control={form.control}
          name="cms"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={!!field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div>
                <FormLabel 
                  className="cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  Panel do edycji treści (CMS)
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="blog"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={!!field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div>
                <FormLabel 
                  className="cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  Sekcja blog
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="expressDelivery"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={!!field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div>
                <FormLabel 
                  className="cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  Ekspresowa realizacja (2-4 dni)
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
      </div>
    </div>
  );

  const renderStep2BusinessCard = () => (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="numberOfPages"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Liczba podstron</FormLabel>
            <FormControl>
              <RadioGroup value={field.value} onValueChange={field.onChange}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="3" id="pages-3" />
                  <label htmlFor="pages-3" className="cursor-pointer">3 podstrony</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="5" id="pages-5" />
                  <label htmlFor="pages-5" className="cursor-pointer">5 podstron</label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="languages"
        render={() => (
          <FormItem>
            <FormLabel>Wersje językowe</FormLabel>
            <div className="space-y-2 mt-2">
              {[
                { value: "polski", label: "🇵🇱 Polski" },
                { value: "niemiecki", label: "🇩🇪 Niemiecki" },
                { value: "francuski", label: "🇫🇷 Francuski" },
                { value: "hiszpanski", label: "🇪🇸 Hiszpański" },
                { value: "wloski", label: "🇮🇹 Włoski" },
                { value: "angielski", label: "🇬🇧 Angielski" },
              ].map((lang) => (
                <FormField
                  key={lang.value}
                  control={form.control}
                  name="languages"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={Array.isArray(field.value) && field.value.includes(lang.value)}
                          onCheckedChange={(checked) => {
                            const current = Array.isArray(field.value) ? field.value : [];
                            field.onChange(
                              checked
                                ? [...current, lang.value]
                                : current.filter((v: string) => v !== lang.value)
                            );
                          }}
                        />
                      </FormControl>
                      <FormLabel 
                        className="font-normal cursor-pointer"
                        onClick={(e) => e.preventDefault()}
                      >
                        {lang.label}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="space-y-3">
        <FormField
          control={form.control}
          name="blog"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={!!field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div>
                <FormLabel 
                  className="cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  Blog
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gallery"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={!!field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div>
                <FormLabel 
                  className="cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  Galeria zdjęć
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cms"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={!!field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div>
                <FormLabel 
                  className="cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  Panel CMS do zarządzania treścią
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="expressDelivery"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={!!field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div>
                <FormLabel 
                  className="cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  Ekspresowa realizacja
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
      </div>
    </div>
  );

  const renderStep2Catalog = () => (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="numberOfPages"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Liczba podstron</FormLabel>
            <FormControl>
              <RadioGroup value={field.value} onValueChange={field.onChange}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="10" id="pages-10" />
                  <label htmlFor="pages-10" className="cursor-pointer">10 podstron</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="15" id="pages-15" />
                  <label htmlFor="pages-15" className="cursor-pointer">15 podstron</label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="numberOfProducts"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Liczba produktów</FormLabel>
            <FormControl>
              <RadioGroup value={field.value} onValueChange={field.onChange}>
                {["50", "100", "200", "500+"].map((num) => (
                  <div key={num} className="flex items-center space-x-2">
                    <RadioGroupItem value={num} id={`products-${num}`} />
                    <label htmlFor={`products-${num}`} className="cursor-pointer">{num} produktów</label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="languages"
        render={() => (
          <FormItem>
            <FormLabel>Wersje językowe</FormLabel>
            <div className="space-y-2 mt-2">
              {[
                { value: "polski", label: "🇵🇱 Polski" },
                { value: "niemiecki", label: "🇩🇪 Niemiecki" },
                { value: "francuski", label: "🇫🇷 Francuski" },
                { value: "hiszpanski", label: "🇪🇸 Hiszpański" },
                { value: "wloski", label: "🇮🇹 Włoski" },
                { value: "angielski", label: "🇬🇧 Angielski" },
              ].map((lang) => (
                <FormField
                  key={lang.value}
                  control={form.control}
                  name="languages"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={Array.isArray(field.value) && field.value.includes(lang.value)}
                          onCheckedChange={(checked) => {
                            const current = Array.isArray(field.value) ? field.value : [];
                            field.onChange(
                              checked
                                ? [...current, lang.value]
                                : current.filter((v: string) => v !== lang.value)
                            );
                          }}
                        />
                      </FormControl>
                      <FormLabel 
                        className="font-normal cursor-pointer"
                        onClick={(e) => e.preventDefault()}
                      >
                        {lang.label}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="space-y-3">
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={!!field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div>
                <FormLabel 
                  className="cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  Wyszukiwarka produktów
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="filters"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={!!field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div>
                <FormLabel 
                  className="cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  Filtry i zaawansowane sortowanie
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="blog"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={!!field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div>
                <FormLabel 
                  className="cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  Blog zintegrowany
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cms"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={!!field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div>
                <FormLabel 
                  className="cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  Pełny panel administracyjny (CMS)
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="expressDelivery"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={!!field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div>
                <FormLabel 
                  className="cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  Ekspresowa realizacja
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
      </div>
    </div>
  );

  const renderStep2Landing = () => (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="goal"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Cel strony landing page</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Np. pozyskanie leadów, sprzedaż produktu, zapisanie na webinar..." 
                className="min-h-[100px]"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="languages"
        render={() => (
          <FormItem>
            <FormLabel>Wersje językowe</FormLabel>
            <div className="space-y-2 mt-2">
              {[
                { value: "polski", label: "🇵🇱 Polski" },
                { value: "niemiecki", label: "🇩🇪 Niemiecki" },
                { value: "francuski", label: "🇫🇷 Francuski" },
                { value: "hiszpanski", label: "🇪🇸 Hiszpański" },
                { value: "wloski", label: "🇮🇹 Włoski" },
                { value: "angielski", label: "🇬🇧 Angielski" },
              ].map((lang) => (
                <FormField
                  key={lang.value}
                  control={form.control}
                  name="languages"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={Array.isArray(field.value) && field.value.includes(lang.value)}
                          onCheckedChange={(checked) => {
                            const current = Array.isArray(field.value) ? field.value : [];
                            field.onChange(
                              checked
                                ? [...current, lang.value]
                                : current.filter((v: string) => v !== lang.value)
                            );
                          }}
                        />
                      </FormControl>
                      <FormLabel 
                        className="font-normal cursor-pointer"
                        onClick={(e) => e.preventDefault()}
                      >
                        {lang.label}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="space-y-3">
        <FormField
          control={form.control}
          name="adsIntegration"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={!!field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div>
                <FormLabel 
                  className="cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  Integracja z Google/Facebook Ads
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="leadForms"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={!!field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div>
                <FormLabel 
                  className="cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  Zaawansowane formularze lead generation
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="abTesting"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={!!field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div>
                <FormLabel 
                  className="cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  Gotowość do A/B testingu
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="expressDelivery"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={!!field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div>
                <FormLabel 
                  className="cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  Ekspresowa realizacja
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
      </div>
    </div>
  );

  const renderStep2 = () => {
    switch (packageName) {
      case "One-Page":
        return renderStep2OnePage();
      case "Strona Wizytówka":
        return renderStep2BusinessCard();
      case "Strona Katalogowa":
        return renderStep2Catalog();
      case "Landing Page":
        return renderStep2Landing();
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text">
            Formularz zapytania - {packageName}
          </DialogTitle>
          <DialogDescription>
            Krok {step} z 2 - {step === 1 ? "Dane kontaktowe" : "Szczegóły projektu"}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="space-y-6">
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}

            <div className="flex gap-4 pt-4">
              {step === 2 && (
                <Button type="button" variant="outline" onClick={prevStep} className="gap-2">
                  <ArrowLeft className="w-4 h-4" /> Wstecz
                </Button>
              )}
              {step === 1 ? (
                <Button type="button" onClick={nextStep} className="ml-auto gap-2">
                  Dalej <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button type="submit" disabled={isSubmitting} className="ml-auto gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Wysyłanie...
                    </>
                  ) : (
                    "Wyślij zapytanie"
                  )}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
