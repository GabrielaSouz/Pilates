import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "./Reveal";

const plans = [
  {
    title: "Aulas de Pilates em Grupo ",
    subtitle: "Máximo 4 alunos",
    description: "Ideal para quem busca prevenção, fortalecimento postural e condicionamento em um ambiente tranquilo.",
    features: ["2x por semana", "Aparelhos completos", "Avaliação postural inclusa", "Horários flexíveis"],
    highlighted: false,
  },
  {
    title: "Aulas de Pilates Personal",
    subtitle: "Casal ou individual",
    description: "Foco total na reabilitação de dores crônicas, hérnias e pós-operatório com acompanhamento exclusivo.",
    features: ["Atendimento VIP individual", "Protocolo de dor personalizado", "Terapia manual inclusa", "Reavaliações mensais"],
    highlighted: true,
  },
  {
    title: "Terapia Manual",
    subtitle: "Manobras manuais, Ventosas, Dry needling",
    description: "Avaliação física e biofuncional completa para traçar seu plano de tratamento e aula experimental.",
    features: ["Análise de mobilidade", "Diagnóstico funcional", "Relatório de evolução", "Sessão experimental"],
    highlighted: false,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative bg-[#F8F7F2] py-20 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#16A892]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#064F4B]">
              Serviços & Planos
            </span>
            <span className="h-px w-8 bg-[#16A892]" />
          </div>

          <h2 className="font-display text-3xl font-medium text-[#064F4B] sm:text-4xl">
            Escolha o cuidado ideal para o seu momento
          </h2>
        </Reveal>

        {/* Cards de Preços */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={index} delay={index * 100}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-[#064F4B] text-white shadow-2xl shadow-[#064F4B]/20"
                    : "border border-[#064F4B]/10 bg-white text-[#064F4B]"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3.5 right-8 rounded-full bg-[#16A892] px-4 py-1 text-xs font-semibold text-white tracking-wide">
                    Mais Recomendado
                  </span>
                )}

                <h3 className="font-display text-2xl font-medium">{plan.title}</h3>
                <p className={`mt-1 text-xs ${plan.highlighted ? "text-[#DDECE7]" : "text-[#064F4B]/60"}`}>
                  {plan.subtitle}
                </p>

                <p className={`mt-4 text-sm leading-relaxed ${plan.highlighted ? "text-white/80" : "text-[#064F4B]/70"}`}>
                  {plan.description}
                </p>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm">
                      <span className={`flex h-5 w-5 items-center justify-center rounded-full ${plan.highlighted ? "bg-[#16A892]" : "bg-[#DDECE7]"}`}>
                        <Check className={`h-3 w-3 ${plan.highlighted ? "text-white" : "text-[#064F4B]"}`} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contato"
                  className={`mt-10 flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-medium transition-all ${
                    plan.highlighted
                      ? "bg-[#16A892] text-white hover:bg-white hover:text-[#064F4B]"
                      : "bg-[#064F4B] text-white hover:bg-[#16A892]"
                  }`}
                >
                  Agendar Agora
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}