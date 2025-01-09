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
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body
        className={`${openSans.variable} ${lexendMega.variable} ${archivo.variable} ${archivoitalic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
