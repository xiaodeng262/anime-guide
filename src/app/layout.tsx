import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Guide",
  description: "追番向导",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ minWidth: "800px" }} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
