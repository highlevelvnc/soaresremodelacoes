import CTAFinal from "@/components/CTAFinal";
import Diferenciais from "@/components/Diferenciais";
import Footer from "@/components/Footer";
import Galeria from "@/components/Galeria";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import Processo from "@/components/Processo";
import ScrollProgress from "@/components/ScrollProgress";
import Servicos from "@/components/Servicos";
import Sobre from "@/components/Sobre";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Diferenciais />
        <Galeria />
        <Processo />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
