import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calculator } from "lucide-react";

export default function PriceCalculator() {
  const [packageType, setPackageType] = useState<"onepage" | "business" | "catalog" | "landing">("business");
  const [languages, setLanguages] = useState<string[]>(["deutsch"]);
  const [expressDelivery, setExpressDelivery] = useState(false);
  const [blog, setBlog] = useState(false);
  const [cms, setCms] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [numberOfPages, setNumberOfPages] = useState<"3" | "5" | "10" | "15">("5");
  const [numberOfProducts, setNumberOfProducts] = useState<"50" | "100" | "200" | "500+">("100");
  const [search, setSearch] = useState(false);
  const [filters, setFilters] = useState(false);
  const [adsIntegration, setAdsIntegration] = useState(false);
  const [leadForms, setLeadForms] = useState(false);
  const [abTesting, setAbTesting] = useState(false);

  const basePrices = {
    onepage: { min: 2500, max: 4000 },
    business: { min: 4000, max: 8000 },
    catalog: { min: 6000, max: 12000 },
    landing: { min: 2000, max: 3500 },
  };

  const calculatePrice = () => {
    let minPrice = basePrices[packageType].min;
    let maxPrice = basePrices[packageType].max;

    // Languages multiplier
    if (languages.length > 1) {
      const langMultiplier = 1 + (languages.length - 1) * 0.4;
      minPrice *= langMultiplier;
      maxPrice *= langMultiplier;
    }

    // Express delivery
    if (expressDelivery) {
      minPrice *= 1.4;
      maxPrice *= 1.4;
    }

    // Blog
    if (blog) {
      minPrice += 800;
      maxPrice += 1500;
    }

    // CMS
    if (cms && packageType === "onepage") {
      minPrice += 500;
      maxPrice += 800;
    }

    // Gallery
    if (gallery) {
      minPrice += 400;
      maxPrice += 800;
    }

    // Number of pages adjustments
    if (packageType === "business") {
      if (numberOfPages === "3") {
        minPrice *= 0.8;
        maxPrice *= 0.8;
      }
    }

    if (packageType === "catalog") {
      if (numberOfPages === "10") {
        minPrice *= 0.8;
        maxPrice *= 0.8;
      }

      // Products
      if (numberOfProducts === "200") {
        minPrice += 1000;
        maxPrice += 2000;
      } else if (numberOfProducts === "500+") {
        minPrice += 2000;
        maxPrice += 4000;
      }

      // Search and filters
      if (search) {
        minPrice += 500;
        maxPrice += 1000;
      }
      if (filters) {
        minPrice += 800;
        maxPrice += 1500;
      }
    }

    // Landing page features
    if (packageType === "landing") {
      if (adsIntegration) {
        minPrice += 300;
        maxPrice += 600;
      }
      if (leadForms) {
        minPrice += 400;
        maxPrice += 800;
      }
      if (abTesting) {
        minPrice += 600;
        maxPrice += 1000;
      }
    }

    return {
      min: Math.round(minPrice),
      max: Math.round(maxPrice),
    };
  };

  const price = calculatePrice();

  const handleLanguageToggle = (lang: string) => {
    setLanguages(prev => 
      prev.includes(lang) 
        ? prev.filter(l => l !== lang)
        : [...prev, lang]
    );
  };

  const languageOptions = [
    { value: "deutsch", label: "🇩🇪 Deutsch" },
    { value: "franzoesisch", label: "🇫🇷 Französisch" },
    { value: "spanisch", label: "🇪🇸 Spanisch" },
    { value: "italienisch", label: "🇮🇹 Italienisch" },
    { value: "polnisch", label: "🇵🇱 Polnisch" },
    { value: "englisch", label: "🇬🇧 Englisch" },
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-4">
          <Calculator className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold gradient-text">Preisrechner</h2>
        </div>
        <p className="text-lg text-foreground/70">
          Erstellen Sie eine Kostenschätzung für Ihr Projekt
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Configuration Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Package Type */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Pakettyp</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={packageType} onValueChange={(value: any) => setPackageType(value)}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="onepage" id="pkg-onepage" />
                    <Label htmlFor="pkg-onepage" className="cursor-pointer">One-Page</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="business" id="pkg-business" />
                    <Label htmlFor="pkg-business" className="cursor-pointer">Visitenkarte-Website</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="catalog" id="pkg-catalog" />
                    <Label htmlFor="pkg-catalog" className="cursor-pointer">Katalog-Website</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="landing" id="pkg-landing" />
                    <Label htmlFor="pkg-landing" className="cursor-pointer">Landing Page</Label>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Sprachversionen</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {languageOptions.map((lang) => (
                  <div key={lang.value} className="flex items-center space-x-2">
                    <Checkbox
                      id={`lang-${lang.value}`}
                      checked={languages.includes(lang.value)}
                      onCheckedChange={() => handleLanguageToggle(lang.value)}
                    />
                    <Label htmlFor={`lang-${lang.value}`} className="cursor-pointer">
                      {lang.label}
                    </Label>
                  </div>
                ))}
              </div>
              {languages.length > 1 && (
                <p className="text-sm text-foreground/60 mt-3">
                  +40% für jede zusätzliche Sprache
                </p>
              )}
            </CardContent>
          </Card>

          {/* Package-specific options */}
          {packageType === "business" && (
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Optionen für Visitenkarte-Website</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="mb-2 block">Anzahl Unterseiten</Label>
                  <RadioGroup value={numberOfPages} onValueChange={(value: any) => setNumberOfPages(value)}>
                    <div className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3" id="biz-pages-3" />
                        <Label htmlFor="biz-pages-3" className="cursor-pointer">3 Unterseiten</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5" id="biz-pages-5" />
                        <Label htmlFor="biz-pages-5" className="cursor-pointer">5 Unterseiten</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="biz-blog" checked={blog} onCheckedChange={(checked) => setBlog(!!checked)} />
                  <Label htmlFor="biz-blog" className="cursor-pointer">Blog</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="biz-gallery" checked={gallery} onCheckedChange={(checked) => setGallery(!!checked)} />
                  <Label htmlFor="biz-gallery" className="cursor-pointer">Fotogalerie</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="biz-cms" checked={cms} onCheckedChange={(checked) => setCms(!!checked)} />
                  <Label htmlFor="biz-cms" className="cursor-pointer">CMS zur Inhaltsverwaltung</Label>
                </div>
              </CardContent>
            </Card>
          )}

          {packageType === "catalog" && (
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Optionen für Katalog-Website</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="mb-2 block">Anzahl Unterseiten</Label>
                  <RadioGroup value={numberOfPages} onValueChange={(value: any) => setNumberOfPages(value)}>
                    <div className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="10" id="cat-pages-10" />
                        <Label htmlFor="cat-pages-10" className="cursor-pointer">10 Unterseiten</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="15" id="cat-pages-15" />
                        <Label htmlFor="cat-pages-15" className="cursor-pointer">15 Unterseiten</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <Label className="mb-2 block">Anzahl Produkte</Label>
                  <RadioGroup value={numberOfProducts} onValueChange={(value: any) => setNumberOfProducts(value)}>
                    <div className="grid grid-cols-2 gap-2">
                      {["50", "100", "200", "500+"].map((num) => (
                        <div key={num} className="flex items-center space-x-2">
                          <RadioGroupItem value={num} id={`cat-products-${num}`} />
                          <Label htmlFor={`cat-products-${num}`} className="cursor-pointer">{num}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="cat-search" checked={search} onCheckedChange={(checked) => setSearch(!!checked)} />
                  <Label htmlFor="cat-search" className="cursor-pointer">Produktsuche</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="cat-filters" checked={filters} onCheckedChange={(checked) => setFilters(!!checked)} />
                  <Label htmlFor="cat-filters" className="cursor-pointer">Filter und Sortierung</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="cat-blog" checked={blog} onCheckedChange={(checked) => setBlog(!!checked)} />
                  <Label htmlFor="cat-blog" className="cursor-pointer">Integrierter Blog</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="cat-cms" checked={cms} onCheckedChange={(checked) => setCms(!!checked)} />
                  <Label htmlFor="cat-cms" className="cursor-pointer">Admin-Panel</Label>
                </div>
              </CardContent>
            </Card>
          )}

          {packageType === "onepage" && (
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>One-Page Optionen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="one-cms" checked={cms} onCheckedChange={(checked) => setCms(!!checked)} />
                  <Label htmlFor="one-cms" className="cursor-pointer">Panel zur Inhaltsbearbeitung (CMS)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="one-blog" checked={blog} onCheckedChange={(checked) => setBlog(!!checked)} />
                  <Label htmlFor="one-blog" className="cursor-pointer">Blog-Bereich</Label>
                </div>
              </CardContent>
            </Card>
          )}

          {packageType === "landing" && (
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Landing Page Optionen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="land-ads" checked={adsIntegration} onCheckedChange={(checked) => setAdsIntegration(!!checked)} />
                  <Label htmlFor="land-ads" className="cursor-pointer">Google/Facebook Ads Integration</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="land-lead" checked={leadForms} onCheckedChange={(checked) => setLeadForms(!!checked)} />
                  <Label htmlFor="land-lead" className="cursor-pointer">Lead-Generation-Formulare</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="land-ab" checked={abTesting} onCheckedChange={(checked) => setAbTesting(!!checked)} />
                  <Label htmlFor="land-ab" className="cursor-pointer">A/B-Testing-Bereitschaft</Label>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Common Options */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Zusätzliche Optionen</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Checkbox id="express" checked={expressDelivery} onCheckedChange={(checked) => setExpressDelivery(!!checked)} />
                <Label htmlFor="express" className="cursor-pointer">Express-Lieferung (+40%)</Label>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Price Display - Sticky */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <Card className="glass-card border-primary border-2 shadow-elevated">
              <CardHeader>
                <CardTitle className="text-center">Geschätzte Kosten</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {price.min.toLocaleString('de-CH')} - {price.max.toLocaleString('de-CH')} CHF
                  </div>
                  <p className="text-sm text-foreground/60">
                    Endpreis nach Beratung
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/70">Basispaket:</span>
                    <span className="font-semibold">
                      {basePrices[packageType].min.toLocaleString('de-CH')} - {basePrices[packageType].max.toLocaleString('de-CH')} CHF
                    </span>
                  </div>
                  
                  {languages.length > 1 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/70">Sprachen ({languages.length}):</span>
                      <Badge variant="secondary">+{(languages.length - 1) * 40}%</Badge>
                    </div>
                  )}
                  
                  {expressDelivery && (
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/70">Express:</span>
                      <Badge variant="secondary">+40%</Badge>
                    </div>
                  )}
                  
                  {blog && (
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/70">Blog:</span>
                      <Badge variant="secondary">+800-1500 CHF</Badge>
                    </div>
                  )}
                  
                  {cms && packageType === "onepage" && (
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/70">CMS:</span>
                      <Badge variant="secondary">+500-800 CHF</Badge>
                    </div>
                  )}
                  
                  {gallery && (
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/70">Galerie:</span>
                      <Badge variant="secondary">+400-800 CHF</Badge>
                    </div>
                  )}
                </div>

                <p className="text-xs text-center text-foreground/50 pt-4">
                  * Die Schätzung ist unverbindlich. Der Endpreis wird nach einer detaillierten Beratung festgelegt.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
