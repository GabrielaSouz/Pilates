import { Activity, Heart, Home, Target } from "lucide-react";
import Reveal from "./Reveal";
import WaveDivider from "./WaveDivider";

const features = [
    {
        icon: Activity,
        title: "Atendimento Individualizado",
        description: "Planos de tratamento e exercícios desenhados especificamente para a sua anatomia e objetivos.",
    },
    {
        icon: Heart,
        title: "Cuidado Humanizado",
        description: "Sessões focadas no seu bem-estar integral, respeitando seus limites e no seu ritmo.",
    },
    // {
    //     icon: Home,
    //     title: "Atendimento Domiciliar",
    //     description: "Atendimento personalizado em domicílio, proporcionando mais conforto, praticidade e cuidado para sua saúde."
    // },
    {
        icon: Target,
        title: "Foco na Causa da Dor",
        description: "Tratamos a raiz do problema para resultados duradouros e reabilitação real.",
    },
];

export default function Cards() {
    return (
        <section className="relative bg-[#e6ede3]/70 py-16 px-6 lg:px-10">
           
         {/* onda mordendo o topo — cor = seção anterior (Hero, bg-cream) */}
           <WaveDivider position="top" color="#F8F7F2" />
         {/* onda mordendo a base — cor = próxima seção (HowItWorks, bg-cream) */}
           <WaveDivider position="bottom" color="#F8F7F2" />

           <div className="mx-auto max-w-7xl">

                <div className="mb-6 flex items-center justify-center gap-3">
                    <span className="h-px w-8 bg-[#16A892]" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#064F4B]">
                        Nosso diferencial
                    </span>
                </div>


                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Reveal key={index} delay={index * 100}>
                                <div className="group relative h-full rounded-3xl border border-[#064F4B]/10 bg-white/60 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-xl hover:shadow-[#064F4B]/5 backdrop-blur-sm">
                                    {/* Linha decorativa no hover */}
                                    <div className="absolute top-0 left-8 right-8 h-[2px] bg-[#16A892] scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-full" />

                                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DDECE7] text-[#064F4B] transition-colors duration-300 group-hover:bg-[#16A892] group-hover:text-white">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <h3 className="font-display text-lg font-medium text-[#064F4B] mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm leading-relaxed text-[#064F4B]/70">
                                        {item.description}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}