import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Check, Clock } from "lucide-react";

const auditFormSchema = z.object({
  websiteUrl: z.string().url({ message: "Wprowadź prawidłowy URL strony" }),
  email: z.string().email({ message: "Wprowadź prawidłowy adres email" }),
  fullName: z.string().min(2, { message: "Imię i nazwisko musi zawierać co najmniej 2 znaki" }),
  companyName: z.string().optional(),
  phone: z.string().optional(),
  gdprConsent: z.boolean().refine((val) => val === true, {
    message: "Zgoda na przetwarzanie danych jest wymagana",
  }),
  newsletter: z.boolean().optional(),
});

type AuditFormValues = z.infer<typeof auditFormSchema>;

interface FreeAuditFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const FreeAuditForm = ({ open, onOpenChange }: FreeAuditFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AuditFormValues>({
    resolver: zodResolver(auditFormSchema),
    defaultValues: {
      websiteUrl: "",
      email: "",
      fullName: "",
      companyName: "",
      phone: "",
      gdprConsent: false,
      newsletter: false,
    },
  });

  const onSubmit = async (data: AuditFormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          type: "audit",
          websiteUrl: data.websiteUrl,
          email: data.email,
          fullName: data.fullName,
          companyName: data.companyName || "",
          phone: data.phone || "",
          newsletter: data.newsletter || false,
        },
      });

      if (error) throw error;

      toast.success("Dziękujemy! Twój audyt jest w trakcie realizacji. Wyniki otrzymasz w ciągu 24-48h.");
      form.reset();
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting audit form:", error);
      toast.error("Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Bezpłatny Audyt Bezpieczeństwa WordPress
          </DialogTitle>
          <DialogDescription className="space-y-3 pt-2">
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Raport bezpieczeństwa Twojej strony</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Lista znalezionych podatności</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Rekomendacje naprawcze</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Wycena naprawy (jeśli potrzebna)</span>
            </div>
            <div className="flex items-center gap-2 pt-2 text-primary font-semibold">
              <Clock className="w-5 h-5" />
              <span>Czas realizacji: 24-48h</span>
            </div>
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <FormField
              control={form.control}
              name="websiteUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL strony *</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} />
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
                    <Input type="email" placeholder="twoj@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Imię i nazwisko *</FormLabel>
                  <FormControl>
                    <Input placeholder="Jan Kowalski" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nazwa firmy</FormLabel>
                  <FormControl>
                    <Input placeholder="Moja Firma GmbH" {...field} />
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
                  <FormLabel>Telefon (opcjonalnie)</FormLabel>
                  <FormControl>
                    <Input placeholder="+41 XX XXX XX XX" {...field} />
                  </FormControl>
                  <FormMessage />
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

            <FormField
              control={form.control}
              name="newsletter"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Chcę otrzymywać porady nt. WordPress (opt-in)</FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Wysyłanie..." : "Wyślij - otrzymaj audyt w 24-48h"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
