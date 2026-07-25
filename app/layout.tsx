import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BottomNav } from "@/components/bottom-nav";

export const metadata: Metadata = {
  title: "Koledzy App",
  description: "Osobisty asystent zdrowia, żywienia i treningów.",
  applicationName: "Koledzy App",
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#2e7d4f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body>
        <div className="app-shell">
          <header className="topbar">
            <div className="brand"><span className="brand-mark">K</span>Koledzy App</div>
            <span className="status">Etap 1</span>
          </header>
          {children}
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
