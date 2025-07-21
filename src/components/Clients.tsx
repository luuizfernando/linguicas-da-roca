import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Building2, Store } from "lucide-react";

const Clients = () => {
  const clientsDF = [
    "Açougue Central",
    "Mercado São José", 
    "Supermercado Brasília",
    "Açougue do João",
    "Empório Ceilândia",
    "Mercado Popular"
  ];

  const clientsGO = [
    "Supermercado Goiânia",
    "Açougue Goiano",
    "Mercado Regional",
    "Distribuidora Anápolis",
    "Empório do Campo",
    "Açougue Tradição"
  ];

  return (
    <section id="clientes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nossos <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Presentes em estabelecimentos de qualidade no Distrito Federal e Goiás
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
            <CardHeader className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
              <CardTitle className="flex items-center text-2xl">
                <MapPin className="h-6 w-6 mr-3" />
                Distrito Federal
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid gap-4">
                {clientsDF.map((client, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-muted rounded-lg hover:bg-primary/5 transition-colors">
                    <Store className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">{client}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
            <CardHeader className="bg-gradient-to-r from-secondary to-accent text-secondary-foreground">
              <CardTitle className="flex items-center text-2xl">
                <MapPin className="h-6 w-6 mr-3" />
                Goiás
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid gap-4">
                {clientsGO.map((client, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-muted rounded-lg hover:bg-secondary/5 transition-colors">
                    <Building2 className="h-5 w-5 text-secondary" />
                    <span className="font-medium text-foreground">{client}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Quer ser nosso parceiro?</h3>
            <p className="text-lg mb-6">
              Oferecemos produtos de qualidade superior, entrega confiável e suporte completo para seu negócio.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 rounded-full px-6 py-2">✓ Qualidade Garantida</div>
              <div className="bg-white/20 rounded-full px-6 py-2">✓ Entrega Pontual</div>
              <div className="bg-white/20 rounded-full px-6 py-2">✓ Preços Competitivos</div>
              <div className="bg-white/20 rounded-full px-6 py-2">✓ Suporte Personalizado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;