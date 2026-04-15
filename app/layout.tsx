import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
});


export const metadata: Metadata = {
  title: "Salaojaexpertit | Luotettavat salaojaremontit",
 description: "Ammattitaitoiset salaojien tarkistukset, huollot ja remontit koko Suomen alueella. Pyydä ilmainen arvio!",
  keywords: ["salaojat", "salaojaremontti", "kosteuseristys", "rakentaminen"],
  authors: [{ name: "Salaojaexpertit Oy" }],
  icons: {
    icon: "/favicon.jpeg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
