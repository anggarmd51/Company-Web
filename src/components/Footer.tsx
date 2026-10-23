import React, { useState } from 'react';
import { MapPin, Clock, ArrowUp, MessageSquare, Download, Loader2, Check } from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES } from '../data/companyData';
import { OFFICIAL_PDF_URL, OFFICIAL_PDF_FILENAME, triggerCompanyProfileDownload } from '../utils/downloadPdf';

interface FooterProps {
  onScrollToTop: () => void;
  onOpenRfqModal: () => void;
  onOpenCompanyProfile: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop, onOpenRfqModal }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const whatsappPreFilledText = encodeURIComponent(
    'Halo TECH-INTEGRATOR Medan, saya ingin berkonsultasi mengenai solusi infrastruktur jaringan IT & IoT untuk perusahaan kami. Mohon informasi teknis dan jadwal survei lapangan.'
  );

  const handleDownloadOfficialPdf = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isDownloading) return;
    setIsDownloading(true);
    setTimeout(() => {
      triggerCompanyProfileDownload();
      setIsDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 500);
  };

  return (
    <footer className="bg-[#050607] text-white pt-16 pb-12 border-t border-[#23252a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#23252a]">
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3ecf8e] shadow-[0_0_8px_#3ecf8e]" />
              <span>{COMPANY_INFO.name}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Mitra penyedia solusi infrastruktur teknologi informasi, telekomunikasi enterprise, dan otomasi IoT terkemuka untuk kawasan bisnis dan industri di Medan serta seluruh wilayah Sumatera Utara.
            </p>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#3ecf8e] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#3ecf8e] shrink-0" />
                <span>{COMPANY_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services Directory (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#3ecf8e] mb-4">
              LAYANAN UTAMA
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {CORE_SERVICES.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#layanan"
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {srv.number}. {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#3ecf8e] mb-4">
              NAVIGASI CEPAT
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">Layanan & Solusi</a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-white transition-colors">Kalkulator Estimasi IT</a>
              </li>
              <li>
                <a href="#portofolio" className="hover:text-white transition-colors">Portofolio Sumut</a>
              </li>
              <li>
                <a href="#tentang-kami" className="hover:text-white transition-colors">Tentang Kami</a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-white transition-colors">Permintaan RFQ</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Action & Support Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#3ecf8e] mb-4">
              PENGADAAN & DOKUMEN RESMI
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Konsultasikan kebutuhan infrastruktur IT atau dapatkan dokumen spesifikasi dan profil perusahaan resmi untuk proses tender & procurement.
            </p>
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={onOpenRfqModal}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#08090a] bg-[#3ecf8e] hover:bg-[#34b77c] rounded-full transition-all cursor-pointer shadow-[0_0_12px_rgba(62,207,142,0.2)]"
              >
                <span>Minta Penawaran (RFQ)</span>
              </button>

              {/* Direct Official PDF Download in Footer */}
              <a
                href={OFFICIAL_PDF_URL}
                download={OFFICIAL_PDF_FILENAME}
                onClick={handleDownloadOfficialPdf}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-[#23252a] hover:border-[#3ecf8e]/50 rounded-full transition-all cursor-pointer"
                title="Unduh Resmi: Company Profile- Enterprise Infrastructure.pdf"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-[#3ecf8e]" />
                    <span>Menyiapkan Dokumen...</span>
                  </>
                ) : downloadSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#3ecf8e]" />
                    <span className="text-[#3ecf8e]">File PDF Berhasil Diunduh</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5 text-[#3ecf8e]" />
                    <span>Unduh Company Profile (PDF)</span>
                  </>
                )}
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappPreFilledText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-[#23252a] rounded-full transition-all cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#3ecf8e]" />
                <span>WhatsApp Divisi Sales</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved. Seluruh hak cipta dilindungi undang-undang.
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="font-mono">STANDAR KONTRAK SLA ENTERPRISE</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span className="font-mono">MEDAN, SUMATERA UTARA</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={onScrollToTop}
              className="hover:text-white inline-flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3 h-3 text-[#3ecf8e]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
