import { motion } from "motion/react";
import { landingPageData } from "../data";
import Section from "./Section";
import Button from "./ui/Button";
import { CalendarSection } from "./CalendarSection";

export default function Offer() {
  const sections = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);
  const { stakes_19, cta_20, deliverables_21, bonus_22, investment_23 } = sections;

  return (
    <>
      {/* Access Section (Merged) */}
      <Section id="access" className="bg-[#F5F5F5] py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-xl md:text-3xl text-venus-black text-center mb-16 uppercase tracking-tight">
            O QUE VOCÊ ACESSA COMO ALIADA DO CÍRCULO DE VÊNUS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              "https://github.com/thebabirosa/images/blob/main/01im1.jpg?raw=true",
              "https://github.com/thebabirosa/images/blob/main/01im2.jpg?raw=true",
              "https://github.com/thebabirosa/images/blob/main/01im3.jpg?raw=true",
              "https://github.com/thebabirosa/images/blob/main/01im4.jpg?raw=true",
              "https://github.com/thebabirosa/images/blob/main/01im5.jpg?raw=true",
              "https://github.com/thebabirosa/images/blob/main/01im6.jpg?raw=true",
              "https://github.com/thebabirosa/images/blob/main/01im7.jpg?raw=true",
              "https://github.com/thebabirosa/images/blob/main/01imimag.jpg?raw=true"
            ].map((img, index) => (
              <div key={index} className="relative aspect-[9/16] overflow-hidden rounded-2xl shadow-lg group">
                <img 
                  src={img} 
                  alt={`Access Item ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Bonus Section */}
      <Section id="investment" className="bg-white py-10 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-16">
            <h2 className="font-display text-4xl md:text-6xl text-venus-black uppercase tracking-tight relative z-10 leading-none">
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

      {/* 12 Passos (Image 30) */}
      <Section id="masterclasses" className="bg-[#F5F3F7] py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:min-h-screen">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-[#F5F3F7]">
            <div className="max-w-3xl">
              <h2 className="font-display text-xl md:text-3xl text-venus-black uppercase tracking-tight mb-0 leading-tight">
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

      <CalendarSection />
    </>
  );
}
