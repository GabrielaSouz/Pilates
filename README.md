# Landing Page — Débora Pazoti | Fisioterapia e Pilates

Landing page profissional para fisioterapeuta e instrutora de Pilates, construída com **Next.js 14 (App Router)**, **React**, **TypeScript** e **Tailwind CSS**. Totalmente responsiva, com animações de scroll, micro-interações e design moderno.

## Sobre o Projeto

Site institucional para Débora Pazoti, fisioterapeuta e instrutora de Pilates em Limeira - SP. O projeto apresenta serviços, benefícios do Pilates, depoimentos de pacientes e informações de contato de forma visual e acessível.

## Stack

- Next.js 14 + App Router
- React 18 + TypeScript
- Tailwind CSS (paleta customizada: verde #064F4B, #16A892 e tons neutros)
- [lucide-react](https://lucide.dev) para ícones
- `next/image` para otimização de imagens

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm run start
```

## Estrutura

```
src/
  app/
    layout.tsx       # layout global + metadata
    page.tsx         # monta todas as seções
    globals.css      # estilos globais
  components/
    Header.tsx       # navegação com menu mobile
    Hero.tsx         # seção principal com imagem
    Cards.tsx        # cards de destaque (Hero)
    Benefits.tsx     # benefícios do Pilates
    About.tsx        # seção sobre a profissional
    Treatments.tsx   # tratamentos oferecidos
    HowItWorks.tsx   # passo a passo do tratamento
    Services.tsx     # serviços detalhados
    Testimonials.tsx # carrossel de depoimentos
    Faq.tsx          # perguntas frequentes
    Contact.tsx      # formulário de contato
    CTA.tsx          # call-to-action final
    Footer.tsx       # rodapé
    Reveal.tsx       # componente de animação ao scroll
```

## Seções do Site

- **Hero**: Apresentação principal com imagem e call-to-action
- **Cards**: Destaques rápidos dos principais benefícios
- **Benefits**: Benefícios detalhados do Pilates
- **About**: Informações sobre Débora Pazoti
- **Treatments**: Tratamentos disponíveis
- **HowItWorks**: 4 etapas do processo de tratamento
- **Services**: Serviços oferecidos
- **Testimonials**: Depoimentos de pacientes com carrossel
- **FAQ**: Perguntas frequentes
- **Contact**: Formulário de contato + informações (WhatsApp, email, endereço)
- **CTA**: Banner final de conversão

## Cores e Design

- **Primária**: #064F4B (verde escuro)
- **Secundária**: #16A892 (verde claro)
- **Acento**: #DDECE7 (verde bem claro)
- **Fundo**: #F8F7F2 (off-white)
- **Tipografia**: Fontes modernas e legíveis

## Contato

- **Telefone/WhatsApp**: 19 98151-0748
- **Email**: dehpazoti@gmail.com
- **Endereço**: São Benedito, 150, Vila Fascina - Limeira - SP
