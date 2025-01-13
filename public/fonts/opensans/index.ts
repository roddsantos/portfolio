import localFont from "next/font/local";

export const openSans = localFont({
  src: [
    {
      path: "./OpenSans-Light.ttf",
      weight: "300",
    },
    {
      path: "./OpenSans-Regular.ttf",
      weight: "400",
    },
    {
      path: "./OpenSans-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./OpenSans-Bold.ttf",
      weight: "700",
    },
    {
      path: "./OpenSans-ExtraBold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-open-sans",
});

export const openSansItalic = localFont({
  src: [{ path: "./OpenSans-Italic.ttf", weight: "400" }],
  variable: "--font-open-sans-italic",
});
