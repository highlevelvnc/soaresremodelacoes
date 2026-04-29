import type { Metadata, Viewport } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-work-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Soares Remodelações | Remodelações, Pladur, Pinturas e Canalização",
  description:
    "Serviços de remodelação, pladur, piso flutuante, canalização, pinturas, ladrilhos e instalação de equipamentos em Portugal.",
  keywords: [
    "remodelações",
    "pladur",
    "piso flutuante",
    "canalização",
    "pinturas",
    "ladrilhos",
    "instalação de equipamentos",
    "Portugal",
    "Soares Remodelações",
  ],
  authors: [{ name: "Soares Remodelações" }],
  metadataBase: new URL("https://soaresremodelacoes.pt"),
  openGraph: {
    title: "Soares Remodelações | Remodelações com qualidade em Portugal",
    description:
      "Serviços de remodelação, pladur, piso flutuante, canalização, pinturas, ladrilhos e instalação de equipamentos.",
    locale: "pt_PT",
    type: "website",
    siteName: "Soares Remodelações",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soares Remodelações",
    description:
      "Remodelações, pladur, pinturas, canalização e ladrilhos em Portugal.",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className={`${workSans.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
