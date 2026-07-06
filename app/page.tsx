import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { CapabilitiesMarquee } from "@/components/site/CapabilitiesMarquee";
import { MobileProductsTicker } from "@/components/site/MobileProductsTicker";
import { MobileManifesto } from "@/components/site/MobileManifesto";
import { Casos } from "@/components/site/Casos";
import { MidCTA } from "@/components/site/MidCTA";
import { ComoTrabajamos } from "@/components/site/ComoTrabajamos";
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
        {/* Post-hero seam: capabilities (desktop) / live products (mobile) */}
        <CapabilitiesMarquee className="hidden md:block" />
        {/* Mobile-specific narrative layer: product ticker → manifesto → cases */}
        <MobileProductsTicker />
        <MobileManifesto />
        <Casos />
        <MidCTA />
        <ComoTrabajamos />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFab />
      <StickyCTA />
    </>
  );
}
