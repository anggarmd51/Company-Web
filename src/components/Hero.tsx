import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, Shield, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { KEY_METRICS } from '../data/companyData';

interface HeroProps {
  onScrollToRfq: () => void;
  onScrollToServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToRfq, onScrollToServices }) => {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#08090a] overflow-hidden">
      {/* 1. Subtle Midnight Command Center Ambient Glow & Grid (Linear/Vercel style) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[580px] pointer-events-none -z-10"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[340px] bg-gradient-to-b from-[#3ecf8e]/12 via-[#3ecf8e]/3 to-transparent rounded-full blur-3xl opacity-75" />
        <div className="absolute top-12 left-1/4 w-[420px] h-[220px] bg-[#3ecf8e]/8 rounded-full blur-2xl opacity-60" />
        <div className="absolute inset-0 bg-grid-midnight [mask-image:radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black via-black/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Value Proposition, CTAs, and Trust Signals */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Vercel-style Monospaced Uppercase Eyebrow with Pulsing Live Dot */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 self-start py-1 px-3 rounded-full bg-[#14171d] border border-[#23252a] mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3ecf8e] opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3ecf8e]" />
              </span>
              <span className="font-mono text-xs font-semibold tracking-wider text-[#3ecf8e] uppercase">
                INFRASTRUCTURE & IOT SOLUTIONS
              </span>
              <span aria-hidden="true" className="text-slate-600">|</span>
              <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                MEDAN & SUMUT REGION
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 text-balance"
            >
              Mitra Strategis Infrastruktur IT, Jaringan & IoT Terpercaya
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl font-normal"
            >
              Membangun fondasi digital tangguh untuk korporasi dan kawasan industri di Sumatera Utara. Layanan Managed IT, Dedicated Internet bergaransi SLA 99.9%, dan sensor otomasi IoT dengan dukungan teknisi on-site tanggap <span className="font-semibold text-white">&lt; 2 jam</span> langsung di fasilitas Anda.
            </motion.p>

            {/* Primary & Secondary CTAs with Full Pill Radius */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10"
            >
              <button
                onClick={onScrollToRfq}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#08090a] bg-[#3ecf8e] hover:bg-[#34b77c] rounded-full transition-all duration-200 cursor-pointer active:scale-95 shadow-[0_0_20px_rgba(62,207,142,0.25)] hover:shadow-[0_0_25px_rgba(62,207,142,0.4)]"
              >
                <span>Konsultasikan Kebutuhan IT</span>
                <ArrowRight className="w-4 h-4 text-[#08090a] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onScrollToServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-[#23252a] hover:border-slate-500 rounded-full transition-all duration-200 cursor-pointer active:scale-95"
              >
                <span>Jelajahi Solusi</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </motion.div>

            {/* Trust Signals / Assurances with Hairline Borders & Active Status Dot */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-[#23252a]"
            >
              <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-3.5">
                KOMITMEN LAYANAN ENTERPRISE:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0e1014] border border-[#23252a] hover:border-[#3ecf8e]/40 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3ecf8e] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3ecf8e]" />
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>Kontrak SLA 99.9%</span>
                    </div>
                    <div className="text-[11px] text-slate-400 leading-tight mt-0.5">Garansi uptime hukum kompensasi resmi</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0e1014] border border-[#23252a] hover:border-[#3ecf8e]/40 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#3ecf8e]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Teknisi Lokal di Medan</div>
                    <div className="text-[11px] text-slate-400 leading-tight mt-0.5">Respons on-site &lt; 2 jam di KIM Mabar & Sumut</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0e1014] border border-[#23252a] hover:border-[#3ecf8e]/40 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Shield className="w-3.5 h-3.5 text-[#3ecf8e]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Hardware Garansi Resmi</div>
                    <div className="text-[11px] text-slate-400 leading-tight mt-0.5">100% komponen original distributor tier-1</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Showcase with Hairline Border and Micro Interaction */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Subtle glow behind card */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#3ecf8e]/15 to-transparent rounded-2xl blur-lg opacity-60" />

            <div className="relative rounded-2xl overflow-hidden border border-[#23252a] hover:border-[#3ecf8e]/50 bg-[#0e1014] aspect-16/10 lg:aspect-4/3 group transition-all duration-300">
              <img
                src="/src/assets/images/hero_it_datacenter_1792747523366.jpg"
                alt="Pusat Data dan Network Operations Center TECH-INTEGRATOR"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090a] via-[#08090a]/40 to-transparent flex flex-col justify-end p-6">
                <div className="text-white">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3ecf8e] opacity-80" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3ecf8e]" />
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#3ecf8e] font-bold">
                      LIVE NOC COMMAND CENTER
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Pemantauan Jaringan, Server & IoT Aktif 24/7/365
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Terhubung langsung ke backbone fiber optik Medan & node gateway industri.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


        {/* 4-column KPI strip with Fluid Reveal */}
        <div className="mt-8 pt-8 border-t border-[#23252a] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {KEY_METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="flex flex-col p-5 rounded-xl bg-[#0e1014] border border-[#23252a] hover:border-[#3ecf8e]/30 transition-all duration-200"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums flex items-baseline gap-1.5">
                <span>{metric.value}</span>
                {idx === 0 && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3ecf8e] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3ecf8e]" />
                  </span>
                )}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {metric.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
