"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { IProject } from "@/types/project-type";
import { fetchSelectedProjects } from "@/services/github-service";

const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const [userRepos, orgRepos] = await Promise.all([
          fetchSelectedProjects("MatRogax", [
            "To-do_List-",
            "DotnetDio_Bootcamp",
            "Unlocker_App",
            "Bootcamp_ruby",]),
          fetchSelectedProjects("TurismoProject", ["Back-end"]),
        ]);

        setProjects([...userRepos, ...orgRepos]);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-subtle" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projetos</h2>
          <p className="text-xl text-muted-foreground">
            Confira meus trabalhos e contribuições open source
          </p>
        </div>

        {loading && (
          <div className="grid grid-cols-1 gap-6 mb-12">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-40 w-full animate-pulse rounded-lg bg-muted"
              ></div>
            ))}
          </div>
        )}

        {error && (
          <p className="text-center text-red-500 mb-12">
            Erro ao carregar projetos: {error}
          </p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 gap-6 mb-12">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="shadow-card hover:shadow-card-hover transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                        <Github className="w-6 h-6 text-primary" />
                        {project.name}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {project.description || "Sem descrição disponível."}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.topics?.map((topic) => (
                      <Badge key={topic} variant="secondary">
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {project.forks}
                    </span>
                    {project.language && (
                      <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-primary"></span>
                        {project.language}
                      </span>
                    )}
                  </div>

                  <Button asChild className="bg-gradient-primary hover:opacity-90 transition-opacity">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver no GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2"
          >
            <a
              href="https://github.com/MatRogax?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              Ver Todos os Projetos no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
