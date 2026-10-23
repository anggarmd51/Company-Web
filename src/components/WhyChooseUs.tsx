import React from 'react';
import { CheckCircle2, Lightbulb, Award, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { VALUE_PILLARS, COMPANY_INFO } from '../data/companyData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="keunggulan" className="py-24 bg-[#08090a] border-t border-[#23252a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
              ENTERPRISE VALUE & LOCAL ADVANTAGE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            Mengapa Memilih TECH-INTEGRATOR Sebagai Mitra IT Anda?
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Downtime jaringan atau kendala server bukan sekadar masalah teknis—itu adalah kerugian finansial nyata. Kami memadukan integritas spesifikasi kontrak dengan kecepatan tim teknisi lokal yang beroperasi langsung di Medan.
          </p>
        </motion.div>

        {/* 3 Value Pillars in Midnight Enterprise Cards with Stagger Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {VALUE_PILLARS.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className="group relative bg-[#0e1014] border border-[#23252a] hover:border-[#3ecf8e]/50 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 shadow-2xs"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#3ecf8e]/40 flex items-center justify-center mb-6 transition-colors">
                  {idx === 0 && <CheckCircle2 className="w-6 h-6 text-[#3ecf8e]" />}
                  {idx === 1 && <Lightbulb className="w-6 h-6 text-[#3ecf8e]" />}
                  {idx === 2 && <Award className="w-6 h-6 text-[#3ecf8e]" />}
                </div>

                <div className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  PILAR {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#3ecf8e] transition-colors">
                  {pillar.title}
                </h3>
                <div className="font-mono text-xs font-semibold text-[#3ecf8e] mb-4">
                  {pillar.point}
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local Touch USP & Network Coverage Split with Hairline Border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#0e1014] border border-[#23252a] rounded-2xl overflow-hidden mb-8 shadow-xs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Content */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3ecf8e] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3ecf8e]" />
                  </span>
                  <span className="font-mono text-xs font-semibold tracking-wider text-[#3ecf8e] uppercase">
                    LOCAL ON-SITE RAPID DISPATCH
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Dukungan Teknis On-Site Cepat untuk Kawasan Industri & Perkantoran
                </h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6">
                  Banyak penyedia layanan IT nasional hanya memiliki kantor representatif tanpa staf insinyur lokal di Sumatera Utara. Tim insinyur lapangan TECH-INTEGRATOR berbasis langsung di Medan dan siap meluncur ke fasilitas Anda dengan komitmen tanggap waktu singkat.
                </p>

                {/* Local Area Coverage */}
                <div className="mb-6">
                  <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Cakupan Area Layanan Cepat (SLA Tanggap &lt; 2 Jam):
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                    {COMPANY_INFO.serviceAreas.map((area, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3ecf8e]" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#23252a] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <div className="font-bold text-white text-sm">Standar Tier-3</div>
                  <div className="text-slate-500">Peralatan bersertifikasi resmi</div>
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Multi-ISP Uplink</div>
                  <div className="text-slate-500">Redundansi koneksi fiber optic</div>
                </div>
                <div>
                  <div className="font-bold text-white text-sm">OpEx-Friendly</div>
                  <div className="text-slate-500">Skema sewa & managed service</div>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 bg-slate-900 relative min-h-[320px] group overflow-hidden">
              <img
                src="/src/assets/images/iot_network_operations_1792747524707.jpg"
                alt="Pusat Pemantauan Operasional Jaringan & IoT TECH-INTEGRATOR"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090a] via-transparent to-transparent flex items-end p-6">
                <span className="font-mono text-xs font-medium text-slate-300">
                  Pemantauan Jaringan & Telemetri Pabrik Berkelanjutan 24 Jam
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
