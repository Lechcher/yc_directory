import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import "easymde/dist/easymde.min.css";
import { Toaster } from "@/components/ui/toaster";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "YC Directory",
  description: "Pitch, Vote and Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
