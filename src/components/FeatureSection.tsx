import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface FeatureSectionProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reversed?: boolean;
  primaryCta?: ReactNode;
  secondaryCta?: ReactNode;
}

const FeatureSection = ({
  title,
  description,
  image,
  imageAlt,
  reversed = false,
  primaryCta = "Falar com um consultor",
  secondaryCta = "Saber mais"
}: FeatureSectionProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
          <div className={`space-y-6 ${reversed ? 'md:order-2' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://wa.me/5571992443407" target="_blank" rel="noopener noreferrer">
                <Button style={{ backgroundColor: '#8FC78F', color: 'white' }} className="hover:opacity-90">
                  {primaryCta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              {typeof secondaryCta === 'string' ? (
                <a href="/funcionalidades">
                  <Button variant="outline">
                    {secondaryCta}
                  </Button>
                </a>
              ) : secondaryCta}
            </div>
          </div>
          
          <div className={`relative ${reversed ? 'md:order-1' : ''}`}>
            <img 
              src={image} 
              alt={imageAlt}
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
