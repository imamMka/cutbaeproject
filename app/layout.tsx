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
  title: "CUTBAE Barbershop – Potongan Presisi. Pengalaman Premium. | Karawang",
  description:
    "Barbershop terpercaya di Karawang dengan rating 4.9★. Potong Rambut, Styling, Hot Stone Treatment. Buka setiap hari 09:00–22:00. Booking via WhatsApp.",
  keywords: ["barbershop karawang", "cutbae", "potong rambut karawang", "barber premium karawang"],
  icons: {
    icon: "/logo-cutbae.svg",
  },
  openGraph: {
    title: "CUTBAE Barbershop",
    description: "Potongan Presisi. Pengalaman Premium. Barbershop #1 di Karawang.",
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
