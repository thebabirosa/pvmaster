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
            <h2 className="font-display text-3xl md:text-4xl uppercase text-venus-black">SOBRE SUA MENTORA</h2>
            <h2 className="font-script text-5xl md:text-6xl text-venus-black mb-8">Paola Andreucci:</h2>
            
            <div className="space-y-6 font-body text-base text-venus-black leading-relaxed mb-12">
              <p>Paola Andreucci é estrategista de marcas valiosas, mentora e especialista em posicionamento magnético.</p>
              <p>Atua com marketing digital desde 2014 e empreende no mercado digital desde 2020, tendo contribuído para a geração de mais de R$15 milhões em vendas através do digital, para diversos nichos.</p>
              <p>É fundadora da MDN Company, um ecossistema voltado ao desenvolvimento de mulheres ambiciosas e à aceleração de negócios valiosos, que integra estratégia, mentalidade, ambiência e networking de alto nível.</p>
              <p>Fundadora do Club MDN, lidera o movimento Mulher de Negócios, impactando mulheres em todo o Brasil.</p>
              <p>Paola também é host do MDNcast, palestrante e escritora, e tem como missão libertar mulheres de negócios que buscam mais liberdade, qualidade de vida e prosperidade, construindo riqueza além do lucro.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Ecosystem Logos */}
      <Section id="ecosystem-logos" className="relative bg-white py-20 px-6 max-w-none w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://github.com/thebabirosa/images/blob/main/C%C3%B3pia%20de%20PV%20MASTERMIND%20(1).png?raw=true"
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="font-display text-3xl md:text-5xl uppercase text-venus-black mb-12 text-center max-w-4xl leading-tight">
            CONHEÇA O ECOSSISTEMA POR TRÁS DO CÍRCULO DE VÊNUS
          </h2>
          <div className="w-full rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="https://github.com/thebabirosa/images/blob/main/C%C3%B3pia%20de%20PV%20MASTERMIND%20(12).png?raw=true" 
              alt="Ecosystem Logos"
              className="w-full h-auto block"
              referrerPolicy="no-referrer"
            />
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

      {/* Full Screen Image */}
      <Section id="full-screen-image" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full h-screen" fullWidth>
        <img
          src="https://github.com/thebabirosa/images/blob/main/PV%20MASTERMIND.png?raw=true"
          alt="PV Mastermind"
          className="w-full h-full object-cover"
        />
      </Section>

      {/* Stakes (Image 19) - Moved from SocialProof and modified */}
      <Section id="stakes" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full" fullWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-white text-left">
            <h2 className="font-display text-3xl md:text-4xl mb-8 text-venus-black uppercase text-center md:text-left">O QUE ESTÁ EM JOGO?</h2>
            
            <div className="space-y-6 font-body text-lg md:text-xl text-venus-black mb-12 max-w-xl">
              <p>Não é apenas sobre construir riqueza sem exaustão.<br/>Não é apenas sobre construir legado.</p>
              <p>É sobre construir um modelo de negócio capaz de sobreviver e prosperar a próxima ruptura digital.</p>
              <p>A melhor forma de prever o futuro é olhando para o passado.<br/>Nos últimos 10 anos, as ondas digitais mudaram o jogo da economia e dos negócios.</p>
              <p>Quem estava preparado aproveitou, que não ficou para trás.</p>
              <p>Para te preparar para todas as oportunidades que a próxima e maior crise vai gerar, vamos criar um modelo de negócio pautado nas 2 forças que movem o mundo:</p>
              <p className="font-bold text-2xl uppercase">pessoas & tecnologia.</p>
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
    </>
  );
}
