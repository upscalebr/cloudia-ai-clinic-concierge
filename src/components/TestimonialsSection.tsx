import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "João Guerra",
    role: "CMO e sócio do Instituto Pedro Ruiz",
    content: "Para vocês terem ideia do avanço que tivemos em relação ao faturamento, nós saímos de uma média de R$ 1,5 milhão para R$ 2,15 milhões de faturamento. A Cloudia é sensacional, ela mudou o nosso setor comercial e continua mudando a cada nova atualização que implementamos. Ela conseguiu nos ajudar na metrificação de vários indicadores que não tínhamos antes. Implementem-na no WhatsApp de vocês.",
    initials: "JG"
  },
  {
    name: "Dr. Acklei Viana",
    role: "Sócio-proprietário da NICAP",
    content: "O que é mais elogiado pelos pacientes é que eles conseguem entrar em contato fora do horário comercial e marcar uma consulta para o dia seguinte, se houver vaga. Esse ganho de agilidade para nós é muito bom, pois temos uma secretária 24/7. É interessante tanto para a clínica quanto para o paciente, resolvendo o problema de ambos.",
    initials: "AV"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Depoimentos de clientes
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-lg text-muted-foreground">
            130 avaliações no Google
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
                <div className="flex items-start gap-4 mb-6">
                  <Avatar className="w-14 h-14">
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
