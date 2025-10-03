import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 bg-gradient-subtle relative">
      <div className="max-w-5xl mx-auto text-center">
        {/* Professional Photo */}
        <div className="mb-8 flex justify-center animate-scale-in">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <Avatar className="w-40 h-40 md:w-48 md:h-48 border-4 border-primary/20 shadow-card-hover relative">
              <AvatarImage src="/profile.png" alt="Matheus Rogato" />
              <AvatarFallback className="text-4xl font-bold bg-gradient-primary text-primary-foreground">
                MR
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Matheus Rogato
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
            Fullstack Developer
          </h2>
        </div>

        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "400ms" }}>
          Construindo soluções robustas com Flutter, .NET, Ruby on Rails e Node.js.
          Transformando ideias em aplicações de alta performance.
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "600ms" }}>
          <Button
            asChild
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-all shadow-card-hover"
          >
            <a
              href="https://github.com/MatRogax"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 hover:bg-accent/10 transition-all"
          >
            <a
              href="https://www.linkedin.com/in/matheus-rogato/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 hover:bg-secondary transition-all"
          >
            <a
              href="mailto:matheus.rogato@example.com"
              className="flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contato
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hover:text-primary transition-colors"
          aria-label="Scroll para baixo"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section >
  );
};

export default Hero;
