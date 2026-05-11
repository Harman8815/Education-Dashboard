import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduAdmin - Transform Education Management with Advanced Analytics",
  description: "Comprehensive education management platform with real-time analytics, teacher management tools, and student performance tracking. Empower institutions to achieve excellence.",
  keywords: "education management, student analytics, teacher management, school administration, learning analytics, educational technology",
  authors: [{ name: "EduAdmin Team" }],
  creator: "EduAdmin",
  publisher: "EduAdmin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://eduadmin.com"),
  alternates: {
    canonical: "https://eduadmin.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eduadmin.com",
    title: "EduAdmin - Transform Education Management",
    description: "Comprehensive education management platform with real-time analytics, teacher management tools, and student performance tracking.",
    siteName: "EduAdmin",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EduAdmin - Education Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EduAdmin - Transform Education Management",
    description: "Comprehensive education management platform with real-time analytics and teacher management tools.",
    images: ["/twitter-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
