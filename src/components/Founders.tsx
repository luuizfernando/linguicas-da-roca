import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import foundersImage from "@/assets/founders.jpg";

const Founders = () => {
  const founders = [
    {
      name: "Oilson",
      role: "Sócio Fundador",
      phone: "(61) 98130-7555",
      email: "oilson.dalpra@gmail.com",
      description: "Experiente gestor de negócios no segmento de alimentos. Desenvolveu estrutura de mercado, indústria e fabricação de linguiças para churrasco, com implantação do SISB em Brasília."
    },
    {
      name: "Wellington",
      role: "Sócio Fundador", 
      phone: "(61) 99999-5678",
      email: "wellington@daroca.com.br",
      description: "Mestre em temperos e receitas tradicionais da região"
    }
  ];

  return (
    <section id="socios" className="py-20 bg-gradient-to-br from-primary-dark to-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Conheça Nossos <span className="text-secondary">Sócios</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            A paixão pela qualidade e tradição que move a Da Roça todos os dias
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <div className="relative">
              <img 
                src={foundersImage} 
                alt="Oilson e Wellington - Sócios Da Roça"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            {founders.map((founder, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-primary-foreground">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <h3 className="text-3xl font-bold text-secondary mb-2">{founder.name}</h3>
                      <p className="text-lg text-primary-foreground/80 mb-4">{founder.role}</p>
                      <p className="text-primary-foreground/90 leading-relaxed">{founder.description}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <Phone className="h-5 w-5 text-secondary" />
                          <span className="font-medium">WhatsApp</span>
                        </div>
                        <a 
                          href={`https://wa.me/55${founder.phone.replace(/\D/g, '')}`}
                          className="text-secondary hover:text-accent transition-colors"
                        >
                          {founder.phone}
                        </a>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <Mail className="h-5 w-5 text-secondary" />
                          <span className="font-medium">E-mail</span>
                        </div>
                        <a 
                          href={`mailto:${founder.email}`}
                          className="text-secondary hover:text-accent transition-colors"
                        >
                          {founder.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;