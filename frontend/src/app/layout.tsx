import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { cn } from "@/shared/utils/clsx";
import "../shared/styles/globals.css";
import { MainProvider } from "@/shared/providers";
import { ToggleTheme } from "@/shared/components/ui";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    absolute: "Проект по авторизации",
    template: "%s | авторизация",
  },
  description: "Учебный проект по фуллстак авторизации",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <MainProvider>
          <div className="relative flex min-h-screen flex-col">
            <ToggleTheme />
            <div className="flex  w-full align-content-center justify-center">
              {children}
            </div>
          </div>
        </MainProvider>
      </body>
    </html>
  );
}
