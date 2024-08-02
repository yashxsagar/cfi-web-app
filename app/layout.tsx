import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Bricolage_Grotesque } from "next/font/google";
import dynamic from "next/dynamic";

const ClientStateContextProvider = dynamic(
  () =>
    import("./context/ClientStateContext").then(
      (mod) => mod.ClientStateContextProvider
    ),
  {
    ssr: false, // Disable server-side rendering for the provider
  }
);

const grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-grotesque",
});

export const metadata: Metadata = {
  title: "PayUp Bro!",
  description:
    "A simple and highly accurate compensation asessment tool for professionals in the US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={grotesque.className}>
        <ClientStateContextProvider>{children}</ClientStateContextProvider>
      </body>
    </html>
  );
}
