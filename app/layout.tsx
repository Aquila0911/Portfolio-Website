import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

// Project Font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

// Title, Description, FavIcon
export const metadata: Metadata = {
  title: "Siddharth's Portfolio",
  icons: {
    icon: "/favicon-32x32.png",
  },
  description: "Modern portfolio using NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
