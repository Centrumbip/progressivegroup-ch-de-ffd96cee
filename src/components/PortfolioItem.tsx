import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Globe, Palette, Zap, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PortfolioItemProps {
  id: string;
  title: string;
  description: string;
  type: string;
  language: string;
  flag: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  category: "business" | "restaurant" | "portfolio" | "ecommerce" | "corporate";
  screenshots?: string[];
}

const PortfolioItem = ({ 
  id, 
  title, 
  description, 
  type, 
  language, 
  flag, 
  image, 
  technologies, 
  features, 
  liveUrl,
  category,
  screenshots = []
}: PortfolioItemProps) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-border hover:border-primary/20">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <Badge variant="secondary" className="bg-white/90 text-black">
            {flag} {language}
          </Badge>
          <Badge variant="outline" className="bg-white/90 text-black border-white/20">
            {type}
          </Badge>
        </div>
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-black">
            <Star className="w-3 h-3 mr-1" />
            Portfolio
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Technologies */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            Technologien
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Key Features */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            Hauptfunktionen
          </h4>
          <ul className="space-y-1">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Screenshots */}
        {screenshots.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              Screenshots
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {screenshots.slice(0, 4).map((screenshot, index) => (
                <div key={index} className="aspect-video bg-muted rounded-lg overflow-hidden border">
                  <img 
                    src={screenshot}
                    alt={`${title} Screenshot ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* View Details Button */}
        <Button 
          asChild 
          className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold"
        >
          <Link to={`/portfolio/${id}`}>
            Details anzeigen
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PortfolioItem;
