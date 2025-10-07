import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Anna Schmidt",
    position: "Betriebsleiterin",
    company: "TechEdu GmbH",
    content: "Dank ProgressiveGroup verschwenden wir endlich keine Zeit mehr mit manuellen Tätigkeiten. Unsere Prozesse laufen schneller und reibungsloser ab.",
    rating: 5
  },
  {
    name: "Markus Weber", 
    position: "CEO",
    company: "InnovateLab",
    content: "Hervorragende Zusammenarbeit und konkrete Ergebnisse – die Automatisierungen ermöglichten es uns, die Kosten für andere Tool-Lizenzen um 60% zu senken.",
    rating: 5
  },
  {
    name: "Katharina Müller",
    position: "HR-Leiterin", 
    company: "FlexWork Solutions",
    content: "Die Automatisierung des HR-Dokumentenworkflows hat dazu geführt, dass der Urlaubsprozess jetzt 2 Tage statt 2 Wochen dauert. Fantastische Lösung!",
    rating: 5
  },
  {
    name: "Thomas Schneider",
    position: "Vertriebsleiter",
    company: "SalesBoost",
    content: "Die Integration von Gmail mit unserem CRM erstellt automatisch Leads. Wir verlieren keinen potenziellen Kunden mehr.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
    ));
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Kundenmeinungen
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in animate-delay-200">
            Sehen Sie, was unsere zufriedenen Kunden über uns sagen
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Main testimonial display */}
          <Card className="card-gradient border-border shadow-elegant mb-8 animate-scale-in">
            <CardContent className="p-8 lg:p-12 text-center">
              <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
              
              <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              
              <div className="text-center">
                <h4 className="text-lg font-bold text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].position}
                </p>
                <p className="text-primary font-medium">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Testimonial indicators */}
          <div className="flex justify-center space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
          
          {/* All testimonials grid (hidden on mobile, shown on larger screens) */}
          <div className="hidden lg:grid grid-cols-2 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`card-gradient border-border transition-all duration-300 hover:shadow-elegant animate-slide-up ${
                  index === currentIndex ? 'ring-2 ring-primary' : ''
                }`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div>
                    <h5 className="text-sm font-bold text-foreground">
                      {testimonial.name}
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
