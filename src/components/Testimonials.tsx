
// components/sections/testimonials/Testimonials03.tsx
'use client';

import { useState } from 'react';
import Reveal from './Reveal';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

const testimonials = [
  {
    quote: "Ambiente agradável, as aulas são ótimas com uma excelente profissional que está sempre atenta aos alunos...tem me ajudado muito na recuperação da coluna.",
    name: "Érica",
    avatar: "ER",
  },
  {
    quote: "Ambiente acolhedor, aulas dinâmicas e desafiadoras, professora excelente, super cuidadosa e acompanha todos os exercícios. Quando iniciei estava com muita dor na região da lombar e melhorou demais. Super recomendo!!!",
    name: "Jaqueline",
    avatar: "JQ",
  },
  {
    quote: "Estou adorando as aulas! A professora é muito atenciosa e explica cada exercício com bastante cuidado. Já sinto uma melhora grande nas dores e também na minha postura.",
    name: "Mariana",
    avatar: "MA",
  },
  {
    quote: "As aulas são excelentes e o ambiente muito tranquilo. A professora acompanha de perto cada movimento e sempre corrige quando necessário. Depois que comecei, percebi uma melhora enorme nas dores das costas.",
    name: "Fernanda",
    avatar: "FE",
  },
  {
    quote: "Comecei o Pilates buscando melhorar minhas dores e estou muito satisfeita com os resultados. As aulas são leves, mas ao mesmo tempo desafiadoras, e o atendimento é maravilhoso.",
    name: "Patrícia",
    avatar: "PA",
  },
  {
    quote: "Adoro as aulas! A professora é muito cuidadosa, paciente e está sempre preocupada em fazer os exercícios da maneira correta. Além de melhorar minhas dores, sinto que estou muito mais disposta.",
    name: "Camila",
    avatar: "CA",
  },
  {
    quote: "Um espaço muito agradável e com uma profissional excelente. As aulas são personalizadas e a professora acompanha cada aluno de perto. Tenho sentido bastante diferença na minha qualidade de vida.",
    name: "Renata",
    avatar: "RE",
  },
];



  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + (testimonials.length - 2)) %
        (testimonials.length - 2)
    );
  };

  return (
    <section className="overflow-hidden bg-[#e6ede3]/70 px-6 py-20 text-[#064F4B] md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">

           {/* Header */}
        <Reveal>
        <div className="text-center mb-12">
             <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#16A892]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#064F4B]">
              Histórias reais
            </span>
            <span className="h-px w-8 bg-[#16A892]" />
          </div>
           <h2 className="font-display text-3xl font-medium leading-tight text-[#064F4B] sm:text-4xl lg:text-5xl">
            Cuidar do corpo{" "}
            <span className="italic text-[#16A892]">transforma a vida</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#064F4B]/60 sm:text-base">
            Cada pessoa tem uma história, um objetivo e um corpo diferente.
            Veja o que nossas pacientes têm a dizer sobre essa jornada.
          </p>
        </div>
        </Reveal>

        {/* Trusted By */}
        <div className="mb-8">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-[#064F4B]/50">
            Feedbacks para te motivar
          </p>

          <div className="flex justify-center -space-x-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.avatar}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#F8F7F2] bg-[#DDECE7] text-sm font-semibold text-[#064F4B] transition-all duration-300 hover:z-10 hover:-translate-y-1 hover:border-[#16A892] md:h-14 md:w-14"
                title={`${testimonial.name} ${testimonial.avatar}`}
              >
                {testimonial.avatar}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <Reveal delay={150}>
        <div className="relative">

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 flex h-12 w-12 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-[#064F4B]/10 bg-white text-[#064F4B] transition hover:border-[#16A892]/40 hover:bg-[#DDECE7] md:-translate-x-16"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 flex h-12 w-12 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-[#064F4B]/10 bg-white text-[#064F4B] transition hover:border-[#16A892]/40 hover:bg-[#DDECE7] md:translate-x-16"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7-7"
              />
            </svg>
          </button>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials
              .slice(currentIndex, currentIndex + 3)
              .map((testimonial, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-2xl border bg-white/70 p-6 transition-all ${
                    index === 1
                      ? 'border-[#16A892] shadow-lg shadow-[#16A892]/10'
                      : 'border-[#064F4B]/10'
                  }`}
                >

                  {/* Quote */}
                  <blockquote className="mb-6 text-lg leading-relaxed text-[#064F4B]/80">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* View Post Link */}
                 

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DDECE7] text-sm font-semibold text-[#064F4B]">
                      {testimonial.avatar}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#064F4B]">
                        {testimonial.name}
                      </p>

                   
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}

