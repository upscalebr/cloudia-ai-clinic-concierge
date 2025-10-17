import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Secretária Virtual com IA para Clínicas que automatiza o agendamento
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Inteligência Artificial que qualifica, agenda e confirma consultas no WhatsApp e Instagram. 
              Ela entende áudios, organiza os pacientes no funil de atendimento e se integra ao software 
              de gestão da clínica, consultório ou hospital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                Falar com um consultor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Play className="mr-2 h-5 w-5" />
                Veja como funciona
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Cloudia AI Assistant" 
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
