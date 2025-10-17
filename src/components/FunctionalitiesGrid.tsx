import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Workflow, BarChart3, Bell, Mic } from "lucide-react";

const functionalities = [
  {
    icon: Workflow,
    title: "Construtor de Fluxos",
    description: "Chega de perder tempo com o que pode ser automatizado. Crie fluxos personalizados para sua clínica e lote a sua agenda com um chatbot que vai atender a todos os seus pacientes de forma humanizada."
  },
  {
    icon: BarChart3,
    title: "Relatório de Marketing",
    description: "Aprenda a otimizar as suas campanhas do jeito certo, melhore o seu ROAS e invista nos anúncios que geram mais agendamentos. Afaste os curiosos que só aumentam os gastos da sua campanha."
  },
  {
    icon: Bell,
    title: "Envio de Lembretes",
    description: "Consultório vazio? Nunca mais! Reduza a taxa de pacientes faltantes (no-show) lembrando-os da consulta com o envio de lembretes automático pelo WhatsApp."
  },
  {
    icon: Mic,
    title: "Robô que entende áudios",
    description: "Chega de chatbot que entra em loop. Tenha em sua clínica um robô que entende, transcreve e responde os áudios dos pacientes de forma empática e criativa."
  }
];

const FunctionalitiesGrid = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Funcionalidades que vão transformar o atendimento do seu negócio
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {functionalities.map((func, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <func.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{func.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {func.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
            Veja todas as funcionalidades
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FunctionalitiesGrid;
