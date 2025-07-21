import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Package } from "lucide-react";
import productVariety from "@/assets/product-variety.jpg";

const Products = () => {
  const products = [
    {
      name: "Linguiça de Frango Sem Pimenta",
      description: "Sabor suave e tradicional, perfeita para toda a família",
      spiceLevel: 0,
      image: productVariety
    },
    {
      name: "Linguiça de Frango Apimentada",
      description: "Com o toque especial de pimenta para os amantes do sabor",
      spiceLevel: 2,
      image: productVariety
    },
    {
      name: "Linguiça Suína Sem Pimenta",
      description: "Clássica linguiça suína com tempero tradicional",
      spiceLevel: 0,
      image: productVariety
    },
    {
      name: "Linguiça Suína Apimentada",
      description: "A tradicional linguiça suína com pimenta na medida certa",
      spiceLevel: 2,
      image: productVariety
    },
    {
      name: "Sabor Especial Extra Pimenta",
      description: "Para os corajosos! Nossa receita mais picante",
      spiceLevel: 3,
      image: productVariety
    }
  ];

  const SpiceIndicator = ({ level }: { level: number }) => (
    <div className="flex items-center space-x-1">
      {[...Array(3)].map((_, i) => (
        <Flame 
          key={i} 
          className={`h-4 w-4 ${i < level ? 'text-primary fill-current' : 'text-muted'}`} 
        />
      ))}
    </div>
  );

  return (
    <section id="produtos" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nossos <span className="text-primary">Produtos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cinco sabores únicos, dois tamanhos perfeitos. 
            Escolha entre pacotes de 5kg ou bandejas de 650g.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <SpiceIndicator level={product.spiceLevel} />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-foreground">{product.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Package className="h-6 w-6 mr-2" />
                Pacotes de 5kg
              </CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Ideais para estabelecimentos comerciais e grandes famílias
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-primary-foreground/90">
                <li>• Perfeito para restaurantes e açougues</li>
                <li>• Embalagem resistente e higiênica</li>
                <li>• Melhor custo-benefício</li>
                <li>• Disponível em todos os sabores</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary to-accent text-secondary-foreground">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Package className="h-6 w-6 mr-2" />
                Bandejas de 650g
              </CardTitle>
              <CardDescription className="text-secondary-foreground/80">
                Perfeitas para consumo familiar e uso doméstico
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-secondary-foreground/90">
                <li>• Porção ideal para famílias</li>
                <li>• Fácil armazenamento</li>
                <li>• Embalagem prática</li>
                <li>• Todos os sabores disponíveis</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Products;