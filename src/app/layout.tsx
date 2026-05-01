import type { Metadata, Viewport } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
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
  themeColor: "#f4efe4",
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
      className={`${spaceGrotesk.variable} ${fraunces.variable} h-full bg-background antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
