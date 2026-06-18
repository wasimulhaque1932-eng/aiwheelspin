import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIWheelSpin – AI-Powered Decision & Giveaway Platform",
  description:
    "1,000+ AI-powered decision tools. Spin wheels, pick winners, generate ideas, plan teams — instantly. The world's smartest decision platform.",
  keywords:
    "spin wheel, decision wheel, giveaway winner picker, AI decision maker, random name picker, team generator",
  openGraph: {
    title: "AIWheelSpin – AI-Powered Decision Platform",
    description: "Stop overthinking. Let AI decide for you.",
    type: "website",
    url: "https://aiwheelspin.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIWheelSpin – AI-Powered Decision Platform",
    description: "Stop overthinking. Let AI decide for you.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HH68LZLXPD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HH68LZLXPD');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
