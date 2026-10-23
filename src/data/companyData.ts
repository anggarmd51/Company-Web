import { ServiceItem, ValuePillar } from '../types';

export const COMPANY_INFO = {
  name: 'TECH-INTEGRATOR',
  tagline: 'Mitra Strategis Infrastruktur IT, Jaringan & IoT Terpercaya',
  subheadline:
    'Menyediakan solusi terintegrasi infrastruktur telekomunikasi, layanan kelolaan IT (MSP), dan otomasi industri IoT berstandar korporasi dengan jaminan respons teknis on-site < 2 jam di Medan dan seluruh Sumatera Utara.',
  phoneDisplay: '+62 812-3456-7890',
  whatsappNumber: '6281234567890',
  email: 'sales@tech-integrator.co.id',
  address: 'Komp. Graha Niaga Medan, Jl. Gatot Subroto No. 88, Medan Kota, Sumatera Utara 20114',
  hours: 'Senin - Jumat: 08:30 - 17:30 WIB | NOC & On-Site Support: 24/7/365',
  serviceAreas: [
    'Kawasan Industri Medan (KIM 1-4 Mabar)',
    'Pelabuhan Belawan & Logistics Hub',
    'Tanjung Morawa & Deli Serdang',
    'Binjai & Langkat',
    'Tebing Tinggi & Pematangsiantar',
    'Rantauprapat & Labuhanbatu',
  ],
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'network-connectivity',
    number: '01',
    title: 'Smart Network & Connectivity',
    shortDesc:
      'Infrastruktur konektivitas enterprise berkecepatan tinggi dengan SLA 99.9%, multi-homing uplink, dan arsitektur SD-WAN terdistribusi.',
    fullDesc:
      'Dirancang untuk operasional korporasi yang menuntut uptime mutlak tanpa kompromi. Kami menyediakan jaringan Dedicated Internet Access (1:1), interkoneksi antar-kantor cabang (Metro-E & Leased Line), SD-WAN pintar untuk optimasi bandwidth, serta sistem telekomunikasi IP-PBX / VoIP hemat biaya.',
    iconName: 'Network',
    sla: 'SLA Uptime 99.9% Guaranteed',
    features: [
      'Dedicated Internet Access (Bandwidth Simetris 1:1, Rasio Murni)',
      'SD-WAN Multi-Branch & Dynamic Link Failover Otomatis',
      'Metro Ethernet, MPLS, & Dark Fiber Leased Line Antar-Site',
      'Enterprise IP-PBX, SIP Trunking & Voice-over-IP Hybrid',
    ],
    deliverables: [
      'Pemasangan Perangkat Router Enterprise (Cisco / Fortinet / MikroTik CCR)',
      'Dokumentasi Topologi Jaringan & Pengujian Bit Error Rate (BER)',
      'Dashboard Real-time Bandwidth Monitoring untuk Tim IT Internal',
      'Layanan NOC 24/7 dengan Penanganan Tiket Prioritas',
    ],
    typicalClients: 'Kantor Korporasi, Head Office Perkebunan, Bank & Lembaga Keuangan, Pusat Distribusi Logistik',
  },
  {
    id: 'managed-it-infrastructure',
    number: '02',
    title: 'Managed IT & Infrastructure Services',
    shortDesc:
      'Layanan kelolaan IT terpadu (MSP), Wi-Fi 6 berdensitas tinggi, penataan kabel terstruktur (LAN Cat6/Fiber), dan NOC 24/7.',
    fullDesc:
      'Hilangkan beban operasional tim internal Anda. Kami bertindak sebagai perpanjangan tangan departemen IT Anda untuk mengelola seluruh ekosistem server, switch, access point, hingga workstation pengguna dengan pendekatan proaktif.',
    iconName: 'ServerCog',
    sla: 'Respons Tiket < 15 Menit & NOC 24/7',
    features: [
      'Managed Service Provider (MSP) Kontrak Fleksibel (OpEx Model)',
      'Managed Enterprise Wi-Fi 6 (Seamless Roaming, Captive Portal Tamu)',
      'Structured Cabling System (Instalasi Fiber Optic & Cat6A UTP Bergaransi)',
      '24/7 NOC Monitoring dengan Pemantauan Proaktif Sebelum Terjadi Downtime',
    ],
    deliverables: [
      'Audit Berkala Kesehatan Server, Switching & Endpoint',
      'Penyediaan On-site Engineer Standby untuk Kantor & Pabrik di Medan',
      'Sistem Tiketing Terstruktur dengan Laporan SLA Bulanan Transparan',
      'Manajemen Patching Keamanan & Update Firmware Rutin',
    ],
    typicalClients: 'Pabrik Manufaktur, Rumah Sakit Swasta & Klinik, Hotel Berbintang, Kampus & Sekolah Tinggi',
  },
  {
    id: 'iot-industrial-automation',
    number: '03',
    title: 'IoT & Industrial Automation',
    shortDesc:
      'Sensor cerdas untuk pemantauan utilitas pabrik, pelacakan armada/aset real-time, dan pengawasan Smart CCTV analitik berbasis AI.',
    fullDesc:
      'Modernisasi fasilitas industri dan rantai pasok di Sumatera Utara. Kami mengintegrasikan sensor IoT industri (LoRaWAN / NB-IoT / Modbus) ke dalam dashboard visual untuk pemantauan konsumsi energi listrik, level tangki CPO/air, suhu cold storage, serta CCTV AI cerdas.',
    iconName: 'Cpu',
    sla: 'Sensor Telemetri Akurasi Tinggi & Real-time Alert',
    features: [
      'Smart Utility & Energy Monitoring (Listrik 3-Phase, Suhu, Tangki Industri)',
      'Smart CCTV AI Analytics (Deteksi APD, Plat Kendaraan ANPR, Perimeter Intrusion)',
      'Fleet & Asset Tracking (GPS Tracker dengan Telemetri Bahan Bakar & Rute)',
      'Integrasi Sensor SCADA / Modbus ke Cloud Telemetri Dashboard',
    ],
    deliverables: [
      'Instalasi Sensor Industrial-Grade Tahan Debu & Cuaca Ekstrem (IP67/IP68)',
      'Portal Web Dashboard & Notifikasi WhatsApp Alert Otomatis ke Tim Lapangan',
      'Gateway IoT LoRaWAN / Cellular Industrial dengan Baterai Cadangan',
      'Pelatihan Operasional Dashboard untuk Operator & Supervisor Pabrik',
    ],
    typicalClients: 'Kawasan Industri Mabar (KIM), Pabrik Kelapa Sawit (PKS), Gudang Logistik Belawan, Cold Storage',
  },
  {
    id: 'cloud-cybersecurity',
    number: '04',
    title: 'Cloud & Cybersecurity Services',
    shortDesc:
      'Perlindungan perimeter Next-Gen Firewall, proteksi Ransomware, pencadangan data otomatis (BaaS), dan migrasi Cloud aman.',
    fullDesc:
      'Lindungi aset digital dan kontinuitas bisnis perusahaan Anda dari ancaman siber modern. Kami menghadirkan arsitektur keamanan multi-layer mulai dari Next-Gen Firewall (Fortinet / Sophos / Palo Alto), solusi endpoint EDR, hingga strategi Disaster Recovery otomatis.',
    iconName: 'ShieldCheck',
    sla: 'Proteksi Endpoint 99.9% & Disaster Recovery RPO < 1 Jam',
    features: [
      'Next-Gen Firewall (NGFW), VPN Korporasi Aman & Web Content Filtering',
      'Automated Immutable Backup & Disaster Recovery as a Service (DRaaS)',
      'Endpoint Detection & Response (EDR) Terhadap Serangan Ransomware',
      'Migrasi Hybrid Cloud & Virtualisasi Data Center Lokal (Proxmox / VMware)',
    ],
    deliverables: [
      'Konfigurasi Kebijakan Firewall & Segmentasi Jaringan VLAN Ketat',
      'Sistem Replikasi Backup Terenkripsi ke Cloud / Off-Site Storage Terisolasi',
      'Uji Simulasi Pemulihan Bencana (Disaster Recovery Drill) Periodik',
      'Vulnerability Assessment & Laporan Audit Keamanan Jaringan',
    ],
    typicalClients: 'Perusahaan Finance & Fintech, Distributor Multinasional, Kantor Hukum & Notaris, Rumah Sakit',
  },
  {
    id: 'it-procurement-integration',
    number: '05',
    title: 'IT Procurement & System Integration',
    shortDesc:
      'Pengadaan hardware tier-1 resmi (Server, Switch, Storage, UPS), perizinan lisensi resmi enterprise, dan integrasi turnkey siap pakai.',
    fullDesc:
      'Satu pintu pengadaan kebutuhan IT perusahaan dengan garansi distributor resmi Indonesia. Dari pengadaan server rak, SAN storage, switch core 10G/40G, UPS modular, hingga lisensi Microsoft 365, Google Workspace, dan OS Windows Server.',
    iconName: 'Boxes',
    sla: 'Garansi Resmi Distributor & Garansi Penggantian Cepat',
    features: [
      'Server & Storage Enterprise (Dell PowerEdge, HPE ProLiant, Lenovo ThinkSystem)',
      'Enterprise Network Hardware (Cisco Catalyst, Aruba CX, Ruijie Reyee)',
      'Perizinan Lisensi Resmi Korporasi (Microsoft Enterprise, VMware, Antivirus EDR)',
      'Turnkey Data Center Physical Setup (Rack Server, PDU, Cable Management, Precision AC)',
    ],
    deliverables: [
      'Peralatan Resmi Lengkap dengan Dokumen Garansi Purna Jual Distributor Resmi',
      'Jasa Perakitan, Staging, Burn-in Test, dan Instalasi On-Site di Medan',
      'Dokumentasi Serial Number & Labeling Aset IT Standar Internasional',
      'Opsi Skema Pembayaran Fleksibel (B2B Term of Payment / Sewa Guna Usaha)',
    ],
    typicalClients: 'Instansi Pemerintah, Perusahaan BUMN & Swasta Nasional, Rantai Ritel, Perkantoran Baru',
  },
];

