import { motion } from "motion/react";
import { landingPageData } from "../data";
import Section from "./Section";
import Button from "./ui/Button";

export default function Offer() {
  const sections = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);
  const { stakes_19, cta_20, deliverables_21, bonus_22, investment_23 } = sections;

  return (
    <>
      {/* Feminine Wealth (Image 8) - Moved from Philosophy as requested */}
      <Section id="feminine_wealth" className="bg-white overflow-hidden" fullWidth>
        <div className="relative w-full min-h-[60vh] md:min-h-screen flex items-center justify-center">
          <img 
            src="https://github.com/thebabirosa/images/blob/main/C%C3%B3pia%20de%20PV%20MASTERMIND%20(8).png?raw=true" 
            alt="O que você acessa como aliada" 
            className="w-full h-full object-cover"
          />
        </div>
      </Section>

      {/* Club MDN Access */}
      <Section id="club-mdn-access" className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-xl md:text-3xl text-venus-black text-center mb-16 uppercase tracking-tight">
            O QUE VOCÊ ACESSA COMO ALIADA DO CÍRCULO DE VÊNUS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              "https://github.com/thebabirosa/images/blob/main/01im5.jpg?raw=true",
              "https://github.com/thebabirosa/images/blob/main/01im6.jpg?raw=true",
              "https://github.com/thebabirosa/images/blob/main/01im7.jpg?raw=true",
              "https://github.com/thebabirosa/images/blob/main/01imimag.jpg?raw=true"
            ].map((img, index) => (
              <div key={index} className="relative aspect-[9/16] overflow-hidden rounded-2xl shadow-lg group">
                <img 
                  src={img} 
                  alt={`Club MDN Access ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 12 Passos (Image 30) - Moved from SocialProof as requested */}
      <Section id="masterclasses" className="bg-[#F5F3F7] py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:min-h-screen">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-[#F5F3F7]">
            <div className="max-w-3xl">
              <h2 className="font-display text-xl md:text-3xl text-venus-black uppercase tracking-tight mb-0">
                12 PASSOS PARA CONSTRUIR
              </h2>
              <p className="font-script text-4xl md:text-5xl text-venus-black mb-8 -mt-2">
                um negócio valioso
              </p>
              
              <div className="space-y-3 font-body text-sm md:text-base text-venus-black uppercase tracking-wide">
                {[
                  "METAS DECISÃO e DIREÇÃO",
                  "COMO MONETIZAR O SEU CAPITAL SOCIAL",
                  "PERFIL DE CLIENTE IDEAL",
                  "POSICIONAMENTO MAGNÉTICO | mkt vibracional",
                  "MODELO DE NEGÓCIO & ESTERIA DE PRODUTOS",
                  "ARQUITETURA DE OFERTAS irresistíveis",
                  "NARRATIVAS QUE CONVERTEM - STORIES E ROTEIROS",
                  "FUNIL DE CONTEÚDO | vendas sistêmicas",
                  "CANAIS DE AQUISIÇÃO DE CLIENTES",
                  "COMERCIAL: IA E AUTOMAÇÃO",
                  "EXPANSÃO E LEGADO: CRIAÇÃO DE COMUNIDADE",
                  "DIVULGAÇÃO E CRIAÇÃO DE EVENTOS PRESENCIAIS"
                ].map((step, i) => (
                  <p key={i} className="flex flex-col sm:flex-row gap-1 sm:gap-2 sm:items-center">
                    <span className="font-bold min-w-fit">MASTERCLASS {i + 1}:</span>
                    <span className="font-medium">{step}</span>
                  </p>
                ))}
              </div>
              
              <div className="mt-12 border border-[#B08D55] rounded-xl p-8 bg-white/40 text-center">
                <p className="font-body font-bold text-sm md:text-lg uppercase tracking-wider text-venus-black leading-relaxed max-w-2xl mx-auto">
                  +MASTERCLASS DAS ALIADAS DO CLUB A CONFIRMAR<br />
                  VOCE TAMBÉM PODE TRANSBORDAR SEU CONHECIMENTO AQUI
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center p-8 md:p-16 bg-[#F5F3F7]">
            <div className="relative w-full aspect-[9/16] max-w-sm rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
              <iframe 
                className="absolute inset-0 w-full h-full object-cover"
                src="https://www.youtube.com/embed/THjTKHwpD0A" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </Section>

      {/* Venus Circle Access (Section 21) */}
      <Section id="venus-circle-access" className="bg-[#F5F5F5] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-xl md:text-3xl text-venus-black text-center mb-16 uppercase tracking-tight">
            o que você acessa dentro do Círculo de Vênus
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              "https://github.com/thebabirosa/images/blob/main/01im1.jpg?raw=true",
              "https://github.com/thebabirosa/images/blob/main/01im2.jpg?raw=true",
              "https://github.com/thebabirosa/images/blob/main/01im3.jpg?raw=true",
              "https://github.com/thebabirosa/images/blob/main/01im4.jpg?raw=true"
            ].map((img, index) => (
              <div key={index} className="relative aspect-[9/16] overflow-hidden rounded-2xl shadow-lg group">
                <img 
                  src={img} 
                  alt={`Venus Circle Access ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Bonus Section (Moved from Methodology) */}
      <Section id="investment" className="bg-white py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-16">
            <h2 className="font-display text-4xl md:text-6xl text-venus-black uppercase tracking-tight relative z-10">
              BÔNUS EXCLUSIVO
            </h2>
            <p className="font-script text-5xl sm:text-6xl md:text-8xl text-venus-black absolute -bottom-8 sm:-bottom-10 md:-bottom-14 left-1/2 -translate-x-1/2 z-20 w-full text-center">
              Aliadas fundadoras
            </p>
          </div>
          
          <div className="mt-16 space-y-2">
            <p className="font-body text-xl md:text-2xl text-venus-black">
              As 5 primeiras aliadas venusians receberão:
            </p>
            <p className="font-body text-xl md:text-2xl font-bold text-venus-black">
              ✓ Acesso integral aos eventos institucionais do Clube Mulher de Negócios realizados em 2025
            </p>
            <p className="font-body text-xl md:text-2xl text-venus-black">
              Valor estimado dessas experiências ao longo do ano: R$ 3.500 por 00,00
            </p>
          </div>
        </div>

        {/* Gallery Grid - YouTube Shorts */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {[
            "BB4GMXu5wGA",
            "H-tHhUfcuWg",
            "Q277sMT96OQ",
            "aNj5sIG37_8",
            "4-Beml51_BE",
            "Q277sMT96OQ"
          ].map((videoId, i) => (
            <div key={i} className="relative aspect-[9/16] rounded-2xl overflow-hidden group shadow-lg bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?loop=1&playlist=${videoId}&controls=0&rel=0`}
                title={`YouTube Short ${i + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>

        <div className="text-center space-y-1">
          <p className="font-body text-sm text-venus-muted">
            Eventos sujeitos à realização mediante número mínimo de participantes.*
          </p>
          <p className="font-body text-sm text-venus-muted">
            Não inclui experiências premium extraordinárias ou viagens internacionais.*
          </p>
        </div>
      </Section>

      {/* Legado & Impacto (Image 32) - Moved from SocialProof as requested */}
      <Section id="legacy" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full border-t border-venus-black/5">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto items-center">
          {/* Column 1: Text */}
          <div className="flex flex-col justify-center p-12 md:p-24 bg-white">
            <div className="space-y-8 max-w-xl mx-auto">
              <div className="space-y-2">
                <h2 className="font-display text-5xl md:text-6xl text-venus-black uppercase tracking-tighter font-black leading-none">
                  LEGADO
                </h2>
                <p className="font-script text-5xl md:text-6xl text-venus-black">
                  & impacto
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="font-body text-xl md:text-2xl text-venus-black leading-snug">
                  Em 2026, vamos lançar um livro em co-autoria com as aliadas do club, que desejam se tornar escritoras, com lançamentos previstos no Brasil e na Europa, em parceria com uma instituição de impacto social.
                </p>
                <p className="font-body text-sm md:text-base text-venus-black/60 leading-relaxed">
                  Participação opcional, mediante adesão específica e investimento independente da assinatura do Club.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Main Image */}
          <div className="w-full">
            <img
              src="https://github.com/thebabirosa/images/blob/main/Design%20sem%20nome%20(12).png?raw=true"
              alt="Vênus Legacy Book"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
