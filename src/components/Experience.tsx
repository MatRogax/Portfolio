import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Fullstack Developer",
    company: "Lojas Guido",
    period: "2024 - Presente",
    description: "Desenvolvimento de aplicações fullstack utilizando Flutter, .NET. e ADVPL,Responsável por arquitetura de sistemas, implementação de APIs RESTful e desenvolvimento mobile.",
    technologies: ["Flutter", ".NET", "C#", "ADVPL", "SQL Server"],
  },
  {
    title: "Backend Developer",
    company: "Free Lancer",
    period: "2024 - 2025",
    description: "Arquitetura e desenvolvimento do backend para uma plataforma de e-commerce de turismo, utilizando NestJS,Docker e PostgresSQL para garantir escalabilidade.",
    technologies: ["Node.js", "NestJS", "PostgreSQL", "Docker"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experiência</h2>
          <p className="text-xl text-muted-foreground">
            Minha trajetória profissional e projetos desenvolvidos
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:translate-x-2 animate-slide-in border-l-4 border-l-primary"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Briefcase className="w-6 h-6 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-foreground/70">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-2 w-fit">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
