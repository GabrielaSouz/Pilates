import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const benefitsList = [
  "Para o idoso Funcionalidade",
  "Para o atleta Desafio",
  "Para o desanimado Motivação",
  "Para o distraído Foco",
  "Para o adolescente Organização",
  "Para todos Solução",
];

export default function Benefits() {
  return (
    <section id="beneficios" className="relative overflow-hidden bg-[#F8F7F2] py-20 px-6 lg:px-10">
      {/* Forma decorativa em background */}
      <div aria-hidden className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-[#DDECE7]/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl grid items-center gap-12 lg:grid-cols-2">
        {/* Imagem com linhas delicadas */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/3] sm:aspect-[12/11] overflow-hidden rounded-[3rem] border-8 border-white bg-[#DDECE7] shadow-xl shadow-[#064F4B]/5">
            <Image
              src="/imagem2.jpeg"
              alt="Instrução de Pilates e Alongamento"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          {/* Círculo com borda fina */}
          <div aria-hidden className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-full border border-[#16A892]/40" />
        </Reveal>

        {/* Conteúdo */}
        <Reveal delay={150} className="order-1 lg:order-2">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#16A892]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#064F4B]">
              Por que praticar Pilates?
            </span>
             <span className="h-px w-8 bg-[#16A892]" />
          </div>

          <h1 className="max-w-2xl font-display text-3xl font-medium leading-[1.08] tracking-tight text-[#064F4B] sm:text-4xl lg:text-5xl">
            Seu corpo merece
            <br />

            <span className=" text-[#16A892]"> mais movimento.</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-[#064F4B]/70">
            A união da fisioterapia com o Pilates traz resultados profundos para a sua saúde física e mental. Cada exercício é adaptado para atender às suas necessidades com segurança.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {benefitsList.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#16A892] mt-0.5" />
                <span className="text-sm font-medium text-[#064F4B]/80">{benefit}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}