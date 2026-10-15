import type { Metadata } from 'next';
import './globals.css';
import { company } from '@/config/company';
import { Geist } from 'next/font/google';
const geist = Geist({subsets:['latin'],variable:'--font-geist',display:'swap'});
const title = 'Studio Notreve | Desenvolvimento Web, Sistemas e IA';
const description = 'Studio Notreve: desenvolvimento de sites, sistemas personalizados, agentes de IA para WhatsApp e automações para empresas.';
export const metadata: Metadata = {
  title, description,
  metadataBase: new URL(company.url || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:4173')),
  ...(company.url ? { alternates: {canonical:'/'} } : {}),
  openGraph: { title, description, locale:'pt_BR', type:'website', siteName:company.name, images:[{url:'/og.png',width:1200,height:630,alt:'Studio Notreve — Tecnologia com intenção.'}] },
  twitter: {card:'summary_large_image',title,description,images:['/og.png']},
};
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) {
  return <html lang="pt-BR"><body className={geist.variable}>{children}</body></html>;
}
