import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/c7de911e-82ed-4920-9e18-f3579b23b99c.png" 
              alt="Da Roça Logo" 
              className="h-12 w-12 rounded-full bg-secondary p-1"
            />
            <div>
              <h1 className="text-2xl font-bold">Da Roça</h1>
              <p className="text-sm text-primary-foreground/80">Linguiças Artesanais</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#sobre" className="hover:text-secondary transition-colors">Sobre</a>
            <a href="#produtos" className="hover:text-secondary transition-colors">Produtos</a>
            <a href="#socios" className="hover:text-secondary transition-colors">Sócios</a>
            <a href="#clientes" className="hover:text-secondary transition-colors">Clientes</a>
            <a href="#contato" className="hover:text-secondary transition-colors">Contato</a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>Ceilândia - DF</span>
            </div>
            <Button variant="secondary" size="sm">
              <Phone className="h-4 w-4 mr-1" />
              Contato
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;