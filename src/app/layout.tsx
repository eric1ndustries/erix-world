import type { Metadata } from "next";
import { Playfair_Display, DM_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Erix World — Digital Archive",
  description: "A living archive of digital media, found objects & the music that never left the room.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${playfairDisplay.variable}
          ${dmMono.variable}
          ${cormorantGaramond.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
