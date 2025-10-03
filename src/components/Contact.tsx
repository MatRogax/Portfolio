import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "matheusrogatodev@gmail.com",
      href: "mailto:matheusrogatodev@gmail.com",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Maceió AL, Brasil",
      href: null,
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (82) 99661-8349",
      href: "tel:+558299618349",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Vamos Conversar?</h2>
          <p className="text-xl text-muted-foreground">
            Tem um projeto em mente? Entre em contato!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 animate-slide-in">
            <CardHeader>
              <CardTitle className="text-2xl">Envie uma Mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário e responderei o mais breve possível
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Sua mensagem..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="transition-all duration-200 focus:scale-[1.02] resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-card-hover group"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Card className="shadow-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Informações de Contato</CardTitle>
                <CardDescription>
                  Prefere falar diretamente? Use uma das opções abaixo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                      <div className="p-2 bg-gradient-primary rounded-lg">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a key={index} href={info.href} className="block hover-scale">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-6">
                <p className="text-center text-foreground/80 leading-relaxed">
                  <span className="text-2xl mb-2 block">🚀</span>
                  Estou sempre aberto a novos desafios e oportunidades de colaboração.
                  Vamos construir algo incrível juntos!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
