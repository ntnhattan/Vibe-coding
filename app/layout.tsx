import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibe-coding Hello World",
  description: "A simple Next.js + TypeScript + Tailwind starter."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
