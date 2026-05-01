import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Signal Foundry | AI Product Strategy Studio",
  description:
    "Transform rough product ideas into launch-ready concepts with AI-powered strategy generation. Get clear positioning, smart feature stacks, and actionable go-to-market plans.",
  keywords: [
    "AI product strategy",
    "product development",
    "startup tools",
    "go-to-market",
    "product positioning",
    "AI strategy generator",
  ],
  authors: [{ name: "Signal Foundry" }],
  openGraph: {
    title: "Signal Foundry | AI Product Strategy Studio",
    description:
      "Transform rough product ideas into launch-ready concepts with AI-powered strategy generation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Signal Foundry | AI Product Strategy Studio",
    description:
      "Transform rough product ideas into launch-ready concepts with AI-powered strategy generation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full bg-background antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
