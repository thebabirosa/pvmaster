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
      {/* Journey (Image 26) - Replaced with "A Sua Jornada" layout as requested */}
      <Section id="curriculum" className="relative py-24 px-6 max-w-none w-full overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://github.com/thebabirosa/images/blob/main/C%C3%B3pia%20de%20PV%20MASTERMIND%20(1).png?raw=true"
            alt="Journey Background"
            className="w-full h-full object-cover opacity-100"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
          {/* Sun Icon */}
          <div className="flex justify-center mb-8">
            <img 
              src="https://github.com/thebabirosa/images/blob/main/idv%20venus%20master%20(2).png?raw=true" 
              alt="Venus Logo" 
              className="w-48 h-auto object-contain"
            />
          </div>

          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-5xl text-venus-black uppercase tracking-tight inline-flex items-baseline gap-2">
              A SUA JORNADA DENTRO DO 
              <span className="relative">
                VÊNUS
                <span className="absolute -top-4 left-0 text-[8px] font-body tracking-widest whitespace-nowrap">O CÍRCULO DE</span>
              </span>
            </h2>
            <p className="font-script text-5xl md:text-7xl text-venus-black mt-4">
              implementação & plantio
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-12">
            {[
              {
                title: "clareza & personalização",
                desc: "Diagnóstico e plano de implementação individual e personalizado"
              },
              {
                title: "desenvolvimento",
                desc: "Hotseats online e ao vivo mensal: acompanhamento e aceleração personalizado."
              },
              {
                title: "divulgação",
                desc: "acesso a todos conteúdos gravados e do CLUB e MDN academy"
              },
              {
                title: "protagonismo",
                desc: "primeiro evento com aliada, welcome kit e protagonismo."
              }
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col items-center -mt-8 md:-mt-0 md:-ml-12 first:mt-0 md:first:ml-0 z-0 hover:z-10 transition-all duration-300 hover:scale-105">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border border-venus-black flex flex-col items-center justify-center p-10 bg-white/80 backdrop-blur-sm relative shadow-lg">
                  {/* Star icons on top/bottom */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 text-venus-black text-xl">✦</div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-venus-black text-xl">✦</div>
                  
                  <h3 className="font-script text-4xl md:text-5xl text-venus-black mb-2 leading-none">{item.title}</h3>
                  <div className="w-16 h-[1px] bg-venus-black/30 mb-2" />
                  <p className="font-body text-sm md:text-base text-venus-black leading-tight max-w-[90%]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Journey Part 2 - Aceleração & Colheita */}
      <Section id="journey-part-2" className="relative py-24 px-6 max-w-none w-full overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://github.com/thebabirosa/images/blob/main/C%C3%B3pia%20de%20PV%20MASTERMIND%20(1).png?raw=true"
            alt="Journey Background"
            className="w-full h-full object-cover opacity-100"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
          {/* Sun Icon */}
          <div className="flex justify-center mb-8">
            <img 
              src="https://github.com/thebabirosa/images/blob/main/idv%20venus%20master%20(2).png?raw=true" 
              alt="Venus Logo" 
              className="w-48 h-auto object-contain"
            />
          </div>

          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-5xl text-venus-black uppercase tracking-tight inline-flex items-baseline gap-2">
              A SUA JORNADA DENTRO DO 
              <span className="relative">
                VÊNUS
                <span className="absolute -top-4 left-0 text-[8px] font-body tracking-widest whitespace-nowrap">O CÍRCULO DE</span>
              </span>
            </h2>
            <p className="font-script text-5xl md:text-7xl text-venus-black mt-4">
              aceleração & colheita
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "AUTORIDADE",
                desc: "episódio do mdncast no ar: divulgação, autoridade e impacto"
              },
              {
                title: "EXECUÇÃO",
                desc: "plano de ação e aceleração de trimestral"
              },
              {
                title: "RELACIONAMENTO",
                desc: "multiplique oportunidades com parcerias, relacionamento e conexões valiosas"
              },
              {
                title: "RESULTADOS E RECONHECIMENTO",
                desc: "aceleração de resultados, refinamento de posicionamento, e premiação"
              }
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col items-center">
                <div className="w-full aspect-square rounded-full border border-venus-black flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-[2px] relative">
                  {/* Star icons on top/bottom */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-venus-black text-xl">✦</div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-venus-black text-xl">✦</div>
                  
                  <h3 className="font-display text-xl md:text-2xl text-venus-black mb-4 uppercase tracking-tighter">{item.title}</h3>
                  <div className="w-full h-[1px] bg-venus-black/30 mb-4" />
                  <p className="font-body text-sm md:text-base text-venus-black leading-tight">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA (Image 27) - New section as requested */}
      <Section id="final-cta" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:min-h-screen">
          <div className="flex flex-col justify-center items-center p-12 md:p-24 bg-white text-center">
            <div className="max-w-md space-y-8">
              <div className="space-y-1">
                <p className="font-body text-xl text-venus-black">Se você já tem clientes</p>
                <p className="font-body text-xl text-venus-black">já tem ticket</p>
                <p className="font-body text-xl text-venus-black">já tem autoridade</p>
              </div>
              
              <div className="space-y-1">
                <p className="font-body text-xl text-venus-black">Então talvez o próximo nível</p>
                <p className="font-body text-xl text-venus-black">não seja vender mais.</p>
              </div>
              
              <div className="space-y-1">
                <p className="font-body text-xl text-venus-black">Seja estruturar.</p>
                <p className="font-body text-xl text-venus-black">Escalar com inteligência.</p>
                <p className="font-body text-xl text-venus-black">Sem exaustão.</p>
                <p className="font-body text-xl text-venus-black">Com legado.</p>
              </div>
              
              <p className="font-body text-xl font-bold text-venus-black pt-4">
                O Círculo de VÊNUS está aberto.
              </p>
            </div>
          </div>
          <div className="relative h-[60vh] md:h-auto">
            <img
              src="https://github.com/thebabirosa/images/blob/main/IMAGENS%20PV%20.png?raw=true"
              alt="Vênus Mastermind Experience"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/5" />
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
              <h2 className="font-display text-4xl md:text-6xl text-venus-black uppercase tracking-tight">
                INVESTIMENTO:
              </h2>
              
              <div className="space-y-6">
                <p className="font-body text-xl font-bold text-venus-black leading-tight">
                  Oferta especial de pré-lançamento para as aliadas fundadoras:
                </p>
                
                <p className="font-body text-lg text-venus-black leading-relaxed">
                  Faça sua aplicação e acesse a condição especial de pré-lançamento e torne-se uma aliada fundadora do circulo de vênus.
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
