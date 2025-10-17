import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import FunctionalitiesGrid from "@/components/FunctionalitiesGrid";
import ChannelsSection from "@/components/ChannelsSection";
import BotPacienteSection from "@/components/BotPacienteSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

import chatbotFeature from "@/assets/chatbot-feature.png";
import omnichannelFeature from "@/assets/omnichannel-feature.png";
import crmFeature from "@/assets/crm-feature.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      <FeatureSection
        title="Chatbot Humanizado integrado ao ChatGPT, Google Gemini e outras IAs"
        description="Tenha um chatbot sem botões muito similar a um atendimento humano! A Cloudia já entende áudios, se integra a diversos sistemas de agendamento e você pode contratar também o nosso módulo que adiciona IA (GPT, Gemini, Grok e outras) para ficar ainda mais natural e poderosa. Já imaginou tudo isso integrado ao sistema de agendamento da sua clínica?"
        image={chatbotFeature}
        imageAlt="Chatbot com IA"
      />

      <FeatureSection
        title="Central de Mensagens Omnichannel: todos os atendimentos em uma tela"
        description="Tenha listado em uma só tela as conversas de todos os canais de atendimento (WhatsApp, Facebook Messenger, Instagram Direct e Site) com a possibilidade de usar diversos filtros avançados e separar os atendimentos por etapas."
        image={omnichannelFeature}
        imageAlt="Central Omnichannel"
        reversed
        secondaryCta="Ver planos e valores"
      />

      <FeatureSection
        title="Funil de Vendas: visualize a performance do seu time comercial com o nosso CRM nativo"
        description="Através dos menus lista, funil e minhas atividades, você consegue visualizar de forma fácil todas as etapas que o paciente percorre no funil de vendas até a presença na consulta ou fechamento de um tratamento, contribuindo para um processo comercial organizado e simplificado."
        image={crmFeature}
        imageAlt="CRM e Funil de Vendas"
        secondaryCta="Ver planos e valores"
      />

      <FunctionalitiesGrid />
      
      <ChannelsSection />
      
      <BotPacienteSection />
      
      <TargetAudienceSection />
      
      <StatsSection />
      
      <TestimonialsSection />
      
      <Footer />
    </div>
  );
};

export default Index;
