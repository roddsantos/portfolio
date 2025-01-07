import localFont from "next/font/local";

export const archivo = localFont({
  src: [
    {
      path: "./Archivo-Regular.ttf",
      weight: "400",
    },
    {
      path: "./Archivo-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-archivo",
});

export const archivoitalic = localFont({
  src: [
    {
      path: "./Archivo-Italic.ttf",
      weight: "400",
    },
  ],
  variable: "--font-archivo-italic",
});
