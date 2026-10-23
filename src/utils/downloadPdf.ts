/**
 * Utility to trigger download of the official B2B Company Profile PDF
 */
export const OFFICIAL_PDF_URL = '/assets/aistudio/Company_Profile_-_Enterprise_Infrastructure_73f20085.pdf';
export const OFFICIAL_PDF_FILENAME = 'Company Profile - TECH-INTEGRATOR.pdf';

export function triggerCompanyProfileDownload(): void {
  const link = document.createElement('a');
  link.href = OFFICIAL_PDF_URL;
  link.download = OFFICIAL_PDF_FILENAME;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
