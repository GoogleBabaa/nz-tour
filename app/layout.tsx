import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NZ Travel and Tours",
  description: "Journey to your dream destination with NZ Travel & Tours.",
  icons: { icon: "/images/favicon.jpg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
