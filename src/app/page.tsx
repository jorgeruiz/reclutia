import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema, serviceSchemas } from "@/lib/schemas";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import HeadhuntingReveal from "@/components/HeadhuntingReveal";
import ProcesoTimeline from "@/components/ProcesoTimeline";
import Diferenciadores from "@/components/Diferenciadores";
import ServiciosComplementarios from "@/components/ServiciosComplementarios";
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

      <Nav />
      <Hero />
      <Servicios />
      <section id="headhunting">
        <HeadhuntingReveal />
      </section>
      <section id="proceso">
        <ProcesoTimeline />
      </section>
      <Diferenciadores />
      <ServiciosComplementarios />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
