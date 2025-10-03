import { Card, CardContent } from "@/components/ui/card";
import { Code2, Rocket, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Código limpo, testável e manutenível seguindo as melhores práticas",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Aplicações otimizadas para máxima velocidade e eficiência",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Trabalho em equipe e comunicação efetiva em projetos",
  },
  {
    icon: Zap,
    title: "Aprendizado",
    description: "Sempre explorando novas tecnologias e metodologias",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvedor Fullstack apaixonado por criar soluções tecnológicas que fazem a diferença
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6 animate-slide-in">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Com experiência sólida em desenvolvimento fullstack, trabalho com diversas tecnologias
              para criar aplicações robustas e escaláveis. Minha expertise abrange desde desenvolvimento
              mobile com <span className="text-primary font-semibold">Flutter</span> até backends
              complexos com <span className="text-primary font-semibold">.NET</span> e{" "}
              <span className="text-primary font-semibold">Ruby on Rails</span>.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Atualmente, estou expandindo meus conhecimentos em{" "}
              <span className="text-accent font-semibold">Angular</span>, sempre buscando
              me manter atualizado com as últimas tendências e tecnologias do mercado.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Acredito em código limpo, arquiteturas bem definidas e na importância
              de trabalhar em equipe para entregar produtos de qualidade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-border/50 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="mb-4 p-3 bg-gradient-primary rounded-lg inline-block group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
