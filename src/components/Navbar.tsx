import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, FileText, Download, Loader2, Check } from 'lucide-react';
import { OFFICIAL_PDF_URL, OFFICIAL_PDF_FILENAME, triggerCompanyProfileDownload } from '../utils/downloadPdf';

interface NavbarProps {
  onOpenRfqModal: () => void;
  onOpenCompanyProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRfqModal, onOpenCompanyProfile }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Kalkulator IT', href: '#kalkulator' },
    { label: 'Portofolio Sumut', href: '#portofolio' },
    { label: 'Tentang Kami', href: '#tentang-kami' },
    { label: 'Kontak', href: '#kontak' },
  ];

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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#08090a]/95 backdrop-blur-md border-b border-[#23252a]'
          : 'bg-[#08090a]/80 backdrop-blur-sm border-b border-[#23252a]/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-18">
          {/* Zone 1: Single text element wordmark with Phosphor Green live indicator */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-lg sm:text-xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#3ecf8e] shadow-[0_0_8px_#3ecf8e]" />
            <span>TECH-INTEGRATOR</span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions with Full Pill Radius (rounded-full) */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Direct Official PDF Download Button */}
            <a
              href={OFFICIAL_PDF_URL}
              download={OFFICIAL_PDF_FILENAME}
              onClick={handleDownloadOfficialPdf}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all cursor-pointer border border-[#23252a]"
              title="Unduh Resmi: Company Profile- Enterprise Infrastructure.pdf"
            >
              {isDownloading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-[#3ecf8e]" />
                  <span className="whitespace-nowrap">Mengunduh...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#3ecf8e]" />
                  <span className="whitespace-nowrap text-[#3ecf8e]">Terunduh</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-[#3ecf8e]" />
                  <span className="whitespace-nowrap">Unduh PDF</span>
                </>
              )}
            </a>

            <button
              onClick={onOpenRfqModal}
              className="group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#08090a] bg-[#3ecf8e] hover:bg-[#34b77c] rounded-full transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer active:scale-95 shadow-[0_0_12px_rgba(62,207,142,0.25)]"
            >
              <span>Minta Penawaran (RFQ)</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#08090a] group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1014] border-b border-[#23252a] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-[#3ecf8e] hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={OFFICIAL_PDF_URL}
              download={OFFICIAL_PDF_FILENAME}
              onClick={(e) => {
                handleDownloadOfficialPdf(e);
                setTimeout(() => setMobileMenuOpen(false), 800);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 rounded-full border border-[#23252a] transition-colors"
            >
              {isDownloading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#3ecf8e]" />
                  <span>Mengunduh Dokumen Resmi...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-[#3ecf8e]" />
                  <span className="text-[#3ecf8e]">Berhasil Diunduh</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-[#3ecf8e]" />
                  <span>Unduh Company Profile (PDF)</span>
                </>
              )}
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRfqModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#08090a] bg-[#3ecf8e] hover:bg-[#34b77c] rounded-full transition-colors cursor-pointer"
            >
              <span>Minta Penawaran (RFQ)</span>
              <ArrowRight className="w-4 h-4 text-[#08090a]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
