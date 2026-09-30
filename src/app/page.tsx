import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema, serviceSchemas } from "@/lib/schemas";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HeroIntro from "@/components/HeroIntro";
import Nosotros from "@/components/Nosotros";
import Servicios from "@/components/Servicios";

import ProcesoTimeline from "@/components/ProcesoTimeline";
import Diferenciadores from "@/components/Diferenciadores";

import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema} />
      {serviceSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}

      <HeroIntro />
      <Nav />
      <Hero />
      <Nosotros />
      <Servicios />
      <ProcesoTimeline />
      <Diferenciadores />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
