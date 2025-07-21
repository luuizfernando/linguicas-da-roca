import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Founders from "@/components/Founders";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Founders />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
