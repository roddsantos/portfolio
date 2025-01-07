import type { Metadata } from "next";
import "./globals.css";
import "material-symbols";
import { openSans } from "../../public/fonts/opensans";
import { lexendMega } from "@/fonts/lexend-mega";
import { archivo, archivoitalic } from "@/fonts/archivo";

export const metadata: Metadata = {
  title: "Rodrigo Santos",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${lexendMega.variable} ${archivo.variable} ${archivoitalic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
