import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hospital & Wellness Center",
  description: "Advanced Cancer Care, Diagnostics, and Ayurveda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
