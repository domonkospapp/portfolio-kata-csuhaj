import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const polonium = localFont({
  src: [
    {
      path: "./fonts/Polonium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Polonium-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-polonium",
});

const cairo = localFont({
  src: [
    {
      path: "./fonts/Cairo.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-cairo",
});

const machina = localFont({
  src: [
    {
      path: "./fonts/NeueMachina-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeueMachina-Ultrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-machina",
});

export const metadata: Metadata = {
  title: "Kata Csuhaj - Communication Designer",
  description:
    "Kata Csuhaj is a communication designer based in Bischofshofen, Austria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${polonium.variable} ${cairo.variable} ${machina.className}`}
    >
      <body className={machina.className}>{children}</body>
    </html>
  );
}
