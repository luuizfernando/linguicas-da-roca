import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import facilityImage from "@/assets/facility.jpg";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você. Fale conosco para pedidos, parcerias ou informações.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="border-2 border-primary/20">
              <CardHeader className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
                <CardTitle className="flex items-center text-xl">
                  <MapPin className="h-5 w-5 mr-3" />
                  Nossa Localização
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-foreground font-medium text-lg">Ceilândia - Distrito Federal</p>
                <p className="text-muted-foreground mt-2">
                  Estamos estrategicamente localizados para atender todo o DF e entorno
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-6">
              <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary text-secondary-foreground rounded-full p-3">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">WhatsApp Principal</h3>
                      <p className="text-muted-foreground">Para pedidos e informações</p>
                    </div>
                    <Button 
                      variant="secondary" 
                      className="ml-auto"
                      onClick={() => window.open('https://wa.me/5561999991234', '_blank')}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chamar
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent text-accent-foreground rounded-full p-3">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">E-mail Comercial</h3>
                      <p className="text-muted-foreground">contato@daroca.com.br</p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="ml-auto border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      onClick={() => window.open('mailto:contato@daroca.com.br', '_blank')}
                    >
                      Enviar E-mail
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full p-3">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Horário de Atendimento</h3>
                      <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-muted-foreground">Sábado: 8h às 12h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <img 
              src={facilityImage} 
              alt="Instalações Da Roça"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Nossas Instalações</h3>
              <p className="text-white/90">
                Produção com os mais altos padrões de qualidade e higiene
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary via-primary-light to-secondary text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Faça seu Pedido Agora!</h3>
            <p className="text-lg mb-6">
              Entre em contato conosco pelo WhatsApp e garante já suas linguiças Da Roça
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-3"
              onClick={() => window.open('https://wa.me/5561999991234?text=Olá! Gostaria de fazer um pedido das linguiças Da Roça.', '_blank')}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Fazer Pedido via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;