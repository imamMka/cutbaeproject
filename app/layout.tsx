import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CUTBAE Barbershop – Precision Cut. Premium Experience. | Karawang",
  description:
    "Trusted barbershop in Karawang with 4.9★ rating. Haircut, Styling, Hot Stone Treatment. Open daily 09:00–22:00. Book via WhatsApp.",
  keywords: ["barbershop karawang", "cutbae", "potong rambut karawang", "barber premium karawang"],
  icons: {
    icon: "/logo-cutbae.svg",
  },
  openGraph: {
    title: "CUTBAE Barbershop",
    description: "Precision Cut. Premium Experience. Karawang's #1 Barbershop.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`scroll-smooth ${dmSans.variable} ${dmSerifDisplay.variable}`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
