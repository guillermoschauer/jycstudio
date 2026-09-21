import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Problema } from "@/components/site/Problema";
import { QueHacemos } from "@/components/site/QueHacemos";
import { Metodo } from "@/components/site/Metodo";
import { Manifiesto } from "@/components/site/Manifiesto";
import { Casos } from "@/components/site/Casos";
import { ParaQuien } from "@/components/site/ParaQuien";
import { Contacto } from "@/components/site/Contacto";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { StickyCTA } from "@/components/site/StickyCTA";

/**
 * The home tells one story, in order: here is the situation → here is what we
 * do about it → here is how → here is what we believe → here is the proof →
 * here is who it is for → let's talk.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problema />
        <QueHacemos />
        <Metodo />
        <Manifiesto />
        <Casos />
        <ParaQuien />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFab />
      <StickyCTA />
    </>
  );
}
