import React, { useState, useEffect } from 'react';
import { Send, Mail, Copy, Check, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CORE_SERVICES, COMPANY_INFO } from '../data/companyData';
import { RfqFormData } from '../types';

interface RfqSectionProps {
  preSelectedService?: string;
  estimatorData?: {
    services: string[];
    scale: string;
    notes: string;
    _timestamp?: number;
  } | null;
  onClearPreSelected?: () => void;
}

export const RfqSection: React.FC<RfqSectionProps> = ({
  preSelectedService,
  estimatorData,
}) => {
  const [formData, setFormData] = useState<RfqFormData>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    selectedServices: [],
    projectScale: 'Kantor Cabang / Menengah (10 - 50 User)',
    timeline: 'Segera (< 1 Bulan)',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [showLivePreview, setShowLivePreview] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [hasEstimatorApplied, setHasEstimatorApplied] = useState(false);

  // Sync pre-selected service from service cards
  useEffect(() => {
    if (preSelectedService) {
      setFormData((prev) => {
        if (!prev.selectedServices.includes(preSelectedService)) {
          return {
            ...prev,
            selectedServices: [...prev.selectedServices, preSelectedService],
          };
        }
        return prev;
      });
      setErrors((prev) => ({ ...prev, selectedServices: '' }));
    }
  }, [preSelectedService]);

  // Seamless transfer from Network Estimator to RFQ form with error cleanup
  useEffect(() => {
    if (estimatorData) {
      setFormData((prev) => ({
        ...prev,
        selectedServices: estimatorData.services.length > 0 ? estimatorData.services : prev.selectedServices,
        projectScale: estimatorData.scale || prev.projectScale,
        notes: estimatorData.notes || prev.notes,
      }));
      // Clear any service selection validation error immediately
      setErrors((prev) => ({ ...prev, selectedServices: '' }));
      setHasEstimatorApplied(true);
      const timer = setTimeout(() => setHasEstimatorApplied(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [estimatorData]);

  const toggleServiceSelection = (serviceTitle: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(serviceTitle);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== serviceTitle)
          : [...prev.selectedServices, serviceTitle],
      };
    });
    if (errors.selectedServices) {
      setErrors((prev) => ({ ...prev, selectedServices: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Nama lengkap wajib diisi';
    if (!formData.companyName.trim()) newErrors.companyName = 'Nama perusahaan / instansi wajib diisi';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Nomor WhatsApp / HP wajib diisi';
    } else if (formData.phone.replace(/\D/g, '').length < 9) {
      newErrors.phone = 'Masukkan nomor HP yang valid (min. 9 digit)';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email perusahaan wajib diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    if (formData.selectedServices.length === 0) {
      newErrors.selectedServices = 'Pilih minimal 1 layanan yang Anda butuhkan';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateMessageText = (): string => {
    const servicesList =
      formData.selectedServices.length > 0
        ? formData.selectedServices.map((s) => `• ${s}`).join('\n')
        : '• Belum ditentukan (Perlu Konsultasi Awal)';

    const cleanNotes = formData.notes.trim() ? formData.notes.trim() : 'Tidak ada catatan tambahan.';

    return `*PERMINTAAN PENAWARAN HARGA (RFQ)*
*TECH-INTEGRATOR - B2B IT & IOT SOLUTIONS*
────────────────────────
*Data Pemohon:*
• *Nama:* ${formData.fullName || '-'}
• *Perusahaan / Instansi:* ${formData.companyName || '-'}
• *WhatsApp / Telepon:* ${formData.phone || '-'}
• *Email Korporasi:* ${formData.email || '-'}

*Layanan yang Diminta:*
${servicesList}

*Skala Proyek:* ${formData.projectScale}
*Estimasi Waktu:* ${formData.timeline}

*Catatan / Spesifikasi Kebutuhan:*
${cleanNotes}
────────────────────────
_Pesan ini dikirim melalui formulir RFQ resmi portal TECH-INTEGRATOR._`;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = generateMessageText();
    // Strict URL encoding to prevent corruption of symbols, linebreaks and emojis
    const encoded = encodeURIComponent(message);
    const targetUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`;
    
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    setSubmittedSuccess(true);
  };

  const handleSendEmail = () => {
    if (!validate()) return;

    const subject = encodeURIComponent(`[RFQ B2B] Permintaan Penawaran - ${formData.companyName}`);
    const body = encodeURIComponent(generateMessageText().replace(/\*/g, ''));
    const mailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setSubmittedSuccess(true);
  };

  const handleCopyMessage = () => {
    const text = generateMessageText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="kontak" className="py-24 bg-[#08090a] border-t border-[#23252a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column with Motion Viewport Once */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#3ecf8e]" />
                <span className="font-mono text-xs font-semibold tracking-wider text-[#3ecf8e] uppercase">
                  ENTERPRISE PROCUREMENT PORTAL
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
                Minta Penawaran Resmi (RFQ) & Konsultasi Teknis
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                Isi spesifikasi kebutuhan IT Anda. Sistem secara dinamis memformat draf penawaran resmi yang dapat langsung dikirimkan ke akun WhatsApp konsultan teknis kami atau via email resmi pengadaan.
              </p>

              {/* Step Process in Midnight Cards */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0e1014] border border-[#23252a] hover:border-[#3ecf8e]/30 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#3ecf8e] text-[#08090a] flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Pilih Layanan & Masukkan Data</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Tentukan cakupan layanan konektivitas, server, atau IoT pabrik.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0e1014] border border-[#23252a] hover:border-[#3ecf8e]/30 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#3ecf8e] text-[#08090a] flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Pilih Jalur Pengiriman</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Kirim via WhatsApp untuk respons instan &lt; 15 menit atau via Email Resmi.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0e1014] border border-[#23252a] hover:border-[#3ecf8e]/30 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#3ecf8e] text-[#08090a] flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Survei Lokasi & Draf Penawaran Harga</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Insinyur kami menjadwalkan asesmen teknis on-site di area Medan & Sumut.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Card with Hairline Border */}
            <div className="bg-[#0e1014] border border-[#23252a] rounded-xl p-6">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#3ecf8e] mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>DIVISI ENTERPRISE SOLUTIONS</span>
              </div>
              <div className="text-lg font-extrabold text-white mb-1">
                {COMPANY_INFO.phoneDisplay}
              </div>
              <div className="text-xs font-medium text-slate-300 mb-3">
                {COMPANY_INFO.email}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">
                {COMPANY_INFO.address}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive RFQ Form with Motion Viewport Once */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-[#0e1014] border border-[#23252a] rounded-2xl p-6 sm:p-9 shadow-xs">
              <AnimatePresence>
                {hasEstimatorApplied && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-4 p-3 bg-[#3ecf8e]/10 border border-[#3ecf8e]/30 rounded-xl text-[#3ecf8e] flex items-center gap-2 text-xs font-medium"
                  >
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>Hasil estimasi dari Kalkulator IT berhasil dimasukkan ke dalam form!</span>
                  </motion.div>
                )}

                {submittedSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-[#3ecf8e]/10 border border-[#3ecf8e]/40 rounded-xl text-[#3ecf8e] flex items-start gap-3 text-xs sm:text-sm"
                  >
                    <Check className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">Permintaan RFQ Berhasil Dikirimkan!</div>
                      <div className="text-slate-300 mt-0.5">Tim account manager kami di Medan akan segera menghubungi Anda untuk follow-up teknis dan jadwal survei lapangan.</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSendWhatsApp} className="space-y-5">
                {/* 2-Column: Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      placeholder="cth. Hendra Gunawan"
                      className={`w-full px-3.5 py-2.5 bg-[#14171d] border ${
                        errors.fullName ? 'border-red-400 focus:border-red-500' : 'border-[#23252a] focus:border-[#3ecf8e]'
                      } rounded-xl text-sm text-white placeholder-slate-500 focus:outline-hidden transition-all`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Nama Perusahaan / Instansi *
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => {
                        setFormData({ ...formData, companyName: e.target.value });
                        if (errors.companyName) setErrors({ ...errors, companyName: '' });
                      }}
                      placeholder="cth. PT. Sawit Makmur Sumatera"
                      className={`w-full px-3.5 py-2.5 bg-[#14171d] border ${
                        errors.companyName ? 'border-red-400 focus:border-red-500' : 'border-[#23252a] focus:border-[#3ecf8e]'
                      } rounded-xl text-sm text-white placeholder-slate-500 focus:outline-hidden transition-all`}
                    />
                    {errors.companyName && (
                      <p className="text-xs text-red-400 mt-1">{errors.companyName}</p>
                    )}
                  </div>
                </div>

                {/* 2-Column: WhatsApp & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Nomor WhatsApp / HP *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="cth. 081234567890"
                      className={`w-full px-3.5 py-2.5 bg-[#14171d] border ${
                        errors.phone ? 'border-red-400 focus:border-red-500' : 'border-[#23252a] focus:border-[#3ecf8e]'
                      } rounded-xl text-sm text-white placeholder-slate-500 focus:outline-hidden transition-all`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-400 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Email Perusahaan *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="cth. it.manager@perusahaan.co.id"
                      className={`w-full px-3.5 py-2.5 bg-[#14171d] border ${
                        errors.email ? 'border-red-400 focus:border-red-500' : 'border-[#23252a] focus:border-[#3ecf8e]'
                      } rounded-xl text-sm text-white placeholder-slate-500 focus:outline-hidden transition-all`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Service Multi-selection */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Pilih Layanan yang Dibutuhkan *
                    </label>
                    <span className="font-mono text-xs font-medium text-slate-400">
                      ({formData.selectedServices.length} dipilih)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-[#14171d] p-3.5 rounded-xl border border-[#23252a]">
                    {CORE_SERVICES.map((srv) => {
                      const isSelected = formData.selectedServices.includes(srv.title);
                      return (
                        <button
                          key={srv.id}
                          type="button"
                          onClick={() => toggleServiceSelection(srv.title)}
                          className={`text-left p-2.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                            isSelected
                              ? 'bg-[#3ecf8e]/15 border-[#3ecf8e] text-white shadow-2xs'
                              : 'bg-white/5 border-[#23252a] text-slate-400 hover:text-slate-200 hover:bg-white/10'
                          }`}
                        >
                          <span className="truncate pr-2">{srv.number}. {srv.title}</span>
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                              isSelected
                                ? 'bg-[#3ecf8e] border-[#3ecf8e] text-[#08090a]'
                                : 'border-slate-600'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.selectedServices && (
                    <p className="text-xs text-red-400 mt-1">{errors.selectedServices}</p>
                  )}
                </div>

                {/* 2-Column: Project Scale & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Estimasi Skala Pengguna / Site
                    </label>
                    <input
                      type="text"
                      value={formData.projectScale}
                      onChange={(e) => setFormData({ ...formData, projectScale: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#14171d] border border-[#23252a] focus:border-[#3ecf8e] rounded-xl text-sm text-white focus:outline-hidden transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Target Waktu Implementasi
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#14171d] border border-[#23252a] focus:border-[#3ecf8e] rounded-xl text-sm text-white focus:outline-hidden transition-all"
                    >
                      <option value="Segera (< 1 Bulan)">Segera (&lt; 1 Bulan)</option>
                      <option value="1 - 3 Bulan ke Depan">1 - 3 Bulan ke Depan</option>
                      <option value="Tahap Perencanaan / Budgeting Q3-Q4">Tahap Perencanaan / Budgeting</option>
                    </select>
                  </div>
                </div>

                {/* Notes Field */}
                <div>
                  <label className="block font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Catatan Kebutuhan Spesifik / Hasil Perhitungan
                  </label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Sebutkan lokasi pemasangan (misal: KIM 2 Mabar), kapasitas bandwidth, jumlah titik CCTV/LAN, atau kendala jaringan saat ini..."
                    className="w-full px-3.5 py-2.5 bg-[#14171d] border border-[#23252a] focus:border-[#3ecf8e] rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-hidden transition-all"
                  ></textarea>
                </div>

                {/* Live Message Preview Toggle */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => setShowLivePreview(!showLivePreview)}
                    className="text-xs font-mono text-slate-400 hover:text-[#3ecf8e] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>{showLivePreview ? 'SEMBUNYIKAN' : 'PREVIEW'} FORMAT PESAN WHATSAPP</span>
                    <span className="text-slate-500 font-mono">({showLivePreview ? '▲' : '▼'})</span>
                  </button>

                  <AnimatePresence>
                    {showLivePreview && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2.5 p-4 bg-[#14171d] border border-[#23252a] rounded-xl font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed overflow-hidden"
                      >
                        {generateMessageText()}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Action Buttons with Full Pill Radius (rounded-full) */}
                <div className="pt-3 border-t border-[#23252a] flex flex-col sm:flex-row items-stretch gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#08090a] bg-[#3ecf8e] hover:bg-[#34b77c] rounded-full transition-all duration-200 cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(62,207,142,0.25)] hover:shadow-[0_0_20px_rgba(62,207,142,0.4)]"
                  >
                    <Send className="w-4 h-4 text-[#08090a]" />
                    <span>Kirim via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendEmail}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-200 bg-white/5 border border-[#23252a] hover:bg-white/10 rounded-full transition-all duration-200 cursor-pointer active:scale-95"
                  >
                    <Mail className="w-4 h-4 text-slate-300" />
                    <span>Kirim via Email</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-medium text-slate-400 hover:text-white bg-white/5 border border-[#23252a] hover:bg-white/10 rounded-full transition-all duration-200 cursor-pointer active:scale-95"
                    title="Salin teks pesan"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#3ecf8e]" /> : <Copy className="w-4 h-4" />}
                    <span className="hidden sm:inline font-mono">{copied ? 'Tersalin' : 'Salin'}</span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
