import React from "react";

export function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center pt-12 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.15] bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity grayscale"></div>
      
      {/* Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-obsidian/60 to-obsidian"></div>

      <div className="max-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start pt-10">
          <h1 className="text-5xl md:text-6xl lg:text-[76px] leading-[1.05] mb-8 font-display">
            Diagnóstico <br />
            Asíncrono de <br />
            <span className="italic font-light">Fugas de <br/> Autoridad</span>
          </h1>
          <p className="text-base md:text-lg max-w-md mb-12 opacity-70 font-sans leading-relaxed text-bone">
            Identifica en menos de 15 minutos por qué tu marca está espantando contratos corporativos. Una auditoría estratégica diseñada para directivos que valoran el tiempo sobre el ruido.
          </p>
          
          <div className="flex items-center gap-6">
            <button className="bg-mocha text-bone px-10 py-5 uppercase tracking-[0.2em] text-[10px] font-semibold transition-all hover:brightness-110 flex items-center justify-between min-w-[280px]">
              <span className="text-left leading-tight">SOLICITAR AUDITORÍA POR <br/> $97</span>
              <span className="material-symbols-outlined ml-4">arrow_forward</span>
            </button>
            <div className="flex flex-col uppercase tracking-[0.2em] text-[10px] text-bone/50 border-l border-mocha/30 pl-6">
              <span>Acceso</span>
              <span>Inmediato</span>
            </div>
          </div>
        </div>

        {/* Right Content - Dashboard Visual */}
        <div className="relative w-full flex justify-end mt-20 lg:mt-0">
          <div className="relative w-full max-w-[550px] border border-[#2a241c] bg-[#0a0806] p-2">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
              alt="Dashboard Analytics" 
              className="w-full h-[350px] object-cover opacity-80 mix-blend-luminosity grayscale"
            />
            {/* Floating Price Tag */}
            <div className="absolute -bottom-10 -left-10 bg-[#4c3628] p-8 w-[200px] h-[160px] shadow-2xl flex flex-col justify-center items-center text-center">
              <span className="font-display text-5xl mb-2">$97</span>
              <span className="text-[9px] uppercase tracking-[0.2em] opacity-80">INVERSIÓN ÚNICA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
