import { Mail, MapPin, Phone, Send } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden bg-[#F8F7F2] py-20 px-6 lg:px-10">
      {/* Decoração de fundo */}
      <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-[#DDECE7]/80 blur-3xl" />

      <div className="relative mx-auto max-w-7xl grid gap-12 lg:grid-cols-2">
        
        {/* Esquerda: Informações */}
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#16A892]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#064F4B]">
              Contato
            </span>
          </div>

          <h2 className="font-display text-3xl font-medium text-[#064F4B] sm:text-4xl lg:text-5xl">
            Pronto para viver <br />
            <span className="italic text-[#16A892]">sem dor?</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[#064F4B]/70">
            Entre em contato para agendar sua avaliação ou tirar qualquer dúvida. Estamos prontos para acolher você.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DDECE7] text-[#064F4B]">
                <Phone className="h-5 w-5 text-[#16A892]" />
              </div>
              <div>
                <p className="text-xs text-[#064F4B]/60">Telefone / WhatsApp</p>
                <p className="font-semibold text-[#064F4B]">19 98151-0748</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DDECE7] text-[#064F4B]">
                <Mail className="h-5 w-5 text-[#16A892]" />
              </div>
              <div>
                <p className="text-xs text-[#064F4B]/60">E-mail</p>
                <p className="font-semibold text-[#064F4B]">dehpazoti@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DDECE7] text-[#064F4B]">
                <MapPin className="h-5 w-5 text-[#16A892]" />
              </div>
              <div>
                <p className="text-xs text-[#064F4B]/60">Endereço</p>
                <p className="font-semibold text-[#064F4B]">São Benedito, 150<br />Vila Fascina - Limeira - SP</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Direita: Formulário */}
        <Reveal delay={150}>
          <form className="rounded-3xl border border-[#064F4B]/10 bg-white p-8 shadow-xl shadow-[#064F4B]/5 backdrop-blur-sm space-y-6">
            <div>
              <label className="block text-xs font-semibold text-[#064F4B] uppercase tracking-wider mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full rounded-2xl border border-[#064F4B]/15 bg-[#F8F7F2]/50 px-4 py-3 text-sm text-[#064F4B] outline-none transition-all focus:border-[#16A892] focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#064F4B] uppercase tracking-wider mb-2">
                WhatsApp
              </label>
              <input
                type="tel"
                placeholder="(00) 00000-0000"
                className="w-full rounded-2xl border border-[#064F4B]/15 bg-[#F8F7F2]/50 px-4 py-3 text-sm text-[#064F4B] outline-none transition-all focus:border-[#16A892] focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#064F4B] uppercase tracking-wider mb-2">
                Como podemos ajudar?
              </label>
              <textarea
                rows={4}
                placeholder="Conte um pouco sobre o que você busca ou a dor que sente..."
                className="w-full rounded-2xl border border-[#064F4B]/15 bg-[#F8F7F2]/50 px-4 py-3 text-sm text-[#064F4B] outline-none transition-all focus:border-[#16A892] focus:bg-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#16A892] py-4 text-sm font-medium text-white shadow-lg shadow-[#16A892]/20 transition-all hover:bg-[#064F4B]"
            >
              Enviar Mensagem
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}