"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { PaperPlaneTilt } from "@phosphor-icons/react";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contacto" className="py-24 bg-surface">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: text */}
          <FadeIn>
            <div>
              <h2 className="text-3xl md:text-[2.5rem] font-heading font-bold tracking-[--heading-tracking] text-text leading-tight">
                Encuentra al talento ideal para tu empresa
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mt-4 max-w-[45ch]">
                Cuentanos que perfil necesitas y te ayudamos a encontrarlo. La
                primera consulta es sin compromiso.
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <PaperPlaneTilt size={16} weight="regular" className="text-primary" />
                  </div>
                  <a
                    href="mailto:hugo.cortes@reclutia.com"
                    className="text-text font-medium hover:text-primary transition-colors duration-200"
                  >
                    hugo.cortes@reclutia.com
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn delay={100}>
            <div className="bg-bg rounded-[8px] shadow-[0_4px_40px_rgba(10,30,63,0.08)] border border-border/50 p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <PaperPlaneTilt size={24} weight="regular" className="text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-text">
                    Mensaje enviado
                  </h3>
                  <p className="text-text-muted text-base mt-2">
                    Nos pondremos en contacto contigo pronto.
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                        className="w-full px-4 py-3 bg-surface border border-border rounded-[8px] text-text text-base placeholder:text-text-muted/50 transition-colors duration-200 focus:border-primary focus:outline-none"
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
                        className="w-full px-4 py-3 bg-surface border border-border rounded-[8px] text-text text-base placeholder:text-text-muted/50 transition-colors duration-200 focus:border-primary focus:outline-none"
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
                      className="w-full px-4 py-3 bg-surface border border-border rounded-[8px] text-text text-base placeholder:text-text-muted/50 transition-colors duration-200 focus:border-primary focus:outline-none"
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
                      className="w-full px-4 py-3 bg-surface border border-border rounded-[8px] text-text text-base placeholder:text-text-muted/50 transition-colors duration-200 focus:border-primary focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-3.5 bg-primary text-on-primary font-body font-medium text-base rounded-full transition-transform duration-200 active:scale-[0.98] hover:brightness-110"
                    style={{ transitionTimingFunction: "var(--easing)" }}
                  >
                    Pide informacion
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
