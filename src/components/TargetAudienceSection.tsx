import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, FlaskConical, Hospital, Store } from "lucide-react";

const audiences = [
  { icon: Building2, title: "Clínicas" },
  { icon: FlaskConical, title: "Laboratórios" },
  { icon: Hospital, title: "Hospitais" },
  { icon: Store, title: "Franquias" }
];

const TargetAudienceSection = () => {
  return (
    <section id="para-quem" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Para quem somos feitos?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A Doctoriza é uma plataforma de gestão de atendimentos desenvolvida para aprimorar a experiência dos 
            pacientes em clínicas, laboratórios e hospitais. Ela utiliza um chatbot humanizado integrado ao ChatGPT 
            para garantir um atendimento ágil e eficiente.
          </p>
          <Button size="lg" style={{ backgroundColor: '#8FC78F', color: 'white' }} className="mt-6 hover:opacity-90">
            Fale com um consultor
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <Card 
              key={index}
              className="border-border hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <audience.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>{audience.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
