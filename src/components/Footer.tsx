import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-800 px-6 py-12 text-white/70 lg:px-10">
      
      {/* Decorações */}
      <div
        aria-hidden
        className="absolute -right-6 -top-6 z-0 h-36 w-36 rounded-full border-2 border-dashed border-[#16A892]/40"
      />

      {/* <div
        aria-hidden
        className="absolute -bottom-10 right-8 z-0 h-28 w-28 rounded-full border-b-2 border-r-2 border-[#16A892]/40"
      /> */}

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Logo e Nome */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-md bg-white shadow-lg md:h-22 md:w-28"
            >
              <Image
                src="/Logo-Footer.png"
                alt="Logo"
                fill
                priority
                className="object-cover p-3"
                sizes="112px"
              />
            </Link>

            <p className="max-w-xs text-sm leading-relaxed">
              Desfrute de uma vida ativa e sem dor!
            </p>
          </div>

          {/* Contato */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-white">Contato</h3>
            <div className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-1 text-[#16A892]" />
              <div>
                <p className="text-sm">19 98151-0748</p>
                <p className="text-xs text-white/50">WhatsApp</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-1 text-[#16A892]" />
              <p className="text-sm">
                São Benedito, 150<br />
                Vila Fascina - Limeira - SP
              </p>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-white">Links</h3>
            <nav className="flex flex-col gap-2">
              <a href="#sobre" className="text-sm transition-colors hover:text-[#16A892]">
                Sobre Mim
              </a>
              <a href="#servicos" className="text-sm transition-colors hover:text-[#16A892]">
                Serviços & Planos
              </a>
              <a href="#faq" className="text-sm transition-colors hover:text-[#16A892]">
                Dúvidas
              </a>
              <a href="#contato" className="text-sm transition-colors hover:text-[#16A892]">
                Contato
              </a>
            </nav>
          </div>

          {/* Redes Sociais */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-white">Redes Sociais</h3>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/deborapazoti/"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 hover:bg-[#16A892] hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 hover:bg-[#16A892] hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:dehpazoti@gmail.com"
                aria-label="E-mail"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 hover:bg-[#16A892] hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Debora Pazoti Studio de Pilates. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
