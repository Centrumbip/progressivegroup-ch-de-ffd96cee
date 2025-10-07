import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Anna Kowalska",
    position: "Dyrektor ds. Operacyjnych",
    company: "TechEdu Sp. z o.o.",
    content: "Dzięki Progressivegroup wreszcie przestaliśmy tracić czas na ręczne działania. Nasze procesy działają szybciej i sprawniej.",
    rating: 5
  },
  {
    name: "Marek Nowak", 
    position: "CEO",
    company: "InnovateLab",
    content: "Świetna współpraca i konkretne efekty – automatyzacje pozwoliły nam obniżyć koszty licencji innych narzędzi o 60%.",
    rating: 5
  },
  {
    name: "Katarzyna Zielińska",
    position: "Kierownik HR", 
    company: "FlexWork Solutions",
    content: "Automatyzacja obiegu dokumentów HR sprawiła, że proces urlopowy trwa teraz 2 dni zamiast 2 tygodni. Fantastyczne rozwiązanie!",
    rating: 5
  },
  {
    name: "Tomasz Wiśniewski",
    position: "Dyrektor Sprzedaży",
    company: "SalesBoost",
    content: "Integracja Gmail z naszym CRM automatycznie tworzy leady. Nie gubimy już żadnego potencjalnego klienta.",
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
            Opinie klientów
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in animate-delay-200">
            Zobacz co mówią o nas nasi zadowoleni klienci
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