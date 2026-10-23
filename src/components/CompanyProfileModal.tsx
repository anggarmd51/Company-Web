import React, { useState } from 'react';
import { X, Download, FileText, Check, Loader2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { OFFICIAL_PDF_URL, OFFICIAL_PDF_FILENAME, triggerCompanyProfileDownload } from '../utils/downloadPdf';

interface CompanyProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompanyProfileModal: React.FC<CompanyProfileModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Nama lengkap wajib diisi';
    if (!formData.company.trim()) errs.company = 'Nama perusahaan wajib diisi';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Email korporasi valid wajib diisi';
    if (!formData.phone.trim() || formData.phone.length < 9) errs.phone = 'Nomor WhatsApp valid wajib diisi';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const executeDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      triggerCompanyProfileDownload();
      setIsDownloading(false);
      setDownloadSuccess(true);
    }, 600);
  };

  const handleDownloadWithForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    executeDownload();
  };

  const handleDirectDownload = () => {
    executeDownload();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#0e1014] rounded-2xl max-w-lg w-full border border-[#23252a] p-6 sm:p-7 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-4 border-b border-[#23252a] mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#3ecf8e]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono text-xs font-bold text-[#3ecf8e] uppercase tracking-wider">
                OFFICIAL B2B DOCUMENT
              </div>
              <h3 className="text-lg font-bold text-white">
                Unduh Company Profile (PDF)
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {downloadSuccess ? (
          <div className="py-6 text-center">
            <div className="w-12 h-12 bg-[#3ecf8e]/20 text-[#3ecf8e] rounded-full flex items-center justify-center mx-auto mb-3 border border-[#3ecf8e]/40">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <h4 className="text-base font-bold text-white mb-1">
              File PDF Berhasil Diunduh!
            </h4>
            <p className="text-xs text-slate-400 mb-6 max-w-sm mx-auto leading-relaxed">
              Dokumen resmi <strong>Company Profile - Enterprise Infrastructure</strong> (PDF) telah tersimpan di perangkat Anda.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={OFFICIAL_PDF_URL}
                download={OFFICIAL_PDF_FILENAME}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-[#23252a] rounded-full transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#3ecf8e]" />
                <span>Unduh Ulang File</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setDownloadSuccess(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#3ecf8e] text-[#08090a] text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#34b77c] transition-all cursor-pointer shadow-[0_0_12px_rgba(62,207,142,0.25)]"
              >
                Selesai
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleDownloadWithForm} className="space-y-4">
            <div className="p-3 bg-[#14171d] border border-[#23252a] rounded-xl flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#3ecf8e]" />
                <span className="font-mono text-slate-300">Company_Profile_-_Enterprise_Infrastructure.pdf</span>
              </div>
              <span className="font-mono text-[11px] text-slate-400">PDF Resmi</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Silakan isi kontak penanggung jawab procurement untuk mencatat permintaan dokumen dan mengunduh profil perusahaan lengkap secara resmi.
            </p>

            <div>
              <label className="block font-mono text-xs font-semibold text-slate-300 uppercase mb-1">
                Nama Lengkap *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="cth. Ir. Budi Santoso"
                className="w-full px-3 py-2 bg-[#14171d] border border-[#23252a] rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-[#3ecf8e]"
              />
              {errors.name && <p className="text-xs text-red-400 mt-0.5">{errors.name}</p>}
            </div>

            <div>
              <label className="block font-mono text-xs font-semibold text-slate-300 uppercase mb-1">
                Nama Perusahaan / Instansi *
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="cth. PT. Belawan Samudera Abadi"
                className="w-full px-3 py-2 bg-[#14171d] border border-[#23252a] rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-[#3ecf8e]"
              />
              {errors.company && <p className="text-xs text-red-400 mt-0.5">{errors.company}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-mono text-xs font-semibold text-slate-300 uppercase mb-1">
                  Email Korporasi *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="budi@perusahaan.co.id"
                  className="w-full px-3 py-2 bg-[#14171d] border border-[#23252a] rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-[#3ecf8e]"
                />
                {errors.email && <p className="text-xs text-red-400 mt-0.5">{errors.email}</p>}
              </div>

              <div>
                <label className="block font-mono text-xs font-semibold text-slate-300 uppercase mb-1">
                  Nomor WhatsApp *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="0812xxxxxxxx"
                  className="w-full px-3 py-2 bg-[#14171d] border border-[#23252a] rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-[#3ecf8e]"
                />
                {errors.phone && <p className="text-xs text-red-400 mt-0.5">{errors.phone}</p>}
              </div>
            </div>

            <div className="pt-3 border-t border-[#23252a] flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleDirectDownload}
                disabled={isDownloading}
                className="text-xs font-mono text-slate-400 hover:text-[#3ecf8e] underline underline-offset-4 transition-colors cursor-pointer"
              >
                Unduh Langsung File PDF
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-full transition-colors cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isDownloading}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#08090a] bg-[#3ecf8e] hover:bg-[#34b77c] rounded-full transition-all shadow-[0_0_12px_rgba(62,207,142,0.2)] cursor-pointer disabled:opacity-50"
                >
                  {isDownloading ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Mengunduh...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5 text-[#08090a]" />
                      <span>Unduh Profil PDF</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
