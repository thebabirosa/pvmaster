import { motion } from "motion/react";
import { landingPageData } from "../data";
import Button from "./ui/Button";

export default function Hero() {
  const { hero_01 } = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">
      {/* Desktop Background Image */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img 
          src="https://github.com/thebabirosa/imagesw/blob/main/001Co%CC%81pia%20de%20PV%20MASTERMIND.jpg?raw=true" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center md:items-start text-center md:text-left pt-12 md:pt-32 pb-8 md:pb-16">
        {/* Desktop Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 hidden md:block"
        >
          <img 
            src="https://github.com/thebabirosa/images/blob/main/idv%20venus%20master%20(1).png?raw=true" 
            alt="O Círculo de Vênus Mastermind" 
            className="w-32 md:w-48 h-auto object-contain brightness-0"
          />
        </motion.div>

        {/* Mobile Main Image (Woman + Logo) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10 md:hidden w-full flex justify-center"
        >
          <img 
            src="https://github.com/thebabirosa/images/blob/main/00000.png?raw=true" 
            alt="O Círculo de Vênus Mastermind" 
            className="w-full max-w-xl h-auto object-contain scale-125"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-4 md:mb-6 max-w-2xl"
        >
          <h1 className="font-script text-5xl md:text-7xl md:text-[5.5rem] text-venus-black leading-none">
            Construa riqueza e<br />legado sem exaustão.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12 max-w-xl"
        >
          <p className="font-body text-lg md:text-2xl text-venus-black leading-relaxed">
            em 12 meses implementando um modelo de negócio escalável que gera liberdade, previsibilidade e realização.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          className="relative group z-20 w-full md:w-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-venus-gold to-[#D4AF37] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <Button 
            href="https://forms.gle/92inSZNrWUS3SQ8r7"
            className="relative w-full md:w-auto !bg-[#A67C00] md:!bg-white !text-white md:!text-venus-black border-none md:border-2 md:border-venus-gold hover:!bg-venus-gold hover:!text-white px-4 sm:px-10 py-4 sm:py-5 text-sm sm:text-base tracking-[0.1em] sm:tracking-[0.2em] font-bold uppercase shadow-2xl transition-all duration-300 rounded-xl md:rounded-none"
          >
            QUERO ME TORNAR ALIADA FUNDADORA
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
