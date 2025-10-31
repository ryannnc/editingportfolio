import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
const sfPro = localFont({
  src: [
    { path: "./font/sfprodisplayregular.otf", weight: "400", style: "normal" },
    { path: "./font/sfprodisplaymedium.otf", weight: "500", style: "normal" },
    { path: "./font/sfprodisplaybold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-sf-pro",
  display: "swap", // optional but recommended
});

export const metadata: Metadata = {
  title: "Ryan Cao's Portfolio",
  description: "Ryan Cao’s Editing Portfolio",
  icons: {
    icon: "/pfp.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
<body
        className={`${sfPro.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
