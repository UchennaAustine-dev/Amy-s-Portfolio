import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ammy Ogunbiyi | Backend Developer & API Engineer",
  description:
    "Backend Software Developer crafting resilient APIs, data services, and scalable systems with TypeScript, Node.js, and cloud tooling. Specialized in Node.js, Express, MongoDB, and distributed systems.",
  keywords: [
    "Backend Developer",
    "Node.js Developer",
    "TypeScript",
    "API Development",
    "Full Stack Engineer",
    "Lagos Developer",
    "Software Engineer",
    "Express.js",
    "MongoDB",
    "Distributed Systems",
  ],
  authors: [{ name: "Ammy Ogunbiyi", url: "https://amidathtc.vercel.app" }],
  creator: "Ammy Ogunbiyi",
  publisher: "Ammy Ogunbiyi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.amidat.tech/",
    siteName: "Ammy Ogunbiyi - Backend Developer",
    title: "Ammy Ogunbiyi | Backend Developer & API Engineer",
    description:
      "Backend Software Developer crafting resilient APIs, data services, and scalable systems with TypeScript, Node.js, and cloud tooling.",
    images: [
      {
        url: "https://www.amidat.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ammy Ogunbiyi - Backend Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ammy Ogunbiyi | Backend Developer",
    description:
      "Building resilient APIs and scalable systems with TypeScript and Node.js",
    creator: "@amidathtc",
    images: ["https://www.amidat.tech/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://www.amidat.tech/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ammy Ogunbiyi",
    url: "https://www.amidat.tech/",
    sameAs: [
      "https://github.com/Amidathtc",
      "https://linkedin.com",
      "https://twitter.com",
      "https://medium.com/@ogunbiyiamidat",
    ],
    jobTitle: "Backend Developer",
    worksFor: {
      "@type": "Organization",
      name: "Self-employed",
    },
    image: "https://www.amidat.tech/og-image.png",
    description:
      "Backend Software Developer crafting resilient APIs, data services, and scalable systems",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "ogunbiyiamidat65@gmail.com",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${poppins.variable} font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
