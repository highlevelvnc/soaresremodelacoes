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

const TITLE =
  "Soares Remodelações | Pladur, Pinturas, Canalização e Remodelações em Portugal";
const DESCRIPTION =
  "Empresa de remodelações em Portugal. Pladur, piso flutuante, canalização, pinturas, ladrilhos e instalação de equipamentos com acabamento profissional. Orçamento sem compromisso pelo WhatsApp.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Soares Remodelações",
  keywords: [
    "remodelações Portugal",
    "remodelações Lisboa",
    "empresa de remodelações",
    "pladur",
    "tetos falsos pladur",
    "piso flutuante",
    "canalização",
    "pinturas interiores e exteriores",
    "ladrilhos",
    "azulejos",
    "instalação de equipamentos",
    "remodelação de cozinhas",
    "remodelação de casas de banho",
    "Soares Remodelações",
  ],
  authors: [{ name: "Soares Remodelações" }],
  creator: "Soares Remodelações",
  publisher: "Soares Remodelações",
  metadataBase: new URL("https://soaresremodelacoes.pt"),
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://soaresremodelacoes.pt",
    locale: "pt_PT",
    type: "website",
    siteName: "Soares Remodelações",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Soares Remodelações — Remodelações com qualidade em Portugal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  category: "Construção e remodelações",
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
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
