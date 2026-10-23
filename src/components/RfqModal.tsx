import React, { useState } from 'react';
import { X, Send, Check } from 'lucide-react';
import { CORE_SERVICES, COMPANY_INFO } from '../data/companyData';
import { RfqFormData } from '../types';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const RfqModal: React.FC<RfqModalProps> = ({ isOpen, onClose, initialService }) => {
  const [formData, setFormData] = useState<RfqFormData>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    selectedServices: initialService ? [initialService] : [CORE_SERVICES[0].title],
    projectScale: 'Kantor Cabang / Menengah (10 - 50 User)',
    timeline: 'Segera (< 1 Bulan)',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleService = (title: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(title);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== title)
          : [...prev.selectedServices, title],
      };
    });
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Nama lengkap wajib diisi';
    if (!formData.companyName.trim()) errs.companyName = 'Nama perusahaan wajib diisi';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Nomor WhatsApp wajib diisi';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Email valid wajib diisi';
    if (formData.selectedServices.length === 0) errs.selectedServices = 'Pilih minimal 1 layanan';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const generateMessage = (): string => {
    const srvs = formData.selectedServices.map((s) => `• ${s}`).join('\n');
    return `*PERMINTAAN PENAWARAN (RFQ) - TECH-INTEGRATOR*
────────────────────────
*Data Pemohon:*
• *Nama:* ${formData.fullName}
• *Perusahaan:* ${formData.companyName}
• *WhatsApp:* ${formData.phone}
• *Email:* ${formData.email}

*Layanan:*
${srvs}

*Skala Proyek:* ${formData.projectScale}
*Timeline:* ${formData.timeline}
*Catatan:* ${formData.notes || 'Perlu asesmen survei lokasi.'}
────────────────────────
_Terkirim via Portal TECH-INTEGRATOR_`;
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const encoded = encodeURIComponent(generateMessage());
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#0e1014] rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto border border-[#23252a] p-6 sm:p-7 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-4 border-b border-[#23252a] mb-5">
          <div>
            <div className="font-mono text-xs font-bold text-[#3ecf8e] uppercase tracking-wider mb-0.5">
              QUICK QUOTATION REQUEST
            </div>
            <h3 className="text-xl font-bold text-white">
              Minta Penawaran Harga (RFQ)
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-12 h-12 bg-[#3ecf8e]/20 text-[#3ecf8e] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#3ecf8e]/40">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              Permintaan Berhasil Terkirim ke WhatsApp
            </h4>
            <p className="text-sm text-slate-400 mb-6 max-w-md mx-auto">
              Percakapan WhatsApp telah dibuka. Technical Account Manager kami di Medan akan segera merespons estimasi dan jadwal survei lapangan.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-[#3ecf8e] text-[#08090a] text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#34b77c]"
            >
              Tutup Modal
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-mono text-xs font-semibold text-slate-300 uppercase mb-1">
                  Nama Anda *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Nama Lengkap"
                  className="w-full px-3 py-2 bg-[#14171d] border border-[#23252a] rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-[#3ecf8e]"
                />
                {errors.fullName && <p className="text-xs text-red-400 mt-0.5">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block font-mono text-xs font-semibold text-slate-300 uppercase mb-1">
                  Perusahaan / PT *
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="Nama Perusahaan"
                  className="w-full px-3 py-2 bg-[#14171d] border border-[#23252a] rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-[#3ecf8e]"
                />
                {errors.companyName && <p className="text-xs text-red-400 mt-0.5">{errors.companyName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-mono text-xs font-semibold text-slate-300 uppercase mb-1">
                  No. WhatsApp Aktif *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="0812xxxxxxx"
                  className="w-full px-3 py-2 bg-[#14171d] border border-[#23252a] rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-[#3ecf8e]"
                />
                {errors.phone && <p className="text-xs text-red-400 mt-0.5">{errors.phone}</p>}
              </div>

              <div>
                <label className="block font-mono text-xs font-semibold text-slate-300 uppercase mb-1">
                  Email Korporasi *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@perusahaan.com"
                  className="w-full px-3 py-2 bg-[#14171d] border border-[#23252a] rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-[#3ecf8e]"
                />
                {errors.email && <p className="text-xs text-red-400 mt-0.5">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs font-semibold text-slate-300 uppercase mb-1.5">
                Layanan yang Diperlukan:
              </label>
              <div className="space-y-1.5 max-h-36 overflow-y-auto border border-[#23252a] p-2.5 rounded-xl bg-[#14171d]">
                {CORE_SERVICES.map((srv) => (
                  <label
                    key={srv.id}
                    className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer hover:text-white"
                  >
                    <input
                      type="checkbox"
                      checked={formData.selectedServices.includes(srv.title)}
                      onChange={() => toggleService(srv.title)}
                      className="rounded text-[#3ecf8e] focus:ring-0"
                    />
                    <span>{srv.title}</span>
                  </label>
                ))}
              </div>
              {errors.selectedServices && (
                <p className="text-xs text-red-400 mt-0.5">{errors.selectedServices}</p>
              )}
            </div>

            <div>
              <label className="block font-mono text-xs font-semibold text-slate-300 uppercase mb-1">
                Catatan Kebutuhan Singkat
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="cth. Butuh Dedicated Internet 100 Mbps di KIM Mabar & instalasi Wi-Fi gudang..."
                className="w-full px-3 py-2 bg-[#14171d] border border-[#23252a] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-[#3ecf8e]"
              ></textarea>
            </div>

            <div className="pt-3 border-t border-[#23252a] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-full transition-colors"
              >
                Batal
              </button>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#08090a] bg-[#3ecf8e] hover:bg-[#34b77c] rounded-full transition-all cursor-pointer shadow-[0_0_12px_rgba(62,207,142,0.2)]"
              >
                <Send className="w-3.5 h-3.5 text-[#08090a]" />
                <span>Kirim via WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
