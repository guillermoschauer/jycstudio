import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Casos } from "@/components/site/Casos";
import { MidCTA } from "@/components/site/MidCTA";
import { ComoTrabajamos } from "@/components/site/ComoTrabajamos";
import { Estudio } from "@/components/site/Estudio";
import { Contacto } from "@/components/site/Contacto";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Casos />
        <MidCTA />
        <ComoTrabajamos />
        <Estudio />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
