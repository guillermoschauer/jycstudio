import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { MobileProductsTicker } from "@/components/site/MobileProductsTicker";
import { MobileManifesto } from "@/components/site/MobileManifesto";
import { Casos } from "@/components/site/Casos";
import { MidCTA } from "@/components/site/MidCTA";
import { ComoTrabajamos } from "@/components/site/ComoTrabajamos";
import { Estudio } from "@/components/site/Estudio";
import { Contacto } from "@/components/site/Contacto";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { StickyCTA } from "@/components/site/StickyCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* Mobile-specific narrative layer: product ticker → manifesto → cases */}
        <MobileProductsTicker />
        <MobileManifesto />
        <Casos />
        <MidCTA />
        <ComoTrabajamos />
        <Estudio />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFab />
      <StickyCTA />
    </>
  );
}
