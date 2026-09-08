import { Heart, Zap, TrendingUp, CheckCircle, Sparkles, MessageCircle, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import Image from "next/image";

const items = [
  {
    number: "01",
    title: "Saúde Postural",
    description:
      "Corrija desequilíbrios e fortaleça a coluna para uma postura perfeita no dia a dia.",
    icon: Heart,
  },
  {
    number: "02",
    title: "Energia e Disposição",
    description:
      "Aumente sua resistência e vitalidade, recuperando o vigor para viver melhor.",
    icon: Zap,
  },
  {
    number: "03",
    title: "Força Funcional",
    description:
      "Desenvolva músculos que realmente usamos, melhorando sua qualidade de vida.",
    icon: TrendingUp,
  },
  {
    number: "04",
    title: "Alívio da Dor",
    description:
      "Reduza ou elimine dores crônicas através do movimento consciente e personalizado.",
    icon: CheckCircle,
  },
  {
    number: "05",
    title: "Flexibilidade",
    description:
      "Recupere amplitude de movimento com segurança e progressão constante.",
    icon: Sparkles,
  },
  {
    number: "06",
    title: "Equilíbrio Mental",
    description:
      "Controle respiratório e conexão mente-corpo para bem-estar total.",
    icon: MessageCircle,
  },
];

export default function Treatments() {
  return (
    <section
      id="beneficios"
      className="relative overflow-hidden bg-[#F8F7F2] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#064F4B]">
            Benefícios
          </p>

          <h2 className="font-display text-3xl font-medium leading-tight text-[#064F4B] sm:text-4xl lg:text-5xl">
            Transformação do corpo,{" "}
            <br /><span className="italic text-[#16A892]">paz da mente</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#064F4B]/60 sm:text-base">
            Cada sessão é pensada especificamente para você, trabalhando seus
            objetivos e respeitando suas limitações físicas.
          </p>
        </Reveal>

        {/* CONTENT */}
      

          {/* LEFT CARDS */}
          <div className="order-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:order-1 mt-8 md:mt-12">
            {items.slice(0, 6).map((item) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.number}>
                  <div className="group relative rounded-[2rem] border border-[#064F4B]/10 bg-white p-6 shadow-[0_12px_40px_rgba(6,79,75,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(6,79,75,0.1)] sm:p-7">

                    <div className="absolute right-5 top-5 text-xs font-semibold tracking-widest text-[#064F4B]/20">
                      {item.number}
                    </div>

                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DDECE7] text-[#064F4B] transition-all duration-300 group-hover:bg-[#16A892] group-hover:text-white">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <h3 className="font-display text-xl font-medium text-[#064F4B]">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-[#064F4B]/60">
                      {item.description}
                    </p>

                    <div className="mt-5 h-px w-10 bg-[#064F4B]/20 transition-all duration-300 group-hover:w-16 group-hover:bg-[#16A892]/50" />

                  </div>
                </Reveal>
              );
            })}
          </div>


          {/* RIGHT CARDS */}
     

        {/* BOTTOM TEXT */}
        <Reveal className="mx-auto mt-16 max-w-2xl text-center sm:mt-20">
          <p className="text-sm leading-7 text-[#064F4B]/50">
            Cada benefício é uma conquista sua. Com foco personalizado e acompanhamento contínuo,
            transformamos seus objetivos em realidade.
          </p>
        </Reveal>
      </div>

    </section>
  );
}