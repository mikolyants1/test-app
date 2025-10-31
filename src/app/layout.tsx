import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { init } from '@telegram-apps/sdk-react';
import Script from "next/script";
import { test1 } from "@/utils/index";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task Found - Task Management",
  description: "Manage your tasks efficiently with Task Found",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  test1();
  return (
    <html lang="en">
      <head>
        <Script src='https://telegram.org/js/telegram-web-app.js' strategy='beforeInteractive' />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthProvider>
           {children}
        </AuthProvider>
      </body>
    </html>
  );
}
