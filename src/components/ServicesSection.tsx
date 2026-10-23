import React, { useState } from 'react';
import { Network, ServerCog, Cpu, ShieldCheck, Boxes, Check, ArrowRight, X, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CORE_SERVICES } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForRfq: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForRfq }) => {
  const [activeDetailService, setActiveDetailService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Network':
        return <Network className="w-5 h-5 text-[#3ecf8e]" />;
      case 'ServerCog':
        return <ServerCog className="w-5 h-5 text-[#3ecf8e]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#3ecf8e]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#3ecf8e]" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-[#3ecf8e]" />;
      default:
        return <Network className="w-5 h-5 text-[#3ecf8e]" />;
    }
  };

  return (
    <section id="layanan" className="py-24 bg-[#08090a] border-t border-[#23252a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Fluid Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#3ecf8e]" />
            <span className="font-mono text-xs font-semibold tracking-wider text-[#3ecf8e] uppercase">
              CORE ENTERPRISE CAPABILITIES
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            Layanan Solusi IT & Telekomunikasi
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Dari konektivitas jaringan stabil berkecepatan tinggi hingga transformasi sensorik cerdas di lantai pabrik. Setiap layanan didukung oleh SLA resmi dan insinyur berpengalaman di Sumatera Utara.
          </p>
        </motion.div>

        {/* Services Grid - Balanced Asymmetric Layout with Fluid Stagger & Interactive Hover Effects */}
        <div className="space-y-6">
          {/* Row 1: Top 2 Featured Enterprise Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {CORE_SERVICES.slice(0, 2).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3 }}
                className="group relative bg-[#0e1014] border border-[#23252a] hover:border-[#3ecf8e]/60 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#3ecf8e]/40 group-hover:scale-105 flex items-center justify-center transition-all duration-300">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-[11px] font-medium text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      {service.sla}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#3ecf8e] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Key features */}
                  <div className="space-y-2.5 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-[#3ecf8e] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#23252a] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveDetailService(service)}
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors py-2 px-3 rounded-full hover:bg-white/5 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-[#3ecf8e]" />
                    <span>Lihat Spesifikasi & Deliverables</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectServiceForRfq(service.title)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#08090a] bg-[#3ecf8e] hover:bg-[#34b77c] rounded-full transition-all duration-200 cursor-pointer active:scale-95 shadow-[0_0_12px_rgba(62,207,142,0.2)] hover:shadow-[0_0_18px_rgba(62,207,142,0.35)]"
                  >
                    <span>Minta Penawaran Layanan Ini</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#08090a]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: Bottom 3 Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_SERVICES.slice(2, 5).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3 }}
                className="group relative bg-[#0e1014] border border-[#23252a] hover:border-[#3ecf8e]/60 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#3ecf8e]/40 group-hover:scale-105 flex items-center justify-center transition-all duration-300">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-[10px] text-[#3ecf8e] font-semibold bg-[#3ecf8e]/10 border border-[#3ecf8e]/20 px-2.5 py-0.5 rounded-full">
                      Enterprise Grade
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-[#3ecf8e] transition-colors">
                    {service.title}
                  </h3>

                  <div className="font-mono text-xs text-[#3ecf8e] font-semibold mb-3">
                    {service.sla}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 mb-5 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Key features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#3ecf8e] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-[#23252a] flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectServiceForRfq(service.title)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#08090a] bg-[#3ecf8e] hover:bg-[#34b77c] rounded-full transition-all duration-200 cursor-pointer active:scale-95 shadow-[0_0_10px_rgba(62,207,142,0.18)]"
                  >
                    <span>Pilih di RFQ</span>
                    <ArrowRight className="w-3 h-3 text-[#08090a]" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveDetailService(service)}
                    className="w-full text-center text-xs font-medium text-slate-400 hover:text-white transition-colors py-1 cursor-pointer"
                  >
                    Detail Spesifikasi
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal: Service Details & Deliverables with Fluid Pop-In */}
        <AnimatePresence>
          {activeDetailService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#0e1014] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#23252a] p-6 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#23252a] mb-6">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#3ecf8e] uppercase tracking-wider mb-1">
                      <span>Solusi Enterprise</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-400">{activeDetailService.sla}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {activeDetailService.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveDetailService(null)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Deskripsi Lengkap
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {activeDetailService.fullDesc}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Deliverables & Ruang Lingkup Pekerjaan
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5 bg-[#14171d] p-4 rounded-xl border border-[#23252a]">
                      {activeDetailService.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                          <Check className="w-4 h-4 text-[#3ecf8e] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Cocok Untuk Kebutuhan
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400">
                      {activeDetailService.typicalClients}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#23252a] flex flex-col sm:flex-row items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveDetailService(null)}
                      className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-colors border border-transparent"
                    >
                      Tutup
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const title = activeDetailService.title;
                        setActiveDetailService(null);
                        onSelectServiceForRfq(title);
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#08090a] bg-[#3ecf8e] hover:bg-[#34b77c] rounded-full transition-all cursor-pointer shadow-[0_0_12px_rgba(62,207,142,0.25)]"
                    >
                      <span>Minta Penawaran Layanan Ini</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#08090a]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
