/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { UserCheck, ShieldCheck, Cpu, Star, Award, Sparkles, DollarSign, CalendarCheck } from "lucide-react";

interface ProductDiagnosticProps {
  onOrderClick: () => void;
}

export const ProductDiagnostic: React.FC<ProductDiagnosticProps> = ({ onOrderClick }) => {
  return (
    <section
      id="product-section"
      className="relative w-full py-20 md:py-32 bg-brand-neutral text-brand-primary overflow-hidden selection:bg-brand-primary selection:text-brand-neutral"
    >
      {/* Decorative Geometry (Micro-Alineación) */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-brand-primary/10" />
      <div className="absolute left-6 md:left-12 lg:left-24 top-0 bottom-0 w-[1px] bg-brand-primary/5 pointer-events-none" />
      <div className="absolute right-6 md:right-12 lg:right-24 top-0 bottom-0 w-[1px] bg-brand-primary/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4 text-brand-primary/80 uppercase tracking-[0.3em] text-[10px] font-bold">
              <span>El Arte del Lujo Digital</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
              <span>Estudio Boutique</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-primary leading-tight tracking-tight">
              Reclama tu posición. No dejes que un ecosistema <span className="italic">Junior</span> sabotee tu autoridad.
            </h2>
          </div>
          
          <div className="lg:col-span-5">
            <p className="text-sm md:text-base text-brand-primary/80 leading-relaxed font-sans font-light tracking-wide lg:border-l lg:border-brand-primary/25 lg:pl-8">
              La mediocridad técnica de tu web está devaluando tu cotización corporativa. Al final de la sesión, resolveremos el desajuste estético y técnico que le da poder de negociación a tus prospectos.
            </p>
          </div>
        </div>

        {/* Highlight Banner: El Dolor & El Impuesto Invisible */}
        <div className="w-full bg-brand-primary text-brand-white rounded-sm p-8 md:p-12 mb-20 shadow-xl border border-brand-accent/20 relative overflow-hidden">
          {/* Subtle gold brand design mark */}
          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-8">
              <span className="text-[10px] tracking-[0.3em] text-brand-accent uppercase font-semibold block mb-2">✦ EL GANCHO / EL DOLOR SILENCIOSO</span>
              <h3 className="text-2xl md:text-3.5xl font-serif leading-snug mb-4">
                "Estás pagando el <span className="italic text-brand-neutral font-normal">impuesto invisible</span> de la desconfianza."
              </h3>
              <p className="text-xs md:text-sm text-brand-neutral/80 font-light leading-relaxed tracking-wide">
                Operas con una solvencia impecable, pero tus canales digitales transmiten una imagen inmadura. Ese abismo perceptivo hace que tus clientes corporativos te regateen el fee, alarguen decisiones o elijan alternativas de menor calidad simplemente porque se ven "más corporativas".
              </p>
            </div>
            
            <div className="md:col-span-4 flex flex-col items-center md:items-end justify-center">
              <div className="text-center md:text-right border-l md:border-l-0 md:border-r border-brand-accent/30 pl-6 md:pl-0 md:pr-6 py-2">
                <span className="text-[10px] tracking-[0.2em] text-brand-neutral/70 uppercase block">Inversión Única</span>
                <span className="text-4xl md:text-5xl font-serif font-medium text-brand-accent leading-none block my-1">$250 <span className="text-base text-brand-white">USD</span></span>
                <span className="text-[9px] tracking-[0.1em] text-brand-neutral/60 block uppercase">Pago 100% acreditado a futuros desarrollos</span>
              </div>
            </div>
          </div>
        </div>

        {/* core service columns */}
        <h4 className="text-xs uppercase tracking-[0.4em] text-brand-primary font-bold mb-8 flex items-center gap-2">
          <span>Estructura de la Sesión en Vivo</span>
          <span className="h-[1px] w-12 bg-brand-primary/35" />
        </h4>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Card 1: Jheisry */}
          <div className="bg-brand-secondary text-brand-white p-8 rounded-sm shadow-md flex flex-col justify-between border-t-2 border-brand-accent relative">
            <div className="absolute top-4 right-4 text-brand-accent opacity-35">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-brand-accent font-semibold block mb-4">ESTRATEGIA VISUAL</span>
              <h5 className="text-xl font-serif font-semibold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Jheisry</h5>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-neutral/70 block mb-6">Brand Strategist & Alta Costura Visual</span>
              <p className="text-xs text-brand-neutral/80 font-light leading-relaxed tracking-wide mb-6">
                Auditará tu línea estética, paletas, coherencia tipográfica y jerarquía. Desenmascarará por qué tu marca actual atrae leads transaccionales en lugar de clientes de alto valor institucional.
              </p>
            </div>
            <div className="border-t border-brand-white/10 pt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.15em] text-brand-accent">
              <span>Sutileza Editorial</span>
              <span>100% Personalizado</span>
            </div>
          </div>

          {/* Card 2: Gustavo */}
          <div className="bg-brand-secondary text-brand-white p-8 rounded-sm shadow-md flex flex-col justify-between border-t-2 border-brand-accent relative">
            <div className="absolute top-4 right-4 text-brand-accent opacity-35">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-brand-accent font-semibold block mb-4 font-sans">ARQUITECTURA DE SOFTWARE</span>
              <h5 className="text-xl font-serif font-semibold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Gustavo</h5>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-neutral/70 block mb-6">Socio Técnico & Ingeniería Digital</span>
              <p className="text-xs text-brand-neutral/80 font-light leading-relaxed tracking-wide mb-6">
                Escaneará la velocidad de carga de tus servicios, infraestructura, integraciones ocultas y seguridad. Proyectará las rutas de software para hacer tu landing ultra rápida y sin fisuras de código.
              </p>
            </div>
            <div className="border-t border-brand-white/10 pt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.15em] text-brand-accent">
              <span>Craft Técnico</span>
              <span>Engineered to Fly</span>
            </div>
          </div>

          {/* Card 3: CEO (Socio Prospecto) */}
          <div className="bg-brand-primary text-brand-white p-8 rounded-sm shadow-md flex flex-col justify-between border-t-2 border-brand-white relative">
            <div className="absolute top-4 right-4 text-brand-neutral opacity-35">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-brand-accent font-semibold block mb-4">LIDERAZGO & VISIÓN</span>
              <h5 className="text-xl font-serif font-semibold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>El Prospecto (Tú)</h5>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-neutral/70 block mb-6">CEO o Director General</span>
              <p className="text-xs text-brand-neutral/80 font-light leading-relaxed tracking-wide mb-6">
                Aportarás la visión de negocio, las objeciones frecuentes que recibes de los clientes corporativos y tus objetivos de margen y facturación anual. Configuramos la sesión para servir a tus números.
              </p>
            </div>
            <div className="border-t border-brand-white/10 pt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.15em] text-brand-accent">
              <span>Alineación Comercial</span>
              <span>Propulsor Premium</span>
            </div>
          </div>
        </div>

        {/* Deliverables / Qué te llevas */}
        <div className="bg-white/45 rounded-sm p-8 md:p-12 border border-brand-primary/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-[10px] tracking-[0.25em] text-brand-primary/70 uppercase font-medium block mb-2">✦ RESULTADOS DE LA SESIÓN</span>
              <h4 className="text-2xl md:text-3xl font-serif leading-tight text-brand-primary mb-4">
                Lo que recibirás en 1 hora de extrema claridad técnica.
              </h4>
              <p className="text-xs md:text-sm text-brand-primary/70 leading-relaxed font-light">
                No te vendemos humo. Te entregamos un diagnóstico crudo y accionable de tu ecosistema actual, desarrollado por profesionales que conocen el balance exacto entre arte digital y código impecable.
              </p>
            </div>

            <div className="lg:col-span-1" />

            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-brand-primary text-brand-white rounded-full mt-0.5">
                  <span className="text-[10px] font-bold">01</span>
                </div>
                <div>
                  <h5 className="text-sm font-semibold tracking-wide text-brand-primary uppercase">Mapa de Calor y Fugas de Autoridad</h5>
                  <p className="text-xs text-brand-primary/80 leading-relaxed font-light mt-1">Identificación exacta de en qué puntos de tu actual embudo digital se destruye visualmente la confianza y credibilidad de tu marca.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-brand-primary text-brand-white rounded-full mt-0.5">
                  <span className="text-[10px] font-bold">02</span>
                </div>
                <div>
                  <h5 className="text-sm font-semibold tracking-wide text-brand-primary uppercase">Auditoría en Vivo de Infraestructura y HTML</h5>
                  <p className="text-xs text-brand-primary/80 leading-relaxed font-light mt-1">Un análisis crudo de la velocidad, optimización móvil y tiempos de respuesta de tus activos de código.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-brand-primary text-brand-white rounded-full mt-0.5">
                  <span className="text-[10px] font-bold">03</span>
                </div>
                <div>
                  <h5 className="text-sm font-semibold tracking-wide text-brand-primary uppercase">Consultoría Estratégica y Hoja de Ruta</h5>
                  <p className="text-xs text-brand-primary/80 leading-relaxed font-light mt-1">Las especificaciones exactas que debe cumplir tu plataforma de marca para captar y cerrar deals corporativos high-end.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Big CTA targeting section 3 */}
        <div className="mt-16 text-center">
          <button
            onClick={onOrderClick}
            className="px-10 py-5 bg-brand-primary hover:bg-brand-secondary text-brand-white font-sans text-xs uppercase tracking-[0.3em] rounded-sm transition-all duration-300 inline-flex items-center gap-2.5 cursor-pointer shadow-lg hover:shadow-brand-accent/25"
          >
            <span>Agendar Auditoría Especializada</span>
            <CalendarCheck className="w-4 h-4 text-brand-accent" />
          </button>
        </div>

      </div>
    </section>
  );
};
