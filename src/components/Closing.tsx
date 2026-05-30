/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Video, ClipboardCheck, Clock } from "lucide-react";
import { Section } from "./Layout";

export function Authority() {
  return (
    <Section id="experiencia" className="bg-obsidian">
      <div className="grid lg:grid-cols-2 gap-32 items-center">
        <div className="space-y-10 order-2 lg:order-1">
          <h2 className="text-4xl md:text-5xl leading-tight text-bone">Estrategia, no solo diseño.</h2>
          <div className="space-y-8 text-bone/70 text-lg font-light leading-relaxed">
            <p>
              Soy <span className="text-bone font-medium">Jheisry Aguilera</span>. Llevo 17 años en la trinchera de la estrategia B2B, ayudando a consultores y empresas a alinear su fachada digital con su excelencia operativa.
            </p>
            <p className="italic border-l-2 border-mocha/30 pl-8 py-2">
              "No soy un diseñador que busca 'hacer cosas bonitas'. Soy un estratega que entiende que en el mundo corporativo, la estética es una herramienta de validación de autoridad y mitigación de riesgo para el decisor."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 pt-12 border-t border-mocha/20">
            <div>
              <div className="text-6xl font-display text-mocha leading-none mb-4">17+</div>
              <div className="text-[10px] uppercase tracking-widest text-bone/40 font-bold">Años de Trayectoria</div>
            </div>
            <div>
              <div className="text-6xl font-display text-mocha leading-none mb-4">B2B</div>
              <div className="text-[10px] uppercase tracking-widest text-bone/40 font-bold">Foco Estratégico</div>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="aspect-[4/5] relative overflow-hidden group">
             <img 
               src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" 
               alt="Jheisry Aguilera" 
               className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000"
             />
             <div className="absolute inset-0 border-[20px] border-obsidian/20 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Checkout() {
  const steps = [
    {
      icon: <span className="material-symbols-outlined text-3xl">verified</span>,
      title: "Informe en Video",
      desc: "Grabación personalizada analizando cada punto de fricción de tu ecosistema digital."
    },
    {
      icon: <span className="material-symbols-outlined text-3xl">content_paste_search</span>,
      title: "Checklist de Autoridad",
      desc: "Listado priorizado de errores técnicos, de UX y de posicionamiento estratégico."
    },
    {
      icon: <span className="material-symbols-outlined text-3xl">schedule</span>,
      title: "Entrega en 48-72h",
      desc: "Diagnóstico asíncrono. Sin necesidad de agendar llamadas ni coordinar calendarios."
    }
  ];

  return (
    <Section id="checkout" className="bg-surface-container-low">
      <div className="grid lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-12">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl leading-tight">Detén la fuga de capital estratégico.</h2>
            <p className="text-bone/60 font-light text-lg leading-relaxed max-w-lg">
              Por una inversión única de $97, obtén la claridad necesaria para transformar tu sitio web en una herramienta de cierre corporativo, no en un obstáculo.
            </p>
          </div>

          <ul className="space-y-10">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-6 items-start">
                <div className="text-mocha">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-xl mb-2 font-display">{step.title}</h4>
                  <p className="text-bone/50 text-base font-light leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-bone text-obsidian p-12 md:p-16 relative shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-mocha"></div>
          <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); alert("Redirigiendo a pago seguro..."); }}>
            <div className="space-y-4">
              <label className="text-[10px] uppercase font-bold tracking-widest text-obsidian/40">URL de su web actual</label>
              <input required type="url" placeholder="https://tuempresa.com" className="luxury-input !border-mocha/20 !focus:border-mocha !text-obsidian" />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] uppercase font-bold tracking-widest text-obsidian/40">Sector de su empresa</label>
              <select required className="luxury-input !border-mocha/20 !focus:border-mocha !text-obsidian appearance-none bg-transparent cursor-pointer">
                <option value="">Selecciona un sector</option>
                <option value="tech">Tecnología / SaaS</option>
                <option value="consulting">Consultoría / Servicios</option>
                <option value="industrial">Industrial / Logística</option>
                <option value="finance">Finanzas / Fintech</option>
              </select>
            </div>
            <div className="pt-8">
               <button type="submit" className="w-full bg-mocha text-bone py-6 uppercase tracking-[0.2em] font-bold text-xs hover:brightness-110 active:scale-[0.98] shadow-xl transition-all">
                  Acceder a la Auditoría $97
               </button>
               <p className="text-center text-[10px] uppercase tracking-widest text-obsidian/40 mt-6">
                 Pago seguro vía Stripe. Factura corporativa disponible.
               </p>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
