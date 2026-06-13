import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Elevate X Solutions | Premium Digital Agency",
  description: "Websites That Turn Visitors Into Customers. Elevate X Solutions builds high-converting websites, landing pages, and custom web applications.",
  openGraph: {
    title: "Elevate X Solutions",
    description: "Websites That Turn Visitors Into Customers.",
    url: "https://elevatexsolutions.com",
    siteName: "Elevate X Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-purple-500/30`}
      >
        {children}
      </body>
    </html>
  );
}
