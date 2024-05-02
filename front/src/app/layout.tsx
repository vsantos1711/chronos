import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Chronos",
  description: "O aplicativo de rastreamento de tempo para humanos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-stone-950 font-sans antialiased",
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
