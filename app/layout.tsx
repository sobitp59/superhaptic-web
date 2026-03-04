import type { Metadata } from "next";
import { Figtree, Fira_Code, Literata } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Superhaptic - Haptic Feedback for the Web",
  description: "Bring mobile-like tactile experiences to your web applications with seamless haptic and audio feedback",
  keywords: ["haptic", "vibration", "web", "tactile feedback", "mobile", "ux"],
  authors: [{ name: "Superhaptic" }],
  icons: {
    icon: [
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicons/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicons/favicon-128x128.png', sizes: '128x128', type: 'image/png' },
      { url: '/favicons/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicons/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Superhaptic - Haptic Feedback for the Web",
    description: "Bring mobile-like tactile experiences to your web applications with seamless haptic and audio feedback",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${figtree.variable} ${firaCode.variable} ${literata.variable} antialiased`}
      >
        {children}
        <Script src="https://unpkg.com/@phosphor-icons/web" strategy="afterInteractive" />
      </body>
    </html>
  );
}
