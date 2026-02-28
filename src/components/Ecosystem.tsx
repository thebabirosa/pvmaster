import { landingPageData } from "../data";
import Section from "./Section";

export default function Ecosystem() {
  const sections = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);
  const { mentor_bio_18 } = sections;

  return (
    <>
      {/* Mentor Bio (Image 17) - Replaced Ecosystem Logos as requested */}
      <Section id="mentor-bio" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:min-h-screen">
          <div className="relative h-[50vh] md:h-auto md:min-h-screen">
            <img
              src="https://github.com/thebabirosa/images/blob/main/13.png?raw=true"
              alt="Paola Andreucci"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-12 md:p-24 bg-white">
            <h2 className="font-display text-3xl md:text-4xl uppercase text-venus-black whitespace-nowrap">SOBRE SUA MENTORA</h2>
            <h2 className="font-script text-5xl md:text-6xl text-venus-black mb-8 whitespace-nowrap">Paola Andreucci:</h2>
            
            <div className="space-y-6 font-body text-base text-venus-black leading-relaxed mb-12">
              <p>Paola Andreucci é estrategista de marcas valiosas, mentora e especialista em posicionamento magnético.</p>
              <p>Atua com marketing digital desde 2014 e empreende no mercado digital desde 2020, tendo contribuído para a geração de mais de R$15 milhões em vendas através do digital, para diversos nichos.</p>
              <p>É fundadora da MDN Company, um ecossistema voltado ao desenvolvimento de mulheres ambiciosas e à aceleração de negócios valiosos, que integra estratégia, mentalidade, ambiência e networking de alto nível.</p>
              <p>Fundadora do Club MDN, lidera o movimento Mulher de Negócios, impactando mulheres em todo o Brasil.</p>
              <p>Paola também é host do MDNcast, palestrante e escritora, e tem como missão libertar mulheres de negócios que buscam mais liberdade, qualidade de vida e prosperidade, construindo riqueza além do lucro.</p>
            </div>

            <div className="w-full mt-auto">
              <img 
                src="https://github.com/thebabirosa/images/blob/main/C%C3%B3pia%20de%20PV%20MASTERMIND%20(12).png?raw=true" 
                alt="Mentor Full Image"
                className="w-full h-auto block"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Stats/Social Proof (Image 29) - Moved from SocialProof as requested */}
      <Section id="stats-social-proof" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
          <div className="flex flex-col justify-center items-center p-8 md:p-24 bg-white">
            <div className="w-full max-w-lg mb-10 text-center md:text-left">
              <h2 className="font-display text-3xl md:text-4xl uppercase text-venus-black leading-tight">
                Números que sustentam o <br className="hidden md:block" />
                <span className="font-script text-4xl md:text-5xl normal-case">"The MDN & Co"</span>
              </h2>
            </div>
            <div className="w-full max-w-lg space-y-4">
              {[
                { top: "+600 PARTICIPANTES E MILHARES DE CONEXÕES", bottom: "nos eventos presenciais" },
                { top: "+50 HORAS ENTREGUES", bottom: "masterclass online" },
                { top: "+40 HORAS DIVULGANDO", bottom: "podcast" },
                { top: "+5 MILHÕES EM", bottom: "negócios feitos" }
              ].map((item, i) => (
                <div key={i} className="border border-venus-black rounded-2xl p-6 bg-white text-center shadow-sm">
                  <p className="font-display text-lg md:text-xl text-venus-black uppercase tracking-tight leading-tight">
                    {item.top}
                  </p>
                  <p className="font-script text-3xl md:text-4xl text-venus-black mt-1">
                    {item.bottom}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white flex items-center justify-center p-8 md:p-12 min-h-[70vh] md:min-h-screen">
            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[40px] overflow-hidden shadow-2xl border-8 border-black/5">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Q277sMT96OQ?autoplay=1&mute=1&loop=1&playlist=Q277sMT96OQ&controls=0&rel=0" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
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
    </>
  );
}
