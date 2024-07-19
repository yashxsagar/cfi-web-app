import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Bricolage_Grotesque } from "next/font/google";

const grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-grotesque",
});

export const metadata: Metadata = {
  title: "Ctrl+F on steroids",
  description:
    "A Fuzzy Finder for your webspace. TabX is a Chrome extension for indexing and filtering open Chrome Tabs in a user's machine based on a user provided search query. This is meant to improve and expedite information retrieval at a user's whim. It's helpful verified utility for professionals like software devs, students, researchers, lawyers, copywriters, etc. for whom fast and accurate knowledge retention and retrieval is of utmost importance but they can't keep 100s of Chrome tabs open all the time on their machine due to RAM limitations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={grotesque.className}>{children}</body>
    </html>
  );
}
