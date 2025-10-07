import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ChevronLeft, ChevronRight } from "lucide-react";

const orderFormSchema = z.object({
  // Step 1: Company details
  companyName: z.string().min(2, { message: "Nazwa firmy jest wymagana" }),
  vatId: z.string().min(2, { message: "NIP/VAT ID jest wymagany" }),
  street: z.string().min(2, { message: "Ulica jest wymagana" }),
  postalCode: z.string().min(2, { message: "Kod pocztowy jest wymagany" }),
  city: z.string().min(2, { message: "Miasto jest wymagane" }),
  country: z.string().min(2, { message: "Kraj jest wymagany" }),
  
  // Step 2: Contact person
  fullName: z.string().min(2, { message: "Imię i nazwisko jest wymagane" }),
  email: z.string().email({ message: "Wprowadź prawidłowy adres email" }),
  phone: z.string().min(5, { message: "Telefon jest wymagany" }),
  contactPreference: z.enum(["email", "phone", "whatsapp"]),
  
  // Step 3: WordPress details
  websiteUrl: z.string().url({ message: "Wprowadź prawidłowy URL strony" }),
  adminUrl: z.string().optional(),
  hostingProvider: z.string().optional(),
  hostingKnown: z.enum(["known", "unknown"]),
  hasBackups: z.enum(["yes", "no", "unknown"]),
  additionalInfo: z.string().optional(),
  
  // Step 4: Payment
  paymentMethod: z.enum(["bank", "card", "paypal"]),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "Akceptacja regulaminu jest wymagana",
  }),
  gdprConsent: z.boolean().refine((val) => val === true, {
    message: "Zgoda na przetwarzanie danych jest wymagana",
  }),
});

type OrderFormValues = z.infer<typeof orderFormSchema>;

interface OrderFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  packageName: string;
  packagePrice: string;
}

