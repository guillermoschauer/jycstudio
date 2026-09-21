import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { QueHacemos } from "@/components/site/QueHacemos";
import { Metodo } from "@/components/site/Metodo";
import { Casos } from "@/components/site/Casos";
import { Manifiesto } from "@/components/site/Manifiesto";
import { Contacto } from "@/components/site/Contacto";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { StickyCTA } from "@/components/site/StickyCTA";

/**
 * Entender → confiar → ver prueba → contactar.
 *
 * Seis bloques, no nueve. Problema y Qué hacemos se fusionaron porque hacían el
 * mismo argumento dos veces; Para quién quedó como una línea dentro de esa
 * sección; Manifiesto y Quién está detrás comparten bloque porque decían lo
 * mismo desde ángulos distintos.
 *
 * Manifiesto sigue siendo el único aparte sin numeral.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QueHacemos />
        <Metodo />
        <Casos />
        <Manifiesto />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFab />
      <StickyCTA />
    </>
  );
}
