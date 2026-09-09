"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Headhunting", href: "#headhunting" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#diferenciadores" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 pt-4">
      <nav className="max-w-[1280px] mx-auto flex items-center justify-between bg-bg/90 backdrop-blur-[12px] border border-border rounded-full px-6 py-3">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <Image
            src="/images/logo.webp"
            alt="Reclutia - Socios Estrategicos en Talento"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-body font-medium text-text-muted transition-colors duration-200 hover:text-text"
                style={{ transitionTimingFunction: "var(--easing)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contacto"
          className="hidden lg:inline-flex items-center px-6 py-2.5 bg-primary text-on-primary text-sm font-body font-medium rounded-full transition-transform duration-200 active:scale-[0.98] hover:brightness-110"
          style={{ transitionTimingFunction: "var(--easing)" }}
        >
          Pide informacion
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="lg:hidden relative w-8 h-8 flex items-center justify-center"
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <span
            className={`absolute w-5 h-[1.5px] bg-text transition-all duration-300 ${
              open ? "rotate-45 translate-y-0" : "-translate-y-1.5"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          />
          <span
            className={`absolute w-5 h-[1.5px] bg-text transition-all duration-300 ${
              open ? "-rotate-45 translate-y-0" : "translate-y-1.5"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-0 z-50 bg-bg/95 backdrop-blur-[20px] flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center"
            aria-label="Cerrar menu"
          >
            <span className="absolute w-5 h-[1.5px] bg-text rotate-45" />
            <span className="absolute w-5 h-[1.5px] bg-text -rotate-45" />
          </button>
          <ul className="flex flex-col items-center gap-8">
            {links.map((link, i) => (
              <li
                key={link.href}
                className="opacity-0 animate-[fadeUp_0.3s_ease_forwards]"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-heading font-bold text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li
              className="opacity-0 animate-[fadeUp_0.3s_ease_forwards] mt-4"
              style={{ animationDelay: `${links.length * 80}ms` }}
            >
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="inline-flex px-8 py-3.5 bg-primary text-on-primary font-body font-medium rounded-full"
              >
                Pide informacion
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
