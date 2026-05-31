import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { Providers } from "./providers"; 

export const metadata: Metadata = {
  title: "SunCart – Summer Essentials Store",
  description: "Your one-stop summer shop.",
  keywords: ["summer", "beach", "sunglasses", "skincare", "accessories"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="suncart" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-[#0f0a00] text-[#fef3c7] antialiased">
        <Providers>
          <Navbar />
          <main className="flex-1 mt-20">{children}</main>
          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#1c1409",
                color: "#fef3c7",
                border: "1px solid rgba(245,158,11,0.3)",
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}