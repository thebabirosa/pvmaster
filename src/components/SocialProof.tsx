import { motion } from "motion/react";
import { landingPageData } from "../data";
import Section from "./Section";
import Button from "./ui/Button";
import { GalleryCarousel } from "./GalleryCarousel";

export default function SocialProof() {
  const sections = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);
  const { authority_numbers_24, calendar_2026_25, curriculum_26 } = sections;

  return (
    <>
      {/* Investment (Image 28) - New section as requested */}
      <Section id="investment" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full border-t border-venus-black/5">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:min-h-screen">
          <div className="relative h-[60vh] md:h-auto order-2 md:order-1">
            <img
              src="https://github.com/thebabirosa/images/blob/main/IMAGENS%20PV%20%20(1).png?raw=true"
              alt="Vênus Founder"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-center p-12 md:p-24 bg-white text-center order-1 md:order-2">
            <div className="max-w-md space-y-8">
              <h2 className="font-display text-3xl md:text-4xl text-venus-black uppercase tracking-tight leading-snug">
                A DECISÃO QUE MUDA A ESTRUTURA DO SEU FUTURO.
              </h2>
              
              <div className="space-y-6">
                <p className="font-body text-xl font-bold text-venus-black leading-tight">
                  Oferta especial de pré-lançamento para as aliadas fundadoras:
                </p>
                
                <p className="font-body text-lg text-venus-black leading-relaxed">
                  Aplique para o Círculo Vênus.<br />
                  Se aprovada, você acessa a condição especial de fundadora e entra na construção do seu ecossistema de lucro, previsibilidade e legado.
                </p>
              </div>
              
              <div className="pt-8">
                <Button className="w-full md:w-auto px-12 py-4 bg-[#B08D55] text-white hover:bg-[#9A7B4A] rounded-xl text-2xl font-display uppercase tracking-wider shadow-lg transition-all hover:scale-105">
                  APLICAR AGORA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Protagonismo & Reconhecimento (Image 31) - New section as requested */}
      <Section id="recognition" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:min-h-screen">
          <div className="relative h-[60vh] md:h-auto">
            <img
              src="https://github.com/thebabirosa/images/blob/main/11.png?raw=true"
              alt="Vênus Recognition Event"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-center p-12 md:p-24 bg-white">
            <div className="max-w-md w-full space-y-12">
              {/* Stylized Title Box */}
              <div className="border border-venus-black rounded-xl p-8 text-center">
                <h2 className="font-display text-2xl md:text-3xl text-venus-black uppercase tracking-tight leading-none">
                  PROTAGONISMO
                </h2>
                <p className="font-script text-4xl md:text-5xl text-venus-black -mt-2">
                  & reconhecimento
                </p>
              </div>
              
              <div className="space-y-6 text-venus-black">
                <p className="font-body text-xl md:text-2xl font-medium leading-tight">
                  Premiação, reconhecimento & autoridade.
                </p>
                <p className="font-body text-lg md:text-xl leading-relaxed">
                  Premiação 2x ao ano para celebrar suas conquistas, vitórias e dedicação empreendedora, com o <span className="font-bold uppercase">PROTAGONISMO</span> que você merece.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Gallery Carousel - New section as requested */}
      <GalleryCarousel />
      {/* The Call (Image 35) - Updated with provided image */}
      <Section id="the-call" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="w-full">
          <img 
            src="https://github.com/thebabirosa/images/blob/main/C%C3%B3pia%20de%20PV%20MASTERMIND%20(13).png?raw=true" 
            alt="O Chamado - Líderes Magnéticas"
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>
      </Section>
    </>
  );
}
