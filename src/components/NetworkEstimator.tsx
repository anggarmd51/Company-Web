import React, { useState } from 'react';
import { Calculator, ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface NetworkEstimatorProps {
  onApplyToRfq: (data: {
    services: string[];
    scale: string;
    notes: string;
    _timestamp?: number;
  }) => void;
}

export const NetworkEstimator: React.FC<NetworkEstimatorProps> = ({ onApplyToRfq }) => {
  const [usersCount, setUsersCount] = useState<number>(35);
  const [businessType, setBusinessType] = useState<string>('corporate');
  const [needs, setNeeds] = useState<{
    dedicatedInternet: boolean;
    managedWifi: boolean;
    sdwanBranch: boolean;
    cctvAi: boolean;
    cloudBackup: boolean;
    firewall: boolean;
  }>({
    dedicatedInternet: true,
    managedWifi: true,
    sdwanBranch: false,
    cctvAi: true,
    cloudBackup: true,
    firewall: true,
  });

  const toggleNeed = (key: keyof typeof needs) => {
    setNeeds((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const calculateBandwidth = () => {
    let multiplier = 2;
    if (businessType === 'manufacturing') multiplier = 1.2;
    if (businessType === 'hospital') multiplier = 2.5;
    if (businessType === 'logistics') multiplier = 1.5;

    let base = usersCount * multiplier;
    if (needs.cctvAi) base += 20;
    if (needs.cloudBackup) base += 25;

    if (base <= 30) return '30 - 50 Mbps Dedicated (1:1)';
    if (base <= 60) return '50 - 75 Mbps Dedicated (1:1)';
    if (base <= 110) return '100 - 150 Mbps Dedicated (1:1)';
    if (base <= 220) return '200 - 300 Mbps Dedicated (1:1)';
    if (base <= 450) return '500 Mbps Dedicated (1:1)';
    return '1 Gbps Dedicated Metro-E Leased Line';
  };

  const calculateHardware = () => {
    const apCount = Math.max(2, Math.ceil(usersCount / 20));
    const switchCount = Math.max(1, Math.ceil(usersCount / 24));
    return {
      apCount,
      switchCount,
      routerType: usersCount > 80 ? 'MikroTik CCR2004 / Cisco ISR Enterprise' : 'Enterprise Router Dual-WAN Failover',
      firewallType: needs.firewall ? (usersCount > 60 ? 'Fortinet FortiGate 70F / 100F NGFW' : 'Fortinet FortiGate 40F UTM') : 'Basic Stateful Firewall',
    };
  };

  const hardware = calculateHardware();
  const bandwidth = calculateBandwidth();

  const handleApply = () => {
    const selectedServiceTitles: string[] = [];
    if (needs.dedicatedInternet) selectedServiceTitles.push('Smart Network & Connectivity');
    if (needs.managedWifi) selectedServiceTitles.push('Managed IT & Infrastructure Services');
    if (needs.cctvAi) selectedServiceTitles.push('IoT & Industrial Automation');
    if (needs.firewall || needs.cloudBackup) selectedServiceTitles.push('Cloud & Cybersecurity Services');
    if (needs.sdwanBranch) selectedServiceTitles.push('IT Procurement & System Integration');

    const businessTypeLabel =
      businessType === 'corporate'
        ? 'Perkantoran Korporat'
        : businessType === 'manufacturing'
        ? 'Pabrik Manufaktur / KIM'
        : businessType === 'hospital'
        ? 'Rumah Sakit / Fasilitas Medis'
        : 'Pergudangan & Logistik Belawan';

    const notes = `[HASIL KALKULATOR ESTIMASI IT]
• Tipe Operasional: ${businessTypeLabel} (${usersCount} Karyawan/User)
• Rekomendasi Bandwidth: ${bandwidth}
• Estimasi Hardware: Router Gateway (${hardware.routerType}), ${hardware.switchCount}x Core/Access Switch, ${hardware.apCount}x Wi-Fi 6 AP, Firewall (${hardware.firewallType})
• Modul Terpilih: ${Object.entries(needs)
      .filter(([_, v]) => v)
      .map(([k]) => k)
      .join(', ')}`;

    onApplyToRfq({
      services: selectedServiceTitles.length > 0 ? selectedServiceTitles : ['Smart Network & Connectivity'],
      scale: `${businessTypeLabel} (${usersCount} User)`,
      notes,
      _timestamp: Date.now(),
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#0e1014] border border-[#23252a] rounded-2xl p-6 sm:p-9 shadow-xs"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#23252a] mb-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3ecf8e] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3ecf8e]" />
            </span>
            <span className="font-mono text-xs font-semibold tracking-wider text-[#3ecf8e] uppercase">
              INTERACTIVE B2B ESTIMATOR
            </span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Kalkulator Estimasi Kebutuhan Jaringan & Infrastruktur IT
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Hitung perkiraan bandwidth simetris, perangkat keras switching, dan keamanan jaringan yang ideal untuk operasional perusahaan Anda.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          {/* User Count Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Jumlah Pengguna / Perangkat Aktif:
              </label>
              <span className="font-mono text-sm font-bold text-[#3ecf8e] tabular-nums px-3 py-1 rounded-full bg-[#3ecf8e]/10 border border-[#3ecf8e]/30">
                {usersCount} Pengguna
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="250"
              step="5"
              value={usersCount}
              onChange={(e) => setUsersCount(Number(e.target.value))}
              className="w-full h-2 bg-[#1a1d22] rounded-lg appearance-none cursor-pointer accent-[#3ecf8e]"
            />
            <div className="flex justify-between font-mono text-[11px] text-slate-500 mt-1.5">
              <span>5 User</span>
              <span>50 User</span>
              <span>100 User</span>
              <span>150 User</span>
              <span>250+ User</span>
            </div>
          </div>

          {/* Business Profile Selection */}
          <div>
            <label className="block font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Sektor & Karakteristik Operasional:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'corporate', label: 'Perkantoran' },
                { id: 'manufacturing', label: 'Pabrik / KIM' },
                { id: 'hospital', label: 'Kesehatan / RS' },
                { id: 'logistics', label: 'Logistik Belawan' },
              ].map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setBusinessType(type.id)}
                  className={`px-3 py-2 text-xs font-medium rounded-full border transition-all text-center cursor-pointer ${
                    businessType === type.id
                      ? 'bg-[#3ecf8e] text-[#08090a] font-bold border-[#3ecf8e]'
                      : 'bg-white/5 text-slate-300 border-[#23252a] hover:bg-white/10'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Specific Need Toggles */}
          <div>
            <label className="block font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Kebutuhan Modul Tambahan:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                { key: 'dedicatedInternet', label: 'Dedicated Internet 1:1 Simetris' },
                { key: 'managedWifi', label: 'Managed Enterprise Wi-Fi 6' },
                { key: 'firewall', label: 'Next-Gen Firewall (NGFW UTM)' },
                { key: 'cctvAi', label: 'Integrasi CCTV AI & IoT Sensor' },
                { key: 'cloudBackup', label: 'Automated Cloud Backup (DRaaS)' },
                { key: 'sdwanBranch', label: 'SD-WAN Multi-Kantor Cabang' },
              ].map((item) => {
                const checked = needs[item.key as keyof typeof needs];
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => toggleNeed(item.key as keyof typeof needs)}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all text-left cursor-pointer ${
                      checked
                        ? 'bg-[#3ecf8e]/10 border-[#3ecf8e] text-white'
                        : 'bg-white/5 border-[#23252a] text-slate-400 hover:text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    <span className="font-medium truncate pr-2">{item.label}</span>
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        checked ? 'bg-[#3ecf8e] border-[#3ecf8e] text-[#08090a]' : 'border-slate-600'
                      }`}
                    >
                      {checked && <Check className="w-3 h-3 stroke-[3]" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Output Card with 1px Hairline Border */}
        <div className="lg:col-span-5 bg-[#14171d] border border-[#23252a] rounded-xl p-6">
          <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 pb-2 border-b border-[#23252a] flex items-center justify-between">
            <span>REKOMENDASI SPESIFIKASI TEKNIS</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3ecf8e] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3ecf8e]" />
            </span>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <div className="text-xs text-slate-400 font-medium">Kebutuhan Bandwidth Dedicated:</div>
              <div className="text-base sm:text-lg font-extrabold text-[#3ecf8e] mt-0.5">
                {bandwidth}
              </div>
              <div className="text-[11px] text-slate-500">SLA 99.9% dengan komitmen Multi-ISP Redundant Uplink</div>
            </div>

            <div>
              <div className="text-xs text-slate-400 font-medium">Router Gateway & Firewall:</div>
              <div className="text-xs font-bold text-white mt-0.5">{hardware.routerType}</div>
              <div className="text-[11px] text-slate-400">{hardware.firewallType}</div>
            </div>

            <div>
              <div className="text-xs text-slate-400 font-medium">Infrastruktur Distribusi LAN & Wi-Fi:</div>
              <div className="text-xs font-semibold text-white mt-0.5">
                {hardware.switchCount}x Gigabit PoE Switch & {hardware.apCount}x Titik Access Point Wi-Fi 6
              </div>
              <div className="text-[11px] text-slate-500">Kabel Cat6A UTP / Fiber Optic bergaransi sertifikasi</div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#23252a]">
            <button
              type="button"
              onClick={handleApply}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#08090a] bg-[#3ecf8e] hover:bg-[#34b77c] rounded-full transition-all cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(62,207,142,0.25)] hover:shadow-[0_0_20px_rgba(62,207,142,0.4)]"
            >
              <span>Terapkan Hasil ke Formulir RFQ</span>
              <ArrowRight className="w-4 h-4 text-[#08090a]" />
            </button>
            <div className="font-mono text-[11px] text-center text-slate-500 mt-2.5">
              Nilai estimasi akan otomatis terisi pada formulir penawaran resmi.
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
