"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import {
  PaperPlaneTilt,
  EnvelopeSimple,
  MapPin,
  Globe,
} from "@phosphor-icons/react";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contacto" className="relative py-24 bg-bg overflow-hidden">
      {/* Decorative bg element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-surface rounded-l-[80px] hidden lg:block" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-20">
          {/* Left: text + contact info */}
          <FadeIn>
            <div className="lg:pr-8">
              <h2 className="text-3xl md:text-[2.75rem] font-heading font-bold tracking-[--heading-tracking] text-text leading-tight">
                Hablemos de lo que tu empresa necesita
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mt-5 max-w-[45ch]">
                Cuentanos que perfil buscas. La primera consulta es sin
                compromiso y te damos una propuesta clara.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <EnvelopeSimple
                      size={20}
                      weight="regular"
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Correo</p>
                    <a
                      href="mailto:hugo.cortes@reclutia.com"
                      className="text-text font-medium hover:text-primary transition-colors duration-200"
                    >
                      hugo.cortes@reclutia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin
                      size={20}
                      weight="regular"
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Ubicacion</p>
                    <p className="text-text font-medium">Monterrey, Mexico</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Globe
                      size={20}
                      weight="regular"
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Cobertura</p>
                    <p className="text-text font-medium">
                      Mexico y Estados Unidos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn delay={100}>
            <div className="bg-bg rounded-[16px] shadow-[0_8px_60px_rgba(10,30,63,0.10)] border border-border/60 p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <PaperPlaneTilt
                      size={28}
                      weight="regular"
                      className="text-primary"
                    />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-text">
                    Mensaje enviado
                  </h3>
                  <p className="text-text-muted text-base mt-3 max-w-[30ch] mx-auto">
                    Nos pondremos en contacto contigo en las proximas 24 horas.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const data = new FormData(form);
                    const mailto = `mailto:hugo.cortes@reclutia.com?subject=Contacto desde reclutia.com - ${data.get("empresa")}&body=Nombre: ${data.get("nombre")}%0AEmpresa: ${data.get("empresa")}%0AEmail: ${data.get("email")}%0A%0A${data.get("mensaje")}`;
                    window.open(mailto, "_blank");
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <h3 className="text-xl font-heading font-bold text-text mb-2">
                    Pide informacion
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block text-sm font-body font-medium text-text mb-1.5"
                      >
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 bg-surface border border-border rounded-[8px] text-text text-base placeholder:text-text-muted/40 transition-colors duration-200 focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="empresa"
                        className="block text-sm font-body font-medium text-text mb-1.5"
                      >
                        Empresa
                      </label>
                      <input
                        id="empresa"
                        name="empresa"
                        type="text"
                        required
                        placeholder="Nombre de tu empresa"
                        className="w-full px-4 py-3 bg-surface border border-border rounded-[8px] text-text text-base placeholder:text-text-muted/40 transition-colors duration-200 focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-body font-medium text-text mb-1.5"
                    >
                      Correo electronico
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="tu@empresa.com"
                      className="w-full px-4 py-3 bg-surface border border-border rounded-[8px] text-text text-base placeholder:text-text-muted/40 transition-colors duration-200 focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-body font-medium text-text mb-1.5"
                    >
                      Cuentanos que necesitas
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      required
                      placeholder="Que tipo de perfil buscas, cuantas vacantes, urgencia..."
                      className="w-full px-4 py-3 bg-surface border border-border rounded-[8px] text-text text-base placeholder:text-text-muted/40 transition-colors duration-200 focus:border-primary focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-primary text-on-primary font-body font-semibold text-base rounded-full transition-transform duration-200 active:scale-[0.98] hover:brightness-110"
                    style={{ transitionTimingFunction: "var(--easing)" }}
                  >
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
