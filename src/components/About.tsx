import Image from "next/image";
import { Award, GraduationCap, HeartHandshake } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre" className="relative bg-[#F8F7F2] py-20 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        
        {/* Esquerda - Texto */}
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#16A892]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#064F4B]">
              Sobre Mim
            </span>
          </div>

          <h2 className="font-display text-3xl font-medium text-[#064F4B] sm:text-4xl lg:text-5xl">
            Cuidando da sua saúde com <br />
            <span className="italic text-[#16A892]">ciência e dedicação.</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[#064F4B]/70">
            Olá! Eu sou a Debora Pazoti, especialista em Fisioterapia Ortopédica. Minha missão é guiar pessoas a redefinirem sua relação com o corpo, oferecendo um espaço de escuta, cuidado técnico e movimento consciente.
          </p>

          {/* Destaques de Conquista */}
          <div className="mt-8 grid gap-6 sm:grid-cols-3 border-t border-[#064F4B]/10 pt-8">
            <div className="space-y-1">
              <GraduationCap className="h-6 w-6 text-[#16A892] mb-2" />
              <h4 className="font-semibold text-[#064F4B]">Pós-graduanda</h4>
              <p className="text-xs text-[#064F4B]/60">Prescrição de Exercícios Terapêuticos</p>
            </div>

            <div className="space-y-1">
              <Award className="h-6 w-6 text-[#16A892] mb-2" />
              <h4 className="font-semibold text-[#064F4B]">Certificação</h4>
              <p className="text-xs text-[#064F4B]/60">Internacional Voll Pilates</p>
            </div>

            <div className="space-y-1">
              <HeartHandshake className="h-6 w-6 text-[#16A892] mb-2" />
              <h4 className="font-semibold text-[#064F4B]">Propósito</h4>
              <p className="text-xs text-[#064F4B]/60">Reabilitação sem dores</p>
            </div>
          </div>
        </Reveal>

        {/* Direita - Imagem com corte orgânico */}
        <Reveal delay={150} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[10rem] rounded-b-[3rem] border-8 border-white bg-[#DDECE7] shadow-xl shadow-[#064F4B]/5">
            <Image
              src="/about.jpg"
              alt="Fisioterapeuta e Instrutora de Pilates"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
          </div>

          {/* Forma curva delicada ao fundo */}
          <div aria-hidden className="absolute -bottom-8 -right-8 -z-10 h-44 w-44 rounded-full border-2 border-dashed border-[#16A892]/30" />
        </Reveal>

      </div>
    </section>
  );
}