import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "FleetOps",
  description: "Fleet Management System",
icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} bg-gray-100`}>
        <div className="min-h-screen flex flex-col">
          {/* Full Top Navbar */}
          <Navbar />

          {/* Sidebar + Content */}
          <div className="flex flex-1">
            {/* Left Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 p-6 overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}