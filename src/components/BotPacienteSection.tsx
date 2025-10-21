import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import botPacienteImage from "@/assets/bot-paciente.png";

const features = [
  "Tempo médio de resposta",
  "Pontos de atrito na conversa",
  "Sugestões práticas de melhoria",
  "E projeções de impacto operacional"
];

const BotPacienteSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/30 to-background">
      <div className="container mx-auto px-4">
        <Card className="border-2 border-primary/20 shadow-xl">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Ferramenta Gratuita
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Bot Paciente Oculto da Doctoriza:
                </h2>
                <h3 className="text-2xl font-semibold text-primary">
                  Descubra o que seus pacientes realmente pensam do seu atendimento
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A Doctoriza criou uma ferramenta gratuita e exclusiva que simula um "cliente oculto" entrando em contato 
                  com sua clínica. Através de um atendimento 100% automatizado, nossa IA avalia a comunicação feita pela 
                  sua equipe via WhatsApp, medindo a agilidade, clareza e qualidade do atendimento em tempo real.
                </p>
                
                <div className="space-y-3">
                  <p className="font-semibold text-foreground">Você recebe um relatório completo com:</p>
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground italic">
                  É como ter um "cliente oculto" auditando seus atendimentos, mas de forma mais rápida, automatizada e acessível.
                </p>

                <a href="/funcionalidades">
                  <Button size="lg" style={{ backgroundColor: '#8FC78F', color: 'white' }} className="hover:opacity-90">
                    Saiba mais
                  </Button>
                </a>
              </div>

              <div className="relative">
                <img 
                  src={botPacienteImage} 
                  alt="Bot Paciente Oculto"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BotPacienteSection;
