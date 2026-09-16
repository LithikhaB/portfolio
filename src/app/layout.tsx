import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";
import CursorHalo from "@/components/CursorHalo";
import BackgroundRain from "@/components/BackgroundRain";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body className={`${jetbrainsMono.variable} font-mono`}>
        <ThemeProvider>
          <BackgroundRain />
          <CursorHalo />
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}