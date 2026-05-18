import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Secure Ecommerce FMCG Goods Agency (SEFGA) - Disclaimer",
  description: "Disclaimer for SEFGA ecommerce procurement assistance.",
  icons: {
    icon: "/favicon.ico?v=sefga",
    shortcut: "/favicon.ico?v=sefga",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="flex flex-col relative min-h-screen">
        {/* SVG filter needed for glassmorphism */}
        <svg className="pointer-events-none absolute -z-50 h-0 w-0" aria-hidden="true">
          <defs>
            <filter id="glass-distortion">
              <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
        </svg>

        {children}
      </body>
    </html>
  );
}
