/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookingDetails, TimeSlot } from "../types";
import { 
  Calendar, 
  Clock, 
  CreditCard, 
  CheckCircle2, 
  HelpCircle, 
  Smartphone, 
  Briefcase, 
  User, 
  Mail, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles,
  Lock,
  Download
} from "lucide-react";

interface BookingSectionProps {
  onSuccess: (booking: BookingDetails) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ onSuccess }) => {
  // Booking Wizard State
  const [step, setStep] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  
  // Form coordinates
  const [ceoName, setCeoName] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [painPoint, setPainPoint] = useState<string>("");
  
  // Payment Simulator coordinates
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardHolder, setCardHolder] = useState<string>("");
  const [cardExpiry, setCardExpiry] = useState<string>("");
  const [cardCvv, setCardCvv] = useState<string>("");
  const [isPaying, setIsPaying] = useState<boolean>(false);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingDetails | null>(null);

  // Helper: Generate next 7 business days starting from May 27, 2026 (skipping weekends)
  const generateBusinessDays = () => {
    const days = [];
    let startLocalDate = new Date(2026, 4, 27); // May 27, 2026

    while (days.length < 7) {
      const dayOfWeek = startLocalDate.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Skip Saturday (6) and Sunday (0)
        const dateString = startLocalDate.toLocaleDateString("es-ES", {
          weekday: "long",
          day: "numeric",
          month: "long",
        });
        const isoString = startLocalDate.toISOString().split("T")[0];
        days.push({ readable: dateString, value: isoString });
      }
      startLocalDate.setDate(startLocalDate.getDate() + 1);
    }
    return days;
  };

  const businessDays = generateBusinessDays();

  // Simulated daily executive hours list (S&CO hours are exclusive)
  const timeSlots: TimeSlot[] = [
    { time: "09:00 AM (EST)", available: true },
    { time: "11:00 AM (EST)", available: true },
    { time: "02:00 PM (EST)", available: false }, // Simulated booked slot to add social exclusivity
    { time: "04:00 PM (EST)", available: true },
    { time: "06:00 PM (EST)", available: true },
  ];

  // Formatting Card Numbers for simulated lux Card UI
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/\D/g, "");
    if (raw.length > 16) raw = raw.slice(0, 16);
    const groups = raw.match(/.{1,4}/g);
    setCardNumber(groups ? groups.join(" ") : raw);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/\D/g, "");
    if (raw.length > 4) raw = raw.slice(0, 4);
    if (raw.length >= 2) {
      setCardExpiry(raw.slice(0, 2) + "/" + raw.slice(2));
    } else {
      setCardExpiry(raw);
    }
  };

  // Step Navigations
  const handleNextStep = () => {
    if (step === 1 && (!selectedDate || !selectedTimeSlot)) {
      alert("Por favor seleccione un día y una hora ejecutiva para continuar.");
      return;
    }
    if (step === 2) {
      if (!ceoName || !companyName || !email) {
        alert("Por favor rellene el nombre del CEO, la empresa y el email corporativo.");
        return;
      }
      // Simple email match
      if (!email.includes("@")) {
        alert("Suministre un email corporativo válido.");
        return;
      }
    }
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  // Launch simulated check out
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cardNumber || !cardHolder || !cardExpiry || !cardCvv) {
      alert("Suministre todos los datos de su tarjeta para asegurar el espacio.");
      return;
    }
    
    setIsPaying(true);

    // Simulated luxury payment gateway speed
    setTimeout(() => {
      const generatedBooking: BookingDetails = {
        id: "SCO-" + Math.floor(Math.random() * 900000 + 100000),
        ceoName,
        companyName,
        email,
        selectedDate,
        selectedTimeSlot,
        whatsapp,
        painPoint,
        paymentMethod: "stripe_simulation",
        status: "confirmed",
      };
      
      setConfirmedBooking(generatedBooking);
      setIsPaying(false);
      setStep(4);
      onSuccess(generatedBooking);
    }, 2500);
  };

  // Helper to translate Date to elegant display
  const getReadableSelectedDate = () => {
    const dayObj = businessDays.find((d) => d.value === selectedDate);
    return dayObj ? dayObj.readable : selectedDate;
  };

  return (
    <section
      id="booking-section"
      className="relative w-full py-20 md:py-32 bg-brand-primary text-brand-white selection:bg-brand-accent selection:text-brand-primary overflow-hidden"
    >
      {/* Dynamic Background subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 bottom-0 w-[1px] bg-brand-secondary/40" />
        <div className="absolute right-6 md:right-12 lg:left-24 top-0 bottom-0 w-[1px] bg-brand-secondary/40" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-brand-accent/20 bg-brand-secondary/60 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-brand-accent font-medium font-sans">
              Sistema de Reserva de Alta Costura
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-4 text-brand-white">
            Agendar <span className="italic">Diagnóstico de Autoridad</span>
          </h2>
          <p className="text-xs md:text-sm text-brand-neutral/80 max-w-lg mx-auto font-light tracking-wide leading-relaxed">
            Selecciona tu sesión ejecutiva de una hora. El fee de $250 USD se descuenta al contratar tu plan de consultoría.
          </p>
        </div>

        {/* Progress Timeline Tracker */}
        {step < 4 && (
          <div className="flex items-center justify-between max-w-md mx-auto mb-12">
            {[
              { num: 1, label: "Fecha y Hora" },
              { num: 2, label: "Director o CEO" },
              { num: 3, label: "Garantía de Pago" },
            ].map((s) => (
              <div key={s.num} className="flex flex-col items-center flex-grow relative">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-sans text-xs font-semibold z-10 transition-all duration-500 border ${
                    step >= s.num
                      ? "bg-brand-accent text-brand-primary border-brand-accent shadow-md shadow-brand-accent/20"
                      : "bg-brand-secondary text-brand-neutral/60 border-brand-secondary"
                  }`}
                >
                  {s.num}
                </div>
                <span
                  className={`text-[9px] uppercase tracking-wider mt-2 transition-colors duration-500 ${
                    step >= s.num ? "text-brand-accent font-medium" : "text-brand-neutral/40"
                  }`}
                >
                  {s.label}
                </span>
                
                {/* Horizontal line between stages */}
                {s.num < 3 && (
                  <div
                    className="absolute top-[15px] left-[50%] right-[-50%] h-[1.5px] z-0 transition-all duration-500"
                    style={{
                      backgroundColor: step > s.num ? "#B39E8C" : "#251E1A",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* WIZARD CARD WRAPPER */}
        <div className="bg-brand-secondary/60 backdrop-blur-md rounded-sm border border-brand-secondary p-6 md:p-10 shadow-2xl relative">
          
          <AnimatePresence mode="wait">
            
            {/* STEP 1: DATE & TIME */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-sm font-semibold text-brand-accent uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> 1. Elige la Fecha del Encuentro
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {businessDays.map((day) => (
                      <button
                        key={day.value}
                        type="button"
                        onClick={() => setSelectedDate(day.value)}
                        className={`p-4 rounded-sm border text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-[100px] cursor-pointer group ${
                          selectedDate === day.value
                            ? "bg-brand-accent text-brand-primary border-brand-accent"
                            : "bg-brand-primary/40 border-brand-secondary hover:border-brand-accent/50 text-brand-white"
                        }`}
                      >
                        <span className="text-[10px] uppercase tracking-widest font-mono opacity-80">
                          Mayo / Junio 2026
                        </span>
                        <span className="text-xs font-serif font-semibold tracking-wide capitalize mt-2 h-10 leading-tight">
                          {day.readable}
                        </span>
                        {selectedDate === day.value && (
                          <div className="absolute right-2 bottom-2 text-brand-primary">
                            <span className="text-xs">✦</span>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-brand-accent uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> 2. Elige el Horario Ejecutivo
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        type="button"
                        disabled={!slot.available}
                        onClick={() => setSelectedTimeSlot(slot.time)}
                        className={`p-3 rounded-sm border text-center text-xs tracking-wider transition-all duration-300 relative group cursor-pointer ${
                          !slot.available
                            ? "bg-brand-primary/10 border-brand-secondary/40 text-brand-neutral/30 cursor-not-allowed line-through"
                            : selectedTimeSlot === slot.time
                            ? "bg-brand-accent text-brand-primary border-brand-accent font-medium"
                            : "bg-brand-primary/40 border-brand-secondary hover:border-brand-accent/50 text-brand-white"
                        }`}
                      >
                        {slot.time}
                        {slot.available && selectedTimeSlot !== slot.time && (
                          <span className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        )}
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] text-brand-neutral/60 font-mono mt-3 text-right">
                    *Zona horaria preestablecida: Hora Estándar del Este (EST)
                  </p>
                </div>

                <div className="flex justify-end pt-4 border-t border-brand-secondary/60">
                  <button
                    onClick={handleNextStep}
                    disabled={!selectedDate || !selectedTimeSlot}
                    className={`px-6 py-3.5 rounded-sm font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                      selectedDate && selectedTimeSlot
                        ? "bg-brand-accent hover:bg-brand-white text-brand-primary font-bold shadow-md shadow-brand-accent/15"
                        : "bg-brand-secondary text-brand-neutral/40 border border-brand-secondary cursor-not-allowed"
                    }`}
                  >
                    Detalles del CEO <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: DETAILS FORM */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between pb-4 border-b border-brand-secondary/60">
                  <h3 className="text-sm font-semibold text-brand-accent uppercase tracking-[0.2em] flex items-center gap-2">
                    <User className="w-4 h-4" /> credenciales corporativas
                  </h3>
                  <button
                    onClick={handlePrevStep}
                    className="text-xs text-brand-neutral/60 hover:text-brand-white transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-3" /> Volver a Horarios
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase text-brand-neutral/80 block font-medium">Nombre Completo del CEO *</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-3.5 text-brand-neutral/50"><User className="w-4 h-4" /></span>
                      <input
                        type="text"
                        required
                        value={ceoName}
                        onChange={(e) => setCeoName(e.target.value)}
                        placeholder="Ej. Gustavo de León"
                        className="w-full bg-brand-primary/40 border border-brand-secondary rounded-sm pl-11 pr-4 py-3 text-xs md:text-sm text-brand-white placeholder-brand-neutral/30 focus:outline-none focus:border-brand-accent transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Company Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase text-brand-neutral/80 block font-medium">Nombre de la Empresa / Marca *</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-3.5 text-brand-neutral/50"><Briefcase className="w-4 h-4" /></span>
                      <input
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Ej. Luxury Real Estate S.A."
                        className="w-full bg-brand-primary/40 border border-brand-secondary rounded-sm pl-11 pr-4 py-3 text-xs md:text-sm text-brand-white placeholder-brand-neutral/30 focus:outline-none focus:border-brand-accent transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase text-brand-neutral/80 block font-medium">Email Corporativo *</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-3.5 text-brand-neutral/50"><Mail className="w-4 h-4" /></span>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ceo@tuempresa.com"
                        className="w-full bg-brand-primary/40 border border-brand-secondary rounded-sm pl-11 pr-4 py-3 text-xs md:text-sm text-brand-white placeholder-brand-neutral/30 focus:outline-none focus:border-brand-accent transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* WhatsApp Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase text-brand-neutral/80 block font-medium">WhatsApp Directo (Opcional)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-3.5 text-brand-neutral/50"><Smartphone className="w-4 h-4" /></span>
                      <input
                        type="tel"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="+52 1 55 ..."
                        className="w-full bg-brand-primary/40 border border-brand-secondary rounded-sm pl-11 pr-4 py-3 text-xs md:text-sm text-brand-white placeholder-brand-neutral/30 focus:outline-none focus:border-brand-accent transition-colors duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* PainPoint Textarea */}
                <div className="space-y-2 pt-2">
                  <label className="text-[10px] tracking-widest uppercase text-brand-neutral/80 block font-medium">¿Cuál consideras que es el "impuesto invisible" que estás pagando hoy?</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3.5 text-brand-neutral/50"><HelpCircle className="w-4 h-4" /></span>
                    <textarea
                      value={painPoint}
                      onChange={(e) => setPainPoint(e.target.value)}
                      rows={3}
                      placeholder="Ej: Tengo competidores que saben hacer la mitad que yo, pero su empaque visual y web se ven mucho más premium..."
                      className="w-full bg-brand-primary/40 border border-brand-secondary rounded-sm pl-11 pr-4 py-3 text-xs md:text-sm text-brand-white placeholder-brand-neutral/30 focus:outline-none focus:border-brand-accent transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Summary bar */}
                <div className="bg-brand-primary/40 p-4 rounded-sm border border-brand-secondary/80 flex justify-between items-center text-xs tracking-wide">
                  <div className="text-brand-neutral/80 font-sans">
                    Reserva seleccionada: <strong className="text-brand-accent font-serif font-semibold">{getReadableSelectedDate()}</strong> a las <strong className="text-brand-accent">{selectedTimeSlot}</strong>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-brand-secondary/60">
                  <button
                    onClick={handleNextStep}
                    disabled={!ceoName || !companyName || !email}
                    className={`px-6 py-3.5 rounded-sm font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                      ceoName && companyName && email
                        ? "bg-brand-accent hover:bg-brand-white text-brand-primary font-bold shadow-md"
                        : "bg-brand-secondary text-brand-neutral/40 border border-brand-secondary cursor-not-allowed"
                    }`}
                  >
                    Garantizar con Tarjeta ($250 USD) <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: CREDIT CARD GUARANTEE SIMULATOR */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between pb-4 border-b border-brand-secondary/60">
                  <h3 className="text-sm font-semibold text-brand-accent uppercase tracking-[0.2em] flex items-center gap-2">
                    <CreditCard className="w-4 h-4" /> Garantía de Reserva ($250 USD)
                  </h3>
                  <button
                    onClick={handlePrevStep}
                    className="text-xs text-brand-neutral/60 hover:text-brand-white transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-3" /> Editar Datos
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Luxury Simulated Golden Card View */}
                  <div className="lg:col-span-5 flex justify-center items-center">
                    <div className="w-full max-w-[320px] aspect-[1.586/1] rounded-xl bg-gradient-to-br from-brand-accent via-brand-neutral to-brand-secondary p-5 text-brand-primary shadow-2xl flex flex-col justify-between relative overflow-hidden border border-brand-accent/30">
                      {/* Brand alignment sparkles inside the credit card */}
                      <div className="absolute top-2 right-4 opacity-75">
                        <span className="text-lg font-serif italic text-brand-primary font-bold">S&CO</span>
                        <span className="text-brand-accent text-xs">✦</span>
                      </div>
                      <div className="absolute left-[-20%] top-[-20%] w-[150%] h-[150%] bg-[rgba(255,255,255,0.02)] rounded-full border border-white/5 pointer-events-none" />
                      
                      {/* Custom intelligent gold chip */}
                      <div className="w-10 h-8 rounded bg-brand-primary/10 border border-brand-primary/20 flex flex-col justify-center items-center gap-0.5 overflow-hidden">
                        <div className="w-8 h-[1px] bg-brand-primary/20" />
                        <div className="w-8 h-[1px] bg-brand-primary/20" />
                        <div className="w-8 h-[1px] bg-brand-primary/20" />
                      </div>

                      {/* Card code digits */}
                      <div className="text-base sm:text-lg font-mono tracking-[0.16em] leading-none my-4 text-brand-primary drop-shadow-sm">
                        {cardNumber || "•••• •••• •••• ••••"}
                      </div>

                      {/* Card meta metadata */}
                      <div className="flex justify-between items-end font-sans">
                        <div className="space-y-1">
                          <span className="text-[7px] uppercase tracking-wider opacity-60 block">NAME</span>
                          <span className="text-[10px] font-semibold tracking-wide uppercase max-w-[170px] truncate block">
                            {cardHolder || "CEO PROSPECTU"}
                          </span>
                        </div>

                        <div className="space-y-1">
                          <span className="text-[7px] uppercase tracking-wider opacity-60 block">EXPIRY</span>
                          <span className="text-[10px] font-mono font-bold block">{cardExpiry || "MM/YY"}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment checkout Input fields */}
                  <div className="lg:col-span-7">
                    <form onSubmit={handlePaymentSubmit} className="space-y-4">
                      
                      <div className="space-y-1.5">
                        <label className="text-[9px] tracking-widest uppercase text-brand-neutral/80 block">PROPIETARIO DE LA TARJETA</label>
                        <input
                          type="text"
                          required
                          value={cardHolder}
                          onChange={(e) => setCardHolder(e.target.value)}
                          placeholder="Ej. Gustavo de León"
                          className="w-full bg-brand-primary/40 border border-brand-secondary rounded-sm px-3 py-2.5 text-xs text-brand-white focus:outline-none focus:border-brand-accent transition-colors duration-300 uppercase"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[9px] tracking-widest uppercase text-brand-neutral/80 block">NÚMERO DE LA TARJETA</label>
                        <input
                          type="text"
                          required
                          value={cardNumber}
                          onChange={handleCardNumberChange}
                          placeholder="4111 2222 3333 4444"
                          className="w-full bg-brand-primary/40 border border-brand-secondary rounded-sm px-3 py-2.5 text-xs text-brand-white focus:outline-none focus:border-brand-accent transition-colors duration-300 font-mono"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[9px] tracking-widest uppercase text-brand-neutral/80 block">EXPIRACIÓN</label>
                          <input
                            type="text"
                            required
                            value={cardExpiry}
                            onChange={handleExpiryChange}
                            placeholder="MM/YY"
                            className="w-full bg-brand-primary/40 border border-brand-secondary rounded-sm px-3 py-2.5 text-xs text-brand-white focus:outline-none focus:border-brand-accent transition-colors duration-300 font-mono text-center"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[9px] tracking-widest uppercase text-brand-neutral/80 block">CÓDIGO CVV / CVC</label>
                          <input
                            type="password"
                            required
                            maxLength={4}
                            value={cardCvv}
                            onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, ""))}
                            placeholder="•••"
                            className="w-full bg-brand-primary/40 border border-brand-secondary rounded-sm px-3 py-2.5 text-xs text-brand-white focus:outline-none focus:border-brand-accent transition-colors duration-300 font-mono text-center"
                          />
                        </div>
                      </div>

                      <div className="p-3 bg-brand-primary/50 rounded-sm border border-brand-secondary flex items-start gap-2 text-[10px] text-brand-neutral/70 font-light mt-3 leading-relaxed">
                        <Lock className="w-3.5 h-3.5 text-brand-accent flex-shrink-0 mt-0.5" />
                        <span>Transacción protegida. Procesado mediante pasarela segura. El cobro de $250 USD está garantizado bajo encriptación SSL de 256 bits.</span>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="submit"
                          disabled={isPaying}
                          className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-brand-white text-brand-primary font-sans font-bold text-xs uppercase tracking-[0.25em] rounded-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden"
                        >
                          {isPaying ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-brand-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Aprobando Garantía...
                            </>
                          ) : (
                            <>
                              Pagar $250 USD y Reservar <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
                            </>
                          )}
                        </button>
                      </div>

                    </form>
                  </div>

                </div>
              </motion.div>
            )}

            {/* STEP 4: SUCCESS / CONFIRMED GOLD TICKET */}
            {step === 4 && confirmedBooking && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center"
              >
                {/* Elegant sparkle container */}
                <div className="w-16 h-16 bg-brand-accent/10 border border-brand-accent/30 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <div className="absolute inset-0 rounded-full border border-brand-accent/20 animate-ping" />
                  <CheckCircle2 className="w-8 h-8 text-brand-accent" />
                </div>

                <h3 className="text-2xl md:text-3.5xl font-serif text-brand-white leading-tight mb-2">
                  ¡Autoridad Asegurada!
                </h3>
                <p className="text-xs text-brand-neutral/80 max-w-md mx-auto leading-relaxed mb-8">
                  Hemos confirmado tu pago de $250 USD. Tu espacio de auditoría ejecutiva de 1 hora está bloqueado. Un consultor sénior se comunicará hoy para coordinar los accesos de Solo Lectura.
                </p>

                {/* Simulated luxury geometric ticket print */}
                <div className="max-w-md mx-auto bg-brand-primary border border-brand-accent/30 rounded-md p-6 relative text-left overflow-hidden shadow-2xl">
                  {/* Ticket side indentations (luxury tactile detail) */}
                  <div className="absolute top-[35%] -left-3 w-6 h-6 rounded-full bg-brand-secondary border-r border-brand-accent/20" />
                  <div className="absolute top-[35%] -right-3 w-6 h-6 rounded-full bg-brand-secondary border-l border-brand-accent/20" />

                  {/* Gold header */}
                  <div className="flex justify-between items-center border-b border-brand-secondary/80 pb-4 mb-4">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-serif italic text-brand-white font-bold">SOARITY</span>
                      <span className="text-brand-accent text-[9px]">✦</span>
                    </div>
                    <span className="text-[9px] font-mono uppercase text-brand-accent border border-brand-accent/20 px-2.5 py-1 rounded-sm">
                      {confirmedBooking.id}
                    </span>
                  </div>

                  {/* Summary grid */}
                  <div className="space-y-4 text-xs font-sans pb-4 border-b border-brand-secondary/80 border-dashed">
                    <div className="grid grid-cols-2">
                      <span className="text-brand-neutral/50 uppercase text-[9px] tracking-wider">CEO / DIRECTOR</span>
                      <span className="text-brand-white text-right font-medium">{confirmedBooking.ceoName}</span>
                    </div>

                    <div className="grid grid-cols-2">
                      <span className="text-brand-neutral/50 uppercase text-[9px] tracking-wider">EMPRESA</span>
                      <span className="text-brand-white text-right font-medium">{confirmedBooking.companyName}</span>
                    </div>

                    <div className="grid grid-cols-2">
                      <span className="text-brand-neutral/50 uppercase text-[9px] tracking-wider">FECHA AUDITORÍA</span>
                      <span className="text-brand-accent text-right font-serif font-bold italic">
                        {getReadableSelectedDate()}
                      </span>
                    </div>

                    <div className="grid grid-cols-2">
                      <span className="text-brand-neutral/50 uppercase text-[9px] tracking-wider">HORARIO SELECCIONADO</span>
                      <span className="text-brand-white text-right font-medium">{confirmedBooking.selectedTimeSlot}</span>
                    </div>

                    <div className="grid grid-cols-2">
                      <span className="text-brand-neutral/50 uppercase text-[9px] tracking-wider">CONTRASTES DIGITALES</span>
                      <span className="text-brand-white text-right font-mono text-[9px]">Brand Strategy + Software Architecture</span>
                    </div>
                  </div>

                  {/* Team sign off in italic */}
                  <div className="pt-4 text-center">
                    <span className="text-[10px] italic text-brand-neutral/60 font-serif leading-relaxed block">
                      "Preparando tu auditoría y contrastes de velocidad. Jheisry & Gustavo."
                    </span>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => {
                      setStep(1);
                      setCardNumber("");
                      setCardHolder("");
                      setCardExpiry("");
                      setCardCvv("");
                    }}
                    className="px-6 py-3 border border-brand-accent/40 text-brand-accent text-xs rounded-sm hover:border-brand-white hover:text-brand-white uppercase tracking-[0.2em] transition-all cursor-pointer"
                  >
                    Agendar otra sesión
                  </button>
                  
                  <button
                    onClick={() => alert("Simulación: Ticket digital descargado en alta resolución bajo formato de alta costura S&CO.")}
                    className="px-6 py-3 bg-brand-accent text-brand-primary hover:bg-brand-white text-xs rounded-sm uppercase tracking-[0.2em] font-bold transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" /> Descargar Ticket
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
