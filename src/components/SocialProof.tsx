import { motion } from "motion/react";
import { landingPageData } from "../data";
import Section from "./Section";
import Button from "./ui/Button";
import { GalleryCarousel } from "./GalleryCarousel";

export default function SocialProof() {
  const sections = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);
  const { investment_23, protagonism_24, gallery_25, call_26 } = sections;

  return (
    <>
      {/* Protagonismo & Reconhecimento (Image 31) */}
      <Section id="protagonism" className="bg-[#F5F3F7] py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:min-h-screen">
          <div className="relative flex items-center justify-center p-8 md:p-16 bg-[#F5F3F7] order-2 md:order-1">
            <div className="relative w-full aspect-[9/16] max-w-sm rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://github.com/thebabirosa/images/blob/main/15.png?raw=true" 
                alt="Protagonismo e Reconhecimento" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center p-12 md:p-24 bg-[#F5F3F7] order-1 md:order-2">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-5xl text-venus-black uppercase tracking-tight mb-2">
                PROTAGONISMO & RECONHECIMENTO
              </h2>
              <p className="font-script text-4xl md:text-6xl text-venus-black mb-8">
                premiação vênus
              </p>
              
              <div className="space-y-6 font-body text-lg md:text-xl text-venus-black leading-relaxed">
                <p>
                  Reconhecer a sua jornada é parte fundamental da nossa cultura.
                </p>
                <p>
                  No Círculo de Vênus, celebramos quem ousa crescer e liderar.
                </p>
                <p>
                  As aliadas que mais se destacarem em faturamento, impacto e implementação do método serão premiadas em nossa imersão presencial.
                </p>
                <p className="font-bold uppercase tracking-wide text-venus-gold">
                  TROFÉU VÊNUS DE OURO
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Legacy & Impact (Moved from Offer) */}
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

      {/* Gallery Carousel */}
      <GalleryCarousel />

      {/* The Call (Image 33) */}
      <Section id="the-call" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full" fullWidth>
        <div className="relative w-full min-h-screen flex items-center justify-center">
          <img 
            src="https://github.com/thebabirosa/images/blob/main/C%C3%B3pia%20de%20PV%20MASTERMIND%20(13).png?raw=true" 
            alt="The Call" 
            className="w-full h-full object-cover"
          />
        </div>
      </Section>

      {/* Investment (CTA) */}
      <Section id="investment-cta" className="bg-[#F5F5F5] py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl text-venus-black uppercase tracking-tight mb-8">
            OFERTA ESPECIAL
          </h2>
          <p className="font-script text-3xl md:text-5xl text-venus-black mb-12">
            para aliadas fundadoras
          </p>
          
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-venus-black/10 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8 border-b border-venus-black/10 pb-8">
              <div className="text-left">
                <p className="font-display text-xl text-venus-muted line-through decoration-red-500/50">DE R$ 120.000,00</p>
                <p className="font-body text-sm text-venus-muted">Investimento regular</p>
              </div>
              <div className="text-right">
                <p className="font-display text-3xl md:text-4xl text-venus-black">POR 12x R$ 5.000,00</p>
                <p className="font-body text-sm text-venus-black">ou R$ 50.000,00 à vista</p>
              </div>
            </div>
            
            <div className="space-y-4 text-left mb-8">
              <p className="font-body text-lg text-venus-black flex items-center gap-2">
                <span className="text-venus-gold">✓</span> Acesso anual ao Círculo de Vênus
              </p>
              <p className="font-body text-lg text-venus-black flex items-center gap-2">
                <span className="text-venus-gold">✓</span> 4 Encontros Online de Implementação
              </p>
              <p className="font-body text-lg text-venus-black flex items-center gap-2">
                <span className="text-venus-gold">✓</span> Imersão Presencial (2 dias)
              </p>
              <p className="font-body text-lg text-venus-black flex items-center gap-2">
                <span className="text-venus-gold">✓</span> Acesso à Comunidade Exclusiva
              </p>
              <p className="font-body text-lg text-venus-black flex items-center gap-2">
                <span className="text-venus-gold">✓</span> Bônus Exclusivos para Fundadoras
              </p>
            </div>

            <Button 
              href="https://application.com" 
              variant="primary" 
              className="w-full text-xl py-6"
            >
              QUERO ME TORNAR UMA ALIADA
            </Button>
          </div>
          
          <p className="font-body text-sm text-venus-muted max-w-2xl mx-auto">
            *Condição especial válida apenas para as primeiras 20 aliadas fundadoras. O valor será reajustado para o próximo lote sem aviso prévio.
          </p>
        </div>
      </Section>
    </>
  );
}
