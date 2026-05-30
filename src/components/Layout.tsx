/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Coffee } from "lucide-react";
import { ReactNode } from "react";

export function Navbar() {
  return (
    <nav className="w-full z-50 bg-transparent h-20 transition-all">
      <div className="max-container h-full flex justify-between items-center">
        <div className="font-display text-2xl tracking-tight text-bone">
          Auditoría <span className="italic font-light">Asíncrona</span>
        </div>
        
        <div className="hidden md:flex gap-10 items-center">
          <a href="#problema" className="text-[10px] uppercase font-semibold tracking-[0.2em] text-bone/60 hover:text-bone transition-colors">El Problema</a>
          <a href="#solucion" className="text-[10px] uppercase font-semibold tracking-[0.2em] text-bone/60 hover:text-bone transition-colors">La Solución</a>
          <a href="#experiencia" className="text-[10px] uppercase font-semibold tracking-[0.2em] text-bone/60 hover:text-bone transition-colors">Experiencia</a>
          <a href="#checkout" className="bg-mocha px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-semibold hover:brightness-110 transition-all">Comenzar</a>
        </div>

        <button className="md:hidden text-bone p-2">
          <span className="text-2xl">☰</span>
        </button>
      </div>
    </nav>
  );
}

export function Section({ children, className = "", id = "" }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`py-section-gap ${className}`}>
      <div className="max-container">
        {children}
      </div>
    </section>
  );
}