export const OrderForm = ({ open, onOpenChange, packageName, packagePrice }: OrderFormProps) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      companyName: "",
      vatId: "",
      street: "",
      postalCode: "",
      city: "",
      country: "Switzerland",
      fullName: "",
      email: "",
      phone: "",
      contactPreference: "email",
      websiteUrl: "",
      adminUrl: "",
      hostingProvider: "",
      hostingKnown: "unknown",
      hasBackups: "unknown",
      additionalInfo: "",
      paymentMethod: "bank",
      termsAccepted: false,
      gdprConsent: false,
    },
  });

  const onSubmit = async (data: OrderFormValues) => {
    setIsSubmitting(true);
    try {
      // Log form data (backend integration required)
      console.log("Order form submitted:", {
        type: "order",
        packageName,
        packagePrice,
        ...data,
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast.success("Zamówienie zostało złożone! Otrzymasz potwierdzenie na email wraz z dalszymi instrukcjami.");
      form.reset();
      setStep(1);
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting order:", error);
      toast.error("Wystąpił błąd podczas składania zamówienia. Spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    const fields = getFieldsForStep(step);
    const isValid = await form.trigger(fields);
    if (isValid) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const getFieldsForStep = (currentStep: number): (keyof OrderFormValues)[] => {
    switch (currentStep) {
      case 1:
        return ["companyName", "vatId", "street", "postalCode", "city", "country"];
      case 2:
        return ["fullName", "email", "phone", "contactPreference"];
      case 3:
        return ["websiteUrl", "hostingKnown", "hasBackups"];
      case 4:
        return ["paymentMethod", "termsAccepted", "gdprConsent"];
      default:
        return [];
    }
  };

  const calculateTotal = () => {
    const price = parseFloat(packagePrice.replace("CHF ", ""));
    const vat = price * 0.077;
    return {
      price: price.toFixed(2),
      vat: vat.toFixed(2),
      total: (price + vat).toFixed(2),
    };
  };

  const totals = calculateTotal();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            🛒 Zamówienie: Pakiet {packageName}
          </DialogTitle>
          <DialogDescription>
            Wybrany pakiet: {packageName} - {packagePrice}/mies. | Start: W ciągu 48h od podpisania umowy
          </DialogDescription>
        </DialogHeader>

        <div className="mb-4">
          <div className="flex justify-between items-center">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`flex-1 h-2 rounded ${
                  s <= step ? "bg-primary" : "bg-muted"
                } ${s !== 4 ? "mr-2" : ""}`}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            Krok {step} z 4
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Step 1: Company Details */}
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">KROK 1/4: Dane firmy</h3>
                
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nazwa firmy *</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="vatId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>NIP/VAT ID *</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="street"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ulica *</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="postalCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Kod pocztowy *</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Miasto *</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kraj *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Wybierz kraj" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Switzerland">Switzerland</SelectItem>
                          <SelectItem value="Germany">Germany</SelectItem>
                          <SelectItem value="Austria">Austria</SelectItem>
                          <SelectItem value="Poland">Poland</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* Step 2: Contact Person */}
            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">KROK 2/4: Osoba kontaktowa</h3>
                
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Imię i nazwisko *</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
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
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contactPreference"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Preferowany sposób kontaktu</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="email" />
                            </FormControl>
                            <FormLabel className="font-normal">Email</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="phone" />
                            </FormControl>
                            <FormLabel className="font-normal">Telefon</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="whatsapp" />
                            </FormControl>
                            <FormLabel className="font-normal">WhatsApp</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* Step 3: WordPress Details */}
            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">KROK 3/4: Dane strony WordPress</h3>
                
                <FormField
                  control={form.control}
                  name="websiteUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>URL strony *</FormLabel>
                      <FormControl>
                        <Input placeholder="https://" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="adminUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Panel admina (zazwyczaj /wp-admin)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="hostingKnown"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Hosting</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="known" />
                            </FormControl>
                            <FormLabel className="font-normal">Wiem</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="unknown" />
                            </FormControl>
                            <FormLabel className="font-normal">Nie wiem / otrzymam dane później</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {form.watch("hostingKnown") === "known" && (
                  <FormField
                    control={form.control}
                    name="hostingProvider"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Provider hostingowy</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <FormField
                  control={form.control}
                  name="hasBackups"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Czy masz obecnie backupy strony?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="yes" />
                            </FormControl>
                            <FormLabel className="font-normal">Tak</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="no" />
                            </FormControl>
                            <FormLabel className="font-normal">Nie</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="unknown" />
                            </FormControl>
                            <FormLabel className="font-normal">Nie wiem</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dodatkowe informacje / specjalne wymagania</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={3} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* Step 4: Summary and Payment */}
            {step === 4 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">KROK 4/4: Podsumowanie i płatność</h3>
                
                <div className="glass-card p-4 rounded-lg space-y-2">
                  <h4 className="font-semibold">📋 PODSUMOWANIE ZAMÓWIENIA:</h4>
                  <div className="space-y-1 text-sm">
                    <p>Pakiet: {packageName}</p>
                    <p>Cena: CHF {totals.price} / miesiąc</p>
                    <p>VAT (7.7%): CHF {totals.vat}</p>
                    <div className="border-t border-primary/20 pt-1 mt-1">
                      <p className="font-bold">RAZEM: CHF {totals.total} / miesiąc</p>
                    </div>
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Metoda płatności</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="bank" />
                            </FormControl>
                            <FormLabel className="font-normal">Przelew bankowy (faktura email)</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="card" />
                            </FormControl>
                            <FormLabel className="font-normal">Karta kredytowa (Stripe) - auto-renewal</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="paypal" />
                            </FormControl>
                            <FormLabel className="font-normal">PayPal</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="termsAccepted"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Akceptuję Regulamin i Politykę Prywatności *</FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="gdprConsent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Zgadzam się na przetwarzanie danych *</FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <div className="glass-card p-4 rounded-lg text-sm space-y-2">
                  <p className="font-semibold">📄 Po złożeniu zamówienia otrzymasz:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Umowę do podpisu (elektronicznie)</li>
                    <li>Fakturę proforma / dane do płatności</li>
                    <li>Bezpieczny formularz z dostępami do WP</li>
                    <li>Potwierdzenie startu (w ciągu 48h)</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-4">
              {step > 1 && (
                <Button type="button" variant="outline" onClick={prevStep}>
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Wstecz
                </Button>
              )}
              {step < 4 ? (
                <Button type="button" onClick={nextStep} className="ml-auto">
                  Następny krok
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button type="submit" disabled={isSubmitting} className="ml-auto">
                  {isSubmitting ? "Wysyłanie..." : "Złóż zamówienie ✓"}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
