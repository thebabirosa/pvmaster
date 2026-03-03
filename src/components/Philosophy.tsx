import { motion } from "motion/react";
import { landingPageData } from "../data";
import Section from "./Section";

export default function Philosophy() {
  const sections = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);
  const { process_evolution_07, feminine_wealth_08, definition_scale_09, mastermind_focus_10 } = sections;

  return (
    <>
      {/* Process Evolution (Image 7) */}
      <Section id="evolution" className="bg-white" fullWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:min-h-screen">
          <div className="flex flex-col justify-center p-8 md:p-24 bg-white relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://github.com/thebabirosa/imgg/blob/main/Co%CC%81pia%20de%20PV%20MASTERMIND.webp?raw=true" 
                alt="background"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10 space-y-12">
              <div className="text-center md:text-left">
                <h2 className="font-display text-3xl md:text-5xl uppercase leading-tight text-venus-black max-w-md">
                  CONSTRUIR RIQUEZA
                </h2>
                <p className="font-script text-4xl md:text-5xl text-venus-black">
                  sem exaustão é:
                </p>
              </div>

              <div className="space-y-4 max-w-xl mx-auto md:mx-0">
                {[
                  "Ter um modelo de negócio que gera lucro no curto, médio e longo prazo",
                  "Construir um produto de escala que não depende 100% da sua agenda",
                  "Criar um ecossistema onde cada oferta prepara o cliente para a próxima",
                  "Transformar autoridade em liderança de movimento",
                  "Construir legado com liberdade, previsibilidade e realização"
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="border-2 border-venus-black rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <p className="font-body text-lg md:text-xl text-venus-black text-center font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative min-h-[50vh] md:min-h-full">
            <img 
              src="https://github.com/thebabirosa/imgg/blob/main/14.jpg?raw=true" 
              alt="Wealth Building" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>



      {/* Definition Scale (Image 9) - Replaced with Three Pillars as requested */}
      <Section id="scale" className="bg-[#F5F5F5] py-12 md:py-32">
        <div className="text-center mb-16 px-4">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl uppercase mb-4 leading-tight max-w-4xl mx-auto">
            O MÉTODO VÊNUS É ESTRUTURADO EM TRÊS PILARES:
          </h2>
          <p className="font-script text-3xl sm:text-4xl md:text-5xl text-venus-black">Como construímos liberdade, lucro e previsibilidade</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {[
            { 
              title: "1. MARCA FORTE", 
              img: "https://github.com/thebabirosa/images/blob/main/MASTER%20VENUS.png?raw=true", 
              desc: "marca pessoal, criação de movimento, posicionamento, magnetismo & poder pessoal" 
            },
            { 
              title: "2. ECOSSISTEMA LUCRATIVO", 
              img: "https://github.com/thebabirosa/images/blob/main/MASTER%20VENUS%20(1).png?raw=true", 
              desc: "Ecossistemas, esteira de produtos, comunidades & eventos presenciais" 
            },
            { 
              title: "3. ESCALA E LEGADO", 
              img: "https://github.com/thebabirosa/images/blob/main/MASTER%20VENUS%20(2).png?raw=true", 
              desc: "marketing vibracional, vendas sistêmicas, funil de vendas, canais de aquisição, tecnologia e ia" 
            }
          ].map((pillar, i) => (
            <div key={i} className="bg-white border border-venus-black p-8 text-center flex flex-col items-center">
              <h3 className="font-display text-3xl mb-6 uppercase tracking-tight">{pillar.title}</h3>
              
              <div className="flex items-center w-full gap-4 mb-6">
                <div className="h-px bg-venus-black flex-1 opacity-50" />
                <div className="flex gap-1">
                  {[...Array(7)].map((_, dotIdx) => (
                    <div 
                      key={dotIdx} 
                      className={`w-1.5 h-1.5 rounded-full border border-venus-black ${dotIdx === i ? 'bg-venus-black' : 'bg-transparent'}`} 
                    />
                  ))}
                </div>
                <div className="h-px bg-venus-black flex-1 opacity-50" />
              </div>

              <div className="w-full aspect-[16/9] overflow-hidden mb-6">
                <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover" />
              </div>
              
              <p className="font-body text-lg text-venus-black leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Mastermind Focus (Image 10) - Replaced with Magnetism & Personal Power */}
      <Section id="focus" className="relative h-auto md:min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-20" fullWidth>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://github.com/thebabirosa/imgg/blob/main/Co%CC%81pia%20de%20PV%20MASTERMIND.webp?raw=true" 
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl uppercase tracking-tight text-venus-black mb-2 whitespace-normal md:whitespace-nowrap">
              MAGNETISMO & PODER PESSOAL
            </h2>
            <p className="font-script text-4xl md:text-5xl text-venus-black">
              Magnetismo é uma decisão sustentada.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-0 mb-16">
            {[
              "identidade",
              "posicionamento",
              "comunicação",
              "sustentar"
            ].map((text, i) => (
              <div 
                key={i} 
                className={`
                  w-48 h-48 md:w-64 md:h-64 rounded-full border border-venus-black 
                  flex items-center justify-center bg-white/10 backdrop-blur-[2px]
                  -mt-6 first:mt-0 md:mt-0 md:-ml-12 md:first:ml-0
                  transition-transform hover:scale-105 hover:z-20
                `}
              >
                <span className="font-script text-3xl md:text-4xl text-venus-black">
                  {text}
                </span>
              </div>
            ))}
          </div>

          <p className="font-body text-xl md:text-2xl text-venus-black max-w-3xl mx-auto font-medium">
            O Magnetismo nasce quando você para de agradar e sustenta o seu poder pessoal.
          </p>
        </div>
      </Section>
    </>
  );
}
