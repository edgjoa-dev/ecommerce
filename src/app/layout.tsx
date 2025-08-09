import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";

const robotoFont = Roboto ({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Sandbox Next App",
  description: "Esto es un sandbox de Next.js para probar diferentes funcionalidades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
