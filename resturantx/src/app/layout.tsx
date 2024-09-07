import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MenuX",
  description: "Next js website resturants menus done by Mohamad Hassan Professional web developer specializing in modern web technologies. Connect with me on LinkedIn or call at 70307596 for inquiries.",
  openGraph: {
    title: "MenuX",
    description: "Next js website resturants menus done by Mohamad Hassan Professional web developer specializing in modern web technologies. Connect with me on LinkedIn or call at 70307596 for inquiries.",
    url: "https://www.linkedin.com/in/moh11011/",
    siteName: "MenuX",
    locale: "en_US",
    type: "website",
  },
  other: {
    'contact:phone_number': '70307596'
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
