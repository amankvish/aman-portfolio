import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Aman Vishwakarma | Software Engineer & Automation Expert",
  description: "Building Scalable Systems & Intelligent Automation. Portfolio of Aman Vishwakarma, a production-ready software engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased relative">
        
        <Navbar />

        <main className="flex-1 w-full relative z-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
