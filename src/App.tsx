/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnerMarquee } from './components/PartnerMarquee';
import { ServicesSection } from './components/ServicesSection';
import { NetworkEstimator } from './components/NetworkEstimator';
import { LocalCaseStudies } from './components/LocalCaseStudies';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { RfqSection } from './components/RfqSection';
import { RfqModal } from './components/RfqModal';
import { CompanyProfileModal } from './components/CompanyProfileModal';
import { Footer } from './components/Footer';
import { COMPANY_INFO } from './data/companyData';

export default function App() {
  const [isRfqModalOpen, setIsRfqModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState<string>('');
  const [estimatorData, setEstimatorData] = useState<{
    services: string[];
    scale: string;
    notes: string;
    _timestamp?: number;
  } | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForRfq = (serviceTitle: string) => {
    setPreSelectedService(serviceTitle);
    scrollToSection('kontak');
  };

  const handleApplyEstimatorToRfq = (data: {
    services: string[];
    scale: string;
    notes: string;
    _timestamp?: number;
  }) => {
    setEstimatorData(data);
    scrollToSection('kontak');
  };

  // Strictly encoded WhatsApp URL string for floating action button
  const whatsappPreFilledMessage = encodeURIComponent(
    'Halo TECH-INTEGRATOR Medan, saya ingin berkonsultasi mengenai solusi infrastruktur jaringan IT & IoT untuk perusahaan kami. Mohon informasi teknis dan jadwal survei lapangan.'
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#08090a] text-slate-100 selection:bg-[#3ecf8e]/30 selection:text-white overflow-x-hidden">
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        onOpenRfqModal={() => setIsRfqModalOpen(true)}
        onOpenCompanyProfile={() => setIsProfileModalOpen(true)}
      />

      <main className="grow">
        {/* 2. Hero Section */}
        <Hero
          onScrollToRfq={() => scrollToSection('kontak')}
          onScrollToServices={() => scrollToSection('layanan')}
        />

        {/* 2.5. Trusted Partners & Technology Brands (Tuple-style Infinite Marquee) */}
        <PartnerMarquee />

        {/* 3. Five Core Services Showcase */}
        <ServicesSection onSelectServiceForRfq={handleSelectServiceForRfq} />

        {/* 4. Interactive Network & IT Estimator Widget */}
        <section id="kalkulator" className="py-24 bg-[#08090a] border-t border-[#23252a] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <NetworkEstimator onApplyToRfq={handleApplyEstimatorToRfq} />
          </div>
        </section>

        {/* 5. Local Case Studies & Regional Industrial Portfolio (KIM, Belawan, Deli Serdang) */}
        <LocalCaseStudies />

        {/* 6. Why Choose Us, 3 Pillars & Local Presence Advantage in Medan */}
        <WhyChooseUs />

        {/* 7. About Us & Engineering Capabilities */}
        <AboutSection />

        {/* 8. Interactive Request for Quotation (RFQ) Section */}
        <RfqSection
          preSelectedService={preSelectedService}
          estimatorData={estimatorData}
          onClearPreSelected={() => setPreSelectedService('')}
        />
      </main>

      {/* 9. Corporate Footer */}
      <Footer
        onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onOpenRfqModal={() => setIsRfqModalOpen(true)}
        onOpenCompanyProfile={() => setIsProfileModalOpen(true)}
      />

      {/* RFQ Quick Modal Dialog */}
      <RfqModal
        isOpen={isRfqModalOpen}
        onClose={() => setIsRfqModalOpen(false)}
        initialService={preSelectedService}
      />

      {/* Company Profile Lead Capture Modal */}
      <CompanyProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />

      {/* Floating WhatsApp Action Button in Midnight Command Center Style with Pulsing Ping */}
      <aside aria-label="Bantuan Langsung via WhatsApp" className="fixed bottom-6 right-6 z-30">
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappPreFilledMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 bg-[#0e1014] hover:bg-[#14171d] text-white px-4 py-3 rounded-full border border-[#23252a] hover:border-[#3ecf8e]/60 transition-all duration-200 cursor-pointer active:scale-95 shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_20px_rgba(62,207,142,0.25)]"
          title="Hubungi Sales Engineer via WhatsApp Resmi"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3ecf8e] opacity-80"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3ecf8e]"></span>
          </span>
          <MessageSquare className="w-4 h-4 text-[#3ecf8e]" />
          <span className="hidden sm:inline font-mono text-xs font-semibold tracking-wide text-slate-200 group-hover:text-white transition-colors">
            NOC WhatsApp Support
          </span>
        </a>
      </aside>
    </div>
  );
}
