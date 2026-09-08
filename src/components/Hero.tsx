import Image from "next/image";
import {
  ArrowUpRight,
  PlayCircle,
  ShieldCheck,
  Users,
  Dumbbell,
  Sparkles,
} from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#F8F7F2] px-6 pb-20 pt-12 lg:px-10 lg:pb-32 lg:pt-20"
    >
      {/* Background decoration with soft shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-[#DDECE7]/70 blur-3xl"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-10 h-[600px] w-[600px] rounded-full bg-[#DDECE7]/50 blur-3xl"
      />

      

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}
        <Reveal>
          {/* Eyebrow / Tag */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#16A892]/20 bg-white/70 px-4 py-1.5 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#16A892]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#064F4B]">
              Pilates & Fisioterapia Integrada
            </span>
          </div>

          {/* Title */}
          <h1 className="max-w-2xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-[#064F4B] sm:text-6xl lg:text-[4.2rem]">
            Mais movimento,
            <br />
            <span className="text-[#064F4B]">menos dor,</span>
            <br />
            <span className="italic text-[#16A892]">mais vida.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#064F4B]/75 sm:text-lg">
            O Pilates e a fisioterapia trabalham juntos para fortalecer seu corpo, 
            melhorar sua postura e devolver sua liberdade de movimento com um método 
            exclusivo e acolhedor.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#contato"
              className="group flex items-center gap-2.5 rounded-full bg-[#16A892] px-7 py-4 text-sm font-medium text-white shadow-lg shadow-[#16A892]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#064F4B] hover:shadow-xl"
            >
              Agendar minha sessão
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#sobre"
              className="group flex items-center gap-3 text-sm font-medium text-[#064F4B] transition-colors hover:text-[#16A892]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#16A892]/30 bg-white/50 transition-all duration-300 group-hover:scale-105 group-hover:border-[#16A892]">
                <PlayCircle className="h-5 w-5 text-[#16A892]" />
              </span>
              Conhecer meu trabalho
            </a>
          </div>

          {/* =====================================================
              CREDIBILITY / STATS
          ===================================================== */}
          <div className="mt-12 border-t border-[#064F4B]/10 pt-8">
            <div className="grid grid-cols-3 gap-4 sm:flex sm:gap-10">
              {/* Experience */}
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#DDECE7] text-[#064F4B]">
                  <Dumbbell className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-display text-base font-semibold text-[#064F4B] sm:text-lg">
                    +5 anos
                  </p>
                  <p className="text-xs text-[#064F4B]/60">
                    de experiência
                  </p>
                </div>
              </div>

              {/* Patients */}
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#DDECE7] text-[#064F4B]">
                  <Users className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-display text-base font-semibold text-[#064F4B] sm:text-lg">
                    +200
                  </p>
                  <p className="text-xs text-[#064F4B]/60">
                    vidas transformadas
                  </p>
                </div>
              </div>

              {/* CREFITO */}
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#DDECE7] text-[#064F4B]">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-display text-base font-semibold text-[#064F4B] sm:text-lg">
                    CREFITO
                  </p>
                  <p className="text-xs text-[#064F4B]/60">
                    3/273680-F
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* =====================================================
            RIGHT - IMAGES & SHAPES
        ===================================================== */}
        <Reveal delay={150} className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative">
            {/* Main Image Frame with Organic Arch Shape */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[12rem] rounded-b-[4rem] border-[10px] border-white bg-[#DDECE7] shadow-2xl shadow-[#064F4B]/10">
              <Image
                src="/hero.jpg"
                alt="Prática de Pilates e Fisioterapia"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 max-w-[240px] rounded-3xl border border-white/80 bg-white/90 p-5 shadow-xl shadow-[#064F4B]/10 backdrop-blur-md sm:-left-8">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#16A892] text-white">
                <Dumbbell className="h-5 w-5" />
              </div>

              <p className="font-display text-base font-medium leading-snug text-[#064F4B]">
                Cuidado integral e personalizado.
              </p>

              <p className="mt-1.5 text-xs leading-relaxed text-[#064F4B]/60">
                Sessões individuais focadas nas suas metas e dores.
              </p>
            </div>

            {/* Decorative Outline Circle */}
            <div
              aria-hidden
              className="absolute -right-6 -top-6 -z-10 h-36 w-36 rounded-full border-2 border-dashed border-[#16A892]/40"
            />

            {/* Delicate Corner Curved Line */}
            <div
              aria-hidden
              className="absolute -bottom-10 right-8 h-28 w-28 rounded-full border-b-2 border-r-2 border-[#16A892]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}