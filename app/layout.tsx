import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import Navbar from "@/app/components/Navbar";
import { Analytics } from "@vercel/analytics/next"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juana Mae | Portfolio",
  description: "Personal portfolio showcasing my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            
            <Analytics />
            
        </ThemeProvider>
      </body>
    </html>
  );
}