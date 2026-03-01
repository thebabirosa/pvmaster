import { motion } from "motion/react";
import { landingPageData } from "../data";
import Section from "./Section";

export default function Methodology() {
  const sections = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);
  const { methodology_13, transformation_14, future_vision_15, automatic_demand_16 } = sections;

  return (
    <>
      {/* Automatic Demand (Image 16) */}
      <Section id="demand" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full" fullWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-white">
            <h2 className="font-script text-3xl md:text-4xl mb-2">Escala não é sobre volume,</h2>
            <h2 className="font-display text-3xl md:text-4xl mb-8 uppercase leading-tight max-w-3xl">
              É SOBRE UM MODELO QUE GERA DEMANDA AUTOMÁTICA
            </h2>
            
            <div className="space-y-6 font-condensed text-base md:text-lg text-venus-black">
              <p>A diferença entre vender e construir um negócio é simples:<br/>Vender é curto prazo. É fechar o mês.</p>
              <p>Construir um negócio é criar um sistema que gera lucro no curto, médio e longo prazo.<br/>Com previsibilidade.Sem depender da sua energia todos os dias.</p>
              <p>O Círculo de VÊNUS não ensina estratégias isoladas ou movimentos aleatórios.</p>
              <p>Nós estruturamos um modelo estável, lucrativo e sustentável, desenhado sob medida para o seu negócio, com base em um sistema validado que construiu um ecossistema sólido e escalável.</p>
            </div>
          </div>
          <div className="relative h-[50vh] md:h-full">
            <img
              src="https://github.com/thebabirosa/images/blob/main/12.png?raw=true"
              alt="Automatic Demand"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Journey (Image 26) - Moved from SocialProof as requested */}
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
            <h2 className="font-display text-3xl md:text-5xl text-venus-black uppercase tracking-tight">
              A sua jornada dentro do Círculo de Vênus
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
            <h2 className="font-display text-3xl md:text-5xl text-venus-black uppercase tracking-tight">
              A sua jornada dentro do Círculo de Vênus
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
    </>
  );
}
