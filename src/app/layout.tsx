import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/data";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Premium Real Estate Developers — Surat, Vapi & Silvassa`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Pramukh Group",
    "real estate Gujarat",
    "Surat apartments",
    "Vapi apartments",
    "Silvassa apartments",
    "premium residences",
    "commercial spaces Surat",
  ],
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    type: "website",
    locale: "en_IN",
  },
  icons: { icon: "/images/pramukh-monogram.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-navy text-linen">
        <SmoothScroll>
          <Preloader />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </SmoothScroll>
      </body>
    </html>
  );
}
