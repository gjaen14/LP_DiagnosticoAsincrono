/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { EyeOff, Zap, ShieldAlert } from "lucide-react";
import { Section } from "./Layout";

export function Problem() {
  const problems = [
    {
      icon: <EyeOff className="text-mocha opacity-80" size={36} />,
      title: "Percepción 'Junior'",
      desc: "Incluso si eres líder en tu campo, un diseño amateur proyecta falta de capacidad para manejar presupuestos de alto nivel."
    },
    {
      icon: <Zap className="text-mocha opacity-80" size={36} />,
      title: "Fricción Técnica",
      desc: "La navegación confusa actúa como una barrera psicológica insalvable para directivos con poco tiempo y alta exigencia."
    },
    {
      icon: <ShieldAlert className="text-mocha opacity-80" size={36} />,
      title: "Mensaje Diluido",
      desc: "Hablas de características cuando ellos buscan ROI y Mitigación de Riesgo. El desajuste de tono es letal en el mercado B2B."
    }
  ];

  return (
    <Section id="problema" className="bg-obsidian">
      <div className="text-center max-w-2xl mx-auto mb-24 space-y-8">
        <h2 className="text-4xl md:text-5xl leading-tight">
          Tu fachada digital te está costando más de lo que crees.
        </h2>
        <div className="mocha-divider mx-auto w-24"></div>
        <p className="text-bone/60 font-light text-lg">
          La fricción invisible en tu presencia digital destruye la confianza antes de la primera llamada.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {problems.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="bento-card group space-y-8"
          >
            <div className="mb-4">
               {p.icon}
            </div>
            <h3 className="text-2xl">{p.title}</h3>
            <p className="text-bone/50 text-base font-light leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Solution() {
  const pillars = [
    {
      num: "01",
      title: "Auditoría de Fugas",
      desc: "Rastreamos los puntos exactos donde tus prospectos abandonan el embudo por falta de señales de confianza."
    },
    {
      num: "02",
      title: "Estatus de Percepción",
      desc: "Evaluamos si tu narrativa visual y textual comunica el valor real de tu ticket o si te posiciona por precio."
    },
    {
      num: "03",
      title: "Hoja de Ruta Táctica",
      desc: "Recibes pasos accionables y priorizados para corregir las deficiencias y elevar tu autoridad en el mercado."
    }
  ];

  return (
    <div id="solucion" className="bg-bone text-obsidian py-32">
      <div className="max-container">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
          <div className="max-w-xl space-y-6">
            <div className="text-mocha uppercase tracking-[0.3em] text-[10px] font-bold">Metodología Propietaria</div>
            <h2 className="text-4xl md:text-5xl leading-tight">Análisis de precisión quirúrgica.</h2>
          </div>
          <p className="text-obsidian/60 italic max-w-xs border-l border-mocha/30 pl-8 text-sm leading-relaxed">
            Una revisión exhaustiva que destila 17 años de experiencia en estrategia corporativa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-mocha/10">
          {pillars.map((p, i) => (
            <div key={i} className="bg-bone p-16 relative overflow-hidden group">
              <span className="absolute top-8 right-8 text-7xl font-display text-mocha/5 select-none">{p.num}</span>
              <h3 className="text-2xl mb-8 pt-4">{p.title}</h3>
              <p className="text-obsidian/70 text-base font-light leading-relaxed mb-12">{p.desc}</p>
              <div className="w-full h-px bg-mocha/10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
