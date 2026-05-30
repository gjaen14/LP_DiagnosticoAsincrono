/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function Footer() {
  return (
    <footer className="py-24 bg-obsidian border-t border-mocha/10">
      <div className="max-container flex flex-col md:flex-row justify-between items-start md:items-center gap-12 text-left">
        <div className="space-y-4">
          <div className="font-display text-2xl tracking-tight">Auditoría <span className="italic font-light">Asíncrona</span></div>
          <p className="text-bone/30 text-[11px] uppercase tracking-widest leading-relaxed">
            © 2026 Jheisry Aguilera. Estrategia de Alta Dirección.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-4 text-[11px] uppercase tracking-[0.2em] font-semibold text-bone/40">
          <a href="#" className="hover:text-mocha transition-colors">Privacidad</a>
          <a href="#" className="hover:text-mocha transition-colors">Términos</a>
          <a href="#" className="hover:text-mocha transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
