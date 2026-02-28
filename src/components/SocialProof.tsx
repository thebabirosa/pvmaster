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
      {/* Future Vision (Image 15) - Moved from Methodology as requested */}
      <Section id="vision" className="bg-[#F5F5F5] py-0 md:py-0 px-0 md:px-0 max-w-none w-full" fullWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="relative h-[50vh] md:h-full order-2 md:order-1">
            <img
              src="https://github.com/thebabirosa/images/blob/main/11.png?raw=true"
              alt="Future Vision"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-12 md:p-24 bg-[#F5F5F5] order-1 md:order-2">
            <h2 className="font-display text-2xl md:text-4xl mb-8 uppercase leading-tight max-w-2xl">
              ONDE SEU NEGÓCIO ESTARÁ APÓS 12 MESES DE REESTRUTURAÇÃO:
            </h2>
            
            <div className="space-y-4 mb-8">
              {[
                "Ser apenas especialista e passa a ser uma líder de movimento",
                "Viver de picos de faturamento e passa a ter previsibilidade",
                "Operar no limite e construir um ativo valioso",
                "Crescer com esforço e passa a escalar com estratégia"
              ].map((item, i) => (
                <div key={i} className="border border-venus-black rounded-lg px-6 py-4 text-center bg-white hover:bg-venus-black hover:text-white transition-colors cursor-default">
                  <span className="font-condensed text-sm uppercase tracking-wide">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="font-condensed text-sm uppercase tracking-wide mb-2">
                Você sai de empresária ou prestadora de serviço para se tornar referência que lidera um ecossistema que gera:
              </p>
              <p className="font-script text-3xl md:text-4xl">liberdade, lucro e legado.</p>
            </div>
          </div>
        </div>
      </Section>

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

      {/* Stakes (Image 19) - Moved from Offer.tsx as requested */}
      <Section id="stakes" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full" fullWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-white text-left">
            <h2 className="font-display text-3xl md:text-4xl mb-8 text-venus-black uppercase whitespace-nowrap text-center md:text-left">O QUE ESTÁ EM JOGO?</h2>
            
            <div className="space-y-8 font-body text-lg md:text-xl text-venus-black mb-12 max-w-xl">
              <div className="space-y-1">
                <p>Não é uma mentoria de marketing.</p>
                <p>Não é um grupo de networking.</p>
                <p>Não é sobre fazer mais.</p>
              </div>

              <div className="space-y-1">
                <p>É sobre deixar de operar no limite.</p>
                <p>É sobre sair do modelo que depende de você e construir um ativo que trabalha a seu favor.</p>
              </div>

              <div className="space-y-1">
                <p className="font-bold">É sobre estruturar o negócio que você vai sustentar pelos próximos 10 anos.</p>
                <p>Porque riqueza não é pico.</p>
              </div>

              <div className="space-y-1">
                <p className="font-bold mb-2">Riqueza é:</p>
                <p>Liberdade</p>
                <p>Tempo de qualidade</p>
                <p>Paz de espírito</p>
                <p>Legado</p>
              </div>
              
              <p className="pt-4">
                O Mastermind VÊNUS é a estrutura para isso.
              </p>
            </div>
          </div>
          <div className="relative h-[50vh] md:h-full">
            <img
              src="https://github.com/thebabirosa/images/blob/main/14.png?raw=true"
              alt="O que está em jogo"
              className="absolute inset-0 w-full h-full object-cover"
            />
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
