import { Button } from "@/components/ui/button";
import { Phone, Award, MapPin } from "lucide-react";
import productsHero from "@/assets/products-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Linguiças Artesanais
                <span className="block text-secondary">Da Roça</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Tradição e qualidade em cada linguiça. 5 sabores únicos, 
                produzidos com carinho em Ceilândia-DF pelos mestres Oilson e Wellington.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <Award className="h-5 w-5 text-secondary" />
                <span>Qualidade Premium</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <MapPin className="h-5 w-5 text-secondary" />
                <span>Ceilândia - DF</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg">
                <Phone className="h-5 w-5 mr-2" />
                Fazer Pedido
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                Ver Produtos
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={productsHero} 
                alt="Linguiças Da Roça" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground rounded-xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">5</div>
                <div className="text-sm">Sabores Únicos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;