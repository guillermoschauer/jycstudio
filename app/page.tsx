import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Casos } from "@/components/site/Casos";
import { ComoTrabajamos } from "@/components/site/ComoTrabajamos";
import { Estudio } from "@/components/site/Estudio";
import { Contacto } from "@/components/site/Contacto";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Casos />
        <ComoTrabajamos />
        <Estudio />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
