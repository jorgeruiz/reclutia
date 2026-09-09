import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-20 bg-text">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.webp"
              alt="Reclutia"
              width={120}
              height={40}
              className="h-8 w-auto object-contain brightness-0 invert"
            />
            <p className="text-[#94A3BB] text-sm leading-relaxed mt-4 max-w-[30ch]">
              Socios estrategicos en talento. Reclutamiento y seleccion de
              personal con enfoque en cultura organizacional.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-on-primary font-heading font-bold text-sm mb-4">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {[
                "Reclutamiento operativo",
                "Reclutamiento administrativo",
                "Headhunting ejecutivo",
                "Reclutamiento bilingue",
                "Psicometrias",
              ].map((item) => (
                <li key={item}>
                  <span className="text-[#94A3BB] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navegacion */}
          <div>
            <h4 className="text-on-primary font-heading font-bold text-sm mb-4">
              Navegacion
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Servicios", href: "#servicios" },
                { label: "Headhunting", href: "#headhunting" },
                { label: "Proceso", href: "#proceso" },
                { label: "Nosotros", href: "#diferenciadores" },
                { label: "FAQ", href: "#faq" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#94A3BB] text-sm hover:text-on-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto - verifiable data */}
          <div>
            <h4 className="text-on-primary font-heading font-bold text-sm mb-4">
              Contacto
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hugo.cortes@reclutia.com"
                  className="text-[#94A3BB] text-sm hover:text-on-primary transition-colors duration-200"
                >
                  hugo.cortes@reclutia.com
                </a>
              </li>
              <li>
                <span className="text-[#94A3BB] text-sm">
                  Monterrey, Mexico
                </span>
              </li>
              <li>
                <span className="text-[#94A3BB] text-sm">
                  Cobertura: Mexico y EUA
                </span>
              </li>
            </ul>

            <h4 className="text-on-primary font-heading font-bold text-sm mb-3 mt-8">
              Sectores
            </h4>
            <p className="text-[#94A3BB] text-sm leading-relaxed">
              Manufactura, salud, construccion, agencias, gobierno
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E3A5F] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#94A3BB] text-xs">
            {new Date().getFullYear()} Reclutia. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="/privacidad"
              className="text-[#94A3BB] text-xs hover:text-on-primary transition-colors duration-200"
            >
              Aviso de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
