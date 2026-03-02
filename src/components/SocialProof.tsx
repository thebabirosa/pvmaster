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
          <div className="relative h-[50vh] md:h-full order-2 md:order-1">
            <img 
              src="https://github.com/thebabirosa/images/blob/main/15.png?raw=true" 
              alt="Protagonismo e Reconhecimento" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-12 md:p-24 bg-[#F5F3F7] order-1 md:order-2">
            <div className="max-w-3xl">
              <h2 className="font-display text-2xl md:text-4xl lg:text-5xl text-venus-black uppercase tracking-tight mb-2 leading-none max-w-2xl">
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
        
        {/* Gallery Carousel - Moved inside Protagonism section */}
        <GalleryCarousel />
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

      {/* Pre-Launch Offer (New Section) */}
      <Section id="pre-launch" className="bg-[#F5F5F5] py-0 md:py-0 px-0 md:px-0 max-w-none w-full" fullWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:min-h-screen">
          {/* Image Column */}
          <div className="relative h-[50vh] md:h-full order-2 md:order-1">
            <img 
              src="https://github.com/thebabirosa/images/blob/main/001IMAGENS%20PV%20%20(4).png?raw=true" 
              alt="Pre-Launch Offer" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          {/* Text Column */}
          <div className="flex flex-col justify-center items-center text-center p-12 md:p-24 bg-[#F5F5F5] order-1 md:order-2">
            <div className="max-w-xl">
              <h2 className="font-display text-xl md:text-3xl text-venus-black uppercase tracking-tight mb-8 font-bold leading-snug max-w-lg mx-auto">
                Oferta especial de pré-lançamento para as aliadas fundadoras:
              </h2>
              <p className="font-body text-lg md:text-xl text-venus-black mb-12 leading-relaxed">
                Faça sua aplicação e acesse a condição especial de pré-lançamento e torne-se uma aliada fundadora do círculo de vênus.
              </p>
              <Button 
                href="https://forms.gle/92inSZNrWUS3SQ8r7" 
                variant="primary" 
                className="w-full md:w-auto px-12 py-5 text-lg bg-[#A67C00] hover:bg-[#8a6600] text-white"
              >
                APLICAR AGORA
              </Button>
            </div>
          </div>
        </div>
      </Section>

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
    </>
  );
}
