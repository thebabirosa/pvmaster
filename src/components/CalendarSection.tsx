import React from 'react';

// 1. Configuração dos Dados (Imagens e Textos)
const EVENTS = [
  { 
    title: "Fevereiro", 
    text: "Imersão mulher de negócios\nO Renascimento", 
    image: "https://metagenciadigital.com.br/wp-content/uploads/2026/02/5-1-scaled.jpg" 
  },
  { 
    title: "Março", 
    text: "MDN experience especial\ndia da mulher em alto mar", 
    image: "https://metagenciadigital.com.br/wp-content/uploads/2026/02/6-1-scaled.jpg" 
  },
  { 
    title: "Abril", 
    text: "MDN experience - business and wild.\nPasseio a cavalo na praia.", 
    image: "https://metagenciadigital.com.br/wp-content/uploads/2026/02/7-1-scaled.jpg" 
  },
  { 
    title: "Maio", 
    text: "IMERSÃO MDN - 2 anos de club", 
    image: "https://metagenciadigital.com.br/wp-content/uploads/2026/02/8-1-scaled.jpg" 
  },
  { 
    title: "Junho", 
    text: "MDN experience - Business & wine.\nPintura em taça e vinho", 
    image: "https://metagenciadigital.com.br/wp-content/uploads/2026/02/Design-sem-nome-1-1.jpg" 
  },
  { 
    title: "Julho", 
    text: "• MDN experience - Business\n& Wellness para empresárias", 
    image: "https://metagenciadigital.com.br/wp-content/uploads/2026/02/10-scaled.jpg" 
  },
  { 
    title: "Setembro", 
    text: "• Café de Negócios", 
    image: "https://metagenciadigital.com.br/wp-content/uploads/2026/02/11-scaled.jpg" 
  },
  { 
    title: "Outubro", 
    text: "Viagem para europa", 
    image: "https://metagenciadigital.com.br/wp-content/uploads/2026/02/12-scaled.jpg" 
  },
  { 
    title: "Novembro", 
    text: "Sunset Club MDN", 
    image: "https://metagenciadigital.com.br/wp-content/uploads/2026/02/13-scaled.jpg" 
  }
];

export const CalendarSection: React.FC = () => {
  return (
    <section 
      id="eventos" 
      className="py-24 px-6 overflow-hidden relative"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://github.com/thebabirosa/imagesw/blob/main/Co%CC%81pia%20de%20PV%20MASTERMIND%20(1).jpg?raw=true" 
          alt="Calendar Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-[1160px] mx-auto relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-anton uppercase tracking-tight mb-6 text-venus-black">
            CALENDÁRIO 2026<br />ENCONTROS PRESENCIAIS
          </h2>
        </div>

        {/* Grid do Calendário */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {EVENTS.map((item, idx) => (
            <div key={idx} className="flex flex-col group h-full transition-transform duration-300 hover:-translate-y-1">
              
              {/* Imagem */}
              <div className="relative aspect-video rounded-t-[20px] md:rounded-t-[24px] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>

              {/* Texto */}
              <div className="bg-[#DEDEDA]/50 backdrop-blur-sm border-x border-b border-[#1A3438]/10 p-5 md:p-6 rounded-b-[20px] md:rounded-b-[24px] flex-grow flex flex-col justify-start">
                <h4 className="font-anton text-venus-black text-xl md:text-2xl lg:text-[28px] uppercase tracking-tight leading-none mb-2">
                  {item.title}
                </h4>
                <p className="text-venus-black text-[13px] md:text-sm lg:text-[15px] leading-tight font-bold opacity-80 whitespace-pre-line">
                  {item.text}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Nota de Rodapé */}
        <div className="mt-8 text-center max-w-5xl mx-auto">
          <p className="text-[11px] md:text-xs leading-relaxed italic text-venus-black/60">
            Essa é uma previsão anual de eventos. A confirmação oficial das datas será feita com os estabelecimentos e divulgada com 20 a 30 dias de antecedência de cada encontro. As datas podem sofrer alterações conforme a disponibilidade dos locais e a relevância dos temas para as aliadas. Este planejamento está sujeito a ajustes sem aviso prévio, sempre com o objetivo de oferecer a melhor experiência possível às participantes. Os eventos podem ser cancelados caso não alcancem o número mínimo de participantes, hipótese em que haverá o reembolso integral do valor.
          </p>
        </div>

      </div>
    </section>
  );
};
