/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrandLogo } from "./BrandLogo";
import { Mail, Globe, Shield, Sparkles } from "lucide-react";

interface BrandFooterProps {
  onNavigationClick: (sectionId: string) => void;
}

export const BrandFooter: React.FC<BrandFooterProps> = ({ onNavigationClick }) => {
  return (
    <footer className="bg-[#100e0d] border-t border-brand-secondary/40 py-16 px-6 md:px-12 lg:px-24 text-brand-neutral relative overflow-hidden">
      {/* Decorative Blur Backing */}
      <div className="absolute -left-20 bottom-[-50px] w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-brand-secondary/80">
          
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-6">
            <BrandLogo variant="dark" showTagline={true} />
            <p className="text-xs text-brand-neutral/60 font-light leading-relaxed max-w-sm">
              Fieles creyentes de que el software corporativo de alto nivel no tiene por qué carecer de alma estética. Nivelamos tu ecosistema técnico a tu rango de excelencia ejecutivo.
            </p>
          </div>

          {/* Column 2: Navigation Map */}
          <div className="col-span-1" />

          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-[10px] tracking-[0.3em] uppercase text-brand-white font-bold flex items-center gap-1.5">
              <span>EXPLORA EL ESTUDIO</span>
              <Sparkles className="w-2.5 h-2.5 text-brand-accent" />
            </h5>
            <ul className="space-y-3 text-xs">
              <li>
                <button
                  onClick={() => onNavigationClick("hero-section")}
                  className="hover:text-brand-accent transition-colors duration-300 cursor-pointer"
                >
                  Boutique Principal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigationClick("product-section")}
                  className="hover:text-brand-accent transition-colors duration-300 cursor-pointer"
                >
                  El Diagnóstico de Autoridad
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigationClick("booking-section")}
                  className="hover:text-brand-accent transition-colors duration-300 cursor-pointer"
                >
                  Agendamientos & Calendarios
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Exclusivity */}
          <div className="lg:col-span-4 space-y-4">
            <h5 className="text-[10px] tracking-[0.3em] uppercase text-brand-white font-bold">EXCLUSIVIDAD DIRECTA</h5>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-accent" />
                <a
                  href="mailto:soarityco@gmail.com"
                  className="hover:text-brand-accent transition-colors duration-300"
                >
                  soarityco@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-brand-accent" />
                <span className="text-brand-neutral/60">Socio Visual: Jheisry</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-brand-accent" />
                <span className="text-brand-neutral/60">Socio Técnico: Gustavo</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Base bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-brand-neutral/40">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} S&CO+ SOARITY. TODOS LOS DERECHOS RESERVADOS.</span>
          </div>

          <div className="flex gap-6">
            <span className="hover:text-brand-accent cursor-pointer transition-colors">POLÍTICAS DE PRIVACIDAD</span>
            <span>•</span>
            <span className="hover:text-brand-accent cursor-pointer transition-colors">CONTRATACIONES HIGH-END</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
