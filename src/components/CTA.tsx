export default function CTA() {
  return (
    <section id="contacto" className="py-24 bg-surface">
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-center">
        <div className="bg-bg rounded-[8px] shadow-[0_4px_40px_rgba(10,30,63,0.08)] p-10 md:p-16 max-w-[640px] w-full text-center">
          <h2 className="text-3xl font-heading font-bold tracking-[--heading-tracking] text-text">
            Encuentra al talento ideal para tu empresa
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mt-4 max-w-[45ch] mx-auto">
            Cuentanos que perfil necesitas y te ayudamos a encontrarlo. La
            primera consulta es sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="mailto:hugo.cortes@reclutia.com"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-on-primary font-body font-medium text-base rounded-full transition-transform duration-200 active:scale-[0.98] hover:brightness-110"
              style={{ transitionTimingFunction: "var(--easing)" }}
            >
              Pide informacion
            </a>
          </div>
          <p className="text-text-muted text-sm mt-6">
            O escribenos directamente a{" "}
            <a
              href="mailto:hugo.cortes@reclutia.com"
              className="text-primary font-medium hover:underline"
            >
              hugo.cortes@reclutia.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
