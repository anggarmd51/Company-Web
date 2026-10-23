import React from 'react';
import { motion } from 'motion/react';

interface BrandLogoItem {
  name: string;
  svg: React.ReactNode;
}

export const PartnerMarquee: React.FC = () => {
  // Row 1: Telco, Carrier, Core Networking & Enterprise Hardware (13 Brands)
  const row1Brands: BrandLogoItem[] = [
    {
      name: 'Telkom Indonesia',
      svg: (
        <svg viewBox="0 0 170 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* Telkom Indonesia globe swoosh emblem */}
          <circle cx="18" cy="18" r="13" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M10 21c3-6 13-7 16-2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <circle cx="21" cy="13" r="3.2" fill="currentColor" />
          {/* Telkom wordmark */}
          <text x="38" y="23" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="15" letterSpacing="-0.5px">
            Telkom
          </text>
          <text x="96" y="23" fontFamily="system-ui, sans-serif" fontWeight="400" fontSize="14" letterSpacing="0.2px">
            Indonesia
          </text>
        </svg>
      ),
    },
    {
      name: 'Biznet',
      svg: (
        <svg viewBox="0 0 120 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* Biznet stylized lower-case 'b' with network wave */}
          <circle cx="16" cy="18" r="12" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M12 9v18 M12 21a5 5 0 1 0 10 0 5 5 0 0 0-10 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="34" y="24" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="19" letterSpacing="-0.8px">
            biznet
          </text>
        </svg>
      ),
    },
    {
      name: 'Indosat Business',
      svg: (
        <svg viewBox="0 0 175 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* Indosat multi-circle cluster */}
          <circle cx="10" cy="18" r="4" fill="currentColor" />
          <circle cx="20" cy="12" r="3" fill="currentColor" opacity="0.8" />
          <circle cx="20" cy="24" r="3" fill="currentColor" opacity="0.8" />
          <circle cx="28" cy="18" r="2.2" fill="currentColor" opacity="0.6" />
          <text x="37" y="20" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="15" letterSpacing="-0.3px">
            indosat
          </text>
          <text x="37" y="30" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="9" letterSpacing="1.8px">
            BUSINESS
          </text>
        </svg>
      ),
    },
    {
      name: 'Lintasarta',
      svg: (
        <svg viewBox="0 0 145 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* Lintasarta dynamic chevron constellation */}
          <path d="M7 24L17 10l5 7-5 7H7z" fill="currentColor" opacity="0.9" />
          <path d="M16 10l6-4 6 8-6 4-6-8z" fill="currentColor" opacity="0.6" />
          <text x="34" y="23" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="16" letterSpacing="-0.5px">
            lintasarta
          </text>
        </svg>
      ),
    },
    {
      name: 'Nusanet',
      svg: (
        <svg viewBox="0 0 135 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* Nusanet orbital rings */}
          <ellipse cx="16" cy="18" rx="12" ry="6" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(-25 16 18)" />
          <circle cx="16" cy="18" r="4.5" fill="currentColor" />
          <text x="34" y="23" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="16" letterSpacing="-0.3px">
            nusanet
          </text>
        </svg>
      ),
    },
    {
      name: 'Cisco',
      svg: (
        <svg viewBox="0 0 120 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* Cisco 9 signal waveform bridge bars */}
          <rect x="4" y="14" width="2" height="6" rx="1" />
          <rect x="9" y="10" width="2" height="10" rx="1" />
          <rect x="14" y="6" width="2" height="14" rx="1" />
          <rect x="19" y="10" width="2" height="10" rx="1" />
          <rect x="24" y="14" width="2" height="6" rx="1" />
          {/* Wordmark */}
          <text x="34" y="22" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="17" letterSpacing="0.5px">
            CISCO
          </text>
        </svg>
      ),
    },
    {
      name: 'Cisco Meraki',
      svg: (
        <svg viewBox="0 0 150 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* Meraki cloud waves */}
          <path d="M7 21a5 5 0 0 1 8-4 7 7 0 0 1 12 1 4 4 0 0 1 2 7H7z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <circle cx="17" cy="20" r="2" fill="currentColor" />
          <text x="35" y="17" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="12" letterSpacing="0.2px">
            CISCO
          </text>
          <text x="35" y="28" fontFamily="system-ui, sans-serif" fontWeight="500" fontSize="13" letterSpacing="0.8px">
            meraki
          </text>
        </svg>
      ),
    },
    {
      name: 'Ubiquiti (UniFi)',
      svg: (
        <svg viewBox="0 0 135 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* Ubiquiti 'U' loop logo */}
          <path d="M8 10v10a7 7 0 0 0 14 0V10h-3v10a4 4 0 0 1-8 0V10H8z" fill="currentColor" />
          <path d="M12 15h6v3h-6z" fill="currentColor" />
          <text x="29" y="23" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="16" letterSpacing="-0.3px">
            UniFi
          </text>
          <text x="78" y="23" fontFamily="system-ui, sans-serif" fontWeight="400" fontSize="11" letterSpacing="0.5px">
            | UI
          </text>
        </svg>
      ),
    },
    {
      name: 'Mikrotik',
      svg: (
        <svg viewBox="0 0 130 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* MikroTik geometric polygon M */}
          <path d="M6 25V11l6 7 6-7v14h-3V16l-3 3.5-3-3.5v9H6z" fill="currentColor" />
          <circle cx="26" cy="14" r="2.5" fill="currentColor" />
          <path d="M26 19v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <text x="35" y="23" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="16" letterSpacing="-0.3px">
            MikroTik
          </text>
        </svg>
      ),
    },
    {
      name: 'Ruijie Reyee',
      svg: (
        <svg viewBox="0 0 145 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* Ruijie dual chevron */}
          <path d="M6 11l7 7-7 7h5l7-7-7-7H6z" fill="currentColor" />
          <path d="M15 11l7 7-7 7h5l7-7-7-7h-5z" fill="currentColor" opacity="0.6" />
          <text x="35" y="23" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="15" letterSpacing="-0.2px">
            Ruijie |
          </text>
          <text x="89" y="23" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="14" letterSpacing="0.2px">
            Reyee
          </text>
        </svg>
      ),
    },
    {
      name: 'Schneider Electric',
      svg: (
        <svg viewBox="0 0 185 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* Schneider Electric iconic beacon mark */}
          <rect x="6" y="8" width="18" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <path d="M15 8v18 M6 17h18 M11 13l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <text x="30" y="19" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="12" letterSpacing="-0.3px">
            Schneider
          </text>
          <text x="30" y="29" fontFamily="system-ui, sans-serif" fontWeight="500" fontSize="10" letterSpacing="0.5px">
            Electric
          </text>
        </svg>
      ),
    },
    {
      name: 'Siemens',
      svg: (
        <svg viewBox="0 0 130 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* Siemens bold geometric uppercase logo */}
          <text x="6" y="24" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="18" letterSpacing="1.2px">
            SIEMENS
          </text>
        </svg>
      ),
    },
    {
      name: 'Metrodata Electronics',
      svg: (
        <svg viewBox="0 0 175 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* Metrodata chevron ribbon */}
          <path d="M6 10l9 8-9 8h6l9-8-9-8H6z" fill="currentColor" />
          <text x="28" y="23" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="14" letterSpacing="0.2px">
            METRODATA
          </text>
        </svg>
      ),
    },
  ];

  // Row 2: IoT, Edge Devices, Cloud Platforms & Hyperscalers (13 Brands)
  const row2Brands: BrandLogoItem[] = [
    {
      name: 'Advantech',
      svg: (
        <svg viewBox="0 0 155 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* Advantech Industrial A emblem */}
          <path d="M7 26L16 8l9 18h-4.5l-2-4.5h-5L11.5 26H7zm7.5-8.5h3l-1.5-4-1.5 4z" fill="currentColor" />
          <text x="30" y="23" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="15" letterSpacing="0.3px">
            ADVANTECH
          </text>
        </svg>
      ),
    },
    {
      name: 'Milesight',
      svg: (
        <svg viewBox="0 0 140 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* Milesight optical beacon M */}
          <path d="M6 25V11l5 7 5-7v14h-3V16l-2 3-2-3v9H6z" fill="currentColor" />
          <circle cx="24" cy="18" r="5" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="24" cy="18" r="1.8" fill="currentColor" />
          <text x="35" y="23" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="15" letterSpacing="-0.3px">
            Milesight
          </text>
        </svg>
      ),
    },
    {
      name: 'Teltonika',
      svg: (
        <svg viewBox="0 0 150 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* Teltonika polygon mark */}
          <polygon points="6,18 13,8 23,8 16,18 23,28 13,28" fill="currentColor" />
          <text x="29" y="23" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="14" letterSpacing="0.8px">
            TELTONIKA
          </text>
        </svg>
      ),
    },
    {
      name: 'AWS IoT Core',
      svg: (
        <svg viewBox="0 0 160 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* AWS smile + IoT cube */}
          <text x="6" y="22" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="16" letterSpacing="-0.5px">
            aws
          </text>
          <path d="M6 26c6 3 14 3 20 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M24 25l3 2-1-3z" fill="currentColor" />
          <text x="35" y="22" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="13" letterSpacing="0.3px">
            IoT Core
          </text>
        </svg>
      ),
    },
    {
      name: 'Google Cloud IoT',
      svg: (
        <svg viewBox="0 0 175 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* Google Cloud hexagon cluster */}
          <polygon points="14,9 22,13 22,23 14,27 6,23 6,13" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="14" cy="18" r="2.5" fill="currentColor" />
          <text x="29" y="19" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="12" letterSpacing="-0.2px">
            Google Cloud
          </text>
          <text x="29" y="29" fontFamily="system-ui, sans-serif" fontWeight="500" fontSize="9" letterSpacing="1px">
            IoT PLATFORM
          </text>
        </svg>
      ),
    },
    {
      name: 'ThingsBoard',
      svg: (
        <svg viewBox="0 0 155 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* Thingsboard IoT node telemetry */}
          <polygon points="14,8 23,13 23,23 14,28 5,23 5,13" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <line x1="14" y1="8" x2="14" y2="28" stroke="currentColor" strokeWidth="1.8" />
          <line x1="5" y1="18" x2="23" y2="18" stroke="currentColor" strokeWidth="1.8" />
          <text x="28" y="23" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="14" letterSpacing="-0.3px">
            ThingsBoard
          </text>
        </svg>
      ),
    },
    {
      name: 'Blynk IoT',
      svg: (
        <svg viewBox="0 0 130 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* Blynk lightning B mark */}
          <circle cx="14" cy="18" r="10" fill="currentColor" opacity="0.15" />
          <path d="M14 10l-4 8h5l-2 8 7-9h-5l3-7z" fill="currentColor" />
          <text x="28" y="23" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="15" letterSpacing="-0.2px">
            blynk.io
          </text>
        </svg>
      ),
    },
    {
      name: 'CTI Group',
      svg: (
        <svg viewBox="0 0 135 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* CTI diamond cluster */}
          <polygon points="6,18 14,10 22,18 14,26" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="14" cy="18" r="3" fill="currentColor" />
          <text x="28" y="23" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="15" letterSpacing="0.8px">
            CTI GROUP
          </text>
        </svg>
      ),
    },
    {
      name: 'Google Workspace',
      svg: (
        <svg viewBox="0 0 180 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* Google Workspace multi-segment letter 'W' */}
          <path d="M6 11l4 14 4-9 4 9 4-14h-3l-2.5 9-3.5-8-3.5 8L9 11H6z" fill="currentColor" />
          <text x="28" y="19" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="12" letterSpacing="-0.2px">
            Google
          </text>
          <text x="28" y="29" fontFamily="system-ui, sans-serif" fontWeight="500" fontSize="10" letterSpacing="0.4px">
            Workspace
          </text>
        </svg>
      ),
    },
    {
      name: 'Microsoft Cloud Solution Provider (CSP)',
      svg: (
        <svg viewBox="0 0 175 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* Microsoft 4-square grid */}
          <rect x="6" y="10" width="7" height="7" fill="currentColor" />
          <rect x="15" y="10" width="7" height="7" fill="currentColor" opacity="0.8" />
          <rect x="6" y="19" width="7" height="7" fill="currentColor" opacity="0.8" />
          <rect x="15" y="19" width="7" height="7" fill="currentColor" opacity="0.6" />
          <text x="28" y="20" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="12" letterSpacing="-0.2px">
            Microsoft
          </text>
          <text x="28" y="29" fontFamily="system-ui, sans-serif" fontWeight="500" fontSize="9" letterSpacing="0.5px">
            Cloud Provider (CSP)
          </text>
        </svg>
      ),
    },
    {
      name: 'Biznet Gio Cloud',
      svg: (
        <svg viewBox="0 0 160 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* Biznet Gio infinity loop */}
          <path d="M7 18a5 5 0 0 1 8-3 6 6 0 0 1 10 2 4 4 0 0 1 2 5H7z" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <text x="32" y="19" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="13" letterSpacing="-0.3px">
            biznet
          </text>
          <text x="75" y="19" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="13" letterSpacing="0.5px">
            GIO
          </text>
          <text x="32" y="29" fontFamily="system-ui, sans-serif" fontWeight="500" fontSize="9" letterSpacing="1px">
            CLOUD PLATFORM
          </text>
        </svg>
      ),
    },
    {
      name: 'Eranyacloud',
      svg: (
        <svg viewBox="0 0 150 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* Eranya cloud swoosh */}
          <circle cx="15" cy="18" r="9" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <path d="M10 18c2-4 8-4 10 0s-8 4-10 0z" fill="currentColor" />
          <text x="30" y="23" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="14" letterSpacing="-0.2px">
            eranyacloud
          </text>
        </svg>
      ),
    },
    {
      name: 'Alibaba Cloud',
      svg: (
        <svg viewBox="0 0 155 36" fill="currentColor" className="h-7 sm:h-8 w-auto">
          {/* Alibaba Cloud bracket compute node */}
          <path d="M9 13H6v10h3 M21 13h3v10h-3 M11 18h8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="31" y="23" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="14" letterSpacing="-0.2px">
            Alibaba Cloud
          </text>
        </svg>
      ),
    },
  ];

  // Duplicated arrays for continuous gapless 360-degree sliding
  const marqueeRow1 = [...row1Brands, ...row1Brands];
  const marqueeRow2 = [...row2Brands, ...row2Brands];

  return (
    <section className="relative py-12 sm:py-14 bg-[#090b0e] border-y border-[#23252a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        {/* Monospaced Eyebrow Label (Tuple / Vercel style) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#3ecf8e] shadow-[0_0_6px_#3ecf8e]" />
          <span className="font-mono text-xs font-semibold tracking-widest text-slate-400 uppercase">
            TRUSTED BY LEADING ENTERPRISES & TECHNOLOGY PARTNERS
          </span>
        </motion.div>
      </div>

      {/* Infinite Horizontal Sliding Marquee Container */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] space-y-6">
        {/* Left & Right gradient fade masks for smooth enter/exit edge transitions */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#090b0e] via-[#090b0e]/95 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#090b0e] via-[#090b0e]/95 to-transparent z-10 pointer-events-none" />

        {/* Track 1: Telco & Enterprise Hardware Partners (Sliding Left) */}
        <div className="flex animate-marquee py-1">
          {marqueeRow1.map((brand, idx) => (
            <div
              key={`row1-${brand.name}-${idx}`}
              className="group shrink-0 mx-6 sm:mx-9 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105"
              title={brand.name}
              aria-label={brand.name}
            >
              <div className="text-zinc-500 group-hover:text-[#3ecf8e] transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(62,207,142,0.4)] opacity-70 group-hover:opacity-100">
                {brand.svg}
              </div>
            </div>
          ))}
        </div>

        {/* Track 2: IoT, Cloud & Solution Providers (Sliding Right) */}
        <div className="flex animate-marquee-reverse py-1">
          {marqueeRow2.map((brand, idx) => (
            <div
              key={`row2-${brand.name}-${idx}`}
              className="group shrink-0 mx-6 sm:mx-9 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105"
              title={brand.name}
              aria-label={brand.name}
            >
              <div className="text-zinc-500 group-hover:text-[#3ecf8e] transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(62,207,142,0.4)] opacity-70 group-hover:opacity-100">
                {brand.svg}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
