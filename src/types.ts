export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  sla: string;
  features: string[];
  deliverables: string[];
  typicalClients: string;
}

export interface RfqFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  selectedServices: string[];
  projectScale: string;
  timeline: string;
  notes: string;
}

export interface ValuePillar {
  title: string;
  description: string;
  point: string;
  iconName: string;
}
