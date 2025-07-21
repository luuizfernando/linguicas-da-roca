import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary-dark to-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/c7de911e-82ed-4920-9e18-f3579b23b99c.png" 
                alt="Da Roça Logo" 
                className="h-10 w-10 rounded-full bg-secondary p-1"
              />
              <div>
                <h3 className="text-xl font-bold">Da Roça</h3>
                <p className="text-sm text-primary-foreground/80">Linguiças Artesanais</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Tradição, qualidade e sabor em cada linguiça. 
              Produzidas com carinho em Ceilândia-DF.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary">Nossos Produtos</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>• Linguiça de Frango Sem Pimenta</li>
              <li>• Linguiça de Frango Apimentada</li>
              <li>• Linguiça Suína Sem Pimenta</li>
              <li>• Linguiça Suína Apimentada</li>
              <li>• Sabor Especial Extra Pimenta</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary">Embalagens</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>• Pacotes de 5kg</li>
              <li>• Bandejas de 650g</li>
            </ul>
            <h4 className="text-lg font-semibold text-secondary mt-6">Sócios</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>• Oilson - Sócio Fundador</li>
              <li>• Wellington - Sócio Fundador</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80">Ceilândia - DF</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80">(61) 99999-1234</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80">contato@daroca.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80">Seg-Sex: 8h-18h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Da Roça - Linguiças Artesanais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;