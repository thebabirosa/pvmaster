import { landingPageData } from "../data";
import Section from "./Section";

export default function Ecosystem() {
  const sections = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);
  const { mentor_bio_18 } = sections;

  return (
    <>
      {/* Mentor Bio (Image 17) - Replaced Ecosystem Logos as requested */}
      <Section id="mentor-bio" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
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
            
            <div className="space-y-6 font-body text-base text-venus-black leading-relaxed">
              <p>Paola Andreucci é estrategista de marcas valiosas, mentora e especialista em posicionamento magnético.</p>
              <p>Atua com marketing digital desde 2014 e empreende no mercado digital desde 2020, tendo contribuído para a geração de mais de R$15 milhões em vendas através do digital, para diversos nichos.</p>
              <p>É fundadora da MDN Company, um ecossistema voltado ao desenvolvimento de mulheres ambiciosas e à aceleração de negócios valiosos, que integra estratégia, mentalidade, ambiência e networking de alto nível.</p>
              <p>Fundadora do Club MDN, lidera o movimento Mulher de Negócios, impactando mulheres em todo o Brasil.</p>
              <p>Paola também é host do MDNcast, palestrante e escritora, e tem como missão libertar mulheres de negócios que buscam mais liberdade, qualidade de vida e prosperidade, construindo riqueza além do lucro.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Full Width Image Section (Image 12) - Added as requested */}
      <Section id="mentor-image-full" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full" fullWidth>
        <div className="w-full">
          <img 
            src="https://github.com/thebabirosa/images/blob/main/C%C3%B3pia%20de%20PV%20MASTERMIND%20(12).png?raw=true" 
            alt="Mentor Full Image"
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>
      </Section>

      {/* Stats/Social Proof (Image 29) - Moved from SocialProof as requested */}
      <Section id="stats-social-proof" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
          <div className="flex flex-col justify-center items-center p-8 md:p-24 bg-white">
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
    </>
  );
}
