import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Instagram, Globe } from "lucide-react";

const channels = [
  {
    icon: MessageCircle,
    title: "Messenger",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Instagram,
    title: "Instagram",
    color: "from-pink-500 to-purple-600"
  },
  {
    icon: Send,
    title: "WhatsApp",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Globe,
    title: "Site",
    color: "from-cyan-500 to-blue-600"
  }
];

const ChannelsSection = () => {
  return (
    <section className="py-20 bg-primary-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entenda exatamente como será a experiência do seu paciente.
          </h2>
          <p className="text-lg text-white/90">
            Como funciona a Cloudia para os pacientes? Basta clicar em uma das opções abaixo e enviar uma mensagem para entender como a Cloudia funciona.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {channels.map((channel, index) => (
            <Card 
              key={index}
              className="border-0 hover:scale-105 transition-transform duration-300"
            >
              <CardHeader className="text-center pb-2">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${channel.color} flex items-center justify-center mx-auto mb-4`}>
                  <channel.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl">{channel.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" className="w-full">
                  Testar agora!
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Ver todos os modelos de teste
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChannelsSection;
