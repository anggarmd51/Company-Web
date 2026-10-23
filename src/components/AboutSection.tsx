import React from 'react';
import { ShieldCheck, Cpu, Wrench, Award, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang-kami" className="py-24 bg-[#08090a] border-t border-[#23252a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Image Asset with Hairline Border & Motion Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#23252a] hover:border-[#3ecf8e]/40 bg-[#0e1014] aspect-4/3 group transition-all duration-300">
              <img
                src="/src/assets/images/enterprise_it_collaboration_1792747524326.jpg"
                alt="Insinyur Sistem Integrator TECH-INTEGRATOR Medan"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090a] via-transparent to-transparent flex items-end p-6">
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-[#3ecf8e] font-bold mb-1">
                    CERTIFIED TECHNICAL ENGINEERS
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Insinyur Jaringan, Cloud & IoT Berpengalaman di Medan
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Specs Under Image */}
            <div className="mt-4 p-4 bg-[#0e1014] border border-[#23252a] rounded-xl flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#3ecf8e]" />
                <span className="font-semibold text-white">Sertifikasi Cisco & Fortinet</span>
              </div>
              <span className="text-slate-600">·</span>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#3ecf8e]" />
                <span className="font-semibold text-white">Partner Resmi Indonesia</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Architecture */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#3ecf8e]" />
              <span className="font-mono text-xs font-semibold tracking-wider text-[#3ecf8e] uppercase">
                ENGINEERING CREDENTIALS & MISSION
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-5">
              Dedikasi Penuh untuk Stabilitas & Transformasi Digital Industri
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-4">
              TECH-INTEGRATOR hadir sebagai tulang punggung digital bagi dunia usaha, korporasi, dan fasilitas industri di Sumatera Utara. Kami memahami bahwa keterlambatan sinyal internet, kegagalan sistem firewall, atau ketiadaan pemantauan utilitas pabrik berimplikasi langsung pada kerugian operasional yang nyata.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              Dengan memadukan kemitraan hardware resmi (tier-1 distributor), arsitektur telekomunikasi mutakhir, dan penguasaan sensor IoT industri, kami merancang, mengimplementasikan, dan mengelola solusi menyeluruh dengan kontrak SLA yang mengikat.
            </p>

            {/* 3 Operational Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#23252a]">
              <div className="p-4 rounded-xl bg-[#0e1014] border border-[#23252a] hover:border-[#3ecf8e]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#3ecf8e] mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Keamanan Data</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Penerapan enkripsi perimeter, backup off-site terisolasi, dan audit berkala.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0e1014] border border-[#23252a] hover:border-[#3ecf8e]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#3ecf8e] mb-3">
                  <Wrench className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Dukungan Fisik</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Teknisi lapangan siap tanggap menuju fasilitas pabrik & perkantoran Anda di Sumut.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0e1014] border border-[#23252a] hover:border-[#3ecf8e]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#3ecf8e] mb-3">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Otomasi Cerdas</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Sensor telemetri IoT industrial hemat daya untuk memangkas inefisiensi utilitas.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
