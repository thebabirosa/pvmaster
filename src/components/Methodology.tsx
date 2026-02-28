import { motion } from "motion/react";
import { landingPageData } from "../data";
import Section from "./Section";

export default function Methodology() {
  const sections = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);
  const { methodology_13, transformation_14, future_vision_15, automatic_demand_16 } = sections;

  return (
    <>
      {/* Methodology - Spheres (Image 13) - Replaced with "PARA QUEM NÃO É" as requested */}
      <Section id="methodology" className="bg-[#F4F4F4] py-0 md:py-0 px-0 md:px-0 max-w-none w-full" fullWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-[#F4F4F4]">
            <h2 className="font-display text-3xl md:text-4xl mb-4 text-venus-black whitespace-nowrap">PARA QUEM NÃO É:</h2>
            <p className="font-body text-xl md:text-2xl mb-8 text-venus-black">
              Somos uma aceleradora estratégica para líderes que:
            </p>
            
            <div className="space-y-4 max-w-md">
              {[
                "Ainda não validou produto ou modelo de negócio",
                "Está buscando fórmula rápida",
                "Quer aumentar faturamento sem estruturar base",
                "Espera que alguém faça por ela",
                "Quer crescer mantendo o mesmo modelo que já chegou no limite"
              ].map((item, i) => (
                <div key={i} className="border border-venus-black rounded-xl px-6 py-4 bg-white hover:bg-venus-black hover:text-white transition-colors cursor-default shadow-sm">
                  <span className="font-body text-lg md:text-xl font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[50vh] md:h-full">
            <img
              src="https://github.com/thebabirosa/images/blob/main/9.png?raw=true"
              alt="Not for who"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Automatic Demand (Image 16) */}
      <Section id="demand" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full" fullWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-white">
            <h2 className="font-script text-3xl md:text-4xl mb-2">Escala não é sobre volume,</h2>
            <h2 className="font-display text-3xl md:text-4xl mb-8 uppercase leading-tight max-w-3xl">
              É SOBRE UM MODELO QUE E GERA DEMANDA AUTOMÁTICA
            </h2>
            
            <div className="space-y-6 font-condensed text-sm text-venus-black">
              <p>A diferença entre vender e construir negócio é simples:<br/>Vender é curto prazo, é fechar mês.</p>
              <p>Construir negócio é criar um sistema que lucra no curto, médio e longo prazo, sem esforço e sem exaustão.</p>
              <p>O Circulou de VÊNUS não ensina você a aplicar mil estratégias mirabolantes e genéricas.</p>
              <p>Construirmos um modelo estável, sustentável e lucrativo sob medida para o seu negócio, com base em um sistema validado que construir o ecossistema mdn company</p>
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
    </>
  );
}
