
import Navbar from "@/components/Navbar";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const funcionalidades = [
  {
    icon: "🧩",
    title: "Construtor de Fluxos",
    description: "Chega de perder tempo com o que pode ser automatizado. Crie fluxos personalizados para sua clínica e lote a sua agenda com um chatbot que vai atender a todos os seus pacientes de forma humanizada."
  },
  {
    icon: "📊",
    title: "Relatório de Marketing",
    description: "Aprenda a otimizar as suas campanhas do jeito certo, melhore o seu ROAS e invista nos anúncios que geram mais agendamentos. Afaste os curiosos que só aumentam os gastos da sua campanha."
  },
  {
    icon: "🔔",
    title: "Envio de Lembretes",
    description: "Consultório vazio? Nunca mais! Reduza a taxa de pacientes faltantes (no-show) lembrando-os da consulta com o envio de lembretes automático pelo WhatsApp."
  },
  {
    icon: "🎤",
    title: "Robô que entende áudios",
    description: "Chega de chatbot que entra em loop. Tenha em sua clínica um robô que entende, transcreve e responde os áudios dos pacientes de forma empática e criativa."
  }
];

export default function Funcionalidades() {

  // Novos cards com emojis como ícones
  const novosCards = [
    { icon: "🎥", headline: "Enviar mensagem no direct para quem comentar na live", subheadline: "Transforme cada comentário em oportunidade. O sistema identifica e inicia conversas automáticas com quem interage nas suas lives, qualificando leads em tempo real." },
    { icon: "🔊", headline: "Robô que responde áudio com áudio", subheadline: "Responda os áudios dos pacientes com outro áudio — usando voz genérica ou clonada da sua equipe." },
    { icon: "💬", headline: "Automações de mensagens diversas", subheadline: "Envie mensagens automáticas para reagendamento, pesquisa de satisfação ou follow-up sem esforço manual." },
    { icon: "🔗", headline: "Integrações com sistemas", subheadline: "Conecte o chatbot aos sistemas de gestão da sua clínica e mantenha tudo sincronizado." },
    { icon: "🎂", headline: "Envio de mensagens de aniversário", subheadline: "Surpreenda seus pacientes com mensagens automáticas de parabéns enviadas no dia certo." },
    { icon: "🤖", headline: "ChatGPT – OpenAI", subheadline: "Use o poder da IA para responder mensagens com naturalidade, empatia e interpretação de imagens." },
    { icon: "⚡", headline: "Envio de sequência de respostas rápidas", subheadline: "Crie e dispare sequências pré-definidas com textos, áudios, imagens e vídeos." },
    { icon: "🖼️", headline: "Envio de mídias", subheadline: "Envie imagens, vídeos e textos em qualquer ponto do fluxo do atendimento automatizado." },
    { icon: "🗓️", headline: "Minhas atividades", subheadline: "Registre e acompanhe tarefas da equipe diretamente no painel de atendimento." },
    { icon: "📢", headline: "Envio de mensagem em massa pelo WhatsApp", subheadline: "Encaminhe mensagens estratégicas em massa para listas de contatos específicas via WhatsApp Web." },
    { icon: "💭", headline: "Respostas automáticas em posts", subheadline: "Responda automaticamente comentários nas suas publicações do Instagram e Facebook, chamando o lead no inbox." },
    { icon: "💬🌐", headline: "Central de mensagens omnichannel", subheadline: "Visualize e responda mensagens de WhatsApp, Instagram, Facebook e site em uma única tela." },
    { icon: "📋", headline: "Lista de pacientes", subheadline: "Acesse e filtre todos os leads e pacientes que interagiram com o chatbot." },
    { icon: "📈", headline: "CRM (funil de vendas)", subheadline: "Visualize os leads por estágio do funil e acompanhe o progresso de cada oportunidade." },
    { icon: "📊", headline: "Dashboards e relatórios", subheadline: "Acompanhe métricas e otimize resultados com relatórios automáticos de desempenho." },
    { icon: "❓", headline: "Esclarecimento de dúvidas", subheadline: "Deixe o chatbot responder perguntas frequentes automaticamente, sem precisar de um atendente." },
    { icon: "📡", headline: "Broadcast", subheadline: "Envie mensagens não promocionais em massa e reative o relacionamento com sua base de leads." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Funcionalidades que vão transformar o atendimento do seu negócio
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {funcionalidades.map((func, index) => (
              <Card 
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-3xl">
                    {func.icon}
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
          {/* Novos cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {novosCards.map((card, idx) => (
              <Card key={idx} className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-3xl">
                    {card.icon}
                  </div>
                  <CardTitle className="text-xl">{card.headline}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {card.subheadline}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
