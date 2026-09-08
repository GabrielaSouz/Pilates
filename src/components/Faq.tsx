"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const faqs = [
  {
    question: "Preciso ter experiência prévia para praticar Pilates?",
    answer: "De forma alguma! As aulas são totalmente individualizadas e adaptadas para iniciantes, idosos, grávidas ou pessoas em fase de reabilitação.",
  },
  {
    question: "O Pilates ajuda no tratamento de hérnia de disco?",
    answer: "Sim! O Pilates Clínico foca no fortalecimento do 'Core' (músculos profundos do abdômen e coluna), aliviando a sobrecarga nos discos intervertebrais.",
  },
  {
    question: "Qual a diferença entre Pilates de Studio e Fisioterapia?",
    answer: "A Fisioterapia foca na reabilitação direta da dor aguda e patologias. O Pilates atua no fortalecimento, postura e manutenção. Na nossa clínica, integramos ambas.",
  },
  {
    question: "Quantas vezes por semana devo praticar?",
    answer: "A recomendação ideal é de 2 a 3 vezes por semana para obter resultados consistentes na melhora da postura e alívio de dores.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-[#F8F7F2] py-20 px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#16A892]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#064F4B]">
              Dúvidas
            </span>
            <span className="h-px w-8 bg-[#16A892]" />
          </div>

          <h2 className="font-display text-3xl font-medium text-[#064F4B] sm:text-4xl">
            Perguntas Frequentes
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} delay={index * 50}>
                <div className="rounded-2xl border border-[#064F4B]/10 bg-white overflow-hidden transition-colors">
                  <button
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between p-6 text-left font-display text-lg font-medium text-[#064F4B]"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-[#16A892] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm leading-relaxed text-[#064F4B]/70 border-t border-[#064F4B]/5 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}