export const VALUE_PILLARS: ValuePillar[] = [
  {
    title: 'Integritas & Kepercayaan',
    point: 'Transparansi Spesifikasi & Kontrak SLA Tegas',
    description:
      'Kami menggunakan hardware 100% bergaransi resmi, tanpa komponen rekondisi, dengan parameter SLA performa yang diikat dalam kontrak hukum yang jelas dan transparan.',
    iconName: 'CheckCircle2',
  },
  {
    title: 'Inovasi Praktis',
    point: 'Solusi Tepat Guna Tanpa Over-Engineering',
    description:
      'Kami merancang arsitektur IT dan IoT yang langsung menjawab efisiensi biaya operasional (OpEx) dan stabilitas kerja, bukan sekadar mengejar tren teknologi yang membebani anggaran.',
    iconName: 'Lightbulb',
  },
  {
    title: 'Keunggulan & Profesionalisme',
    point: 'Insinyur Tersertifikasi & Prosedur Terstandarisasi',
    description:
      'Dukungan langsung oleh tim insinyur teknis berpengalaman dengan sertifikasi industri (CCNA/CCNP, NSE, MTCNA/MTCRE) yang terlatih menangani skenario downtime kritis.',
    iconName: 'Award',
  },
];

export const KEY_METRICS = [
  {
    value: '99.9%',
    label: 'Jaminan SLA Uptime Jaringan',
    subtext: 'Koneksi dedicated bergaransi kompensasi',
  },
  {
    value: '< 2 Jam',
    label: 'On-Site Technical Response',
    subtext: 'Area Medan, KIM Mabar, & Deli Serdang',
  },
  {
    value: '150+',
    label: 'Implementasi Enterprise & B2B',
    subtext: 'Manufaktur, perkebunan, hingga ritel',
  },
  {
    value: '24/7/365',
    label: 'NOC & Desk Dukungan Pelanggan',
    subtext: 'Pemantauan proaktif tanpa henti',
  },
];

export const CASE_STUDIES = [
  {
    clientType: 'Pabrik Manufaktur & Pengolahan CPO',
    location: 'Kawasan Industri Medan (KIM 2)',
    challenge: 'Downtime jaringan fiber yang sering menghentikan input sistem timbangan truk dan sistem ERP gudang.',
    solution: 'Pemasangan link Dedicated Internet ganda dengan SD-WAN auto failover, ditambah CCTV AI pemantau tangki.',
    outcome: '0% jam kerja terhenti akibat downtime jaringan selama 14 bulan berturut-turut, efisiensi waktu timbang +42%.',
  },
  {
    clientType: 'Perusahaan Logistik & Forwarding',
    location: 'Belawan, Sumatera Utara',
    challenge: 'Konektivitas nirkabel lemah di area dermaga dan gudang seluas 18.000 m² yang menyebabkan scanner barcode lambat.',
    solution: 'Implementasi Industrial Mesh Wi-Fi 6 berdaya jangkau tinggi dengan 24 titik AP outdoor IP67 tahan korosi uap laut.',
    outcome: 'Latensi jaringan turun dari 240ms ke < 8ms, throughput data logistik real-time tanpa delay sinkronisasi.',
  },
];
