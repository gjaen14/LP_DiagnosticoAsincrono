/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* Background Texture/Gradient */}
      <div className="absolute inset-0 z-0 opacity-40">
         <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#130f08]/80 to-[#130f08]"></div>
         <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale opacity-20"
            alt=""
         />
      </div>

      <div className="max-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10"
          >
            <div className="inline-block text-mocha uppercase tracking-[0.3em] text-[10px] font-bold">
              B2B Executive Consulting
            </div>
            
            <h1 className="text-6xl md:text-7xl leading-[1.1] tracking-tight">
              Diagnóstico Asíncrono de <br />
              <span className="italic font-light block mt-2">Fugas de Autoridad</span>
            </h1>

            <p className="text-lg md:text-xl text-bone/70 leading-relaxed max-w-xl font-light">
              Identifica en menos de 15 minutos por qué tu marca está espantando contratos corporativos. Una auditoría estratégica diseñada para directivos que valoran el tiempo sobre el ruido.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 pt-4 items-center sm:items-start">
              <a href="#checkout" className="luxury-button flex items-center gap-3">
                Solicitar Auditoría por $97
                <ArrowRight size={16} />
              </a>
              <div className="flex items-center gap-4 py-4">
                <div className="w-10 h-px bg-mocha"></div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-bone/40 font-bold">Acceso Inmediato</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 p-4 border border-mocha/20 bg-espresso/40 backdrop-blur-sm grayscale hover:grayscale-0 transition-all duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                alt="Strategic Analysis" 
                className="w-full aspect-[4/3] object-cover opacity-90"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-mocha p-10 shadow-2xl z-20">
              <div className="text-4xl font-display mb-1">$97</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">Inversión Única</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
