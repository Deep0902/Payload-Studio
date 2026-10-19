import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./scroll.css";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Payload Studio | JSON and XML Editor",
    template: "%s | Payload Studio",
  },
  description:
    "Validate, explore, and edit JSON and XML payloads in your browser. Inspect nested data in tree or table views and make quick corrections in place.",
  applicationName: "Payload Studio",
  keywords: [
    "JSON editor",
    "XML editor",
    "JSON validator",
    "XML validator",
    "JSON viewer",
    "XML viewer",
    "JSON tree viewer",
    "XML tree viewer",
    "JSON table view",
    "XML table view",
    "payload inspector",
    "Payload Studio",
  ],
  icons: {
    icon: "/code.svg",
    shortcut: "/code.svg",
    apple: "/code.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Payload Studio",
    title: "Payload Studio | JSON and XML Editor",
    description:
      "Validate, explore, and edit JSON and XML payloads in your browser with interactive tree and table views.",
  },
  twitter: {
    card: "summary",
    title: "Payload Studio | JSON and XML Editor",
    description:
      "Validate, explore, and edit JSON and XML payloads in your browser with interactive tree and table views.",
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
  category: "developer tools",
  verification: {
    google: "tSXpeMbPETyEgRx18FiMxCpxY7Q4A0R_Uvd99k9E6ok",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Payload Studio",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  description:
    "A browser-based tool to validate, explore, and edit JSON and XML payloads using interactive tree and table views.",
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
