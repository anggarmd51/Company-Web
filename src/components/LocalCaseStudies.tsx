import React, { useState } from 'react';
import { MapPin, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const LocalCaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'kim' | 'belawan' | 'deliserdang'>('all');

  const caseStudies = [
    {
      id: 'kim-mabar-cpo',
      region: 'kim',
      location: 'KIM 2 Mabar, Medan',
      client: 'Pabrik Pengolahan Kelapa Sawit & Oleokimia',
      projectTitle: 'Modernisasi Jaringan Redundant Fiber & Smart CCTV AI untuk Pemantauan Tangki & APD',
      challenge:
        'Sering terjadi downtime jaringan akibat putusnya kabel fiber di kawasan industri, yang melumpuhkan sistem timbangan truk dan ERP SAP perusahaan hingga menimbulkan kerugian jutaan rupiah per jam.',
      solution:
        'Implementasi Dual-Uplink Dedicated Internet Access (1:1) dengan SD-WAN failover otomatis < 1 detik. Ditambah instalasi 32 unit CCTV AI analitik industri (pendeteksi APD & level tangki timbun).',
      outcomes: [
        '0 jam downtime jaringan operasional selama 14 bulan berturut-turut',
        'SLA 99.9% tercapai dengan latensi stabil < 5ms ke Data Center Jakarta',
        'Tingkat kepatuhan K3 APD meningkat menjadi 98.4% berkat AI notification',
      ],
      techStack: ['MikroTik CCR2004', 'Fortinet FortiGate 100F', 'CCTV AI 4K Industrial', 'SD-WAN Failover'],
    },
    {
      id: 'belawan-logistics',
      region: 'belawan',
      location: 'Area Pelabuhan Belawan, Sumatera Utara',
      client: 'Perusahaan Logistik Kontainer & Cold Storage',
      projectTitle: 'Industrial Wi-Fi 6 Berdaya Jangkau Tinggi & Sensor IoT Pemantau Suhu Ruang Dingin',
      challenge:
        'Sinyal nirkabel terblokir oleh tumpukan kontainer besi dan uap garam laut yang korosif, menyebabkan scanner barcode terminal sering putus koneksi dan sensor pendingin tidak terpantau terpusat.',
      solution:
        'Penggelaran 24 titik Access Point Industrial IP67 tahan korosi uap laut dengan teknologi directional beamforming, terhubung ke gateway telemetri IoT LoRaWAN untuk memantau suhu chamber -25°C real-time.',
      outcomes: [
        'Cakupan Wi-Fi 100% di area pergudangan berikat seluas 18.000 m²',
        'Waktu proses scanning bongkar muat kapal lebih cepat 42%',
        'Peringatan otomatis via WhatsApp bot jika suhu cold storage menyimpang > 1°C',
      ],
      techStack: ['Ruijie Industrial Wi-Fi 6 IP67', 'LoRaWAN Modbus Gateway', 'Fiber Optic Armored', '24/7 NOC'],
    },
    {
      id: 'deliserdang-pharma',
      region: 'deliserdang',
      location: 'Tanjung Morawa, Deli Serdang',
      client: 'Pabrik & Pusat Distribusi Farmasi Regional',
      projectTitle: 'Infrastruktur Server Virtualisasi On-Premise & Disaster Recovery as a Service (DRaaS)',
      challenge:
        'Server lama sering mengalami crash saat rekonsiliasi data akhir bulan dan ketiadaan backup off-site yang terisolasi dari ancaman ransomware yang semakin masif menargetkan sektor kesehatan.',
      solution:
        'Migrasi ke klaster server enterprise Dell PowerEdge 3-Node dengan hypervisor Proxmox VE berkecepatan 10Gbps SFP+, dilengkapi sistem backup terenkripsi off-site ke Data Center Medan yang terisolasi (Air-Gapped).',
      outcomes: [
        'Waktu pemrosesan faktur batching ERP meningkat 3.8x lebih cepat',
        'RPO (Recovery Point Objective) cadangan data turun dari 24 jam menjadi < 15 menit',
        'Lolos audit keamanan kepatuhan Good Distribution Practice (CDOB) Farmasi',
      ],
      techStack: ['Dell PowerEdge R650', 'Proxmox VE HA Cluster', 'Sophos Intercept X EDR', 'Air-Gapped DRaaS'],
    },
  ];

  const filtered = activeTab === 'all' ? caseStudies : caseStudies.filter((item) => item.region === activeTab);

  return (
    <section id="portofolio" className="py-24 bg-[#08090a] border-t border-[#23252a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#3ecf8e]" />
              <span className="font-mono text-xs font-semibold tracking-wider text-[#3ecf8e] uppercase">
                PROVEN FIELD DEPLOYMENTS · SUMATERA UTARA
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
              Studi Kasus Implementasi Nyata di Kawasan Industri Sumut
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Pengalaman lapangan yang teruji menghadapi tantangan kondisi fisik, kelembapan kawasan pesisir, dan reliabilitas infrastruktur di pusat manufaktur dan logistik Sumatera Utara.
            </p>
          </motion.div>

          {/* Region Filter Buttons in Full Pill Radius with mobile wrap */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#14171d] border border-[#23252a] rounded-2xl sm:rounded-full shrink-0 self-start md:self-end max-w-full">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeTab === 'all' ? 'bg-[#3ecf8e] text-[#08090a] font-bold shadow-[0_0_8px_rgba(62,207,142,0.3)]' : 'text-slate-400 hover:text-white'
              }`}
            >
              Semua Wilayah
            </button>
            <button
              onClick={() => setActiveTab('kim')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeTab === 'kim' ? 'bg-[#3ecf8e] text-[#08090a] font-bold shadow-[0_0_8px_rgba(62,207,142,0.3)]' : 'text-slate-400 hover:text-white'
              }`}
            >
              KIM Mabar
            </button>
            <button
              onClick={() => setActiveTab('belawan')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeTab === 'belawan' ? 'bg-[#3ecf8e] text-[#08090a] font-bold shadow-[0_0_8px_rgba(62,207,142,0.3)]' : 'text-slate-400 hover:text-white'
              }`}
            >
              Pelabuhan Belawan
            </button>
            <button
              onClick={() => setActiveTab('deliserdang')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeTab === 'deliserdang' ? 'bg-[#3ecf8e] text-[#08090a] font-bold shadow-[0_0_8px_rgba(62,207,142,0.3)]' : 'text-slate-400 hover:text-white'
              }`}
            >
              Deli Serdang
            </button>
          </div>
        </div>

        {/* 3 Rich Case Study Cards with Fluid Stagger & Micro-lift */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((study, idx) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative bg-[#0e1014] border border-[#23252a] hover:border-[#3ecf8e]/60 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 shadow-2xs"
              >
                <div>
                  {/* Region & Location */}
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#3ecf8e] mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{study.location}</span>
                  </div>

                  <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    {study.client}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-4 leading-snug group-hover:text-[#3ecf8e] transition-colors">
                    {study.projectTitle}
                  </h3>

                  <div className="space-y-3 mb-6 text-xs text-slate-400">
                    <div>
                      <span className="font-semibold text-slate-200">Tantangan: </span>
                      <span>{study.challenge}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-200">Solusi Arsitektur: </span>
                      <span>{study.solution}</span>
                    </div>
                  </div>

                  {/* Key Outcomes */}
                  <div className="bg-[#14171d] p-4 rounded-xl border border-[#23252a] mb-6 space-y-2">
                    <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#3ecf8e]">
                      DAMPAK BISNIS TERUKUR:
                    </div>
                    {study.outcomes.map((outcome, oIdx) => (
                      <div key={oIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-[#3ecf8e] shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="pt-4 border-t border-[#23252a]">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    KOMPONEN & HARDWARE:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {study.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[11px] text-slate-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
