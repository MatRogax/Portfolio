import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Layers, Smartphone, GraduationCap } from "lucide-react";

const skillsData = [
  {
    category: "Backend",
    icon: Code2,
    skills: [".NET", "C#", "Ruby on Rails", "NestJS", "Node.js", "ADVPL"],
  },
  {
    category: "Frontend & Mobile",
    icon: Smartphone,
    skills: ["Flutter", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["SQL Server", "PostgreSQL", "MySQL"],
  },
  {
    category: "Architecture & Tools",
    icon: Layers,
    skills: ["REST APIs", "Microservices", "Git", "Docker", "CI/CD"],
  },
];

const currentlyLearning = ["Angular", "Advanced TypeScript Patterns", "Nextjs"];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-background" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground">
            Tecnologias que domino e utilizo no dia a dia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillsData.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.category}
                className="shadow-card hover:shadow-card-hover transition-all duration-300 animate-slide-in border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="shadow-card border-accent/30 bg-gradient-to-br from-accent/5 to-transparent animate-fade-in">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-accent rounded-lg">
                <GraduationCap className="w-6 h-6 text-accent-foreground" />
              </div>
              <CardTitle className="text-2xl">Estudando Atualmente</CardTitle>
            </div>
            <CardDescription>
              Expandindo conhecimentos e explorando novas tecnologias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {currentlyLearning.map((tech) => (
                <Badge
                  key={tech}
                  className="text-sm px-3 py-1 bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
