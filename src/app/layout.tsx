import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { TopNavBar } from "@/components/layout/TopNavBar";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/providers/LenisProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EATO | Culinary Curated Delivery",
  description: "Premium Indian food ordering experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen text-on-surface font-body-md bg-[#000000] overflow-x-hidden flex justify-center" suppressHydrationWarning>
        <CustomCursor />
        <LenisProvider>
          <div className="w-full max-w-[1440px] relative bg-background border-x border-white/5 min-h-screen flex flex-col overflow-hidden">
            <TopNavBar />
            {children}
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
