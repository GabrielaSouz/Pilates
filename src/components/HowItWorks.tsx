import Reveal from "./Reveal";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Agendamento e Avaliação",
    description: "Você entra em contato e agendamos uma avaliação minuciosa para entender seu histórico e dores.",
  },
  {
    number: "02",
    title: "Plano Personalizado",
    description: "Elaboramos um programa exclusivo mesclando técnicas de Fisioterapia e Pilates.",
  },
  {
    number: "03",
    title: "Prática Acompanhada",
    description: "Início das sessões com supervisão individualizada, garantindo movimentos precisos e seguros.",
  },
  {
    number: "04",
    title: "Evolução e Vida Sem Dor",
    description: "Acompanhamos seus resultados continuamente para devolver sua mobilidade e qualidade de vida.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden min-h-[600px] bg-[#e6ede3]/70 px-6 py-20 md:px-8 md:py-18">
      {/* Background Image with Overlay */}
      {/* <div className="pointer-events-none absolute inset-0">
        <Image
          src="/HowItWorksTest.png"
          alt="Pilates background"
          fill
          sizes="100vw"
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FCFAF9] via-[#FCFAF9]/95 to-[#FCFAF9]" />
      </div> */}

        {/* Header */}
        <Reveal>
        <div className="text-center mb-16">
             <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#16A892]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#064F4B]">
              Passo a Passo
            </span>
            <span className="h-px w-8 bg-[#16A892]" />
          </div>
           <h2 className="font-display text-3xl font-medium leading-tight text-[#064F4B] sm:text-4xl lg:text-5xl">
            Como funciona o seu{" "}
            <span className="italic text-[#16A892]">tratamento</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#064F4B]/60 sm:text-base">
            Cada etapa é cuidadosamente planejada para acompanhar sua evolução
            e ajudar você a recuperar seus movimentos com mais segurança.
          </p>
        </div>
        </Reveal>


      <div className="relative mx-auto max-w-7xl">       
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-[#064F4B]/10 md:left-1/2" />

          {/* Step 1 */}
          <Reveal className="relative mb-12 md:mb-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <div className="md:hidden">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#DDECE7] text-sm font-bold text-[#064F4B]">
                    01
                  </div>
                </div>
                <h3 className="font-display text-2xl font-medium text-[#064F4B]">
                  {steps[0].title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#064F4B]/70">
                  {steps[0].description}
                </p>
              </div>
              <div className="hidden md:flex md:w-12 md:h-12 md:items-center md:justify-center md:shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DDECE7] text-sm font-bold text-[#064F4B]">
                  01
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12" />
            </div>
          </Reveal>

          {/* Step 2 */}
          <Reveal className="relative mb-12 md:mb-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <div className="md:w-1/2 md:pr-12" />
              <div className="hidden md:flex md:w-12 md:h-12 md:items-center md:justify-center md:shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DDECE7] text-sm font-bold text-[#064F4B]">
                  02
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="md:hidden">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#DDECE7] text-sm font-bold text-[#064F4B]">
                    02
                  </div>
                </div>
                <h3 className="font-display text-2xl font-medium text-[#064F4B]">
                  {steps[1].title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#064F4B]/70">
                  {steps[1].description}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Step 3 */}
          <Reveal className="relative mb-12 md:mb-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <div className="md:hidden">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#DDECE7] text-sm font-bold text-[#064F4B]">
                    03
                  </div>
                </div>
                <h3 className="font-display text-2xl font-medium text-[#064F4B]">
                  {steps[2].title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#064F4B]/70">
                  {steps[2].description}
                </p>
              </div>
              <div className="hidden md:flex md:w-12 md:h-12 md:items-center md:justify-center md:shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DDECE7] text-sm font-bold text-[#064F4B]">
                  03
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12" />
            </div>
          </Reveal>

          {/* Step 4 */}
          <Reveal className="relative">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <div className="md:w-1/2 md:pr-12" />
              <div className="hidden md:flex md:w-12 md:h-12 md:items-center md:justify-center md:shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DDECE7] text-sm font-bold text-[#064F4B]">
                  04
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="md:hidden">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#DDECE7] text-sm font-bold text-[#064F4B]">
                    04
                  </div>
                </div>
                <h3 className="font-display text-2xl font-medium text-[#064F4B]">
                  {steps[3].title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#064F4B]/70">
                  {steps[3].description}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}