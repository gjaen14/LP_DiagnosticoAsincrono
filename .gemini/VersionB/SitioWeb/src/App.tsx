/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from "react";
import { HeaderHero } from "./components/HeaderHero";
import { ProductDiagnostic } from "./components/ProductDiagnostic";
import { BookingSection } from "./components/BookingSection";
import { BrandFooter } from "./components/BrandFooter";
import { BookingDetails } from "./types";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, X } from "lucide-react";

export default function App() {
  const [lastBooking, setLastBooking] = useState<BookingDetails | null>(null);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  // Smooth Navigation Handler
  const scrollTo = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // Secure booking event trigger
  const handleBookingCompleted = (booking: BookingDetails) => {
    setLastBooking(booking);
    setShowNotification(true);
    // Auto pull-down toast after 8 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 8000);
  };

  return (
    <div className="relative min-h-screen font-sans bg-brand-primary text-brand-white antialiased overflow-x-hidden selection:bg-brand-accent selection:text-brand-primary">
      
      {/* Dynamic Exclusivity Banner overlaying at the top. Fine luxury header detail */}
      <div className="bg-[#12100f] text-brand-neutral border-b border-brand-secondary/40 py-2.5 px-4 text-center text-[10px] tracking-[0.3em] uppercase font-sans flex items-center justify-center gap-3 relative z-50">
        <span className="text-brand-accent">✦</span>
        <span>S&CO+ ALTA COSTURA DIGITAL: SÓLO SE ADMITEN 3 AUDITORÍAS CORPORATIVAS ESTA SEMANA</span>
        <span className="text-brand-accent">✦</span>
      </div>

      {/* Elegant Dark visual frame wrapping the boutique experience strictly according to moodboard */}
      <div className="min-h-screen flex flex-col border-[12px] border-brand-secondary">
        {/* SECTION 1: HEADER - HERO */}
        <HeaderHero
          onOrderClick={() => scrollTo("booking-section")}
          onLearnMoreClick={() => scrollTo("product-section")}
        />

        {/* SECTION 2: PRODUCTO - DIAGNÓSTICO */}
        <ProductDiagnostic 
          onOrderClick={() => scrollTo("booking-section")} 
        />

        {/* SECTION 3: CONTACTENOS - CITA AGENDAR */}
        <BookingSection 
          onSuccess={handleBookingCompleted} 
        />

        {/* FOOTER */}
        <BrandFooter 
          onNavigationClick={scrollTo} 
        />
      </div>

      {/* ELEGANT LUXURY NOTIFICATION TOAST */}
      <AnimatePresence>
        {showNotification && lastBooking && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-brand-secondary border border-brand-accent/40 rounded-sm shadow-2xl p-4 text-brand-white backdrop-blur-md"
          >
            <div className="flex items-start gap-3">
              <div className="p-1.5 bg-brand-accent/10 border border-brand-accent/20 rounded-full text-brand-accent">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-brand-accent uppercase tracking-[0.2em]">Sesión Bloqueada</span>
                  <button 
                    onClick={() => setShowNotification(false)}
                    className="text-brand-neutral/40 hover:text-brand-white transition-colors cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <h4 className="text-xs font-semibold tracking-wide font-sans text-brand-white">
                  {lastBooking.companyName}
                </h4>
                <p className="text-[10px] text-brand-neutral/80 leading-relaxed font-light">
                  Estimado/a <strong className="text-brand-white font-medium">{lastBooking.ceoName}</strong>, tu garantía de pago para la hora de auditoría fue validada con éxito.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

