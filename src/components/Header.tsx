
"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Serviços & Planos", href: "#servicos" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#064F4B]/5 bg-[#F8F7F2]/90 py-2 backdrop-blur-md shadow-sm"
          : "bg-[#F8F7F2]/0 py-2.5"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 px-2">

        {/* LOGO */}
        <Link href="/" className="relative flex h-16 w-48 shrink-0 items-center md:h-20 md:w-56" > <Image src="/Logo-Debora.png" alt="Logo" fill priority className="object-contain object-left" sizes="224px" /> </Link>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#064F4B]/80 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 transition-colors hover:text-[#16A892] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#16A892] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* BOTÃO AGENDAR DESKTOP */}
        <a
          href="#contato"
          className="group hidden items-center gap-2 rounded-full bg-[#16A892] px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-[#16A892]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#064F4B] hover:shadow-lg lg:flex"
        >
          Agendar sessão
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        {/* BOTÃO MOBILE */}
        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DDECE7]/60 text-[#064F4B] transition-colors hover:bg-[#DDECE7] lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* NAV MOBILE */}
      <div
        className={`overflow-hidden bg-[#F8F7F2]/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          open
            ? "max-h-96 border-b border-[#064F4B]/10 shadow-lg"
            : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1.5 px-6 py-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#064F4B]/80 transition-colors hover:bg-[#DDECE7]/50 hover:text-[#064F4B]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#16A892] px-5 py-3 text-sm font-medium text-white shadow-md shadow-[#16A892]/20"
          >
            Agendar sessão
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}

