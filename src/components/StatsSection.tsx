import { TrendingUp, Users, Clock, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "1.000+", label: "Clínicas Atendidas" },
  { icon: TrendingUp, value: "43%", label: "Aumento em Agendamentos" },
  { icon: Clock, value: "24/7", label: "Atendimento Contínuo" },
  { icon: Award, value: "4.9/5", label: "Avaliação Média" }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
