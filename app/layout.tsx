import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const font = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aleksi Kaistinen - Software Developer Resume",
  description:
    "Software developer with a passion for building slick user experiences and robust backends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={font.className}>{children}</body>
    </html>
  );
}
